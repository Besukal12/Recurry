import { Image, Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import images from '@/constants/images';

const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <SafeAreaView className="bg-background flex-1">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-30"
        showsVerticalScrollIndicator={false}>
        <Text className="screen-kicker">MAKE IT YOURS</Text>
        <Text className="screen-title">Settings</Text>
        <Text className="screen-subtitle">A few quiet controls for your money space.</Text>

        <View className="profile-card">
          <Image source={images.avatar} className="profile-avatar" />
          <View className="profile-card-copy">
            <Text className="profile-card-name">Besukal</Text>
            <Text className="profile-card-email">besukal@recurrly.app</Text>
          </View>
          <Pressable className="profile-edit">
            <Text className="profile-edit-text">Edit</Text>
          </Pressable>
        </View>

        <Text className="settings-group-title">PREFERENCES</Text>
        <View className="settings-panel">
          <View className="settings-row">
            <View className="settings-icon settings-icon-coral">
              <Text>◌</Text>
            </View>
            <View className="settings-row-copy">
              <Text className="settings-row-title">Renewal reminders</Text>
              <Text className="settings-row-subtitle">Get a nudge before charges land</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#d9d2bb', true: '#ea7a53' }}
              thumbColor="#fff9e3"
            />
          </View>
          <View className="settings-divider" />
          <View className="settings-row">
            <View className="settings-icon settings-icon-green">
              <Text>✦</Text>
            </View>
            <View className="settings-row-copy">
              <Text className="settings-row-title">Weekly digest</Text>
              <Text className="settings-row-subtitle">A Sunday snapshot of your spend</Text>
            </View>
            <Switch
              value={weeklyDigest}
              onValueChange={setWeeklyDigest}
              trackColor={{ false: '#d9d2bb', true: '#8fd1bd' }}
              thumbColor="#fff9e3"
            />
          </View>
        </View>

        <Text className="settings-group-title">APP</Text>
        <View className="settings-panel">
          <Pressable className="settings-link-row">
            <Text className="settings-row-title">Currency</Text>
            <View className="settings-link-value">
              <Text className="settings-row-subtitle">USD</Text>
              <Text className="settings-chevron">›</Text>
            </View>
          </Pressable>
          <View className="settings-divider" />
          <Pressable className="settings-link-row">
            <Text className="settings-row-title">Appearance</Text>
            <View className="settings-link-value">
              <Text className="settings-row-subtitle">Light</Text>
              <Text className="settings-chevron">›</Text>
            </View>
          </Pressable>
          <View className="settings-divider" />
          <Pressable className="settings-link-row">
            <Text className="settings-row-title">About Recurrly</Text>
            <Text className="settings-chevron">›</Text>
          </Pressable>
        </View>

        <Text className="settings-footnote">Recurrly v1.0.0 · Built for calmer spending.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
