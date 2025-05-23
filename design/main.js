{
    "chunks": [
        {
            "type": "txt",
            "chunk_number": 1,
            "lines": [
                {
                    "line_number": 1,
                    "text": "// Menu Toggle for Mobile"
                },
                {
                    "line_number": 2,
                    "text": "document.addEventListener('DOMContentLoaded', function() {"
                },
                {
                    "line_number": 3,
                    "text": "const menuToggle = document.querySelector('.menu-toggle');"
                },
                {
                    "line_number": 4,
                    "text": "const nav = document.querySelector('nav');"
                },
                {
                    "line_number": 5,
                    "text": ""
                },
                {
                    "line_number": 6,
                    "text": "menuToggle.addEventListener('click', function() {"
                },
                {
                    "line_number": 7,
                    "text": "nav.classList.toggle('active');"
                },
                {
                    "line_number": 8,
                    "text": "this.querySelector('i').classList.toggle('fa-times');"
                },
                {
                    "line_number": 9,
                    "text": "this.querySelector('i').classList.toggle('fa-bars');"
                },
                {
                    "line_number": 10,
                    "text": "});"
                },
                {
                    "line_number": 11,
                    "text": ""
                },
                {
                    "line_number": 12,
                    "text": "// Close menu when clicking on a link"
                },
                {
                    "line_number": 13,
                    "text": "const navLinks = document.querySelectorAll('nav ul li a');"
                },
                {
                    "line_number": 14,
                    "text": "navLinks.forEach(link => {"
                },
                {
                    "line_number": 15,
                    "text": "link.addEventListener('click', function() {"
                },
                {
                    "line_number": 16,
                    "text": "nav.classList.remove('active');"
                },
                {
                    "line_number": 17,
                    "text": "menuToggle.querySelector('i').classList.remove('fa-times');"
                },
                {
                    "line_number": 18,
                    "text": "menuToggle.querySelector('i').classList.add('fa-bars');"
                },
                {
                    "line_number": 19,
                    "text": "});"
                },
                {
                    "line_number": 20,
                    "text": "});"
                },
                {
                    "line_number": 21,
                    "text": ""
                },
                {
                    "line_number": 22,
                    "text": "// Smooth scrolling for anchor links"
                },
                {
                    "line_number": 23,
                    "text": "document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {"
                },
                {
                    "line_number": 24,
                    "text": "anchor.addEventListener('click', function(e) {"
                },
                {
                    "line_number": 25,
                    "text": "e.preventDefault();"
                },
                {
                    "line_number": 26,
                    "text": ""
                },
                {
                    "line_number": 27,
                    "text": "const targetId = this.getAttribute('href');"
                },
                {
                    "line_number": 28,
                    "text": "if (targetId === '#') return;"
                },
                {
                    "line_number": 29,
                    "text": ""
                },
                {
                    "line_number": 30,
                    "text": "const targetElement = document.querySelector(targetId);"
                },
                {
                    "line_number": 31,
                    "text": "if (targetElement) {"
                },
                {
                    "line_number": 32,
                    "text": "window.scrollTo({"
                },
                {
                    "line_number": 33,
                    "text": "top: targetElement.offsetTop - 80,"
                },
                {
                    "line_number": 34,
                    "text": "behavior: 'smooth'"
                },
                {
                    "line_number": 35,
                    "text": "});"
                },
                {
                    "line_number": 36,
                    "text": "}"
                },
                {
                    "line_number": 37,
                    "text": "});"
                },
                {
                    "line_number": 38,
                    "text": "});"
                },
                {
                    "line_number": 39,
                    "text": ""
                },
                {
                    "line_number": 40,
                    "text": "// Destination Filter"
                },
                {
                    "line_number": 41,
                    "text": "const filterButtons = document.querySelectorAll('.filter-btn');"
                },
                {
                    "line_number": 42,
                    "text": "const destinationItems = document.querySelectorAll('.destination-item');"
                },
                {
                    "line_number": 43,
                    "text": ""
                },
                {
                    "line_number": 44,
                    "text": "filterButtons.forEach(button => {"
                },
                {
                    "line_number": 45,
                    "text": "button.addEventListener('click', function() {"
                },
                {
                    "line_number": 46,
                    "text": "// Remove active class from all buttons"
                },
                {
                    "line_number": 47,
                    "text": "filterButtons.forEach(btn => btn.classList.remove('active'));"
                },
                {
                    "line_number": 48,
                    "text": ""
                },
                {
                    "line_number": 49,
                    "text": "// Add active class to clicked button"
                },
                {
                    "line_number": 50,
                    "text": "this.classList.add('active');"
                },
                {
                    "line_number": 51,
                    "text": ""
                },
                {
                    "line_number": 52,
                    "text": "const filterValue = this.getAttribute('data-filter');"
                },
                {
                    "line_number": 53,
                    "text": ""
                },
                {
                    "line_number": 54,
                    "text": "destinationItems.forEach(item => {"
                },
                {
                    "line_number": 55,
                    "text": "if (filterValue === 'all' || item.classList.contains(filterValue)) {"
                },
                {
                    "line_number": 56,
                    "text": "item.style.display = 'flex';"
                },
                {
                    "line_number": 57,
                    "text": "} else {"
                },
                {
                    "line_number": 58,
                    "text": "item.style.display = 'none';"
                },
                {
                    "line_number": 59,
                    "text": "}"
                },
                {
                    "line_number": 60,
                    "text": "});"
                },
                {
                    "line_number": 61,
                    "text": "});"
                },
                {
                    "line_number": 62,
                    "text": "});"
                },
                {
                    "line_number": 63,
                    "text": ""
                },
                {
                    "line_number": 64,
                    "text": "// FAQ Accordion"
                },
                {
                    "line_number": 65,
                    "text": "const faqQuestions = document.querySelectorAll('.faq-question');"
                },
                {
                    "line_number": 66,
                    "text": ""
                },
                {
                    "line_number": 67,
                    "text": "faqQuestions.forEach(question => {"
                },
                {
                    "line_number": 68,
                    "text": "question.addEventListener('click', function() {"
                },
                {
                    "line_number": 69,
                    "text": "const faqItem = this.parentElement;"
                },
                {
                    "line_number": 70,
                    "text": "faqItem.classList.toggle('active');"
                },
                {
                    "line_number": 71,
                    "text": "});"
                },
                {
                    "line_number": 72,
                    "text": "});"
                },
                {
                    "line_number": 73,
                    "text": ""
                },
                {
                    "line_number": 74,
                    "text": "// Testimonials Slider"
                },
                {
                    "line_number": 75,
                    "text": "const testimonials = document.querySelectorAll('.testimonial');"
                },
                {
                    "line_number": 76,
                    "text": "const prevBtn = document.querySelector('.prev-testimonial');"
                },
                {
                    "line_number": 77,
                    "text": "const nextBtn = document.querySelector('.next-testimonial');"
                },
                {
                    "line_number": 78,
                    "text": "let currentTestimonial = 0;"
                },
                {
                    "line_number": 79,
                    "text": ""
                },
                {
                    "line_number": 80,
                    "text": "function showTestimonial(index) {"
                },
                {
                    "line_number": 81,
                    "text": "testimonials.forEach(testimonial => testimonial.classList.remove('active'));"
                },
                {
                    "line_number": 82,
                    "text": "testimonials[index].classList.add('active');"
                },
                {
                    "line_number": 83,
                    "text": "}"
                },
                {
                    "line_number": 84,
                    "text": ""
                },
                {
                    "line_number": 85,
                    "text": "prevBtn.addEventListener('click', function() {"
                },
                {
                    "line_number": 86,
                    "text": "currentTestimonial--;"
                },
                {
                    "line_number": 87,
                    "text": "if (currentTestimonial < 0) {"
                },
                {
                    "line_number": 88,
                    "text": "currentTestimonial = testimonials.length - 1;"
                },
                {
                    "line_number": 89,
                    "text": "}"
                },
                {
                    "line_number": 90,
                    "text": "showTestimonial(currentTestimonial);"
                },
                {
                    "line_number": 91,
                    "text": "});"
                },
                {
                    "line_number": 92,
                    "text": ""
                },
                {
                    "line_number": 93,
                    "text": "nextBtn.addEventListener('click', function() {"
                },
                {
                    "line_number": 94,
                    "text": "currentTestimonial++;"
                },
                {
                    "line_number": 95,
                    "text": "if (currentTestimonial >= testimonials.length) {"
                },
                {
                    "line_number": 96,
                    "text": "currentTestimonial = 0;"
                },
                {
                    "line_number": 97,
                    "text": "}"
                },
                {
                    "line_number": 98,
                    "text": "showTestimonial(currentTestimonial);"
                },
                {
                    "line_number": 99,
                    "text": "});"
                },
                {
                    "line_number": 100,
                    "text": ""
                },
                {
                    "line_number": 101,
                    "text": "// Initialize first testimonial"
                },
                {
                    "line_number": 102,
                    "text": "showTestimonial(currentTestimonial);"
                },
                {
                    "line_number": 103,
                    "text": "});"
                }
            ],
            "token_count": 745
        }
    ]
}