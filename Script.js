// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    const darkToggle = document.getElementById('darkToggle');

    // Mobile menu toggle
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('hidden');
        });
    }

    // Dark mode toggle
    if (darkToggle) {
        darkToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                darkToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                darkToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            darkToggle.textContent = '☀️';
        }
    }
});

// Form submission handler
function submitForm() {
    const centerName = document.getElementById('centerName').value;
    const teacherName = document.getElementById('teacherName').value;
    const month = document.getElementById('month').value;
    const childrenCount = document.getElementById('childrenCount').value;

    // Basic validation
    if (!centerName || !teacherName || !month || !childrenCount) {
        alert('Please fill in all fields');
        return;
    }

    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Form submitted successfully!\n\nCenter: ${centerName}\nTeacher: ${teacherName}\nMonth: ${month}\nChildren: ${childrenCount}`);
    
    // Reset form
    document.querySelector('form').reset();
}