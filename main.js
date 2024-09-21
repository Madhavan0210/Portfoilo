// Modal functionality for viewing project details
function openModal(project) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (project === 'project1') {
        modalTitle.textContent = 'Booking App';
        modalDescription.textContent = 'A MERN stack booking app with secure authentication and optimized performance.';
    } else if (project === 'project2') {
        modalTitle.textContent = 'Weather App';
        modalDescription.textContent = 'A React app integrating the OpenWeatherMap API for real-time weather data.';
    } else if (project === 'project3') {
        modalTitle.textContent = 'Chat Application';
        modalDescription.textContent
