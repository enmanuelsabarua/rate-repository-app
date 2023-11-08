import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from './theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 10,
        padding: 15,
        backgroundColor: theme.colors.bgPrimary,
        flexDirection: 'row'
    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab label='Repositories' path='/' />
            <AppBarTab label='Sign In' path='/signin' />
        </ScrollView>
    </View>
};

export default AppBar;