import { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    Button,
    Platform, Alert,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { api } from '@/lib/api';
import { getToken } from '@/lib/storage';
import { StatusBar } from 'expo-status-bar';

type Course = {
    id: number;
    name: string;
    description: string;
    price: number;
    status: string;
};

export default function CourseList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [course, setSelectedCourse] = useState<Course | null>(null);

    const openModal = (course: Course) => {
        setSelectedCourse(course);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedCourse(null);
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const token = await getToken();
                const res = await api.get('/courses', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const data = res.data.data || res.data; // for paginated or flat API
                setCourses(data);
            } catch (err) {
                setError('Failed to load courses.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const enrollInCourse = async () => {
        if (!course) return;

        try {
            const token = await getToken();
            await api.post(`/courses/${course.id}/enroll`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(course.name)

            Alert.alert('Enrolled', `You have been enrolled in "${course.name}"`);
            closeModal();
        } catch (err) {
            console.error(err);
            Alert.alert('Enrollment Failed', 'Something went wrong during enrollment.');
        }
    };

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator animating={true} size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>{error}</Text>
            </View>
        );
    }

    if (courses.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No courses available.</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Courses</Text>

            <View style={styles.row}>
                {courses.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.courseItem}
                        onPress={() => openModal(item)}
                    >
                        <Text style={styles.courseTitle}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text style={styles.badge}>{item.status}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Modal to show selected course info */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{course?.name}</Text>
                        <Text>{course?.description}</Text>
                        <Text style={styles.price}>${course?.price}</Text>
                        <View style={styles.modalButtons}>
                            <Button title="Enroll" onPress={enrollInCourse} />
                            <View style={{ width: 10 }} />
                            <Button title="Close" onPress={closeModal} color="gray" />
                        </View>
                    </View>
                </View>
            </Modal>

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    courseItem: {
        backgroundColor: '#f0f8ff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        width: '47%',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    price: {
        marginTop: 8,
        fontWeight: '600',
        color: 'steelblue',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 24,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: 'steelblue',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginBottom: 8,
    },
});
