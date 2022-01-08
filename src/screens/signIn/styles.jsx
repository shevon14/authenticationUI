import { StyleSheet } from "react-native";
import { COLORS, FONTWEIGHT, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: SIZES.h1,
        color: COLORS.title,
        textAlign: 'center',
        fontWeight: FONTWEIGHT.bold,
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: COLORS.title,
        fontSize: SIZES.h4,
    },
    textClickble: {
        color: COLORS.primary,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        margin: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    buttonText: {
        color: COLORS.white,
        fontSize: SIZES.h3,
        fontWeight: FONTWEIGHT.bold,
    },
    line: {
        backgroundColor: COLORS.darkGrey,
        width: SIZES.width / 4,
        height: 2,
        margin: 20,
    },
    subtitle: {
        color: COLORS.title,
        fontWeight: FONTWEIGHT.bold,
    }
});

export default styles;