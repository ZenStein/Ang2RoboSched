import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {UidGenerator} from './uid-generator';

describe('UidGenerator', () => {
  it('should create an instance', () => {
    expect(new UidGenerator()).toBeTruthy();
  });
  it('shoud generate an \'0\' when passed a 0', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(0)).toEqual('0');
  });
  it('should be 00 given(26)', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(26)).toEqual('00');
  });
  it('should be 0_0 given(0,0)', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(0,0)).toEqual('0_0');
  });
  it('shoud generate an \'0_0\' when passed (0, 0)', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(0,1)).toEqual('0_1');
  });
  it('should start with 00 when passed 26', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(26,1)).toEqual('00_1');
  });
  it('should start with 11 when passed 27', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(27,1)).toEqual('11_1');
  });
  it('should start with BB when passed 27', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(52,0)).toEqual('000_0');
  });
  it('should be 2525_5 given(51,5)', () => {
      let ctyle = new UidGenerator() 
    expect(ctyle.generate(51,5)).toEqual('2525_5');
  });
});
