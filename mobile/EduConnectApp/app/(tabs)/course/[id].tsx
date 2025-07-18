import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
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
    const { id } = useLocalSearchParams();
    const [course, setCourse] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchCourse = async () => {
            const token = await getToken();
            const res = await api.get(`/courses/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log('API response:',res.data)
            setCourse(res.data);
        };
        fetchCourse();
    }, []);

    const enroll = async () => {
        const token = await getToken();
        await api.post(`/courses/${id}/enroll`, {}, {
            headers: { Authorization: `Bearer ${token}` },
        });
    };

    const handleSearch = () => {
        setQuery(searchTerm);
    };

    const showCourse =
        course &&
        (course.name?.toLowerCase().includes(query.toLowerCase()) ||
            course.description?.toLowerCase().includes(query.toLowerCase()));

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                placeholder="Search for courses using course_ID"
                value={searchTerm}
                onChangeText={setSearchTerm}
                mode="outlined"
                style={styles.input}
            />
            <Button mode="outlined" onPress={handleSearch} style={styles.searchButton}>
                Search
            </Button>

            {showCourse ? (
                <View style={styles.courseBox}>
                    <Text style={styles.title}>{course.name}</Text>
                    <Text style={styles.description}>{course.description}</Text>
                    <Button onPress={enroll} mode="contained" style={styles.button}>
                        Enroll
                    </Button>
                </View>
            ) : (
                <Text style={styles.noMatch}>No matching course content found.</Text>
            )}
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
