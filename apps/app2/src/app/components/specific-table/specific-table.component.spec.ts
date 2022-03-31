import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTableComponent } from './specific-table.component';

describe('SpecificTableComponent', () => {
  let component: SpecificTableComponent;
  let fixture: ComponentFixture<SpecificTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
