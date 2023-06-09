/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './src/views/home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/views/auth/Login';
import {Provider} from 'react-redux';
import store from './src/store';
import Parking from './src/views/Parking/Parking';
import PostParking from './src/views/post-parking/PostParking';
import Loading from './src/views/Loading/Loading';
import AdminDashboard from './src/views/admin/AdminDashboard';
import FAQScreen from './src/views/FAQ/FaqScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating the app loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the desired loading time here
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Parking"
            component={Parking}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="PostParking"
            component={PostParking}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AdminDashboard"
            component={AdminDashboard}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="FAQ"
            component={FAQScreen}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
