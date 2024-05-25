

const studentData = {
    student1: {
      id: 1,
      name: "Alice Johnson",
      courses: {
        course1: {
          name: "Mathematics",
          grade: 92
        },
        course2: {
          name: "Physics",
          grade: 89
        }
      }
    },
    student2: {
      id: 2,
      name: "Bob Smith",
      courses: {
        course1: {
          name: "Chemistry",
          grade: 94
        },
        course2: {
          name: "Biology",
          grade: 87
        }
      }
    }
  };
  



//find the largest grade
let largeGrade = 0
 let subjet=''

for (let stud in studentData) {
  let student = studentData[stud]
  
  for (let item in student.courses) {
    let course = student.courses[item]
    
    if (course.grade > largeGrade) {
      largeGrade = course.grade
      subjet= course.name
    }
  }
}

console.log(largeGrade);
console.log(subjet);

