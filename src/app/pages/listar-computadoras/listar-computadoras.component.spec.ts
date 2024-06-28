import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComputadorasComponent } from './listar-computadoras.component';

describe('ListarEmpleadosComponent', () => {
  let component: ListarComputadorasComponent;
  let fixture: ComponentFixture<ListarComputadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarComputadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
