import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExtraitComponent } from './list-extrait.component';

describe('ListExtraitComponent', () => {
  let component: ListExtraitComponent;
  let fixture: ComponentFixture<ListExtraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExtraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExtraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
