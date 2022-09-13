import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { UserRoutingModule } from 'src/app/user/user-routing.module';

import { ShoppinglistDashboardComponent } from './shoppinglist-dashboard.component';

describe('DashboardComponent', () => {
  let component: ShoppinglistDashboardComponent;
  let fixture: ComponentFixture<ShoppinglistDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatMenuModule,
        MatSnackBarModule,
        RouterTestingModule,
        UserRoutingModule
      ],
      declarations: [ ShoppinglistDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinglistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
