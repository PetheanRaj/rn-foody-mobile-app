import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RestaurantCardProps, RootStackParamList } from '../types';
import restaurantCardStyles from '../styles/componentStyles/restaurantCardStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('RestaurantView', { restaurantId: String(restaurant.id) });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={restaurantCardStyles.card}>
      <View style={{ position: 'relative', width: '100%', height: 180 }}>
        <Image
          source={{ uri: restaurant.image }}
          style={restaurantCardStyles.image}
        />
      </View>
      <Text style={restaurantCardStyles.name}>{restaurant.name}</Text>
      <Text style={restaurantCardStyles.desc}>{restaurant.description}</Text>
      <View style={restaurantCardStyles.infoRow}>
        <Text style={restaurantCardStyles.delivery}>
          {restaurant?.currency ?? '€'} {(restaurant.delivery_price / 100).toFixed(2)}
        </Text>
        <Text style={restaurantCardStyles.time}>
          {restaurant.city} {restaurant.online ? '🟢 Open' : '🔴 Close'}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 }}>
        {restaurant.tags?.map(tag => (
          <Text key={tag} style={restaurantCardStyles.tag}>
            #{tag}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
