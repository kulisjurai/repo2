import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestInformerComponent } from './dest-informer.component';

describe('DestInformerComponent', () => {
  let component: DestInformerComponent;
  let fixture: ComponentFixture<DestInformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestInformerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestInformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
