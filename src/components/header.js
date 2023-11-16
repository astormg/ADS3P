import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Header = ({title}) => {
    return (
        <SafeAreaProvider>
        <Appbar.Header style={styles.back}>
            <Appbar.Content title={title} />
        </Appbar.Header>
        </SafeAreaProvider>
    );
};

export const styles = StyleSheet.create({
  back:{
    backgroundColor: '#FFF'
  }
})

export default Header;
