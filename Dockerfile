# ---------- Build stage ----------
FROM node:26-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build SSG
RUN npm run build


# ---------- Runtime stage ----------
FROM nginx:1.31-alpine

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static build
COPY --from=builder /app/dist/reparieren-statt-wegwerfen/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
