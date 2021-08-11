import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModelFormComponent } from './demo-model-form.component';

describe('DemoModelFormComponent', () => {
  let component: DemoModelFormComponent;
  let fixture: ComponentFixture<DemoModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoModelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
