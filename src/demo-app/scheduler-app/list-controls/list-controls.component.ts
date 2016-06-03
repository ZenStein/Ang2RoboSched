import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { ListModelService } from '../list-model.service';
//import { data } from '../mock-data.ts';

@Component({
  moduleId: module.id,
  host:{

  },
  providers:[ListModelService],
  selector: 'list-controls',
  templateUrl: 'list-controls.component.html',
  styleUrls: ['list-controls.component.css']
})
export class ListControlsComponent implements OnInit {
@Output() addlist = new EventEmitter()
@Output() refreshallassigments = new EventEmitter()
    private model
  constructor(@Inject(ListModelService)listService: ListModelService) {
      this.model = listService


  }

  ngOnInit() {
      console.log("this")
      console.log(this.model.getModel())
  }
 // addlist(){
 //     this.addlist.emit(true)
 //     console.log('addlist')
 //     console.log(this.model.getModel())
 //     console.log()
  //}

}
