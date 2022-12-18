import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scan from '../pages/scan';
import Generate from '../pages/generate';
import Icon from '../components/Icon';
import colors from '../assets/colors';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Scan"
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Scan"
                component={Scan}
                options={{
                    tabBarLabel: 'Scan',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="data-matrix-scan" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Generate"
                component={Generate}
                options={{
                    tabBarLabel: 'Generate',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="qrcode" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;