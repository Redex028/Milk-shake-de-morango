const button = document.getElementById('clickButton');
const videoContainer = document.getElementById('videoContainer');
const closeBtn = document.getElementById('closeBtn');


button.addEventListener('click', function() {
    videoContainer.style.display = 'flex'; 
});

closeBtn.addEventListener('click', function() {
    videoContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === videoContainer) {
        videoContainer.style.display = 'none'; 
    }
});
