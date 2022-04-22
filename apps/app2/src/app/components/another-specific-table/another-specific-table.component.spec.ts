import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherSpecificTableComponent } from './another-specific-table.component';

describe('AnotherSpecificTableComponent', () => {
  let component: AnotherSpecificTableComponent;
  let fixture: ComponentFixture<AnotherSpecificTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherSpecificTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherSpecificTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
