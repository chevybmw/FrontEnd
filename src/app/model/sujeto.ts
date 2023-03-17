export class Sujeto {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;
    
    constructor(nombre: string, descripcion: string, apellido: string, img: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.apellido = apellido;
        this.img = img;
    }

}
