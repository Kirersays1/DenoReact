// src/components/CourseRegistration.tsx
import React, { useContext, useState } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import { StudentContext } from '../contexts/StudentContext';

const CourseRegistration: React.FC = () => {
    const { courses } = useContext(CourseContext)!;
    const { students, enrollInCourse } = useContext(StudentContext)!;
    const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
    const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

    const handleEnroll = () => {
        if (selectedStudent && selectedCourse) {
            enrollInCourse(selectedStudent, selectedCourse);
        }
    };

    return (
        <div>
            <h2>Inscribete en un curso</h2>
            <select onChange={(e) => setSelectedStudent(Number(e.target.value))}>
                <option value="">Selecciona estudiante</option>
                {students.map((student) => (
                    <option key={student.id} value={student.id}>
                        {student.name}
                    </option>
                ))}
            </select>

            <select onChange={(e) => setSelectedCourse(Number(e.target.value))}>
                <option value="">Selecciona curso</option>
                {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                        {course.title}
                    </option>
                ))}
            </select>

            <button onClick={handleEnroll}>Inscribete!</button>
        </div>
    );
};

export default CourseRegistration;
