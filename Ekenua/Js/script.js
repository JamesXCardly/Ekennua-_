document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('industryCardsContainer');
    if (!container) {
        console.error('Industry cards container not found!');
        return;
    }
    const cards = Array.from(container.children);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function shuffleCards() {
        let shuffledCards = [...cards];
        shuffleArray(shuffledCards);

        container.innerHTML = '';
        shuffledCards.forEach(card => {
            container.appendChild(card);
        });
    }

    shuffleCards();
    setInterval(shuffleCards, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learn-more-btn'); // Initial "Learn more"
    const initialAboutContent = document.getElementById('initial-about-content');
    const paginatedContent = document.getElementById('paginated-content');
    const visionPage = document.getElementById('vision-page');
    const missionPage = document.getElementById('mission-page');
    const paginationNavLinks = document.querySelectorAll('.pagination-nav-link'); // Selects Vision/Mission links
    const backToAboutBtn = document.getElementById('back-to-about-btn'); // "Back to About Us" link

    // Function to show a specific paginated page
    function showPage(pageId) {
        visionPage.style.display = 'none';
        missionPage.style.display = 'none';
        document.getElementById(pageId).style.display = 'block';

        // Optional: Add/remove an active class for the current pagination link
        paginationNavLinks.forEach(link => {
            if (link.dataset.page + '-page' === pageId) {
                link.classList.add('active-pagination-link'); // Add a class for active state
            } else {
                link.classList.remove('active-pagination-link');
            }
        });
    }

    // Event listener for initial "Learn more" button
    learnMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (e.g., jumping to top)
        initialAboutContent.style.display = 'none'; // Hide initial content
        paginatedContent.style.display = 'block'; // Show paginated content
        showPage('vision-page'); // Display "Our Vision" by default
    });

    // Event listeners for pagination navigation links (Vision/Mission)
    paginationNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const pageToShow = this.dataset.page + '-page'; // Get the ID of the page to show
            showPage(pageToShow);
        });
    });

    // Event listener for "Back to About Us" link
    backToAboutBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        paginatedContent.style.display = 'none'; // Hide paginated content
        initialAboutContent.style.display = 'block'; // Show initial content
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.strategies-list li');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});

