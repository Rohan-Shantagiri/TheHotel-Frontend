import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeternWeddingsComponent } from './wetern-weddings.component';

describe('WeternWeddingsComponent', () => {
  let component: WeternWeddingsComponent;
  let fixture: ComponentFixture<WeternWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeternWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeternWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
