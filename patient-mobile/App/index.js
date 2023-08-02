import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Alert } from 'react-native'
import AuthService from './services/auth.service'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import { AuthContext } from './context'
import {
  SignIn,
  CreateAccount,
  Search,
  Verifieroriginalite,
  Details,
  Search2,
  Profile,
  Splash,
  OnBoard,
  Explore,
  RecScreen,
  CommandeScreen,
  PaymentScreen,
} from './Screens'
import Icon from 'react-native-ionicons';

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name='OnBoard'
      component={OnBoard}
      options={{ title: 'OnBoard', headerShown: false }}
    />
    <AuthStack.Screen
      name='SignIn'
      component={SignIn}
      options={{ title: 'Sign In', headerShown: false }}
    />
    <AuthStack.Screen
      name='CreateAccount'
      component={CreateAccount}
      options={{ title: 'Créer un compte', presentation: 'modal' }}
    />
  </AuthStack.Navigator>
)

const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const ExploreStack = createStackNavigator()
const CommandeStack = createStackNavigator()
const RecsStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='VerifierOriginalite'
      component={Verifieroriginalite}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name='Rendezvous'
      component={CommandeScreen}
      options={({ route }) => ({
        id: route.params.id,
        headerShown: false,
      })}
    />
  </HomeStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name='Search1'
      component={Search}
      options={{
        headerShown: false,
      }}
    />
    <SearchStack.Screen
      name='Search2'
      component={Search2}
      options={{
        headerShown: false,
      }}
    />
  </SearchStack.Navigator>
)
const CommandeStackScreen = () => (
  <CommandeStack.Navigator>
    <CommandeStack.Screen
      name='CommandeScreen'
      component={CommandeScreen}
      options={{
        headerShown: false,
      }}
    />
    
    
  </CommandeStack.Navigator>
)
const ExploreStackScreen = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen
      name='forExplore'
      component={Explore}
      options={{
        headerShown: false,
      }}
    />
  </ExploreStack.Navigator>
)
const RecsStackScreen = () => (
  <RecsStack.Navigator>
    <RecsStack.Screen
      name='forRecs'
      component={RecScreen}
      options={{
        headerShown: false,
      }}
    />
  </RecsStack.Navigator>
)
const ProfileStack = createStackNavigator()

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='myProfile'
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Vérifier') {
          return (
            <Ionicons
              name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
              size={size}
              color={color}
            />
          )
        } else if (route.name === 'Commander') {
          return (
            <Ionicons
              name={focused ? 'basket' : 'basket-outline'}
              size={size}
              color={color}
            />
          )
        } else if (route.name === 'Déclarer') {
          return (
            <Ionicons
              name={focused ? 'megaphone' : 'megaphone-outline'}
              size={size}
              color={color}
            />
          )
        } else if (route.name === 'Suivre') {
          return (
            <Ionicons
              name={focused ? 'trending-up' : 'trending-up-outline'}
              size={size}
              color={color}
            />
          )
        } else if (route.name === 'Panier') {
          return (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={size}
              color={color}
            />
          )
        }
      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: '#32BF84',
    })}
  >
    <Tabs.Screen
      name='Doctor'
      component={HomeStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name='Rendez-vous'
      component={ExploreStackScreen}
      options={{
        headerShown: false,
      }}
    />
   
     <Tabs.Screen
      name='Seance'
      component={RecsStackScreen}
      options={{
        headerShown: false,
      }}
    /> 
   
  </Tabs.Navigator>
)
function CustomDrawerContent(props) {
  const { signOut } = React.useContext(AuthContext)
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Settings' onPress={() => alert('Make a view')} />
      <DrawerItem label='SignOut' onPress={() => signOut()} />
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator()
const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName='Acceuil'
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name='Accueil' component={TabsScreen} />
    <Drawer.Screen name='Profile' component={ProfileStackScreen} />
  </Drawer.Navigator>
)

const RootStack = createStackNavigator()
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator>
    {userToken ? (
      <RootStack.Screen
        name='App'
        component={DrawerScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name='Auth'
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    )}
  </RootStack.Navigator>
)

export default () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: (login, password) => {
        setIsLoading(false)

        AuthService.Login(login, password)
          .then((data) => {
            console.log(data.accessToken)
            setUserToken(data.accessToken)
          })
          .catch(() => {
            setIsLoading(false)
            setUserToken(null)
            Alert.alert('ERROR', 'Incorrect entry!!', [{ text: 'OK' }])
          })
      },
      signUp: (email, login, password,profil) => {
        AuthService.Register(email, login, password,profil)
          .then(() => {
            console.log('inscrit')
            setIsLoading(false)
            setUserToken('patient')
          })
          .catch(() => {
            setIsLoading(false)
            setUserToken(null)
            Alert.alert('ERROR', 'error!!', [{ text: 'OK' }])
          })
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      },
    }
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Splash />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
