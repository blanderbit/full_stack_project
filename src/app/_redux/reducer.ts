
import {Actions, ActionTypes, GetCountryAndCode} from './action';

export const initialState = {
    profile: {},
    country: [],
    events: []
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
