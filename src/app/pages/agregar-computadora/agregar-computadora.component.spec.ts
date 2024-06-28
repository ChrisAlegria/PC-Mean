import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComputadoraComponent } from './agregar-computadora.component';

describe('AgregarEmpleadoComponent', () => {
  let component: AgregarComputadoraComponent;
  let fixture: ComponentFixture<AgregarComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarComputadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
