import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Kovendhan', department: 'IT' },
    { id: 2, name: 'Surya', department: 'IT' },
    { id: 3, name: 'Ranjith', department: 'IT' },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student List</h1>
        <StudentList students={students} />
      </header>
    </div>
  );
}

const StudentList = ({ students }) => {
  return (
    <div>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <strong>{student.name}</strong> - {student.department} Department
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

