// TODO keep the student list state in a global list
// Creating an array to hold the names entered. Its blank right now
var studentList = [];

function addStudent() {
    // TODO lookup the user entered text
    // TODO store the new student name in global list
    
    // Appends the input to the end of the array
    studentList.push(document.getElementById('student').value);

    
    // TODO render the entire list into the output div
    // Creates a placeholder for the value of the array with a value already there so that when it prints the first time
    // it prints out below vvv
    var vals = "Student List: <br/>";

    // This loop prints the items in the array (listed format)
    // By reprinting the whole array after adding the next element
    for(let i = 0; i < studentList.length; i++)
    {
        vals = vals + (i+1) + ". " + studentList[i] + "<br/>";
    }
    // Prints the value of the array
    document.getElementById('output').innerHTML = vals;

    // Resets textbox 
    document.getElementById('student').value = "";
    return false;
} 

function init() {
    // TODO register the onsubmit for 'theForm' to use addStudent
    
    document.getElementById('submit').onclick = addStudent;
    
} 
window.onload = init;