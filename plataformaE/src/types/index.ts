export interface Student {
    id: number;
    name: string;
    email: string;
    password: string;           // New field for password
    inscriptionDate: string;    // New field for the date of inscription
    role: 'I' | 'A';            // Role can be either 'I' (for student) or 'A' (for admin)
    enrolledCourses: number[];
}

export interface Course {
    id: number;
    title: string;
    description: string;
}
