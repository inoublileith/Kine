import React from 'react'
import { Text, View, TextInput,Image, Button, Alert, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Constants from 'expo-constants'
import { AuthContext } from '../../context'
export default function Register({ navigation }) {
  const { signUp } = React.useContext(AuthContext)
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      
      email: '',
      login: '',
      password: '',
      profil:'4'
    },
  })
  const onSubmit = (data) => {
    console.log(data)
    return signUp(data.email,data.login, data.password,data.profil)
  }

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    }
  }

  console.log('errors', errors)

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      {/* <Text style={styles.label}>Nom :</Text> */}
      {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name='nom'
        rules={{ required: true }}
      />
      <Text style={styles.label}>Prénom :</Text>
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
        name='prenom'
        rules={{ required: true }}
      />
      {errors.prenom && <Text>This is required.</Text>} */}
      <Text style={styles.label}>E-mail :</Text>
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
        name='email'
        rules={{ required: true }}
      />
      {errors.email && <Text>This is required.</Text>}
      <Text style={styles.label}>Nom d'utilisateur :</Text>
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
        name='login'
        rules={{ required: true }}
      />
      {errors.login && <Text>This is required.</Text>}
      <Text style={styles.label}>Mot de passe :</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
        name='password'
        rules={{ required: true }}
      />
      {errors.password && <Text>This is required.</Text>}
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title='Inscription'
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title='Se connecter'
          onPress={() => navigation.push('SignIn')}
        />
      </View>
    </View>
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
