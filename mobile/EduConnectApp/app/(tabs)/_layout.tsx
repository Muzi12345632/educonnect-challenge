import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs , Stack} from 'expo-router';
import {Pressable, StyleSheet} from 'react-native';
import { PaperProvider } from 'react-native-paper';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

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
    /*<Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
              name="index"
              options={{
                  title: 'Profile',
                  tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
                  headerRight: () => (
                      <Link href="/modal" asChild>
                          <Pressable>
                              {({ pressed }) => (
                                  <FontAwesome
                                      name="info-circle"
                                      size={25}
                                      color={Colors[colorScheme ?? 'light'].text}
                                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                  />
                              )}
                          </Pressable>
                      </Link>
                  ),
              }}
          />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>*/

      <PaperProvider>
          <Stack screenOptions={{ headerShown: true,
              title: 'Educonnect' , headerTitleAlign: 'center',animation:'simple_push',
              headerStyle: {
                  backgroundColor: 'aliceblue',
              }}} />
      </PaperProvider>


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
