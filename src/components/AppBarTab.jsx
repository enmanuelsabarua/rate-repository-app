import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        color: 'white',
        marginRight: 15
    }
})

export const AppBarTab = ({ label, path }) => {
    return (
        <Pressable>
            <Link to={path}>
                <Text style={styles.container} fontWeight='bold' >{label}</Text>
            </Link>
        </Pressable>
    );
};

export default AppBarTab;