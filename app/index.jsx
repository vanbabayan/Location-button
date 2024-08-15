import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);

  const GetLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Button title="Get Location" onPress={GetLocation} />
      {location ? (
        <Text>Latitude: {location.coords.latitude}  Longitude: {location.coords.longitude}
            
        
        </Text>
        
        
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
