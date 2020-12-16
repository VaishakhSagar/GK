import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { MainService } from '../main.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'level 1',
    children: [
      {name: '1.1'},
      {name: '1.2'},
      {name: '1.3'},
    ]
  }, {
    name: 'level 2',
    children: [
      {
        name: 'level 2.1',
        children: [
          {name: '2.1.1'},
          {name: '2.1.2'},
        ]
      }, {
        name: 'level 2.2',
        children: [
          {name: '2.2.1'},
          {name: '2.2.2'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-heirarchy',
  templateUrl: './heirarchy.component.html',
  styleUrls: ['./heirarchy.component.css']
})
export class HeirarchyComponent implements OnInit {

  @Output() back = new EventEmitter();
  tableData:any=[];

  constructor(private mainService:MainService) { 
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.mainService.getHierarchy().subscribe(
      data=>{
        this.tableData=data;
      }
    )
  }

  backFun(){
    this.back.emit(true);
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
