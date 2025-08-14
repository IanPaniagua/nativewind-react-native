import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'indigo',
      headerShown: false,
      // tabBarStyle: {
      //   backgroundColor: 'black',
      // },
      // tabBarActiveBackgroundColor: "white"
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'favorites',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
        }}
      />

    <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="address-book" color={color} />,
        }}
      />
    </Tabs>
)}

export default TabsLayout