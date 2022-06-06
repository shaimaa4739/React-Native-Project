import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet } from 'react-native';
import Home from './Home';
import Profile from './Profile';
import Cart from './Cart';
import Setting from './Setting';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                tabBarActiveTintColor: '#ea580c',
                headerShown:false

            }}
        >
            <Tab.Screen
                name="home"
                component={Home}

                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarActiveTintColor: '#ea580c',
                    tabBarInactiveTintColor: '#a3a3a3',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' size={size} color={color} ></Ionicons>
                    ),
                }}
            />


            <Tab.Screen
                name="setting"
                component={Setting}
                options={{
                    tabBarLabel: 'setting',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarActiveTintColor: '#ea580c',
                    tabBarInactiveTintColor: '#a3a3a3'
                    
                    ,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='settings' size={size} color={color} ></Ionicons>
                    ),
                }}
            />


            <Tab.Screen
                name="cart"
                component={Cart}
                options={{
                    tabBarLabel: 'cart',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarActiveTintColor: '#ea580c',
                    tabBarInactiveTintColor: '#a3a3a3',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='cart' size={size} color={color} ></Ionicons>
                    ),
                    tabBarBadge: 3,
                }}
            />

            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    
                    tabBarLabel: 'profile',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarActiveTintColor: '#ea580c',
                    tabBarInactiveTintColor: '#a3a3a3',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='person' size={size} color={color} ></Ionicons>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})