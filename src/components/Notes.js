import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Text,
    Textarea
} from '@chakra-ui/core';
import React, {
    useRef, useState
} from 'react';
import {
    useDispatch, useSelector
} from 'react-redux';

import allActions from '../actions';

import Note from './Note';

function Notes() {
    const dispatch = useDispatch();

    const textareaRef = useRef();

    const notes = useSelector((state) => state.notes.notes);

    const [
        note,
        setNote
    ] = useState('');

    const submit = () => {
        dispatch(allActions.notesActions.createNote(note));

        // Reset text area cursor position to beginning
        setImmediate(() => {
            textareaRef.current.selectionStart = 0;
            textareaRef.current.selectionEnd = 0;
        });

        setNote('');
    };

    const editNote = (id) => dispatch(allActions.notesActions.editNote(id));

    const removeNote = (id) => {
        const confirmed = window.confirm('Are you sure you want to remove this note?');

        if (confirmed) {
            dispatch(allActions.notesActions.deleteNote(id));
        }
    };

    // Handle enter key
    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            submit();
        }
    };

    return (
        <Grid
            gap={6}
            paddingY={'5'}
            templateColumns={{
                md: '60% 40%'
            }}
        >
            <Box as={'section'}>

                {/* Note form */}
                <FormControl mb={'3'}>
                    <FormLabel htmlFor={'note'}>Enter Note:</FormLabel>
                    <Textarea
                        id={'note'}
                        onChange={(ev) => setNote(ev.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={'eg - Have to do laundry today'}
                        ref={textareaRef}
                        value={note}
                    />
                </FormControl>

                <Box
                    display={'flex'}
                    justifyContent={'flex-end'}
                >
                    <Button
                        onClick={submit}
                        variantColor={'blue'}
                    >Add Note
                    </Button>
                </Box>

            </Box>

            <Box as={'section'}>
                <Heading
                    as={'h2'}
                    mb={'3'}
                    size={'md'}
                >
                    Your Current Notes
                </Heading>

                {/* Placeholder for empty notes set */}
                {!notes.length
                    ? (
                        <Text
                            as={'p'}
                            color={'grey'}
                        >There aren't any notes.  Add one to the left.
                        </Text>
                    )
                    : null}

                {/* Render notes list */}
                <Box
                    maxH={'500px'}
                    overflow={'auto'}
                >
                    {notes.map((item) => (
                        <Note
                            {...item}
                            key={item.id}
                            onEdit={editNote}
                            onRemove={removeNote}
                        />
                    ))}
                </Box>

            </Box>
        </Grid>
    );
}

export default Notes;
