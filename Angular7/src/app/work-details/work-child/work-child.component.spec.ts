import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkChildComponent } from './work-child.component';

describe('WorkChildComponent', () => {
  let component: WorkChildComponent;
  let fixture: ComponentFixture<WorkChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
