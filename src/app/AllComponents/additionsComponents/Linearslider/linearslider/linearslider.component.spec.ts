import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearsliderComponent } from './linearslider.component';

describe('LinearsliderComponent', () => {
  let component: LinearsliderComponent;
  let fixture: ComponentFixture<LinearsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearsliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinearsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
