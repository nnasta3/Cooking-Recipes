import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListViewComponent } from './recipes-list-view.component';

describe('RecipesListViewComponent', () => {
  let component: RecipesListViewComponent;
  let fixture: ComponentFixture<RecipesListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
