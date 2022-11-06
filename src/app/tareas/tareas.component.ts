import { Component } from "@angular/core";

@Component ({
    selector: 'app-tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['tareas.component.css']
})

export class TareasComponent {
    tareas:any[] = [];
    tituloTarea: string | undefined;
    descripcionTarea: string | undefined; 

    crearTarea( evento:any ) {
        // llamamos al método preventDefault, para no recargar de nuevo la página html al dar en submit.
        evento.preventDefault();
        this.tituloTarea = (<HTMLInputElement>document.getElementById("inputTitulo")).value;
        this.descripcionTarea = (<HTMLInputElement>document.getElementById("inputDescripcion")).value;

        this.tituloTarea = this.tituloTarea.trim();
        this.descripcionTarea = this.descripcionTarea.trim();
    
        if((this.tituloTarea != undefined) && (this.tituloTarea != "")) {
            if((this.descripcionTarea != undefined) && (this.descripcionTarea != "")) {
                let tarea = {
                titulo: this.tituloTarea,
                descripcion: this.descripcionTarea
                }

                this.tareas.push(tarea);
            }
        }
    }

}

