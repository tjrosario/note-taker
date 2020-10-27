import * as types from '../actions/notesActionTypes';

const defaultState = {
    note: {},
    notes: []
};

const notes = (state = defaultState, action) => {
    switch (action.type) {
        case types.CREATE_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.note
                ]
            };

        case types.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((item) => item.id !== action.id)
            };

        case types.EDIT_NOTE:
            return {
                ...state,
                note: action.note
            };

        case types.UPDATE_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes.map((item) => (item.id === action.note.id
                    // transform note with a matching id
                        ? {
                            ...item,
                            value: action.note.value
                        }
                    // otherwise return original note
                        : item))
                ]
            };

        case types.RESET_NOTE:
            return {
                ...state,
                note: {
                    id: null,
                    value: ''
                }
            };

        default:
            return state;
    }
};

export default notes;
