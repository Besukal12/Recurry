import '@/global.css';
import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import { HOME_BALANCE, HOME_USER } from '@/constants/data';
import { icons } from '@/constants/icon';
import { formatCurrency } from '@/lib/utils';
import dayjs from 'dayjs';
import ListHeading from '@/components/ListHeading';
import UpcomingSubscriptionCard from '@/components/UpcomingSubscriptionCard';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="bg-background flex-1 p-5">
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar" />
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>

        <Image source={icons.add} className="home-add-icon" />
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>

        <View className="home-balance-amount">
          <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
          <Text className="home-balance-date">
            {dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}
          </Text>
        </View>
      </View>

      <View className="">
        <ListHeading title="Upcoming" />
      </View>

      <View className="">
        <ListHeading title="All Subscription" />
      </View>
    </SafeAreaView>
  );
}
