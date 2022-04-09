import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedvideosComponent } from './savedvideos.component';

describe('SavedvideosComponent', () => {
  let component: SavedvideosComponent;
  let fixture: ComponentFixture<SavedvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
