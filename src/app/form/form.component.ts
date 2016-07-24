import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm }    from '@angular/forms';
import { Hero }    from '../hero/hero';

@Component({
    moduleId: module.id,
    selector: 'myForm',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})

export class FormComponent implements OnInit {
 
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  
  submitted = false;

  ngOnInit(){}

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


}