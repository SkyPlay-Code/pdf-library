// --- START OF FILE script.js ---

// --- 1. DATA STRUCTURE (Unchanged) ---
// --- 1. DATA STRUCTURE (Unchanged) ---
const subjects = [
    {
        subjectName: "Chemistry",
        // FIX: Added more specific icon.
        icon: "fa-solid fa-flask-vial",
        theme: { primary: '#F44336', variant: '#D32F2F' },
        categories: [
            {
                categoryName: "Class 11 Part 1",
                subjectForDisplay: "Chemistry Chapter",
                books: [
                    { id: 101, title: "Ch 1: Some Basic Concepts of Chemistry", fileUrl: "https://ncert.nic.in/textbook/pdf/kech101.pdf", keywords: ["concepts", "chemistry", "chapter 1"] },
                    { id: 102, title: "Ch 2: Structure of Atom", fileUrl: "https://ncert.nic.in/textbook/pdf/kech102.pdf", keywords: ["atom", "structure", "chapter 2"] },
                    { id: 103, title: "Ch 3: Classification of Elements and Periodicity", fileUrl: "https://ncert.nic.in/textbook/pdf/kech103.pdf", keywords: ["periodic table", "elements", "chapter 3"] },
                    { id: 104, title: "Ch 4: Chemical Bonding and Molecular Structure", fileUrl: "https://ncert.nic.in/textbook/pdf/kech104.pdf", keywords: ["bonding", "molecular", "chapter 4"] },
                    { id: 105, title: "Ch 5: Thermodynamics", fileUrl: "https://ncert.nic.in/textbook/pdf/kech105.pdf", keywords: ["thermodynamics", "chapter 5"] },
                    { id: 106, title: "Ch 6: Equilibrium", fileUrl: "https://ncert.nic.in/textbook/pdf/kech106.pdf", keywords: ["equilibrium", "chapter 6"] },
                    { id: 107, title: "NCERT Chemistry Class 11 Part 1", fileUrl: "https://archive.org/download/full-book-chem-part-1/full%20book%20chem%20part%201.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kech1cc.jpg", keywords: ["full book", "part 1"] },
                ]
            },
            {
                categoryName: "Class 11 Part 2",
                subjectForDisplay: "Chemistry Chapter",
                books: [
                    { id: 201, title: "Ch 7: Redox Reactions", fileUrl: "https://ncert.nic.in/textbook/pdf/kech201.pdf", keywords: ["redox", "reactions", "chapter 7"] },
                    { id: 202, title: "Ch 8: Organic Chemistry", fileUrl: "https://ncert.nic.in/textbook/pdf/kech202.pdf", keywords: ["organic", "chemistry", "chapter 8"] },
                    { id: 203, title: "Ch 9: Hydrocarbon", fileUrl: "https://ncert.nic.in/textbook/pdf/kech203.pdf", keywords: ["hydrocarbon", "chapter 9"] },
                    { id: 204, title: "NCERT Chemistry Class 11 Part 2", fileUrl: "https://archive.org/download/full-book-chem-part-2/full%20book%20chem%20part%202.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kech2cc.jpg", keywords: ["full book", "part 2"] },
                ]
            }
        ]
    },
    {
        subjectName: "Physics",
        icon: "fa-solid fa-atom",
        theme: { primary: '#2196F3', variant: '#1976D2' },
        categories: [
            {
                categoryName: "Class 11 Part 1",
                subjectForDisplay: "Physics Chapter",
                books: [
                    { id: 301, title: "Ch 1: Units and Measurements", fileUrl: "https://ncert.nic.in/textbook/pdf/keph101.pdf", keywords: ["units", "measurements", "chapter 1"] },
                    { id: 302, title: "Ch 2: Motion in a Straight Line", fileUrl: "https://ncert.nic.in/textbook/pdf/keph102.pdf", keywords: ["motion", "straight line", "chapter 2"] },
                    { id: 303, title: "Ch 3: Motion in a Plane", fileUrl: "https://ncert.nic.in/textbook/pdf/keph103.pdf", keywords: ["motion", "plane", "vectors", "chapter 3"] },
                    { id: 304, title: "Ch 4: Laws of Motion", fileUrl: "https://ncert.nic.in/textbook/pdf/keph104.pdf", keywords: ["laws of motion", "newton", "chapter 4"] },
                    { id: 305, title: "Ch 5: Work, Energy and Power", fileUrl: "https://ncert.nic.in/textbook/pdf/keph105.pdf", keywords: ["work", "energy", "power", "chapter 5"] },
                    { id: 306, title: "Ch 6: System of Particles and Rotational Motion", fileUrl: "https://ncert.nic.in/textbook/pdf/keph106.pdf", keywords: ["rotational motion", "system", "particles", "chapter 6"] },
                    { id: 307, title: "Ch 7: Gravitation", fileUrl: "https://ncert.nic.in/textbook/pdf/keph107.pdf", keywords: ["gravitation", "chapter 7"] },
                    { id: 308, title: "NCERT Physics Class 11 Part 1", fileUrl: "https://archive.org/download/full-book-phyics-part-1/full%20book%20phyics%20part%201.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/keph1cc.jpg", keywords: ["full book", "part 1"] },
                ]
            },
            {
                categoryName: "Class 11 Part 2",
                subjectForDisplay: "Physics Chapter",
                books: [
                    { id: 401, title: "Ch 8: Mechanical Properties of Solids", fileUrl: "https://ncert.nic.in/textbook/pdf/keph201.pdf", keywords: ["solids", "mechanical", "properties", "chapter 8"] },
                    { id: 402, title: "Ch 9: Mechanical Properties of Fluids", fileUrl: "https://ncert.nic.in/textbook/pdf/keph202.pdf", keywords: ["fluids", "mechanical", "properties", "chapter 9"] },
                    { id: 403, title: "Ch 10: Thermal Properties of Matter", fileUrl: "https://ncert.nic.in/textbook/pdf/keph203.pdf", keywords: ["thermal", "matter", "chapter 10"] },
                    { id: 404, title: "Ch 11: Thermodynamics", fileUrl: "https://ncert.nic.in/textbook/pdf/keph204.pdf", keywords: ["thermodynamics", "chapter 11"] },
                    { id: 405, title: "Ch 12: Kinetic Theory", fileUrl: "https://ncert.nic.in/textbook/pdf/keph205.pdf", keywords: ["kinetic theory", "gases", "chapter 12"] },
                    { id: 406, title: "Ch 13: Oscillations", fileUrl: "https://ncert.nic.in/textbook/pdf/keph206.pdf", keywords: ["oscillations", "shm", "chapter 13"] },
                    { id: 407, title: "Ch 14: Waves", fileUrl: "https://ncert.nic.in/textbook/pdf/keph207.pdf", keywords: ["waves", "chapter 14"] },
                    { id: 408, title: "NCERT Physics Class 11 Part 2", fileUrl: "https://archive.org/download/full-book-physics-part-2/full%20book%20physics%20part%202.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/keph2cc.jpg", keywords: ["full book", "part 2"] },
                ]
            }
        ]
    },
    {
        subjectName: "Mathematics",
        icon: "fa-solid fa-calculator",
        theme: { primary: '#007ad1ff', variant: '#00AEEF' },
        categories: [
            {
                categoryName: "Class 11",
                subjectForDisplay: "Maths Chapter",
                books: [
                    { id: 501, title: "Ch 1: Sets", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh101.pdf", keywords: ["sets", "chapter 1"] },
                    { id: 502, title: "Ch 2: Relations and Functions", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh102.pdf", keywords: ["relations", "functions", "chapter 2"] },
                    { id: 503, title: "Ch 3: Trigonometric Functions", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh103.pdf", keywords: ["trigonometric", "functions", "chapter 3"] },
                    { id: 504, title: "Ch 4: Complex Numbers and Quadratic Equations", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh104.pdf", keywords: ["complex numbers", "quadratic equations", "chapter 4"] },
                    { id: 505, title: "Ch 5: Linear Inequalities", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh105.pdf", keywords: ["linear inequalities", "chapter 5"] },
                    { id: 506, title: "Ch 6: Permutations and Combinations", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh106.pdf", keywords: ["permutations", "combinations", "chapter 6"] },
                    { id: 507, title: "Ch 7: Binomial Theorem", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh107.pdf", keywords: ["binomial theorem", "chapter 7"] },
                    { id: 508, title: "Ch 8: Sequences and Series", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh108.pdf", keywords: ["sequences", "series", "chapter 8"] },
                    { id: 509, title: "Ch 9: Straight Lines", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh109.pdf", keywords: ["straight lines", "chapter 9"] },
                    { id: 510, title: "Ch 10: Conic Sections", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh110.pdf", keywords: ["conic sections", "chapter 10"] },
                    { id: 511, title: "Ch 11: Introduction to Three-Dimensional Geometry", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh111.pdf", keywords: ["3d geometry", "chapter 11"] },
                    { id: 512, title: "Ch 12: Limits and Derivatives", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh112.pdf", keywords: ["limits", "derivatives", "chapter 12"] },
                    { id: 513, title: "Ch 13: Statistics", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh113.pdf", keywords: ["statistics", "chapter 13"] },
                    { id: 514, title: "Ch 14: Probability", fileUrl: "https://ncert.nic.in/textbook/pdf/kemh114.pdf", keywords: ["probability", "chapter 14"] },
                    { id: 515, title: "NCERT Mathematics Class 11 (Full Book)", fileUrl: "https://archive.org/download/kemh103/full%20book%20math.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kemh1cc.jpg", keywords: ["full book", "maths"] },
                ]
            }
        ]
    },
    // --- NEW SUBJECT ADDED HERE ---
    {
        subjectName: "English",
        icon: "fa-solid fa-book",
        theme: { primary: '#9C27B0', variant: '#7B1FA2' },
        categories: [
            {
                categoryName: "Hornbill (Main Reader)",
                subjectForDisplay: "English Chapter",
                books: [
                    { id: 701, title: "Ch 1: The Portrait of a Lady", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb101.pdf", keywords: ["hornbill", "portrait", "lady", "chapter 1"] },
                    { id: 702, title: "Ch 2: We’re Not Afraid to Die...", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb102.pdf", keywords: ["hornbill", "afraid", "die", "chapter 2"] },
                    { id: 703, title: "Ch 3: Discovering Tut: the Saga Continues", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb103.pdf", keywords: ["hornbill", "tut", "saga", "chapter 3"] },
                    // { id: 704, title: "Ch 4: Landscape of the Soul", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb104.pdf", keywords: ["hornbill", "landscape", "soul", "chapter 4"] },
                    { id: 705, title: "Ch 4: The Ailing Planet", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb105.pdf", keywords: ["hornbill", "ailing", "planet", "chapter 4"] },
                    // { id: 706, title: "Ch 6: The Browning Version", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb106.pdf", keywords: ["hornbill", "browning", "version", "chapter 6"] },
                    { id: 707, title: "Ch 5: The Adventure", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb107.pdf", keywords: ["hornbill", "adventure", "chapter 5"] },
                    { id: 708, title: "Ch 6: Silk Road", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb108.pdf", keywords: ["hornbill", "silk", "road", "chapter 6"] },
                    { id: 709, title: "NCERT Hornbill Class 11 (Full Book)", fileUrl: "https://archive.org/download/english11_202511/kehb-full.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kehb1cc.jpg", keywords: ["full book", "hornbill"] },
                ]
            },
            {
                categoryName: "Snapshots (Supplementary)",
                subjectForDisplay: "English Chapter",
                books: [
                    { id: 801, title: "Ch 1: The Summer of the Beautiful White Horse", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp101.pdf", keywords: ["snapshots", "summer", "horse", "chapter 1"] },
                    { id: 802, title: "Ch 2: The Address", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp102.pdf", keywords: ["snapshots", "address", "chapter 2"] },
                    // { id: 803, title: "Ch 3: Ranga’s Marriage", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp103.pdf", keywords: ["snapshots", "ranga", "marriage", "chapter 3"] },
                    // { id: 804, title: "Ch 4: Albert Einstein at School", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp104.pdf", keywords: ["snapshots", "einstein", "school", "chapter 4"] },
                    { id: 805, title: "Ch 3: Mother’s Day", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp105.pdf", keywords: ["snapshots", "mother", "day", "chapter 3"] },
                    // { id: 806, title: "Ch 6: The Ghat of the Only World", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp106.pdf", keywords: ["snapshots", "ghat", "world", "chapter 6"] },
                    { id: 807, title: "Ch 4: Birth", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp107.pdf", keywords: ["snapshots", "birth", "chapter 4"] },
                    { id: 808, title: "Ch 5: The Tale of Melon City", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp108.pdf", keywords: ["snapshots", "melon", "city", "chapter 5"] },
                    { id: 809, title: "NCERT Snapshots Class 11 (Full Book)", fileUrl: "https://archive.org/download/english11_202511/kesp-full.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kesp1cc.jpg", keywords: ["full book", "snapshots"] },
                ]
            }
        ]
    },
    // --- END OF NEW SUBJECT ---
    { 
        subjectName: "SSM",
        icon: "fa-solid fa-file-signature",
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
        icon: "fa-solid fa-book-open-reader",
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

// --- 2. DOM ELEMENTS (Same as before) ---
const doc = document.documentElement;
const appLayout = document.querySelector('.app-layout');
const sidebar = document.querySelector('.sidebar');
const sidebarNav = document.getElementById('sidebar-nav');
const sidebarToggle = document.getElementById('sidebar-toggle');
const contentTitle = document.getElementById('content-title');
const breadcrumbs = document.getElementById('breadcrumbs');
const gridContainer = document.getElementById('grid-container');
const searchButton = document.getElementById('search-button');
const themeColorMeta = document.getElementById('theme-color-meta');
const pdfModal = document.getElementById('pdf-modal');
const modalTitle = document.getElementById('modal-title');
const modalDownloadLink = document.getElementById('modal-download-link');
const pdfFrame = document.getElementById('pdf-frame');
const pdfLoader = document.getElementById('pdf-loader');
const commandPalette = document.getElementById('command-palette');
const commandSearchInput = document.getElementById('command-search-input');
const commandResults = document.getElementById('command-results');
const commandNoResults = document.getElementById('command-no-results');
const cursorLight = document.querySelector('.cursor-light');

// --- 3. STATE MANAGEMENT (Same as before) ---
let activeSubjectIndex = 0;
let activeCategoryIndex = 0;
let activeCommandIndex = -1;

// --- 4. THEME & UI FUNCTIONS (Same as before) ---
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

function applyTheme(theme) {
    doc.style.setProperty('--primary-color', theme.primary);
    doc.style.setProperty('--primary-variant-color', theme.variant);
    doc.style.setProperty('--primary-color-rgb', hexToRgb(theme.primary));
    themeColorMeta.setAttribute('content', theme.primary);
}

function updateBreadcrumbs(subjectName, categoryName) {
    breadcrumbs.innerHTML = `
        <li>${subjectName}</li>
        <li><i class="fas fa-chevron-right"></i></li>
        <li>${categoryName}</li>
    `;
}

// --- 5. DYNAMIC RENDERING (Small accessibility addition) ---
function createSidebar() {
    sidebarNav.innerHTML = '';
    subjects.forEach((subject, s_idx) => {
        const subjectGroup = document.createElement('div');
        subjectGroup.className = 'nav-group';
        
        const subjectBtn = document.createElement('button');
        subjectBtn.className = 'nav-item subject-item';
        subjectBtn.dataset.s_idx = s_idx;
        // FIX: Add aria-label for better accessibility when collapsed
        subjectBtn.setAttribute('aria-label', subject.subjectName);
        subjectBtn.innerHTML = `
            <i class="${subject.icon}"></i>
            <span>${subject.subjectName}</span>
            <i class="fas fa-chevron-right expand-icon"></i>`;
        
        const categoryList = document.createElement('ul');
        categoryList.className = 'category-list';
        
        subject.categories.forEach((category, c_idx) => {
            const li = document.createElement('li');
            const categoryLink = document.createElement('a');
            categoryLink.href = '#';
            categoryLink.className = 'nav-item category-item';
            categoryLink.dataset.s_idx = s_idx;
            categoryLink.dataset.c_idx = c_idx;
            categoryLink.innerHTML = `<span>${category.categoryName}</span>`;
            li.appendChild(categoryLink)
            categoryList.appendChild(li);
        });

        subjectGroup.appendChild(subjectBtn);
        subjectGroup.appendChild(categoryList);
        sidebarNav.appendChild(subjectGroup);
    });
}
// (displayBooks, showSkeletons functions remain unchanged)
function showSkeletons(count = 8) {
    gridContainer.innerHTML = Array.from({ length: count }, (_, i) => 
        `<div class="skeleton-card" style="--delay: ${i*0.06}s;"></div>`
    ).join('');
}

function displayBooks(bookList) {
    gridContainer.classList.add('fade-out');
    
    setTimeout(() => {
        if (!bookList || bookList.length === 0) {
            gridContainer.innerHTML = `<div class="no-results"><i class="fas fa-search-minus"></i>No books found.</div>`;
            gridContainer.classList.remove('fade-out');
            return;
        }

        gridContainer.innerHTML = bookList.map((book, index) => {
            let cardHeaderHTML;
            if (book.coverImage) {
                cardHeaderHTML = `<img src="${book.coverImage}" alt="${book.title} cover" class="cover-image" loading="lazy">`;
            } else {
                const titleParts = book.title.split(':');
                const mainText = titleParts[0].trim();
                const subText = book.shortName || (titleParts.length > 1 ? titleParts[1].trim() : book.subject);
                cardHeaderHTML = `
                    <div class="card-header-no-image">
                        <span class="subject-tag">${subText}</span>
                        <div class="main-title">${mainText}</div>
                    </div>`;
            }

            const buttonsHTML = book.previewDisabled
                ? `<a href="${book.fileUrl}" download="${book.title}.pdf" class="card-button download-only"><i class="fas fa-download"></i>Download Now</a>`
                : `<button class="card-button preview" data-file="${book.fileUrl}" data-title="${book.title}"><i class="fas fa-eye"></i>View</button>
                   <a href="${book.fileUrl}" download="${book.title}.pdf" class="card-button download" aria-label="Download"><i class="fas fa-download"></i></a>`;

            return `
                <div class="pdf-card" style="--delay: ${index * 0.06}s;">
                    <div class="card-border"></div>
                    ${cardHeaderHTML}
                    <div class="card-content">
                        <h3>${book.title}</h3>
                        <div class="card-buttons">
                            ${buttonsHTML}
                        </div>
                    </div>
                </div>`;
        }).join('');
        
        gridContainer.classList.remove('fade-out');
    }, 200);
}


// --- 6. CORE LOGIC (Unchanged) ---
// (The logic here is sound, the responsive changes are handled by CSS and the new interaction logic below)
function loadCategoryContent(s_idx, c_idx, isInitial = false) {
    if (!subjects[s_idx] || !subjects[s_idx].categories[c_idx]) return;
    activeSubjectIndex = s_idx;
    activeCategoryIndex = c_idx;
    const subject = subjects[s_idx];
    const category = subject.categories[c_idx];
    const booksWithSubject = category.books.map(b => ({ ...b, subject: category.subjectForDisplay }));
    contentTitle.textContent = category.categoryName;
    updateBreadcrumbs(subject.subjectName, category.categoryName);
    applyTheme(subject.theme);
    showSkeletons();
    setTimeout(() => {
        displayBooks(booksWithSubject);
        setActiveNavItem(s_idx, c_idx);
    }, isInitial ? 300 : 100);
}
function setActiveNavItem(s_idx, c_idx) {
    document.querySelectorAll('.nav-group').forEach((group, group_s_idx) => {
        const isActiveGroup = group_s_idx === s_idx;
        group.classList.toggle('active', isActiveGroup);
        const list = group.querySelector('.category-list');
        if (list) {
            list.style.maxHeight = isActiveGroup ? list.scrollHeight + "px" : null;
        }
    });
    document.querySelectorAll('.category-item').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.subject-item').forEach(btn => btn.classList.remove('active'));
    const activeLink = document.querySelector(`.category-item[data-s_idx="${s_idx}"][data-c_idx="${c_idx}"]`);
    if(activeLink) activeLink.classList.add('active');
    const activeSubjectBtn = document.querySelector(`.subject-item[data-s_idx="${s_idx}"]`);
    if (activeSubjectBtn) activeSubjectBtn.classList.add('active');
}
// --- 7. MODAL LOGIC (Unchanged) ---
function openPreview(fileUrl, title) { pdfModal.classList.add('visible'); modalTitle.textContent = title; modalDownloadLink.href = fileUrl; modalDownloadLink.download = `${title}.pdf`; pdfLoader.style.display = 'flex'; pdfFrame.style.opacity = '0'; pdfFrame.src = fileUrl; }
function closePreview() { pdfModal.classList.remove('visible'); pdfFrame.src = 'about:blank'; }
pdfFrame.addEventListener('load', () => { pdfLoader.style.display = 'none'; pdfFrame.style.opacity = '1'; });
function setupModalClosers(modal, closeBtnSelector) { const closeBtn = modal.querySelector(closeBtnSelector); if(closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('visible')); modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('visible'); }); }

// --- 8. COMMAND PALETTE LOGIC (Unchanged) ---
// (The previous fixes for this are still valid)
let allBooksCache = []; function openCommandPalette() { if (allBooksCache.length === 0) { allBooksCache = subjects.flatMap((subject, s_idx) =>  subject.categories.flatMap((cat, c_idx) =>  cat.books.map(book => ({ ...book,  subjectName: subject.subjectName, categoryName: cat.categoryName, s_idx, c_idx })) ) ); } commandResults.innerHTML = ''; commandNoResults.style.display = 'none'; commandSearchInput.value = ''; activeCommandIndex = -1; commandPalette.classList.add('visible'); setTimeout(() => commandSearchInput.focus(), 100); }
function performCommandSearch() { const term = commandSearchInput.value.toLowerCase().trim(); activeCommandIndex = -1; if (!term) { commandResults.innerHTML = ''; commandNoResults.style.display = 'none'; return; } const filtered = allBooksCache.filter(book => book.title.toLowerCase().includes(term) || (book.keywords && book.keywords.some(kw => kw.toLowerCase().includes(term))) ); if (filtered.length === 0) { commandResults.innerHTML = ''; commandNoResults.style.display = 'block'; } else { commandNoResults.style.display = 'none'; commandResults.innerHTML = filtered.map(book => ` <li class="command-result-item" role="option"> <button class="command-result-button" data-file="${book.fileUrl}" data-title="${book.title}" data-preview-disabled="${book.previewDisabled || false}"> <div class="result-icon"><i class="fa-solid fa-file-pdf"></i></div> <div class="result-text"> <span class="result-title">${book.title}</span> <span class="result-path">${book.subjectName} / ${book.categoryName}</span> </div> <div class="result-action"><i class="fas fa-arrow-right"></i></div> </button> </li> `).join(''); } }
function selectCommandItem(item) { if(!item) return; commandPalette.classList.remove('visible'); const { file, title, previewDisabled } = item.dataset; if (previewDisabled === "true") { const link = document.createElement('a'); link.href = file; link.download = `${title}.pdf`; document.body.appendChild(link); link.click(); document.body.removeChild(link); } else { openPreview(file, title); } }
function updateActiveCommandItem() { const items = commandResults.querySelectorAll('.command-result-item'); items.forEach((item, index) => { if (index === activeCommandIndex) { item.classList.add('active'); item.scrollIntoView({ block: 'nearest' }); } else { item.classList.remove('active'); } }); }


// --- 9. EVENT LISTENERS (Updated Sidebar Logic) ---
sidebarNav.addEventListener('click', (e) => {
    const subjectBtn = e.target.closest('.subject-item');
    const categoryLink = e.target.closest('.category-item');
    
    if (subjectBtn) {
        const s_idx = parseInt(subjectBtn.dataset.s_idx, 10);

        // FIX: New behavior - if sidebar is collapsed, expand it and do nothing else.
        if (appLayout.classList.contains('sidebar-collapsed')) {
            appLayout.classList.remove('sidebar-collapsed');
            return; // Stop processing this click further.
        }

        // Case 1: Clicked on a NEW subject. Load its first category.
        // This logic also correctly handles the mobile bottom-bar case.
        if (s_idx !== activeSubjectIndex) {
            loadCategoryContent(s_idx, 0);
        } 
        // Case 2: Clicked on the CURRENTLY active subject on desktop. Just toggle its dropdown.
        else {
            const group = subjectBtn.parentElement;
            group.classList.toggle('active');
            const list = group.querySelector('.category-list');
            if (list) {
                list.style.maxHeight = list.style.maxHeight ? null : list.scrollHeight + "px";
            }
        }
    }
    
    if (categoryLink) {
        e.preventDefault();
        const s_idx = parseInt(categoryLink.dataset.s_idx, 10);
        const c_idx = parseInt(categoryLink.dataset.c_idx, 10);
        if (s_idx !== activeSubjectIndex || c_idx !== activeCategoryIndex) {
            loadCategoryContent(s_idx, c_idx);
        }
    }
});
// (Other event listeners remain unchanged)
gridContainer.addEventListener('click', (e) => { const previewBtn = e.target.closest('.preview'); if (previewBtn) { openPreview(previewBtn.dataset.file, previewBtn.dataset.title); } });
searchButton.addEventListener('click', openCommandPalette);
commandSearchInput.addEventListener('input', () => { setTimeout(performCommandSearch, 100); });
commandResults.addEventListener('click', (e) => { const resultButton = e.target.closest('.command-result-button'); if(resultButton) { selectCommandItem(resultButton); } });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (pdfModal.classList.contains('visible')) closePreview(); if (commandPalette.classList.contains('visible')) commandPalette.classList.remove('visible'); } if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openCommandPalette(); } if (commandPalette.classList.contains('visible')) { const items = commandResults.querySelectorAll('.command-result-item'); if (items.length === 0) return; if (e.key === 'ArrowDown') { e.preventDefault(); activeCommandIndex = (activeCommandIndex + 1) % items.length; updateActiveCommandItem(); } else if (e.key === 'ArrowUp') { e.preventDefault(); activeCommandIndex = (activeCommandIndex - 1 + items.length) % items.length; updateActiveCommandItem(); } else if (e.key === 'Enter') { e.preventDefault(); if (activeCommandIndex > -1) { const activeItemButton = items[activeCommandIndex].querySelector('.command-result-button'); selectCommandItem(activeItemButton); } } } });
sidebarToggle.addEventListener('click', () => { appLayout.classList.toggle('sidebar-collapsed'); });
window.addEventListener('mousemove', e => { cursorLight.style.setProperty('--x', e.clientX + 'px'); cursorLight.style.setProperty('--y', e.clientY + 'px'); });

// --- 10. INITIALIZATION (Unchanged) ---
function init() { createSidebar(); loadCategoryContent(activeSubjectIndex, activeCategoryIndex, true); setupModalClosers(pdfModal, '.close-button'); setupModalClosers(commandPalette); }
window.addEventListener('DOMContentLoaded', init);