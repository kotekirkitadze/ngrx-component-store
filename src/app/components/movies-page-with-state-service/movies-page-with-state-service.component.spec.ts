import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPageWithStateServiceComponent } from './movies-page-with-state-service.component';

describe('MoviesPageWithStateServiceComponent', () => {
  let component: MoviesPageWithStateServiceComponent;
  let fixture: ComponentFixture<MoviesPageWithStateServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPageWithStateServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesPageWithStateServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
