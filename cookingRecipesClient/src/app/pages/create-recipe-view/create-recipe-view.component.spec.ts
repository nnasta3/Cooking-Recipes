import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeViewComponent } from './create-recipe-view.component';

describe('CreateRecipeViewComponent', () => {
  let component: CreateRecipeViewComponent;
  let fixture: ComponentFixture<CreateRecipeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
