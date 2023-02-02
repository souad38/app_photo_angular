import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPhotographieComponent } from './nav-photographie.component';

describe('NavPhotographieComponent', () => {
  let component: NavPhotographieComponent;
  let fixture: ComponentFixture<NavPhotographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPhotographieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavPhotographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
