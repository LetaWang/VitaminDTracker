// styles.js
import { StyleSheet } from 'react-native';

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
 title: {
      fontSize: 60,
      color: 'black',
      marginLeft: 20,
  },
  text: {
    fontSize: 25,
    color: 'black',
    marginTop: 10,
  },
  text2: {
    fontSize: 25,
    color: 'black',
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 200,
  },
  image2: {
    height: 50,
    width: 50,
    marginRight: 20,
    marginTop: 15,
  },
  profileBox: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: -600,
      height: 0,
  },
    profileTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
        marginBottom: 0,
    },
    informationBox: {
        width: '90%',
        height: 'auto',
        minHeight: 200,
        marginTop: 20,
        backgroundColor: '#DADADA',
        borderRadius: 10,
        marginBottom: 100,
        padding: 10,
    },
});

export default ProfileStyle;
