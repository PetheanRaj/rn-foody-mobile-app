import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { RestaurantCardProps, RootStackParamList } from '../types';
import { Card, Chip, Badge, Button, Avatar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

const RestaurantDetails: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <ScrollView style={styles.page}>
      <View style={styles.header}>
        <Avatar.Image size={48} source={{ uri: restaurant.image }} />
        <View style={styles.headerText}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.city}>{restaurant.city}</Text>
        </View>
      </View>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: restaurant.image }} style={styles.image} />
        <Card.Content>
          <Text style={styles.description}>{restaurant.description}</Text>
          <View style={styles.row}>
            <Chip style={styles.chip}>{restaurant.currency}</Chip>
            <Chip style={styles.chip}>{restaurant.online ? 'Online' : 'Offline'}</Chip>
            <Badge style={styles.badge}>
              {`${(restaurant.delivery_price / 100).toFixed(2)} ${restaurant.currency}`}
            </Badge>
          </View>
          <View style={styles.tags}>
            {restaurant.tags?.map((tag: string) => (
              <Chip key={tag} style={styles.tagChip}>{tag}</Chip>
            ))}
          </View>
          <View style={styles.quantityRow}>
            <IconButton icon="minus" size={20} onPress={decrement} />
            <Text style={styles.quantityText}>{quantity}</Text>
            <IconButton icon="plus" size={20} onPress={increment} />
          </View>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => {
              navigation.navigate('Order', { restaurant, quantity });
            }}
          >
            Order Now
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 12,
    minWidth: 24,
    textAlign: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
    marginBottom: 8,
  },
  headerText: {
    marginLeft: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  city: {
    fontSize: 16,
    color: '#888',
    marginTop: 2,
  },
  card: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    flexWrap: 'wrap',
  },
  chip: {
    marginRight: 8,
    marginBottom: 4,
  },
  badge: {
    alignSelf: 'center',
    backgroundColor: '#eee',
    color: '#333',
    marginLeft: 8,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingLabel: {
    fontSize: 15,
    color: '#666',
    marginRight: 4,
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f39c12',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  tagChip: {
    marginRight: 6,
    marginBottom: 6,
    backgroundColor: '#e3e3e3',
  },
  button: {
    marginTop: 18,
    borderRadius: 6,
    backgroundColor: '#2196f3',
  },
});

export default RestaurantDetails;