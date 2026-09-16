import '../global.css';
import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-4">
      <View className="mb-6 w-full px-2">
        <Text className="text-center text-2xl font-black text-slate-800">This is Home page</Text>
        <Text className="mt-1 text-center text-sm font-medium text-slate-500">
          Explore your personalized system metrics
        </Text>

        <View className='flex flex-row gap-4 justify-center items-center mt-4'>
          <Link href="./(auth)/sign-up" className='p-3 border-1 rounded-2xl bg-success text-amber-50'>Sign up</Link>
          <Link href="./(auth)/sign-in">Sign in</Link>
        </View>
      </View>
    </View>
  );
}
