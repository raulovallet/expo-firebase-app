import React, {Component} from 'react'
import RestaurantsScreens from '../screens/Restaurants/Restaurants'
import {createAppContainer, createStackNavigator, DrawerNavigator, StackNavigatorConfig} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";

const stackConfig = {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'rgba(200, 38 ,74, 1)',
        },
        headerTitleStyle: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        }
    }
};

const leftIcon = (navigation, icon) => <Icon
    name={icon}
    style={marginLeft}
    size={20}
    color={'white'}
    onPress={() => navigation.navigate('DrawerOpen')}
/>;

const rightIcon = (navigation, icon) => <Icon
    name={icon}
    style={marginLeft}
    size={30}
    color={'white'}
    onPress={() => navigation.navigate('ListRestaurants')}
/>;

const RestaurantsCcreenStack = createAppContainer(
    createStackNavigator(
        {
            ListRestaurants:{
                screen: RestaurantsScreens,
                navigationOptions: ({navigation}) => ({
                    title: 'Restaurants',
                    drawerIcon:({tintColor}) => (<Icon name={'home'} size={24} style={{color: tintColor}}/>)
                    headerLeft: leftIcon(navigation, 'bars')
                })
            },
        },
        stackConfig
    )
);

export default DrawerNavigator(
    {
        RestaurantsCcreen: {
            screen: RestaurantsCcreenStack
        }
    },
    {
        drawerBackgroundColor:'rgba(128, 35, 60, 0.7)',
        contentOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle:{
                marginVertical: 0
            }
        }
    }
)
