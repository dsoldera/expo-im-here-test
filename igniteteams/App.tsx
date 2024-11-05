import { Groups } from '@screens/Groups/index';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Groups/>
      <StatusBar />
    </View>
  );
}
