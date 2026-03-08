import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatExpansionModule, MatCardModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
