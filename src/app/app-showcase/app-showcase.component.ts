import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppShowcaseItemComponent } from '../app-showcase-item/app-showcase-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CategoryNode } from '../app-tree/app-tree.component';
import { dataSource } from '../../datasource';

export interface ShowcaseItem {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

@Component({
  standalone: true,
  selector: 'app-showcase',
  imports: [CommonModule, AppShowcaseItemComponent],
  templateUrl: './app-showcase.component.html',
  styleUrls: ['./app-showcase.component.scss'],
})
export class AppShowcaseComponent implements OnChanges {
  items: ShowcaseItem[] = [];

  @Input() selectedCategory: CategoryNode | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory']) {
      this.items = dataSource.filter(x => x.category.startsWith(changes['selectedCategory'].currentValue.name))
    }
  }
}
