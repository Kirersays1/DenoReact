
import React, {createContext, useState, FC, ReactNode, useEffect} from 'react';
import {Student} from '../types';
import {turso} from "../db/db.ts";

interface StudentContextType {
    students: Student[];
    addStudent: (student: Student) => void;
    enrollInCourse: (studentId: number, courseId: number) => void;
}

export const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await turso.execute('SELECT * FROM usuario WHERE rol = "A" ');

                // Verificar que `rows` y `columns` existan en `response`
                if (Array.isArray(response.rows) && Array.isArray(response.columns)) {
                    const studentsData = response.rows.map((row: any[]) => {
                        const student: any = {};
                        response.columns.forEach((col: string, index: number) => {
                            student[col] = row[index];
                        });
                        return {
                            id: student.id,
                            name: student.nombre,
                            description: student.descripcion,
                        };
                    });
                    setStudents(studentsData);
                } else {
                    console.error("Expected rows and columns to be arrays in response.");
                }
            } catch (error) {
                console.error("Error obteniendo datos: ", error);
            }
        };

        fetchStudents();
    }, []);

    const addStudent = (student: Student) => setStudents((prev) => [...prev, students]);


    return (
        <StudentContext.Provider value={{ students, addStudent }}>
            {children}
        </StudentContext.Provider>
    );
};
