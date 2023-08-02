
import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  Button

} from 'react-native'
import { Icon } from 'react-native-elements'
import StyledButton from '../StyledButton'
import KineService from '../../services/kine.service'
export default function Doctor({ navigation }) {

  const Card =(props) => {
    return (
      <>
        <View style={styles.cardContainer}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/images/panadol.jpg')}
          ></Image>

          <View style={styles.info}>
            <Text style={styles.titlestyle}>
              Doctor {props.info.nom}
              {''} {props.info.prenom}{' '}
            </Text>
          </View>
          <View style={styles.containerIcon}>
            <Icon style={styles.iconStyle1} name='mail' size={14}></Icon>

            <Text style={styles.labelStyle}>{props.info.email} </Text>
            <Icon style={styles.iconStyle2} name='phone' size={14}></Icon>
            <Text style={styles.labelStyle}>{props.info.tel}</Text>
          </View>
          <Button
            onPress={() => navigation.push('Rendezvous', { id: props.info.id })}
            style={styles.Button}
            title='Rendez-vous'
          />
        </View>
      </>
    )
  }
  
  const [kines, setKines] = useState([])
  const retrieveKines = () => {
    KineService.getAllkine()
      .then((response) => {
        setKines(response.data)
        console.log(rends)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    retrieveKines()
  }, [])
  return (
    <>
      <Text style={styles.title}>Liste des Kinés</Text>
      <View style={styles.container}>
        <FlatList
          data={kines}
          renderItem={({ item }) => <Card key={item.id} info={item} />}
        ></FlatList>
      </View>
    </>
  )
}
const devicewidth =Math.round(Dimensions.get('window').width)
const radius =20;
const styles = StyleSheet.create({
  cardContainer: {
    width: devicewidth - 25,
    backgroundColor: '#a29bfe',
    height: 200,
    borderRadius: radius,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
    marginTop: 10,
  },
  containerIcon: {
    flexDirection: 'row',
    marginLeft: 5,
    flexDirection: 'row',
  },

  iconStyle1: {
    marginTop: 7,
  },
  iconStyle2: {
    marginTop: 7,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6c5ce7',
    justifyContent: 'space-between',

    paddingTop: 10,
  },
  titlestyle: {
    fontSize: 17,
    fontWeight: '700',
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 130,
    width: devicewidth - 25,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  categorystyle: {
    fontWeight: '300',
    marginEnd: 100,
  },
  info: {
    marginHorizontal: 5,
    marginVertical: -5,
  },
  labelStyle: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 2,
  },
  Button: {
    width: devicewidth - 25,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
    marginEnd: 10,
  },
  title: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },
})
