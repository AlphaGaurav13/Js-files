const course = {
    courseName : "JavaScript",
    price : "$99",
    courseInstructor : "Gaurav"
}

//if want to access anything fromt he object we have to write same thing for multiple time like...

// course.courseInstructor

// so thats why we use Object distructuring method

// const {courseInstructor} = course

// console.log(courseInstructor) // Gaurav


// also if the name is big something like courseInstructor we can minimize it as well!

const {courseInstructor : instructor} = course
console.log(instructor) // Gaurav

//Same thing we will be using in React As well!


//**********************************************React Use Case ****************************************/
// const navbar = ({company}) => {
  
// }

// navbar(company = "Gaurav")

//*****************************************End*********************************************/

//API TALK

//Today we recive the value from beckend in the form of JSON(basically Object) and here we are talking about API(Application Programming Interface)

// example.. 
// {
//     "Name" : "Gaurav",
//     "Section" : "SW",
//     "Rollno" : 47
// }

//Sometimes we got it in the form of Array.

// [
//     {},
//     {},
//     {}
// ]

// JSON --> Java Script Object Notation

