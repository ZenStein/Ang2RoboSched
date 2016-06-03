import {Injectable, Inject, Component} from '@angular/core'
import {DragDropModelTemplate} from './drag-drop-model-template';
import {data} from './mock-data'



interface csDndListTemplate {
    header:string,
    listUid:string,
    listItems: [ csDndListItemTemplate  | string ]  
}
interface csDndListItemTemplate{
    viewText:string,
    uid:string,
    selected: boolean
}

interface uidLocator{
    listDx: number
    itemDx: number 
}
//@Component({
//providers:[DragDropModelTemplate]
//})
@Injectable()
export class ListModelService {
    private locatorsMap = []  
    private injectionBlock = []
    private selectedItemsCollection:[Object]
    private lastSetCoordinates = []
    private tmplBuilder// = new DragDropModelTemplate(data)
    private model  //: csDndListTemplate[] //= this.tmplBuilder.conformModel()
   constructor(@Inject(DragDropModelTemplate)tmplBuilder: DragDropModelTemplate ){
       this.tmplBuilder = tmplBuilder
    //   this.tmplBuilder.setModel(data)
   //    this.model = this.tmplBuilder.conformModel()
   }
   getModelFromTemplate(){
       let that = this
      return  this.tmplBuilder.getRemoteDataForModel().map(d=>{
            that.model = d
            return d
      })
      //.subscribe(function(data){
      // console.log('model service2')
      // console.log(data)
      // })
   }
    resetAllSelectionsToFalse(inverse?: string){
    let selectionState = (inverse == 'inverse' ? true : false)
    this.modelIterator(function(item){
        item.selected = selectionState
    })   
    }
  doSet(uid: string, prop: string, value: string | boolean, shiftKey: boolean){
    let list = this.parseToList(uid)
    let item = this.parseToListItem(uid)
       if(this.model[list] != undefined){
            if(this.model[list].listItems[item] != undefined){ 
                if(shiftKey && this.validateMultiSelection(list,item)){
                    this.doMultiSelection(list, item, this.lastSetCoordinates[1], prop, value)
                }
                else{
                 this.model[list].listItems[item][prop]= value
                }
                this.lastSetCoordinates = [list,item]
             return value
            }
       }
   }

    private modelIterator(callback){
        for(let i=0;i<this.model.length;i++){
          for(let j=0;j<this.model[i].listItems.length;j++){

            if(callback(this.model[i].listItems[j],i,j) == 'done'){
                i =0
                break
            }
          }
        }
    }
    mapSelectedInModel(){

       let locatorsMap = this.locatorsMap
       let that = this
       this.modelIterator(function(listItem, listIndex, itemIndex){
         if(listItem.selected){
             let dexes: uidLocator = { listDx: listIndex, itemDx: itemIndex }
            that.locatorsMap.push(dexes)
            let listItemClone = Object.assign({}, listItem)
            that.injectionBlock.push(listItemClone)
         }
       })
       return this.injectionBlock
    }
    flushSelectedLineup(){
        this.injectionBlock = []
        this.locatorsMap = []
    }


    doDropData(whereUid: string, emptyList: boolean){
        console.log('diddrop')
        console.log(whereUid)
    let indexs =this.parseLocationFor( whereUid, emptyList)
    let injectDx =indexs.itemDx  
    let model = this.model
    let that = this
        for(let aRemovable  in this.injectionBlock){
            let remove = this.injectionBlock[aRemovable]
           this.modelIterator(function(item,listIndex,itemIndex){
                if(item.uid == remove.uid && item.viewText == remove.viewText){
                    that.model[listIndex].listItems.splice(itemIndex, 1)
                    return 'done'
                }
           }) 
        }
    let targetLen = model[indexs.listDx].listItems.length
    let injector = [injectDx, 0].concat(this.injectionBlock)
    Array.prototype.splice.apply(model[indexs.listDx].listItems, injector) 

        this.modelIterator(function(item, listIndex, itemIndex){
            item.uid = `${listIndex}_${itemIndex}`
        })
    this.injectionBlock = []
        return this.model
    }
    getModel(){
        return this.model
    }
    parseToList(listUid){
        let x = listUid.replace(/_[\d]*/g, '')
        return x
    }
    parseToListItem(listUid){
        let x = listUid.replace(/[\d]*_/g, '')
        return x
    }
    private parseLocationFor(uid, emptyList: boolean): uidLocator {
        let itemDx = emptyList == true ? 0 : parseInt(this.parseToListItem(uid))
         let x  ={ 
         listDx: parseInt((this.parseToList(uid)).toString()),
         itemDx: itemDx
         }
         console.log('x')
         console.log(  x  )
         return x
    }
//    parseListLocation(uid){
//        return {
//        listDx:
//        }
//    }
    addListToModel(){
        let list = this.tmplBuilder.getListTemplate()
       list.header = 'new list' 
       list.listUid = ''+ this.model.length
        this.appendList(list)
        return this.model
    }
    private appendList(list: csDndListTemplate){
        this.model.push(list)
    }
    refreshAllAssignments(){
        this.resetAllSelectionsToFalse('inverse')
        this.mapSelectedInModel()
    this.doDropData('0_list', true)
        this.resetAllSelectionsToFalse()
        return this.model
    }
    validateMultiSelection(list, item){
        let valid = false
        if(this.lastSetCoordinates[0] == list){
            valid = true
        }
        return valid
    }
    doMultiSelection(list,itemDx, previousDx, prop, value ){
        console.log('orig prev' + previousDx)
        console.log('orig item' + itemDx)
        let lowest, highest 
        lowest = (previousDx < itemDx) ? previousDx : itemDx;
        console.log('lowest immed = ' + lowest)
        highest = (lowest == previousDx) ? itemDx : previousDx;
        console.log('lowest = ' + lowest)
        console.log('highest = '+highest)
        console.log('prev = '+ previousDx)
        console.log('itemdx = '+itemDx)
let that = this
        this.modelIterator(function(listItem, listIndex, itemIndex){
            if(list == listIndex && itemIndex >= lowest && itemIndex <= highest  ){
              that.model[listIndex].listItems[itemIndex][prop] = value  
            }
        })
    }
// selectedItems(){
//    let that = this
//    this.modelIterator(function(listItem, listIndex, itemIndex){
//      if(listItem.selected){
//        that.selectedItemsCollection.push(listItem) 
//      }
//      })
//    return this.selectedItemsCollection
//    }
}
