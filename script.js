document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date(2024, 5, 22); // Meses en JavaScript (0 = enero, 5 = junio)
    const contadorElement = document.getElementById('contador');
    
    function updateCounter() {
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const months = currentDate.getMonth() - startDate.getMonth() + 
                      (12 * (currentDate.getFullYear() - startDate.getFullYear()));
        const years = Math.floor(months / 12);
        
        contadorElement.textContent = `${years} años, ${months % 12} meses, y ${days % 30} días`;
    }

    updateCounter();
    setInterval(updateCounter, 1000 * 60 * 60 * 24);
});