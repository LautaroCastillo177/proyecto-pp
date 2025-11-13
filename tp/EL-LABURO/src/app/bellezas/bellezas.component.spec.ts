import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BellezasComponent } from './bellezas.component';

describe('BellezasComponent', () => {
  let component: BellezasComponent;
  let fixture: ComponentFixture<BellezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BellezasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BellezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
