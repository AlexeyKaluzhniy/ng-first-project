import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddPerson } from '../actions/first.actions';
import { Person } from '../model/person.model';
import { FirstState } from '../state/first.state';
import * as moment from 'moment';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {

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
    this.firstForm.reset({gender: 'man'});
  }

  minDate: Date = new Date(1900, 1, 1);
  maxDate: Date = new Date(2017, 7, 8);

  formatDate(date: string) {
    return moment(date).format('DD.MM.YYYY');
  }
}