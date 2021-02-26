import React from 'react';
import { View, Text, Pressable, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import cars from './cars';
import CartItem from '../CarItem';
const CarsList = (props) => {
    return (
        //Render list of card
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CartItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            >
            </FlatList>

        </View>
    );
}

export default CarsList;