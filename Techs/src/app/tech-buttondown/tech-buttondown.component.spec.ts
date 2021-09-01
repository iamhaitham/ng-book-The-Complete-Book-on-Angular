import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechButtondownComponent } from './tech-buttondown.component';

describe('TechButtondownComponent', () => {
  let component: TechButtondownComponent;
  let fixture: ComponentFixture<TechButtondownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechButtondownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechButtondownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
