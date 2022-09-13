import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubscribedListComponent } from './item-subscribed-list.component';

describe('ItemSubscribedListComponent', () => {
  let component: ItemSubscribedListComponent;
  let fixture: ComponentFixture<ItemSubscribedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ItemSubscribedListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSubscribedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
