import React from 'react';
import { Image, View } from 'react-native';

export const Logo = () => {
    return (
        <View style={{
            alignItems: 'center',
        }}>
            <Image
                source={require('../assets/user.png')}
                style={{
                    width: 110,
                    height: 110,
                    tintColor:'white'
                }}
            />
        </View>
    );
};
