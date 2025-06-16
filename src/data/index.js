import { Image } from 'react-native';
import onboardingStyles from '../styles/onboardingStyles';

import restaurantsData from './restaurants.json';

export { restaurantsData };

const uniqueCategoryNames = Array.from(
  new Set(
    restaurantsData
      .flatMap(r => r.tags || [])
      .filter(Boolean)
  )
);

export const categories = [
  { id: 1, name: "All" },
  ...uniqueCategoryNames.map((name, idx) => ({
    id: idx + 2,
    name,
  })),
];

export const OnboardingSteps = [
  {
    backgroundColor: '#fff',
    image: <Image style={onboardingStyles.image} source={require('../assets/images/onboarding1.jpg')} />,
    title: 'Vendors/Restaurants',
    subtitle: 'Order from great food vendors near you',
  },
  {
    backgroundColor: '#fff',
    image: <Image style={onboardingStyles.image} source={require('../assets/images/onboarding2.jpg')} />,
    title: 'Delivery',
    subtitle: 'Fast and safe delivery to your doorstep',
  },
  {
    backgroundColor: '#fff',
    image: <Image style={onboardingStyles.image} source={require('../assets/images/onboarding3.png')} />,
    title: 'Offers',
    subtitle: 'Get amazing food offers from top places',
  },
]