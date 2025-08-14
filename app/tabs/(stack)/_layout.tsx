import { Stack } from "expo-router"
const StackLayout = () => {
  return (
    <Stack
        screenOptions={{
            // headerShown: false,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: "#FAFAFA"
            }
        }
}
    >
        <Stack.Screen
            name="home/index"
            options={{
                title: 'Home '
            }}
        />
        <Stack.Screen
            name="products/index"
            options={{
                title: 'Products',
            }}
        />
        <Stack.Screen
            name="profile/index"
            options={{
                title: 'Profile '
            }}
        />
        <Stack.Screen
            name="settings/index"
            options={{
                title: 'Settings '
            }}
        />

    </Stack>
  )
  
}

export default StackLayout