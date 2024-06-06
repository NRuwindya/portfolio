// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const roles = ["UI/UX Designer", "Web Developer", "Photographer", "Web Designer"];
    let currentRoleIndex = 0;
    const typingElement = document.querySelector('.typing');

    function typeRole(role, callback) {
        let currentCharIndex = 0;
        typingElement.textContent = '';

        function typeChar() {
            if (currentCharIndex < role.length) {
                typingElement.textContent += role[currentCharIndex];
                currentCharIndex++;
                setTimeout(typeChar, 100);
            } else {
                setTimeout(callback, 800);
            }
        }

        typeChar();
    }

    function eraseRole(callback) {
        let currentCharIndex = typingElement.textContent.length;

        function eraseChar() {
            if (currentCharIndex > 0) {
                typingElement.textContent = typingElement.textContent.slice(0, -1);
                currentCharIndex--;
                setTimeout(eraseChar, 50);
            } else {
                setTimeout(callback, 500); // Wait 0.5 seconds before typing next role
            }
        }

        eraseChar();
    }

    function cycleRoles() {
        typeRole(roles[currentRoleIndex], () => {
            eraseRole(() => {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                cycleRoles();
            });
        });
    }

    cycleRoles();
});