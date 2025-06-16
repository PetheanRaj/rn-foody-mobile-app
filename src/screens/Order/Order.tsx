import React, { useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Button, Text, Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OrderScreenProps } from '../../types';



const Order: React.FC<OrderScreenProps> = ({ route, navigation }) => {
    const { restaurant, quantity: initialQuantity } = route.params || {};
    const [quantity, setQuantity] = useState(initialQuantity || 1);

    const handleQuantityChange = (val: number) => {
        if (val < 1) return;
        setQuantity(val);
        navigation.setParams({ quantity: val });
    };

    const totalPrice = ((restaurant?.delivery_price || 0) * quantity) / 100;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                <View style={{ alignItems: 'center', padding: 16 }}>
                    {restaurant?.image ? (
                        <Image
                            source={{ uri: restaurant.image }}
                            style={{ width: 200, height: 120, borderRadius: 12, marginBottom: 16 }}
                            resizeMode="cover"
                        />
                    ) : null}
                    <Text variant="titleLarge" style={{ marginBottom: 8 }}>
                        {restaurant?.name}
                    </Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 4 }}>
                        {restaurant?.city}
                    </Text>
                    <Text variant="bodySmall" style={{ marginBottom: 8 }}>
                        {restaurant?.description}
                    </Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 4 }}>
                        Delivery Price: {(restaurant?.delivery_price / 100).toFixed(2)} {restaurant?.currency}
                    </Text>
                    <Text variant="bodySmall" style={{ marginBottom: 8 }}>
                        {restaurant?.online ? 'Online' : 'Offline'}
                    </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 }}>
                        {restaurant?.tags?.map(tag => (
                            <Chip key={tag} style={{ marginRight: 4, marginBottom: 4 }}>{tag}</Chip>
                        ))}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                        <Button mode="outlined" onPress={() => handleQuantityChange(quantity - 1)}>-</Button>
                        <Text style={{ marginHorizontal: 16, fontSize: 18 }}>{quantity}</Text>
                        <Button mode="outlined" onPress={() => handleQuantityChange(quantity + 1)}>+</Button>
                    </View>
                    <Text variant="titleMedium" style={{ marginBottom: 16 }}>
                        Total: {totalPrice.toFixed(2)} {restaurant?.currency}
                    </Text>
                    <Button
                        mode="contained"
                        onPress={() => {
                            navigation.navigate('AddtoCart', { restaurant, quantity });
                        }}
                        style={{ width: '80%' }}
                        contentStyle={{ paddingVertical: 8 }}
                    >
                        Add to Cart
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Order;
