import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { NgClass} from '@angular/common'
import { CsLiDragger } from '../cs-li-dragger.directive'
import { CsSelected } from '../cs-selected.directive';

@Component({
  moduleId: module.id,
  host:{
//  '(onselectiontoggle)':'onSelectionToggle($event)'
  },
  selector: 'cs-item',
  directives:[[CsLiDragger],[CsSelected], [NgClass]],
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent implements OnInit {
    @Output()selectionToggle = new EventEmitter()
    @Output()dropSpotValid = new EventEmitter()
@Input() viewText
@Input() uid
@Input() index
@Input() selected

private validDrop
  constructor() {}

  ngOnInit() {
  }
  onselectiontoggle(ev){
      this.selected = ev.selectionMade
  this.selectionToggle.emit(ev)
  }
    ondropspotvalid(ev){
        console.log('ondropspotvalid')
        this.validDrop = ev
    this.dropSpotValid.emit(ev)
    }
}
