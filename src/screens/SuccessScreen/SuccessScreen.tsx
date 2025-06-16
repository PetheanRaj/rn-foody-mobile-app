import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';
import React, { useRef, useEffect } from 'react';

const SuccessScreen = ({ navigation }: any) => {
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const confettiAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
                friction: 5,
            }),
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();

        Animated.loop(
            Animated.timing(confettiAnim, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    // Simple confetti effect (animated colored circles)
    const confetti = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * 2 * Math.PI;
        const x = Math.cos(angle) * 80;
        const y = Math.sin(angle) * 80;
        const color = `hsl(${i * 30}, 80%, 60%)`;
        return (
            <Animated.View
                key={i}
                style={{
                    position: 'absolute',
                    left: 60 + x,
                    top: 60 + y,
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: color,
                    opacity: confettiAnim.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [1, 0.3, 1],
                    }),
                    transform: [
                        {
                            scale: confettiAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 1.3],
                            }),
                        },
                    ],
                }}
            />
        );
    });

    return (
        <View style={styles.container}>
            <View style={{ width: 120, height: 120, marginBottom: 52 }}>
                {confetti}
                <Animated.Image
                    source={require('../../assets/images/success.png')}
                    style={[
                        styles.image,
                        {
                            transform: [{ scale: scaleAnim }],
                        },
                    ]}
                    resizeMode="contain"
                />
            </View>
            <Animated.Text style={[styles.title, { opacity: opacityAnim }]}>
                Payment Successful!
            </Animated.Text>
            <Animated.Text style={[styles.message, { opacity: opacityAnim }]}>
                Thank you for your payment. Your transaction has been completed successfully.
            </Animated.Text>
            <Animated.View style={{ opacity: opacityAnim }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation?.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Go to Home</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default SuccessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        left: 20,
        top: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#27ae60',
        marginBottom: 16,
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#27ae60',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});