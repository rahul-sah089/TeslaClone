import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './style';
import StyleButton from '../StyleButton';

const CartItem = (props) => {
    const { name, tagline, image, taglineCTA } = props;
    console.log(taglineCTA);
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyleButton
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn("Custom order was pressed");
                    }} />

                <StyleButton
                    type="secondary"
                    content="Existing Inventory"
                    onPress={() => {
                        console.warn("Existing inventory was clicked");
                    }} />
            </View>
        </View>
    )
}

export default CartItem;