
import {Actions, ActionTypes, ClearEvents, GetCountryAndCode} from './action';

export const initialState = {
    profile:  {},
    country:  [],
    events:   [],
    paginate: {}
};

export function Reducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.getProfile:
            return {
                ...state,
                profile: action.load
            };
        case ActionTypes.updateProfile:
            return {
                ...state,
                profile: action.load
            };
        case ActionTypes.getCountryAndCode:
            return {
                ...state,
                country: action.load
            };
        case ActionTypes.getEvents:
            return {
                ...state,
                events: Array.isArray(action.load) ? state.events.concat(action.load) : [action.load].concat(state.events)
            };
        case ActionTypes.paginateEvents:
            return {
                ...state,
                paginate: action.load
            };
        case ActionTypes.clearEvents:
            return {
                ...state,
                events: action.load
            };
        // case ActionTypes.updateEvents:
        // return {
        //     ...state,
        //     events: [...state.events, action.load]
        // };
        // case ActionTypes.updateEvents:
        // return {
        //     ...state,
        //     events: [...state.events, action.load]
        // };
        //
        // case ActionTypes.Reset:
        //     return 0;

        default:
            return state;
    }
}
