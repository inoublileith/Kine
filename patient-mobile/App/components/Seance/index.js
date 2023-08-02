import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Alert } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import SeanceService from '../../services/seance.service'
import authService from '../../services/auth.service'

export default function Seance({ navigation }) {
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
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: '',
      debut: '',
      fin: '',
    },
  })

  const supprimer = (id) => {
    RendService.deleted(id)
      .then((response) => {
        alert('rendez vous supprimer')
      })
      .catch((e) => {
        console.log(e)
        alert('rendez vous nom supprimer')
      })
  }
  // const id = currentUser.id
  const [seances, setSeances] = useState([])
  const retrieveSeances = () => {
    SeanceService.getp(currentUser.id)
      .then((response) => {
        setSeances(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    retrieveSeances()
  }, [currentUser.id])
  return (
    <>
      <Text style={[styles.title, { margin: 10, fontSize: 20 }]}>
        Liste de Seances
      </Text>

      <ScrollView>
        {seances.map((seance, index) => (
          <View>
            <View style={styles.Listitem}>
              <Text style={styles.title}>Seances </Text>
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
                <Text>Date :{seance.date}</Text>
                <Text>Heure :{seance.debut}</Text>
                <Text>Fin :{seance.fin}</Text>
                {/* <Text>Etat :</Text>
                <View style={styles.button}>
                  <Button style={styles.buttonInner} color title='Supprimer' />
                </View> */}
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
