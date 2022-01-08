import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from './styles';
import TextInputContainer from '../../components/textInput';
import BoxButton from "../../components/button";

const SignIn = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>Welcome to Team Trees</Text>
                <TextInputContainer icon="email-outline" name="E-Mail" placeholder="Please enter email" />
                <TextInputContainer icon="lock-outline" name="Password" placeholder="Please enter a password" />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Forgot your password </Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.textClickble}>click here </Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                    to reset.
                </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Sign in to community</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.line} />
                <Text style={styles.subtitle}>or log in with</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.row}>
                <BoxButton logo={require('../../assets/google.png')} name="Google" />
                <BoxButton logo={require('../../assets/facebook.png')} name="Facebook" />
            </View>
            <View style={styles.row}>
                <BoxButton logo={require('../../assets/apple.png')} name="Apple" />
                <BoxButton logo={require('../../assets/twitter.png')} name="Twitter" />
            </View>
        </ScrollView>
    )
}

export default SignIn;