import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, Text, Checkbox, TouchableRipple, Surface, useTheme, IconButton } from 'react-native-paper';
import loginStyles from '../../styles/loginStyles';
import { FORGOT_PASSWORD_PATH, HOME_PATH, LOGIN_ERROR_MESSAGE, LOGIN_INVALID_CREDENTIALS, LOGIN_SUCCESS_MESSAGE, LOGIN_USER_NOT_FOUND, REGISTER_PATH } from '../../constants';
import colors from '../../constants/colors';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const theme = useTheme();

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (!userData) {
        Alert.alert('Error', LOGIN_USER_NOT_FOUND);
        return;
      }
      const user = JSON.parse(userData);
      if (user.email === email && user.password === password) {
        Alert.alert('Success', LOGIN_SUCCESS_MESSAGE);
        navigation.navigate(HOME_PATH);
      } else {
        Alert.alert('Error', LOGIN_INVALID_CREDENTIALS, [{
          text: 'OK',
          onPress: () => {
            setEmail('');
            setPassword('');
          },
        }]);
      }
    } catch (e) {
      Alert.alert('Error', LOGIN_ERROR_MESSAGE);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Surface style={[loginStyles.root, { elevation: 2 }]}> 
        <View style={loginStyles.header}>
          <Text variant="headlineLarge" style={loginStyles.headerTitle}>Log In</Text>
          <Text variant="bodyMedium" style={loginStyles.headerSubtitle}>Please sign in to your existing account</Text>
        </View>
        <View style={loginStyles.form}>
          <Text variant="labelSmall" style={loginStyles.label}>EMAIL</Text>
          <TextInput
            mode="outlined"
            placeholder="example@gmail.com"
            style={loginStyles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Text variant="labelSmall" style={loginStyles.label}>PASSWORD</Text>
          <TextInput
            mode="outlined"
            placeholder="********"
            style={loginStyles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />}
          />
          <View style={loginStyles.row}>
            <TouchableRipple onPress={() => setRememberMe(!rememberMe)} style={loginStyles.checkboxContainer} borderless>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox status={rememberMe ? 'checked' : 'unchecked'} onPress={() => setRememberMe(!rememberMe)} />
                <Text style={loginStyles.rememberMe}>Remember me</Text>
              </View>
            </TouchableRipple>
            <Button mode="text" compact onPress={() => navigation.navigate(FORGOT_PASSWORD_PATH)} labelStyle={loginStyles.forgot}>
              Forgot Password
            </Button>
          </View>
          <Button mode="contained" style={loginStyles.loginButton} onPress={handleLogin} contentStyle={{ paddingVertical: 6 }}>
            LOG IN
          </Button>
          <View style={loginStyles.signupRow}>
            <Text style={loginStyles.signupText}>Don’t have an account? </Text>
            <Button mode="text" compact onPress={() => navigation.navigate(REGISTER_PATH)} labelStyle={loginStyles.signupLink}>
              SIGN UP
            </Button>
          </View>
          <Text style={loginStyles.orText}>Or</Text>
          <View style={loginStyles.socialRow}>
            <IconButton
              icon="facebook"
              iconColor="#fff"
              containerColor={colors.facebook}
              style={loginStyles.socialButton}
              onPress={() => {}}
              size={28}
            />
            <IconButton
              icon="twitter"
              iconColor="#fff"
              containerColor={colors.twitter}
              style={loginStyles.socialButton}
              onPress={() => {}}
              size={28}
            />
            <IconButton
              icon="google"
              iconColor="#fff"
              containerColor={colors.error}
              style={loginStyles.socialButton}
              onPress={() => {}}
              size={28}
            />
          </View>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

export default LoginScreen;
