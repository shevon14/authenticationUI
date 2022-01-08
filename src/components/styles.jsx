import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTWEIGHT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        marginVertical: 10,
        shadowColor: COLORS.darkGrey,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    iconContainer: { marginRight: 10 },
    title: {
        fontWeight: FONTWEIGHT.bold,
        color: COLORS.title
    },
    input: {
        width: SIZES.width / 2 + 20,
        height:  Platform.OS === 'ios' ? 20 : 35,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: SIZES.width / 2 - 40,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingLeft: 15,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.darkGrey,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 5,
        marginVertical: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.title,
        marginLeft: 15,
        fontWeight: FONTWEIGHT.weight700,
    },
});

export default styles;