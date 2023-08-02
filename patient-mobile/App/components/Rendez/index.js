import React, { useEffect, useState } from 'react'

import {

  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native'
import Constants from 'expo-constants'
import authService from '../../services/auth.service'
import RendService from '../../services/rend.service'
export default function Rendezvous({ navigation }) {
 const [currentUser, setCurrentUser] = useState([])
  const retrieveUser = () => {
    authService
      .GetCurrentUser()
      .then((data) => {
        setCurrentUser(JSON.parse(data))
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    retrieveUser()
  }, [])





    //  const id = currentUser.id
  const [rends, setRends] = useState([])
  const retrieveRends = () => {
    RendService.getAllRendp(currentUser.id)
      .then((response) => {
        setRends(response.data)

      })
      .catch((e) => {
        console.log(e)
      })
  }
    const refreshList = () => {
      retrieveRends()
    }
const supprim = (id) => {
  
    RendService.deleted(id)
      .then((response) => {
        alert('  ce rendez-vous est supprimer')
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
}

  useEffect(() => {
    retrieveRends()
  }, [currentUser.id, rends])
  return (
    <>
      <Text style={[styles.title, { margin: 10, fontSize: 20 }]}>
        Liste de Rendez-vous
      </Text>

      <ScrollView>
        {rends.map((rend, index) => (
          <View>
            <View style={styles.Listitem}>
              <Text style={styles.title}>Rendez-vous </Text>
              <Text style={styles.title}>Kiné : </Text>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                <Text
                  style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold' }}
                >
                  Détails
                </Text>
                <Text>Date :{rend.date}</Text>
                <Text>Heure :{rend.heure}</Text>
                <Text>Etat :</Text>
                <View style={styles.button}>
                  <Button
                    onPress={() => supprim(rend.idrend)}
                    style={styles.buttonInner}
                    color
                    title='Supprimer'
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  label: {
    color: 'black',
    marginLeft: 10,

    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    height: 40,
    backgroundColor: '#FD4659',
    borderRadius: 4,
    width: 100,
    borderRadius: 5,
  },
  buttonVerif: {
    marginTop: 20,
    height: 40,
    backgroundColor: '#32bf84',
    borderRadius: 4,
    width: 100,
    borderRadius: 5,
  },
  Listitem: {
    marginTop: 10,
    borderRadius: 4,
    width: 350,
    // justifyContent: "lef",
    // alignItems: "center",
    backgroundColor: '#a29bfe',
    borderRadius: 15,
    padding: 30,
  },
  title: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },
})
