import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemoComponent } from './user-demo.component';

describe('UserDemoComponent', () => {
  let component: UserDemoComponent;
  let fixture: ComponentFixture<UserDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
