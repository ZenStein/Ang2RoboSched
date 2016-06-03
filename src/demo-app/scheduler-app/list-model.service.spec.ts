//import {
//  beforeEachProviders,
//  beforeEach,
//  it,
//  describe,
//  expect,
//  inject
//} from '@angular/core/testing';
//import { ListModelService } from './list-model.service';
//
//describe('ListModel Service', () => {
//  beforeEachProviders(() => [ListModelService]);
//  let testService = new ListModelService()
//beforeEach(() => 
//        testService.model =  [{header:'List 1',listUid:'A', listItems:[
//           {viewText:'something1',uid:'0_0', selected: false},
//           {viewText:'someother2',uid:'0_1', selected: false},
//           {viewText:'some3',uid:'0_2', selected: false}
//          ]},
//          {header:'List 2',listUid:'B', listItems:[
//           {viewText:'something1',uid:'1_0', selected: false},
//           {viewText:'someother2',uid:'1_1,', selected: false }
//           {viewText:'some3',uid:'1_2',  selected: false}
//          ]}]
//          )
//  it('should instantiate and set list 0 listitem 0 selected to true',
//      inject([ListModelService], (service: ListModelService) => {
//    testService.doSet('0_0','selected',true)
//    expect(testService).toBeTruthy();
//    expect(testService.model[0].listItems[0].selected).toEqual(true);
//  }));
//  it('should reset all selected values to false',
//      inject([ListModelService], (service: ListModelService) => {
//    testService.doSet('0_0','selected',true)
//    testService.doSet('1_0','selected',true)
//    testService.resetAllSelectionsToFalse()
//    expect(testService).toBeTruthy();
//    expect(testService.model[0].listItems[0].selected).toEqual(false);
//    expect(testService.model[1].listItems[0].selected).toEqual(false);
//  }));
//});
