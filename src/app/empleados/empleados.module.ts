import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';



@NgModule({
  declarations: [
    MainPageComponent,
    FormularioComponent,
    TablaComponent,
    EmpleadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class EmpleadosModule { }
