import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../theme/AppTheme';

export const LoadingScreen = () => {
    return (
        <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#2b3e51'
        }}>
            <ActivityIndicator 
                size={ 50 }
                color="white"
            />
        </View>
    )
}