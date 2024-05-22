import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//Screens
import Comida from "./Screens/Comida";
import InfoEstudiante from "./Screens/InfoEstudiante";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Info" component={InfoEstudiante} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="info-circle" size={24} color="black" />
                ),
            }} />
            <Tab.Screen name="Comida" component={Comida} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="fast-food" size={24} color="black" />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}