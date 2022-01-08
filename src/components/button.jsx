import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const BoxButton = (props) => {
    const {name, logo} = props;
    return(
        <TouchableOpacity>
            <View style={styles.button}>
            <Image 
                style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                }}
                source={logo}
            />
            <Text style={styles.buttonText}>{name}</Text>
        </View>
        </TouchableOpacity>
    );
}

export default BoxButton;