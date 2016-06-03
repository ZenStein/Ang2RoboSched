import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RoboRenG2AppComponent } from '../scheduler-app/robo-ren-g2.component';

beforeEachProviders(() => [RoboRenG2AppComponent]);

describe('App: RoboRenG2', () => {
  it('should create the app',
      inject([RoboRenG2AppComponent], (app: RoboRenG2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'robo-ren-g2 works!\'',
      inject([RoboRenG2AppComponent], (app: RoboRenG2AppComponent) => {
    expect(app.title).toEqual('robo-ren-g2 works!');
  }));
});
