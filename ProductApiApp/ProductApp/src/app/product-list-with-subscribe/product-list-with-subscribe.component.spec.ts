import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListWithSubscribeComponent } from './product-list-with-subscribe.component';

describe('ProductListWithSubscribeComponent', () => {
  let component: ProductListWithSubscribeComponent;
  let fixture: ComponentFixture<ProductListWithSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListWithSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListWithSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
