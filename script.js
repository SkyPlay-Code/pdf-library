// --- 1. OUR DYNAMIC, THEMED DATA STRUCTURE (Unchanged) ---
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
        categoryName: "Mathematics - Class 11",
        theme: { primary: '#007ad1ff', variant: '#00AEEF' },
        subject: "Maths Chapter",
        books: [
            { id: 501, title: "Ch 1: Sets", fileUrl: "https://archive.org/download/kemh103/kemh101.pdf", keywords: ["sets", "chapter 1"] },
            { id: 502, title: "Ch 2: Relations and Functions", fileUrl: "https://archive.org/download/kemh103/kemh102.pdf", keywords: ["relations", "functions", "chapter 2"] },
            { id: 503, title: "Ch 3: Trigonometric Functions", fileUrl: "https://archive.org/download/kemh103/kemh103.pdf", keywords: ["trigonometry", "chapter 3"] },
            { id: 504, title: "Ch 4: Principle of Mathematical Induction", fileUrl: "https://archive.org/download/kemh103/kemh104.pdf", keywords: ["mathematical induction", "chapter 4"] },
            { id: 505, title: "Ch 5: Complex Numbers and Quadratic Equations", fileUrl: "https://archive.org/download/kemh103/kemh105.pdf", keywords: ["complex numbers", "quadratic equations", "chapter 5"] },
            { id: 506, title: "Ch 6: Linear Inequalities", fileUrl: "https://archive.org/download/kemh103/kemh106.pdf", keywords: ["linear inequalities", "chapter 6"] },
            { id: 507, title: "Ch 7: Permutations and Combinations", fileUrl: "https://archive.org/download/kemh103/kemh107.pdf", keywords: ["permutations", "combinations", "chapter 7"] },
            { id: 508, title: "Ch 8: Binomial Theorem", fileUrl: "https://archive.org/download/kemh103/kemh108.pdf", keywords: ["binomial theorem", "chapter 8"] },
            { id: 509, title: "Ch 9: Sequences and Series", fileUrl: "https://archive.org/download/kemh103/kemh109.pdf", keywords: ["sequences", "series", "chapter 9"] },
            { id: 510, title: "Ch 10: Straight Lines", fileUrl: "https://archive.org/download/kemh103/kemh110.pdf", keywords: ["straight lines", "chapter 10"] },
            { id: 511, title: "Ch 11: Conic Sections", fileUrl: "https://archive.org/download/kemh103/kemh111.pdf", keywords: ["conic sections", "chapter 11"] },
            { id: 512, title: "Ch 12: Introduction to Three Dimensional Geometry", fileUrl: "https://archive.org/download/kemh103/kemh112.pdf", keywords: ["3d geometry", "chapter 12"] },
            { id: 513, title: "Ch 13: Limits and Derivatives", fileUrl: "https://archive.org/download/kemh103/kemh113.pdf", keywords: ["limits", "derivatives", "chapter 13"] },
            { id: 514, title: "Ch 14: Mathematical Reasoning", fileUrl: "https://archive.org/download/kemh103/kemh114.pdf", keywords: ["mathematical reasoning", "chapter 14"] },
            { id: 515, title: "NCERT Mathematics Class 11", fileUrl: "https://archive.org/download/kemh103/full%20book%20math.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kemh1cc.jpg", keywords: ["full book", "maths"] },
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
            { id: 4, title: "NCERT Physics Class11 Lab Manual", fileUrl: "https://archive.org/download/ncert-physics-class-11-lab-manual/NCERT-Physics-Class11-Lab-Manual.pdf", coverImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRj8FH87gLWLdBwM3vbzWfgqMAyoCSpR0HGt8mjAtU7eiqux7Bm_RL-9kbgjvRO89UQ0TQ-RTvxRpdusRXvsa5xTZoT8LQg5mgLW2MjvGOhB7z2iJDrvEzkgQ", keywords: ["lab manual", "physics"] },
        ]
    },
];

// --- 2. GETTING HTML ELEMENTS ---
const tabContainer = document.getElementById('tab-container');
const gridLoader = document.getElementById('grid-loader');
const pdfGrid = document.getElementById('pdf-grid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('pdf-modal');
const modalTitle = document.getElementById('modal-title');
const modalDownloadLink = document.getElementById('modal-download-link');
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
    rootElement.style.setProperty('--glow-color', theme.primary + '66');
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
        if (index === currentActiveCategoryIndex) tabButton.classList.add('active');
        tabContainer.appendChild(tabButton);
    });
}

function displayBooks(bookList, options = {}) {
    const { isSearch = false } = options;
    
    // Hide the grid loader and show the actual grid
    gridLoader.style.display = 'none';
    pdfGrid.style.display = 'grid';

    if (bookList.length === 0) {
        pdfGrid.innerHTML = `<div class="no-results"><i class="fas fa-search"></i>No books found matching your search.</div>`;
        return;
    }
    const cardsHTML = bookList.map((book, index) => {
        const categoryTag = isSearch 
            ? `<div class="category-tag" style="background-color:${book.theme.primary}; color: #111;">${book.originCategory}</div>` 
            : '';
            
        const cardHeaderHTML = book.coverImage
            ? `<img src="${book.coverImage}" alt="${book.title} cover" class="cover-image" loading="lazy" onerror="this.onerror=null;this.src='https://via.placeholder.com/280x200/1e1e1e/e0e0e0?text=Image+Not+Found';">`
            : `<div class="card-header-no-image"><div class="chapter-number">${book.title.match(/\d+/)?.[0] || '??'}</div><div class="chapter-subject">${book.subject}</div></div>`;

        return `
            <div class="pdf-card" style="animation-delay: ${index * 0.05}s;">
                ${categoryTag}
                ${cardHeaderHTML}
                <div class="card-content">
                    <h3>${book.title}</h3>
                    <div class="card-buttons">
                        <button class="preview-btn" data-file="${book.fileUrl}" data-title="${book.title}">
                            <i class="fas fa-eye"></i> Preview
                        </button>
                        <a href="${book.fileUrl}" download="${book.title}.pdf" class="download-btn">
                            <i class="fas fa-download"></i>
                            <span class="btn-text">Download</span>
                            <div class="btn-loader"></div>
                        </a>
                    </div>
                </div>
            </div>`;
    }).join('');
    
    pdfGrid.innerHTML = cardsHTML;
}

const debouncedSearch = (() => {
    let timeout;
    return (func, delay = 300) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
})();

function performSearch() {
    const normalizedSearchTerm = normalizeString(searchInput.value);
    
    pdfGrid.style.opacity = '0';
    currentCategoryTitle.style.opacity = '0';

    setTimeout(() => {
        if (!normalizedSearchTerm) {
            tabContainer.style.display = 'flex';
            const activeCategory = categories[currentActiveCategoryIndex];
            applyTheme(activeCategory.theme);
            currentCategoryTitle.textContent = activeCategory.categoryName;
            displayBooks(activeCategory.books.map(b => ({...b, subject: activeCategory.subject})));
        } else {
            tabContainer.style.display = 'none';
            currentCategoryTitle.textContent = `Results for "${searchInput.value}"`;

            const allBooks = categories.flatMap(cat => 
                cat.books.map(book => ({ 
                    ...book, 
                    originCategory: cat.categoryName, 
                    theme: cat.theme, 
                    subject: cat.subject 
                }))
            );
            const filteredBooks = allBooks.filter(book => 
                normalizeString(book.title).includes(normalizedSearchTerm) ||
                book.keywords.some(kw => normalizeString(kw).includes(normalizedSearchTerm))
            );
            applyTheme({primary: '#888', variant: '#666'}); // Neutral search theme
            displayBooks(filteredBooks, { isSearch: true });
        }
        pdfGrid.style.opacity = '1';
        currentCategoryTitle.style.opacity = '1';
    }, 300);
}

// --- 5. EVENT LISTENERS ---
tabContainer.addEventListener('click', (e) => {
    const tabButton = e.target.closest('.tab-button');
    if (tabButton && !tabButton.classList.contains('active')) {
        const clickedIndex = parseInt(tabButton.dataset.index, 10);
        currentActiveCategoryIndex = clickedIndex;
        searchInput.value = '';
        
        pdfGrid.style.opacity = '0';
        currentCategoryTitle.style.opacity = '0';

        setTimeout(() => {
            const activeCategory = categories[clickedIndex];
            currentCategoryTitle.textContent = activeCategory.categoryName;
            applyTheme(activeCategory.theme);
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            tabButton.classList.add('active');
            displayBooks(activeCategory.books.map(b => ({...b, subject: activeCategory.subject})));
            pdfGrid.style.opacity = '1';
            currentCategoryTitle.style.opacity = '1';
        }, 300);
    }
});

searchInput.addEventListener('input', () => debouncedSearch(performSearch));

// --- CORRECTED CLICK HANDLING ---
pdfGrid.addEventListener('click', (e) => {
    const previewButton = e.target.closest('.preview-btn');
    const downloadLink = e.target.closest('.download-btn');

    if (previewButton) {
        openPreview(previewButton.dataset.file, previewButton.dataset.title);

    } else if (downloadLink && !downloadLink.classList.contains('is-downloading')) {
        e.preventDefault(); // Stop the link from navigating away.
        
        // Show the downloading state.
        downloadLink.classList.add('is-downloading');

        // --- The FIX: Simulate a click to bypass CORS issues ---
        // This method is the most reliable way to trigger a download for a cross-origin URL.
        const tempLink = document.createElement('a');
        tempLink.href = downloadLink.href;
        tempLink.setAttribute('download', downloadLink.download); // Ensures it's a download, not navigation.
        tempLink.setAttribute('target', '_blank'); // Fallback for browsers that might ignore 'download' attribute on cross-origin links.
        
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

        // We can't know when the download is finished, so we'll just reset the button after a delay.
        setTimeout(() => {
            downloadLink.classList.remove('is-downloading');
        }, 1500); // Reset after 1.5 seconds.
    }
});

function openPreview(fileUrl, title) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    modalTitle.textContent = title;
    modalDownloadLink.href = fileUrl;
    modalDownloadLink.download = `${title}.pdf`;
    
    pdfLoader.style.display = 'flex';
    pdfLoader.innerHTML = '<div class="loader"></div><p>Loading Preview...</p>'; // Reset
    pdfFrame.style.visibility = 'hidden';
    pdfFrame.src = fileUrl; 
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
}

closeButton.addEventListener('click', closePreview);
window.addEventListener('click', (e) => { if (e.target === modal) closePreview(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'block') closePreview(); });


// --- 6. INITIALIZATION ---
function init() {
    const initialCategory = categories[currentActiveCategoryIndex];
    currentCategoryTitle.textContent = initialCategory.categoryName;
    applyTheme(initialCategory.theme);
    
    createTabs();
    const initialBooks = initialCategory.books.map(b => ({...b, subject: initialCategory.subject}));
    displayBooks(initialBooks);
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(init, 250); // Small delay to let skeleton render
});