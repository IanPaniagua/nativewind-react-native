import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    // too open the icon burger
    navigation.dispatch( DrawerActions.toggleDrawer)
  }


  return (
    <SafeAreaView>
        <View className='px-10'>

         

          {/* one way to do it */}
          {/* <CustomButton onPress={() => router.push('/products') }>Productos</CustomButton> */}
          
          <CustomButton 
            className='mb-2'
            color={"primary"}
            onPress={() => router.push('/products')}
           >
            Productos
          </CustomButton>

          <CustomButton 
            className='mb-2'
            color={"secondary"}
            onPress={() => router.push('/profile')}
           >
            Profile
          </CustomButton>
          
          <CustomButton 
            className='mb-2'
            color={"tertiary"}
            onPress={() => router.push('/settings')}
           >
            Settings
          </CustomButton>
          

            {/* <Link className='mb-5' href="/products">Products</Link>
            <Link className='mb-5' href="/profile">Profile</Link>
            <Link className='mb-5' href="/settings">Settings</Link> */}
          {/* one way to do it */}
          <Link href="/products" asChild>
          <CustomButton 
            className='mb-10'
            variant='text-only'
            >
              Productos
            </CustomButton>
          </Link> 
          <CustomButton onPress={onToggleDrawer }>
            Open Menu
          </CustomButton>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen