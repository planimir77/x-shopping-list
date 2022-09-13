import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ShoppinglistService } from './shoppinglist.service';

describe('ShoppinglistService', () => {
  let service: ShoppinglistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ShoppinglistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
