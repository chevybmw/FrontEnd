import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sujeto } from 'src/app/model/sujeto';
import { SujetoService } from 'src/app/service/sujeto.service';

@Component({
  selector: 'app-cargar-imagen',
  templateUrl: './cargar-imagen.component.html',
  styleUrls: ['./cargar-imagen.component.css']
})
export class CargarImagenComponent implements OnInit {
  sujeto : Sujeto = null

  constructor(  private sujetoS: SujetoService, 
    private activatedRouter: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sujetoS.detail(id).subscribe(
     data => {
       this.sujeto = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate2(): void{
    const id =this.activatedRouter.snapshot.params['id'];
    this.sujetoS.update(id, this.sujeto).subscribe(
      data => {
        this.router.navigate(['']);

      }, err =>{
        alert("Error al modificar la imagen");
        this.router.navigate(['']);
      }
      )
  } 
  uploadImage($event:any){

  }

}
