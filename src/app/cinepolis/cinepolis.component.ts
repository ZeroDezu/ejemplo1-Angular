import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  nombre='';
  cantCompradores='';
  cineco=0;
  cantVoletos='';
  datos='';

  resultado='';

  procesar(){
    let cantVoletos:number=parseInt(this.cantVoletos);
    let cantCompradores:number=parseInt(this.cantCompradores)

    let resultado:number=0;
    let voletosMulti:number=0

    voletosMulti = cantCompradores*7
      

      if(cantVoletos > voletosMulti){
        this.resultado='No puedes comprar mas de 7 voletos por persona'
      }
      else if(this.cineco==1){
        resultado = this.CalDescueno();
  
        resultado = resultado * 0.90;
        this.resultado = '$'+resultado.toString()+' - Cineco Card';
        this.datos = this.nombre+' - cantidad de voletos: '+this.cantVoletos;
      }
      else{
        resultado = this.CalDescueno();
        this.resultado = '$'+resultado.toString();
        this.datos = this.nombre+' - cantidad de voletos: '+this.cantVoletos;
      }
    

    
   


  }

  CalDescueno(){
    let cantVoletos:number=parseInt(this.cantVoletos);
    let resultado:number=0;
    let presio:number=12;
    let total:number=0;
    let descuento:number=0;

    if(cantVoletos > 5){
      descuento = 0.85;
    }
    else if(cantVoletos >=3 && cantVoletos<=5){
      descuento = 0.90;
    }
    else{
      descuento = 1;
    }
    
    total = cantVoletos*presio;
    resultado = total*descuento;

    return resultado;
  }


  ngOnInit(): void {
  }
}
