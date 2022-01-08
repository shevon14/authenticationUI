import React from "react";
import { View, Text, TextInput } from "react-native";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../constants/theme";
import styles from './styles'

const TextInputContainer = (props) => {
    const { name, icon, placeholder} = props;
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name={icon} size={30} color={COLORS.primary} />
            </View>
            <View>
                <Text style={styles.title}>{name}</Text>
                <TextInput style={styles.input} placeholder={placeholder} />
            </View>
        </View>
    )
}

export default TextInputContainer;