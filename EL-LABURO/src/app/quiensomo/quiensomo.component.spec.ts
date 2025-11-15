import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiensomoComponent } from './quiensomo.component';

describe('QuiensomoComponent', () => {
  let component: QuiensomoComponent;
  let fixture: ComponentFixture<QuiensomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuiensomoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiensomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
