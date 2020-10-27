import {
    Box, IconButton, Stack
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function Note({
    id, onEdit, onRemove, value
}) {
    return (
        <Box
            backgroundColor={'#edd652'}
            borderRadius={'3px'}
            display={{
                md: 'flex'
            }}
            mb={'3'}
            p={'4'}
        >
            <Box flexGrow={'1'}>{value}</Box>

            <Stack isInline>
                <IconButton
                    icon={'edit'}
                    onClick={() => onEdit({
                        id,
                        value
                    })}
                    p={'1'}
                    size={'14px'}
                />
                <IconButton
                    icon={'close'}
                    onClick={() => onRemove(id)}
                    p={'1'}
                    size={'14px'}
                />
            </Stack>
        </Box>
    );
}

Note.propTypes = {
    id: PropTypes.string,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
    value: PropTypes.string
};

Note.defaultProps = {
    id: null,
    onEdit: () => {},
    onRemove: () => {},
    value: ''
};

export default Note;
