// --- 1. OUR DYNAMIC, THEMED DATA STRUCTURE (Updated with Real Links) ---
const categories = [
    {
        categoryName: "Chemistry - Class 11 Part 1",
        theme: { primary: '#F44336', variant: '#D32F2F' },
        subject: "Chemistry Chapter",
        books: [
            { id: 101, title: "Ch 1: Some Basic Concepts of Chemistry", fileUrl: "https://archive.org/download/full-book-chem-part-1/kech101.pdf", keywords: ["concepts", "chemistry", "chapter 1"] },
            { id: 102, title: "Ch 2: Structure of Atom", fileUrl: "https://archive.org/download/full-book-chem-part-1/kech102.pdf", keywords: ["atom", "structure", "chapter 2"] },
            { id: 103, title: "Ch 3: Classification of Elements and Periodicity", fileUrl: "https://archive.org/download/full-book-chem-part-1/kech103.pdf", keywords: ["periodic table", "elements", "chapter 3"] },
            { id: 104, title: "Ch 4: Chemical Bonding and Molecular Structure", fileUrl: "https://archive.org/download/full-book-chem-part-1/kech104.pdf", keywords: ["bonding", "molecular", "chapter 4"] },
            { id: 105, title: "Ch 5: Thermodynamics", fileUrl: "https://archive.org/download/full-book-chem-part-1/kech105.pdf", keywords: ["thermodynamics", "chapter 5"] },
            { id: 106, title: "Ch 6: Equilibrium", fileUrl: "https://archive.org/download/full-book-chem-part-1/kech106.pdf", keywords: ["equilibrium", "chapter 6"] },
            { id: 107, title: "NCERT Chemistry Class 11 Part 1", fileUrl: "https://archive.org/download/full-book-chem-part-1/full%20book%20chem%20part%201.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kech1cc.jpg", keywords: ["full book", "part 1"] },
        ]
    },
    {
        categoryName: "Chemistry - Class 11 Part 2",
        theme: { primary: '#F44336', variant: '#D32F2F' },
        subject: "Chemistry Chapter",
        books: [
            { id: 201, title: "Ch 7: Redox Reactions", fileUrl: "https://archive.org/download/full-book-chem-part-2/kech201.pdf", keywords: ["redox", "reactions", "chapter 7"] },
            { id: 202, title: "Ch 8: Organic Chemistry", fileUrl: "https://archive.org/download/full-book-chem-part-2/kech202.pdf", keywords: ["organic", "chemistry", "chapter 8"] },
            { id: 203, title: "Ch 9: Hydrocarbon", fileUrl: "https://archive.org/download/full-book-chem-part-2/kech203.pdf", keywords: ["hydrocarbon", "chapter 9"] },
            { id: 204, title: "NCERT Chemistry Class 11 Part 2", fileUrl: "https://archive.org/download/full-book-chem-part-2/full%20book%20chem%20part%202.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kech2cc.jpg", keywords: ["full book", "part 2"] },
        ]
    },
    {
        categoryName: "Physics - Class 11 Part 1",
        theme: { primary: '#2196F3', variant: '#1976D2' },
        subject: "Physics Chapter",
        books: [
            { id: 301, title: "Ch 1: Units and Measurements", fileUrl: "https://archive.org/download/full-book-phyics-part-1/keph101.pdf", keywords: ["units", "measurements", "chapter 1"] },
            { id: 302, title: "Ch 2: Motion in a Straight Line", fileUrl: "https://archive.org/download/full-book-phyics-part-1/keph102.pdf", keywords: ["motion", "straight line", "chapter 2"] },
            { id: 303, title: "Ch 3: Motion in a Plane", fileUrl: "https://archive.org/download/full-book-phyics-part-1/keph103.pdf", keywords: ["motion", "plane", "vectors", "chapter 3"] },
            { id: 304, title: "Ch 4: Laws of Motion", fileUrl: "https://archive.org/download/full-book-phyics-part-1/keph104.pdf", keywords: ["laws of motion", "newton", "chapter 4"] },
            { id: 305, title: "Ch 5: Work, Energy and Power", fileUrl: "https://archive.org/download/full-book-phyics-part-1/keph105.pdf", keywords: ["work", "energy", "power", "chapter 5"] },
            { id: 306, title: "Ch 6: System of Particles and Rotational Motion", fileUrl: "https://archive.org/download/full-book-phyics-part-1/keph106.pdf", keywords: ["rotational motion", "system", "particles", "chapter 6"] },
            { id: 307, title: "Ch 7: Gravitation", fileUrl: "https://archive.org/download/full-book-phyics-part-1/keph107.pdf", keywords: ["gravitation", "chapter 7"] },
            { id: 308, title: "NCERT Physics Class 11 Part 1", fileUrl: "https://archive.org/download/full-book-phyics-part-1/full%20book%20phyics%20part%201.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/keph1cc.jpg", keywords: ["full book", "part 1"] },
        ]
    },
    {
        categoryName: "Physics - Class 11 Part 2",
        theme: { primary: '#2196F3', variant: '#1976D2' },
        subject: "Physics Chapter",
        books: [
            { id: 401, title: "Ch 8: Mechanical Properties of Solids", fileUrl: "https://archive.org/download/full-book-physics-part-2/keph201.pdf", keywords: ["solids", "mechanical", "properties", "chapter 8"] },
            { id: 402, title: "Ch 9: Mechanical Properties of Fluids", fileUrl: "https://archive.org/download/full-book-physics-part-2/keph202.pdf", keywords: ["fluids", "mechanical", "properties", "chapter 9"] },
            { id: 403, title: "Ch 10: Thermal Properties of Matter", fileUrl: "https://archive.org/download/full-book-physics-part-2/keph203.pdf", keywords: ["thermal", "matter", "chapter 10"] },
            { id: 404, title: "Ch 11: Thermodynamics", fileUrl: "https://archive.org/download/full-book-physics-part-2/keph204.pdf", keywords: ["thermodynamics", "chapter 11"] },
            { id: 405, title: "Ch 12: Kinetic Theory", fileUrl: "https://archive.org/download/full-book-physics-part-2/keph205.pdf", keywords: ["kinetic theory", "gases", "chapter 12"] },
            { id: 406, title: "Ch 13: Oscillations", fileUrl: "https://archive.org/download/full-book-physics-part-2/keph206.pdf", keywords: ["oscillations", "shm", "chapter 13"] },
            { id: 407, title: "Ch 14: Waves", fileUrl: "https://archive.org/download/full-book-physics-part-2/keph207.pdf", keywords: ["waves", "chapter 14"] },
            { id: 408, title: "NCERT Physics Class 11 Part 2", fileUrl: "https://archive.org/download/full-book-physics-part-2/full%20book%20physics%20part%202.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/keph2cc.jpg", keywords: ["full book", "part 2"] },
        ]
    },
    {
        categoryName: "General Reference",
        theme: { primary: '#03dac6', variant: '#018786' },
        subject: "Reference Book",
        books: [
            { id: 1, title: "Concepts of Physics Vol.1 - H.C. Verma", fileUrl: "https://archive.org/download/hc-verma-concepts-of-physics-volume-1.-volume-1-bharati-bhawan-publishers-2019/HC%20Verma%20-%20Concepts%20of%20Physics%20Volume%201.%20Volume%201-Bharati%20Bhawan%20Publishers%20%282019%29.pdf", coverImage: "https://rukminim2.flixcart.com/image/704/844/xif0q/book/n/r/g/concept-of-physics-by-h-c-verma-part-i-session-2024-25-original-imahdbbhykmjwudy.jpeg?q=90&crop=false", keywords: ["hcv", "hcverma"] },
            { id: 2, title: "Concepts of Physics Vol.2 - H.C. Verma", fileUrl: "https://archive.org/download/hc-verma-concepts-of-physics-volume-2/HC%20Verma%20-%20Concepts%20of%20Physics%20Volume%202.pdf", coverImage: "https://rukminim2.flixcart.com/image/704/844/jzlldow0/book/3/2/1/concepts-of-physics-v-2-original-imafgyq7pgxgwztk.jpeg?q=20&crop=false", keywords: ["hcv", "hcverma"] },
            { id: 3, title: "Problems in General Physics - I.E. Irodov", fileUrl: "https://archive.org/download/IrodovProblemsInGeneralPhysics/Irodov-Problems_in_General_Physics.pdf", coverImage: "https://m.media-amazon.com/images/I/51rCXnh66iL._UF1000,1000_QL80_.jpg", keywords: ["irodov"] }
        ]
    },
];

// --- 2. GETTING HTML ELEMENTS ---
const tabContainer = document.getElementById('tab-container');
const pdfGrid = document.getElementById('pdf-grid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('pdf-modal');
const modalTitle = document.getElementById('modal-title');
const pdfFrame = document.getElementById('pdf-frame');
const closeButton = document.querySelector('.close-button');
const themeColorMeta = document.getElementById('theme-color-meta');
const rootElement = document.documentElement;
const currentCategoryTitle = document.getElementById('current-category-title');
const pdfLoader = document.getElementById('pdf-loader');
let currentActiveCategoryIndex = 0;

// --- 3. HELPER & THEME FUNCTIONS ---
function normalizeString(str) { return str.toLowerCase().replace(/[^a-z0-9]/g, ''); }

function applyTheme(theme) {
    rootElement.style.setProperty('--primary-color', theme.primary);
    rootElement.style.setProperty('--primary-variant-color', theme.variant);
    themeColorMeta.setAttribute('content', theme.primary);
}

// --- 4. CORE RENDERING AND LOGIC ---
function createTabs() {
    tabContainer.innerHTML = '';
    categories.forEach((category, index) => {
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button';
        tabButton.textContent = category.categoryName;
        tabButton.dataset.index = index;
        if (index === currentActiveCategoryIndex) {
            tabButton.classList.add('active');
        }
        tabContainer.appendChild(tabButton);
    });
}

function displayBooks(bookList, categorySubject = "Book") {
    if (bookList.length === 0) {
        pdfGrid.innerHTML = '<p style="color: #888; grid-column: 1 / -1; text-align: center;">No books found.</p>';
        return;
    }
    const cardsHTML = bookList.map((book, index) => {
        let cardHeaderHTML;
        if (book.coverImage) {
            cardHeaderHTML = `<img src="${book.coverImage}" alt="${book.title} cover" class="cover-image" loading="lazy" width="280" height="200" onerror="this.onerror=null;this.src='https://via.placeholder.com/280x200/1e1e1e/e0e0e0?text=Image+Not+Found';">`;
        } else {
            const chapterNumMatch = book.title.match(/\d+/);
            const chapterNum = chapterNumMatch ? chapterNumMatch[0] : '??';
            cardHeaderHTML = `<div class="card-header-no-image"><div class="chapter-number">${chapterNum}</div><div class="chapter-subject">${categorySubject}</div></div>`;
        }
        
        return `
            <div class="pdf-card" style="animation-delay: ${index * 0.05}s;">
                ${cardHeaderHTML}
                <div class="card-content">
                    <h3>${book.title}</h3>
                    <div class="card-buttons">
                        <button class="preview-btn" data-file="${book.fileUrl}" data-title="${book.title}">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                        <a href="${book.fileUrl}" download class="download-btn">
                            <i class="fas fa-download"></i>
                            <span class="btn-text">Download</span>
                        </a>
                    </div>
                </div>
            </div>`;
    }).join('');
    
    pdfGrid.innerHTML = cardsHTML;
}

function performSearch() {
    const normalizedSearchTerm = normalizeString(searchInput.value);
    if (!normalizedSearchTerm) {
        tabContainer.style.display = 'flex';
        const activeCategory = categories[currentActiveCategoryIndex];
        applyTheme(activeCategory.theme);
        displayBooks(activeCategory.books, activeCategory.subject);
        currentCategoryTitle.style.display = 'block';
        return;
    }
    
    tabContainer.style.display = 'none';
    currentCategoryTitle.style.display = 'none';

    let allBooks = categories.flatMap(category => category.books);
    const filteredBooks = allBooks.filter(book => {
        const normalizedTitle = normalizeString(book.title);
        const keywordsMatch = book.keywords.some(keyword => normalizeString(keyword).includes(normalizedSearchTerm));
        return normalizedTitle.includes(normalizedSearchTerm) || keywordsMatch;
    });

    if (filteredBooks.length > 0) {
        const resultsTitle = `<h2 class="search-results-title">Search Results</h2>`;
        pdfGrid.innerHTML = resultsTitle;
        displayBooks(filteredBooks, "Book");
    } else {
        pdfGrid.innerHTML = '<p style="color: #888; grid-column: 1 / -1; text-align: center;">No books found matching your search.</p>';
    }
}


// --- 5. EVENT LISTENERS ---
tabContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-button')) {
        const clickedIndex = parseInt(e.target.dataset.index);
        currentActiveCategoryIndex = clickedIndex;
        const activeCategory = categories[clickedIndex];
        currentCategoryTitle.textContent = activeCategory.categoryName;
        applyTheme(activeCategory.theme);
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        displayBooks(activeCategory.books, activeCategory.subject);
    }
});

searchInput.addEventListener('input', performSearch);

pdfGrid.addEventListener('click', (e) => {
    const previewButton = e.target.closest('.preview-btn');
    if (previewButton) {
        openPreview(previewButton.dataset.file, previewButton.dataset.title);
    }
});

function openPreview(fileUrl, title) {
    modalTitle.textContent = title;
    pdfLoader.style.display = 'flex';
    pdfFrame.style.visibility = 'hidden';
    pdfFrame.src = '';
    
    pdfFrame.src = fileUrl; 
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

pdfFrame.addEventListener('load', () => {
    pdfLoader.style.display = 'none';
    pdfFrame.style.visibility = 'visible';
});

pdfFrame.addEventListener('error', () => {
    pdfLoader.innerHTML = '<p style="color: #fdd835;">Could not load preview.</p>';
});

function closePreview() {
    modal.style.display = 'none';
    pdfFrame.src = '';
    document.body.style.overflow = 'auto';
    pdfLoader.innerHTML = '<div class="loader"></div><p>Loading Preview...</p>';
}

closeButton.addEventListener('click', closePreview);
window.addEventListener('click', (e) => { if (e.target == modal) closePreview(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'block') closePreview(); });


// --- 6. INITIALIZATION ---
function init() {
    const initialCategory = categories[currentActiveCategoryIndex];
    currentCategoryTitle.textContent = initialCategory.categoryName;
    applyTheme(initialCategory.theme);
    
    setTimeout(() => {
        createTabs();
        displayBooks(initialCategory.books, initialCategory.subject);
    }, 0);
}

init();