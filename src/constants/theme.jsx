const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#08594A',
    lightGreen: '#A5E5D8',
    darkGrey: '#585656',
    white: '#FFFF',
    title: '#212F3C',
};

export const SIZES = {
    h1: 20,
    h2: 18,
    h3: 16,
    h4: 14,
    h5: 12,
    h6: 10,

    width,
    height,
}

export const FONTWEIGHT = {
    bold: 'bold',
    normal: 'normal',
    weight500: '500',
    weight700: '700',
}