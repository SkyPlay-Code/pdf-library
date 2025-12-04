document.addEventListener('DOMContentLoaded', () => {
    // --- STATE & DOM ELEMENTS ---
    let activeSubject = 'all'; // 'all' or SubjectName
    let allBooksFlat = []; // Still need this for efficient search
    
    const container = document.getElementById('contentContainer');
    const searchInput = document.getElementById('searchInput');
    const navContainer = document.getElementById('subjectNav');
    const btnAll = document.getElementById('btnAllMaterials');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    
    // Theme Manager
    const rootStyle = document.documentElement.style;

    // --- INITIALIZATION ---
    function init() {
        // 1. Prepare search data
        flattenDataForSearch();
        
        // 2. Render Sidebar
        renderSidebar();
        
        // 3. Render Initial View (All Subjects Hierarchy)
        renderHierarchyView('all');
        
        // 4. Events
        setupEvents();
    }

    // --- HELPERS ---

    // Creates the flat list for the search bar logic only
    function flattenDataForSearch() {
        if(typeof subjects === 'undefined') return;
        allBooksFlat = [];
        subjects.forEach(sub => {
            sub.categories.forEach(cat => {
                cat.books.forEach(book => {
                    allBooksFlat.push({
                        ...book,
                        subjectName: sub.subjectName,
                        categoryName: cat.categoryName,
                        theme: sub.theme,
                        icon: sub.icon
                    });
                });
            });
        });
    }

    // --- RENDERING ---

    function renderSidebar() {
        navContainer.innerHTML = '';
        subjects.forEach(sub => {
            const btn = document.createElement('button');
            btn.className = 'nav-item';
            btn.innerHTML = `<i class="${sub.icon}"></i> ${sub.subjectName}`;
            btn.addEventListener('click', () => {
                activeSubject = sub.subjectName;
                searchInput.value = ''; // Clear search on nav change
                clearSearchBtn.style.display = 'none';
                updateNavUI();
                renderHierarchyView(sub.subjectName);
            });
            navContainer.appendChild(btn);
        });

        // Setup the "Dashboard/All" button logic
        btnAll.addEventListener('click', () => {
            activeSubject = 'all';
            searchInput.value = '';
            clearSearchBtn.style.display = 'none';
            updateNavUI();
            renderHierarchyView('all');
        });
    }

    function updateNavUI() {
        // Handle Sidebar Highlights
        const items = document.querySelectorAll('.nav-item');
        items.forEach(item => item.classList.remove('active'));

        if(activeSubject === 'all') {
            btnAll.classList.add('active');
            rootStyle.setProperty('--primary-color', '#1877f2'); // Default Blue
        } else {
            // Find the specific button we clicked (using text content is easiest here)
            // or we could loop subjects. simplified logic:
            const matchedSub = subjects.find(s => s.subjectName === activeSubject);
            if(matchedSub) {
                // Find sidebar button containing text
                Array.from(navContainer.children).forEach(btn => {
                    if(btn.innerText.includes(activeSubject)) btn.classList.add('active');
                });
                rootStyle.setProperty('--primary-color', matchedSub.theme.primary);
            }
        }
    }

    /**
     * CORE FUNCTION: Renders hierarchical structured content
     * @param {string} filterSubject - 'all' or specific subject name
     */
    function renderHierarchyView(filterSubject) {
        container.innerHTML = ''; // Clear main content

        // Decide which subjects to process
        const subjectsToRender = (filterSubject === 'all') 
            ? subjects 
            : subjects.filter(s => s.subjectName === filterSubject);

        if(subjectsToRender.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding:40px; color:#666">No subjects found.</div>';
            return;
        }

        // 1. Loop Subjects
        subjectsToRender.forEach(sub => {
            const subjectWrapper = document.createElement('div');
            subjectWrapper.className = 'subject-group';
            
            // Only show big subject title if we are in "All" view (to separate them)
            // or always show it for clarity.
            subjectWrapper.innerHTML = `
                <div class="subject-title" style="color: ${sub.theme.primary}">
                    <i class="${sub.icon}"></i> ${sub.subjectName}
                </div>
            `;

            // 2. Loop Categories (Parts/Classes)
            sub.categories.forEach(cat => {
                const catBlock = document.createElement('div');
                catBlock.className = 'category-block';
                // Color code the border
                catBlock.style.borderLeftColor = sub.theme.primary; 

                // Category Header
                const catHeader = document.createElement('div');
                catHeader.className = 'category-header';
                catHeader.innerHTML = `
                    <div class="category-title">${cat.categoryName}</div>
                    <div class="book-count">${cat.books.length} items</div>
                `;
                catBlock.appendChild(catHeader);

                // Grid Container
                const grid = document.createElement('div');
                grid.className = 'books-grid';

                // 3. Loop Books
                cat.books.forEach(book => {
                    grid.appendChild(createBookCard(book, sub));
                });

                catBlock.appendChild(grid);
                subjectWrapper.appendChild(catBlock);
            });

            container.appendChild(subjectWrapper);
        });
    }

    /**
     * Renders a flat grid (used ONLY for Search results)
     */
    function renderSearchResults(query) {
        container.innerHTML = '';
        
        const lowerQ = query.toLowerCase();
        // Search Logic
        const results = allBooksFlat.filter(b => {
            // Apply Subject Filter even during search? 
            // Usually simpler to search everything or search within active subject.
            // Let's search EVERYTHING unless user really wants restriction.
            // For now: Global Search
            const textMatch = 
                b.title.toLowerCase().includes(lowerQ) ||
                b.id.toString().includes(lowerQ) ||
                (b.keywords && b.keywords.some(k => k.toLowerCase().includes(lowerQ)));
            
            return textMatch;
        });

        if (results.length === 0) {
            container.innerHTML = `<div style="text-align:center; color:#888; margin-top:50px;">No results found for "${query}"</div>`;
            return;
        }

        const resultsWrapper = document.createElement('div');
        resultsWrapper.innerHTML = `<h3 style="margin-bottom:20px; color:#555">Search Results: ${results.length} found</h3>`;
        
        const grid = document.createElement('div');
        grid.className = 'books-grid';
        
        results.forEach(book => {
            // We need to reconstruct 'sub' object slightly for the theme to work in card creator
            const mockSub = { 
                theme: book.theme || {primary: '#333'}, 
                icon: book.icon 
            };
            grid.appendChild(createBookCard(book, mockSub));
        });

        resultsWrapper.appendChild(grid);
        container.appendChild(resultsWrapper);
    }

    // Creates the HTML Element for a single book
    function createBookCard(book, subThemeContext) {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.style.setProperty('--primary-color', subThemeContext.theme.primary);

        // Thumbnail logic
        let visual = '';
        if(book.coverImage) {
            visual = `<img src="${book.coverImage}" class="book-cover-img" loading="lazy" alt="Cover">`;
        } else {
            visual = `<div class="icon-area"><i class="${subThemeContext.icon}"></i></div>`;
        }

        // Preview Check
        let previewBtn = '';
        if (!book.previewDisabled) {
            previewBtn = `<button class="btn btn-outline" onclick="openPreview(${book.id})">Preview</button>`;
        }

        card.innerHTML = `
            <div class="book-id">#${book.id}</div>
            ${visual}
            <div class="book-info">
                <div class="book-title" title="${book.title}">${book.title}</div>
            </div>
            <div class="action-row">
                ${previewBtn}
                <a href="${book.fileUrl}" target="_blank" class="btn btn-primary">Download</a>
            </div>
        `;
        return card;
    }

    // --- EVENTS & SEARCH LOGIC ---

    function setupEvents() {
        // Search debounce
        let timer;
        searchInput.addEventListener('keyup', (e) => {
            clearTimeout(timer);
            const val = e.target.value.trim();
            
            if(val.length > 0) {
                clearSearchBtn.style.display = 'block';
                timer = setTimeout(() => renderSearchResults(val), 300);
            } else {
                clearSearchBtn.style.display = 'none';
                renderHierarchyView(activeSubject); // Revert to structured view
            }
        });

        // Clear button
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearSearchBtn.style.display = 'none';
            renderHierarchyView(activeSubject);
        });

        // Global Modal Logic
        setupModal();
    }

    function setupModal() {
        const modal = document.getElementById('pdfModal');
        const closeModal = document.querySelector('.close-modal');
        const pdfViewer = document.getElementById('pdfViewer');
        const dwnBtn = document.getElementById('modalDownloadBtn');
        const title = document.getElementById('modalTitle');

        // Global function for onclick in HTML
        window.openPreview = (id) => {
            const book = allBooksFlat.find(b => b.id === id);
            if(!book) return;

            // Drive Link Conversion logic
            let url = book.fileUrl;
            if(url.includes('drive.google.com')) {
                const idMatch = url.match(/\/d\/(.*?)\/|\?id=(.*?)(?:&|$)/);
                if(idMatch) {
                    const driveId = idMatch[1] || idMatch[2];
                    url = `https://drive.google.com/file/d/${driveId}/preview`;
                } else if(url.includes('id=')) {
                    // Fallback for simple id params
                    const driveId = url.split('id=')[1].split('&')[0];
                    url = `https://drive.google.com/file/d/${driveId}/preview`;
                }
            }

            title.innerText = book.title;
            dwnBtn.href = book.fileUrl;
            pdfViewer.src = url;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };

        const close = () => {
            modal.style.display = 'none';
            pdfViewer.src = '';
            document.body.style.overflow = '';
        };

        closeModal.addEventListener('click', close);
        window.addEventListener('click', (e) => {
            if(e.target === modal) close();
        });
    }

    // Run
    init();
});