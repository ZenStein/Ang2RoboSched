import { Directive, Output, ElementRef, EventEmitter} from '@angular/core';

@Directive({
  selector: '[ListDropper]',
  host:{
  '(dragenter)':'onDragEnter($event)',
//  '(drop)':'onDrop($event)',
  '(dragleave)':'onDragLeave($event)',
'(dragover)':'onDragOver($event)'
  }
})
export class ListDropper {
@Output() listDropperIsDragged = new EventEmitter()
//private el
//  constructor(el: ElementRef) {
 //     this.el = el.nativeElement
 // }
//onDrop(ev){
//    ev.preventDefault()
//    alert('this list drop')
//}
onDragEnter(ev){
    ev.preventDefault()
//    console.log('dragEnter list')
//    this.el.style.color = 'green'

    this.listDropperIsDragged.emit({canDropToList: true})
}
onDragOver(ev){
    ev.preventDefault()
//    console.log('dlist over')
  this.listDropperIsDragged.emit({canDropToList: true})  
}
onDragLeave(){
  //  console.log('dragLeave list')

//    this.el.style.color = 'black'
    this.listDropperIsDragged.emit({canDropToList: false})
}
}
