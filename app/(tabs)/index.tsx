import '../../global.css';
import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <View className="mb-6 w-full px-2">
        <Text className="text-center text-2xl text-primary font-sans-extrabold">This is Home page</Text>
        <Text className="mt-1 text-center text-sm font-medium text-slate-500">
          Explore your personalized system metrics
        </Text>

        <View className="mt-4 flex flex-row items-center justify-center gap-4">
          <Link
            href="./(auth)/sign-up"
            className="bg-primary rounded-2xl border-1 p-3 text-white">
            Sign up
          </Link>
          <Link href="./(auth)/sign-in">Sign in</Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
