import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import registerStyles from '../../styles/registerStyles';
import { LOGIN_PATH, REGISTER_ERROR_MESSAGE, REGISTER_INPUT_VALIDATION, REGISTER_PASSWORD_MISMATCH, REGISTER_SUCCESS_MESSAGE } from '../../constants';

const RegisterScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const handleRegister = async () => {
    if (!fullName || !email || !password || !retypePassword) {
      Alert.alert('Error', REGISTER_INPUT_VALIDATION);
      return;
    }
    if (password !== retypePassword) {
      Alert.alert('Error', REGISTER_PASSWORD_MISMATCH);
      return;
    }
    try {
      await AsyncStorage.setItem('user', JSON.stringify({ fullName, email, password }));
      Alert.alert('Success', REGISTER_SUCCESS_MESSAGE);
      navigation.navigate(LOGIN_PATH);
    } catch (e) {
      Alert.alert('Error', REGISTER_ERROR_MESSAGE);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={registerStyles.root}>
      <View style={registerStyles.header}>
        <TouchableOpacity style={registerStyles.backButton} onPress={() => navigation.goBack()}>
          <Text style={registerStyles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={registerStyles.headerTitle}>Sign Up</Text>
        <Text style={registerStyles.headerSubtitle}>Please sign up to get started</Text>
      </View>
      <View style={registerStyles.form}>
        <Text style={registerStyles.label}>NAME</Text>
        <TextInput
          placeholder="John doe"
          style={registerStyles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholderTextColor="#b0b0b0"
        />
        <Text style={registerStyles.label}>EMAIL</Text>
        <TextInput
          placeholder="example@gmail.com"
          style={registerStyles.input}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#b0b0b0"
          autoCapitalize="none"
        />
        <Text style={registerStyles.label}>PASSWORD</Text>
        <View style={registerStyles.passwordRow}>
          <TextInput
            placeholder="********"
            secureTextEntry={!showPassword}
            style={[registerStyles.input, { flex: 1 }]}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#b0b0b0"
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={registerStyles.eyeButton}>
            <Text style={{ color: '#b0b0b0', fontSize: 18 }}>
              {showPassword ? '🙈' : '👁️'}
            </Text>
          </Pressable>
        </View>
        <Text style={registerStyles.label}>RE-TYPE PASSWORD</Text>
        <View style={registerStyles.passwordRow}>
          <TextInput
            placeholder="********"
            secureTextEntry={!showRetypePassword}
            style={[registerStyles.input, { flex: 1 }]}
            value={retypePassword}
            onChangeText={setRetypePassword}
            placeholderTextColor="#b0b0b0"
          />
          <Pressable onPress={() => setShowRetypePassword(!showRetypePassword)} style={registerStyles.eyeButton}>
            <Text style={{ color: '#b0b0b0', fontSize: 18 }}>
              {showRetypePassword ? '🙈' : '👁️'}
            </Text>
          </Pressable>
        </View>
        <TouchableOpacity style={registerStyles.signupButton} onPress={handleRegister}>
          <Text style={registerStyles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={registerStyles.loginLink} onPress={() => navigation.navigate(LOGIN_PATH)}>
          <Text style={registerStyles.loginLinkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

