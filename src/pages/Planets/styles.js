import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        marginTop: 10,
        color: '#13131a',
        fontWeight: 'bold'
      },
    planetList: {
        marginTop: 32,
    },
    planet: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    planetProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    planetValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 12,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      detailsButtonText: {
        color: '#0488CD',
        fontSize: 15,
        fontWeight: 'bold'
      },

});