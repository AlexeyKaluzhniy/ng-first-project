import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { LoadPeople } from "../actions/second.actions";
import { PersonFetch } from "../model/person-fetch.model";
import { ApiService } from "../service/api.service";
import { tap } from "rxjs";

export interface SecondStateModel {
    peopleFetch: PersonFetch[];
}

@State<SecondStateModel>({
    name: 'peopleFetch',
    defaults: {
        peopleFetch: []
    }
})
@Injectable()
export class SecondState {
    constructor(private service: ApiService) { }

    @Selector()
    static getPeopleFetch(state: SecondStateModel) {
        return state.peopleFetch;
    }

    @Action(LoadPeople)
    Load({getState, setState}: StateContext<SecondStateModel>) {
        return this.service.getPeople().pipe(tap((response: any) => {
            const state = getState();
            setState({
                ...state,
                peopleFetch: response,
            });
        }));
    }
}