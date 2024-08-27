import viewVideo from './viewVideo.js'
function fetchVideos(){
    fetch('https://lamp.ms.wits.ac.za/home/s2653945/all_videos.php') // Replace with your actual API endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const videos = data.videos;
            videos.forEach(video => {
                displayVideo(video); // Assuming each post is an object with necessary fields
            });
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
        });

}


function displayVideo(video){
   
    //create the outer div
    const box = document.createElement('div');
    box.className = 'box';
    // Set the data-id attribute to store the video data
    box.setAttribute('data', video.url_id);

    
    // Create the image element
    const img = document.createElement('img');
    img.src = video.thumbnail; // Path to the image
    img.alt = ''; // Alt text for the image
    
    // Create the overlay div
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    // Create and append the h3 element to the overlay
    const h3 = document.createElement('h3');
    h3.textContent = video.caption;
    overlay.appendChild(h3);
    
    // Create and append the p element to the overlay
    const p = document.createElement('p');
    p.textContent = video.lang;
    overlay.appendChild(p);
    
    // Create and append the anchor element to the overlay
    const a = document.createElement('a');
    a.href = '#'; // Link destination
    a.textContent = 'Watch Now';

     // Add an onclick listener to the cardDiv
     a.addEventListener('click', function() {
        const data = this.getAttribute('data');
        viewVideo(data);
    });


    overlay.appendChild(a);
    
    // Append the image and overlay to the box
    box.appendChild(img);
    box.appendChild(overlay);
    
    // Append the box to the body or a specific container
    document.querySelector('.box-area').appendChild(box); // Or specify a different container element

}

fetchVideos();