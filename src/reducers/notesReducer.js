import * as types from '../actions/notesActionTypes';

const defaultState = {
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

        default:
            return state;
    }
};

export default notes;
