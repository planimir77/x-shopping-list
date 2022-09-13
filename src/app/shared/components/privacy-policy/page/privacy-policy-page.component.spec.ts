import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyPolicyContentComponent } from '../content/privacy-policy-content.component';

import { PrivacyPolicyPageComponent } from './privacy-policy-page.component';

describe('PrivacyPolicyPageComponent', () => {
  let component: PrivacyPolicyPageComponent;
  let fixture: ComponentFixture<PrivacyPolicyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PrivacyPolicyContentComponent,
        PrivacyPolicyPageComponent,
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
