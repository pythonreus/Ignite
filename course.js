function createBox() {
    // Create the main box div
    const box = document.createElement('div');
    box.className = 'box';

    // Create the img element
    const img = document.createElement('img');
    img.src = '/3.jpg';
    img.alt = '';

    // Create the overlay div
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Create the h3 element
    const heading = document.createElement('h3');
    heading.textContent = 'Travel World';

    // Create the p element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Fibonacci.';

    // Create the anchor element
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = 'Book Now';


    // Append the elements to their respective parents
    overlay.appendChild(heading);
    overlay.appendChild(paragraph);
    overlay.appendChild(anchor);
    box.appendChild(img);
    box.appendChild(overlay);

    // Append the box to the desired container in your document
    document.querySelector(".box-area").appendChild(box); // Replace 'document.body' with the desired container
}

// Call the function to create and append the box
createBox();
