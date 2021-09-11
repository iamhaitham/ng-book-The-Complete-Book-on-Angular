import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechButtonupComponent } from './tech-buttonup.component';

describe('TechButtonupComponent', () => {
  let component: TechButtonupComponent;
  let fixture: ComponentFixture<TechButtonupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechButtonupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechButtonupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
