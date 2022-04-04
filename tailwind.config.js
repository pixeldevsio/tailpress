const plugin = require('tailwindcss/plugin');
const _ = require("lodash");
const tailpress = require('./tailpress.json');

module.exports = {
    tailpress,
    content: [
        './*.php',
        './*/*.php',
        './safelist.txt'
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: tailpress.colors,
            zIndex: {
                '-1': '-1',
            }
        },
        fontFamily: {
            'sans': ['SF Compact', 'ui-sans-serif'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['SF Compact', 'Helvetica', 'ui-sans-serif'],
            'body': ['Open Sans', 'Helvetica'],
            'interstate': ['interstate']
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
             'base': '100%',
             'lg': '1.125rem',
             'xl': '1.25rem',
             '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
             '5xl': '3rem',
             '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            'xxl': 'clamp(7rem, -0.875rem + 13vw, 14rem)'
        },
    },
    plugins: [
        plugin(function ({addUtilities, addComponents, e, prefix, config, theme}) {
            const colors = theme('colors');
            const margin = theme('margin');
            const screens = theme('screens');
            const fontSize = theme('fontSize');

            const editorColorText = _.map(config("tailpress.colors", {}), (value, key) => {
                return {
                    [`.has-${key}-text-color`]: {
                        color: value,
                    },
                };
            });

            const editorColorBackground = _.map(config("tailpress.colors", {}), (value, key) => {
                return {
                    [`.has-${key}-background-color`]: {
                        backgroundColor: value,
                    },
                };
            });

            const editorFontSizes = _.map(config("tailpress.fontSizes", {}), (value, key) => {
                return {
                    [`.has-${key}-font-size`]: {
                        fontSize: value[0],
                        fontWeight: `${value[1] || 'normal'}`
                    },
                };
            });

            const alignmentUtilities = {
                '.alignfull': {
                    margin: `${margin[2] || '0.5rem'} calc(50% - 50vw)`,
                    maxWidth: '100vw',
                    "@apply w-screen": {}
                },
                '.alignwide': {
                    "@apply -mx-16 my-2 max-w-screen-xl": {}
                },
                '.alignnone': {
                    "@apply h-auto max-w-full mx-0": {}
                },
                ".aligncenter": {
                    margin: `${margin[2] || '0.5rem'} auto`,
                    "@apply block": {}
                },
                [`@media (min-width: ${screens.sm || '640px'})`]: {
                    '.alignleft:not(.wp-block-button)': {
                        marginRight: margin[2] || '0.5rem',
                        "@apply float-left": {}
                    },
                    '.alignright:not(.wp-block-button)': {
                        marginLeft: margin[2] || '0.5rem',
                        "@apply float-right": {}
                    },
                    ".wp-block-button.alignleft a": {
                        "@apply float-left mr-4": {},
                    },
                    ".wp-block-button.alignright a": {
                        "@apply float-right ml-4": {},
                    },
                },
            };

            const imageCaptions = {
                '.wp-caption': {
                    "@apply inline-block": {},
                    '& img': {
                        marginBottom: margin[2] || '0.5rem',
                        "@apply leading-none": {}
                    },
                },
                '.wp-caption-text': {
                    fontSize: (fontSize.sm && fontSize.sm[0]) || '0.9rem',
                    color: (colors.gray && colors.gray[600]) || '#718096',
                },
            };

            addUtilities([editorColorText, editorColorBackground, alignmentUtilities, editorFontSizes, imageCaptions], {
                respectPrefix: false,
                respectImportant: false,
            });
        }),
    ]
};