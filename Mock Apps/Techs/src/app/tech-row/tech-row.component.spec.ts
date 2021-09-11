import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRowComponent } from './tech-row.component';

describe('TechRowComponent', () => {
  let component: TechRowComponent;
  let fixture: ComponentFixture<TechRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
