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

const arrows = document.querySelectorAll('.arrow')
arrows.forEach((arrow, ind) => {
    arrow.addEventListener("click", function() {
        let content = document.getElementById(arrow.dataset.content)
        if (content.classList.contains("hidden")) {
            arrow.classList.remove("rotate-90")
            content.classList.remove("hidden")
        } else {
            arrow.classList.add("rotate-90")
            content.classList.add("hidden")
        }
    })
})

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

const quoteContainer = document.getElementById('comments');
const quoteContainer1 = document.getElementById("comments-1")

comments1.forEach((item, index) => {
    let element = document.createElement("div")
    element.innerHTML = `
    <div class="bg-white rounded-3xl h-full px-6 py-3 md:px-10 md:py-6 min-w-[500px] md:min-w-[600px]">
        <div class="flex flex-col justify-between h-full">
            <div class="flex flex-col">
                <img src="./imgs/quote.svg" width="50" >
                <p class="text-secondary font-semibold text-xl md:text-2xl mb-2 uppercase mt-4">${item.title}</p>
                <img src="./imgs/quote-stars.svg" width="120" >
                <p class="text-gray-400 mt-6 max-w-[550px]">
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
                    <span class="font-mont font-semibold text-lg md:text-xl">
                        ${item.author}
                    </span>
                </div>
            </div>
            
        </div>
    </div>
    `
    quoteContainer.appendChild(element)
}) 

comments2.forEach((item, index) => {
    let element = document.createElement("div")
    element.innerHTML = `
    <div class="bg-white rounded-3xl h-full px-6 py-3 md:px-10 md:py-6 min-w-[500px] md:min-w-[600px]">
        <div class="flex flex-col justify-between h-full">
            <div class="flex flex-col">
                <img src="./imgs/quote.svg" width="50" >
                <p class="text-secondary font-semibold text-xl md:text-2xl  mb-2 uppercase mt-4">${item.title}</p>
                <img src="./imgs/quote-stars.svg" width="120" >
                <p class="text-gray-400 mt-6 max-w-[550px]">
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
                    <span class="font-mont font-semibold text-xl">
                        ${item.author}
                    </span>
                </div>
            </div>
            
        </div>
    </div>
    `
    quoteContainer1.appendChild(element)
})


let scrollSpeed1 = 1; // Increase/decrease for faster/slower scrolling
let scrollSpeed2 = 1;

// Function to scroll the container horizontally
function scrollHorizontally() {
    quoteContainer.scrollLeft += scrollSpeed1;

    // Reset scroll to 0 when it reaches the end
    if (quoteContainer.scrollLeft + 2 >= quoteContainer.scrollWidth - quoteContainer.clientWidth) {
        console.log("hello")
        scrollSpeed1 = -0.5;
    } else if (quoteContainer.scrollLeft <= 0) {
        console.log("hello1")
        scrollSpeed1 = 1
    }
}

function scrollHorizontally1() {
    quoteContainer1.scrollLeft += scrollSpeed2;

    // Reset scroll to 0 when it reaches the end
    if (quoteContainer1.scrollLeft + 2 >= quoteContainer1.scrollWidth - quoteContainer1.clientWidth) {
        console.log("hello")
        scrollSpeed2 = -0.5;
    } else if (quoteContainer1.scrollLeft <= 0) {
        console.log("hello1")
        scrollSpeed2 = 1
    }
}

// Call the scrollHorizontally function at regular intervals
setInterval(scrollHorizontally, 5);
setInterval(scrollHorizontally1, 8)


// Set the scroll speed (adjust as needed)
{/* <footer class="mt-20">
            <div class="border-t border-gray-300 py-10">
                <div class="container-sm px-10">
                    <div class="flex flex-wrap items-start justify-between gap-8">
                        <div class="block text-light dark:text-black">
                            <img src="./imgs/logo.png" width="140">
                            <p class="mt-6 mb-3">License information:</p>
                            <p class="uppercase">
                                CAL-T MTR0192240 <br> USDOT 3478448 <br> CA571128
                            </p>
                        </div>
                        <div class="hidden md:flex flex-col space-y-3 text-light dark:text-black">
                            <a class="text-lg">Quick Links</a>
                            <a class="text-lg">Home</a>
                            <a class="text-lg">About Us</a>
                            <a class="text-lg">Gallery</a>
                            <a class="text-lg">Contact</a>
                            <a class="text-lg">Testimonials</a>
                        </div>
                        <div class="hidden md:flex flex-col space-y-3 text-light dark:text-black">
                            <a class="text-lg">Our Services</a>
                            <a class="text-lg">Local moving</a>
                            <a class="text-lg">Local-distance</a>
                            <a class="text-lg">Commercial moving</a>
                            <a class="text-lg">Packing and unpacking</a>
                            <a class="text-lg">Moving labor</a>
                            <a class="text-lg">Delivery</a>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <div class="flex items-center space-x-3 text-light dark:text-black text-lg">
                                <div id="phone-icon" class="bg-white dark:bg-black"></div>
                                <p>(424) 394-6616</p>
                            </div>
                            <div class="flex items-center space-x-3 text-light dark:text-black text-lg">
                                <div id="location-icon" class="bg-white dark:bg-black"></div>
                                <p>909 West Temple Street <br> Los Angeles, CA 90012 USA</p>
                            </div>
                            <div class="flex items-center space-x-3 text-light dark:text-black text-lg">
                                <div id="email-icon" class="bg-white dark:bg-black"></div>
                                <p>info@prop-mov.com</p>
                            </div>
                            <p class="text-light dark:text-black text-lg">Monday - Sunday: 7 AM – 9 PM</p>
                        </div>
                        <button class="bg-primary text-secondary text-md px-8 py-3 rounded-full font-semibold">GET A QUOTE</button>
                    </div>
                </div>
            </div>
        </footer> */}