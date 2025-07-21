import { useState } from 'react';
import { api } from '@/lib/api';
import { getToken } from '@/lib/storage';
import { Button, Text, TextInput } from 'react-native-paper';
import { ScrollView, View, StyleSheet } from 'react-native';

type Course = {
    id: number;
    name: string;
    description: string;
    price: number;
};

export default function CourseDetail() {
    const [course, setCourse] = useState<Course | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!searchTerm) return;

        try {
            const token = await getToken();
            const res = await api.get(`/courses/${searchTerm}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setCourse(res.data.course);
            setError('');
        } catch (err) {
            console.log('Course not found or API error', err);
            setCourse(null);
            setError('No course found with this ID.');
        }
    };

    const enroll = async () => {
        if (!course) return;
        const token = await getToken();
        await api.post(`/courses/${course.id}/enroll`, {}, {
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                placeholder="Enter Course ID"
                value={searchTerm}
                onChangeText={setSearchTerm}
                mode="outlined"
                style={styles.input}
                keyboardType="numeric"
            />
            <Button mode="outlined" onPress={handleSearch} style={styles.searchButton}>
                Search
            </Button>

            {course ? (
                <View style={styles.courseBox}>
                    <Text style={styles.title}>{course.name}</Text>
                    <Text style={styles.description}>{course.description}</Text>
                    <Button onPress={enroll} mode="contained" style={styles.button}>
                        Enroll
                    </Button>
                </View>
            ) : error ? (
                <Text style={styles.noMatch}>{error}</Text>
            ) : null}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        marginBottom: 8,
    },
    searchButton: {
        marginBottom: 16,
        alignSelf: 'flex-start',
    },
    courseBox: {
        backgroundColor: '#f0f8ff',
        borderRadius: 12,
        padding: 20,
        elevation: 2,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        color: '#333',
    },
    button: {
        width: '50%',
        alignSelf: 'center',
    },
    noMatch: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
});
