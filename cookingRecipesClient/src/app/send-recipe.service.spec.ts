import { TestBed } from '@angular/core/testing';

import { SendRecipeService } from './send-recipe.service';

describe('SendRecipeService', () => {
  let service: SendRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
