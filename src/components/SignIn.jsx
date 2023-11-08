import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from './theme';
import * as yup from 'yup';


const initialValues = {
    username: '',
    password: '',
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        color: 'white',
    }
});

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required.'),
    password: yup
        .string()
        .required('Password is required.'),
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.text} fontWeight='bold' fontSize='subheading'>Sign in</Text>
            </Pressable>
        </View>
    );
};

const SignIn = () => {
    const onSubmit = values => {
        console.log(values);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;