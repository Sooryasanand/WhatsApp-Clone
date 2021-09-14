import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    namebadge: {
      flexDirection: 'row',
    },
    lastmess: {
      color: 'grey',
      marginTop: 5
    },
    timedes: {
      color: '#389ffc',
    },
    badgeContainer: {
      backgroundColor: 'lightgreen',
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2.5,
      borderWidth: 1
    },
    badgetext: {
      color: 'black'
    },
    name: {
      fontWeight: 'bold',
      fontSize: 17,
      color: 'white'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      flexDirection: 'row',
      padding: 10,
      margin: 15
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 30,
      marginRight: 20,
    },
    rightcontainer: {
      flex: 1,
      justifyContent: 'center',
    }
});

export default styles;