import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from './styles';
import TextInputContainer from '../../components/textInput';
import BoxButton from "../../components/button";

const SignUp = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>Become a part of the Team Trees</Text>
                <TextInputContainer icon="email-outline" name="E-Mail" placeholder="Please enter email" />
                <TextInputContainer icon="phone-outline" name="Contact" placeholder="Please enter a contact number" />
                <TextInputContainer icon="lock-outline" name="Password" placeholder="Please enter a password" />
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Join in to community</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>By creating an account you agree to Team Tress </Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.textClickble}>Terms of use </Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                    and 
                </Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.textClickble}> Privacy Policy </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.line} />
                <Text style={styles.subtitle}>or connect with</Text>
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

export default SignUp;