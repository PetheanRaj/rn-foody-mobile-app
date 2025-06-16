import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import forgetPasswordStyles from '../../styles/forgetPasswordStyles';
import { FORGET_PWD_ERROR_MESSAGE, FORGET_PWD_SUCCESS_MESSAGE, LOGIN_PATH } from '../../constants';


const ForgotPasswordScreen = ({ navigation }: any) => {
  const [value, setValue] = React.useState({
    email: '',
  });
  const onSubmit = async () => {
    try {
      Alert.alert('Success', FORGET_PWD_SUCCESS_MESSAGE);
    } catch (error) {
      Alert.alert('Error', FORGET_PWD_ERROR_MESSAGE);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={forgetPasswordStyles.container}>
      <Text style={forgetPasswordStyles.title}>Forgot Password</Text>
      <TextInput
        style={forgetPasswordStyles.input}
        placeholder="Email"
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
        keyboardType="email-address"
      />
      <Button title="Send Reset Link" onPress={onSubmit} />
      <TouchableOpacity onPress={() => navigation.navigate(LOGIN_PATH)} style={forgetPasswordStyles.link}>
        <Text style={forgetPasswordStyles.linkText}>
          Remembered your password? Login
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;