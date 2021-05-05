import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListWithAsyncComponent } from './product-list-with-async.component';

describe('ProductListWithAsyncComponent', () => {
  let component: ProductListWithAsyncComponent;
  let fixture: ComponentFixture<ProductListWithAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListWithAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListWithAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
