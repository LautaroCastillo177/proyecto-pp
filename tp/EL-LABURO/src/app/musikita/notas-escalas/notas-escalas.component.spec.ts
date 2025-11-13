import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasEscalasComponent } from './notas-escalas.component';

describe('NotasEscalasComponent', () => {
  let component: NotasEscalasComponent;
  let fixture: ComponentFixture<NotasEscalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasEscalasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasEscalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
