// const pool = require('./src/student/db'); // Adjust the path as necessary
// const { addStudent } = require('./src/queries');

// // Sample data to seed
// const students = [
//   { name: 'Alice', email: 'alice@example.com', age: 22, dob: '2000-01-01' },
//   { name: 'Bob', email: 'bob@example.com', age: 21, dob: '2001-02-02' },
//   // Add more students as needed
// ];

// async function seedDatabase() {
//   for (const student of students) {
//     try {
//       await pool.query(addStudent, [student.name, student.email, student.age, student.dob]);
//       console.log(`Inserted ${student.name}`);
//     } catch (error) {
//       console.error(`Failed to insert ${student.name}:`, error.message);
//     }
//   }

//   console.log('Seeding completed.');
// }

// seedDatabase().then(() => pool.end());
