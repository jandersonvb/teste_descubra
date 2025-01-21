import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { PaperProvider, useTheme } from 'react-native-paper';
import { Home } from './src/screen/Home';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  const theme = useTheme();

  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.onPrimary, marginVertical: 64 }}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Home />
          : <View />}
      </View>
    </PaperProvider>
  );
}


