import { ScrollView, Text, View } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { HOME_SUBSCRIPTIONS } from '@/constants/data';
import { formatCurrency } from '@/lib/utils';

const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
  const totalMonthly = HOME_SUBSCRIPTIONS.reduce((sum, item) => sum + item.price, 0);
  const categoryTotals = [
    { label: 'Design', amount: 77.49, color: '#ea7a53' },
    { label: 'Developer Tools', amount: 9.99, color: '#8fd1bd' },
    { label: 'AI Tools', amount: 20, color: '#f2c14e' },
  ];
  const largestCategory = categoryTotals.reduce((largest, item) =>
    item.amount > largest.amount ? item : largest
  );

  return (
    <SafeAreaView className="bg-background flex-1">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-30"
        showsVerticalScrollIndicator={false}>
        <Text className="screen-kicker">A CLEARER VIEW</Text>
        <Text className="screen-title">Insights</Text>
        <Text className="screen-subtitle">Small patterns, better decisions.</Text>

        <View className="insight-hero">
          <View className="insight-hero-top">
            <Text className="insight-hero-label">This month</Text>
            <Text className="insight-hero-mark">↗ 8.4%</Text>
          </View>
          <Text className="insight-hero-value">{formatCurrency(totalMonthly)}</Text>
          <Text className="insight-hero-note">Estimated recurring spend across your plans</Text>
          <View className="insight-wave">
            {[28, 44, 36, 58, 48, 72, 62, 84, 76, 92].map((height, index) => (
              <View key={index} className="insight-bar" style={{ height }} />
            ))}
          </View>
        </View>

        <View className="section-heading-row">
          <Text className="section-title">Spending profile</Text>
          <Text className="section-caption">MONTHLY</Text>
        </View>

        <View className="insight-panel">
          {categoryTotals.map((item) => (
            <View key={item.label} className="profile-row">
              <View className="profile-row-top">
                <View className="profile-name-wrap">
                  <View className="profile-dot" style={{ backgroundColor: item.color }} />
                  <Text className="profile-label">{item.label}</Text>
                </View>
                <Text className="profile-amount">{formatCurrency(item.amount)}</Text>
              </View>
              <View className="profile-track">
                <View
                  className="profile-fill"
                  style={{
                    width: `${(item.amount / totalMonthly) * 100}%`,
                    backgroundColor: item.color,
                  }}
                />
              </View>
            </View>
          ))}
        </View>

        <View className="insight-callout">
          <Text className="callout-mark">✦</Text>
          <View className="callout-copy">
            <Text className="callout-title">Your biggest lane</Text>
            <Text className="callout-text">
              {largestCategory.label} makes up{' '}
              {Math.round((largestCategory.amount / totalMonthly) * 100)}% of your monthly spend.
            </Text>
          </View>
        </View>

        <View className="section-heading-row">
          <Text className="section-title">Quick read</Text>
        </View>
        <View className="quick-grid">
          <View className="quick-card">
            <Text className="quick-value">{HOME_SUBSCRIPTIONS.length}</Text>
            <Text className="quick-label">active plans</Text>
          </View>
          <View className="quick-card quick-card-green">
            <Text className="quick-value">$0</Text>
            <Text className="quick-label">late fees</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Insights;
