import { Component } from '@angular/core';
import { AppTreeComponent, CategoryNode } from './app-tree/app-tree.component'; // Import the standalone AppTree component
import { AppShowcaseComponent } from './app-showcase/app-showcase.component'; // Import the standalone AppShowcase component
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


interface Item {
  title: string;
  description: string;
  category: string;
  image?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,  // Mark the component as standalone

  imports: [AppTreeComponent, AppShowcaseComponent, MatToolbarModule, MatSidenavModule], // Import the standalone components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedNode: CategoryNode | null = null;

  onNodeSelected(node: CategoryNode): void {
    this.selectedNode = node;
    //  this.items = this.generateItemsForNode(node); // Generate items for the selected node
    //  console.log('items', this.items);
  }
}
