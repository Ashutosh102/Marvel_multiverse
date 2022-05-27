import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCharactersComponent } from './all-characters.component';

describe('AllCharactersComponent', () => {
  let component: AllCharactersComponent;
  let fixture: ComponentFixture<AllCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
