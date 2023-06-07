import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtraitComponent } from './add-extrait.component';

describe('AddExtraitComponent', () => {
  let component: AddExtraitComponent;
  let fixture: ComponentFixture<AddExtraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExtraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExtraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
