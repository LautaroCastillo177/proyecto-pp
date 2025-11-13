import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitmoCompasComponent } from './ritmo-compas.component';

describe('RitmoCompasComponent', () => {
  let component: RitmoCompasComponent;
  let fixture: ComponentFixture<RitmoCompasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RitmoCompasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RitmoCompasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
