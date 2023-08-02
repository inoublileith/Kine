import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import RendService from '../../services/rend.service'
import authService from '../../services/auth.service'
import Constants from 'expo-constants'
// Fonts




export default function Commander({route}) {
const [user, setUser] = useState()
const retrieveUser = () => {
  authService
    .GetCurrentUser()
    .then((data) => {
      setUser(JSON.parse(data))
      console.log('CurrentUserId :', user.id)
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
      heure: '',

    },
  })
 const onSubmit = (data) => {
   console.log(data)
      var datax = {
        heure: data.heure,
        date: data.date,
        etat: 0,
        idp: user.id,
        idk:route.params.id
      }
      RendService.create(datax)
        .then((response) => {
          alert('demande envoyer')
        })
        .catch((e) => {
          console.log(e)
          alert('envoie echoué')
        })
 }

 const onChange = (arg) => {
   return {
     value: arg.nativeEvent.text,
   }
 }

 console.log('errors', errors)






  return (
    <>
      <View style={styles.container}>
      
      
        <Text style={styles.label}>Date</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='date'
          rules={{ required: true }}
        />
        {errors.date && <Text>This is required.</Text>}
        <Text style={styles.label}>Heure :</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name='heure'
          rules={{ required: true }}
        />
        {errors.heure && <Text>This is required.</Text>}
       
        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title='Demander'
            onPress={handleSubmit(onSubmit)}
          />
        </View>
       
      </View>
    </>
  )
}



const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 0,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#13BBAF',
    borderRadius: 4,
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
    top: 0,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 30,
    backgroundColor: '#D8DCD6',
  },
  input: {
    backgroundColor: 'white',
    color: '#13BBAF',
    padding: 8,
    borderRadius: 20,
  },
})
