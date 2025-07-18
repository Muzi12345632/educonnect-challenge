import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { api } from '@/lib/api';
import { getToken } from '@/lib/storage';

type Course = {
    id: number;
    name: string;
    description: string;
    price: number;
    status:string;
};

export default function MyCourses() {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchMyCourses = async () => {
            const token = await getToken();
            const res = await api.get('/my-courses', {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log('API response:', res.data.courses); // 🧠 DEBUG HERE
            setCourses(res.data.courses);
        };
        fetchMyCourses();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>My Courses</Text>

            <View style={styles.courseList}>
                {Array.isArray(courses) && courses.map((item) => (
                    <View key={item.id} style={styles.courseBox}>
                        <Text style={styles.courseTitle}>{item.name}</Text>
                        <Text style={styles.courseDescription}>{item.description}</Text>
                        <Text style={styles.badge}>{item.status}</Text>
                        <Text style={styles.courseProgress}>${item.price} - Progress: 0%</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    courseList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    courseBox: {
        backgroundColor: '#f0f8ff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        width: '100%',
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    courseDescription: {
        fontSize: 14,
        marginBottom: 4,
        color: '#333',
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: 'steelblue',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginBottom: 8,
    },
    courseProgress: {
        fontSize: 14,
        color: 'steelblue',
        fontWeight: '600',
    },
});
