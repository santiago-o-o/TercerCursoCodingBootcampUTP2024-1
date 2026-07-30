import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGifsComponent } from './grid-gifs.component';

describe('GridGifsComponent', () => {
  let component: GridGifsComponent;
  let fixture: ComponentFixture<GridGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridGifsComponent]
    });
    fixture = TestBed.createComponent(GridGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
