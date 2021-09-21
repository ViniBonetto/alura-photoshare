import { AbstractControl } from "@angular/forms";

export function minisculoValidator(control: AbstractControl){
  const valor = control.value as string;
  if(valor != valor.toLowerCase()) {
    return {minusculo: true };
  }else{
    return null;
  }
}
