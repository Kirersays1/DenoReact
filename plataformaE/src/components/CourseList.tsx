// src/components/CourseList.tsx
import React, { useContext } from 'react';
import { CourseContext } from '../contexts/CourseContext';

const CourseList: React.FC = () => {
    const { courses } = useContext(CourseContext)!;

    return (
        <div>
            <h2>Available Courses</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.title} - {course.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
