import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user : Object = {
    name : "David",
    lastName : "Ortiz",
    email : "davidortizd1988@gmail.com",
    country: 1,
    gender: "male",
    accept: false
  };

  countries: object[] = [{
        name: "Mexico",
        id: 1
    },
    {
      name: "USA",
      id: 2
    }
  ];

  genders: object[] = [
    {value : "male"},
    {value: "female"}
  ];


  constructor() {
  }

  ngOnInit() {
  }


  save(form:NgForm){
    console.log(form);
    console.log(form.value);
    console.log(this.user);
    form.reset();
  }

}
