import {Component} from '@angular/core';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list/grid-list';
import {MdButton} from '@angular2-material/button/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';








@Component({
      moduleId: module.id,
        selector: 'cs-material-list',
          templateUrl: 'material-list.component.html',
            styleUrls: ['material-list.component.css'],
  directives: [MD_GRID_LIST_DIRECTIVES, MdButton, MD_CARD_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
})

//@Component({
//  moduleId: module.id,
//  selector: 'list-demo',
//  templateUrl: 'list-demo.html',
//  styleUrls: ['list-demo.css'],
//  directives: [MD_LIST_DIRECTIVES, MdButton, MdIcon]
//})
export class CsMaterialListComponent{

  tiles: any[] = [
    {text: 'Arr_1', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Dep_2', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'T.O._5', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Arr_1_2', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Arr_2_2', cols: 1, rows: 2, color: '#DDBDF1'},
  ];

  dogs: Object[] = [
    { name: 'Terry', human: 'Kara' },
    { name: 'Terry', human: 'Kara' },
    { name: 'Patty', human: 'Jeremy' },
    { name: 'Tisha', human: 'Igor' },
    { name: 'Lauren', human: 'Ward' },
    { name: 'Pat/Leah', human: 'Rob' },
    { name: 'Claudia', human: 'Matias' },
    { name: 'Patty', human: 'Jeremy' },
    { name: 'Tisha', human: 'Igor' },
    { name: 'Lauren', human: 'Ward' },
    { name: 'Pat/Leah', human: 'Rob' },
    { name: 'Claudia', human: 'Matias' }
  ];

  fixedCols: number = 1;
  fixedRowHeight: number = 100;
  ratioGutter: number = 1;
  fitListHeight: string = '400px';
  ratio: string = '4:1';
dragenterAlert(x: Event){
console.log(x)
}
dragenterAlert2(x: Event){
console.log(x)
}
overDrag(x: Event){
    console.log(x, this)
}
  addTileCols() { this.tiles[2].cols++; }
}








