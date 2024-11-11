import { createContext, useState,useEffect, FC, ReactNode } from 'react';
import { Course } from '../types';
import {turso} from '../db/db.ts'

interface CourseContextType {
    courses: Course[];
    addCourse: (course: Course) => void;
}

export const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        turso.execute('SELECT * FROM materia').then((response) => {
            const courses = response.map((course: any) => ({
                id: course.id,
                title: course.titulo,
                description: course.descripcion,
            }));
            setCourses(courses);
        });
    }, []);
    const addCourse = (course: Course) => setCourses((prev) => [...prev, course]);

    return (
        <CourseContext.Provider value={{ courses, addCourse }}>
            {children}
        </CourseContext.Provider>
    );
};
