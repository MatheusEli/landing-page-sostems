import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TestemunhoService } from "src/app/services/testemunhos.service";

@Component({
    selector: 'lp-testemunhos',
    templateUrl: './testemunhos.component.html',
    styleUrls: ['./testemunhos.component.scss']
})
export class TestemunhosComponent{
    depoimentoForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private testemunhoService: TestemunhoService){
        this.depoimentoForm = formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            fullName: [
              '',
              [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40),
              ],
            ],
            celular: [
                '',
                [
                    Validators.required
                ]
            ],
            pais: [
                '',
                [
                    Validators.required
                ] 
            ],
            UF:  [
                '',
                [
                    Validators.required
                ]
            ],
            cidade: [
                '',
                [
                    Validators.required
                ]
            ],
            depoimento: [
                '',
                [
                    Validators.required
                ]
            ]
          });
    }


    enviar(): void{
        this.testemunhoService.createOrUpdate(this.depoimentoForm.value);
    }
}