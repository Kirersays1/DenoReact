export interface Student {
    id: number;
    name: string;
    email: string;
    password: string;           // New field for password
    inscriptionDate: string;    // New field for the date of inscription
    role: 'I' | 'A';            // Roles I: Instructor | A: Alumno
    enrolledCourses: number[];
}

export interface Course {
    id: number;
    title: string;
    description: string;
}
