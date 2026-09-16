import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const SignUp = () => {
  return (
    <View className='w-full h-screen flex justify-center items-center'>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-in">login to account</Link>
      <Link href='/'>home</Link>
    </View>
  );
};

export default SignUp;
