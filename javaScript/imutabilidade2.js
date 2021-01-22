const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paulo',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos Aprovados');
console.log(getApprovedStudents(students));