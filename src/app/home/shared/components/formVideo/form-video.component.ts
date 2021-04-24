import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { TestemunhoService } from 'src/app/services/testemunhos.service';

@Component({
  selector: 'lp-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.scss'],
})
export class FormVideoComponent {
  depoimentoForm: FormGroup;
  @ViewChild('form') private formDirective: NgForm;
  //Para upload do video
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;
  complete: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private testemunhoService: TestemunhoService,
    private storage: AngularFireStorage
  ) {
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
      lgpd: new FormControl(false, Validators.requiredTrue),
      depoimentoVideo: new FormControl('', Validators.required),
    });
  }

  enviar(): void {
    this.testemunhoService.createOrUpdate(this.depoimentoForm.value).then(() => alert("Depoimento enviado com sucesso!"), () => alert("Não foi possível enviar seu depoimento!"));
    this.formDirective.resetForm();
  }

  async upload(event) {
    this.complete = false;
    const file = event.target.files[0];
    const botaoEnviar = document.getElementById("images");

    if (file.size < 250000000) {
      const path = `videos/${this.depoimentoForm.controls['email'].value}`;
      const fileRef = this.storage.ref(path);
      this.task = this.storage.upload(path, file);
      this.task.then((up) => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.complete = true;
          this.depoimentoForm.patchValue({
            depoimentoVideo: url,
          });
        });
      });
      this.uploadPercent = this.task.percentageChanges();
    } else {
      alert("Arquivo muito grande!");
      botaoEnviar.setAttribute("isvalid", "false");
      this.depoimentoForm.controls['depoimentoVideo'].setErrors(null);
    }
  }
}
