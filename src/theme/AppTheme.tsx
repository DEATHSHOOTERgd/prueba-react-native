import { StyleSheet } from 'react-native';

export const colors = {
    primary:'#5856D6',
};

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems:'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius:100,
        tintColor:'#2b3e51',
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal: 30,
    },
    menuBoton: {
        marginVertical: 10,
    },
    menuTexto: {
        fontSize: 20,
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent:'center',
        height: 600,
        marginBottom: 50
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    inputField: {
        color:'white',
        fontSize: 20,
    },
    inputFieldIOS: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: 4
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    buttonReturn: {
        position: 'absolute',
        top: 50,
        left: 20,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100
    },
});
