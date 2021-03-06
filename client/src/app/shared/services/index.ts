import { Provider } from '@angular/core';

import { ProductService, HttpProductService } from './product.service';
import { BidService } from './bid.service';

export { Product, ProductSearchParams, ProductService } from './product.service';

export const SHARED_SERVICES: Provider[] = [
  { provide: ProductService, useClass: HttpProductService },
  { provide: BidService, useClass: BidService }
];
