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
        <Text className="text-center text-2xl font-black text-slate-800">This is Home page</Text>
        <Text className="mt-1 text-center text-sm font-medium text-slate-500">
          Explore your personalized system metrics
        </Text>

        <View className="mt-4 flex flex-row items-center justify-center gap-4">
          <Link
            href="./(auth)/sign-up"
            className="bg-success rounded-2xl border-1 p-3 text-amber-50">
            Sign up
          </Link>
          <Link href="./(auth)/sign-in">Sign in</Link>
        </View>

        <View className="mt-5 flex w-full items-center justify-center gap-4">
          <Link href="/subscription/spotify">spotify subscription</Link>
          <Link
            href={{
              pathname: '/subscriptions/[id]',
              params: { id: 'claude' },
            }}>
            claude subscription
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
