import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGeneralizadoComponent } from './componente-generalizado.component';

describe('ComponenteGeneralizadoComponent', () => {
  let component: ComponenteGeneralizadoComponent;
  let fixture: ComponentFixture<ComponenteGeneralizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteGeneralizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteGeneralizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
