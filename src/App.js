import {
    Box, CSSReset, ThemeProvider
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import Notes from './components/Notes';
import './App.css';
import customTheme from './theme/customTheme';

function Container({
    children
}) {
    return (
        <Box
            mx={'auto'}
            px={5}
            width={{
                lg: '80em'
            }}
        >
            {children}
        </Box>
    );
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Container.defaultProps = {
    children: null
};

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <Container>
                <Notes />
            </Container>
        </ThemeProvider>
    );
}

export default App;
