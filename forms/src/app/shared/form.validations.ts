import { FormControl } from '@angular/forms';

export class FormValidations {
    static cepValidator(control: FormControl) {
        const cep = control.value;

        // verifica se cep não é undefined ou null e se é diferente de vazio
        if (cep && cep !== '')  {
            let validateCep = /ˆ[0-9]{8}$/;
            return validateCep.test(cep) ? null : { invalidCep: true }
            // precisa ser objeto
        }

        return null;
    }
}