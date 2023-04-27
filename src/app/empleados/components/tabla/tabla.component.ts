import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements OnInit {
  employees: any[] = [];
  @Output() employeeLoaded = new EventEmitter<any>();

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getEmployees().subscribe((data: any) => {
      this.employees = data.data;
    });
  }

  loadEmployee(employee: any) {
    this.employeeLoaded.emit(employee);
  }
 
}
