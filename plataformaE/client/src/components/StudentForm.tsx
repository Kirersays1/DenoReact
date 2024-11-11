import React, { useState, useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import {turso} from 'C:/Users/kirby/OneDrive/Documentos/GitHub/DenoReact/plataformaE/server/db/db.ts'

const StudentForm: React.FC = () => {
    const { addStudent } = useContext(StudentContext)!;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inscriptionDate, setInscriptionDate] = useState('');
    const [role, setRole] = useState<'I'|'A'>('A'); // 'A' para default
    const db = turso;


    const handleSubmit = () => {
        addStudent({
            id: Date.now(),
            name,
            email,
            password,
            inscriptionDate: new Date().toISOString().split('T')[0], // set current date in YYYY-MM-DD format
            role,
            enrolledCourses: [],
        });

        console.log(`Insertando usuario con nombre: ${name}, email: ${email}, password: ${password}, rol: ${role}`);
        db.execute(`INSERT INTO usuario(nombre, password, email, rol) VALUES ('${name}', '${password}', '${email}', '${role}')`);

        setName('');
        setEmail('');
        setPassword('');
        setInscriptionDate('');
        setRole('A');
    };

    return (
        <div>
            <h2>Registrar usuario</h2>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contrasena"
                type="password"
            />
            <select value={role} onChange={(e) => setRole(e.target.value as 'I' | 'A')}>
                <option value="I">Instructor</option>
                <option value="A">Alumno</option>
            </select>
            <button onClick={handleSubmit}>Registrar</button>
        </div>
    );
};

export default StudentForm;
