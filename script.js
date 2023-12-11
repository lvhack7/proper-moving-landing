AOS.init()

const comments1 = [
    {
        title: "The moving team did an excellent job",
        description: "I would recommend ProPer Moving company to anyone who needs help moving. The moving team did an excellent job. We had a house full of furniture and they treated every piece with care. They worked so hard and were so friendly it was such a wonderful environment all day. You all truly made our moving day less stressful. Thank you again so much for all your hard work, we really appreciate it Thank you Cori Escanuelas",
        author: "Cori E",
        icon: "C"
    },
    {
        title: "Nice, friendly, professional people",
        description: "I moved from Los Angeles to Las Vegas and had a great experience with Proper Moving. Their prices are affordable. The movers came on time even a bit early and handled everything with care. Nice, friendly, professional people. Thank you Beck.(manager)",
        author: "Marjorie s",
        icon: "M"
    },
    {
        title: "they were completely professional",
        description: "These guys were great with our move. I was need for an immediate move from my old apartment to my new place and they were able to accommodate me. I didn't have any issue at all with their service, they were completely professional with loading all of our furniture and boxes. Everything that couldn't be boxed, they wrapped and secured on the spot with no additional charges",
        author: "Thanisha G.",
        icon: "T"
    },
    {
        title: "meticulous care to the furnitures",
        description: "Highly recommend this company! They have really good communication from the moment I requested a quote up until my moving day. The movers (Ismael and Azad) were friendly and punctual. They also took meticulous care to the furnitures I have and ensure that they were disassembled and reassembled correctly",
        author: "Silvi I.",
        icon: "S"
    },
    {
        title: "were very fast and excellent with cleanup",
        description: "The guys from Proper moving company are top notch movers!!! The arrived on time, communicated very well , are we're very thorough. The packed everything very safely and efficiently. Upon drop off, they were very fast and excellent with cleanup afterwards. Would recommend them to anyone looking for fast efficient movers!!!",
        author: "Lenard C.",
        icon: "L"
    },
    {
        title: "Couldn't be happier with my choice!",
        description: "We all know moving day is very stressful, but Oleg and Ismael did an amazing job with our move. Very professional and friendly, and the price is super reasonable. We moved locally from one LA neighborhood to another, and it took about 6 hours in total (no stairs for us). Couldn't be happier with my choice! I'm surprised there aren't more reviews here",
        author: "Michelle W.",
        icon: "M"
    },
    {
        title: "I was just as satisfied as the first time I used them",
        description: "Today was my second time using Proper moving and I was just as satisfied as the first time I used them. Communication is always great! They always arrive on time and take time to properly wrap and cover items ensure things don't get damaged. They are a hard working team, prices are competitive and they always have a great attitude and smile. I will always use this company for my moves.",
        author: "Lakisha E.",
        icon: "L"
    },
    {
        title: "customer service and communications were excellent",
        description: "Hired 3 movers for our move from a 2 BD apartment to 3BD, 3-story townhouse. Movers worked quickly and safely, and customer service and communications were excellent. I would highly recommend this company for moving.",
        author: "Tim A.",
        icon: "T"
    },
]

const comments2 = [
    {
        title: "Great service, were on time with no delays, had all necessary equipment",
        description: "I was so pleased finding this company. Great service, were on time with no delays, had all necessary equipment. Baha , foreman, was very professional and I really had no extra charges. In fact, I had some nice discount on my extra staff. I will definitely recommend this company to anyone who is in search of a good and professional moving company. Thank you guys",
        author: "Bake",
        icon: "B"
    },
    {
        title: "Recommend this company to anyone!",
        description: "Great service! They helped us to move quickly and safely during the difficult pandemia time. Manager Ayaz is always in touch and resolves issues quickly. Absolutely above and beyond. Recommend this company to anyone!",
        author: "Abay Zh",
        icon: "A"
    },
    {
        title: "I would use them again in a heartbeat!",
        description: "Excellent service. As someone who has no clue how to prepare for a move, they made it easy and stress free. They were quick and extremely professional. I would recommend them and use them again in a heartbeat!",
        author: "Tina-Marie V.",
        icon: "A"
    },
    {
        title: "Punctional, thoughtful, careful, professional",
        description: "While a bit on the high side of hourly rates, these guys were awesome and I really appreciated them coming on New Year's eve. Punctional, thoughtful, careful, professional”",
        author: "Denise C.",
        icon: "D"
    },
    {
        title: "They were equipped with everything we needed",
        description: "I cannot say enough good things about Proper Moving Co! We had such a great experience with them. They were professional, efficient and responsive. They helped us move from a 2 bedroom apartment with stairs and no elevator and did it very quickly. I was impressed. They were equipped with everything we needed from padding and tape to all sizes of boxes - They even helped us with last minute packing",
        author: "Erika B.",
        icon: "E"
    },
    {
        title: "They definitely earned my business for life",
        description: "The communication was amazing and they responded to all questions within seconds. They worked non-stop and loaded the truck to the brim. They took extra precautions with our valuables and asked all the right questions. They worked non-stop as well, no standing around or wasting time. They definitely earned my business for life and I would highly recommend them to anyone. 10/10 all the way",
        author: "Elvis A.",
        icon: "E"
    },
    {
        title: "easy to make an appointment online",
        description: "Proper moving was great! It was easy to make an appointment online with the start and end addresses. They came on time and wrapped all of my furniture and tv! They were careful with my things. They were also transparent with everything. They made my moving process so much easier. I would recommend them to anyone. Thanks again!",
        author: "Jong Soo L.",
        icon: "J"
    },
    {
        title: "these guys were the best I have ever used",
        description: "Eric and his crew did an amazing job. They moved me from Redondo to El Segundo and were done in three and a half hours. I spent a week or so trying to decide between a few different movers but glad I ended up here through a recommendation from a friend. I tend to move each year and these guys were the best I have ever used and honestly pretty cheap for how hard the guys work. Will use again!",
        author: "Sean C.",
        icon: "S"
    },
]

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    
    const darkModeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check local storage for dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Set initial dark mode state based on local storage
    if (isDarkMode) {
        html.classList.add('dark');
        darkModeToggle.src = "./imgs/dark-theme.svg"
    } else {
        darkModeToggle.src = "./imgs/light-theme.svg"
    }

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener('click', function () {
        html.classList.toggle('dark');
        if (html.classList.contains("dark")) {
            darkModeToggle.src = "./imgs/dark-theme.svg"
        } else {
            darkModeToggle.src = "./imgs/light-theme.svg"
        }
        // Save dark mode preference to local storage
        localStorage.setItem('darkMode', html.classList.contains('dark'));
    });
    

})

function scrollInto(id) {
    if (!document.getElementById('mobile-menu').classList.contains("hidden")) {
        toggleMenu()
    }
    const componentElement = document.getElementById(id);
    console.log(id)
    // Scroll to the target element smoothly
    if (id === 'comments') {
        window.scrollTo(0, componentElement.offsetTop - document.getElementsByTagName('header')[0].offsetHeight + 200);
    } else {
        window.scrollTo(0, componentElement.offsetTop - document.getElementsByTagName('header')[0].offsetHeight + 500);
    }
}

function scrollIntoPage(href) {
    window.location.href = 'index.html?id='+href  
}

document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq')
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const arrow = item.querySelector('.arrow1');
            const content = item.querySelector('.content');

            arrow.addEventListener("click", function() {
                if (content.classList.contains("hidden")) {
                    closeAllFAQ();
                    arrow.classList.add("rotate-180")
                    content.classList.remove("hidden")
                } else {
                    arrow.classList.remove("rotate-180")
                    content.classList.add("hidden")
                }
                
            });
        })
    }

    function closeAllFAQ() {
        faqItems.forEach((item) => {
            const arrow = item.querySelector('.arrow1');
            const content = item.querySelector('.content');
            arrow.classList.remove("rotate-180")
            content.classList.add("hidden")
        });
    }

    const accordionItems = document.querySelectorAll('.service');
    
    if (accordionItems.length > 0) {

        accordionItems.forEach((item) => {
            const arrow = item.querySelector('.arrow');
            const content = item.querySelector('.content');
            const content_block = content.querySelector('.content-block')
            arrow.addEventListener("click", function() {
                if (content_block.style.maxHeight === '0px') {
                    closeAllItems();
                    arrow.classList.remove("rotate-90");
                    //content.classList.remove("hidden");
                    content_block.style.maxHeight = '500px'
                } else {
                    arrow.classList.add("rotate-90");
                    content_block.style.maxHeight = '0px'
                    //content.classList.add("hidden");
                }
                
            });
        });
    }

    function closeAllItems() {
        accordionItems.forEach((item) => {
            const arrow = item.querySelector('.arrow');
            const content = item.querySelector('.content');
            const content_block = content.querySelector('.content-block')
            arrow.classList.add("rotate-90");
            content_block.style.maxHeight = '0px'
        });
    }
})

document.addEventListener("DOMContentLoaded", function() {
    function updateFeatures() {
        const scrollPercentage = (featuresContainer.scrollLeft / (featuresContainer.scrollWidth - featuresContainer.clientWidth)) * 100;
        // Update the appearance of the scroll dots
        featuresDots.forEach((dot, index) => {
            if (index * (100 / (featuresDots.length - 1)) <= scrollPercentage) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    // Features
    const featuresContainer = document.getElementById("featuresContainer")
    const featuresScrollbar = document.getElementById("featuresScrollbar")
    const featuresDots = []
    if (featuresContainer) {
        
        for (let i = 0; i < featuresContainer.children.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('scroll-dot');
            featuresDots.push(dot);
            featuresScrollbar.appendChild(dot);
        }
        
        // Update scroll dots based on the scroll position
        featuresContainer.addEventListener('scroll', updateFeatures);
    }
    
    // Gallery
    const galleryContainer = document.getElementById('galleryContainer');
    const customScrollbar = document.getElementById('customScrollbar');
    const scrollDots = [];
    
    // Create scroll dots based on the number of images
    for (let i = 0; i < galleryContainer.children[0].children.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('scroll-dot');
        scrollDots.push(dot);
        customScrollbar.appendChild(dot);
    }
    
    // Update scroll dots based on the scroll position
    galleryContainer.addEventListener('scroll', updateScroll);
    
    function updateScroll() {
        const scrollPercentage = (galleryContainer.scrollLeft / (galleryContainer.scrollWidth - galleryContainer.clientWidth)) * 100;
    
        // Update the appearance of the scroll dots
        scrollDots.forEach((dot, index) => {
            if (index * (100 / (scrollDots.length - 1)) <= scrollPercentage) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

})

document.addEventListener("DOMContentLoaded", function() {
    const quoteContainer = document.getElementById('comments');
    const quoteContainer1 = document.getElementById("comments-1")

    if (quoteContainer) {
        comments1.forEach((item, index) => {
            let element = document.createElement("div")
            element.innerHTML = `
                <div class="bg-white rounded-3xl h-full px-6 py-3 md:px-8 md:py-4 min-w-[400px] md:min-w-[500px]">
                    <div class="flex flex-col justify-between h-full">
                        <div class="flex flex-col">
                            <img src="./imgs/quote.svg" width="50" >
                            <p class="text-secondary font-semibold text-xl md:text-xl mb-2 uppercase mt-4">${item.title}</p>
                            <img src="./imgs/quote-stars.svg" width="120" >
                            <p class="text-gray-400 text-sm mt-6 max-w-[550px]">
                                ${item.description}
                            </p>
                        </div>
                        
                        <div class="flex">
                            <div class="flex items-center space-x-2 mt-8">
                                <div class="bg-primary text-white shadow font-medium rounded-full w-12 h-12 text-xl">
                                    <div class="flex items-center justify-center h-full">
                                        ${item.icon}
                                    </div>
                                </div>
                                <span class="font-mont font-semibold">
                                    ${item.author}
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                `
            quoteContainer.appendChild(element)
        }) 
    }
    
    if (quoteContainer1) {
        comments2.forEach((item, index) => {
            let element = document.createElement("div")
            element.innerHTML = `
            <div class="bg-white rounded-3xl h-full px-6 py-3 md:px-8 md:py-4 min-w-[400px] md:min-w-[500px]">
                    <div class="flex flex-col justify-between h-full">
                        <div class="flex flex-col">
                            <img src="./imgs/quote.svg" width="50" >
                            <p class="text-secondary font-semibold text-xl md:text-xl mb-2 uppercase mt-4">${item.title}</p>
                            <img src="./imgs/quote-stars.svg" width="120" >
                            <p class="text-gray-400 text-sm mt-6 max-w-[550px]">
                                ${item.description}
                            </p>
                        </div>
                        
                        <div class="flex">
                            <div class="flex items-center space-x-2 mt-8">
                                <div class="bg-primary text-white shadow font-medium rounded-full w-12 h-12 text-xl">
                                    <div class="flex items-center justify-center h-full">
                                        ${item.icon}
                                    </div>
                                </div>
                                <span class="font-mont font-semibold">
                                    ${item.author}
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            `
            quoteContainer1.appendChild(element)
        })
    }   

    let scrollSpeed1 = 0.1; // Increase/decrease for faster/slower scrolling
    let scrollSpeed2 = 0.1;

    // Function to scroll the container horizontally
    function scrollHorizontally() {
        quoteContainer.scrollLeft += scrollSpeed1;

        // Reset scroll to 0 when it reaches the end
        if (quoteContainer.scrollLeft + 2 >= quoteContainer.scrollWidth - quoteContainer.clientWidth) {
            scrollSpeed1 = -0.2;
        } else if (quoteContainer.scrollLeft <= 0) {
            scrollSpeed1 = 0.5
        }
    }

    function scrollHorizontally1() {
        quoteContainer1.scrollLeft += scrollSpeed2;

        // Reset scroll to 0 when it reaches the end
        if (quoteContainer1.scrollLeft + 2 >= quoteContainer1.scrollWidth - quoteContainer1.clientWidth) {
            scrollSpeed2 = -0.2;
        } else if (quoteContainer1.scrollLeft <= 0) {
            scrollSpeed2 = 0.5
        }
    }

    if (quoteContainer) {
        setInterval(scrollHorizontally, 6);
        setInterval(scrollHorizontally1, 8)
    }
    // Call the scrollHorizontally function at regular intervals

})

function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var body = document.body

    if(mobileMenu.style.height === '0px') {
        mobileMenu.style.height = '100vh'
    } else {
        mobileMenu.style.height = '0px'
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const hoverElement = document.querySelector('.arrow-container');
    const circle = document.querySelector('.circle')

    hoverElement.addEventListener('mouseover', function (e) {
      if (detectMob() === false) {
        circle.style.transform = 'scale(1)';
        updateCirclePosition(e);
      }
    });

    hoverElement.addEventListener('mousemove', updateCirclePosition);

    hoverElement.addEventListener('mouseout', function () {
        circle.style.transform = 'scale(0)';
    });

    function updateCirclePosition(e) {
      const rect = hoverElement.getBoundingClientRect();
      const x = e.clientX - rect.left - 15; // Adjust to center the circle on the cursor
      const y = e.clientY - rect.top - 15; // Adjust to center the circle on the cursor

      // Ensure the circle stays within the boundaries of the hoverElement
      const maxX = hoverElement.clientWidth - 30;
      const maxY = hoverElement.clientHeight - 30;

      circle.style.left = `${Math.min(maxX, Math.max(0, x))}px`;
      circle.style.top = `${Math.min(maxY, Math.max(0, y))}px`;
    }
  });

const serviceLink = document.getElementById("service-link")
const dropdown = document.getElementById("service-dropdown")

const serviceLinkMob = document.getElementById("service-link-mob")
const dropdownMob = document.getElementById("service-dropdown-mob")

serviceLinkMob.addEventListener("click", function() {
    if (dropdownMob.style.maxHeight === '0px') {
        dropdownMob.style.maxHeight = '500px'
    } else {
        dropdownMob.style.maxHeight = '0px'
    }
})

serviceLink.addEventListener("click", function() {
    if (dropdown.style.maxHeight === '0px') {
        dropdown.style.maxHeight = '500px'
    } else {
        dropdown.style.maxHeight = '0px'
    }
})


