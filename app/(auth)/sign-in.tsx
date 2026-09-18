import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      setError('Enter your email and password to continue.');
      return;
    }
    setError('');
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="auth-safe-area">
      <KeyboardAvoidingView
        className="auth-screen"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          className="auth-scroll"
          contentContainerClassName="auth-content"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View className="auth-brand-block">
            <View className="auth-logo-wrap">
              <View className="auth-logo-mark">
                <Text className="auth-logo-mark-text">R</Text>
              </View>
              <View>
                <Text className="auth-wordmark">Recurrly</Text>
                <Text className="auth-wordmark-sub">Spend with intention</Text>
              </View>
            </View>
            <Text className="auth-title">Welcome back</Text>
            <Text className="auth-subtitle">Your recurring world is ready when you are.</Text>
          </View>

          <View className="auth-card">
            <View className="auth-form">
              <View className="auth-field">
                <Text className="auth-label">Email address</Text>
                <TextInput
                  className="auth-input"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="you@example.com"
                  placeholderTextColor="#08112699"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoComplete="email"
                />
              </View>
              <View className="auth-field">
                <View className="flex-row items-center justify-between">
                  <Text className="auth-label">Password</Text>
                  <Pressable>
                    <Text className="auth-link">Forgot password?</Text>
                  </Pressable>
                </View>
                <View className="relative">
                  <TextInput
                    className="auth-input pr-20"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    placeholderTextColor="#08112699"
                    secureTextEntry={!showPassword}
                    autoComplete="password"
                  />
                  <Pressable
                    className="absolute top-4 right-4"
                    onPress={() => setShowPassword((current) => !current)}>
                    <Text className="auth-link">{showPassword ? 'Hide' : 'Show'}</Text>
                  </Pressable>
                </View>
              </View>
              {!!error && <Text className="auth-error">{error}</Text>}
              <Pressable className="auth-button" onPress={handleSubmit}>
                <Text className="auth-button-text">Sign in</Text>
              </Pressable>
              <View className="auth-divider-row">
                <View className="auth-divider-line" />
                <Text className="auth-divider-text">OR</Text>
                <View className="auth-divider-line" />
              </View>
              <Pressable className="auth-secondary-button">
                <Text className="auth-secondary-button-text">Continue with Google</Text>
              </Pressable>
            </View>
          </View>

          <View className="auth-link-row">
            <Text className="auth-link-copy">New to Recurrly?</Text>
            <Link href="/(auth)/sign-up" className="auth-link">
              Create an account
            </Link>
          </View>
          <Link href="/(tabs)" className="auth-home-link">
            Browse the app
          </Link>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
