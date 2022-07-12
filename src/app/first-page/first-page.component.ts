import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddPerson } from '../actions/first.actions';
import { Person } from '../model/person.model';
import { FirstState } from '../state/first.state';
import * as moment from 'moment';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {

  firstForm: FormGroup;

  @Select(FirstState.getPeople) people$: Observable<Person[]> | undefined;

  constructor(private store: Store) {

    this.firstForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('man'),
    });

  }

  submit() {
    this.store.dispatch(new AddPerson(this.firstForm.value));
  }

  minDate: Date = new Date(1900, 1, 1);
  maxDate: Date = new Date(2017, 7, 8);

  formatDate(date: string) {
    return moment(date).format('DD.MM.YYYY');
  }

}