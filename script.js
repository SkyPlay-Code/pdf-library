// --- 1. OUR DYNAMIC, THEMED DATA STRUCTURE (Updated with 'shortName') ---
const subjects = [
    {
        subjectName: "Chemistry",
        theme: { primary: '#F44336', variant: '#D32F2F' },
        categories: [
            {
                categoryName: "Class 11 Part 1",
                subjectForDisplay: "Chemistry Chapter",
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
                categoryName: "Class 11 Part 2",
                subjectForDisplay: "Chemistry Chapter",
                books: [
                    { id: 201, title: "Ch 7: Redox Reactions", fileUrl: "https://archive.org/download/full-book-chem-part-2/kech201.pdf", keywords: ["redox", "reactions", "chapter 7"] },
                    { id: 202, title: "Ch 8: Organic Chemistry", fileUrl: "https://archive.org/download/full-book-chem-part-2/kech202.pdf", keywords: ["organic", "chemistry", "chapter 8"] },
                    { id: 203, title: "Ch 9: Hydrocarbon", fileUrl: "https://archive.org/download/full-book-chem-part-2/kech203.pdf", keywords: ["hydrocarbon", "chapter 9"] },
                    { id: 204, title: "NCERT Chemistry Class 11 Part 2", fileUrl: "https://archive.org/download/full-book-chem-part-2/full%20book%20chem%20part%202.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kech2cc.jpg", keywords: ["full book", "part 2"] },
                ]
            }
        ]
    },
    {
        subjectName: "Physics",
        theme: { primary: '#2196F3', variant: '#1976D2' },
        categories: [
            {
                categoryName: "Class 11 Part 1",
                subjectForDisplay: "Physics Chapter",
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
                categoryName: "Class 11 Part 2",
                subjectForDisplay: "Physics Chapter",
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
            }
        ]
    },
    {
        subjectName: "Mathematics",
        theme: { primary: '#007ad1ff', variant: '#00AEEF' },
        categories: [
            {
                categoryName: "Class 11",
                subjectForDisplay: "Maths Chapter",
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
            }
        ]
    },
    { 
        subjectName: "SSM",
        theme: { primary: '#4CAF50', variant: '#388E3C' },
        categories: [
            {
                categoryName: "Class 11",
                subjectForDisplay: "Support Material",
                books: [
                    { id: 601, title: "SSM-CHEMISTRY-XI", fileUrl: "https://drive.google.com/uc?export=download&id=1XoKZCpZHL_veA_Q9i0OGjLR7u-72juJD", previewDisabled: true, keywords: ["ssm", "chemistry"], shortName: "Chemistry" },
                    { id: 602, title: "SSM-BIOLOGY-XI", fileUrl: "https://drive.google.com/uc?export=download&id=1KuNpylTbAv1RS1xAg0lt7QkHWxPWud9T", previewDisabled: true, keywords: ["ssm", "biology"], shortName: "Biology" },
                    { id: 603, title: "SSM-Geography-XI (Hindi)", fileUrl: "https://drive.google.com/uc?export=download&id=1j9CvvDaC0qatnBAEdNKVcwWGaDiIrVBa", previewDisabled: true, keywords: ["ssm", "geography", "hindi"], shortName: "Geography" },
                    { id: 604, title: "SSM-Geography-XI (English)", fileUrl: "https://drive.google.com/uc?export=download&id=1xfimnMHmpCeoe_seNWjzERUxvkWNy--d", previewDisabled: true, keywords: ["ssm", "geography", "english"], shortName: "Geography" },
                    { id: 605, title: "Sociology Revised SSM CI.XI", fileUrl: "https://drive.google.com/uc?export=download&id=1W0Gx1wkVqXA95vYcdA5Vr8o1Gr7nL20a", previewDisabled: true, keywords: ["ssm", "sociology"], shortName: "Sociology" },
                    { id: 606, title: "Pol Sc Revised SSM CI.XI", fileUrl: "https://drive.google.com/uc?export=download&id=1BsN5Wquz3CXc-nAdJBshhIvT1YrhY5ex", previewDisabled: true, keywords: ["ssm", "political science"], shortName: "Pol Sc" },
                    { id: 607, title: "PHYSICS XI SSM 2025-26", fileUrl: "https://drive.google.com/uc?export=download&id=1Yaz73kQd2mKEadk6mW7QqcGDjt4xiGyB", previewDisabled: true, keywords: ["ssm", "physics"], shortName: "Physics" },
                    { id: 608, title: "P&HE Class XI SSM 2025-26", fileUrl: "https://drive.google.com/uc?export=download&id=1iu3gRBAOHdG8j2Q1LDwHlJOfqUxdeKGz", previewDisabled: true, keywords: ["ssm", "p&he"], shortName: "P&HE" },
                    { id: 609, title: "HISTORY XI SSM 2025-26 (Hindi)", fileUrl: "https://drive.google.com/uc?export=download&id=1m0C3eIf8nhNPXZ4qOwMWfkxyIXVq2Cb9", previewDisabled: true, keywords: ["ssm", "history", "hindi"], shortName: "History" },
                    { id: 610, title: "HISTORY XI SSM 2025-26 (English)", fileUrl: "https://drive.google.com/uc?export=download&id=1X_s0nMFUHxixIEwGRaqQH3yihqBvMbIE", previewDisabled: true, keywords: ["ssm", "history", "english"], shortName: "History" },
                    { id: 611, title: "Eco Revised SSM CI-XI", fileUrl: "https://drive.google.com/uc?export=download&id=1mA_fBUDyOJcFfzNDCRCF7FTT7Qj8pVKb", previewDisabled: true, keywords: ["ssm", "economics"], shortName: "Economics" },
                    { id: 612, title: "CLASS 11 - MATHEMATICS (2025-26)", fileUrl: "https://drive.google.com/uc?export=download&id=11etbTUbjA-CnhMpve60ONF3ttaeJIsLE", previewDisabled: true, keywords: ["ssm", "mathematics"], shortName: "Maths" },
                    { id: 613, title: "CLASS 11 - APPLIED MATHEMATICS (2025-26)", fileUrl: "https://drive.google.com/uc?export=download&id=1XsS7qrxFrf1_HjLFqxC2O0ibbGQd2Nvs", previewDisabled: true, keywords: ["ssm", "applied mathematics"], shortName: "Applied Maths" },
                    { id: 614, title: "C11 IP SSM FINAL 2025-26", fileUrl: "https://drive.google.com/uc?export=download&id=1T-ZsDQ__VO29-aeui_c1WTJIjTiddaAD", previewDisabled: true, keywords: ["ssm", "ip"], shortName: "IP" },
                    { id: 615, title: "C11 ENGLISH SSM FINAL 2025-26", fileUrl: "https://drive.google.com/uc?export=download&id=14IH2yZ9naO3tUjkkOjWONB3VhmxGHO_D", previewDisabled: true, keywords: ["ssm", "english"], shortName: "English" },
                    { id: 616, title: "C11 COMP SC SSM FINAL 2025-26", fileUrl: "https://drive.google.com/uc?export=download&id=1dPHG5wJlhm8KQw7UlwscfoIIkRLkcdQf", previewDisabled: true, keywords: ["ssm", "computer science"], shortName: "CS" },
                    { id: 617, title: "C11 BIOTECH SSM FINAL 2025-26", fileUrl: "https://drive.google.com/uc?export=download&id=1EwkjydgCiEm_YHvsxFAM5foApf_r8kL0", previewDisabled: true, keywords: ["ssm", "biotech"], shortName: "Biotech" },
                    { id: 618, title: "11 वीं कक्षा हेतु अध्ययन सामग्री (हिन्दी आधार)", fileUrl: "https://drive.google.com/uc?export=download&id=1jKGhCMip5lU8fy1rNVpkiPWUrAKoBs2s", previewDisabled: true, keywords: ["ssm", "hindi"], shortName: "हिन्दी" },
                ]
            }
        ]
    },
    {
        subjectName: "General Reference",
        theme: { primary: '#03dac6', variant: '#018786' },
        categories: [
            {
                categoryName: "Reference Books",
                subjectForDisplay: "Reference Book",
                books: [
                    { id: 1, title: "Concepts of Physics Vol.1 - H.C. Verma", fileUrl: "https://archive.org/download/hc-verma-concepts-of-physics-volume-1.-volume-1-bharati-bhawan-publishers-2019/HC%20Verma%20-%20Concepts%20of%20Physics%20Volume%201.%20Volume%201-Bharati%20Bhawan%20Publishers%20%282019%29.pdf", coverImage: "https://rukminim2.flixcart.com/image/704/844/xif0q/book/n/r/g/concept-of-physics-by-h-c-verma-part-i-session-2024-25-original-imahdbbhykmjwudy.jpeg?q=90&crop=false", keywords: ["hcv", "hcverma"] },
                    { id: 2, title: "Concepts of Physics Vol.2 - H.C. Verma", fileUrl: "https://archive.org/download/hc-verma-concepts-of-physics-volume-2/HC%20Verma%20-%20Concepts%20of%20Physics%20Volume%202.pdf", coverImage: "https://rukminim2.flixcart.com/image/704/844/jzlldow0/book/3/2/1/concepts-of-physics-v-2-original-imafgyq7pgxgwztk.jpeg?q=20&crop=false", keywords: ["hcv", "hcverma"] },
                    { id: 3, title: "Problems in General Physics - I.E. Irodov", fileUrl: "https://archive.org/download/IrodovProblemsInGeneralPhysics/Irodov-Problems_in_General_Physics.pdf", coverImage: "https://m.media-amazon.com/images/I/51rCXnh66iL._UF1000,1000_QL80_.jpg", keywords: ["irodov"] },
                    { id: 4, title: "NCERT Physics Class11 Lab Manual", fileUrl: "https://archive.org/download/ncert-physics-class-11-lab-manual/NCERT-Physics-Class11-Lab-Manual.pdf", coverImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRj8FH87gLWLdBwM3vbzWfgqMAyoCSpR0HGt8mjAtU7eiqux7Bm_RL-9kbgjvRO89UQ0TQ-RTvxRpdusRXvsa5xTZoT8LQg5mgLW2MjvGOhB7z2iJDrvEzkgQ", keywords: ["lab manual", "physics"] },
                ]
            }
        ]
    }
];

// --- 2. GETTING HTML ELEMENTS (Unchanged) ---
const primaryTabContainer = document.getElementById('primary-tab-container');
const secondaryTabContainer = document.getElementById('secondary-tab-container');
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
const pdfLoader = document.getElementById('pdf-loader');
const categoryTitleText = document.getElementById('category-title-text'); 
let currentActiveSubjectIndex = 0;
let currentActiveCategoryIndex = 0;

// --- 3. HELPER & THEME FUNCTIONS (Unchanged) ---
function normalizeString(str) { return str.toLowerCase().replace(/[^a-z0-9]/g, ''); }
function applyTheme(theme) {
    rootElement.style.setProperty('--primary-color', theme.primary);
    rootElement.style.setProperty('--primary-variant-color', theme.variant);
    rootElement.style.setProperty('--glow-color', theme.primary + '66');
    themeColorMeta.setAttribute('content', theme.primary);
}
function updateTitle(newText) {
    categoryTitleText.classList.add('fade-out');
    setTimeout(() => {
        categoryTitleText.textContent = newText;
        categoryTitleText.classList.remove('fade-out');
    }, 400); 
}

// --- 4. CORE RENDERING AND LOGIC ---
function createPrimaryTabs() {
    primaryTabContainer.innerHTML = '';
    subjects.forEach((subject, index) => {
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button primary';
        tabButton.textContent = subject.subjectName;
        tabButton.dataset.index = index;
        if (index === currentActiveSubjectIndex) tabButton.classList.add('active');
        primaryTabContainer.appendChild(tabButton);
    });
}

function createSecondaryTabs(subjectIndex) {
    secondaryTabContainer.innerHTML = '';
    const activeSubject = subjects[subjectIndex];
    if (activeSubject.categories.length > 1) {
        activeSubject.categories.forEach((category, index) => {
            const tabButton = document.createElement('button');
            tabButton.className = 'tab-button secondary';
            tabButton.textContent = category.categoryName;
            tabButton.dataset.index = index;
            if (index === currentActiveCategoryIndex) tabButton.classList.add('active');
            secondaryTabContainer.appendChild(tabButton);
        });
    }
}

// --- MODIFIED displayBooks to handle shortName and previewDisabled ---
function displayBooks(bookList, options = {}) {
    const { isSearch = false } = options;
    
    pdfGrid.innerHTML = '';
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
        
        let cardHeaderHTML;
        if (book.coverImage) {
            cardHeaderHTML = `<img src="${book.coverImage}" alt="${book.title} cover" class="cover-image" loading="lazy" onerror="this.onerror=null;this.src='https://via.placeholder.com/280x200/1e1e1e/e0e0e0?text=Image+Not+Found';">`;
        } else {
            // Smart header logic: Use shortName if available, otherwise fallback to chapter number
            const mainDisplayText = book.shortName || book.title.match(/\d+/)?.[0] || '??';
            const mainDisplayClass = book.shortName ? 'subject-abbreviation' : 'chapter-number';
            
            cardHeaderHTML = `
                <div class="card-header-no-image">
                    <div class="${mainDisplayClass}">${mainDisplayText}</div>
                    <div class="chapter-subject">${book.subject}</div>
                </div>`;
        }
        
        const buttonsHTML = book.previewDisabled
            ? `<a href="${book.fileUrl}" download="${book.title}.pdf" class="download-btn">
                    <i class="fas fa-download"></i>
                    <span class="btn-text">Download</span>
                    <div class="btn-loader"></div>
               </a>`
            : `<button class="preview-btn" data-file="${book.fileUrl}" data-title="${book.title}">
                    <i class="fas fa-eye"></i> Preview
               </button>
               <a href="${book.fileUrl}" download="${book.title}.pdf" class="download-btn">
                    <i class="fas fa-download"></i>
                    <span class="btn-text">Download</span>
                    <div class="btn-loader"></div>
               </a>`;

        const buttonContainerClass = book.previewDisabled ? 'card-buttons single-button' : 'card-buttons';

        return `
            <div class="pdf-card" style="animation-delay: ${index * 0.07}s;">
                ${categoryTag}
                ${cardHeaderHTML}
                <div class="card-content">
                    <h3>${book.title}</h3>
                    <div class="${buttonContainerClass}">
                        ${buttonsHTML}
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

    if (!normalizedSearchTerm) {
        primaryTabContainer.style.display = 'flex';
        secondaryTabContainer.style.display = 'flex';
        const activeCategory = subjects[currentActiveSubjectIndex].categories[currentActiveCategoryIndex];
        applyTheme(subjects[currentActiveSubjectIndex].theme);
        updateTitle(activeCategory.categoryName);
        displayBooks(activeCategory.books.map(b => ({...b, subject: activeCategory.subjectForDisplay})));
    } else {
        primaryTabContainer.style.display = 'none';
        secondaryTabContainer.style.display = 'none';
        updateTitle(`Results for "${searchInput.value}"`);

        const allBooks = subjects.flatMap(subject => 
            subject.categories.flatMap(cat => 
                cat.books.map(book => ({
                    ...book,
                    originCategory: `${subject.subjectName} - ${cat.categoryName}`,
                    theme: subject.theme,
                    subject: cat.subjectForDisplay
                }))
            )
        );

        const filteredBooks = allBooks.filter(book => 
            normalizeString(book.title).includes(normalizedSearchTerm) ||
            (book.keywords && book.keywords.some(kw => normalizeString(kw).includes(normalizedSearchTerm)))
        );
        applyTheme({primary: '#888', variant: '#666'}); 
        displayBooks(filteredBooks, { isSearch: true });
    }
}

function updateContent(subjectIndex, categoryIndex) {
    const activeSubject = subjects[subjectIndex];
    const activeCategory = activeSubject.categories[categoryIndex];
    
    updateTitle(activeCategory.categoryName);
    applyTheme(activeSubject.theme);
    displayBooks(activeCategory.books.map(b => ({ ...b, subject: activeCategory.subjectForDisplay })));
}

// --- 5. EVENT LISTENERS (Unchanged) ---
primaryTabContainer.addEventListener('click', (e) => {
    const tabButton = e.target.closest('.tab-button.primary');
    if (tabButton && !tabButton.classList.contains('active')) {
        const clickedIndex = parseInt(tabButton.dataset.index, 10);
        currentActiveSubjectIndex = clickedIndex;
        currentActiveCategoryIndex = 0;
        searchInput.value = '';
        document.querySelectorAll('.tab-button.primary').forEach(btn => btn.classList.remove('active'));
        tabButton.classList.add('active');
        createSecondaryTabs(currentActiveSubjectIndex);
        updateContent(currentActiveSubjectIndex, currentActiveCategoryIndex);
    }
});
secondaryTabContainer.addEventListener('click', (e) => {
    const tabButton = e.target.closest('.tab-button.secondary');
    if (tabButton && !tabButton.classList.contains('active')) {
        const clickedIndex = parseInt(tabButton.dataset.index, 10);
        currentActiveCategoryIndex = clickedIndex;
        searchInput.value = '';
        document.querySelectorAll('.tab-button.secondary').forEach(btn => btn.classList.remove('active'));
        tabButton.classList.add('active');
        updateContent(currentActiveSubjectIndex, currentActiveCategoryIndex);
    }
});
searchInput.addEventListener('input', () => debouncedSearch(performSearch));
pdfGrid.addEventListener('click', (e) => {
    const previewButton = e.target.closest('.preview-btn');
    const downloadLink = e.target.closest('.download-btn');
    if (previewButton) {
        openPreview(previewButton.dataset.file, previewButton.dataset.title);
    } else if (downloadLink && !downloadLink.classList.contains('is-downloading')) {
        e.preventDefault(); 
        downloadLink.classList.add('is-downloading');
        const tempLink = document.createElement('a');
        tempLink.href = downloadLink.href;
        tempLink.setAttribute('download', downloadLink.download);
        tempLink.setAttribute('target', '_blank');
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        setTimeout(() => { downloadLink.classList.remove('is-downloading'); }, 1500);
    }
});
function openPreview(fileUrl, title) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalTitle.textContent = title;
    modalDownloadLink.href = fileUrl;
    modalDownloadLink.download = `${title}.pdf`;
    pdfLoader.style.display = 'flex';
    pdfLoader.innerHTML = '<div class="loader"></div><p>Loading Preview...</p>';
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

// --- 6. INITIALIZATION (Unchanged) ---
function init() {
    createPrimaryTabs();
    createSecondaryTabs(currentActiveSubjectIndex);
    updateContent(currentActiveSubjectIndex, currentActiveCategoryIndex);
}
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(init, 250);
});