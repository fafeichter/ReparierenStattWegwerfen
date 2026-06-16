import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sale-checklist',
  imports: [MatCardContent, MatDivider, MatCard, RouterLink, MatCheckbox, MatIcon],
  templateUrl: './sale-checklist.html',
  styleUrl: './sale-checklist.css',
})
export class SaleChecklist {}
