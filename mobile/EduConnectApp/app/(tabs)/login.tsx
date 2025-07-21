import {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { loginUser } from '@/lib/auth';
import { useRouter } from 'expo-router';
import {getToken} from "@/lib/storage";
import {api} from "@/lib/api";

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await loginUser(email, password);
            router.replace('/(tabs)/course');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Student Login</Text>

            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                mode="outlined"
            />

            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                mode="outlined"
            />

            <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Login
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Vertical centering
        alignItems: 'center',      // Horizontal centering
        padding: 16,
        backgroundColor: '#f4f3fa',
    },
    title: {
        fontSize: 28,
        marginBottom: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        marginBottom: 16,
        minWidth: 120,           // Ensures it's not too small
        alignSelf: 'center',
    },
    button: {
        marginTop: 8,
        minWidth: 120,           // Ensures it's not too small
        alignSelf: 'center',     // Centers if inside flex layout
        borderRadius: 6,
        backgroundColor: 'steelblue',
        paddingVertical: 6,
    },
});
