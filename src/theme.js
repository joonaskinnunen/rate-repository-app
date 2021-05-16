import { Platform } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        appBarBg: '#24292e',
        appBarText: '#FFFFFF',
        languageBadgeText: '#FFFFFF',
        languageBadgeBg: '#4169E1',
        textInputBorder: '#CDCDCD',
        error: '#d73a4a'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: "Roboto",
            ios: "Arial",
            default: "System",
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default theme;