import '../global.css';
import { View, Text, Image } from 'react-native';
import {} from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-4">
      <View className="mb-6 w-full px-2">
        <Text className="text-2xl font-black tracking-tight text-slate-800">
          Featured Collections
        </Text>
        <Text className="mt-1 text-sm font-medium text-slate-500">
          Explore your personalized system metrics
        </Text>
      </View>

      <View className="w-full flex-row gap-4 px-1">
        <View className="relative flex-1 overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50">
          <View className="absolute top-0 right-0 -mt-6 -mr-6 h-24 w-24 rounded-full bg-blue-500/10 blur-xl" />

          <View className="mb-4 h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
            <Image
              source={require('../assets/favicon.png')}
              className="h-6 w-6 opacity-80"
              style={{ tintColor: '#2563eb' }}
            />
          </View>

          <Text className="mb-1 text-xs font-bold tracking-wider text-blue-600 uppercase">
            Analytics
          </Text>
          <Text className="mb-2 text-lg leading-tight font-bold text-slate-800">
            System Overview
          </Text>
          <Text className="text-xs leading-relaxed font-medium text-slate-500">
            Monitor real-time e-commerce revenue spikes and active user sessions.
          </Text>
        </View>

        <View className="relative flex-1 rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50">
          <View className="absolute top-0 right-0 -mt-6 -mr-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-xl" />

          <View className="mb-4 h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
            <Image
              source={require('../assets/favicon.png')}
              className="h-6 w-6 opacity-80"
              style={{ tintColor: '#059669' }}
            />
          </View>

          <Text className="mb-1 text-xs font-bold tracking-wider text-emerald-600 uppercase">
            Sales
          </Text>
          <Text className="mb-2 text-lg leading-tight font-bold text-slate-800">Storefront</Text>
          <Text className="text-xs leading-relaxed font-medium text-slate-500">
            Manage physical stock inventory thresholds and custom layout structures.
          </Text>
        </View>
      </View>

      <View className="w-full flex flex-column gap-4 p-1 m-6">
        <View className="rounded-3xl border-1 border-gray-400 p-5 shadow-xl shadow-slate-200/50">
          <View className="mb-4 h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
            <Image
              source={require('../assets/favicon.png')}
              className="h-6 w-6 opacity-80"
              style={{ tintColor: '#059669' }}
            />
          </View>

          <Text className="font-bold text-[#059669]">Trying</Text>
          <Text className="text-xl font-bold">Not Quiting</Text>

          <Text className='mt-1 text-gray-700 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla consequatur
          </Text>
        </View>

        <View className="rounded-3xl border-1 border-gray-400 p-5 shadow-xl shadow-slate-200/50">
          <View className="mb-4 h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
            <Image
              source={require('../assets/favicon.png')}
              className="h-6 w-6 opacity-80"
              style={{ tintColor: '#059669' }}
            />
          </View>

          <Text className="font-bold text-[#059669]">Trying</Text>
          <Text className="text-xl font-bold">Not Quiting</Text>

          <Text className='mt-1 text-gray-700 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla consequatur
          </Text>
        </View>
      </View>
    </View>
  );
}
