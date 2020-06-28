import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  imageSrc:any;
  selfieSrc:any;
  image_loaded:boolean = false;
  selfie_loaded:boolean = false;

  registerForm = this.fb.group({
    name:['', [Validators.required]],
    cpf:['', Validators.required],
    endereco:['', Validators.required]
  });
  emailForm = this.fb.group({
    email:['', [Validators.email, Validators.required]]
  });
  passwordForm = this.fb.group({
    password:['', [Validators.required]],
    confirm:['', [Validators.required]]
  },{validator:this.passwordConfirming});
  step:number = 1;
  ngOnInit() {
  }

  next(){
    this.step++;
    console.log("Submitted");
  }

  prev(){
    this.step--;
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean }{
    if (c.get('password').value !== c.get('confirm').value) {
      return {invalid: true};
    }
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
    }

    this.image_loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
      console.log("_handleReaderLoaded")
      var reader = e.target;
      this.imageSrc = reader.result;
      this.image_loaded = true;
  }

  handleSelfieChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
    }

    this.selfie_loaded = false;

    reader.onload = this._handleSelfieLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleSelfieLoaded(e) {
      console.log("_handleReaderLoaded")
      var reader = e.target;
      this.selfieSrc = reader.result;
      this.selfie_loaded = true;
  }

}
