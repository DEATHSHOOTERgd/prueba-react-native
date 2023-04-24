//import liraries
import React, {useEffect, useState} from 'react';
import { View, Text, FlatList} from 'react-native';
import { styles } from '../../theme/AppTheme';
import authApi from '../../api/AuthApi';
import { Cuestionario } from '../../interface/CuestionarioInterface';
import { CuestionarioCard } from '../../components/CuestionarioCard';

// create a component
export const CuestionarioListScreen = () => {
    const [cuestionarios,setCuestionarios] = useState([]);

    useEffect(() => {
        cargarCuestionarios();
    }, [])

    const cargarCuestionarios = async () =>{
        try{
            const response = await authApi.get<Cuestionario>('/cuestionario');
            setCuestionarios(response.data);
        }catch(error){

        }
    }

    return (

        <View style={styles.globalMargin}>
            <Text style={styles.title}>Cuestionarios</Text>
            <FlatList
                data={cuestionarios}
                renderItem={({item}) => <CuestionarioCard cuestionario = {item as Cuestionario} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

