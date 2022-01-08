import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import { Image, Platform, View } from "react-native";
import { COLORS, FONTWEIGHT, SIZES } from "../constants/theme";

const authStack = createMaterialTopTabNavigator({
    signIn: {
        screen: SignIn,
        navigationOptions: {
            tabBarLabel: 'SIGN IN',
        }
    },
    signUp: {
        screen: SignUp,
        navigationOptions: {
            tabBarLabel: 'SIGN UP'
        }
    },
}, {
    initialRouteName: 'signIn',
    tabBarOptions: {
        style: {
            backgroundColor: COLORS.primary,
            shadowColor: COLORS.darkGrey,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 5,
        },
        indicatorStyle: {
            backgroundColor: COLORS.primary,
        },
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.lightGreen,
        labelStyle: {
            fontWeight: FONTWEIGHT.bold,
            fontSize: SIZES.h2,
        },
        tabStyle: {
            height: 70,
            backgroundColor: COLORS.white,
        }
    }
});

const mainStack = createStackNavigator({
    auth: {
        screen: authStack,
        navigationOptions: {
            headerTitle: () => (
                <View style={{
                    height: 120,
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <Image 
                        style={{ height: 180, width: 200 }}
                        source={require('../assets/teamtrees.png')}
                        resizeMode="contain"
                    />
                </View>
            ),
            headerStyle: {
                backgroundColor: COLORS.primary,
                height: Platform.OS === 'ios' ? 170 : 130,
                borderBottomWidth: 0,
                elevation: 0,
            }
        },
    }
});

const Router = createAppContainer(mainStack);

export default Router;