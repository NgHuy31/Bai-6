import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AppIntroSlider from 'react-native-app-intro-slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Home() {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.homeText}>Welcome</Text>
      <Image
        source={require('./assets/home.jpg')}
        style={styles.homeImage}
      />
    </View>
  );
}

function Scan() {
  return (
    <View style={styles.centeredView}>
      <Image
        style={styles.image}
        source={require('./assets/image.png')}
      />
      <Text style={styles.scanText}>Scan and Pay</Text>
      <Text style={styles.scanDescription}>Please scan products you want to buy and pay & enjoy Shopping ;)</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.sectionTitle}>Notifications</Text>
      <Text style={styles.notificationText}>You have no new notifications.</Text>
    </View>
  );
}

function History() {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.sectionTitle}>History</Text>
      <Text style={styles.historyText}>No purchase history available.</Text>
    </View>
  );
}

function Cart() {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.sectionTitle}>Cart</Text>
      <Text style={styles.cartText}>Your cart is empty.</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="gray"
      labeled={false}
      barStyle={styles.tabBar}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="line-scan" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const slides = [
  {
    key: 'splash1',
    title: 'Welcome to Our App',
    text: 'This is the first slide of the splash screen.',
    image: require('./assets/splash1.png'), 
    backgroundColor: '#59b2ab',
  },
  {
    key: 'splash2',
    title: 'Scan and Pay',
    text: 'Scan products you want to buy and pay easily.',
    image: require('./assets/splash2.png'), 
    backgroundColor: '#febe29',
  },
  {
    key: 'splash3',
    title: 'Enjoy Shopping',
    text: 'Enjoy your shopping experience with us.',
    image: require('./assets/splash3.png'), 
    backgroundColor: '#22bcb5',
  },
];

function SplashScreen({ navigation }) {
  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    navigation.replace('Main'); 
  };

  return (
    <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  homeText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  homeImage: {
    width: 400,
    height: 450,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  scanText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scanDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: 'orange',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  historyText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  cartText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  tabBar: {
    backgroundColor: '#f8f9fa', 
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default App;
