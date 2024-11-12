import React, { useContext } from 'react';
import { CourseContext } from '../contexts/CourseContext';

const CourseList: React.FC = () => {
    const courseContext = useContext(CourseContext);

    if (!courseContext) {
        return <div>No courses available</div>;
    }

    const { courses } = courseContext;

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Descripcion</th>
            </tr>
            </thead>
            <tbody>
            {courses.map((course) => (
                <tr key={course.id_materia}> {/* Asigna `id` como `key` */}
                    <td>{course.id_materia}</td>
                    <td>{course.title}</td>
                    <td>{course.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default CourseList;
