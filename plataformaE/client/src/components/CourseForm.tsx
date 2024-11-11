import React, { useState, useContext } from 'react';
import { CourseContext } from '../contexts/CourseContext';
import {turso} from '../db/db.ts'

const CourseForm: React.FC = () => {
    const { addCourse } = useContext(CourseContext)!;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = () => {
        addCourse({
            id: Date.now(),
            title,
            description,
        });

        console.log(`Insertando curso con titulo: ${title}, descripcion: ${description}`);
        turso.execute(`INSERT INTO materia(titulo,descripcion) VALUES ('${title}', '${description}')`);

        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <h2>Registrar Materia</h2>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titulo"
            />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripcion"
            />
            <button onClick={handleSubmit}>Registrar</button>
        </div>
    );
};

export default CourseForm;
