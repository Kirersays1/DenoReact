import { createContext, useState, useEffect, FC, ReactNode } from 'react';
import { Course } from '../types';
import { turso } from '../db/db.ts';

interface CourseContextType {
    courses: Course[];
    addCourse: (course: Course) => void;
}

export const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await turso.execute('SELECT * FROM materia');

                // Verificar que `rows` y `columns` existan en `response`
                if (Array.isArray(response.rows) && Array.isArray(response.columns)) {
                    const coursesData = response.rows.map((row: any[]) => {
                        const course: any = {};
                        response.columns.forEach((col: string, index: number) => {
                            course[col] = row[index];
                        });
                        return {
                            id: course.id,
                            title: course.titulo,
                            description: course.descripcion,
                        };
                    });
                    setCourses(coursesData);
                } else {
                    console.error("Expected rows and columns to be arrays in response.");
                }
            } catch (error) {
                console.error("Error obteniendo datos: ", error);
            }
        };

        fetchCourses();
    }, []);

    const addCourse = (course: Course) => setCourses((prev) => [...prev, course]);

    return (
        <CourseContext.Provider value={{ courses, addCourse }}>
            {children}
        </CourseContext.Provider>
    );
};
