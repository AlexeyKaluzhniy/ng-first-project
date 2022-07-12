import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddPerson } from "../actions/first.actions";
import { Person } from "../model/person.model";

export interface FirstStateModel {
    people: Person[];
}

@State<FirstStateModel>({
    name: 'people',
    defaults: {
        people: []
    }
})
@Injectable()
export class FirstState {
    @Selector()
    static getPeople(state: FirstStateModel) {
        return state.people;
    }

    @Action(AddPerson)
    Add({ getState, setState }: StateContext<FirstStateModel>, { payload }: AddPerson) {
        const state = getState();
        setState({
            people: [...state.people, payload]
        });
    }
}