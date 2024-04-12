import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCatagoryComponent } from './product-by-catagory.component';

describe('ProductByCatagoryComponent', () => {
  let component: ProductByCatagoryComponent;
  let fixture: ComponentFixture<ProductByCatagoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductByCatagoryComponent]
    });
    fixture = TestBed.createComponent(ProductByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
