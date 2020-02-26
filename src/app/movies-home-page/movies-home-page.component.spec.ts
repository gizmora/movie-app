import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHomePageComponent } from './movies-home-page.component';

describe('MoviesHomePageComponent', () => {
  let component: MoviesHomePageComponent;
  let fixture: ComponentFixture<MoviesHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
