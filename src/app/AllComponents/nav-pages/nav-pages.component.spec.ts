import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPagesComponent } from './nav-pages.component';

describe('NavPagesComponent', () => {
  let component: NavPagesComponent;
  let fixture: ComponentFixture<NavPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
