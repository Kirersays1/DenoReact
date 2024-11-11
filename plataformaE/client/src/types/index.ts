export interface Student {
    id: number;
    name: string;
    email: string;
    password: string;           // New field for password
    role: 'I' | 'A';            // Roles I: Instructor | A: Alumno
    enrolledCourses: number[];
}

export interface Course {
    id: number;
    title: string;
    description: string;
}
