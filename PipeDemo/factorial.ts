import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'factorial'
})

export class myFactorial implements PipeTransform{
    fact:number = 1;
    i:number;
    
    transform(input:number,prefix:string){
        
        for(this.i=1; this.i<=input; this.i++){
            this.fact *= this.i;    
        }
        return prefix+' '+this.fact;
    }
}  