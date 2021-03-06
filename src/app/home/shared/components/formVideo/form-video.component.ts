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
  public loading = false;
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
    const botaoEnviar = (document.getElementById("images") as HTMLInputElement);
    botaoEnviar.value = '';
  }

  async upload(event) {
    this.complete = false;
    this.loading = true;
    const file = event.target.files[0];
    const botaoEnviar = (document.getElementById("images") as HTMLInputElement);

    if (file.size < 250000000) {
      const path = `videos/${this.depoimentoForm.controls['email'].value}`;
      const fileRef = this.storage.ref(path);
      this.task = this.storage.upload(path, file);
      this.task.then((up) => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.complete = true;
          this.loading = false;
          this.depoimentoForm.patchValue({
            depoimentoVideo: url,
          });
        });
      });
      this.uploadPercent = this.task.percentageChanges();
    } else {
      alert("Seu vídeo não pode ser enviado porque o tamanho excede o limite permitido, tente enviar um tamanho menor (até 250 mb)");
      this.loading = false;
      botaoEnviar.value = '';
      this.formDirective.resetForm();
    }
  }
}
