import { Component, OnInit } from '@angular/core';
import { Sujeto } from 'src/app/model/sujeto';
import { SujetoService } from 'src/app/service/sujeto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  sujeto: Sujeto[] = [];

  constructor(private sujetoS: SujetoService, private tokenService: TokenService) { }
isLogged = false;

ngOnInit(): void {
  
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }

  cargarPersona():void {
    this.sujetoS.lista().subscribe(data => {this.sujeto = data;})
  }
  delete(id?: number){
    if(id != undefined){
      this.sujetoS.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err =>{
          alert("No se pudo borrar la persona");
        }
        )
    }
  } 





 /* ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona():void {
    this.sujetoS.detail(1).subscribe(data => {this.sujeto = data;})
  }
*/
  }
  

