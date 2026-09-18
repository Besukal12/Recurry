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

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || password.length < 6) {
      setError('Add your name, email, and a password of at least 6 characters.');
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
            <Text className="auth-title">Make room for clarity</Text>
            <Text className="auth-subtitle">One calm home for every recurring expense.</Text>
          </View>

          <View className="auth-card">
            <View className="auth-form">
              <View className="auth-field">
                <Text className="auth-label">Your name</Text>
                <TextInput
                  className="auth-input"
                  value={name}
                  onChangeText={setName}
                  placeholder="What should we call you?"
                  placeholderTextColor="#08112699"
                  autoCapitalize="words"
                />
              </View>
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
                <Text className="auth-label">Create a password</Text>
                <View className="relative">
                  <TextInput
                    className="auth-input pr-20"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="At least 6 characters"
                    placeholderTextColor="#08112699"
                    secureTextEntry={!showPassword}
                    autoComplete="new-password"
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
                <Text className="auth-button-text">Create my account</Text>
              </Pressable>
              <Text className="auth-helper">
                By continuing, you agree to keep your spending data private.
              </Text>
            </View>
          </View>

          <View className="auth-link-row">
            <Text className="auth-link-copy">Already have an account?</Text>
            <Link href="/(auth)/sign-in" className="auth-link">
              Sign in
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

export default SignUp;
