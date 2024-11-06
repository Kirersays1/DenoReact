
import React,{ createContext, useState, FC, ReactNode } from 'react';
import { Student } from '../types';

interface StudentContextType {
    students: Student[];
    addStudent: (student: Student) => void;
    enrollInCourse: (studentId: number, courseId: number) => void;
}

export const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [students, setStudents] = useState<Student[]>([]);

    const addStudent = (student: Student) => setStudents((prev) => [...prev, student]);

    const enrollInCourse = (studentId: number, courseId: number) => {
        setStudents((prev) =>
            prev.map((student) =>
                student.id === studentId
                    ? { ...student, enrolledCourses: [...student.enrolledCourses, courseId] }
                    : student
            )
        );
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, enrollInCourse }}>
            {children}
        </StudentContext.Provider>
    );
};
