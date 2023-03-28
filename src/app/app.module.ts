import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeiroComponenteComponent } from "../app/primeiro-componente/primeiro-componente-component";
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule, NgModel } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponenteGeneralizadoComponent } from './componente-generalizado/componente-generalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { Servicos1Component } from './servicos1/servicos1.component';
import { Servicos2Component } from './servicos2/servicos2.component';

@NgModule({
  declarations: [
    AppComponent, 
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponenteGeneralizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    Servicos1Component,
    Servicos2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
