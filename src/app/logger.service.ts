import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messagens: string[] = [];

  logar(messagem: string){
    console.log(messagem);
    this.messagens.push(messagem);
  }

  exibeTodosOsLogs(){
    console.log(this.messagens);
  }

}
