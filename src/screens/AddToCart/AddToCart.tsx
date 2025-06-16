import React, { useState } from 'react';
import { Animated, Image } from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, IconButton, Divider, TextInput } from 'react-native-paper';
import { OrderScreenProps } from '../../types';

const AddToCart: React.FC<OrderScreenProps> = ({ route, navigation }) => {
  const { restaurant, quantity: initialQuantity } = route.params || {};
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [imageOpacity] = useState(new Animated.Value(0));
  const [totalScale] = useState(new Animated.Value(1));

  const onImageLoad = () => {
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    totalScale.setValue(1.15);
    Animated.spring(totalScale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [quantity]);
  const price = restaurant?.delivery_price || 10;
  const total = price * quantity;

  const handlePayment = () => {
    navigation.navigate('SuccessScreen');
  };

  const handleQuantityChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
    navigation.setParams({ quantity: val });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Animated.View style={{ opacity: imageOpacity }}>
          <Image
            source={{ uri: restaurant?.image || "https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90" }}
            style={styles.restaurantImage}
            onLoad={onImageLoad}
            resizeMode="cover"
          />
        </Animated.View>
        <Card.Title title={restaurant?.name || 'Restaurant Name'} subtitle={restaurant?.city} />
        <Card.Content>
          <Text variant="titleMedium">{restaurant?.description || 'Item Name'}</Text>
          <View style={styles.tagRow}>
            {restaurant?.tags?.map((tag, idx) => (
              <Text key={idx} style={styles.tag}>{tag}</Text>
            ))}
          </View>
          <Text variant="bodyMedium">
            Price: {(price / 100).toLocaleString(undefined, { style: 'currency', currency: restaurant?.currency || 'USD' })}
          </Text>
          <View style={styles.quantityRow}>
            <Button labelStyle={styles.font} mode="outlined" onPress={() => handleQuantityChange(quantity - 1)}>-</Button>
            <Text style={{ marginHorizontal: 16, fontSize: 18 }}>{quantity}</Text>
            <Button labelStyle={styles.font} mode="outlined" onPress={() => handleQuantityChange(quantity + 1)}>+</Button>

          </View>
          <Divider style={{ marginVertical: 10 }} />
          <Animated.Text
            style={[
              styles.totalText,
              { transform: [{ scale: totalScale }] },
            ]}
          >
            Total: {(total / 100).toLocaleString(undefined, { style: 'currency', currency: restaurant?.currency || 'USD' })}
          </Animated.Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Payment Details" />
        <Card.Content>
          <TextInput
            label="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="number-pad"
            style={styles.input}
            left={<TextInput.Icon icon="credit-card" />}
          />
          <View style={styles.row}>
            <TextInput
              label="Expiry"
              value={expiry}
              onChangeText={setExpiry}
              placeholder="MM/YY"
              style={[styles.input, { flex: 1, marginRight: 8 }]}
              keyboardType="number-pad"
            />
            <TextInput
              label="CVV"
              value={cvv}
              onChangeText={setCvv}
              style={[styles.input, { flex: 1 }]}
              keyboardType="number-pad"
              secureTextEntry
            />
          </View>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={handlePayment}
        style={styles.payButton}
        disabled={!cardNumber || !expiry || !cvv}
      >
        Pay ${total.toFixed(2)}
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 16,
    marginTop: 30
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  font: {
    fontSize: 30
  },
  input: {
    backgroundColor: 'white',
  },
  payButton: {
    marginTop: 16,
    paddingVertical: 8,
  },
  restaurantImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
    fontSize: 12,
    color: '#333',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#2e7d32',
    alignSelf: 'flex-end',
  },
});

export default AddToCart;