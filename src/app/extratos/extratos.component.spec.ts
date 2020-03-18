import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratosComponent } from './extratos.component';

describe('ExtratosComponent', () => {
  let component: ExtratosComponent;
  let fixture: ComponentFixture<ExtratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
