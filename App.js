import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BottomNavigation from './src/components/BottomNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <BottomNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070012',
    alignItems: 'center',
    width: '100%'
  },
});
