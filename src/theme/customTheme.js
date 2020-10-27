import {
    theme
} from '@chakra-ui/core';

const customTheme = {
    ...theme,
    fonts: {
        body: '"Merriweather", serif',
        heading: '"Lato", sans-serif',
        mono: 'Menlo, monospace'
    }
};

export default customTheme;
