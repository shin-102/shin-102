//* PROJECTS CODE SNIPPET


const projects = [
    {
        id: '1',
        title: 'Aqua Fit Social Media Design',
        category: 'graphic design',
        link: 'https://drive.google.com/file/d/1ciXyQY71p4sZ7dkkbYQI3HOhFT9IhXoW/view?usp=drive_link',
        imageUrl: './Assets/aquafit_thumbnail.png',
    },
    {
        id: '2',
        title: 'Game Edge Social Media Design',
        category: 'graphic design',
        link: 'https://drive.google.com/file/d/1RJVni9Q9wnOS5M2HUc24nrCTNXQXUXz7/view?usp=drive_link',
        imageUrl: './Assets/gameedge_thumbnail.png',
    },
    {
        id: '3',
        title: 'Social Media Campaign',
        category: 'graphic design',
        link: 'https://example.com/social-campaign',
        imageUrl: './Assets/coachm_thumbnail.png',
    },
    {
        id: '4',
        title: 'Alphabet Web Design',
        category: 'web development',
        link: 'https://example.com/mobile-app',
        imageUrl: './Assets/alphabet_webdesign_thumbnail.png',
    },
    {
        id: '5',
        title: 'Gmedia News & Garden Expo Flyer',
        category: 'graphic design',
        link: 'https://example.com/mobile-app',
        imageUrl: './Assets/gmedia_expo_thumbnail.png',
    },
    {
        id: '6',
        title: 'AMAG Brand Visual Identity',
        category: 'graphic design',
        link: 'https://example.com/mobile-app',
        imageUrl: './Assets/amag_brand_thumbnail.png',
    },
    {
        id: '7',
        title: 'CCINO Brand Visual Identity',
        category: 'graphic design',
        link: 'https://example.com/mobile-app',
        imageUrl: './Assets/ccino_brand_thumbnail.png',
    },    
    // Add more projects as needed
];

const projectGrid = document.getElementById('project-grid');
const filterButtons = document.getElementById('filter-buttons');

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'bg-[#141414] rounded-xl overflow-hidden shadow-md';
    card.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <p class="text-sm text-gray-600 mb-4">${project.category}</p>
            <a href="${project.link}" class="text-violet-800 hover:underline hover:text-violet-400" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    `;
    return card;
}

function renderProjects(projectsToRender) {
    projectGrid.innerHTML = '';
    projectsToRender.forEach(project => {
        projectGrid.appendChild(createProjectCard(project));
    });
}

function setActiveButton(button) {
    filterButtons.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('bg-violet-800');
        btn.classList.add('bg-[#141414]');
    });
    button.classList.remove('bg-[#141414]');
    button.classList.add('bg-violet-800');
}

filterButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const category = e.target.dataset.category;
        setActiveButton(e.target);
        
        if (category === 'all') {
            renderProjects(projects);
        } else {
            const filteredProjects = projects.filter(project => project.category === category);
            renderProjects(filteredProjects);
        }
    }
});

// Initial render
renderProjects(projects);

//-----------------------------
//* myForm to prevent auto-submital 

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Your form submission logic here
    // For example, using Web3Form to send data
    Web3Form.submit(this)
        .then(response => {
            // Handle success response
            alert('Form submitted successfully! Thank you!');
        })
        .catch(error => {
            // Handle error
            console.error('Error submitting form:', error);
        });
});