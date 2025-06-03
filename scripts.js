document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('Work_Button');
    const button2 = document.getElementById('Rest_Button');
    const button3 = document.getElementById('Fun_Button');

    // Add click event listeners to each button
    button1.addEventListener('click', function() {
        Fall(button1, button2, button3);
    });

    button2.addEventListener('click', function() {
        Fall(button1, button2, button3);
    });

    button3.addEventListener('click', function() {
        Fall(button1, button2, button3);
    });
});

function Fall(button1, button2, button3) {
    // Add the fall class to all buttons
    button1.classList.add('fall');
    button2.classList.add('fall');
    button3.classList.add('fall');
}