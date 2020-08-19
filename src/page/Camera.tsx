import React from 'react'; 
import { View } from 'react-native';
import { Camera as expoCamera } from 'expo-camera';

// import { Container } from './styles';

const Camera: React.FC = () => {
  return (
   <View style={{ flex: 1}}>
        <expoCamera style={{ flex: 1 }} />
    </View>
    );
}

export default Camera;