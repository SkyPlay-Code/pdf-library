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
                    { id: 705, title: "Ch 4: The Ailing Planet", fileUrl: "https://ncert.nic.in/textbook/pdf/kehb105.pdf", keywords: ["hornbill", "ailing", "planet", "chapter 4"] },
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
                    { id: 805, title: "Ch 3: Mother’s Day", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp105.pdf", keywords: ["snapshots", "mother", "day", "chapter 3"] },
                    { id: 807, title: "Ch 4: Birth", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp107.pdf", keywords: ["snapshots", "birth", "chapter 4"] },
                    { id: 808, title: "Ch 5: The Tale of Melon City", fileUrl: "https://ncert.nic.in/textbook/pdf/kesp108.pdf", keywords: ["snapshots", "melon", "city", "chapter 5"] },
                    { id: 809, title: "NCERT Snapshots Class 11 (Full Book)", fileUrl: "https://archive.org/download/english11_202511/kesp-full.pdf", coverImage: "https://ncert.nic.in/textbook/pdf/kesp1cc.jpg", keywords: ["full book", "snapshots"] },
                ]
            }
        ]
    },
    // --- NEW IIT-JEE SECTION ---
    {
        subjectName: "IIT-JEE Preparation",
        icon: "fa-solid fa-rocket",
        theme: { primary: '#FF9800', variant: '#F57C00' },
        categories: [
            {
                categoryName: "Physics",
                subjectForDisplay: "IIT-JEE Physics",
                books: [
                    { id: 1001, title: "Gravitation Base", fileUrl: "https://drive.google.com/file/d/1-msYBHOl-V7_Z4zCewzJ9-SJ9q2s_HHL/view?usp=sharing", keywords: ["iit","adv","physics","gravitation","base"] },
                    { id: 1002, title: "Kinetic Theory Refresher", fileUrl: "https://drive.google.com/file/d/11v02nSAniE_1T_wQLpJtlfn-YFuUPkkq/view?usp=sharing", keywords: ["pmt","physics","kinetic","theory","refresher"] },
                    { id: 1003, title: "Newton Laws Of Motion Exam", fileUrl: "https://drive.google.com/file/d/11vJI7_kIGC24fKOsD6tQll9Wq_xLvSmU/view?usp=sharing", keywords: ["pmt","physics","newton","laws","of","motion","exam"] },
                    { id: 1004, title: "Work Power Energy Refresher", fileUrl: "https://drive.google.com/file/d/11zEN26RDRhNwBfp0sSJddAQSrV-K9YpC/view?usp=sharing", keywords: ["pmt","physics","work","power","energy","refresher"] },
                    { id: 1005, title: "Motion In One Dimension Base", fileUrl: "https://drive.google.com/file/d/12jEd2zqgd_-Hy0x-xZD53Hyw5OKNHAiG/view?usp=sharing", keywords: ["iit","adv","physics","motion","in","one","dimension","base"] },
                    { id: 1006, title: "Rotational Motion Exam", fileUrl: "https://drive.google.com/file/d/13ZX5fWi7RSnhTpv6O6t_NnQ7iwAZs23u/view?usp=sharing", keywords: ["pmt","physics","rotational","motion","exam"] },
                    { id: 1007, title: "Motion In One Dimension Exam", fileUrl: "https://drive.google.com/file/d/13_UczOeFij1vbuzB_XlrmD0lHGNqIfpI/view?usp=sharing", keywords: ["pmt","physics","motion","in","one","dimension","exam"] },
                    { id: 1008, title: "Physics And Measurement Base", fileUrl: "https://drive.google.com/file/d/13_sfz0THSg0yEoMhcshJkeUgpM8a8gtO/view?usp=sharing", keywords: ["iit","adv","physics","physics","and","measurement","base"] },
                    { id: 1009, title: "Rotational Motion Refresher", fileUrl: "https://drive.google.com/file/d/13hEfnwsELrZXHDJZuiLTU7sLuHc1wpzB/view?usp=sharing", keywords: ["pmt","physics","rotational","motion","refresher"] },
                    { id: 1010, title: "Electric Current Refresher", fileUrl: "https://drive.google.com/file/d/146Th8W6WOVJb3I4wsfd-BJI95G0GpTOu/view?usp=sharing", keywords: ["pmt","physics","electric","current","refresher"] },
                    { id: 1011, title: "Electromagnetic Induction And AC Base", fileUrl: "https://drive.google.com/file/d/14SgVnhOiXl4kUyNXd_juYgNvHNHnw_vv/view?usp=sharing", keywords: ["iit","adv","physics","electromagnetic","induction","and","ac","base"] },
                    { id: 1012, title: "Ray Optics Pyp Exam", fileUrl: "https://drive.google.com/file/d/15BDkCzASrRQYFz05pHrzPaUpU046o8RY/view?usp=sharing", keywords: ["pmt","physics","ray","optics","pyp","exam"] },
                    { id: 1013, title: "Force And Laws Of Motion Base", fileUrl: "https://drive.google.com/file/d/15N_kGBMMRzF1oKUMlARWh1Nprkrwa4hF/view?usp=sharing", keywords: ["iit","adv","physics","force","and","laws","of","motion","base"] },
                    { id: 1014, title: "Newton Laws Of Motion Refresher", fileUrl: "https://drive.google.com/file/d/16NmkshU7lP3cle8plCneROEKdw5Ec6dJ/view?usp=sharing", keywords: ["pmt","physics","newton","laws","of","motion","refresher"] },
                    { id: 1015, title: "Thermal Expamsion And Thermodynamics Exam", fileUrl: "https://drive.google.com/file/d/17zOlzAz41z4Y99cnvsN91vNnRf2aog0o/view?usp=sharing", keywords: ["pmt","physics","thermal","expamsion","and","thermodynamics","exam"] },
                    { id: 1016, title: "Atom Nuclei Exam", fileUrl: "https://drive.google.com/file/d/188sRNmeb11ZUd7HEHQ7KXjEy9t3eVzRY/view?usp=sharing", keywords: ["pmt","physics","atom","nuclei","exam"] },
                    { id: 1017, title: "Ray Optics Refresher", fileUrl: "https://drive.google.com/file/d/18ewl_Utz95I5Hm-6rnZCXNvtXiuDgSPz/view?usp=sharing", keywords: ["pmt","physics","ray","optics","refresher"] },
                    { id: 1018, title: "Electronocs Semiconductor Exam", fileUrl: "https://drive.google.com/file/d/198l9JSO3cGDzXCwRnBH3epGsP9LOSBit/view?usp=sharing", keywords: ["pmt","physics","electronocs","semiconductor","exam"] },
                    { id: 1019, title: "Hydrostatics Base", fileUrl: "https://drive.google.com/file/d/19F1Qi5ERNBYd6YHUtPSafFW8kwGU1w5j/view?usp=sharing", keywords: ["iit","adv","physics","hydrostatics","base"] },
                    { id: 1020, title: "Capacitance And Capacitors Base", fileUrl: "https://drive.google.com/file/d/1A_QPpdwjSoX3HwoSXg9UqTffX1oSPSlY/view?usp=sharing", keywords: ["iit","adv","physics","capacitance","and","capacitors","base"] },
                    { id: 1021, title: "Mechanical Properties Of Fluids Refresher", fileUrl: "https://drive.google.com/file/d/1CED3Qr2XhoPm6M1N0QX0Sajt5yuaV3hf/view?usp=sharing", keywords: ["pmt","physics","mechanical","properties","of","fluids","refresher"] },
                    { id: 1022, title: "Mechanical Properties Of Fluids Exam", fileUrl: "https://drive.google.com/file/d/1DvXqa9KDucrxsk3YshVPLxeYNDs8f39s/view?usp=sharing", keywords: ["pmt","physics","mechanical","properties","of","fluids","exam"] },
                    { id: 1023, title: "Conservation Of Momentum Collision Base", fileUrl: "https://drive.google.com/file/d/1GM2Mpli-T68IJjCMUoTr6RIvzewKxQDa/view?usp=sharing", keywords: ["iit","adv","physics","conservation","of","momentum","collision","base"] },
                    { id: 1024, title: "Emi Refresher", fileUrl: "https://drive.google.com/file/d/1GRcjB2giiToXUyNxUjCr6eJ8azyq26Ho/view?usp=sharing", keywords: ["pmt","physics","emi","refresher"] },
                    { id: 1025, title: "Transmission Of Heat Base", fileUrl: "https://drive.google.com/file/d/1GX-WJoYZj8zCzzla3JvmJ414ui06GK0n/view?usp=sharing", keywords: ["iit","adv","physics","transmission","of","heat","base"] },
                    { id: 1026, title: "Wave Optics Refresher", fileUrl: "https://drive.google.com/file/d/1GiNkRPZwSyXY_anxEeZ-FVe0T_j5bcZ9/view?usp=sharing", keywords: ["pmt","physics","wave","optics","refresher"] },
                    { id: 1027, title: "Motion In Two Dimension Refresher", fileUrl: "https://drive.google.com/file/d/1H2rMTAfX7mX5bgHGhcxpop7_14jO2M_5/view?usp=sharing", keywords: ["pmt","physics","motion","in","two","dimension","refresher"] },
                    { id: 1028, title: "Gravitation Refresher", fileUrl: "https://drive.google.com/file/d/1HY39wrLFUJfj6JTtS4h1KpTjhviPKkj_/view?usp=sharing", keywords: ["pmt","physics","gravitation","refresher"] },
                    { id: 1029, title: "Physical World And Measurement Refresher", fileUrl: "https://drive.google.com/file/d/1IiCDCEtRCGaxpRcbhvB5_dZQRNVs4bcS/view?usp=sharing", keywords: ["neet","physics","physical","world","and","measurement","refresher"] },
                    { id: 1030, title: "Emi Ac Exam", fileUrl: "https://drive.google.com/file/d/1JhKIMZmWCO-SaFP9HtCVXZPI0LsffPdy/view?usp=sharing", keywords: ["pmt","physics","emi","ac","exam"] },
                    { id: 1031, title: "Kinetic Theory Exam", fileUrl: "https://drive.google.com/file/d/1JpVTmGQUMZl1qnTcZHAJCcqcjY682nsE/view?usp=sharing", keywords: ["pmt","physics","kinetic","theory","exam"] },
                    { id: 1032, title: "Atom Refresher", fileUrl: "https://drive.google.com/file/d/1LqyZuoF-KnAgGzB30IhCAJhNDFUVo0Qi/view?usp=sharing", keywords: ["pmt","physics","atom","refresher"] },
                    { id: 1033, title: "Work Power Energy Exam", fileUrl: "https://drive.google.com/file/d/1MbSh1bTMxKkXg86YZKyOWxo44M6FcOr_/view?usp=sharing", keywords: ["pmt","physics","work","power","energy","exam"] },
                    { id: 1034, title: "Laws Of Motion Brainmap", fileUrl: "https://drive.google.com/file/d/1PBJa7gcThCL6L92J8kMQ_B4N8GqXTRfb/view?usp=sharing", keywords: ["pmt","physics","laws","of","motion","brainmap"] },
                    { id: 1035, title: "Wave Optics Exam", fileUrl: "https://drive.google.com/file/d/1Pe-VE2de_wnZCQy-zLgPQsw3TfKaJbNN/view?usp=sharing", keywords: ["pmt","physics","wave","optics","exam"] },
                    { id: 1036, title: "Dual Nature Of Radiation Refresher", fileUrl: "https://drive.google.com/file/d/1T0QYDUWtaxiWNNrSNx6gs2CqyJb53ZG_/view?usp=sharing", keywords: ["pmt","physics","dual","nature","of","radiation","refresher"] },
                    { id: 1037, title: "Electric Current Brainmap", fileUrl: "https://drive.google.com/file/d/1Voms5qCC3qqR6kcvCfNWNHHLD5ZsQpdQ/view?usp=sharing", keywords: ["pmt","physics","electric","current","brainmap"] },
                    { id: 1038, title: "Moving Charge And Magnetism Exam", fileUrl: "https://drive.google.com/file/d/1YoUFAsD46btEci7FVr9XUa3U-busePIb/view?usp=sharing", keywords: ["pmt","physics","moving","charge","and","magnetism","exam"] },
                    { id: 1039, title: "Electric Current Exam", fileUrl: "https://drive.google.com/file/d/1YvgY61Z6D5q1BU2P6yr1eplkGtKePcQ2/view?usp=sharing", keywords: ["pmt","physics","electric","current","exam"] },
                    { id: 1040, title: "Hydrodynamics Base", fileUrl: "https://drive.google.com/file/d/1Zh6mFnUOkYySLOUF7WqKVPgwRb1EO696/view?usp=sharing", keywords: ["iit","adv","physics","hydrodynamics","base"] },
                    { id: 1041, title: "Gravitation Revision Notes 2", fileUrl: "https://drive.google.com/file/d/1_WR1NDtMBR8yJVUjBr6uhVIE-KWsQ-SI/view?usp=sharing", keywords: ["iit","mains","physics","gravitation","revision","notes2"] },
                    { id: 1042, title: "Motion In Two Dimension Base", fileUrl: "https://drive.google.com/file/d/1aWOUzdq33pw6yOapIQth1fSGL3G7BXNW/view?usp=sharing", keywords: ["iit","adv","physics","motion","in","two","dimension","base"] },
                    { id: 1043, title: "Motion In One Dimension Mindmap", fileUrl: "https://drive.google.com/file/d/1bNpInuUF19OxRiXEB0Payiln7mYb9cYs/view?usp=sharing", keywords: ["pmt","physics","motion","in","one","dimension","mindmap"] },
                    { id: 1044, title: "Measurement Of Heat Base", fileUrl: "https://drive.google.com/file/d/1bpT7jU_cnbdAeyN_mol6rZ0T-N8VZDTo/view?usp=sharing", keywords: ["iit","adv","physics","measurement","of","heat","base"] },
                    { id: 1045, title: "Electric Charge And Fields Refresher", fileUrl: "https://drive.google.com/file/d/1d8VtSNlWma4ziwi-HGYFhXaBIty5sVJq/view?usp=sharing", keywords: ["pmt","physics","electric","charge","and","fields","refresher"] },
                    { id: 1046, title: "Ray Optics And Optical Base", fileUrl: "https://drive.google.com/file/d/1dSCHk9gEpiy0jyv0K21G8iF8E0ttKEqH/view?usp=sharing", keywords: ["iit","adv","physics","ray","optics","and","optical","base"] },
                    { id: 1047, title: "Ac Refresher", fileUrl: "https://drive.google.com/file/d/1deFnwh2Q6Kj8ec7O8eC34-uy58iNRAJE/view?usp=sharing", keywords: ["pmt","physics","ac","refresher"] },
                    { id: 1048, title: "Dual Nature Of Radiation Exam", fileUrl: "https://drive.google.com/file/d/1fUhq6MWUzY4QYT-fqqYc2cGhvJVz6VcN/view?usp=sharing", keywords: ["pmt","physics","dual","nature","of","radiation","exam"] },
                    { id: 1049, title: "Physical World And Measurement Exam", fileUrl: "https://drive.google.com/file/d/1fxQhPct-wKPdXd4N959Hp3e7D4BaSImb/view?usp=sharing", keywords: ["neet","physics","physical","world","and","measurement","exam"] },
                    { id: 1050, title: "Wave Exam", fileUrl: "https://drive.google.com/file/d/1g7YlS5oJvI6Feavu8vgxeUM-lYPqO5Sy/view?usp=sharing", keywords: ["pmt","physics","wave","exam"] },
                    { id: 1051, title: "Magnetic Effect Of Current Base", fileUrl: "https://drive.google.com/file/d/1gO3hbgw2Ao68w4z54I-47B02N6Ovyy6q/view?usp=sharing", keywords: ["iit","adv","physics","magnetic","effect","of","current","base"] },
                    { id: 1052, title: "Kinetic Theory Of Gases Base", fileUrl: "https://drive.google.com/file/d/1hvBaWR_43fCT0R8v6aCRlI-d8P2lBl50/view?usp=sharing", keywords: ["iit","adv","physics","kinetic","theory","of","gases","base"] },
                    { id: 1053, title: "Nuclei Refresher", fileUrl: "https://drive.google.com/file/d/1jInjFD5qbMJTYaEipzDGhEvyLHIn_YfA/view?usp=sharing", keywords: ["pmt","physics","nuclei","refresher"] },
                    { id: 1054, title: "Oscillation Refresher", fileUrl: "https://drive.google.com/file/d/1k3lNVQDlqWALQwOSdvrM8QbddgxcjDNk/view?usp=sharing", keywords: ["pmt","physics","oscillation","refresher"] },
                    { id: 1055, title: "Work And Energy Base", fileUrl: "https://drive.google.com/file/d/1kpuqPM43TtNPBqPsI4KBItIzTLIoKmcJ/view?usp=sharing", keywords: ["iit","adv","physics","work","and","energy","base"] },
                    { id: 1056, title: "Moving Charge And Magnetism Refresher", fileUrl: "https://drive.google.com/file/d/1l3L1YL8_rsRbYURUvrOzVDXL4ECeUzII/view?usp=sharing", keywords: ["pmt","physics","moving","charge","and","magnetism","refresher"] },
                    { id: 1057, title: "Isothermal And Adiabatic Base", fileUrl: "https://drive.google.com/file/d/1l7poK4oNZnWghGCiu7l9I0dYG76N1jyE/view?usp=sharing", keywords: ["iit","adv","physics","isothermal","and","adiabatic","base"] },
                    { id: 1058, title: "Wave Optics Base", fileUrl: "https://drive.google.com/file/d/1lVcw_hPG3S7MMIiRJ5HZMb2sUuAWDidS/view?usp=sharing", keywords: ["iit","adv","physics","wave","optics","base"] },
                    { id: 1059, title: "Thermodynamics Base", fileUrl: "https://drive.google.com/file/d/1liFDvoXZQT9k4JlZ_BGY3xF20Kv25jAi/view?usp=sharing", keywords: ["iit","adv","physics","thermodynamics","base"] },
                    { id: 1060, title: "Electricstatic Potential And Capacitors Refresher", fileUrl: "https://drive.google.com/file/d/1lxZbuB96zXH8Qe8YS0Cd0YJouCr7Fu97/view?usp=sharing", keywords: ["pmt","physics","electricstatic","potential","and","capacitors","refresher"] },
                    { id: 1061, title: "Electromagnetic Wave Exam", fileUrl: "https://drive.google.com/file/d/1miWBRoKe_XYFYioVlgye3W306fQw9PrI/view?usp=sharing", keywords: ["pmt","physics","electromagnetic","wave","exam"] },
                    { id: 1062, title: "Wave Refresher", fileUrl: "https://drive.google.com/file/d/1nH7bQ5TKDx0GyqveNXKHzObEsNfbgTjw/view?usp=sharing", keywords: ["pmt","physics","wave","refresher"] },
                    { id: 1063, title: "Thermal Properties Of Matter Refresher", fileUrl: "https://drive.google.com/file/d/1nTph8F3LUDYpBgstHUAbEGc9HYkmXM10/view?usp=sharing", keywords: ["pmt","physics","thermal","properties","of","matter","refresher"] },
                    { id: 1064, title: "Rotational Motion Base", fileUrl: "https://drive.google.com/file/d/1oZW-NS2p8dB-3U7ngR_HBw1if5nXRDSb/view?usp=sharing", keywords: ["iit","adv","physics","rotational","motion","base"] },
                    { id: 1065, title: "Electric Charge And Fields Exam", fileUrl: "https://drive.google.com/file/d/1obUcB1mDDSsAodWu1rOsUu80I_dgBjIp/view?usp=sharing", keywords: ["pmt","physics","electric","charge","and","fields","exam"] },
                    { id: 1066, title: "Electricstatic Potential And Capacitors Exam", fileUrl: "https://drive.google.com/file/d/1oi5YaHcpkjeO-1J71mezpOGBcqF9ri0F/view?usp=sharing", keywords: ["pmt","physics","electricstatic","potential","and","capacitors","exam"] },
                    { id: 1067, title: "Electrostatic Field Base", fileUrl: "https://drive.google.com/file/d/1oiasE7QmvjZcVTzr6QMdgpRjA8HxU9GE/view?usp=sharing", keywords: ["iit","adv","physics","electrostatic","field","base"] },
                    { id: 1068, title: "Nuclear Physics Base", fileUrl: "https://drive.google.com/file/d/1pBU63HGNBGVZgxEJIR-aASet2AhWFfEE/view?usp=sharing", keywords: ["iit","adv","physics","nuclear","physics","base"] },
                    { id: 1069, title: "Calorimetry And Heat Tranfer Exam", fileUrl: "https://drive.google.com/file/d/1pohmexNNolxAuDDKyKo4xSxfO5OBfs1y/view?usp=sharing", keywords: ["pmt","physics","calorimetry","and","heat","tranfer","exam"] },
                    { id: 1070, title: "Elasticity And Surface Tension Exam", fileUrl: "https://drive.google.com/file/d/1qL38Qe1Vx_S90FIxBuxxIaeGY5PAYHbk/view?usp=sharing", keywords: ["pmt","physics","elasticity","and","surface","tension","exam"] },
                    { id: 1071, title: "Thermodynamics Refresher", fileUrl: "https://drive.google.com/file/d/1tbOwSC1q8YTMD96J9RRqFauqLGBtrqPx/view?usp=sharing", keywords: ["pmt","physics","thermodynamics","refresher"] },
                    { id: 1072, title: "Gravitation Exam", fileUrl: "https://drive.google.com/file/d/1tca07ZNln9aVPgF7OQzdz8lD_IkRKhAh/view?usp=sharing", keywords: ["pmt","physics","gravitation","exam"] },
                    { id: 1073, title: "Atomic Physics Base", fileUrl: "https://drive.google.com/file/d/1tkHiCUqvKV78ZZ6m1R8qDWKzSDCFe0Lk/view?usp=sharing", keywords: ["iit","adv","physics","atomic","physics","base"] },
                    { id: 1074, title: "Motion In One Dimension Refresher", fileUrl: "https://drive.google.com/file/d/1uI8tcbHF0nRuSeYhO1FEj3KcyzBMv4Lo/view?usp=sharing", keywords: ["pmt","physics","motion","in","one","dimension","refresher"] },
                    { id: 1075, title: "Wave Motion Base", fileUrl: "https://drive.google.com/file/d/1uer38n7i4tNj7bDjYQDkq1TDrvfONEpU/view?usp=sharing", keywords: ["iit","adv","physics","wave","motion","base"] },
                    { id: 1076, title: "Electric Current Base", fileUrl: "https://drive.google.com/file/d/1vjPwgWhMgOO411yumG1MG3awbKBz1MKd/view?usp=sharing", keywords: ["iit","adv","physics","electric","current","base"] },
                    { id: 1077, title: "Shm Base", fileUrl: "https://drive.google.com/file/d/1x5IsoNxfnhoWx3AgzgnDtY_JxUsHE6Qx/view?usp=sharing", keywords: ["iit","adv","physics","shm","base"] },
                    { id: 1078, title: "Oscillation And Waves Exam", fileUrl: "https://drive.google.com/file/d/1yMM3mG2v4N5r3ltQPkNWDQ0sXXm4uf1O/view?usp=sharing", keywords: ["pmt","physics","oscillation","and","waves","exam"] },
                    { id: 1079, title: "Heating Effect Exam", fileUrl: "https://drive.google.com/file/d/1zuUAmLCT9Kma7rv3Crfqn2UHRT1QyP9K/view?usp=sharing", keywords: ["pmt","physics","heating","effect","exam"] },
                    { id: 1080, title: "Magnetic Field Resnick", fileUrl: "https://drive.google.com/open?id=1-9SMjjssamVMn1eRHHM8xUB8fr-cfY5E", keywords: ["iit","mains","physics","magnetic","field","resnick"] },
                    { id: 1081, title: "Com Linear Momentum Resnick Qna", fileUrl: "https://drive.google.com/open?id=1-loUqNbi_PBySKrQ7slqjN_W3eRp20dS", keywords: ["iit","mains","physics","com","linear","momentum","resnick","qna"] },
                    { id: 1082, title: "Kinetic Energy And Work Resnick", fileUrl: "https://drive.google.com/open?id=102RDx95EFVWmPE4poI0DzcKnBfBHMXbM", keywords: ["iit","mains","physics","kinetic","energy","and","work","resnick"] },
                    { id: 1083, title: "Wave Optics Base 1", fileUrl: "https://drive.google.com/open?id=10KxErPQXOYjVH00N1ibw2W8KQLU5CrrH", keywords: ["iit","mains","physics","wave","optics","base1"] },
                    { id: 1084, title: "Com Linear Momentum Collision H Verma", fileUrl: "https://drive.google.com/open?id=10cAgDRVHr5LuhJ48p7vP4gSXQBC0fGwU", keywords: ["iit","mains","physics","com","linear","momentum","collision","h","verma"] },
                    { id: 1085, title: "Energy From Nucleus Resnick Qna", fileUrl: "https://drive.google.com/open?id=10tcghutTJBCtR1WuvsTLy97LoHH2ULru", keywords: ["iit","mains","physics","energy","from","nucleus","resnick","qna"] },
                    { id: 1086, title: "Modern Physics Revision Notes", fileUrl: "https://drive.google.com/open?id=11EzlzzzMtwQc1bICWNOOz2dDPt3ae_h6", keywords: ["iit","mains","physics","modern","physics","revision","notes"] },
                    { id: 1087, title: "Photoelectric Effect Brainmap 1", fileUrl: "https://drive.google.com/open?id=11p38N_WvN7-EcSpO1gRiBufW2dyTLOMG", keywords: ["pmt","physics","photoelectric","effect","brainmap","1"] },
                    { id: 1088, title: "Electric Current In Conductor Hc Verma", fileUrl: "https://drive.google.com/open?id=12D_mbTinv-R3zI0NcuNIHf7amhOMCBB0", keywords: ["iit","mains","physics","electric","current","in","conductor","hc","verma"] },
                    { id: 1089, title: "Properties Of Solid And Fluids Base 1", fileUrl: "https://drive.google.com/open?id=130qUZPNqdEitQSmm675aPwrknM1KxMOi", keywords: ["iit","mains","physics","properties","of","solid","and","fluids","base1"] },
                    { id: 1090, title: "Kinematics Solution", fileUrl: "https://drive.google.com/open?id=14CH_QMnvX6kNUw9csP7A2Mhav_z36Kgd", keywords: ["irodov","solution","kinematics"] },
                    { id: 1091, title: "Force Lom Resnick Soln", fileUrl: "https://drive.google.com/open?id=14VUQEuve2bhGGyOAyh6OSUpa2LnMyrAv", keywords: ["iit","mains","physics","force","lom","resnick","soln"] },
                    { id: 1092, title: "Photoelectric Effect And Wave Particle Duality Hc Verma", fileUrl: "https://drive.google.com/open?id=14lzaLq7xXOS0VhLebZ8tdfZgwK4wAg-6", keywords: ["iit","mains","physics","photoelectric","effect","and","wave","particle","duality","hc","verma"] },
                    { id: 1093, title: "Geometrical Optics Base 1", fileUrl: "https://drive.google.com/open?id=151zZsdsXlJaq6sin9UbyQQYN7hnDws-5", keywords: ["iit","mains","physics","geometrical","optics","base1"] },
                    { id: 1094, title: "Atom Nucleus Base 1", fileUrl: "https://drive.google.com/open?id=15GCrIhh_WGC7zVMHokVlNO6qWnhUWc6b", keywords: ["pmt","physics","atom","nucleus","base1"] },
                    { id: 1095, title: "Atom X-ray Laser Resnick", fileUrl: "https://drive.google.com/open?id=15f8Ef37c7oyKNQ8LlIvrp2_WsjwYus6t", keywords: ["iit","mains","physics","atom","x-ray","laser","resnick"] },
                    { id: 1096, title: "The Nucleus Resnick Qna", fileUrl: "https://drive.google.com/open?id=15milDomVik7hr1Aaar3n-7fIKJfadLSM", keywords: ["iit","mains","physics","the","nucleus","resnick","qna"] },
                    { id: 1097, title: "Mechanical Surface Tension Base", fileUrl: "https://drive.google.com/open?id=15qf1f20U099liKiB3t-w56823uRT_j8s", keywords: ["pmt","physics","mechanical","surface","tension","base"] },
                    { id: 1098, title: "Thermodynamics Brainmap", fileUrl: "https://drive.google.com/open?id=16-3viWnhLiwq018aUpec4uCgoy4i7Sbi", keywords: ["pmt","physics","thermodynamics","brainmap"] },
                    { id: 1099, title: "Physics And Measurement Hc Verma", fileUrl: "https://drive.google.com/open?id=167-uuKFeyq2-uEIbS1p7HRiX28OxXg7q", keywords: ["iit","mains","physics","physics","and","measurement","hc","verma"] },
                    { id: 1100, title: "Dual Nature Of Radiation Brainmap", fileUrl: "https://drive.google.com/open?id=16KfUx14r61TOH8QyFD3e6ytzktBJEQBf", keywords: ["pmt","physics","dual","nature","of","radiation","brainmap"] },
                    { id: 1101, title: "Force Lom Resnick", fileUrl: "https://drive.google.com/open?id=16MutVB8es3sBQmU3G7Spgh_PaNoFO5OE", keywords: ["iit","mains","physics","force","lom","resnick"] },
                    { id: 1102, title: "Gauss Law Resnick Qna", fileUrl: "https://drive.google.com/open?id=16loUChL3OS4bd8Ny25yQ5CQFashhgC4r", keywords: ["iit","mains","physics","gauss","law","resnick","qna"] },
                    { id: 1103, title: "Moving Charges And Magnetism Base", fileUrl: "https://drive.google.com/open?id=16sL8XYlGY50oNupuvUVmBsDSpvdQtp2P", keywords: ["iit","mains","physics","moving","charges","and","magnetism","base"] },
                    { id: 1104, title: "Energy From Nucleus Resnick", fileUrl: "https://drive.google.com/open?id=17GyRAtuupPVCv3e2u0eC9R3byQBduLrM", keywords: ["iit","mains","physics","energy","from","nucleus","resnick"] },
                    { id: 1105, title: "Magnetic Field Resnick Qna", fileUrl: "https://drive.google.com/open?id=17ofi2qPds0994XZqwyHgv7F22QJYWeXP", keywords: ["iit","mains","physics","magnetic","field","resnick","qna"] },
                    { id: 1106, title: "Rotational Motion Brainmap", fileUrl: "https://drive.google.com/open?id=17oiGMuvmQ0exE7_ghTt1n7ZLI3hJHiE4", keywords: ["pmt","physics","rotational","motion","brainmap"] },
                    { id: 1107, title: "Gravitation Hc Verma", fileUrl: "https://drive.google.com/open?id=18MdFuzbCErIeVPfljDlsQCxxjfx8-PH-", keywords: ["iit","mains","physics","gravitation","hc","verma"] },
                    { id: 1108, title: "Photon And Matter Wave Resnick Qna", fileUrl: "https://drive.google.com/open?id=18bOYnnI_YDQNsS86oErl7LOBEaRbtmVa", keywords: ["iit","mains","physics","photon","and","matter","wave","resnick","qna"] },
                    { id: 1109, title: "The Nucleus Resnick", fileUrl: "https://drive.google.com/open?id=18uQ8GN6pCG6leEZ4Ouo6snDiy6EzqRPM", keywords: ["iit","mains","physics","the","nucleus","resnick"] },
                    { id: 1110, title: "Light Waves Hc Verma", fileUrl: "https://drive.google.com/open?id=19JKeoBW4-fFhSr0iKE5OxJq3q-ZD5MGO", keywords: ["iit","mains","physics","light","waves","hc","verma"] },
                    { id: 1111, title: "Circular Motion Res", fileUrl: "https://drive.google.com/open?id=19LkdHwpXIwcNRjGNgV8NNNq-960ElUr5", keywords: ["iit","mains","physics","circular","motion","res"] },
                    { id: 1112, title: "Rigid Body Dynamics Revision Notes 2", fileUrl: "https://drive.google.com/open?id=19TVkgHwzrCvLZYsyUrNww7eo7kjMu_vM", keywords: ["iit","mains","physics","rigid","body","dynamics","revision","notes2"] },
                    { id: 1113, title: "Magnetic Field Due To A Current Hc Verma", fileUrl: "https://drive.google.com/open?id=1AaeSvZc4AC4n3IOozuSfwRkl3IC7T04q", keywords: ["iit","mains","physics","magnetic","field","due","to","a","current","hc","verma"] },
                    { id: 1114, title: "Thermal Properties Of Matter Brainmap", fileUrl: "https://drive.google.com/open?id=1AjKq3bDHsj3eFMKCikXdjcha1qhnzNep", keywords: ["pmt","physics","thermal","properties","of","matter","brainmap"] },
                    { id: 1115, title: "Physics And Measurement Base 1", fileUrl: "https://drive.google.com/open?id=1Ats7DhgXULNKlLzEj_0HTQrQSHq5IK5D", keywords: ["iit","mains","physics","physics","and","measurement","base1"] },
                    { id: 1116, title: "Nuclei Brainmap", fileUrl: "https://drive.google.com/open?id=1BEjiV-qOGGN9-YroKkSsJA1Bw750M0y8", keywords: ["pmt","physics","nuclei","brainmap"] },
                    { id: 1117, title: "Kinematics Hc Verma", fileUrl: "https://drive.google.com/open?id=1BH0QHwiYSXR9O-kTe3d9x__IwDPV-VJV", keywords: ["iit","mains","physics","kinematics","hc","verma"] },
                    { id: 1118, title: "Coulombs Law Resnick", fileUrl: "https://drive.google.com/open?id=1BKtG6zrWj64HyOgzeIVk-gJrav_UK7rB", keywords: ["iit","mains","physics","coulombs","law","resnick"] },
                    { id: 1119, title: "Electric Charges Forces And Fields Base", fileUrl: "https://drive.google.com/open?id=1BlW9a7Myqks-2pt6W6sI1tBl6HjZ5wrM", keywords: ["iit","mains","physics","electric","charges","forces","and","fields","base"] },
                    { id: 1120, title: "Com Linear Momentum Collision Base", fileUrl: "https://drive.google.com/open?id=1BrLIKDro-HcLnaX1-6gPxwUMWVLG4-KR", keywords: ["iit","mains","physics","com","linear","momentum","collision","base"] },
                    { id: 1121, title: "Entropy And Second Law Of Thermodynamics Resnick", fileUrl: "https://drive.google.com/open?id=1Bv0h6xAi0Z_X6wWfjLuYzwonYVwglWHG", keywords: ["iit","mains","physics","entropy","and","second","law","of","thermodynamics","resnick"] },
                    { id: 1122, title: "Motion In One Dimension Se 2", fileUrl: "https://drive.google.com/open?id=1CfTy86g5LCxlC9mvWz26cfqHOGy3fxge", keywords: ["iit","mains","physics","motion","in","one","dimension","se2"] },
                    { id: 1123, title: "Heat Transfer Base 1", fileUrl: "https://drive.google.com/open?id=1DGxuXSJDzu_xolug5h8eMoiwlsdMvZ_V", keywords: ["iit","mains","physics","heat","transfer","base1"] },
                    { id: 1124, title: "Sound Wave Base", fileUrl: "https://drive.google.com/open?id=1DLLyqkT0nH3lHWQDz1UYOc0zVN5n0kUN", keywords: ["iit","mains","physics","sound","wave","base"] },
                    { id: 1125, title: "Oscillation Brainmap", fileUrl: "https://drive.google.com/open?id=1DQZAc9HicnM1gV-D-y-eVxb01bsAn740", keywords: ["pmt","physics","oscillation","brainmap"] },
                    { id: 1126, title: "Capacitor Resnick", fileUrl: "https://drive.google.com/open?id=1DcRm-DlYNCi3jVdtsmZA9hqZj1EdUO6f", keywords: ["iit","mains","physics","capacitor","resnick"] },
                    { id: 1127, title: "Com Linear Momentum Collision Revision Note", fileUrl: "https://drive.google.com/open?id=1DkSzPXb5rhbDMnfJoDjdSpfN8vbj-q13", keywords: ["iit","mains","physics","com","linear","momentum","collision","revision","note"] },
                    { id: 1128, title: "Gravitation Resnick Ans", fileUrl: "https://drive.google.com/open?id=1DnAsmmv-I2-IkDfQbYcTK4KCGx6DRhar", keywords: ["iit","mains","physics","gravitation","resnick","ans"] },
                    { id: 1129, title: "Physics And Measurement Resnick", fileUrl: "https://drive.google.com/open?id=1E3f4aYZObmKYTszAqdk-WZ3V2ThCu0mS", keywords: ["iit","mains","physics","physics","and","measurement","resnick"] },
                    { id: 1130, title: "Circuits Resnick Qna", fileUrl: "https://drive.google.com/open?id=1ER_Sb4UHUhV8fqay-E26d-WD40f2iRe1", keywords: ["iit","mains","physics","circuits","resnick","qna"] },
                    { id: 1131, title: "Bohrs Model And Physics Of The Atom Hc Verma", fileUrl: "https://drive.google.com/open?id=1FHsh6IX4OEYJmNCsl5FPm6_2iYVziQyK", keywords: ["iit","mains","physics","bohrs","model","and","physics","of","the","atom","hc","verma"] },
                    { id: 1132, title: "The Nucleus Hc Verma", fileUrl: "https://drive.google.com/open?id=1F_ocQ-J4rIF8mso6jw3p00yndbHY8dnH", keywords: ["iit","mains","physics","the","nucleus","hc","verma"] },
                    { id: 1133, title: "Laws Of Motion Hc Verma", fileUrl: "https://drive.google.com/open?id=1G6_fMunY66bd4rJL970DuwR7KG8DImAg", keywords: ["iit","mains","physics","laws","of","motion","hc","verma"] },
                    { id: 1134, title: "Motion In Two Dimension Resnick", fileUrl: "https://drive.google.com/open?id=1GGbPgYoRIJT-Seokeye8nQ3_0YFx0nXy", keywords: ["iit","mains","physics","motion","in","two","dimension","resnick"] },
                    { id: 1135, title: "Friction Note 1", fileUrl: "https://drive.google.com/open?id=1GNSnVTmi3HDsQC7P0N-7Kzz7Ug1bbjw4", keywords: ["iit","mains","physics","friction","note1"] },
                    { id: 1136, title: "Induction And Inductance Resnick", fileUrl: "https://drive.google.com/open?id=1GzXqwmBivkOrTBTlP9pJi-WL_dmQ-glk", keywords: ["iit","mains","physics","induction","and","inductance","resnick"] },
                    { id: 1137, title: "Thermodynamics Base 1", fileUrl: "https://drive.google.com/open?id=1H6BJZteqkcAXvb6O7FkYjk4wC0vSRybk", keywords: ["iit","mains","physics","thermodynamics","base1"] },
                    { id: 1138, title: "Kinetic Theory Of Gases Resnick Qna", fileUrl: "https://drive.google.com/open?id=1HAcJzRQyt1LA2gMntb0o_KQuC2k07ibn", keywords: ["iit","mains","physics","kinetic","theory","of","gases","resnick","qna"] },
                    { id: 1139, title: "Electric Potential And Capacitance Base", fileUrl: "https://drive.google.com/open?id=1I5uiUn4L8-FaET1J6ptXrp4JxGSbKUJk", keywords: ["iit","mains","physics","electric","potential","and","capacitance","base"] },
                    { id: 1140, title: "Rolling Torque Resnick Qna", fileUrl: "https://drive.google.com/open?id=1ILL1lklzgd8E_DkvffJCYmL98464H-nY", keywords: ["iit","mains","physics","rolling","torque","resnick","qna"] },
                    { id: 1141, title: "Force And Laws Of Motion Base 1", fileUrl: "https://drive.google.com/open?id=1IW_ob4ueRQW_rmZVPbRvSdSh6NKopV6G", keywords: ["iit","mains","physics","force","and","laws","of","motion","base1"] },
                    { id: 1142, title: "Rotational Mechanics Hc Verma", fileUrl: "https://drive.google.com/open?id=1IqWkHtnGTWHAA05oUA_12vbJn7Np4HgB", keywords: ["iit","mains","physics","rotational","mechanics","hc","verma"] },
                    { id: 1143, title: "Magnetic Field Due To A Current Resnick Qna", fileUrl: "https://drive.google.com/open?id=1Iv7QRQAWO7RZu3Myg-GdFv0gWI2nGM-X", keywords: ["iit","mains","physics","magnetic","field","due","to","a","current","resnick","qna"] },
                    { id: 1144, title: "Gauss Law Resnick", fileUrl: "https://drive.google.com/open?id=1JHIlQRgjNFmmT-YrVjAWvmAqkBvXoLBT", keywords: ["iit","mains","physics","gauss","law","resnick"] },
                    { id: 1145, title: "Rolling Torque Base", fileUrl: "https://drive.google.com/open?id=1JmcO98XuIClDawO8ZFmfT7p3pX-AqIyP", keywords: ["iit","mains","physics","rolling","torque","base"] },
                    { id: 1146, title: "Wave 2 Resnick Qna", fileUrl: "https://drive.google.com/open?id=1K9BQ1Itq_WRFczGqVl3oySItLdbK0Hlj", keywords: ["iit","mains","physics","wave2","resnick","qna"] },
                    { id: 1147, title: "Oscillation Resnick Qna", fileUrl: "https://drive.google.com/open?id=1Ky9VqoJDnHoZQuyeSOmypwD-0PfQyz-I", keywords: ["iit","mains","physics","oscillation","resnick","qna"] },
                    { id: 1148, title: "Wave 2 Resnick", fileUrl: "https://drive.google.com/open?id=1LPa5bMw-tULDaPQjdj0zIFMOemNWCIYS", keywords: ["iit","mains","physics","wave2","resnick"] },
                    { id: 1149, title: "Rotational Resnick Qna", fileUrl: "https://drive.google.com/open?id=1M-FYrwC8lYbq1XSbOsMAcCU-1HB2rZwS", keywords: ["iit","mains","physics","rotational","resnick","qna"] },
                    { id: 1150, title: "Oscillation Base 1", fileUrl: "https://drive.google.com/open?id=1MB_yJR8EHNpRd_zwT8xnSucdxMOnrXOz", keywords: ["pmt","physics","oscillation","base1"] },
                    { id: 1151, title: "Motion In One Dimension Resnick", fileUrl: "https://drive.google.com/open?id=1MD9SsxcoEVZSIkJq35lzW0D9Y-ukvZGJ", keywords: ["iit","mains","physics","motion","in","one","dimension","resnick"] },
                    { id: 1152, title: "Specific Heat Capacities Of Gases H Verma", fileUrl: "https://drive.google.com/open?id=1McaMjG41l259BIpHILfl0wPvG_Nds_vo", keywords: ["iit","mains","physics","specific","heat","capacities","of","gases","h","verma"] },
                    { id: 1153, title: "Optical Instruments Base 1", fileUrl: "https://drive.google.com/open?id=1N7x-cp1n3gFlRsINylcEB7siomClh49T", keywords: ["iit","mains","physics","optical","instruments","base1"] },
                    { id: 1154, title: "Circuits Resnick", fileUrl: "https://drive.google.com/open?id=1NkACvQEO3wU9rC6B12wjgIBmcNdZk24v", keywords: ["iit","mains","physics","circuits","resnick"] },
                    { id: 1155, title: "Moving Charge And Magnetism Brainmap", fileUrl: "https://drive.google.com/open?id=1deF5lXUneX4l-ujnBY15esJ0Si9VKTar", keywords: ["pmt","physics","moving","charge","and","magnetism","brainmap"] },
                    { id: 1156, title: "Com Linear Momentum Resnick", fileUrl: "https://drive.google.com/open?id=1dhmCa23oBFGqfNyY3AKlgGMjKOuQxuIl", keywords: ["iit","mains","physics","com","linear","momentum","resnick"] },
                    { id: 1157, title: "Gravitation Base", fileUrl: "https://drive.google.com/open?id=1eL221yQllqubn32WY6lxU8FeSZobuJXM", keywords: ["iit","mains","physics","gravitation","base"] },
                    { id: 1158, title: "Circular Motion Base", fileUrl: "https://drive.google.com/open?id=1eVXF0nXN9753-5BxURnwN9PQD1Z7jEks", keywords: ["iit","mains","physics","circular","motion","base"] },
                    { id: 1159, title: "Motion In One Dimension Base 1", fileUrl: "https://drive.google.com/open?id=1eZCIE1-eSxTWTRjqInBxqjEzde_Itly5", keywords: ["iit","mains","physics","motion","in","one","dimension","base1"] },
                    { id: 1160, title: "Work And Energy Base", fileUrl: "https://drive.google.com/open?id=1edNBscySfR_aWI2AU5ccwHakiq1LgwVC", keywords: ["iit","mains","physics","work","and","energy","base"] },
                    { id: 1161, title: "Geometrical Optics Base", fileUrl: "https://drive.google.com/open?id=1gBmLYjSR0IYW9hXC5GzJV_YIx0zY7XpW", keywords: ["iit","mains","physics","geometrical","optics","base"] },
                    { id: 1162, title: "Motion In One Dimension Base", fileUrl: "https://drive.google.com/open?id=1gWTlyEwePNsKow39sPLA7Ca_Hb1mpvUW", keywords: ["iit","mains","physics","motion","in","one","dimension","base"] },
                    { id: 1163, title: "Waves On A String Base", fileUrl: "https://drive.google.com/open?id=1gZH9D6NIFbxsEDfUOjibUfjqNQnM9La-", keywords: ["iit","mains","physics","waves","on","a","string","base"] },
                    { id: 1164, title: "Prism Base 3", fileUrl: "https://drive.google.com/open?id=1gr7ZDJkQIq7gjss0q19FOqWtDp4GpmRY", keywords: ["iit","mains","physics","prism","base3"] },
                    { id: 1165, title: "Electric Potential Resnick", fileUrl: "https://drive.google.com/open?id=1gvdyrGyL6SB2xNzv6LkLtVB5IQ0JsmvN", keywords: ["iit","mains","physics","electric","potential","resnick"] },
                    { id: 1166, title: "Thermal Properties Of Matter Base", fileUrl: "https://drive.google.com/open?id=1hkTGOd7HnSuSrFJ-51EMbg_z8ohKKtYS", keywords: ["pmt","physics","thermal","properties","of","matter","base"] },
                    { id: 1167, title: "Coulombs Law Resnick Qna", fileUrl: "https://drive.google.com/open?id=1hnBLgedRHDBJonQ2FQD7ib5ldVDHHpwC", keywords: ["iit","mains","physics","coulombs","law","resnick","qna"] },
                    { id: 1168, title: "Friction Revision Notes", fileUrl: "https://drive.google.com/open?id=1hneGN-EHiKTKO0GumH3osRNO6UXbIXp3", keywords: ["iit","mains","physics","friction","revision","notes"] },
                    { id: 1169, title: "Ray And Wave Optics Revision Notes", fileUrl: "https://drive.google.com/open?id=1hqBUNZaj-KLCaEJ84QQySuYS_-ggKoXH", keywords: ["iit","mains","physics","ray","and","wave","optics","revision","notes"] },
                    { id: 1170, title: "Electric Potential Resnick Qna", fileUrl: "https://drive.google.com/open?id=1jA4b5gnho0-q460X9uD3tCOuKrj1p0yA", keywords: ["iit","mains","physics","electric","potential","resnick","qna"] },
                    { id: 1171, title: "Images Resnick", fileUrl: "https://drive.google.com/open?id=1jQpEWoaRajWqPR_Sd_9VYkY9J2VFZkKn", keywords: ["iit","mains","physics","images","resnick"] },
                    { id: 1172, title: "Emi Brainmap", fileUrl: "https://drive.google.com/open?id=1jYGIkIxy2Qta1CrIGmxYVq7FbTIfp03o", keywords: ["pmt","physics","emi","brainmap"] },
                    { id: 1173, title: "Physics And Measurement Base", fileUrl: "https://drive.google.com/open?id=1jqJ5dc9jF0jdtbdZf3fHKEj0cWJd-Nam", keywords: ["iit","mains","physics","physics","and","measurement","base"] },
                    { id: 1174, title: "Potential Energy And Conservation Of Energy Qna", fileUrl: "https://drive.google.com/open?id=1lCJjqGnEluuKDCNwTaIyZSTOUo9ZMWXT", keywords: ["iit","mains","physics","potential","energy","and","conservation","of","energy","qna"] },
                    { id: 1175, title: "Circular Motion Base 1", fileUrl: "https://drive.google.com/open?id=1lcasXE61YGlAPzLMPE4Xttfxq-p6x6fz", keywords: ["iit","mains","physics","circular","motion","base1"] },
                    { id: 1176, title: "Motion In Two Dimension Brainmap", fileUrl: "https://drive.google.com/open?id=1mgAdjR4hufY4AbQr05W8tfjB_VivL2o3", keywords: ["pmt","physics","motion","in","two","dimension","brainmap"] },
                    { id: 1177, title: "Shm Base", fileUrl: "https://drive.google.com/open?id=1nKBdA8gH02DgKv_NjY7yn5eNqfK1Oivd", keywords: ["iit","mains","physics","shm","base"] },
                    { id: 1178, title: "Work Power Energy Brainmap", fileUrl: "https://drive.google.com/open?id=1nhVDsFQEYrI8b0Oz0epDeI5-oyrhRGBU", keywords: ["pmt","physics","work","power","energy","brainmap"] },
                    { id: 1179, title: "Electromagnetic Induction Hc Verma", fileUrl: "https://drive.google.com/open?id=1o3e-pfAa8WfNsuWcrbPiCX6JKbEz9Siy", keywords: ["iit","mains","physics","electromagnetic","induction","hc","verma"] },
                    { id: 1180, title: "Motion In Two Dimension Base 1", fileUrl: "https://drive.google.com/open?id=1oIy6TNg4tu_P0coO2ck4UZ6mX1UtpwOH", keywords: ["iit","mains","physics","motion","in","two","dimension","base1"] },
                    { id: 1181, title: "Electrostatic Base", fileUrl: "https://drive.google.com/open?id=1oM0LKg8lj4-qwszQCpoyfzVNnCCDZI7U", keywords: ["pmt","physics","electrostatic","base"] },
                    { id: 1182, title: "Oscillation Resnick", fileUrl: "https://drive.google.com/open?id=1omVIjkyw3wi1ppafhFnvvTtnfqW0ksnR", keywords: ["iit","mains","physics","oscillation","resnick"] },
                    { id: 1183, title: "Laws Of Thermodynamics H Verma", fileUrl: "https://drive.google.com/open?id=1p9AszZQwSeh88gZFeOJ3_b-ogrZeUHTS", keywords: ["iit","mains","physics","laws","of","thermodynamics","h","verma"] },
                    { id: 1184, title: "Motion In Two Dimension Base", fileUrl: "https://drive.google.com/open?id=1pUzNvxDNxuuH6LmAVeFHTgDCrni3odJn", keywords: ["iit","mains","physics","motion","in","two","dimension","base"] },
                    { id: 1185, title: "Induction And Inductance Resnick Qna", fileUrl: "https://drive.google.com/open?id=1q7C8pNPAQ8_4UguzSVHR9LIm3yfZs3Mu", keywords: ["iit","mains","physics","induction","and","inductance","resnick","qna"] },
                    { id: 1186, title: "Com Linear Momentum Collision Base 1", fileUrl: "https://drive.google.com/open?id=1qUriVVOFl9zUHUu1-ea_dVO2I-t-KGkE", keywords: ["iit","mains","physics","com","linear","momentum","collision","base1"] },
                    { id: 1187, title: "Capacitor Resnick Qna", fileUrl: "https://drive.google.com/open?id=1qn_URrBWT2pmQc7NWGm6TobK7E8dsVBO", keywords: ["iit","mains","physics","capacitor","resnick","qna"] },
                    { id: 1188, title: "Electromagnetic Induction Revision Notes", fileUrl: "https://drive.google.com/open?id=1rKAtYCh8jZZMI7rJnaLxl3OYBjg1x-KK", keywords: ["iit","mains","physics","electromagnetic","induction","revision","notes"] },
                    { id: 1189, title: "Electric Field Resnick", fileUrl: "https://drive.google.com/open?id=1sKZZvQFYOAYD1Xh2nBOZswOcEN0VLo7x", keywords: ["iit","mains","physics","electric","field","resnick"] },
                    { id: 1190, title: "Electric Current In Conductor Base", fileUrl: "https://drive.google.com/open?id=1su7tmNSta8GE_Bd57T5ZAlgVpkOxc7dn", keywords: ["iit","mains","physics","electric","current","in","conductor","base"] },
                    { id: 1191, title: "Magnetic Properties Of Matter Resnick Qna", fileUrl: "https://drive.google.com/open?id=1t9RnvwJLxLjvqQiox8ELx77C33ObbJkE", keywords: ["iit","mains","physics","magnetic","properties","of","matter","resnick","qna"] },
                    { id: 1192, title: "Kinematice Revision Notes", fileUrl: "https://drive.google.com/open?id=1tFekAgR8Beqtar5aelQ3RuG0d-2KFbiL", keywords: ["iit","mains","physics","kinematice","revision","notes"] },
                    { id: 1193, title: "Wave Motion And Wave On A String Hc Verma", fileUrl: "https://drive.google.com/open?id=1tdkGeLfuA9E8pi7vtmyUHi8Ka33I5YS1", keywords: ["iit","mains","physics","wave","motion","and","wave","on","a","string","hc","verma"] },
                    { id: 1194, title: "Kinematics Hc Verma", fileUrl: "https://drive.google.com/open?id=1tmltCGdTOKIJ9TtlUi9rDzP6da2mdCBT", keywords: ["iit","mains","physics","kinematics","hc","verma"] },
                    { id: 1195, title: "Force And Laws Of Motion Base", fileUrl: "https://drive.google.com/open?id=1uSc3XFR1bqMtEde0kSnaYZUCnbclGty-", keywords: ["iit","mains","physics","force","and","laws","of","motion","base"] },
                    { id: 1196, title: "Moving Charges And Magnetism Revision Notes", fileUrl: "https://drive.google.com/open?id=1v1174WQQ-Eql21GERQzHG4X2DGoYmN4v", keywords: ["iit","mains","physics","moving","charges","and","magnetism","revision","notes"] },
                    { id: 1197, title: "Atom X-ray Laser Resnick Qna", fileUrl: "https://drive.google.com/open?id=1vDH5mbr693rGw4mUafUJNPRukhGgAFRS", keywords: ["iit","mains","physics","atom","x-ray","laser","resnick","qna"] },
                    { id: 1198, title: "Alternating Current Hc Verma", fileUrl: "https://drive.google.com/open?id=1vO3H6ONNw78KH9csLbIxXC0KdwV6LOT9", keywords: ["iit","mains","physics","alternating","current","hc","verma"] },
                    { id: 1199, title: "Magnetic Properties Of Matter Hc Verma", fileUrl: "https://drive.google.com/open?id=1v_R6X-mHiAgSucKNODFFGh7-II_ofqxS", keywords: ["iit","mains","physics","magnetic","properties","of","matter","hc","verma"] },
                    { id: 1200, title: "Reflection Base 3", fileUrl: "https://drive.google.com/open?id=1w25KkEFiQKILNQMSbcZKkh3E2fR8Iz6w", keywords: ["iit","mains","physics","reflection","base3"] },
                    { id: 1201, title: "Kinetic Theory Of Gases Base", fileUrl: "https://drive.google.com/open?id=1w4SXEXPaGFiat7bRG6QTcXK4fyty1Qdl", keywords: ["iit","mains","physics","kinetic","theory","of","gases","base"] },
                    { id: 1202, title: "Heat And Thermal Expansion Revision Note", fileUrl: "https://drive.google.com/open?id=1w7-XYV7HNoN2g_NA4b6T5UGTiAvfCpxy", keywords: ["iit","mains","physics","heat","and","thermal","expansion","revision","note"] },
                    { id: 1203, title: "Electrostatic Brainmap", fileUrl: "https://drive.google.com/open?id=1wg5bSOw1N5tZGglz6rr3pFlwzacyIgig", keywords: ["pmt","physics","electrostatic","brainmap"] },
                    { id: 1204, title: "Em Oscillation And Ac Resnick Qna", fileUrl: "https://drive.google.com/open?id=1wxGXi5kVrFJgPPsZWMHgqhIXSTj3Wv3C", keywords: ["iit","mains","physics","em","oscillation","and","ac","resnick","qna"] },
                    { id: 1205, title: "Interference Resnick Qna", fileUrl: "https://drive.google.com/open?id=1xaM5LHYtBWk43xQXd4-6ygv3t2nnF1IV", keywords: ["iit","mains","physics","interference","resnick","qna"] },
                    { id: 1206, title: "Friction Base 1", fileUrl: "https://drive.google.com/open?id=1xto0ihefZ3QGdlTcdNqVkjHXOWjPSGIb", keywords: ["iit","mains","physics","friction","base1"] },
                    { id: 1207, title: "Properties Of Solid And Fluids Base", fileUrl: "https://drive.google.com/open?id=1y6cO7cxypaUJaVyeR640SVRZVQ4dHWK3", keywords: ["iit","mains","physics","properties","of","solid","and","fluids","base"] },
                    { id: 1208, title: "Shm Hc Verma", fileUrl: "https://drive.google.com/open?id=1yLw4k1celF8gtHIKjMalIVQlNKA805U_", keywords: ["iit","mains","physics","shm","hc","verma"] },
                    { id: 1209, title: "Kinetic Theory Of Gases Resnick", fileUrl: "https://drive.google.com/open?id=1ygNyoZTraKp53oP9lDguMfidzsS7FRk4", keywords: ["iit","mains","physics","kinetic","theory","of","gases","resnick"] },
                    { id: 1210, title: "Kinetic Theory Brainmap", fileUrl: "https://drive.google.com/open?id=1yuUzs7cqcTmdnv_-nTWsHvCtdjcubd7C", keywords: ["pmt","physics","kinetic","theory","brainmap"] },
                    { id: 1211, title: "Em Oscillation And Ac Resnick", fileUrl: "https://drive.google.com/open?id=1yuqOzhRRvvE16l6k_ZsZxcsjOlIWzudm", keywords: ["iit","mains","physics","em","oscillation","and","ac","resnick"] },
                    { id: 1212, title: "Mechanical Properties Of Fluids Brainmap", fileUrl: "https://drive.google.com/open?id=1z8a__qn1K8P6JTzFn-ykQ1pW-Smi6Kao", keywords: ["pmt","physics","mechanical","properties","of","fluids","brainmap"] },
                    { id: 1213, title: "Ray Optics Pyp Brainmap", fileUrl: "https://drive.google.com/open?id=1zEkkHxST2cwGplnrNVDXHYY7whWUqh3_", keywords: ["pmt","physics","ray","optics","pyp","brainmap"] },
                    { id: 1214, title: "Rotational Resnick", fileUrl: "https://drive.google.com/open?id=1zldyYaqeu_HbZo9Y9flYLYl5De5DlKB8", keywords: ["iit","mains","physics","rotational","resnick"] },
                ]
            },
            {
                categoryName: "Chemistry",
                subjectForDisplay: "IIT-JEE Chemistry",
                books: [
                    { id: 1215, title: "Liquid State Pp 1", fileUrl: "https://drive.google.com/open?id=1-2VgqxfbcasZcR_hb08Mu-uFtvk9QodU", keywords: ["iit","main","chemistry","liquid","state","pp1"] },
                    { id: 1216, title: "Basic Principles Of Organic Chemistry Pp 1", fileUrl: "https://drive.google.com/open?id=1-4azc94VS0YOvhG9uWQ-LvE0yVacD9WA", keywords: ["iit","main","chemistry","basic","principles","of","organic","chemistry","pp1"] },
                    { id: 1217, title: "Solid State Pp 1", fileUrl: "https://drive.google.com/open?id=1-CwZpF5CIpRJOqRKRERTUknaGxEdMBAy", keywords: ["iit","main","chemistry","solid","state","pp1"] },
                    { id: 1218, title: "Benzen Pp 1", fileUrl: "https://drive.google.com/open?id=1-QXjWAGRMdjZ2ZRdCtkNmf_1qlvfyEnX", keywords: ["iit","main","chemistry","benzen","pp1"] },
                    { id: 1219, title: "Some Basic Concept Fit", fileUrl: "https://drive.google.com/open?id=1-ftU08jspWMUojNwcWe5VvfeHG8brbmW", keywords: ["iit","adv","chemistry","some","basic","concept","fit"] },
                    { id: 1220, title: "General Organic Chemistry Master", fileUrl: "https://drive.google.com/open?id=1-sYkDfrA3r1Uwb5jYwIO3lxedZB55xt2", keywords: ["iit","main","chemistry","general","organic","chemistry","master"] },
                    { id: 1221, title: "Alkanes Pp 1", fileUrl: "https://drive.google.com/open?id=10IQ4k1rLEV31PWBmh0DlT8ncXfr9l9uM", keywords: ["iit","main","chemistry","alkanes","pp1"] },
                    { id: 1222, title: "Gaseous State Base 1", fileUrl: "https://drive.google.com/open?id=10N6WmJwxsK2cs9iVmhkyeRlSAxnEkocD", keywords: ["iit","mains","chemistry","gaseous","state","base1"] },
                    { id: 1223, title: "Empirical And Molecular Formulae Rcm", fileUrl: "https://drive.google.com/open?id=10P0GweY7dZJSVRbfYa00SU63YGCnOXBm", keywords: ["iit","main","chemistry","empirical","and","molecular","formulae","rcm"] },
                    { id: 1224, title: "Stoichiometry Opt", fileUrl: "https://drive.google.com/open?id=10PU7Jpc_p5roW3xAoJye3t-ADyFbmxy4", keywords: ["iit","mains","chemistry","stoichiometry","opt"] },
                    { id: 1225, title: "Chemical Kinetics Pp 5", fileUrl: "https://drive.google.com/open?id=10R-JybG7D7ORVuiZhh4CX85o5-qxuNYy", keywords: ["iit","main","chemistry","chemical","kinetics","pp5"] },
                    { id: 1226, title: "Alkenes Pp 1", fileUrl: "https://drive.google.com/open?id=10b6FsowOsiRxlAleI-ypu9dfq7dbtjGh", keywords: ["iit","main","chemistry","alkenes","pp1"] },
                    { id: 1227, title: "Preparation And Properties Of Compounds Master", fileUrl: "https://drive.google.com/open?id=10cButCL0zFdgRPjW-ETfLKcNEI6chc6K", keywords: ["iit","adv","chemistry","preparation","and","properties","of","compounds","master"] },
                    { id: 1228, title: "Carboxylic Acids Note 1", fileUrl: "https://drive.google.com/open?id=10enFc2M5vDZOWzarkLgmYvSKbV-1G0NI", keywords: ["iit","main","chemistry","carboxylic","acids","note1"] },
                    { id: 1229, title: "Nuclear Chemistry Master", fileUrl: "https://drive.google.com/open?id=10gmQCRaV7YVCXwC9SJ2W2Cw9Y1Gqp7xb", keywords: ["iit","main","chemistry","nuclear","chemistry","master"] },
                    { id: 1230, title: "Acid Derivatives Opt", fileUrl: "https://drive.google.com/open?id=10p0s7Mi-Un6tZ9tBiCNhe5gh_7k3A3iM", keywords: ["iit","main","chemistry","acid","derivatives","opt"] },
                    { id: 1231, title: "Solution And Colligative Base", fileUrl: "https://drive.google.com/open?id=1177G7oZUxxTK0F57xKwUaeJGYRSy43tV", keywords: ["iit","main","chemistry","solution","and","colligative","base"] },
                    { id: 1232, title: "S Block Elements Base", fileUrl: "https://drive.google.com/open?id=11T8ZhAb9_Zrnx7xMn86arBBvnQRm60-w", keywords: ["iit","main","chemistry","s","block","elements","base"] },
                    { id: 1233, title: "Introduction To Organic Chemistry Opt", fileUrl: "https://drive.google.com/open?id=11m9d54QiWdvFmIBe-mUI4lAFYZQAoJjB", keywords: ["iit","main","chemistry","introduction","to","organic","chemistry","opt"] },
                    { id: 1234, title: "Arene Mab", fileUrl: "https://drive.google.com/open?id=11wUx6ChUdkKjP5E1TiJiNF4s0SgJI0Jl", keywords: ["iit","main","chemistry","arene","mab"] },
                    { id: 1235, title: "Gaseous State Base", fileUrl: "https://drive.google.com/open?id=11yZmcnFglW8itTb7TFunBEXzz6RG_ESp", keywords: ["iit","mains","chemistry","gaseous","state","base"] },
                    { id: 1236, title: "Isomerism Master", fileUrl: "https://drive.google.com/open?id=11zE8KCoTOJ9iC9CleSEUZE0nxAtMJG7W", keywords: ["iit","main","chemistry","isomerism","master"] },
                    { id: 1237, title: "Basic Concepts Of Chemistry Opt", fileUrl: "https://drive.google.com/open?id=12vP-boX_MrjFyM1a2QmYWsh0Fv07Wgu0", keywords: ["iit","mains","chemistry","basic","concepts","of","chemistry","opt"] },
                    { id: 1238, title: "P Block Elements Base", fileUrl: "https://drive.google.com/open?id=12wIunBr_F43ZCKcfSh4ehiK4lnrUVnQr", keywords: ["iit","main","chemistry","p","block","elements","base"] },
                    { id: 1239, title: "Periodic Table Master", fileUrl: "https://drive.google.com/open?id=133cb-7HOIWv2pPuDi4SnVMTJjrU18eV4", keywords: ["iit","main","chemistry","periodic","table","master"] },
                    { id: 1240, title: "Physical And Chemical Equilibrium Pp 5", fileUrl: "https://drive.google.com/open?id=13CCe-T1xov_ZuL6dO6wbLumDSQX2iF08", keywords: ["iit","main","chemistry","physical","and","chemical","equilibrium","pp5"] },
                    { id: 1241, title: "Compound Of Metal Pp 1", fileUrl: "https://drive.google.com/open?id=13S4mKyeVcdiz39LrNlHD8ep7tUxCpOPp", keywords: ["iit","main","chemistry","compound","of","metal","pp1"] },
                    { id: 1242, title: "D And F Block Elements Pyp", fileUrl: "https://drive.google.com/open?id=13f2w17_1MbXahQ_IW3vFCwniUjSmVboN", keywords: ["iit","adv","chemistry","d","and","f","block","elements","pyp"] },
                    { id: 1243, title: "Periodicity Pp 2", fileUrl: "https://drive.google.com/open?id=13gI0DMsDO60izzMxmD9F3fg9fRxuHYRl", keywords: ["iit","main","chemistry","periodicity","pp2"] },
                    { id: 1244, title: "Haloalkanes And Haloarenes Pyp", fileUrl: "https://drive.google.com/open?id=13xIXlVP3jNJii5fHob6IflllHrp8aYA3", keywords: ["iit","main","chemistry","haloalkanes","and","haloarenes","pyp"] },
                    { id: 1245, title: "P Block Opt", fileUrl: "https://drive.google.com/open?id=13ypxXYk35qO6xYFxGlfxgN17Bp2U3K-Y", keywords: ["iit","main","chemistry","p","block","opt"] },
                    { id: 1246, title: "Atomic Structure Master", fileUrl: "https://drive.google.com/open?id=13zICAlZTI9FPcO4y5plPZYfbGhr4jluu", keywords: ["iit","mains","chemistry","atomic","structure","master"] },
                    { id: 1247, title: "Alcohol Phenol And Ethers Note 2", fileUrl: "https://drive.google.com/open?id=14GyvHBUXXqXSofJxvJwL-2hah02Ki9Hy", keywords: ["iit","main","chemistry","alcohol","phenol","and","ethers","note2"] },
                    { id: 1248, title: "Chemical Kinetics And Nuclear Phy Pyp", fileUrl: "https://drive.google.com/open?id=14Ul9BG6yv7olweQKay3OOyC4GocNqDEB", keywords: ["iit","main","chemistry","chemical","kinetics","and","nuclear","phy","pyp"] },
                    { id: 1249, title: "Equilibrium Pyp", fileUrl: "https://drive.google.com/open?id=14X-nfKF6kRYeaEMyVBHj9hi-POU2THt1", keywords: ["iit","mains","chemistry","equilibrium","pyp"] },
                    { id: 1250, title: "Atomic Weight Rcm", fileUrl: "https://drive.google.com/open?id=14ioxMdoquaQX5iMvViYvvw6pzx25oqo5", keywords: ["iit","mains","chemistry","atomic","weight","rcm"] },
                    { id: 1251, title: "Solution Master", fileUrl: "https://drive.google.com/open?id=14iqVMbotwHA6CI7M4Q1ZUvlQLGzqBCPH", keywords: ["iit","main","chemistry","solution","master"] },
                    { id: 1252, title: "Molecular Orbital Theory Atkins", fileUrl: "https://drive.google.com/open?id=14nI-glF1HBR2J5s6o0SG_d4RiQgJZS64", keywords: ["iit","main","chemistry","molecular","orbital","theory","atkins"] },
                    { id: 1253, title: "Hydrocarbon Pyp", fileUrl: "https://drive.google.com/open?id=153whnsC3oFwm1vwnUyprs2nk7nXsy7gm", keywords: ["iit","main","chemistry","hydrocarbon","pyp"] },
                    { id: 1254, title: "Atomic Structure Pp 3", fileUrl: "https://drive.google.com/open?id=158fEfy_1x_nHhnoDkFPBftHJLSljsnDO", keywords: ["iit","adv","chemistry","atomic","structure","pp3"] },
                    { id: 1255, title: "Biomolecules Pp 1", fileUrl: "https://drive.google.com/open?id=15P8jD_4fhc5yQ8t1S6gwIdpVpHVz7Gu3", keywords: ["iit","main","chemistry","biomolecules","pp1"] },
                    { id: 1256, title: "Hydrocarbon Note 2", fileUrl: "https://drive.google.com/open?id=15qP_n1S_P37Wkw0IBRSF4wOcZ6iomu3T", keywords: ["iit","main","chemistry","hydrocarbon","note2"] },
                    { id: 1257, title: "Basic Principles Of Organic Chemistry Base", fileUrl: "https://drive.google.com/open?id=166tHLNSMkYCPd_wECSEhGbiedrnalXgk", keywords: ["iit","main","chemistry","basic","principles","of","organic","chemistry","base"] },
                    { id: 1258, title: "P Block Elements Pp 3", fileUrl: "https://drive.google.com/open?id=16CUSZCbEzam3zBesT6qoPUHXeWDDRHX0", keywords: ["iit","main","chemistry","p","block","elements","pp3"] },
                    { id: 1259, title: "Solution Opt", fileUrl: "https://drive.google.com/open?id=16GpJciAsVysdnAx1e6fhcwo1Ld4a8_fI", keywords: ["iit","main","chemistry","solution","opt"] },
                    { id: 1260, title: "Polymers Coordination Compound Surface Chemistry Pp 2", fileUrl: "https://drive.google.com/open?id=16I0U1nSpcmLantC-2zeGQNBTTTk3AQaB", keywords: ["iit","main","chemistry","polymers","coordination","compound","surface","chemistry","pp2"] },
                    { id: 1261, title: "Chemical Kinetics Base", fileUrl: "https://drive.google.com/open?id=16J4CO7_fzJhjAK_XTYsfn7hM_OnuZnNL", keywords: ["iit","main","chemistry","chemical","kinetics","base"] },
                    { id: 1262, title: "Alkynes Master", fileUrl: "https://drive.google.com/open?id=16i5usuiRJ9C3LNwCc-6X6qJV95WcVMvZ", keywords: ["iit","main","chemistry","alkynes","master"] },
                    { id: 1263, title: "Stereochemistry Mab", fileUrl: "https://drive.google.com/open?id=178Jan0twqusS2fDFlEwPpKkq3paRtNuK", keywords: ["iit","main","chemistry","stereochemistry","mab"] },
                    { id: 1264, title: "Thermodynamics And Thermo Chemistry Master", fileUrl: "https://drive.google.com/open?id=17AJUh1R-svn-PnbC9zgqGYuljkQCSYDv", keywords: ["iit","mains","chemistry","thermodynamics","and","thermo","chemistry","master"] },
                    { id: 1265, title: "Solid State Atkins", fileUrl: "https://drive.google.com/open?id=17B0UJxDbwVik3lthB6Bnrb0son-x7Tmv", keywords: ["iit","main","chemistry","solid","state","atkins"] },
                    { id: 1266, title: "Surface Chemistry Master", fileUrl: "https://drive.google.com/open?id=17H72OPEX3r2oRdIC2zZrLbocIt83f_F2", keywords: ["iit","main","chemistry","surface","chemistry","master"] },
                    { id: 1267, title: "Alkaline Earth Metal Opt", fileUrl: "https://drive.google.com/open?id=17JI3o8AEW9s7GxMqtskav1p9oLpd80FV", keywords: ["iit","main","chemistry","alkaline","earth","metal","opt"] },
                    { id: 1268, title: "Biomolecules Fats", fileUrl: "https://drive.google.com/open?id=17L60qES3pq5TlEUS1yKoew5QT6NZqCBh", keywords: ["iit","main","chemistry","biomolecules","fats"] },
                    { id: 1269, title: "Structure And Properties Mab", fileUrl: "https://drive.google.com/open?id=17NVfhISM8CAYbWyf-NXzxvGIN8buCxPW", keywords: ["iit","main","chemistry","structure","and","properties","mab"] },
                    { id: 1270, title: "Aromatics Compound Pp 2", fileUrl: "https://drive.google.com/open?id=17THFltz0LZiS3U3_iPz7KrXOzbkZ6zgd", keywords: ["iit","main","chemistry","aromatics","compound","pp2"] },
                    { id: 1271, title: "Alkenes Mab", fileUrl: "https://drive.google.com/open?id=17gS7XVKYbIO1Hc3T1tbvYjd19a7l0CKe", keywords: ["iit","main","chemistry","alkenes","mab"] },
                    { id: 1272, title: "Polymers Pp 1", fileUrl: "https://drive.google.com/open?id=17jOPgzpPXtLCl3tEejYD5S0YAHdrdZfX", keywords: ["iit","main","chemistry","polymers","pp1"] },
                    { id: 1273, title: "Ionic Equilibrium Opt", fileUrl: "https://drive.google.com/open?id=17k-IfZ0vCOGjM4NyupOZzPaw1bbZm3JC", keywords: ["iit","mains","chemistry","ionic","equilibrium","opt"] },
                    { id: 1274, title: "Carbohydrates Pp 1", fileUrl: "https://drive.google.com/open?id=186JsPaFNljpCnxTu4g3hAIlVo-KJaS7C", keywords: ["iit","main","chemistry","carbohydrates","pp1"] },
                    { id: 1275, title: "Electrochemistry Base", fileUrl: "https://drive.google.com/open?id=18GLwWkNJ9g7ioE9PXiXoo9BvPYyFHZno", keywords: ["iit","main","chemistry","electrochemistry","base"] },
                    { id: 1276, title: "Solid State Base", fileUrl: "https://drive.google.com/open?id=18GsU_9ZB4lW84JgjuriprgBXH18uigPF", keywords: ["iit","adv","chemistry","solid","state","base"] },
                    { id: 1277, title: "Chemical Thermodynamics Pyp", fileUrl: "https://drive.google.com/open?id=18K3-Lo15IX41xDEQw5g6VVKI9utiBsCU", keywords: ["iit","mains","chemistry","chemical","thermodynamics","pyp"] },
                    { id: 1278, title: "Chemical Bondong Pp 6", fileUrl: "https://drive.google.com/open?id=18Kw_9HzQTZg7pQX3TLxMp0JKe0tCQG3n", keywords: ["iit","main","chemistry","chemical","bondong","pp6"] },
                    { id: 1279, title: "Zero Group Opt", fileUrl: "https://drive.google.com/open?id=18mABCNm9ZQ2i2zIB3U_nRQGds2vTGkp2", keywords: ["iit","main","chemistry","zero","group","opt"] },
                    { id: 1280, title: "Alcohol Phenol And Ethers Master", fileUrl: "https://drive.google.com/open?id=18nuDJVDxy0tcvK-t4oZCf7fjRY8n-T82", keywords: ["iit","main","chemistry","alcohol","phenol","and","ethers","master"] },
                    { id: 1281, title: "Atomic Structure And Radioactivity Rcm", fileUrl: "https://drive.google.com/open?id=18uaGeHZiAnLjj5RsmRURVzmI3zbVPIZN", keywords: ["iit","mains","chemistry","atomic","structure","and","radioactivity","rcm"] },
                    { id: 1282, title: "Periodicity Pp 1", fileUrl: "https://drive.google.com/open?id=195_Otc_xg6psNo20UcUf-o1j7WQ-g3m8", keywords: ["iit","main","chemistry","periodicity","pp1"] },
                    { id: 1283, title: "Quantitative Analysis Rcm", fileUrl: "https://drive.google.com/open?id=199wCFqm-6Yzj-vuCAbpFR5W3kENvK8XA", keywords: ["iit","main","chemistry","quantitative","analysis","rcm"] },
                    { id: 1284, title: "Atomic Weight Pp 6", fileUrl: "https://drive.google.com/open?id=19A7x8_jyur635LHlYiS1Cvd7zR5eWidh", keywords: ["iit","mains","chemistry","atomic","weight","pp6"] },
                    { id: 1285, title: "Solid State Base 1", fileUrl: "https://drive.google.com/open?id=19cTZrOm8DebI0sKfD1p1CkOY4Izu5xOs", keywords: ["iit","main","chemistry","solid","state","base1"] },
                    { id: 1286, title: "Haloalkanes And Haloarenes Pyp", fileUrl: "https://drive.google.com/open?id=1A8JazEzCpPgLuZba7F4eiuee7gFFqA8d", keywords: ["iit","adv","chemistry","haloalkanes","and","haloarenes","pyp"] },
                    { id: 1287, title: "Ionic Equilibrium Base", fileUrl: "https://drive.google.com/open?id=1AB6K-7cWhlcjEuloZgPiqsPh3gpM0eXk", keywords: ["iit","mains","chemistry","ionic","equilibrium","base"] },
                    { id: 1288, title: "P Block Opt", fileUrl: "https://drive.google.com/open?id=1AF-6oKxBulS9sAClN3y_cPeSrRFKYeXL", keywords: ["iit","main","chemistry","p","block","opt"] },
                    { id: 1289, title: "Chemical Bonding Pp 3", fileUrl: "https://drive.google.com/open?id=1ATNkp5IMn5mHe0FH7wc1IyBxPz9LwdHU", keywords: ["iit","main","chemistry","chemical","bonding","pp3"] },
                    { id: 1290, title: "States Of Matter Pyp", fileUrl: "https://drive.google.com/open?id=1A_SUJTug6-tSRwdCHJyq5o5VLnWXqIJJ", keywords: ["iit","main","chemistry","states","of","matter","pyp"] },
                    { id: 1291, title: "Acidity And Basicity Pp 1", fileUrl: "https://drive.google.com/open?id=1Ab5MggnwzfTE33EJP7UWlySD0aSfUOnt", keywords: ["iit","main","chemistry","acidity","and","basicity","pp1"] },
                    { id: 1292, title: "Chemical Kinetics Note 2", fileUrl: "https://drive.google.com/open?id=1AbnviveWPtZFfnAerWWI-bjh-2_BJRGG", keywords: ["iit","main","chemistry","chemical","kinetics","note2"] },
                    { id: 1293, title: "Electro Chemistry Pyp", fileUrl: "https://drive.google.com/open?id=1AgfhYiMmMbvJVGSOrsVJOjhoIFJUIjB-", keywords: ["iit","adv","chemistry","electro","chemistry","pyp"] },
                    { id: 1294, title: "Basic Concepts Of Chemistry Base", fileUrl: "https://drive.google.com/open?id=1ApRaOjfpzdFS3Bz3K5egappEKGYJ-35D", keywords: ["iit","mains","chemistry","basic","concepts","of","chemistry","base"] },
                    { id: 1295, title: "Solid State Master", fileUrl: "https://drive.google.com/open?id=1AqaYnEI9D0K1G805MFbgp6mChTRdT9iQ", keywords: ["iit","main","chemistry","solid","state","master"] },
                    { id: 1296, title: "Basic Concepts Of Chemistry Base", fileUrl: "https://drive.google.com/open?id=1B75wv9QXQxuyu0_SIgFO--Q4iSvK8pSw", keywords: ["iit","mains","chemistry","basic","concepts","of","chemistry","base"] },
                    { id: 1297, title: "Chemical Thermodynamics Base", fileUrl: "https://drive.google.com/open?id=1BJwrn0DebkagoIQuFTuDv4CYLsyyg6uz", keywords: ["iit","mains","chemistry","chemical","thermodynamics","base"] },
                    { id: 1298, title: "Halogens Notes", fileUrl: "https://drive.google.com/open?id=1BKn2_X-7gYCBldI8Ucv5Qy_i0ukbvTx_", keywords: ["iit","adv","chemistry","halogens","notes"] },
                    { id: 1299, title: "Chemical Thermodynamics Pp 1", fileUrl: "https://drive.google.com/open?id=1BN6HMgZQyle3ahCuN4QE30n0iYJE5rTS", keywords: ["iit","mains","chemistry","chemical","thermodynamics","pp1"] },
                    { id: 1300, title: "Aldehyde And Ketones Opt", fileUrl: "https://drive.google.com/open?id=1BcL9WeLGTiNC0nF2KCtaeZvxeYsVGxs1", keywords: ["iit","main","chemistry","aldehyde","and","ketones","opt"] },
                    { id: 1301, title: "Chemical Kinetics Opt", fileUrl: "https://drive.google.com/open?id=1BmpLAbs5H9pcYbv8rUPDaesoBZO3NjoA", keywords: ["iit","main","chemistry","chemical","kinetics","opt"] },
                    { id: 1302, title: "Cells Pp 3", fileUrl: "https://drive.google.com/open?id=1BoNmANvZ6jzu-xlkExGNm2YTbMYzcXmi", keywords: ["iit","main","chemistry","cells","pp3"] },
                    { id: 1303, title: "Equilibrium Pyp", fileUrl: "https://drive.google.com/open?id=1Bu7afb4mBizPkO_5PMdVgqTNDQQNi8vN", keywords: ["iit","mains","chemistry","equilibrium","pyp"] },
                    { id: 1304, title: "Hybridization Isomerism Pp 1", fileUrl: "https://drive.google.com/open?id=1C1BxZ0rQvvNNYDqYZUvmW_HBf9dR2Qlb", keywords: ["iit","main","chemistry","hybridization","isomerism","pp1"] },
                    { id: 1305, title: "D And F Block Elements Pyp", fileUrl: "https://drive.google.com/open?id=1C6NM_ze1_obeXQllMh5EJtrYOQMkZMlS", keywords: ["iit","main","chemistry","d","and","f","block","elements","pyp"] },
                    { id: 1306, title: "Measurement Unit Pp 8", fileUrl: "https://drive.google.com/open?id=1C9y9gr2XS2SFEZRcH9xSH4vXw8PgIMps", keywords: ["iit","mains","chemistry","measurement","unit","pp8"] },
                    { id: 1307, title: "Carbohydrates Mab 2", fileUrl: "https://drive.google.com/open?id=1CLN8XQEZCzB0ro-2gnze9RnEYJ2Bf9Az", keywords: ["iit","main","chemistry","carbohydrates","mab2"] },
                    { id: 1308, title: "P Block Elements Pyp", fileUrl: "https://drive.google.com/open?id=1CUbSTYuNJFZwb6QPaLaHkkqbVgemkY5X", keywords: ["iit","main","chemistry","p","block","elements","pyp"] },
                    { id: 1309, title: "Amino Acid Mab", fileUrl: "https://drive.google.com/open?id=1CWx45NSGgotzJEzp8SSrf83DQSZvoH8Z", keywords: ["iit","main","chemistry","amino","acid","mab"] },
                    { id: 1310, title: "Periodicity Pp 5", fileUrl: "https://drive.google.com/open?id=1CYOS1IbeBRFKWt0zdIho7TZYRxsXxyw9", keywords: ["iit","main","chemistry","periodicity","pp5"] },
                    { id: 1311, title: "Classification Of Elements And Periodicity Base", fileUrl: "https://drive.google.com/open?id=1CYjxnlr_Iprr2Bq19WrWAWqPZDgGeyTt", keywords: ["iit","main","chemistry","classification","of","elements","and","periodicity","base"] },
                    { id: 1312, title: "Ionic Equilibrium Pp 5", fileUrl: "https://drive.google.com/open?id=1CnYLktQrWU0y62qB1hQLemmgqOBCmbKh", keywords: ["iit","mains","chemistry","ionic","equilibrium","pp5"] },
                    { id: 1313, title: "Equilibrium Base", fileUrl: "https://drive.google.com/open?id=1Cp8M1rWJbGXb_sNoeIuqI_VbFNZ-Ach1", keywords: ["iit","mains","chemistry","equilibrium","base"] },
                    { id: 1314, title: "Grignard Reagent Base", fileUrl: "https://drive.google.com/open?id=1CsaMViLW4xUBUgSdgWxH-YZa4NvSSUUK", keywords: ["iit","main","chemistry","grignard","reagent","base"] },
                    { id: 1315, title: "Basic Principles Of Organic Chemistry Pyp", fileUrl: "https://drive.google.com/open?id=1Cxi_wCELDp7_yorMUPV4g8YU-EQYC052", keywords: ["iit","main","chemistry","basic","principles","of","organic","chemistry","pyp"] },
                    { id: 1316, title: "Aldehyde And Ketones Base", fileUrl: "https://drive.google.com/open?id=1D1-bn--yXp_RtYlBLXw4ixw_SY7TwoLw", keywords: ["iit","main","chemistry","aldehyde","and","ketones","base"] },
                    { id: 1317, title: "Halogenated Alkanes Opt", fileUrl: "https://drive.google.com/open?id=1D3RWeDr6YyeiZ3c8RbmTKurdqPQcZrZ5", keywords: ["iit","main","chemistry","halogenated","alkanes","opt"] },
                    { id: 1318, title: "Structure And Reaction Base", fileUrl: "https://drive.google.com/open?id=1DCfHNDOU_0bHxA-nsGjtH_fuFXBvpqsA", keywords: ["iit","main","chemistry","structure","and","reaction","base"] },
                    { id: 1319, title: "Alcohol Opt", fileUrl: "https://drive.google.com/open?id=1DFTqGbXAtnr4kC-6pzT4I1iPxaBISEcX", keywords: ["iit","main","chemistry","alcohol","opt"] },
                    { id: 1320, title: "Nuclear Chemistry Pp 1", fileUrl: "https://drive.google.com/open?id=1DNrQaBBVXhn_ENow4mxuNH3H6nP5lB4K", keywords: ["iit","main","chemistry","nuclear","chemistry","pp1"] },
                    { id: 1321, title: "Ionic Equilibrium Rcm", fileUrl: "https://drive.google.com/open?id=1DcW8BKAJQ45j3foujYoaRZHKiLbxwZei", keywords: ["iit","main","chemistry","ionic","equilibrium","rcm"] },
                    { id: 1322, title: "Molecular Weight Rcm", fileUrl: "https://drive.google.com/open?id=1Ds2UogtV_qb1epu3vxcm6I9TVod_KzaJ", keywords: ["iit","mains","chemistry","molecular","weight","rcm"] },
                    { id: 1323, title: "Environmental Chemistry Pp 2", fileUrl: "https://drive.google.com/open?id=1DuxoQ8kT4OxGRtebayK7ihwWYSHcXb1M", keywords: ["pmt","chem","environmental","chemistry","pp2"] },
                    { id: 1324, title: "Metallurgy Pp 3", fileUrl: "https://drive.google.com/open?id=1DxMXhas3c8b7l_BDpKU5c_7UQOrZ2Mgz", keywords: ["iit","main","chemistry","metallurgy","pp3"] },
                    { id: 1325, title: "Hydrocarbon Pyp", fileUrl: "https://drive.google.com/open?id=1ED_iNOF99Ve1Tcux35kipXdy10WYw9Ib", keywords: ["iit","main","chemistry","hydrocarbon","pyp"] },
                    { id: 1326, title: "Polymers Note 2", fileUrl: "https://drive.google.com/open?id=1EIiAPxNhnNPsrw1OWQ8kUpRyVIJKE8EW", keywords: ["iit","main","chemistry","polymers","note2"] },
                    { id: 1327, title: "Alkali Metal Opt", fileUrl: "https://drive.google.com/open?id=1EJ4oBsVRYpDfc00KPogizEtZJyaSXD-o", keywords: ["iit","main","chemistry","alkali","metal","opt"] },
                    { id: 1328, title: "Ionic Equilibrium Pp 4", fileUrl: "https://drive.google.com/open?id=1EKbvExDBbbD1wXMoZs4nCmxwzg9ubT0C", keywords: ["iit","mains","chemistry","ionic","equilibrium","pp4"] },
                    { id: 1329, title: "Surface Chemistry Base 1", fileUrl: "https://drive.google.com/open?id=1EOZ8rLuUe4bgq9UyM7CFPxBFCtUta6_7", keywords: ["iit","main","chemistry","surface","chemistry","base1"] },
                    { id: 1330, title: "Mole Concept Pp 1", fileUrl: "https://drive.google.com/open?id=1ElSPvsExbZqXb0Z0fthGrPyMH13663-H", keywords: ["iit","mains","chemistry","mole","concept","pp1"] },
                    { id: 1331, title: "Alkenes Master", fileUrl: "https://drive.google.com/open?id=1FASq-lTTcQWT3QXfYJqLrzZA1Hi9qV71", keywords: ["iit","main","chemistry","alkenes","master"] },
                    { id: 1332, title: "Electro Chemistry Pyp", fileUrl: "https://drive.google.com/open?id=1FDuP-baVIc3LWNRLgADtIUBw_ou7W4OH", keywords: ["iit","main","chemistry","electro","chemistry","pyp"] },
                    { id: 1333, title: "Atomic Structure Note 2", fileUrl: "https://drive.google.com/open?id=1FDz-9kQT5wLvhsyi2GUjabqMolztr6ju", keywords: ["iit","mains","chemistry","atomic","structure","note2"] },
                    { id: 1334, title: "Quantume Molecules Base", fileUrl: "https://drive.google.com/open?id=1FE5I-TgC2jkaLG0jdgeW2y4xm7gRMrfv", keywords: ["iit","main","chemistry","quantume","molecules","base"] },
                    { id: 1335, title: "Chemical Bonding Pp 2", fileUrl: "https://drive.google.com/open?id=1FJ4hoCX8frwtBS-Zfd4lNR3HXghQ_9IB", keywords: ["iit","main","chemistry","chemical","bonding","pp2"] },
                    { id: 1336, title: "Electrochemistry Base", fileUrl: "https://drive.google.com/open?id=1FdWEUMkKxaWjl99u67s3VJ9hZGdyS9rl", keywords: ["iit","main","chemistry","electrochemistry","base"] },
                    { id: 1337, title: "D And F Block Elements Pp 1", fileUrl: "https://drive.google.com/open?id=1Fi8hVy01Ih6-jDZWFxogC8NhGUT8TCQL", keywords: ["iit","main","chemistry","d","and","f","block","elements","pp1"] },
                    { id: 1338, title: "Preparation And Properties Of Compounds Fit", fileUrl: "https://drive.google.com/open?id=1FiTsqPJMVHN43-gFysMUC9VSIrPYx9_Z", keywords: ["iit","adv","chemistry","preparation","and","properties","of","compounds","fit"] },
                    { id: 1339, title: "Haloalkanes And Haloarenes Master", fileUrl: "https://drive.google.com/open?id=1FzCH3imCyzRm7h3gPNx03DYM8Uo0MTk9", keywords: ["iit","main","chemistry","haloalkanes","and","haloarenes","master"] },
                    { id: 1340, title: "Colligative Properties Rcm", fileUrl: "https://drive.google.com/open?id=1FzfiQZFuUf42fOwXIEIViKr5pGkgVECg", keywords: ["iit","main","chemistry","colligative","properties","rcm"] },
                    { id: 1341, title: "Redox Reactions Pp 1", fileUrl: "https://drive.google.com/open?id=1G-mMUyFMaS49rsmbxg6CgZcfkOQtOdLp", keywords: ["iit","main","chemistry","redox","reactions","pp1"] },
                    { id: 1342, title: "Nuclear Chemistry Note 2", fileUrl: "https://drive.google.com/open?id=1GOOfN5vd011ahTHJu0_PKrPfiE4dv1zL", keywords: ["iit","main","chemistry","nuclear","chemistry","note2"] },
                    { id: 1343, title: "Adsorption Opt", fileUrl: "https://drive.google.com/open?id=1GQXxkted-qkQS8uaMPCqiLzjHl1EkolY", keywords: ["iit","main","chemistry","adsorption","opt"] },
                    { id: 1344, title: "Periodicity Pp 4", fileUrl: "https://drive.google.com/open?id=1GXhbIouE1jdkzW7xbdgmOMTipfaN8MVB", keywords: ["iit","main","chemistry","periodicity","pp4"] },
                    { id: 1345, title: "Electrophylic Mab", fileUrl: "https://drive.google.com/open?id=1Gc9c4zY8kF8GK9Nzgjvxf-Cu9QRcW-dr", keywords: ["iit","main","chemistry","electrophylic","mab"] },
                    { id: 1346, title: "Carbohydrates Mab", fileUrl: "https://drive.google.com/open?id=1GvQpt3-buY9CC9F3_HgOTjhal-MCSOT6", keywords: ["iit","main","chemistry","carbohydrates","mab"] },
                    { id: 1347, title: "Atomic Structure Pp 5", fileUrl: "https://drive.google.com/open?id=1H85cwm9CcP-hX23U8vUZyOkMDLwbnfij", keywords: ["iit","adv","chemistry","atomic","structure","pp5"] },
                    { id: 1348, title: "Gaseous State Pp 2", fileUrl: "https://drive.google.com/open?id=1HRtN0FrgUlZJg9o915ft4qXxiN9u-ktb", keywords: ["iit","mains","chemistry","gaseous","state","pp2"] },
                    { id: 1349, title: "Nitrogen And Oxygen Note", fileUrl: "https://drive.google.com/open?id=1HcRz0USiIny_0zq32E48H44v0ug5Ixg3", keywords: ["iit","adv","chemistry","nitrogen","and","oxygen","note"] },
                    { id: 1350, title: "Alkanes Base", fileUrl: "https://drive.google.com/open?id=1HgVcuLu7taYzmwDLBpRsZMo0JRMHkXAz", keywords: ["iit","main","chemistry","alkanes","base"] },
                    { id: 1351, title: "Compound Of Non Metal Pp 1", fileUrl: "https://drive.google.com/open?id=1Hz2UqS6GCAIL0vH1Kc0VUr5rV1-LqVWd", keywords: ["iit","main","chemistry","compound","of","non","metal","pp1"] },
                    { id: 1352, title: "Chemical Kinetics Pp 4", fileUrl: "https://drive.google.com/open?id=1I1M62d-kvE_y7nIFO1b8Y2sZ-ExhD9oZ", keywords: ["iit","main","chemistry","chemical","kinetics","pp4"] },
                    { id: 1353, title: "Isolation Of Metals Pyp", fileUrl: "https://drive.google.com/open?id=1IMc1VqRAkLfYxEjxmsLL2Hh5F7XGz2_m", keywords: ["iit","main","chemistry","isolation","of","metals","pyp"] },
                    { id: 1354, title: "Chemical Bonding Opt", fileUrl: "https://drive.google.com/open?id=1I_F6RCbgg7b_qouhStjWxVMKXMYY5QM5", keywords: ["iit","main","chemistry","chemical","bonding","opt"] },
                    { id: 1355, title: "Solution And Colligative Master", fileUrl: "https://drive.google.com/open?id=1IjLDmzux22FzznS7gcrPPiWO2D2pUHfk", keywords: ["iit","main","chemistry","solution","and","colligative","master"] },
                    { id: 1356, title: "Isolation Of Metals Note 2", fileUrl: "https://drive.google.com/open?id=1IlATMFJsy3oAhAM-JOV26D_7htDp-_mA", keywords: ["iit","main","chemistry","isolation","of","metals","note2"] },
                    { id: 1357, title: "Carbohydrates Master", fileUrl: "https://drive.google.com/open?id=1It46FoFKicD26Iwk_9g1BPx5QqKoIY0i", keywords: ["iit","adv","chemistry","carbohydrates","master"] },
                    { id: 1358, title: "Surface Chemistry Pp 2", fileUrl: "https://drive.google.com/open?id=1Iw3ZIB8tuqqvQL-XZpWARJNct4pOVDeJ", keywords: ["iit","main","chemistry","surface","chemistry","pp2"] },
                    { id: 1359, title: "Wate And Hydrogen Peroxide Pp 1", fileUrl: "https://drive.google.com/open?id=1IyTt7m23CAEjNpQLqJErh06hVFJe0W1u", keywords: ["iit","main","chemistry","wate","and","hydrogen","peroxide","pp1"] },
                    { id: 1360, title: "Mole Concept Rcm", fileUrl: "https://drive.google.com/open?id=1J6SvyXg_nBbLNpV6MjIlr6N0w6xTF8o5", keywords: ["iit","mains","chemistry","mole","concept","rcm"] },
                    { id: 1361, title: "Volumentric Analysis Pp 6", fileUrl: "https://drive.google.com/open?id=1JEL60NIzvDxFmh20eoQZAKMm6vMmeDoT", keywords: ["iit","mains","chemistry","volumentric","analysis","pp6"] },
                    { id: 1362, title: "Chemical Kinetics Pp 6", fileUrl: "https://drive.google.com/open?id=1JFcQ_zkhauoCpq_ula11YxllWde0QA8O", keywords: ["iit","main","chemistry","chemical","kinetics","pp6"] },
                    { id: 1363, title: "Solid State Pp 2", fileUrl: "https://drive.google.com/open?id=1JHCyuQVXGju9XigHjaEk5ecHOm88Rc_H", keywords: ["iit","main","chemistry","solid","state","pp2"] },
                    { id: 1364, title: "Inorganic Chemistry Pp 1", fileUrl: "https://drive.google.com/open?id=1JeyP46iGw-3ew7pQIIFP6Tq5kPinLXxW", keywords: ["iit","main","chemistry","inorganic","chemistry","pp1"] },
                    { id: 1365, title: "States Of Matter Note 2", fileUrl: "https://drive.google.com/open?id=1JkyCEenfqUTc8Tl1k26ibL2ZCbDKuo1M", keywords: ["iit","main","chemistry","states","of","matter","note2"] },
                    { id: 1366, title: "Organic Compound Containing Halogen Note 2", fileUrl: "https://drive.google.com/open?id=1JmyGIv5NHnKmpUFCpzpOh5hdu75rwq1-", keywords: ["iit","main","chemistry","organic","compound","containing","halogen","note2"] },
                    { id: 1367, title: "Equilibrium Pp 3", fileUrl: "https://drive.google.com/open?id=1JzoLJBoLrvP2xNmQTzMRpsEmtc9bOApV", keywords: ["iit","mains","chemistry","equilibrium","pp3"] },
                    { id: 1368, title: "Atomic Structure Pyp", fileUrl: "https://drive.google.com/open?id=1K-n7PoXq2phB7GSmx0DfgTcMRhFNb3dD", keywords: ["iit","mains","chemistry","atomic","structure","pyp"] },
                    { id: 1369, title: "Molecular Weight Pp 3", fileUrl: "https://drive.google.com/open?id=1K4_hL58JeAaMc0ppDV4pWC5zFdbz2QeQ", keywords: ["iit","mains","chemistry","molecular","weight","pp3"] },
                    { id: 1370, title: "Chemical Thermodynamics Pp 3", fileUrl: "https://drive.google.com/open?id=1KAmO6E6GP7yAitgBHLWKM81IMioR6tJd", keywords: ["iit","mains","chemistry","chemical","thermodynamics","pp3"] },
                    { id: 1371, title: "Chemical Kinetics Base", fileUrl: "https://drive.google.com/open?id=1KIcIL5PvVbfLPNfZNDcGG7acslf2nrzJ", keywords: ["iit","main","chemistry","chemical","kinetics","base"] },
                    { id: 1372, title: "Chemical Thermodynamics Rcm", fileUrl: "https://drive.google.com/open?id=1KJIBydWc3I5BdcVPwfJHWBS72l7g13I7", keywords: ["iit","mains","chemistry","chemical","thermodynamics","rcm"] },
                    { id: 1373, title: "Volumentric Analysis Opt 2", fileUrl: "https://drive.google.com/open?id=1KVKYp5OMLrYl5_jno1ZNi9RjTGEYyNif", keywords: ["iit","mains","chemistry","volumentric","analysis","opt2"] },
                    { id: 1374, title: "Aldehyde And Ketones Note 1", fileUrl: "https://drive.google.com/open?id=1KYWYPE0fmHOElSWZY09ge2IiiASAfIgZ", keywords: ["iit","adv","chemistry","aldehyde","and","ketones","note1"] },
                    { id: 1375, title: "Mole Concept Pp 4", fileUrl: "https://drive.google.com/open?id=1Kn6SLNz2wzK5Nhwyfdgee0FEhvxFZZom", keywords: ["iit","mains","chemistry","mole","concept","pp4"] },
                    { id: 1376, title: "Concept Of Atom And Molecules Note 1", fileUrl: "https://drive.google.com/open?id=1KnB9Z_Y9tg_Cdh2yuURfpGF6_WnklgX3", keywords: ["iit","mains","chemistry","concept","of","atom","and","molecules","note1"] },
                    { id: 1377, title: "S Block Elements Opt", fileUrl: "https://drive.google.com/open?id=1L1uzTG2ssmUQzCTCYVmOZ2_KtCNw9XQI", keywords: ["iit","main","chemistry","s","block","elements","opt"] },
                    { id: 1378, title: "Molecular Symmetry Atkins", fileUrl: "https://drive.google.com/open?id=1L9gUot9rhofrNuB_eVJXOJZVyzg_ZvmW", keywords: ["iit","main","chemistry","molecular","symmetry","atkins"] },
                    { id: 1379, title: "Basic Concepts Of Chemistry Master 2", fileUrl: "https://drive.google.com/open?id=1LOgnLJcNo7wO7EfF6MMFF-OP7hm6Kver", keywords: ["iit","mains","chemistry","basic","concepts","of","chemistry","master2"] },
                    { id: 1380, title: "Ether Opt", fileUrl: "https://drive.google.com/open?id=1LauTjNEO6nsh6XwkO9gWPEOxIsgUYdkR", keywords: ["iit","main","chemistry","ether","opt"] },
                    { id: 1381, title: "P Block Elements Master", fileUrl: "https://drive.google.com/open?id=1LbkgHQypCyYckEPTACgRQBhPDsJ7i29X", keywords: ["iit","main","chemistry","p","block","elements","master"] },
                    { id: 1382, title: "Molecular Structure Atkins", fileUrl: "https://drive.google.com/open?id=1LcMFLpve3qB_kO-vL0VxUXbuFSmqNlWg", keywords: ["iit","main","chemistry","molecular","structure","atkins"] },
                    { id: 1383, title: "Non Metal Pp 1", fileUrl: "https://drive.google.com/open?id=1LnwVs2fj11tZc_kIxtTh1_JJEqFkewae", keywords: ["iit","main","chemistry","non","metal","pp1"] },
                    { id: 1384, title: "Nuclear Chemistry Base", fileUrl: "https://drive.google.com/open?id=1Lo6c28YlOuBQnamgMQ6sXKp-lryitIN_", keywords: ["iit","main","chemistry","nuclear","chemistry","base"] },
                    { id: 1385, title: "Environmental Chemistry Master", fileUrl: "https://drive.google.com/open?id=1LqvQDRFU-Bj-GgVmLz_gyzgZtj_2InE7", keywords: ["iit","main","chemistry","environmental","chemistry","master"] },
                    { id: 1386, title: "Polymers Opt", fileUrl: "https://drive.google.com/open?id=1Lr9XDHrwM9qdf7BxMFRf1lzP_CG9x9gU", keywords: ["iit","main","chemistry","polymers","opt"] },
                    { id: 1387, title: "Purification And Characterisation Of Organic Compounds Note 2", fileUrl: "https://drive.google.com/open?id=1LwxnvXn9L4pW0_w48LT6F_rh-8MkX6OR", keywords: ["iit","main","chemistry","purification","and","characterisation","of","organic","compounds","note2"] },
                    { id: 1388, title: "Redox Master", fileUrl: "https://drive.google.com/open?id=1M-2IIlbIRsZkKGF-UTjjunk4ShZXT_wG", keywords: ["iit","main","chemistry","redox","master"] },
                    { id: 1389, title: "Carbonyl Compound Pp 1", fileUrl: "https://drive.google.com/open?id=1M5_VcXlN8b2s6EfVm_QkxDEJHRtHvv06", keywords: ["iit","main","chemistry","carbonyl","compound","pp1"] },
                    { id: 1390, title: "Carboxylic Acids Mab 2", fileUrl: "https://drive.google.com/open?id=1M6fjuEkeJFFkrzNXhdqI5Jj_CX_N9isq", keywords: ["iit","main","chemistry","carboxylic","acids","mab2"] },
                    { id: 1391, title: "Alkanes Note 1", fileUrl: "https://drive.google.com/open?id=1MDlZTAqMHjVAVQ52TTyW-MOdt9HVNC3z", keywords: ["iit","main","chemistry","alkanes","note1"] },
                    { id: 1392, title: "Ores And Metallurgy Base", fileUrl: "https://drive.google.com/open?id=1Me1U1EvlRnZ04Vvz3EWhIq08KPF0b5Pe", keywords: ["iit","adv","chemistry","ores","and","metallurgy","base"] },
                    { id: 1393, title: "S Block Elements Pyp", fileUrl: "https://drive.google.com/open?id=1Mvg5BveL_QOTIAY7ysggW1GkTUh6v5Me", keywords: ["iit","main","chemistry","s","block","elements","pyp"] },
                    { id: 1394, title: "Solid State Base", fileUrl: "https://drive.google.com/open?id=1NBUdFa_In8OB4tNqiYTlBhI04tAOxO4m", keywords: ["iit","main","chemistry","solid","state","base"] },
                    { id: 1395, title: "Chemistry In Everyday Life Master", fileUrl: "https://drive.google.com/open?id=1NEshEROSYQlJ6gZMy4hZkAguWlslB0j3", keywords: ["iit","main","chemistry","chemistry","in","everyday","life","master"] },
                    { id: 1396, title: "Phenol Pp 1", fileUrl: "https://drive.google.com/open?id=1NHQ2SmMJBCsmksxZo828nuBBFUPYjBxo", keywords: ["iit","main","chemistry","phenol","pp1"] },
                    { id: 1397, title: "Atomic Structure Pyp", fileUrl: "https://drive.google.com/open?id=1NMfraMg0QgMJF6RJv5wxw9k3TDe1xAMu", keywords: ["iit","adv","chemistry","atomic","structure","pyp"] },
                    { id: 1398, title: "Solution Pyp", fileUrl: "https://drive.google.com/open?id=1NZYiA1Y47TanyONLenHNqUddMDMsRxCh", keywords: ["iit","main","chemistry","solution","pyp"] },
                    { id: 1399, title: "Methan Mab", fileUrl: "https://drive.google.com/open?id=1NogCmOq_e-QvQK6P4iClJJF8YdngrjVm", keywords: ["iit","main","chemistry","methan","mab"] },
                ]
            },
            {
                categoryName: "Mathematics",
                subjectForDisplay: "IIT-JEE Mathematics",
                books: [
                    { id: 1400, title: "Determinants Tp 3", fileUrl: "https://drive.google.com/open?id=1-FxbrG_PkYHUCs-NRhU6sWaUUvc6mXZj", keywords: ["iit","math","determinants","tp3"] },
                    { id: 1401, title: "Permutations And Combinations Tp 4", fileUrl: "https://drive.google.com/open?id=1-TN6bAUtPuNwvH-Xyd8IOtdAJNt3Jpwv", keywords: ["iit","math","permutations","and","combinations","tp4"] },
                    { id: 1402, title: "Circle Base Advanced", fileUrl: "https://drive.google.com/open?id=1-pda_qsnsgz8K1z-x6vD1RLt7DnnJJGg", keywords: ["iit","math","circle","base","advanced"] },
                    { id: 1403, title: "Tangent And Normal Base", fileUrl: "https://drive.google.com/open?id=1-sM_M_JTSUHL0YApiaH-CpGZPrxMENyv", keywords: ["iit","math","tangent","and","normal","base"] },
                    { id: 1404, title: "Exponent And Logrithm Se 1", fileUrl: "https://drive.google.com/open?id=10KtbU90QttL6Fp-7ZartwlBwetF4QUr5", keywords: ["iit","math","exponent","and","logrithm","se1"] },
                    { id: 1405, title: "Probability Tp 1", fileUrl: "https://drive.google.com/open?id=10Vogm2QMk-AlhQL9XBWEcYHrZjtaoNdR", keywords: ["iit","math","probability","tp1"] },
                    { id: 1406, title: "Vector Pyp", fileUrl: "https://drive.google.com/open?id=10fi79XWVyKcH1Bf8vrywlUNNMQMZMzfh", keywords: ["iit","math","vector","pyp"] },
                    { id: 1407, title: "Techniques Of Integration Ref", fileUrl: "https://drive.google.com/open?id=10lnnFIyumOIeehH7waNEiVe1heGz5C0l", keywords: ["iit","math","techniques","of","integration","ref"] },
                    { id: 1408, title: "Probability Tp 2", fileUrl: "https://drive.google.com/open?id=10q2RE_gpJO5Gi7IuspPSV-qHXPstpjnz", keywords: ["iit","math","probability","tp2"] },
                    { id: 1409, title: "Vector Ref", fileUrl: "https://drive.google.com/open?id=110WuLMPSLp0_sNLv25hYEnYNjIb8qjrg", keywords: ["iit","math","vector","ref"] },
                    { id: 1410, title: "Ellipse Tp 2", fileUrl: "https://drive.google.com/open?id=115zrJIEX-5a3n5f128nYP9QlaeQ8cbzO", keywords: ["iit","math","ellipse","tp2"] },
                    { id: 1411, title: "Hyperbola Formula", fileUrl: "https://drive.google.com/open?id=11CbkNVEecKQfxX2JrMs04CjHv_Y6Jivg", keywords: ["iit","math","hyperbola","formula"] },
                    { id: 1412, title: "Application Of Derivatives Pyp", fileUrl: "https://drive.google.com/open?id=11pDDkn3A9jhzuXs9LwxQXhKiX8KCOwr4", keywords: ["iit","math","application","of","derivatives","pyp"] },
                    { id: 1413, title: "Differentiation Formula", fileUrl: "https://drive.google.com/open?id=123MdkK07Bqk7_o_ATGVBr6QxpaAnv9HD", keywords: ["iit","math","differentiation","formula"] },
                    { id: 1414, title: "Pair Of Straight Line Pp 2", fileUrl: "https://drive.google.com/open?id=12AsShNKOJ9B0n31o0sMMHOYYzDaQ7hRI", keywords: ["iit","math","pair","of","straight","line","pp2"] },
                    { id: 1415, title: "Limit And Continuity Differentiability Tp 3", fileUrl: "https://drive.google.com/open?id=12FESkpBLl3o2jA1nA-XcE5L9vVjjF5KL", keywords: ["iit","math","limit","and","continuity","differentiability","tp3"] },
                    { id: 1416, title: "Set Relations Pp 1", fileUrl: "https://drive.google.com/open?id=12FtXa6OVGkaNmveBqFH6DvJJUiRYqotl", keywords: ["iit","math","set","relations","pp1"] },
                    { id: 1417, title: "3 Dimensional Geometry Base", fileUrl: "https://drive.google.com/open?id=12OPAt0pCl5YT5sLYZXAwC6EImqjlYf9a", keywords: ["iit","math","3","dimensional","geometry","base"] },
                    { id: 1418, title: "Tangent And Normal Tp 1", fileUrl: "https://drive.google.com/open?id=12SRnsNcW-TGNp0JmucE4W57XwsQ0nFZg", keywords: ["iit","math","tangent","and","normal","tp1"] },
                    { id: 1419, title: "Matrices And Determinants Base", fileUrl: "https://drive.google.com/open?id=12Sy3dZFf1_a5Tr9IKt9_SAXSgLwUTUO3", keywords: ["iit","math","matrices","and","determinants","base"] },
                    { id: 1420, title: "Definite Integral Pp 1", fileUrl: "https://drive.google.com/open?id=12ftTxW5xVUVj7kqHeFO4_6D9BmWXKAs0", keywords: ["iit","math","definite","integral","pp1"] },
                    { id: 1421, title: "Hyperbola Base", fileUrl: "https://drive.google.com/open?id=134vz1qFd_BGQSsv7boNzbPGsU15qZvY1", keywords: ["iit","math","hyperbola","base"] },
                    { id: 1422, title: "Limit And Continuity Differentiability Pp 1", fileUrl: "https://drive.google.com/open?id=13F3GfZSHuX-M50XamhNC0jAy9CUzqetS", keywords: ["iit","math","limit","and","continuity","differentiability","pp1"] },
                    { id: 1423, title: "Exponent And Logrithm Pp 1", fileUrl: "https://drive.google.com/open?id=13LaUlXbGHb2j2ux0sVeAyEupOYMkkYzL", keywords: ["iit","math","exponent","and","logrithm","pp1"] },
                    { id: 1424, title: "Permutations And Combinations Tp 3", fileUrl: "https://drive.google.com/open?id=13Xa9Q-E23r5GOBmwzEA0-0TlKCkvcooY", keywords: ["iit","math","permutations","and","combinations","tp3"] },
                    { id: 1425, title: "Infinite Sequence Series Base", fileUrl: "https://drive.google.com/open?id=13bBm_oTKQUdRxzQEQqXctU18nI08JeWr", keywords: ["iit","math","infinite","sequence","series","base"] },
                    { id: 1426, title: "Permutations And Combinations Formula", fileUrl: "https://drive.google.com/open?id=13xdr5Gl1CgIWFjqmGDoqGdn7pgD06cti", keywords: ["iit","math","permutations","and","combinations","formula"] },
                    { id: 1427, title: "Complex Numbers Formula", fileUrl: "https://drive.google.com/open?id=14DlGtx_nCMJLVChyiqVGxr70Tbji8Rpq", keywords: ["iit","math","complex","numbers","formula"] },
                    { id: 1428, title: "Straight Line Base", fileUrl: "https://drive.google.com/open?id=14EwmZL4aCyiYT2oQRmBAmgJYhaDM2FNT", keywords: ["iit","math","straight","line","base"] },
                    { id: 1429, title: "Hyperbola Master", fileUrl: "https://drive.google.com/open?id=14HeK17BdBlHmvGRXCJnH6Me_n8J-xduz", keywords: ["iit","math","hyperbola","master"] },
                    { id: 1430, title: "Definite Integral Note", fileUrl: "https://drive.google.com/open?id=14Vg0KAJeCkeXHHoG7FeYhM38ILVTZ7tC", keywords: ["iit","math","definite","integral","note"] },
                    { id: 1431, title: "Properties Of Triangle Pyp", fileUrl: "https://drive.google.com/open?id=14WbBpQf9H101ATif5OinBRJF70eoupzu", keywords: ["iit","math","properties","of","triangle","pyp"] },
                    { id: 1432, title: "Set Relations Functions Se 1", fileUrl: "https://drive.google.com/open?id=14io9j94kd7ms5Dvo1xv8_Fz6_iBItL6c", keywords: ["iit","math","set","relations","functions","se1"] },
                    { id: 1433, title: "Area Under Curve Tp 3", fileUrl: "https://drive.google.com/open?id=151vpoOhwc04GvE5YQJkRzEjYohwrHovw", keywords: ["iit","math","area","under","curve","tp3"] },
                    { id: 1434, title: "Definite Integral Se 1", fileUrl: "https://drive.google.com/open?id=159fa5quyJvgUDt-nRsk3bbdEA9Pom910", keywords: ["iit","math","definite","integral","se1"] },
                    { id: 1435, title: "Quadratics Equation Base Advanced", fileUrl: "https://drive.google.com/open?id=15CnVdRHE0B4L6pRrw6MgN8-Omf8swvpU", keywords: ["iit","math","quadratics","equation","base","advanced"] },
                    { id: 1436, title: "Further Application Of Integrals Ref", fileUrl: "https://drive.google.com/open?id=15kH18BNthmnPsAkJ08ij5WTnpvL3cOyr", keywords: ["iit","math","further","application","of","integrals","ref"] },
                    { id: 1437, title: "Hyperbola Pp 1", fileUrl: "https://drive.google.com/open?id=15nORbmK5v7vCMe7oQhMZ9MKWsXluL2Ss", keywords: ["iit","math","hyperbola","pp1"] },
                    { id: 1438, title: "Complex Numbers Tp 2", fileUrl: "https://drive.google.com/open?id=15oprvDkFxXRx0OlW6LOGH1cjbtp4glg3", keywords: ["iit","math","complex","numbers","tp2"] },
                    { id: 1439, title: "Circle Base", fileUrl: "https://drive.google.com/open?id=166LOxuLc8zL_8qZeork1ZSeFn5Jd_VI7", keywords: ["iit","math","circle","base"] },
                    { id: 1440, title: "Matrices Formula", fileUrl: "https://drive.google.com/open?id=16BTWwGm3Rxv4A_D52qIsthHsOgbftJCP", keywords: ["iit","math","matrices","formula"] },
                    { id: 1441, title: "Differential Equations Master", fileUrl: "https://drive.google.com/open?id=16FBMrFPGw4f5izKfnqv28ILmjbUrE7F6", keywords: ["iit","math","differential","equations","master"] },
                    { id: 1442, title: "Equation Note", fileUrl: "https://drive.google.com/open?id=16XCkjqeo8dvpjx1djZxT07FdNNU8DXRK", keywords: ["iit","math","equation","note"] },
                    { id: 1443, title: "Probability Tp 4", fileUrl: "https://drive.google.com/open?id=16tXuQQ099lpZxAmwvdplJTj1-vMNuhsn", keywords: ["iit","math","probability","tp4"] },
                    { id: 1444, title: "Matrices And Determinants Pp 2", fileUrl: "https://drive.google.com/open?id=16xnF6yNACG_GkHBBzu4g6vkvT6Nuj5tK", keywords: ["iit","math","matrices","and","determinants","pp2"] },
                    { id: 1445, title: "Mathematical Reasoning Statistics Base", fileUrl: "https://drive.google.com/open?id=178MGsT12DXl2v2-W8o4sK-TxIqJmPKm1", keywords: ["iit","math","mathematical","reasoning","statistics","base"] },
                    { id: 1446, title: "Cartesian Coordinate Pp 1", fileUrl: "https://drive.google.com/open?id=17Rf5J1lQi6ft_KvT-eWpYjXkok_y9xJr", keywords: ["iit","math","cartesian","coordinate","pp1"] },
                    { id: 1447, title: "Inverse Trigonometric Function Tp 1", fileUrl: "https://drive.google.com/open?id=17XkTkLJ6XzFcbHNqKXOyicwCXcUEDAuK", keywords: ["iit","math","inverse","trigonometric","function","tp1"] },
                    { id: 1448, title: "Matrices And Determinants Pp 1", fileUrl: "https://drive.google.com/open?id=17jmlSLPNjYJ59cOs8VXebrHlXd0BVVem", keywords: ["iit","math","matrices","and","determinants","pp1"] },
                    { id: 1449, title: "Quadratics Equation Tp 3", fileUrl: "https://drive.google.com/open?id=18CvP7tbVJiPwngqdtCK9SBl4JM-D_rCG", keywords: ["iit","math","quadratics","equation","tp3"] },
                    { id: 1450, title: "Application Of Derivatives Pp 1", fileUrl: "https://drive.google.com/open?id=18DjF6uwut-B3iYksMV_poL8ptwNG4Gid", keywords: ["iit","math","application","of","derivatives","pp1"] },
                    { id: 1451, title: "Functions Master", fileUrl: "https://drive.google.com/open?id=18IEvADrq76JVXXBJ8ZytVZxxpS3fV7Zk", keywords: ["iit","math","functions","master"] },
                    { id: 1452, title: "Vector Master", fileUrl: "https://drive.google.com/open?id=18NCZ8D90br3Tl4CD8wfiHdehkDCazFTW", keywords: ["iit","math","vector","master"] },
                    { id: 1453, title: "Hyperbola Note", fileUrl: "https://drive.google.com/open?id=18epPZg63OsR-6ZWXmmqRjKxu1Rla1hiT", keywords: ["iit","math","hyperbola","note"] },
                    { id: 1454, title: "Limit And Continuity Differentiability Formula", fileUrl: "https://drive.google.com/open?id=18ezWojDabhUqJhR3T_pp1ZOpFK1ys52h", keywords: ["iit","math","limit","and","continuity","differentiability","formula"] },
                    { id: 1455, title: "Trigonometric Eph Pp 2", fileUrl: "https://drive.google.com/open?id=18jRcwS_MgmFa8gzi5WoNuy6QaRx2UkTY", keywords: ["iit","math","trigonometric","eph","pp2"] },
                    { id: 1456, title: "Inverse Trigonometric Functions Tp 3", fileUrl: "https://drive.google.com/open?id=191YSIMxTj08DKAzq942ruB5gVwk4aAWm", keywords: ["iit","math","inverse","trigonometric","functions","tp3"] },
                    { id: 1457, title: "Indefinite Integration Pp 1", fileUrl: "https://drive.google.com/open?id=193cnW8RZu9NlQaJkR8KZxFNhyZbEDcfG", keywords: ["iit","math","indefinite","integration","pp1"] },
                    { id: 1458, title: "Logrithm Pp 1", fileUrl: "https://drive.google.com/open?id=19cNOXdZBbZeLtBBG_GYl6QmGm-2yrtqE", keywords: ["iit","math","logrithm","pp1"] },
                    { id: 1459, title: "Binomial Theorem Master", fileUrl: "https://drive.google.com/open?id=1AFdi6iwb8t92YPF7goHWrC9It9mjQrzT", keywords: ["iit","math","binomial","theorem","master"] },
                    { id: 1460, title: "3 Dimensional Geometry Base Advanced", fileUrl: "https://drive.google.com/open?id=1AWgapk0xBqgsGN54H6zH54X5s6WKfzI8", keywords: ["iit","math","3","dimensional","geometry","base","advanced"] },
                    { id: 1461, title: "Logarithmic Function Tp 1", fileUrl: "https://drive.google.com/open?id=1AZOOWTQKxAi8ZPU_go8KaLvG8JgVCygO", keywords: ["iit","math","logarithmic","function","tp1"] },
                    { id: 1462, title: "Vector Base", fileUrl: "https://drive.google.com/open?id=1AaciM3MxfLZBLUhJ_pjE6LIY6RO5QHNw", keywords: ["iit","math","vector","base"] },
                    { id: 1463, title: "Parabola Tp 2", fileUrl: "https://drive.google.com/open?id=1Ah-kyhsU3oqp4dekosJoSj1VsPzc6DeN", keywords: ["iit","math","parabola","tp2"] },
                    { id: 1464, title: "Quadratics Equation Tp 4", fileUrl: "https://drive.google.com/open?id=1B1s_iGZEbzk25pTuIoMThUcg1ysjJFCT", keywords: ["iit","math","quadratics","equation","tp4"] },
                    { id: 1465, title: "Permutations And Combinations Tp 1", fileUrl: "https://drive.google.com/open?id=1B7m_wC6mmTYIiC3fzPsHJbwrjv2d8Ldp", keywords: ["iit","math","permutations","and","combinations","tp1"] },
                    { id: 1466, title: "Probability Note", fileUrl: "https://drive.google.com/open?id=1BVIsYAiyNv6e90MV6aXYrTFM8g9j1V4l", keywords: ["iit","math","probability","note"] },
                    { id: 1467, title: "Solution Of Triangle Base Advanced", fileUrl: "https://drive.google.com/open?id=1BgjvlUkFIDuHmCvymlCHnCl7ZoA9mXQO", keywords: ["iit","math","solution","of","triangle","base","advanced"] },
                    { id: 1468, title: "3 Dimensional Geometry Tp 1", fileUrl: "https://drive.google.com/open?id=1Br8N5lj9umdpqq3AJWtjYizXrLEH86eS", keywords: ["iit","math","3","dimensional","geometry","tp1"] },
                    { id: 1469, title: "Integral Calculus Pt 1", fileUrl: "https://drive.google.com/open?id=1C-0I7To4bgqMpd0FjuJMOI_gEn3d6mh5", keywords: ["iit","math","integral","calculus","pt1"] },
                    { id: 1470, title: "Str Line And Pair Of Straight Line Pyp", fileUrl: "https://drive.google.com/open?id=1C-LJaUfiQ5PLmOfi-oz08MxqeWJDX46O", keywords: ["iit","math","str","line","and","pair","of","straight","line","pyp"] },
                    { id: 1471, title: "Differential Equations Note", fileUrl: "https://drive.google.com/open?id=1C43DO1Zm2zbWYqJPcaIl7gcMQZteQETF", keywords: ["iit","math","differential","equations","note"] },
                    { id: 1472, title: "Parabola Tp 1", fileUrl: "https://drive.google.com/open?id=1C4B8EtHmU5N_XThMv23u9JqM7WiM0rEA", keywords: ["iit","math","parabola","tp1"] },
                    { id: 1473, title: "Monotonocity Base", fileUrl: "https://drive.google.com/open?id=1CEvPCDUbcxixoiviU3dd6CGGh0KNYBS5", keywords: ["iit","math","monotonocity","base"] },
                    { id: 1474, title: "Complex Numbers Pyp", fileUrl: "https://drive.google.com/open?id=1CGusAeT-JlmcS19uT6zne_maqigvPjEG", keywords: ["iit","math","complex","numbers","pyp"] },
                    { id: 1475, title: "Statitics Formula", fileUrl: "https://drive.google.com/open?id=1CPZPr0RZ5qKHXXnJDPO_FSuoFgkovUPU", keywords: ["iit","math","statitics","formula"] },
                    { id: 1476, title: "Application Of Derivatives Master", fileUrl: "https://drive.google.com/open?id=1DCb3kv0Nb22tvVEvBXzI5BiM5QIZujEQ", keywords: ["iit","math","application","of","derivatives","master"] },
                    { id: 1477, title: "Statitics Master", fileUrl: "https://drive.google.com/open?id=1DSqebVUW2zU-2jFEhSkcgVhf8RzlxM8j", keywords: ["iit","math","statitics","master"] },
                    { id: 1478, title: "Sequence And Series Master", fileUrl: "https://drive.google.com/open?id=1DXz6gWAJpkg1IsUqAamTO77xL6c9r30i", keywords: ["iit","math","sequence","and","series","master"] },
                    { id: 1479, title: "Maxima And Minima Tp 1", fileUrl: "https://drive.google.com/open?id=1DwZjORlTe8brUX5rSRVXvB0yCgk8MfZx", keywords: ["iit","math","maxima","and","minima","tp1"] },
                    { id: 1480, title: "Cartesian Coordinate Base", fileUrl: "https://drive.google.com/open?id=1E3H9QGjNZnzNytGaQnoZpkNWZPTWvEAR", keywords: ["iit","math","cartesian","coordinate","base"] },
                    { id: 1481, title: "Ration And Identity Note", fileUrl: "https://drive.google.com/open?id=1ETVmGxn9WRsx5IqUMBfjhwWnau7uE7tv", keywords: ["iit","math","ration","and","identity","note"] },
                    { id: 1482, title: "Properties Of Triangle Formula", fileUrl: "https://drive.google.com/open?id=1EUvD0OMvKfvoMW5T4JA1x8T3Cxw_9VOH", keywords: ["iit","math","properties","of","triangle","formula"] },
                    { id: 1483, title: "Parabola Master", fileUrl: "https://drive.google.com/open?id=1Ea1lkJTtjrCWy9CxGCrDN-2kplEuWNWV", keywords: ["iit","math","parabola","master"] },
                    { id: 1484, title: "Conis Section Pyp", fileUrl: "https://drive.google.com/open?id=1Ecp0YrQP3hb9FFt7Lkoy-t3i4btAD8kl", keywords: ["iit","math","conis","section","pyp"] },
                    { id: 1485, title: "Indefinite Integration Pyp", fileUrl: "https://drive.google.com/open?id=1EhTekZknkjFPIxDNKHF63USEjCEpT-Fn", keywords: ["iit","math","indefinite","integration","pyp"] },
                    { id: 1486, title: "Probability Base", fileUrl: "https://drive.google.com/open?id=1F9WTMx-033w1EG1atrYbeYmuxzsd4bdM", keywords: ["iit","math","probability","base"] },
                    { id: 1487, title: "Application Of Derivatives Pp 2", fileUrl: "https://drive.google.com/open?id=1FKp1UDnZcV5Cs_hW6gO2kfieRfQKDVj7", keywords: ["iit","math","application","of","derivatives","pp2"] },
                    { id: 1488, title: "Ration And Identity Base", fileUrl: "https://drive.google.com/open?id=1FOt0ZduVH4tm8q4jqyfBTRpsmVDZUHX1", keywords: ["iit","math","ration","and","identity","base"] },
                    { id: 1489, title: "Complex Numbers Pp 2", fileUrl: "https://drive.google.com/open?id=1FPQzvKVwr-TlTkbQ8JZveNd8Ya20BMhr", keywords: ["iit","math","complex","numbers","pp2"] },
                    { id: 1490, title: "Infinite Sequence Series Note", fileUrl: "https://drive.google.com/open?id=1FTIEY4LKRoxeTmzPW2mw49cXpqs_muMp", keywords: ["iit","math","infinite","sequence","series","note"] },
                    { id: 1491, title: "Circle Se 1", fileUrl: "https://drive.google.com/open?id=1Fg1BkyRnXz8GRrPUDyfGxigt9ZQIjabM", keywords: ["iit","math","circle","se1"] },
                    { id: 1492, title: "Cartesian Coordinate Base Advanced", fileUrl: "https://drive.google.com/open?id=1FjNSgUnOczJUt537RJVgZeiX4wThmP8I", keywords: ["iit","math","cartesian","coordinate","base","advanced"] },
                    { id: 1493, title: "Mathematical Induction Ref", fileUrl: "https://drive.google.com/open?id=1FvTeANS9ryFBQFgV93gmVsjaxiVdSwhJ", keywords: ["iit","math","mathematical","induction","ref"] },
                    { id: 1494, title: "Multiplication Of Vector Se 1", fileUrl: "https://drive.google.com/open?id=1FxBdY5iGNFwjyjI5dudazkYbDz4T3DbY", keywords: ["iit","math","multiplication","of","vector","se1"] },
                    { id: 1495, title: "Properties Of Triangle Se 1", fileUrl: "https://drive.google.com/open?id=1G1YDM70xngBMvNdDsdgi60eh_HseGoIA", keywords: ["iit","math","properties","of","triangle","se1"] },
                    { id: 1496, title: "Cartesian Coordinate Pp 3", fileUrl: "https://drive.google.com/open?id=1GLZ1To0WCH-ZpNdufXiu2oqjAWZ5lMHB", keywords: ["iit","math","cartesian","coordinate","pp3"] },
                    { id: 1497, title: "Sequence And Series Tp 4", fileUrl: "https://drive.google.com/open?id=1GtcX1_IGPTig1QnLcbW-zvakg2YUhxqM", keywords: ["iit","math","sequence","and","series","tp4"] },
                    { id: 1498, title: "Parabola Formula", fileUrl: "https://drive.google.com/open?id=1GulSJTlWYNzO2O7Am61iHt6r_TQyliKb", keywords: ["iit","math","parabola","formula"] },
                    { id: 1499, title: "Indefinite Integration Note", fileUrl: "https://drive.google.com/open?id=1HON7g1gX-wv54BPGhRHBgpkDk4mrB4Xn", keywords: ["iit","math","indefinite","integration","note"] },
                    { id: 1500, title: "Quadratics Equation Note", fileUrl: "https://drive.google.com/open?id=1HW8xF78KMOxVYaD_osYPz9G-Uo2oGdnC", keywords: ["iit","math","quadratics","equation","note"] },
                    { id: 1501, title: "Inverse Trigonometric Function Pyp", fileUrl: "https://drive.google.com/open?id=1HXPliXGJ8goCyZsRLXOpRoR6B_pePmhV", keywords: ["iit","math","inverse","trigonometric","function","pyp"] },
                    { id: 1502, title: "Continuity Differentiability Tp 2", fileUrl: "https://drive.google.com/open?id=1HgV3LcaE1lydo_Y_ac6lPKa7VH-YSGnk", keywords: ["iit","math","continuity","differentiability","tp2"] },
                    { id: 1503, title: "Mathematical Reasoning Formula", fileUrl: "https://drive.google.com/open?id=1INw_Arzrz7ncvyGdOmkYI4fIaz_grfOg", keywords: ["iit","math","mathematical","reasoning","formula"] },
                    { id: 1504, title: "Differentiation Note", fileUrl: "https://drive.google.com/open?id=1I_5UYHNL9iwp1uTBXp0lWzdmYJ7Jt_hz", keywords: ["iit","math","differentiation","note"] },
                    { id: 1505, title: "Properties Of Triangle Base", fileUrl: "https://drive.google.com/open?id=1Iyb-4VdwLWPrkmaUk16KI_6rCxUhU86f", keywords: ["iit","math","properties","of","triangle","base"] },
                    { id: 1506, title: "Application Of Integrals Ref", fileUrl: "https://drive.google.com/open?id=1IzEgizjXDxfN-Cq6rypRMyRBjKd4PJtz", keywords: ["iit","math","application","of","integrals","ref"] },
                    { id: 1507, title: "Matrices Tp 1", fileUrl: "https://drive.google.com/open?id=1IzhwBTY4y8hbQLziNTWWksLP3M9k298w", keywords: ["iit","math","matrices","tp1"] },
                    { id: 1508, title: "Coordinate Geometry Sll", fileUrl: "https://drive.google.com/open?id=1J2m73N1maBVU-XBd2iruDNIkWinyjcWi", keywords: ["iit","math","coordinate","geometry","sll"] },
                    { id: 1509, title: "Probability Pp 2", fileUrl: "https://drive.google.com/open?id=1JGD6iARvIt6BzJ2sGqmdJ1sO5htWEuJV", keywords: ["iit","math","probability","pp2"] },
                    { id: 1510, title: "Trigonometric Function And Equation Tp 3", fileUrl: "https://drive.google.com/open?id=1JwgEqplKrLZYaNsCEaWjptJT85eaSivg", keywords: ["iit","math","trigonometric","function","and","equation","tp3"] },
                    { id: 1511, title: "Matrices And Determinants Master", fileUrl: "https://drive.google.com/open?id=1K2X-5tM9IdXIYDob2fAbyELoo-UifVaK", keywords: ["iit","math","matrices","and","determinants","master"] },
                    { id: 1512, title: "Pair Of Straight Line Tp 4", fileUrl: "https://drive.google.com/open?id=1K9TVN7AY33kvT97PQwVKYSR4lz-iuBO9", keywords: ["iit","math","pair","of","straight","line","tp4"] },
                    { id: 1513, title: "Inverse Trigonometric Function Master", fileUrl: "https://drive.google.com/open?id=1KDehqIetZ3oarPK05gno5FRRO0VuIuoq", keywords: ["iit","math","inverse","trigonometric","function","master"] },
                    { id: 1514, title: "Complex Numbers Base", fileUrl: "https://drive.google.com/open?id=1KWgUhvUkSrD2BoU1kRpEpUbFfVCTHzXe", keywords: ["iit","math","complex","numbers","base"] },
                    { id: 1515, title: "Statitics Pp 2", fileUrl: "https://drive.google.com/open?id=1LERXashgVucSOYQxvCG6cT559gMYellJ", keywords: ["iit","math","statitics","pp2"] },
                    { id: 1516, title: "Inverse Trigonometric Function Pp 2", fileUrl: "https://drive.google.com/open?id=1LJ4cV8nRji36rb3VIK1bAiJ2TZqOtIUY", keywords: ["iit","math","inverse","trigonometric","function","pp2"] },
                    { id: 1517, title: "Application Of Derivatives Se 1", fileUrl: "https://drive.google.com/open?id=1LdHeXxAAPoA7uNXiLpgGXVyytTDpP4Yd", keywords: ["iit","math","application","of","derivatives","se1"] },
                    { id: 1518, title: "Definite Integral Pyp", fileUrl: "https://drive.google.com/open?id=1Lnk9UIHnk89vSBBObGQfk247EiMtDDS3", keywords: ["iit","math","definite","integral","pyp"] },
                    { id: 1519, title: "Sequence And Series Pp 1", fileUrl: "https://drive.google.com/open?id=1Lq5trDIilnltpg9kTHIiVQwQhQNvb_L_", keywords: ["iit","math","sequence","and","series","pp1"] },
                    { id: 1520, title: "Indefinite Integration Se 1", fileUrl: "https://drive.google.com/open?id=1M5Q-M5XLqNiVOf9bT6bUm5FI5eQpJP1j", keywords: ["iit","math","indefinite","integration","se1"] },
                    { id: 1521, title: "Circle Pyp", fileUrl: "https://drive.google.com/open?id=1MW8za2xqRCquPEDuw23hAAhmmpTYr3Sv", keywords: ["iit","math","circle","pyp"] },
                    { id: 1522, title: "Quadratics Equation Pyp", fileUrl: "https://drive.google.com/open?id=1MynRr6nYAt-gbVLZFd-knkQcdDQkxwqY", keywords: ["iit","math","quadratics","equation","pyp"] },
                    { id: 1523, title: "Hyperbola Tp 2", fileUrl: "https://drive.google.com/open?id=1N2S-RVNMMXyXiiD3wVVEBFI7XywLPlx7", keywords: ["iit","math","hyperbola","tp2"] },
                    { id: 1524, title: "Binomial Theorem Note", fileUrl: "https://drive.google.com/open?id=1NSjBAOTwLGQNn7d-SSrqkJssUQQSimVN", keywords: ["iit","math","binomial","theorem","note"] },
                    { id: 1525, title: "Ration And Identity Base Advanced", fileUrl: "https://drive.google.com/open?id=1NxTihrB7G7WSOBdrwMKomZHrxCbmwecU", keywords: ["iit","math","ration","and","identity","base","advanced"] },
                ]
            }
        ]
    },
    // --- END OF NEW IIT-JEE SECTION ---
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