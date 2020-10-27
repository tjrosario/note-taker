import generateID from '../common/generateID';

import * as types from './notesActionTypes';

const createNote = (note) => ({
    note: {
        id: generateID(),
        value: note
    },
    type: types.CREATE_NOTE
});

const deleteNote = (id) => ({
    id,
    type: types.DELETE_NOTE
});

const editNote = (note) => ({
    note,
    type: types.EDIT_NOTE
});

export default {
    createNote,
    deleteNote,
    editNote
};
