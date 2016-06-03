
import {UidGenerator} from './uid-generator'
import {Injectable, Inject} from '@angular/core'
import {data} from './mock-data'
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//import {Http, Response} from '@angular/http'


interface csDndListItemTemplate{
    viewText:string,
    uid:string,
    selected: boolean
}
interface csDndListTemplate {
    header:string,
    listUid:string,
    listItems:  csDndListItemTemplate[]   
}

@Injectable()
export class DragDropModelTemplate {

model
conformed
conformedModel
idGenerator

    constructor(@Inject(UidGenerator) idgen: UidGenerator, private _http: Http){
        //this.model = data //[] //model    
        this.conformed = false
        this.idGenerator = idgen //new UidGenerator()
       // this.httpTest()
    }
   private getRemoteDataForModel(){
       // const headers = new Headers({'Access-Control-Allow-Origin':'http://localhost:4200'}) 
       // const opts = new RequestOptions({headers})
              //     http://www.cabins4lessapp.com/cabinStatusLinens.php
        let that = this
        let url = 'http://www.cabins4lessapp.com/cabinStatusLinens.php' 
        return this._http.get(url/*, opts*/).map(({_body})=>{
            let mdlDta = []
                mdlDta[0] = ['assignments'] 
            let rawDta = _body.split(',')
            let x, i, j
            for(x = 0;x<rawDta.length;x+=3){
                i=x+1;j=x+2
                mdlDta[0].push(`${rawDta[x]}_${rawDta[i]}_${rawDta[j]}`)
            }
            that.model = mdlDta
            //console.log(that.conformModel())
            return that.conformModel()
            
        })
        //.subscribe(function(res){
        //console.log('res one in template')
        //console.log(res)
        //})
    }
    setModel(model){
        this.model = model
    }
    getModel(conformed?: boolean){
        if(conformed){
            if(!this.conformed){
                throw 'this model has not been conformed. call conformedModel' 
            }
            return this.conformedModel
        }
        return this.model()

    }
    conformModel(){
        this.conformFromArrayStrings()
        return this.conformedModel
    }

     private getListTemplate(): csDndListTemplate{
        return  {header:'',listUid:'', listItems:[]}
    }
     private getListItemTemplate(){
        return  {viewText:'',uid:'', selected: false}
    }
    tester(){}
    private conformFromArrayStrings(){
        let build = []
        let i = 0
        for(let list of this.model){
            let listTmpl = this.getListTemplate()
            console.log(list)
            listTmpl.header = list[0]
            listTmpl.listUid=this.idGenerator.generate(i)
            for(let x=1;x<list.length;x++){
                let newListItem = this.getListItemTemplate()
                newListItem.viewText=list[x]
                newListItem.uid = this.idGenerator.generate(i,x-1)
                listTmpl.listItems.push(newListItem)   
                console.log(x)
            }
            build.push(listTmpl)
            i++
        }
        this.conformed = true
        this.conformedModel = build 
    }
}
