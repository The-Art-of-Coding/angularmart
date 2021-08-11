import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-model-form',
  templateUrl: './demo-model-form.component.html',
  styleUrls: ['./demo-model-form.component.css']
})
export class DemoModelFormComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    // email: new FormControl(null, [Validators.required]),
    //y Using below syntax, we can modify behaviour only for
    email: new FormControl(null, {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    age: new FormControl(21, [Validators.required]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required, this.zipcodeValidator])
    })
  },
    //THE updateOn flag make the model values get updated only on Blur. so value will not get updated till blur event occurs
    // {
    //   updateOn: 'blur'
    // }
  )

  constructor() { }

  ngOnInit(): void {

  }

  saveData(){
    //To handle the case of user submitting the form directly
    this.userForm.markAllAsTouched();
    console.log(this.userForm);
    if(this.userForm.valid){
      console.log('VALUE', this.userForm.value);
    }
  }

  keys = ['name', 'email', 'age'];


  //TO LOAD DATA INTO THE FORM EXAMPLE DEFAULT VALUES OR SAVED VALUES
  loadData(){
    let user = {
      name: 'John',
      email: 'test@gmail.com',
      age: '22'
    //  THe above data should be complete(all values present)
    }
    //USED when we have compplete data
    this.userForm.setValue(user);
  }

  //Patch Value is when we have partial data
  patchValue(){
    let user = {
      name: 'John',
      // email: 'test@gmail.com',
      age: '22'
    //  THe above data should be complete(all values present)
    }
    this.userForm.patchValue(user);
  }


//  CUSTOM VALIDATORS
//  Ideally the validator will be in a separate file.
  zipcodeValidator(control: FormControl){
    if(control.value == 12345 ){
      return null;
    }
    return {
      //Name of Errror: Data Related to the error
      //Syntax as per angular is use first part of name before  the word
      // "validator" hence zipcodeValidator -> Zipcode
      zipcode: {
        expectedValue: 12345,
        currentValue: control.value
      },
    }
  }
}
