import React from "react";
import Pelicula from "../screens/Peliculas";
import Serie from "../screens/Series";
import Pestreno from "../screens/Pestrenos";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function Navigation(){
    
    return(
        <Tab.Navigator
            initialRouteName="Pelicula"
            screenOptions={({ route }) => ({
                tabBarnpIcon: ({focused, size }) =>{
                    let iconName;

                    if (route.name === 'Pelicula'){
                        iconName=focused ? 'popcorn' : 'popcorn',
                        size=22
                    }else if(route.name === 'Serie'){
                        iconName = focused ? 'television' : 'television',
                        size=22
                    }else if(route.name === 'Pestreno'){
                        iconName = focused ? 'animation-play' : 'animation-play-outline',
                        size=22
                    } 
                    return <Ionicons name={iconName} size={size} />                  
                },
                tabBarActiveTintColor: "#992020",
                tabBarInactiveTintColor: "FFF",
                tabBarActiveBackgroundColor:"black"

            })}            
           
        >
             <Tab.Screen name="Pelicula" component={Pelicula} options={{title:'Pelicula'}} />
             <Tab.Screen name="Serie" component={Serie} options={{title:'Series'}} />
             <Tab.Screen name="Pestreno" component={Pestreno} options={{title:'Proximos estrenos'}} />   
        </Tab.Navigator>
    );
}

