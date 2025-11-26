// Philippine Airlines Homepage - Interactive JavaScript

// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('primaryNav');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// ===================================
// Tab Switching (Book/Manage/Status)
// ===================================
const tabButtons = document.querySelectorAll('.tab-btn');

function updateTabs(newActive) {
    tabButtons.forEach(tab => {
        const isActive = tab === newActive;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });
}

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        updateTabs(btn);
        const targetSection = document.getElementById(btn.dataset.tab);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    btn.addEventListener('keydown', (event) => {
        const index = Array.from(tabButtons).indexOf(btn);
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const nextIndex = (index + direction + tabButtons.length) % tabButtons.length;
            tabButtons[nextIndex].focus();
        }
    });
});

if (tabButtons.length) {
    updateTabs(tabButtons[0]);
}

// ===================================
// Booking Tabs Highlight
// ===================================
const bookingTabs = document.querySelectorAll('.booking-tab');
bookingTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        bookingTabs.forEach(btn => btn.classList.remove('active'));
        tab.classList.add('active');
    });
});

// ===================================
// Trip Type Radio Selection
// ===================================
const tripTypeRadios = document.querySelectorAll('input[name="tripType"]');
const returnDateGroup = document.getElementById('returnGroup');

function updateReturnDateField() {
    if (!returnDateGroup) return;
    const input = returnDateGroup.querySelector('input');
    const checkedRadio = document.querySelector('input[name="tripType"]:checked');
    const isOneWay = checkedRadio && checkedRadio.value === 'oneway';
    
    returnDateGroup.style.opacity = isOneWay ? '0.5' : '1';
    if (input) {
        input.disabled = isOneWay;
        if (isOneWay) {
            input.value = '';
        }
    }
}

// Set initial state on page load
updateReturnDateField();

// Update on change
tripTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        updateReturnDateField();
    });
});

// ===================================
// Airport Search with Autocomplete (Simplified)
// ===================================
const airportData = [
    { code: 'MNL', name: 'Manila, Philippines (Ninoy Aquino)', city: 'Manila' },
    { code: 'CEB', name: 'Cebu, Philippines', city: 'Cebu' },
    { code: 'DVO', name: 'Davao, Philippines', city: 'Davao' },
    { code: 'SIN', name: 'Singapore, Singapore (Changi)', city: 'Singapore' },
    { code: 'HKG', name: 'Hong Kong, China', city: 'Hong Kong' },
    { code: 'NRT', name: 'Tokyo, Japan (Narita)', city: 'Tokyo' },
    { code: 'ICN', name: 'Seoul, South Korea (Incheon)', city: 'Seoul' },
    { code: 'SYD', name: 'Sydney, Australia', city: 'Sydney' },
    { code: 'LAX', name: 'Los Angeles, USA', city: 'Los Angeles' },
    { code: 'SFO', name: 'San Francisco, USA', city: 'San Francisco' },
    { code: 'DXB', name: 'Dubai, UAE', city: 'Dubai' },
    { code: 'BKK', name: 'Bangkok, Thailand', city: 'Bangkok' },
];

function setupAirportAutocomplete(inputId) {
    const input = document.getElementById(inputId);
    const panel = document.getElementById(`${inputId}-list`);
    if (!input || !panel) return;

    let activeIndex = -1;
    let currentResults = [];

    function renderResults(results) {
        panel.innerHTML = '';
        if (!results.length) {
            panel.classList.remove('active');
            input.setAttribute('aria-expanded', 'false');
            return;
        }

        results.forEach((airport, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'suggestion-item';
            button.setAttribute('role', 'option');
            button.setAttribute('aria-selected', String(index === activeIndex));
            button.innerHTML = `
                <span>
                    <span class="suggestion-code">${airport.code}</span>
                    ${airport.city}
                </span>
                <span>${airport.name}</span>
            `;
            button.addEventListener('click', () => selectResult(index));
            panel.appendChild(button);
        });

        panel.classList.add('active');
        input.setAttribute('aria-expanded', 'true');
    }

    function selectResult(index) {
        const selection = currentResults[index];
        if (!selection) return;
        input.value = `${selection.city} (${selection.code})`;
        panel.classList.remove('active');
        input.setAttribute('aria-expanded', 'false');
    }

    input.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        activeIndex = -1;
        if (value.length < 2) {
            renderResults([]);
            return;
        }
        
        currentResults = airportData.filter(airport =>
            airport.name.toLowerCase().includes(value) || 
            airport.code.toLowerCase().includes(value) ||
            airport.city.toLowerCase().includes(value)
        ).slice(0, 6);

        renderResults(currentResults);
    });

    input.addEventListener('keydown', (e) => {
        if (!panel.classList.contains('active')) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = (activeIndex + 1) % currentResults.length;
            updateActiveOption();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = (activeIndex - 1 + currentResults.length) % currentResults.length;
            updateActiveOption();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            selectResult(activeIndex);
        } else if (e.key === 'Escape') {
            panel.classList.remove('active');
            input.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && e.target !== input) {
            panel.classList.remove('active');
            input.setAttribute('aria-expanded', 'false');
        }
    });

    function updateActiveOption() {
        [...panel.children].forEach((child, index) => {
            child.setAttribute('aria-selected', String(index === activeIndex));
        });
    }
}

setupAirportAutocomplete('from');
setupAirportAutocomplete('to');

// ===================================
// Date Picker Setup (Simplified)
// ===================================
// ===================================
// Calendar Picker
// ===================================

function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function parseDate(dateString) {
    const parts = dateString.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = parseInt(parts[0]);
    const month = months.indexOf(parts[1]);
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
}

// Store calendar instances
const calendarInstances = {};

function createCalendar(containerId, inputId, minDate = null) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    if (!container || !input) return;

    let currentDate = new Date();
    let selectedDate = null;
    
    // Parse existing value if present
    if (input.value) {
        try {
            selectedDate = parseDate(input.value);
            currentDate = new Date(selectedDate);
        } catch (e) {
            // Use current date if parsing fails
        }
    }
    
    // Store minDate in the instance
    if (!calendarInstances[containerId]) {
        calendarInstances[containerId] = {};
    }
    calendarInstances[containerId].minDate = minDate;

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        container.innerHTML = `
            <div class="calendar-header">
                <button type="button" class="calendar-nav-btn prev-month" aria-label="Previous month">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <div class="calendar-month-year">${monthNames[month]} ${year}</div>
                <button type="button" class="calendar-nav-btn next-month" aria-label="Next month">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
            <div class="calendar-weekdays">
                ${weekdays.map(day => `<div class="calendar-weekday">${day}</div>`).join('')}
            </div>
            <div class="calendar-days">
                ${Array(startingDayOfWeek).fill(null).map(() => 
                    `<button type="button" class="calendar-day other-month" disabled></button>`
                ).join('')}
                ${Array.from({ length: daysInMonth }, (_, i) => {
                    const day = i + 1;
                    const date = new Date(year, month, day);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    // Use stored minDate or passed minDate
                    const effectiveMinDate = calendarInstances[containerId]?.minDate || minDate;
                    const isDisabled = effectiveMinDate && date < effectiveMinDate;
                    const isToday = date.getTime() === today.getTime();
                    const isSelected = selectedDate && 
                        date.getDate() === selectedDate.getDate() &&
                        date.getMonth() === selectedDate.getMonth() &&
                        date.getFullYear() === selectedDate.getFullYear();
                    
                    return `
                        <button 
                            type="button"
                            class="calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${isDisabled ? 'disabled' : ''}"
                            ${isDisabled ? 'disabled' : ''}
                            data-date="${day}"
                        >
                            ${day}
                        </button>
                    `;
                }).join('')}
            </div>
        `;

        // Event listeners
        container.querySelector('.prev-month').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        container.querySelector('.next-month').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        container.querySelectorAll('.calendar-day:not(.disabled)').forEach(dayBtn => {
            dayBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                const day = parseInt(dayBtn.dataset.date);
                selectedDate = new Date(year, month, day);
                input.value = formatDate(selectedDate);
                container.classList.remove('active');
                
                // If this is departure date, update return date min
                if (inputId === 'departDate') {
                    const returnInput = document.getElementById('returnDate');
                    const returnCalendar = document.getElementById('returnCalendar');
                    if (returnInput && returnCalendar && calendarInstances['returnCalendar']) {
                        // Update min date
                        calendarInstances['returnCalendar'].minDate = selectedDate;
                        
                        // Re-render the return calendar
                        if (calendarInstances['returnCalendar'].renderFn) {
                            calendarInstances['returnCalendar'].renderFn();
                        }
                        
                        // If return date is before new min date, clear it
                        if (returnInput.value) {
                            try {
                                const returnDate = parseDate(returnInput.value);
                                if (returnDate < selectedDate) {
                                    returnInput.value = '';
                                }
                            } catch (e) {
                                // Ignore parse errors
                            }
                        }
                    }
                }
                
                return false;
            });
        });
    }

    // Store renderCalendar function in instance
    calendarInstances[containerId].renderFn = renderCalendar;
    
    // Toggle calendar on input click
    const clickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        container.classList.toggle('active');
        
        // Close other calendars
        document.querySelectorAll('.calendar-picker').forEach(cal => {
            if (cal !== container) {
                cal.classList.remove('active');
            }
        });
        return false;
    };
    
    // Remove old listener if exists
    if (calendarInstances[containerId].clickHandler) {
        input.removeEventListener('click', calendarInstances[containerId].clickHandler);
    }
    input.addEventListener('click', clickHandler);
    calendarInstances[containerId].clickHandler = clickHandler;

    // Close calendar when clicking outside
    const outsideClickHandler = (e) => {
        if (!container.contains(e.target) && !input.contains(e.target)) {
            container.classList.remove('active');
        }
    };
    
    // Remove old listener if exists
    if (calendarInstances[containerId].outsideClickHandler) {
        document.removeEventListener('click', calendarInstances[containerId].outsideClickHandler);
    }
    document.addEventListener('click', outsideClickHandler);
    calendarInstances[containerId].outsideClickHandler = outsideClickHandler;

    renderCalendar();
}

// Initialize calendars
createCalendar('departCalendar', 'departDate');

// Initialize return calendar - check if departure date is set
const departInput = document.getElementById('departDate');
let returnMinDate = null;
if (departInput && departInput.value) {
    try {
        returnMinDate = parseDate(departInput.value);
    } catch (e) {
        // Use today as min if parsing fails
        returnMinDate = new Date();
        returnMinDate.setHours(0, 0, 0, 0);
    }
} else {
    // Use today as minimum
    returnMinDate = new Date();
    returnMinDate.setHours(0, 0, 0, 0);
}

createCalendar('returnCalendar', 'returnDate', returnMinDate);

// ===================================
// Swap Destinations
// ===================================
const swapBtn = document.querySelector('.swap-btn');
const fromInput = document.getElementById('from');
const toInput = document.getElementById('to');

if (swapBtn && fromInput && toInput) {
    swapBtn.addEventListener('click', () => {
        [fromInput.value, toInput.value] = [toInput.value, fromInput.value];
        swapBtn.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            swapBtn.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// ===================================
// Helper Functions for API
// ===================================

function extractAirportCode(inputValue) {
    // Extract airport code from format like "Brussels-BRU" or "BRU"
    const match = inputValue.match(/-([A-Z]{3})$/i);
    if (match) {
        return match[1].toUpperCase();
    }
    // If no dash format, try to extract 3-letter code
    const codeMatch = inputValue.match(/\b([A-Z]{3})\b/i);
    if (codeMatch) {
        return codeMatch[1].toUpperCase();
    }
    return inputValue.toUpperCase().slice(-3);
}

function convertDateFormat(dateString) {
    // Convert from "26-Nov-2025" to "2025-11-30T00:00:00.000"
    const months = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };
    
    const parts = dateString.split('-');
    if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const month = months[parts[1]] || '01';
        const year = parts[2];
        return `${year}-${month}-${day}T00:00:00.000`;
    }
    return dateString;
}

function getCommercialFareFamilies() {
    // Return the commercial fare families array
    return ["NDCTALL", "DEMOALL"];
}

function buildTravelersArray(paxCount) {
    // Build travelers array - for now, all adults
    // When popup is implemented, this will use actual passenger types
    const travelers = [];
    for (let i = 0; i < parseInt(paxCount); i++) {
        travelers.push({ passengerTypeCode: 'ADT' });
    }
    return travelers;
}

// ===================================
// Form Validation & Submission
// ===================================
const bookingForm = document.querySelector('.booking-form');
const bookingFeedback = document.getElementById('bookingFeedback');

if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const fromValue = fromInput.value.trim();
        const toValue = toInput.value.trim();
        const departDate = document.getElementById('departDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const paxCount = document.getElementById('paxCount')?.value || '1';
        const cabinClass = document.getElementById('cabinClass')?.value || 'economy';
        const tripType = document.querySelector('input[name="tripType"]:checked').value;
        
        // Validation
        if (!fromValue || !toValue) {
            bookingFeedback.textContent = 'Please choose both origin and destination airports.';
            bookingFeedback.style.color = '#d32f2f';
            return;
        }
        
        if (!departDate) {
            bookingFeedback.textContent = 'Select a departure date to continue.';
            bookingFeedback.style.color = '#d32f2f';
            return;
        }
        
        if (tripType === 'roundtrip' && !returnDate) {
            bookingFeedback.textContent = 'Return date is required for round trips.';
            bookingFeedback.style.color = '#d32f2f';
            return;
        }
        
        // Extract airport codes
        const originCode = extractAirportCode(fromValue);
        const destinationCode = extractAirportCode(toValue);

        // Convert dates
        const formattedDepartDate = convertDateFormat(departDate);
        const formattedReturnDate = returnDate ? convertDateFormat(returnDate) : null;

        // Build itineraries array
        const itineraries = [{
            originLocationCode: originCode,
            destinationLocationCode: destinationCode,
            departureDateTime: formattedDepartDate,
            isRequestedBound: true
        }];

        // Add return itinerary for round trip
        if (tripType === 'roundtrip' && formattedReturnDate) {
            itineraries.push({
                originLocationCode: destinationCode,
                destinationLocationCode: originCode,
                departureDateTime: formattedReturnDate,
                isRequestedBound: true
            });
        }

        // Build travelers array
        const travelers = buildTravelersArray(paxCount);

        // Get commercial fare families
        const commercialFareFamilies = getCommercialFareFamilies();

        // Build request payload with the required structure
        const requestPayload = {
            commercialFareFamilies: commercialFareFamilies,
            itineraries: itineraries,
            travelers: travelers,
            searchPreferences: {
                showMilesPrice: false
            }
        };

        // Get language (default to 'en' if not set)
        const lang = 'en'; // You can get this from language selector if implemented

        // RefX App URL (UAT environment)
        const refxAppUrl = `https://uat.digital.airline.amadeus.com/br/bookingtestinternalimpl?lang=${lang}`;


        // Log the payload for debugging
        console.log('Flight Search Payload:', JSON.stringify(requestPayload, null, 2));
        console.log('RefX App URL:', refxAppUrl);

        // Only proceed with RefX redirect on form submit, not on date clicks
        // Create a form to POST the JSON data to RefX app
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = refxAppUrl;
        form.style.display = 'none';
        
        // Send JSON as a form field - RefX app should parse it
        const jsonInput = document.createElement('input');
        jsonInput.type = 'hidden';
        jsonInput.name = 'search';
        jsonInput.value = JSON.stringify(requestPayload);
        form.appendChild(jsonInput);
        
        document.body.appendChild(form);
        
        // Submit the form to open RefX app
        form.submit();
    });
}

// ===================================
// Sticky Header on Scroll
// ===================================
let lastScrollTop = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 80) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
    lastScrollTop = scrollTop;
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Card Hover Effects
// ===================================
const cards = document.querySelectorAll('.promo-card, .destination-card, .service-card, .manage-card, .checkin-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// Destination Card Interactions
// ===================================
const bookButtons = document.querySelectorAll('.btn-book');

bookButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const destinationCard = this.closest('.destination-card');
        const destination = destinationCard.querySelector('h3').textContent;
        const price = destinationCard.querySelector('.price').textContent;
        console.log(`Booking flight to ${destination} - ${price}`);
        alert(`Booking flight to ${destination}\n${price}`);
    });
});

// ===================================
// Flight Status Form
// ===================================
const statusForm = document.querySelector('.status-form');
const statusFeedback = document.getElementById('statusFeedback');

if (statusForm) {
    statusForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const flight = document.getElementById('statusFlightNumber').value.trim();
        const date = document.getElementById('statusDate').value;

        if (!flight || !date) {
            statusFeedback.textContent = 'Enter a flight number and date.';
            return;
        }

        statusFeedback.textContent = `Checking updates for ${flight.toUpperCase()} on ${date}...`;
        setTimeout(() => {
            statusFeedback.textContent = 'No delays reported. We will notify you of any changes.';
        }, 1000);
    });
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🛫 Philippine Airlines Homepage', 'color: #003087; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #0066CC; font-size: 14px;');

// ===================================
// Initialize on Page Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    if (fromInput) fromInput.placeholder = 'e.g., Manila (MNL)';
    if (toInput) toInput.placeholder = 'e.g., Tokyo (NRT)';
    
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -120px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(24px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ===================================
// Window Resize Handler
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized:', window.innerWidth, 'x', window.innerHeight);
        if (window.innerWidth > 1024 && navLinks && mobileMenuBtn) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    }, 250);
});
