import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowcaseItemComponent } from './app-showcase-item.component';

describe('AppShowcaseItemComponent', () => {
  let component: AppShowcaseItemComponent;
  let fixture: ComponentFixture<AppShowcaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppShowcaseItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppShowcaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
