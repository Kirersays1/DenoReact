import { createContext, useState, FC, ReactNode } from 'react';
import { Course } from '../types';

interface CourseContextType {
    courses: Course[];
    addCourse: (course: Course) => void;
}

export const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [courses, setCourses] = useState<Course[]>([
        { id: 1, title: "React Basico", description: "Aprenda React desde 0" },
        { id: 2, title: "Typescript Avanzado", description: "Maestria en Typescript Avanzado" },
    ]);

    const addCourse = (course: Course) => setCourses((prev) => [...prev, course]);

    return (
        <CourseContext.Provider value={{ courses, addCourse }}>
            {children}
        </CourseContext.Provider>
    );
};
