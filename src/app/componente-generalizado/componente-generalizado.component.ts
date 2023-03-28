import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-componente-generalizado',
  templateUrl: './componente-generalizado.component.html',
  styleUrls: ['./componente-generalizado.component.css']
})
export class ComponenteGeneralizadoComponent {
  @Input() nome = "";
  @Input() sobrenome = "";
}
