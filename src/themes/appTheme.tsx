import { StyleSheet } from "react-native";

const stylesGlobal = StyleSheet.create({
    popularContainer: {
      //backgroundColor: 'red',
      height: 275,
      marginLeft:5 
    },
    title1: {
      fontSize: 30,
      marginBottom: 5,
      fontWeight: 'bold'
    },
    imageContainer: {
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 10,
      borderRadius: 18
    },
    poster: {
      flex: 1,
      borderRadius: 18,
      
    }
});

export default stylesGlobal