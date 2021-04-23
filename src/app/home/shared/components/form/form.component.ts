import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TestemunhoService } from 'src/app/services/testemunhos.service';

@Component({
  selector: 'lp-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{
  depoimentoForm: FormGroup;

    //Para upload do video

    @ViewChild('inputFile', { static: true }) inputFile: ElementRef;
    uploadPercent: Observable<number>;
    downloadURL: Observable<string>;
    task: AngularFireUploadTask;
    complete: boolean;

    constructor(private formBuilder: FormBuilder, private testemunhoService: TestemunhoService, private storage: AngularFireStorage) {
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
            celular: new FormControl('', Validators.required),
            pais: new FormControl('', Validators.required),
            UF: new FormControl('', Validators.required),
            cidade: new FormControl('', Validators.required),
            depoimento: new FormControl('', Validators.required),
            lgpd: new FormControl(false, Validators.requiredTrue),
            depoimentoVideo: ''
        });
    }


    enviar(): void {
        this.testemunhoService.createOrUpdate(this.depoimentoForm.value);
    }

    async upload(event) {
        this.complete = false;
        const file = event.target.files[0];
        const path = `videos/${this.depoimentoForm.controls['email'].value}`;
        const fileRef = this.storage.ref(path);
        this.task = this.storage.upload(path, file);
        this.task.then(up => {
            fileRef.getDownloadURL().subscribe(url => {
                this.complete = true;
                this.depoimentoForm.patchValue({
                    depoimentoVideo: url
                })
            });
        });
        this.uploadPercent = this.task.percentageChanges();
        this.inputFile.nativeElement.value = '';
    }
}
