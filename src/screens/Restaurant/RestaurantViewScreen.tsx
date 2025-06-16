import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import RestaurantDetails from '../../components/RestaurantDetails';
import restaurantsData from '../../data/restaurants.json';

type RestaurantViewScreenRouteParams = {
  restaurantId: string;
};

const RestaurantViewScreen = () => {
  const route = useRoute<RouteProp<{ params: RestaurantViewScreenRouteParams }, 'params'>>();
  const { restaurantId } = route.params;
  const restaurantData = restaurantsData.find(r => r?.id.toString() === restaurantId);

  if (!restaurantData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Restaurant not found</Text>
      </View>
    );
  }

  const restaurant = {
    ...restaurantData,
    location: [
      restaurantData.location?.[0] ?? 0,
      restaurantData.location?.[1] ?? 0,
    ] as [number, number],
  };

  return (
    <View style={styles.container}>
      <RestaurantDetails restaurant={restaurant} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
  },
});

export default RestaurantViewScreen;