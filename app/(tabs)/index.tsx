import '@/global.css';
import { View, Text, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from '@/constants/data';
import { icons } from '@/constants/icon';
import { formatCurrency } from '@/lib/utils';
import dayjs from 'dayjs';
import ListHeading from '@/components/ListHeading';
import UpcomingSubscriptionCard from '@/components/UpcomingSubscriptionCard';
import SubscriptionCard from '@/components/SubscriptionCard';
import { useState } from 'react';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [expandedsubscriptionId, setExpandedsubscriptionId] = useState<string | null>(null);

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

        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          renderItem={({ item }) => {
            return <UpcomingSubscriptionCard {...item} />;
          }}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empty-state">NO upcoming subscriptions</Text>}
        />
      </View>

      <View className="">
        <ListHeading title="All Subscription" />
        <FlatList
          data={HOME_SUBSCRIPTIONS}
          renderItem={({ item }) => {
            return (
              <SubscriptionCard
                {...item}
                expanded={expandedsubscriptionId === item.id}
                onPress={() =>
                  setExpandedsubscriptionId((currentId) => (currentId === item.id ? null : item.id))
                }
              />
            );
          }}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text className="home-empty-state">NO subscriptions</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
