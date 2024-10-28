// src/App.tsx
import React from 'react';
import { CourseProvider } from './contexts/CourseContext';
import { StudentProvider } from './contexts/StudentContext';
import CourseList from './components/CourseList';
import StudentForm from './components/StudentForm';
import CourseRegistration from './components/CourseRegistration';

const App: React.FC = () => {
    return (
        <CourseProvider>
            <StudentProvider>
                <div>
                    <h1>Copia de Moodle</h1>
                    <StudentForm />
                    <CourseList />
                    <CourseRegistration />
                </div>
            </StudentProvider>
        </CourseProvider>
    );
};

export default App;
