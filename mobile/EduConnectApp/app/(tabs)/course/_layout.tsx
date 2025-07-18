import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs , Stack} from 'expo-router';
import {Pressable, StyleSheet} from 'react-native';
import { PaperProvider } from 'react-native-paper';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import modal from "react-native-paper/src/components/Modal";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
            // Disable the static render of the header on web
            // to prevent a hydration error in React Navigation v6.
            headerShown: useClientOnlyValue(false, false),
              tabBarStyle: {
                  backgroundColor: 'aliceblue',
              },

          }}>
            <Tabs.Screen
                  name="profile"
                  options={{
                      title: 'Profile',
                      headerShown:false,
                      tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
                  }}
              />
          <Tabs.Screen
            name="index"
            options={{
              title: 'All Courses',
              tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color}
              />,
            headerShown:false,
            }}
          />
          <Tabs.Screen
            name="my-courses"
            options={{
              title: 'courses',
              tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
                headerShown:false,
            }}
          />
        <Tabs.Screen
            name="[id]"
            options={{
                title: 'search',
                tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
                headerShown:false,
            }}
        />
        </Tabs>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
