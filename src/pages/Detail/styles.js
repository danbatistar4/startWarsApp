import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
container: {
   flexGrow:1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
},
teste: {

    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
},

title: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    color: '#13131a',
    fontWeight: 'bold'
  },
  property: {
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
planet: {
   flex:1,
   justifyContent:"space-between",
   flexDirection:"row"
},
propertyContainer: {
    justifyContent:"space-between",
    flexDirection:"row",
    
},
residentValue:{
    fontSize:14,
    marginBottom: 6,
    color: '#737380'
}
});