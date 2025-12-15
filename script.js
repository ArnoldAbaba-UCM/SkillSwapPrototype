// skillswap/script.js

// ========== EASY-TO-EDIT PROFILE DATA ==========

// Your profile information (shown in myprofile.html)
const MY_PROFILE = {
    name: "Arnold A. Ababa",
    title: "IT Specialist",
    location: "Pardo, Cebu City",
    email: "arnoldfireababa@gmail.com",
    availability: "Flexible",
    teachSkills: "Website Development, Python Programming, Excel Formulas, Basic IT Support, Photo Editing, Data Analysis, Body Building",
    learnSkills: "Cooking, Baking, Basic Car Maintenance, Guitar, Spanish Language, Photography",
    bio: "IT professional with 8 years experience. I enjoy teaching tech skills and want to learn practical life skills. Available for skill swaps on weekends or weekday evenings. I believe in the power of skill sharing to build community and personal growth.",
    photo: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/515495226_1987180268775703_1364189607720734769_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHmHqHhIX14X7oVOxQ3yxFDT0ndeIOwdMBPSd14g7B0wOF16whsv_en2gribyrZc4shEMWoOsxKM-ZLCWp77Teu&_nc_ohc=l9_j660OWj0Q7kNvwEdXUSg&_nc_oc=AdlMQtgq5hmMpOdNJ_tfYUX5MQ_mZ7A_kWTZ1NjZFtM3cKwCAcU6II_bChCZ-tXzmAnmHV7b_pCwSoZHsu00kexK&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=6TQ_zF6C5C_1jZVcZ-xqTA&oh=00_Afm-iW6ayYKmKuvdJ3M27xms_yUJThkjmMe6U3y10UvUig&oe=69459D3C"
};

// Main profiles array - ALL 6 PROFILES
const ALL_PROFILES = [
    {
        id: 1,
        name: "Louis Alfonso Costanilla",
        title: "Professional Chef",
        location: "Private, Cebu city",
        teachSkills: ["Baking", "Knife Skills", "Menu Planning", "Food Presentation", "Alcohol Master", "Cigarretes Champion", "Italian Cooking"],
        learnSkills: ["Website Development", "Excel Formulas", "Basic IT Support", "Photo Editing"],
        bio: "Professional chef with 10 years experience. I specialize in Italian cuisine and baking. Looking to learn IT skills to build a website for my catering business and manage my finances better. Available for evening or weekend skill swaps.",
        photo: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/538390860_3442736765869065_7401980340790702675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHJKmR-sMvYklVhw0lqq1XBAe_c5EVTg74B79zkRVODvhd7BtnulAyxKJHRE9TZa9MGTsujVbUrN8pBf0NTAAri&_nc_ohc=nBY7ivtl66oQ7kNvwFm0ry1&_nc_oc=AdnoL_-z15BEtkUVnI6bgbNa_RUrw5mJMsUncJIjMWsOFKijXPtplwSeXYFcK-_v241u80rXDycYoAknx5nEmuPi&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=Faz3ZNS1xFJa-rUOdPvwgg&oh=00_AfmtU40ac7dQpi1m6YBNtyWG47P9g-24U5rw97vMFRJ7fQ&oe=6945970D"
    },
    {
        id: 2,
        name: "Neljay Sevilla",
        title: "Carpenter",
        location: "Alcoy, Cebu",
        teachSkills: ["Woodworking", "Basic Home Repair", "Furniture Building", "Tool Maintenance"],
        learnSkills: ["Photo Editing", "Python Basics", "Excel", "Website Design"],
        bio: "Professional carpenter with 8 years experience. I build custom furniture and do home renovations. Want to learn tech skills for my business marketing and personal projects.",
        photo: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/466626293_3319437861524898_3289197900870054989_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNtLYcUliyl_RdS9MVppgLrLjj7wYaD-ysuOPvBhoP7LKjVCzOytpCd9vf6hSqF5iUukqMwuAqmIZITH75jXDr&_nc_ohc=XhHQNFVNOfMQ7kNvwGB-O_U&_nc_oc=AdkuxHkNDh2dYxjdFJo4OvWXXGla5lTrB-1oRym8cmNVvd0dXbaLW0VEbtQEGW6mFOT-j5CO6LQzqlCGcguTZlUA&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=81qAgLFN03vaNHuE5fILMg&oh=00_Afm0T8D4Tc7gQQgdMwJ7cZIRfsO4EW9QFjcGxyZUS9Mpew&oe=6945AC62"
    },
    {
        id: 3,
        name: "Harley Davidson",
        title: "Language Teacher",
        location: "Labangon, Cebu city",
        teachSkills: ["Spanish", "French", "Language Learning Methods", "Pronunciation"],
        learnSkills: ["Data Analysis", "Excel", "PowerPoint", "Basic Coding"],
        bio: "Certified language teacher specializing in Spanish and French, been teaching for 100 years. I teach online and in-person. Looking to learn data analysis and presentation skills for creating better teaching materials.",
        photo: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-1/486013667_3895381770724660_4069866742805345820_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGniB0RxgHRJTyRTv5zpcWR1K5W3DtgYRbUrlbcO2BhFuVb_dfmZMtbj_Eoq5DL20GHYA36evhAoP64A4STkEe3&_nc_ohc=Cu0wkdmFpaAQ7kNvwEarsga&_nc_oc=Adkk936UfrflnbpFz5Kxemql4YNbbFK2XWd5AofUk36UpQxUU5g6xGl1sznQQKjhkoacusgS6pkuJYmAoNZlqgax&_nc_zt=24&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=NfcvGI7rtwLRMdBzA9bV_g&oh=00_Afkjxs3Lc0V8654QHX4tPDAGcmlBu0M8g3pz-pF9DH-GtQ&oe=69459571"
    },
    {
        id: 4,
        name: "Repaso Cyrus",
        title: "Graphic Designer",
        location: "Guadalupe, Cebu city",
        teachSkills: ["Photoshop", "Logo Design", "Illustration", "Branding"],
        learnSkills: ["Website Development", "IT Basics", "Excel", "JavaScript"],
        bio: "Freelance graphic designer working with international clients. Want to expand my skills into web development to offer full-service design packages to my clients.",
        photo: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/484516085_1174654461052472_4028273683941329243_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGDWBbE2GjXS8uLCJsVKizfMgYLciG6kKgyBgtyIbqQqLeJt3ATlY7gecpzVhgYepUmOk1n5uxwkm6waSyP2AYC&_nc_ohc=HnenZaY6JSQQ7kNvwErGzbi&_nc_oc=AdkLX-6uGY4__u4Hz04D26v4gFH8gRQwx_Nxa9SXKCEaydgAvIlNMUHg7ppHcF_-DuizlN8erq1AiSgDXToFNO5N&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=nqmpv-UPR9-qW-OyTwZo2Q&oh=00_AflY3takgOGGIXRW5TWTBG27JtLKnRimlo4tclRTJ1WBTA&oe=6945A2AD"
    },
    {
        id: 5,
        name: "Regine Mahinay",
        title: "Auto Mechanic",
        location: "Leyte",
        teachSkills: ["Basic Car Maintenance", "Engine Repair", "Vehicle Diagnostics", "Tool Use"],
        learnSkills: ["Computer Basics", "Website Design", "Social Media", "English"],
        bio: "Auto mechanic with 12 years experience. I want to learn computer skills to start an online parts business and improve my English for working with international clients.",
        photo: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-1/481162873_1028469792634723_1944492231386941435_n.jpg?stp=c159.0.1224.1224a_dst-jpg_s100x100_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGOQN3Hs8ojl3ELGAWj_tPJPT2ryUHSk9g9PavJQdKT2BLeWJE3kmBiyta21RhvsWztMJGjx__52nzPIt7K6Dz_&_nc_ohc=j2Q3SHvbIAgQ7kNvwGNwIjv&_nc_oc=Adkyz3Hw5mxol6u-l-QG95GMZpHCfWquTN7PXtvrnCIxNC3DkYdCjOK9ECzR3Bkqyr-PIFFGGmny_5lNBTbKAQIV&_nc_zt=24&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=yhGu2KQGnuI4vyFxRrvVOA&oh=00_Afn13yhGwVZAQizbA2XI_xX9yGYRymVimhA9STOsKMbRtw&oe=6945A982"
    },
    {
        id: 6,
        name: "Jonn Emmanuel A. Renejane",
        title: "Yoga Instructor",
        location: "Wa ko kabaw hahahaha",
        teachSkills: ["Yoga", "Meditation", "Breathing Techniques", "Flexibility Training"],
        learnSkills: ["Video Editing", "Social Media Marketing", "Website Building", "Photo Editing"],
        bio: "Certified yoga instructor with 5 years teaching experience. I want to create online courses and need to learn video editing and website skills to reach more students globally.",
        photo: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/583451050_2016752435843566_9021136805921870649_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEKbX3nIrEOzw3q3qtROsjG55PjJ8Kexi3nk-Mnwp7GLRDC99XBwNkCE4H8VPQjiL6xuXTpW_RU4DheO-mNbJrv&_nc_ohc=aB6c8m-IUlMQ7kNvwHs1X8B&_nc_oc=Adk_V5OKzqdD-iu9lhXUAKhNVfMiwOATHz1II0G529i1wffPl1gnXUpHH-wsEmEGG6elJKEDwsG-ctui-4czPEUU&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=DEnGIt65KBcS22AYWndn2Q&oh=00_AfnFx4gHtBvgqWcmWaWlMx_KAPuVNZPIPn0fI3ajbM6Qxg&oe=6945B3C2"
    },
    {
        id: 7,
        name: "Prince Laurence Magbanua",
        title: "Photographer",
        location: "Labangon, Cebu city",
        teachSkills: ["Portrait Photography", "Photo Editing", "Lighting Setup", "Camera Settings"],
        learnSkills: ["Website Development", "Social Media Marketing", "Business Management", "Accounting"],
        bio: "Professional photographer specializing in portraits and events. Looking to build a better online presence and learn business skills to grow my studio. I can teach photography basics and advanced techniques.",
        photo: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/593541681_2281840335654643_7039160472894670471_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFEbYsglE3oFZDsecg9JWHd5Pd9Y9Rx5knk931j1HHmSW51K1eQ6gRMu9GOnXFCC-NTfKGJMSNPzO-6ChxupD6n&_nc_ohc=9wE1wGlmg5wQ7kNvwGBbvMl&_nc_oc=AdlNMXKcX8lIZjhoph5pFTxkC2HyLRozJZgmhJkiNSY-UZD78FE4V318BVqQh_X3lImUSjahPUuUyMviXza_1GTX&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=Zv8Aa5OgbuK10_JNkK9x8A&oh=00_Afm50Ecjnl1JnaRkrWsHjBNiSSztcGDMkOhc3tLq9H_JiA&oe=694590FC"
    },
    {
        id: 8,
        name: "Edrian John Diaz",
        title: "Gardener & Landscaper",
        location: "Guadalupe, Cebu city",
        teachSkills: ["Organic Gardening", "Landscape Design", "Plant Care", "Composting"],
        learnSkills: ["Basic Carpentry", "Website Design", "Marketing", "Bookkeeping"],
        bio: "Experienced gardener and landscaper with 8 years of creating beautiful outdoor spaces. I want to learn basic carpentry to build garden structures and improve my business's online presence.",
        photo: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/467754627_1837943870344614_6167603832676395814_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4Y8jkRGkBUU1512i74vPT85q-QraEVs7zmr5CtoRWznrm52c3DoaR59tWljWOgKdM6N2jmcO9iOSs_UHWGayh&_nc_ohc=Na0IzPZyxtwQ7kNvwFSP3h9&_nc_oc=Admevj3neEpAYzFSHJuy2Erd5S6FmtPunTN7sAR_I4d5gIAbAm3WnwY5r8AQx5ZgLvv5eR0UbTw5nz3hNOuMSl_P&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=wLMnJDtqZJNt2mZsj4dTuQ&oh=00_AfkIhoHPjMnHDNJxxzgcQ1MkFWIy00jIRGb2H8j0SOYAdQ&oe=6945961E"
    },
    {
        id: 9,
        name: "Charles Alfred Quijoy",
        title: "Tailor & Fashion Designer",
        location: "Private, Cebu city",
        teachSkills: ["Sewing", "Pattern Making", "Alterations", "Fabric Selection"],
        learnSkills: ["E-commerce", "Digital Marketing", "Graphic Design", "Business Planning"],
        bio: "Traditional tailor and fashion designer creating custom clothing. Looking to expand my business online and reach international customers. I can teach sewing and design skills in exchange for tech and business knowledge.",
        photo: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/510803804_1776976673193790_5102774314270699521_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGQsozJaGBnJtAFNMXCsDdJd9GIXm2D0BV30YhebYPQFYChk5glz6cHaRiYk1_QtNV3ypMjRyCY55n0REXL5de_&_nc_ohc=0vW0SKFR_VkQ7kNvwES99dz&_nc_oc=Adlm4oj-N1jPOBu-r2kFIxSpIGp4qNaAK1qCD186XqG03SiGX2C4xlDIHKdz5DNQ_cFqw5id1nYnhXB9gupXd005&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=GLRZBmchcy4r1_53GtYjlg&oh=00_Afm0SuxqLWOlp1W3DajMvb_hgHz3vUJ3BRTyXzlRDQR2Cw&oe=6945A476"
    },
    {
        id: 10,
        name: "Rainier Schwartz",
        title: "Music Producer",
        location: "Tisa, Cebu city",
        teachSkills: ["Music Production", "Sound Mixing", "Instrument Recording", "Song Arrangement"],
        learnSkills: ["Video Editing", "Website Building", "SEO", "Social Media Growth"],
        bio: "Music producer with 6 years experience in studio recording and production. I help artists create their sound and need to learn video editing for music videos and better online promotion for my services.",
        photo: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/487508227_3863576500572666_4644340404026061426_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG_4pL6CbJlgz8OtzRlG4WdUNHvlv_Abi1Q0e-W_8BuLbjy83ICdEqocUcZsZl-HmbEws7c_LMapgrBf6EbERk3&_nc_ohc=qyjeV4tWtp4Q7kNvwFKM0E6&_nc_oc=Adlvpw6ccPHhPji4wNNwKsnv7VAnwANdWWDGs2BiHHmjcMcekQmG4g9Vhjrm_ntYt7poE7VgZOM6Om1RtUI_cgsc&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=KvNqHCtMYF0GmGTIxp5wQA&oh=00_AfnlgyUyct5ppRGqfxqMigUBVulcdldXTGiUgd7AiWgmMg&oe=6945997F"
    },
    {
        id: 11,
        name: "Cris Matthew Gabornes",
        title: "Personal Trainer",
        location: "Private, Cebu city",
        teachSkills: ["Fitness Training", "Nutrition Planning", "Injury Prevention", "Workout Programming"],
        learnSkills: ["App Development", "Data Analysis", "Online Course Creation", "Video Production"],
        bio: "Certified personal trainer with expertise in strength training and nutrition. I want to create a fitness app and online courses to reach more clients globally. Can teach personalized fitness and nutrition planning.",
        photo: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/488247050_3359091497560924_1246224386175165709_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEc2RN-NXoczJzvhtWvaSI2a5YveAs6ryprli94CzqvKuDh8Nj6OT8dYfHr4_Ph9c3wCtkKiriMpDmFdINWKEKa&_nc_ohc=OdWfsEd2BqUQ7kNvwGxIoqC&_nc_oc=Adk5xfPchziL6hkG2pxt92P8FYOigqf0x-Ms-MUnKFPljwbIHtEmGKD1fxRqFpD_YCdSDE2he-23BMdpC4XD94Qh&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=OqZIfinshL4Itr26Jd01kQ&oh=00_AfkqO14QmBFvr8Vnm9A7HVkCvoAmla7WX-3vvaz1LV5VPQ&oe=6945B67B"
    }
];

// ========== DERIVED DATA - AUTOMATICALLY GENERATED ==========

// Browse profiles are all 6 profiles
const BROWSE_PROFILES = ALL_PROFILES;

// Matches are the first 4 profiles
const MY_MATCHES = [
    {
        name: ALL_PROFILES[0].name,
        title: ALL_PROFILES[0].title,
        location: ALL_PROFILES[0].location,
        photo: ALL_PROFILES[0].photo,
        iTeach: "Website Development, Excel",
        iLearn: ALL_PROFILES[0].teachSkills.slice(0, 2).join(", "),
        matched: "2 days ago",
        status: "Active"
    },
    {
        name: ALL_PROFILES[1].name,
        title: ALL_PROFILES[1].title,
        location: ALL_PROFILES[1].location,
        photo: ALL_PROFILES[1].photo,
        iTeach: "Photo Editing, Python Basics",
        iLearn: ALL_PROFILES[1].teachSkills.slice(0, 2).join(", "),
        matched: "1 week ago",
        status: "Active"
    },
    {
        name: ALL_PROFILES[2].name,
        title: ALL_PROFILES[2].title,
        location: ALL_PROFILES[2].location,
        photo: ALL_PROFILES[2].photo,
        iTeach: "Data Analysis, Excel",
        iLearn: ALL_PROFILES[2].teachSkills.slice(0, 2).join(", "),
        matched: "3 days ago",
        status: "Scheduled"
    },
    {
        name: ALL_PROFILES[3].name,
        title: ALL_PROFILES[3].title,
        location: ALL_PROFILES[3].location,
        photo: ALL_PROFILES[3].photo,
        iTeach: "Website Development, IT Basics",
        iLearn: ALL_PROFILES[3].teachSkills.slice(0, 2).join(", "),
        matched: "yesterday",
        status: "New"
    }
];

// Conversations are the first 2 profiles
const CONVERSATIONS = [
    {
        name: ALL_PROFILES[0].name,
        lastMessage: "Hello",
        time: "Today",
        photo: ALL_PROFILES[0].photo
    },
    {
        name: ALL_PROFILES[1].name,
        lastMessage: "Hello",
        time: "Yesterday",
        photo: ALL_PROFILES[1].photo
    },
    {
        name: ALL_PROFILES[2].name,
        lastMessage: "Hello",
        time: "2 days ago",
        photo: ALL_PROFILES[2].photo
    },
    {
        name: ALL_PROFILES[3].name,
        lastMessage: "Hello",
        time: "3 days ago",
        photo: ALL_PROFILES[3].photo
    }
];

// ========== UTILITY FUNCTIONS ==========

// Load current profile index from localStorage or default to 0
function getCurrentProfileIndex() {
    const saved = localStorage.getItem('currentProfileIndex');
    return saved ? parseInt(saved) : 0;
}

function saveCurrentProfileIndex(index) {
    localStorage.setItem('currentProfileIndex', index.toString());
}

function getSkippedProfiles() {
    const saved = localStorage.getItem('skippedProfiles');
    return saved ? JSON.parse(saved) : [];
}

function saveSkippedProfiles(profiles) {
    localStorage.setItem('skippedProfiles', JSON.stringify(profiles));
}

function getSwapRequests() {
    const saved = localStorage.getItem('swapRequests');
    return saved ? JSON.parse(saved) : [];
}

function saveSwapRequests(requests) {
    localStorage.setItem('swapRequests', JSON.stringify(requests));
}

function getConversationMessages(name) {
    const saved = localStorage.getItem('conversationMessages');
    const allMessages = saved ? JSON.parse(saved) : {};
    return allMessages[name] || [];
}

function saveConversationMessages(name, messages) {
    const saved = localStorage.getItem('conversationMessages');
    const allMessages = saved ? JSON.parse(saved) : {};
    allMessages[name] = messages;
    localStorage.setItem('conversationMessages', JSON.stringify(allMessages));
}

// ========== INDEX.HTML FUNCTIONS ==========
function loadBrowseProfile() {
    const currentIndex = getCurrentProfileIndex();
    
    if (currentIndex >= BROWSE_PROFILES.length) {
        // No more profiles
        document.querySelector('.profile-name').textContent = "No more profiles";
        document.querySelector('.profile-title').textContent = "Check back later";
        document.querySelector('.profile-distance').textContent = "";
        document.querySelector('.skill-match').innerHTML = "<strong>No more profiles</strong><br>Try adjusting your skill preferences to see more matches.";
        
        // Clear skills
        const teachSkillsDiv = document.querySelectorAll('.skill-list')[0];
        const learnSkillsDiv = document.querySelectorAll('.skill-list')[1];
        if (teachSkillsDiv) teachSkillsDiv.innerHTML = "";
        if (learnSkillsDiv) learnSkillsDiv.innerHTML = "";
        
        return;
    }
    
    const profile = BROWSE_PROFILES[currentIndex];
    
    // Update UI elements if they exist
    const profilePic = document.querySelector('.profile-pic');
    const profileName = document.querySelector('.profile-name');
    const profileTitle = document.querySelector('.profile-title');
    const profileLocation = document.querySelector('.profile-distance');
    const profileBio = document.querySelector('.profile-bio');
    const skillMatch = document.querySelector('.skill-match');
    
    if (profilePic) profilePic.src = profile.photo;
    if (profileName) profileName.textContent = profile.name;
    if (profileTitle) profileTitle.textContent = profile.title;
    if (profileLocation) profileLocation.textContent = profile.location;
    if (profileBio) profileBio.textContent = profile.bio;
    
    if (skillMatch) {
        const matchTexts = [
            "Potential Swap Match! Your IT skills match their cooking needs!",
            "Great complement! Your tech skills match their woodworking needs.",
            "Language for tech swap! Teach them Excel, learn Spanish.",
            "Design for development swap! Perfect match for skills exchange.",
            "Practical for digital skills! Car maintenance for computer help.",
            "Wellness for tech! Teach them video editing, learn yoga."
        ];
        skillMatch.innerHTML = `<strong>Potential Swap Match!</strong><br>${matchTexts[currentIndex] || "Good skill match potential!"}`;
    }
    
    // Update skill tags
    const skillLists = document.querySelectorAll('.skill-list');
    
    // First skill box (teach skills)
    if (skillLists[0]) {
        skillLists[0].innerHTML = '';
        profile.teachSkills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillLists[0].appendChild(skillTag);
        });
    }
    
    // Second skill box (learn skills)
    if (skillLists[1]) {
        skillLists[1].innerHTML = '';
        profile.learnSkills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillLists[1].appendChild(skillTag);
        });
    }
    
    // Update counter
    const counter = document.querySelector('.title-bar div');
    if (counter) {
        counter.textContent = `Profile ${currentIndex + 1} of ${BROWSE_PROFILES.length}`;
    }
}

function skipProfile() {
    const currentIndex = getCurrentProfileIndex();
    const skipped = getSkippedProfiles();
    skipped.push(BROWSE_PROFILES[currentIndex].id);
    saveSkippedProfiles(skipped);
    
    // Move to next profile
    saveCurrentProfileIndex(currentIndex + 1);
    loadBrowseProfile();
}

function requestSwap() {
    const currentIndex = getCurrentProfileIndex();
    const requests = getSwapRequests();
    requests.push(BROWSE_PROFILES[currentIndex].id);
    saveSwapRequests(requests);
    
    alert(`Swap request sent to ${BROWSE_PROFILES[currentIndex].name}!`);
    
    // Move to next profile
    saveCurrentProfileIndex(currentIndex + 1);
    loadBrowseProfile();
}

function prevProfile() {
    const currentIndex = getCurrentProfileIndex();
    if (currentIndex > 0) {
        saveCurrentProfileIndex(currentIndex - 1);
        loadBrowseProfile();
    }
}

function nextProfile() {
    const currentIndex = getCurrentProfileIndex();
    if (currentIndex < BROWSE_PROFILES.length - 1) {
        saveCurrentProfileIndex(currentIndex + 1);
        loadBrowseProfile();
    }
}

// ========== MYPROFILE.HTML FUNCTIONS ==========
function loadMyProfile() {
    document.getElementById('edit-name').value = MY_PROFILE.name;
    document.getElementById('edit-title').value = MY_PROFILE.title;
    document.getElementById('edit-location').value = MY_PROFILE.location;
    document.getElementById('edit-email').value = MY_PROFILE.email;
    document.getElementById('edit-availability').value = MY_PROFILE.availability;
    document.getElementById('edit-teach-skills').value = MY_PROFILE.teachSkills;
    document.getElementById('edit-learn-skills').value = MY_PROFILE.learnSkills;
    document.getElementById('edit-bio').value = MY_PROFILE.bio;
    
    const profilePic = document.querySelector('.profile-pic-large');
    if (profilePic) {
        profilePic.src = MY_PROFILE.photo;
    }
    
    const profileName = document.querySelector('.profile-info h2');
    if (profileName) {
        profileName.textContent = MY_PROFILE.name;
    }
}

function saveProfile() {
    MY_PROFILE.name = document.getElementById('edit-name').value;
    MY_PROFILE.title = document.getElementById('edit-title').value;
    MY_PROFILE.location = document.getElementById('edit-location').value;
    MY_PROFILE.email = document.getElementById('edit-email').value;
    MY_PROFILE.availability = document.getElementById('edit-availability').value;
    MY_PROFILE.teachSkills = document.getElementById('edit-teach-skills').value;
    MY_PROFILE.learnSkills = document.getElementById('edit-learn-skills').value;
    MY_PROFILE.bio = document.getElementById('edit-bio').value;
    
    alert('Profile saved successfully!');
}

function changePhoto() {
    alert('In our real app, this would open a file picker to upload a new profile photo');
}

// ========== MATCHES.HTML FUNCTIONS ==========
function loadMatches() {
    const matchesContainer = document.querySelector('.matches-list');
    if (!matchesContainer) return;
    
    matchesContainer.innerHTML = '';
    
    MY_MATCHES.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.className = 'match-item';
        matchElement.innerHTML = `
            <img class="match-pic" src="${match.photo}" alt="${match.name}">
            <div class="match-info">
                <div class="match-name">${match.name} - ${match.title}</div>
                <div><strong>You teach:</strong> ${match.iTeach}</div>
                <div><strong>You learn:</strong> ${match.iLearn}</div>
                <div class="match-skills">Matched ${match.matched} • ${match.location} <span class="match-status">${match.status}</span></div>
            </div>
            <div class="match-actions">
                <button class="jbutton" onclick="messageMatch('${match.name}')">Message</button>
                <button class="jbutton" onclick="viewMatchDetails('${match.name}')">Details</button>
            </div>
        `;
        
        matchesContainer.appendChild(matchElement);
    });
}

function viewMatchDetails(name) {
    const match = MY_MATCHES.find(m => m.name === name);
    if (match) {
        alert(`Viewing match details for ${name}\n\nLocation: ${match.location}\nMatch Date: ${match.matched}\nStatus: ${match.status}\n\nYou teach: ${match.iTeach}\nYou learn: ${match.iLearn}`);
    } else {
        alert(`Viewing match details for ${name}`);
    }
}

function messageMatch(name) {
    window.location.href = 'messages.html';
}

function filterMatches() {
    alert('Filter applied. In our real app, this would filter the match list.');
}

function findMoreMatches() {
    window.location.href = 'index.html';
}

// ========== MESSAGES.HTML FUNCTIONS ==========
function loadConversations() {
    const conversationList = document.querySelector('.conversation-list');
    if (!conversationList) return;
    
    conversationList.innerHTML = '';
    
    CONVERSATIONS.forEach((convo, index) => {
        const convoElement = document.createElement('div');
        convoElement.className = 'conversation-item';
        if (index === 0) {
            convoElement.classList.add('active');
        }
        
        convoElement.innerHTML = `
            <img class="conversation-avatar" src="${convo.photo}" alt="${convo.name}">
            <div class="conversation-info">
                <div class="conversation-name">${convo.name}</div>
                <div class="conversation-preview">${convo.lastMessage}</div>
            </div>
            <div style="font-size: 10px; color: ${convo.time === 'Today' ? '#006400' : '#666'};">${convo.time}</div>
        `;
        
        convoElement.addEventListener('click', () => {
            selectConversation(convo.name, convoElement);
        });
        
        conversationList.appendChild(convoElement);
    });
    
    if (CONVERSATIONS.length > 0) {
        setTimeout(() => {
            const firstItem = document.querySelector('.conversation-item');
            if (firstItem) {
                selectConversation(CONVERSATIONS[0].name, firstItem);
            }
        }, 100);
    }
}

function selectConversation(name, element) {
    document.querySelectorAll('.conversation-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (element) {
        element.classList.add('active');
    }
    
    const chatHeader = document.getElementById('chat-with');
    if (chatHeader) {
        chatHeader.textContent = `Chat with ${name}`;
    }
    
    loadMessages(name);
    
    const chatPanel = document.getElementById('chatPanel');
    const noChatSelected = document.getElementById('noChatSelected');
    if (chatPanel) chatPanel.style.display = 'flex';
    if (noChatSelected) noChatSelected.style.display = 'none';
    
    const statusMessage = document.getElementById('status-message');
    if (statusMessage) {
        statusMessage.textContent = `Messaging with ${name}`;
    }
}

function loadMessages(name) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = '';
    
    let storedMessages = getConversationMessages(name);
    
    // If no stored messages, create SIMPLE ones: just "Hello" and "Hi"
    if (storedMessages.length === 0) {
        storedMessages = [
            { sender: name, text: "Hello" },
            { sender: "You", text: "Hi" }
        ];
        
        // Save these initial messages
        saveConversationMessages(name, storedMessages);
    }
    
    // Display messages
    storedMessages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = msg.sender === 'You' ? 'message outgoing' : 'message';
        
        const displayName = msg.sender === 'You' ? 'You' : msg.sender;
        messageDiv.innerHTML = `<strong>${displayName}:</strong> ${msg.text}`;
        
        chatMessages.appendChild(messageDiv);
    });
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const newMessage = document.createElement('div');
        newMessage.className = 'message outgoing';
        newMessage.innerHTML = `<strong>You:</strong> ${message}`;
        chatMessages.appendChild(newMessage);
        
        const chatHeader = document.getElementById('chat-with');
        const conversationName = chatHeader ? chatHeader.textContent.replace('Chat with ', '') : '';
        
        if (conversationName) {
            const storedMessages = getConversationMessages(conversationName);
            storedMessages.push({ sender: "You", text: message });
            saveConversationMessages(conversationName, storedMessages);
        }
        
        input.value = '';
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function newMessage() {
    alert('In our real app, this would open a dialog to start a new conversation with a user.');
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadBrowseProfile();
            const matchCount = document.getElementById('match-count');
            if (matchCount && MY_MATCHES) {
                matchCount.textContent = MY_MATCHES.length;
            }
            break;
        case 'myprofile.html':
            loadMyProfile();
            break;
        case 'matches.html':
            loadMatches();
            break;
        case 'messages.html':
            loadConversations();
            break;
    }
});