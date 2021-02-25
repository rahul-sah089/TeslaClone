import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './style'
const CartItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.subtitle}>{props.description}</Text>
            </View>
        </View>
    )
}

export default CartItem;