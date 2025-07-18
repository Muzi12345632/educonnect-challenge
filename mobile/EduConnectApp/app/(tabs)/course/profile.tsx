import { Button, Text, Avatar } from 'react-native-paper';
import { clearToken, getToken } from '@/lib/storage';
import { useRouter } from 'expo-router';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export default function Profile() {
    const router = useRouter();

    type User = {
        id: number;
        name: string;
        email: string;
        role: string;
    };

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = await getToken();
                const res = await api.get('/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log('User Data:', res.data.user);
                setUser(res.data.user);
            } catch (err) {
                console.error('Failed to fetch user:', err);
            }
        };

        fetchUser();
    }, []);

    const logout = async () => {
        await clearToken();
        router.replace('/login');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>User Profile</Text>

            {user && (
                <View style={styles.infoList}>

                    {/* Info List */}
                    <Text style={styles.infoItem}>👤 Name: {user.name}</Text>
                    <Text style={styles.infoItem}>📧 Email: {user.email}</Text>

                    {/* Roles */}
                    {user.role?.length > 0 && (
                        <View style={styles.rolesContainer}>
                            <Text style={styles.rolesTitle}>🎓 Roles:</Text>
                                <Text style={styles.roleBadge}>
                                    {user.role}
                                </Text>
                        </View>
                    )}
                </View>
            )}

            <Button onPress={logout} style={styles.button} mode="contained">
                Logout
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f4f3fa',
        flexGrow: 1,
    },
    title: {
        fontSize: 28,
        marginBottom: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 20,
    },
    infoList: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    infoItem: {
        fontSize: 16,
        marginBottom: 8,
        color: '#444',
    },
    rolesContainer: {
        marginTop: 12,
        paddingTop: 8,
    },
    rolesTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#222',
    },
    roleBadge: {
        backgroundColor: 'steelblue',
        color: '#fff',
        fontSize: 14,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
        marginBottom: 6,
        alignSelf: 'flex-start',
    },
    button: {
        width: '60%',
        marginTop: 10,
    },
});
