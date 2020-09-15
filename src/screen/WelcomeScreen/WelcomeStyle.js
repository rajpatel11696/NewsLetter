import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: 50,
      padding: 8,
      paddingBottom: 50,
    },
    imageContainer: {
      width: 70,
      height: 70,
  
    },
    paragraph: {
      margin: 12,
      fontSize: 24,
      // fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Menlo',
      color: 'white',
    },
    button: {
      height: 100,
      width: 100,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      backgroundColor: 'turquoise',
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    imgbtn: {
      width: 90,
      height: 90,
      borderRadius: 50,
    },
  });