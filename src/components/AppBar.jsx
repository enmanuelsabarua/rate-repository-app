import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from './theme';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 10,
        padding: 15,
        backgroundColor: theme.colors.bgPrimary,
        flexDirection: 'row'
    },
});

const AppBar = () => {
    const { loading, error, data } = useQuery(GET_USER);
    if (loading) {
        return null;
    } else if (error) {
        console.error(error);
    }
    
    return <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab label='Repositories' path='/' />
            {data.me ? <AppBarTab label='Sign Out' path='/' /> : <AppBarTab label='Sign In' path='/signin' />}
        </ScrollView>
    </View>
};

export default AppBar;