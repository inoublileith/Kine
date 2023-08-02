import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'grey',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titles: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },

  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00ffff',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
})

export default styles
