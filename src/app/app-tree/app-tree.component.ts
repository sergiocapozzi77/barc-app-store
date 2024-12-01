import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TREE_DATA } from './TREE_DATA';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface CategoryNode {
  name: string;
  children?: CategoryNode[];
}

/**
 * @title Tree with flat nodes (childrenAccessor)
 */
@Component({
  selector: 'app-tree',
  templateUrl: './app-tree.component.html',
  styleUrls: ['./app-tree.component.scss'],
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTreeComponent {
  dataSource = TREE_DATA;
  @Output() nodeSelected = new EventEmitter<CategoryNode>();


  childrenAccessor = (node: CategoryNode) => node.children ?? [];

  hasChild = (_: number, node: CategoryNode) => !!node.children && node.children.length > 0;

  selectNode(node: CategoryNode): void {
    console.log('selected', node);
    this.nodeSelected.emit(node);
  }
}


// import { Component, EventEmitter, Output } from '@angular/core';
// import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
// import { FlatTreeControl } from '@angular/cdk/tree';
// import { MatIconModule } from '@angular/material/icon';
// import { CommonModule } from '@angular/common';

// interface TreeNode {
//   name: string;
//   children?: TreeNode[];
// }

// interface FlatTreeNode {
//   name: string;
//   level: number;
//   expandable: boolean;
// }

// @Component({
//   standalone: true,
//   imports: [CommonModule, MatTreeModule, MatIconModule],
//   selector: 'app-tree',
//   templateUrl: './app-tree.component.html',
//   styleUrls: ['./app-tree.component.scss'],
// })
// export class AppTreeComponent {
//   @Output() nodeSelected = new EventEmitter<FlatTreeNode>();

//   private _transformer = (node: TreeNode, level: number): FlatTreeNode => ({
//     name: node.name,
//     level,
//     expandable: !!node.children?.length,
//   });

//   treeControl = new FlatTreeControl<FlatTreeNode>(
//     node => node.level,
//     node => node.expandable
//   );

//   treeFlattener = new MatTreeFlattener(
//     this._transformer,
//     node => node.level,
//     node => node.expandable,
//     node => node.children
//   );

//   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

//   treeData: TreeNode[] = [
//     {
//       name: 'Category 1',
//       children: [
//         { name: 'Item 1-1' },
//         { name: 'Item 1-2' },
//       ],
//     },
//     {
//       name: 'Category 2',
//       children: [
//         { name: 'Item 2-1' },
//         { name: 'Item 2-2' },
//       ],
//     },
//   ];

//   constructor() {
//     this.dataSource.data = this.treeData;
//   }

//   selectNode(node: FlatTreeNode): void {
//     if (!node.expandable) {
//       console.log('selected', node);
//       this.nodeSelected.emit(node);
//     }
//   }
// }
