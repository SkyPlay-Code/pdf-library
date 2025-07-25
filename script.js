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
            { id: 3, title: "Problems in General Physics - I.E. Irodov", fileUrl: "https://archive.org/download/IrodovProblemsInGeneralPhysics/Irodov-Problems_in_General_Physics.pdf", coverImage: "https://m.media-amazon.com/images/I/51rCXnh66iL._UF1000,1000_QL80_.jpg", keywords: ["irodov"] },
            { id: 4, title: "NCERT Physics Class11 Lab Manual", fileUrl: "https://archive.org/download/ncert-physics-class-11-lab-manual/NCERT-Physics-Class11-Lab-Manual.pdf", coverImage: "data:image/jpeg;base64,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", keywords: ["lab manual", "physics"] }
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