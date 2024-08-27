// Import the function if using modules, otherwise define directly
export default function viewVideo(data) {
    // Fetch the post data using the ID from the URL parameter
    window.location.href = `video.html?data=${data}`;
}



// Function to create and insert an iframe element
function createIframe(data) {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + data;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    document.querySelector(".video-container").appendChild(iframe); // Append to the body or specify a different container
}

// Extract the post ID from the URL parameter and fetch the post data
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoData = urlParams.get('data');
    if (videoData) {
        createIframe(videoData);
    } else {
        console.error('No video data found in URL parameters.');
    }
});
