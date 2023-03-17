import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sujeto } from 'src/app/model/sujeto';
import { ImageService } from 'src/app/service/image.service';
import { SujetoService } from 'src/app/service/sujeto.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
sujeto : Sujeto = null

  constructor(
    private sujetoS: SujetoService, 
    private activatedRouter: ActivatedRoute,
    private router: Router, public imageService: ImageService
  ) { }


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

  onUpdate(): void{
    const id =this.activatedRouter.snapshot.params['id'];
    this.sujeto.img = this.imageService.url
    this.sujetoS.update(id, this.sujeto).subscribe(
      data => {
        this.router.navigate(['']);

      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
      )
  } 
  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }

}
