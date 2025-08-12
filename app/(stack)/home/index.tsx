import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
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
            onPress={() => router.push('/products') }>Productos</CustomButton>
          </Link> 
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen