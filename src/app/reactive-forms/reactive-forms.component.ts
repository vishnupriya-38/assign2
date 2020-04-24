import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm : FormGroup ;

  constructor() { }

  ngOnInit(): void {
    this.loginForm =  new FormGroup({
      email : new FormControl(),
      password : new FormControl(),
      skills:new FormArray([
        new FormControl()
      ])
    });
  }

  submitForm(){
    console.log(this.loginForm.value);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get skills(){
    return this.loginForm.get('skills') as FormArray;
  }
  addSkill(){
    this.skills.push(new FormControl())
  }

  removeSkill(index:number){
    this.skills.removeAt(index)

  }
}
