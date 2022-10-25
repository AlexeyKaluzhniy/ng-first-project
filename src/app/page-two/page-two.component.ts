import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadPeople } from '../actions/second.actions';
import { PersonFetch } from '../model/person-fetch.model';
import { SecondState } from '../state/second.state';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  peopleFetch: PersonFetch[] = [];
  dataSource!: MatTableDataSource<PersonFetch>;
  columns: string[] = ['id', 'name', 'username', 'email', 'city'];

  constructor(private store: Store) { }

  @Select(SecondState.getPeopleFetch) getPeople$: Observable<PersonFetch[]> | undefined;

  getPeople() {
    this.store.dispatch(new LoadPeople());
    this.getPeople$?.subscribe((response: PersonFetch[]) => {
      this.peopleFetch = response;
      this.dataSource = new MatTableDataSource(this.peopleFetch);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.getPeople();
  }

  filtering(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
}
