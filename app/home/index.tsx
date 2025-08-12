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
          <Link href="/products" asChild>
          <CustomButton className='mb-10' onPress={() => router.push('/products') }>Productos</CustomButton>
          </Link>          

          {/* one way to do it */}
          {/* <CustomButton onPress={() => router.push('/products') }>Productos</CustomButton> */}
          
          <CustomButton className='mb-10' color={"secondary"}>Secondary</CustomButton>
          
          <CustomButton variant={'text-only'}>Text-only-Button</CustomButton>
          {/* we added the prop classname for us other clasname */}
          <CustomButton variant={'text-only'} className='mb-10'>Text-only-Button</CustomButton>

            {/* <Link className='mb-5' href="/products">Products</Link>
            <Link className='mb-5' href="/profile">Profile</Link>
            <Link className='mb-5' href="/settings">Settings</Link> */}
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen