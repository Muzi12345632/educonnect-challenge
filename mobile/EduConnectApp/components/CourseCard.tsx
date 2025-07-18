import { Card, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export function CourseCard({ course }: any) {
    const router = useRouter();
    return (
        <Card onPress={() => router.push(`.//course/${course.id}`)}>
            <Card.Title title={course.title} />
            <Card.Content>{course.description}</Card.Content>
        </Card>
    );
}
