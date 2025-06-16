import React, { useEffect, useState } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import onboardingStyles from '../../styles/onboardingStyles';
import { OnboardingSteps } from '../../data';
import { LOGIN_PATH } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('userToken').then(token => {
      if (token) {
        navigation.replace(LOGIN_PATH);
      } else {
        setLoading(false);
      }
    });
  }, []);
  if (loading) return null;
  return (
    <SafeAreaView style={onboardingStyles.container}>
      <Onboarding
        onSkip={() => navigation.replace(LOGIN_PATH)}
        onDone={() => navigation.replace(LOGIN_PATH)}
        titleStyles={onboardingStyles.title}
        subTitleStyles={onboardingStyles.subTitle}
        pages={OnboardingSteps}
      />

    </SafeAreaView>
  );
};



export default OnboardingScreen;
