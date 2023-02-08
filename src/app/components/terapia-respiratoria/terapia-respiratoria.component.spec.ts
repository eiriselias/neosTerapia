import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaRespiratoriaComponent } from './terapia-respiratoria.component';

describe('TerapiaRespiratoriaComponent', () => {
  let component: TerapiaRespiratoriaComponent;
  let fixture: ComponentFixture<TerapiaRespiratoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerapiaRespiratoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapiaRespiratoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
