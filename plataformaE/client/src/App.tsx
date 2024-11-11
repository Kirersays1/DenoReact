// src/App.tsx
import React from 'react';
import { CourseProvider } from './contexts/CourseContext';
import { StudentProvider } from './contexts/StudentContext';
import CourseList from './components/CourseList';
import StudentForm from './components/StudentForm';
import CourseStudentRegistration from './components/CourseStudentRegistration.tsx';
import CourseForm from "./components/CourseForm.tsx";

const App: React.FC = () => {
    return (
        <CourseProvider>
            <StudentProvider>
                <div>
                    <h1>Copia de Moodle</h1>
                    <StudentForm />
                    <CourseForm />
                    <CourseList />
                    <CourseStudentRegistration />
                </div>
            </StudentProvider>
        </CourseProvider>
    );
};

export default App;
