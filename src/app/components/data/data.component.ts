import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  currentForm:FormGroup;

  user : object;

  constructor() {
    this.user = {
      fullName:{
        name: "david ortiz",
        lastName: "Ortiz"
      },
      email: "",
      activities : []
    }

    this.currentForm = new FormGroup({
      'fullName' : new FormGroup({
        'name' : new FormControl("David", [Validators.required, Validators.minLength(3) ]),
        'lastName' : new FormControl("Ortiz", [Validators.required, this.customNameValidation])
      }),
      'email' : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'activities': new FormArray([
        new FormControl ('',Validators.required)
      ]),
      /** We use bind on these 2 declarations because we are losing the value of this when calling the custom validation functions ***/
      'password' : new FormControl(''),
      'checkPassword' : new FormControl(''),
      'user' : new FormControl('',Validators.required,this.checkUserValidation)
    });

    this.currentForm.controls.password.setValidators([
      Validators.required,
      this.passwordMatch.bind( this.currentForm )
    ]);

    this.currentForm.controls.user.valueChanges.subscribe((data) =>{
      console.log(data);
    });
    this.currentForm.controls.user.statusChanges.subscribe((data) =>{
      console.log(data);
      if(data === "VALID"){
        alert(this.currentForm.get('fullName.name').value);
        this.currentForm.controls.fullName['controls'].name.setValue("Drecko");
      }
    });
    //this.currentForm.setValue(this.user);
  }

  ngOnInit() {
  }

  addNewActivity(){
    (<FormArray>this.currentForm.controls.activities).push(new FormControl ('',Validators.required));
  }

  passwordMatch(control : FormControl):{[s:string]:boolean}{
    let form : FormGroup = (this as unknown as FormGroup);
    console.log(control.value);
    console.log(form.controls.checkPassword.value);
    if(control.value !== form.controls.checkPassword.value){
      return{ nomatch:true}
    }else{
      return null;
    }

  }

  customNameValidation(control : FormControl):{[s:string]:boolean}{
    if(control.value.toLowerCase() === "ortiz" && control.value){
      return{
        ortiz:true
      }
    }else{
      return null;
    }
  }

  checkUserValidation(control : FormControl): Promise<any> | Observable<any> {
    let promise = new Promise( (resolve, reject) => {
        setTimeout( () =>{
          if(control.value === "Drecko"){
            resolve({exist:true});
          }else{
            resolve(null);
          }
        },3000);
    });

    return promise;
  }

  saveChanges(){
    console.log(this.currentForm.value);
    console.log(this.currentForm);
    /*this.currentForm.reset({
      full:{
        n: "",
        ln: ""
      },
      em: ""
    });*/
  }

}
