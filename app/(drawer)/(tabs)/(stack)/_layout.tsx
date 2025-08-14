import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean) => {
        if (canGoBack) {
            // Usar router.back() de expo-router en lugar de StackActions.pop()
            if (router.canGoBack()) {
                router.back();
            } else {
                // Si no podemos volver atrás, abrir el drawer
                navigation.dispatch(DrawerActions.toggleDrawer());
            }
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: "#FAFAFA"
                },
                headerLeft: ({tintColor, canGoBack}) => 
                    <Ionicons 
                        name={canGoBack ? "arrow-back-outline":"menu"} 
                        size={20}
                        onPress={() => onHeaderLeftClick(canGoBack)}
                    />
            }}
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