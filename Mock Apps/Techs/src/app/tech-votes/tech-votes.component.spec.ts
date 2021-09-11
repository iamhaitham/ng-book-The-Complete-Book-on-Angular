import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechVotesComponent } from './tech-votes.component';

describe('TechVotesComponent', () => {
  let component: TechVotesComponent;
  let fixture: ComponentFixture<TechVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechVotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
