import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
     numero1=0
     numero2=0
     private resultado=0

     sum(){
       this.resultado= this.numero1+this.numero2
     }

     substract(){
      if (this.numero1<this.numero2){
        this.resultado= 0
      }else{
       this.resultado= this.numero1-this.numero2}
     }

    mult(){
       this.resultado= this.numero1*this.numero2
    }

    getResultado(){
      return this.resultado
    }

}
