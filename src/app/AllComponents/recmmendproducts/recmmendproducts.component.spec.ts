import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecmmendproductsComponent } from './recmmendproducts.component';

describe('RecmmendproductsComponent', () => {
  let component: RecmmendproductsComponent;
  let fixture: ComponentFixture<RecmmendproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecmmendproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecmmendproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
