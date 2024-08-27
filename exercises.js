
function createExerciseSection(output,listItems) {
    // Create the exercises div
    const exercisesDiv = document.createElement('div');
    exercisesDiv.className = 'exercises';

    // Create the question div
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    // Create and set up the h3 element
    const h3 = document.createElement('h3');
    h3.textContent = output;

    // Create and set up the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '15');
    svg.setAttribute('height', '10');
    svg.setAttribute('viewBox', '0 0 42 25');

    // Create and set up the path element inside the SVG
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M3 3L21 21L39 3');
    path.setAttribute('stroke', 'white');
    path.setAttribute('stroke-width', '7');
    path.setAttribute('stroke-linecap', 'round');

    // Append the path to the SVG
    svg.appendChild(path);

    // Append the h3 and SVG to the question div
    questionDiv.appendChild(h3);
    questionDiv.appendChild(svg);

    // Create the answer div
    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';

    // Create the ul element
    const ul = document.createElement('ul');

    // Create and append li elements to the ul
    //const listItems = ['Hello World', 'What is my name?', 'This would be a really cool project', 'What do you want from me'];
     let count = 1;
    listItems.forEach(text => {
        const li = document.createElement('li');
        li.textContent = `${count}. ${text}`;
        count++;
        ul.appendChild(li);
    });

    // Append the ul to the answer div
    answerDiv.appendChild(ul);

    // Append the question and answer divs to the exercises div
    exercisesDiv.appendChild(questionDiv);
    exercisesDiv.appendChild(answerDiv);


    // Append the section to the container
    document.getElementById("cont").appendChild(exercisesDiv);
}

let out = ["Exercise 1","Linked list 1","Linked list 2","Linked list 3","Linked list 4","Linked list 5"]
let questions = [
    ["Find the factorial of a number using loops","Find the factorial of a number using loops","Find the Nth fibonacci number","Solve N-Queens Problem"],
    ["Perform a Push_front","Perform a Push_back","Perform a Push_at","Perform a Pop_front","Perform a Pop_at","Perform a Pop_back","Return First element","Return last element"],
    ["Find smallest value","Find the biggest value","Reverse a linked list","Return the length of the linked list","Find the middle value in the linked list","Print the linked list"],
    ["Reverse the linked list","Print the linked list in reverse order","Find the average of the values of the linked list","Return the sum of the linked list","Search for a value","Convert a linked list to an array"],
    ["Find the intersection of two linked list","Find the union of two linked list","Find the difference of two linked lists","Check if a linked list is a set","Return the i-th item","Delete the linked list"],
    ["Merge two sorted linked lists","Find the k-th to last element","Remove nodes with a given value","Check if the linked list is palindromic","Return a copy of the linked list"]
]
for(let i = 0; i < out.length; i++){
    createExerciseSection(out[i],questions[i]);
}


const exercises = document.querySelectorAll(".exercises");


exercises.forEach((exercise) =>{
    exercise.addEventListener("click",() =>{
        exercise.classList.toggle("active");
    });
});