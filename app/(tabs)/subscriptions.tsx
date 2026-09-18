import { FlatList, Pressable, Text, View } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { HOME_SUBSCRIPTIONS } from '@/constants/data';
import SubscriptionCard from '@/components/SubscriptionCard';

const SafeAreaView = styled(RNSafeAreaView);

const Subscriptions = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const categories = ['All', 'Design', 'Developer Tools', 'AI Tools'];
  const visibleSubscriptions =
    activeCategory === 'All'
      ? HOME_SUBSCRIPTIONS
      : HOME_SUBSCRIPTIONS.filter((item) => item.category === activeCategory);

  return (
    <SafeAreaView className="bg-background flex-1">
      <FlatList
        className="flex-1"
        contentContainerClassName="px-5 pb-30"
        data={visibleSubscriptions}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedId === item.id}
            onPress={() => setExpandedId((current) => (current === item.id ? null : item.id))}
          />
        )}
        ListHeaderComponent={
          <View>
            <Text className="screen-kicker">YOUR LIBRARY</Text>
            <Text className="screen-title">Subscriptions</Text>
            <Text className="screen-subtitle">Keep every recurring cost in view.</Text>

            <View className="subscription-summary">
              <View>
                <Text className="summary-label">Monthly commitment</Text>
                <Text className="summary-value">$123.47</Text>
              </View>
              <View className="summary-badge">
                <Text className="summary-badge-text">{HOME_SUBSCRIPTIONS.length} active</Text>
              </View>
            </View>

            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              contentContainerClassName="gap-2 pb-5"
              renderItem={({ item }) => (
                <Pressable
                  className={
                    item === activeCategory ? 'filter-chip filter-chip-active' : 'filter-chip'
                  }
                  onPress={() => setActiveCategory(item)}>
                  <Text
                    className={
                      item === activeCategory
                        ? 'filter-chip-text filter-chip-text-active'
                        : 'filter-chip-text'
                    }>
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        }
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions in this category.</Text>
        }
      />
    </SafeAreaView>
  );
};

export default Subscriptions;
