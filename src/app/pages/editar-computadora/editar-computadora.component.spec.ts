import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarComputadoraComponent } from './editar-computadora.component';

describe('EditarEmpleadoComponent', () => {
  let component: EditarComputadoraComponent;
  let fixture: ComponentFixture<EditarComputadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarComputadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
