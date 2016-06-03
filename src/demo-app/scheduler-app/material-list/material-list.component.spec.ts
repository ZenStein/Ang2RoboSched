//import {
//  beforeEach,
//  beforeEachProviders,
//  describe,
//  expect,
//  it,
//  inject,
//} from '@angular/core/testing';
//import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
//import { Component } from '@angular/core';
//import { By } from '@angular/platform-browser';
//import { MaterialListComponent } from './material-list.component';
//
//describe('Component: MaterialList', () => {
//  let builder: TestComponentBuilder;
//
//  beforeEachProviders(() => [MaterialListComponent]);
//  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//    builder = tcb;
//  }));
//
//  it('should inject the component', inject([MaterialListComponent],
//      (component: MaterialListComponent) => {
//    expect(component).toBeTruthy();
//  }));
//
//  it('should create the component', inject([], () => {
//    return builder.createAsync(MaterialListComponentTestController)
//      .then((fixture: ComponentFixture<any>) => {
//        let query = fixture.debugElement.query(By.directive(MaterialListComponent));
//        expect(query).toBeTruthy();
//        expect(query.componentInstance).toBeTruthy();
//      });
//  }));
//});
//
//@Component({
//  selector: 'test',
//  template: `
//    <app-material-list></app-material-list>
//  `,
//  directives: [MaterialListComponent]
//})
//class MaterialListComponentTestController {
//}
//
