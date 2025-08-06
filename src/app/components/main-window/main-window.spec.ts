import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWindow } from './main-window';

describe('MainWindow', () => {
  let component: MainWindow;
  let fixture: ComponentFixture<MainWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
