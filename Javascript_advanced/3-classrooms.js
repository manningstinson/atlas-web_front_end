// Write a function named createClassRoom
const createClassRoom = (numbersOfStudents) => {
  // Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number
  const studentSeat = (seat) => {
    return () => seat;
  };

  // After the definition of studentSeat, create and populate a variable students (array)
  const students = [];

  // Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }

  // Returns the students array
  return students;
};

// Create a closure classRoom, calling createClassRoom with 10 students
const classRoom = createClassRoom(10);

// Test the closure by calling the functions in the classRoom array and logging the results
for (let i = 0; i < classRoom.length; i++) {
  console.log(`Student ${i + 1} seat number:`, classRoom[i]());
}
