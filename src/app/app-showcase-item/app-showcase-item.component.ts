import { MatChipsModule } from '@angular/material/chips';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface ShowcaseItem {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  selector: 'app-showcase-item',
  templateUrl: './app-showcase-item.component.html',
  styleUrls: ['./app-showcase-item.component.scss'],
})
export class AppShowcaseItemComponent {
  @Input() item!: ShowcaseItem;

  getInitials(name: string): string {
    return name.split(' ').map(word => word[0]).join('');
  }
}
