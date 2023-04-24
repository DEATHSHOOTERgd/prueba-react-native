//import liraries
import React from 'react';
import { View, Text} from 'react-native';
import { Cuestionario } from '../interface/CuestionarioInterface';
import { styles } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    cuestionario:Cuestionario
}

export const CuestionarioCard = ({cuestionario}:Props) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{cuestionario.tema}</Text>
            <TouchableOpacity style={styles.cardButton} onPress={()=>{}}>
                <Text style={styles.cardButton}>Detalles</Text>
            </TouchableOpacity>
        </View>
    );
};
