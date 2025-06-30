const tripData = {
    recommendations: [
        { type: 'hotel', city: 'Paris', name: 'Paris Marriott Opera Ambassador', details: 'Near Opera Garnier', rating: '3.9', price: '$294' },
        { type: 'hotel', city: 'Paris', name: 'Courtyard Paris Gare de Lyon', details: 'Modern, great transport', rating: '4.4', price: '$207' },
        { type: 'restaurant', city: 'Paris', name: 'Le Procope', details: 'French Cuisine', rating: '3.8', price: '$$$' },
        { type: 'experience', city: 'Paris', name: 'Seine River Cruise', details: 'Iconic views from the water' },
        { type: 'hotel', city: 'Brussels', name: 'Brussels Marriott Hotel Grand Place', details: 'Central', rating: '4.1', price: '$174' },
        { type: 'restaurant', city: 'Brussels', name: 'Chez Léon', details: 'Belgian Cuisine', rating: '3.6', price: '$$' },
        { type: 'experience', city: 'Brussels', name: 'Chocolate-Making Workshop', details: 'Hands-on delicious fun' },
        { type: 'hotel', city: 'Bruges', name: 'Hotel Dukes\' Palace Bruges', details: 'Historic, central', rating: '4.6', price: '$146' },
        { type: 'restaurant', city: 'Bruges', name: 'House of Waffles', details: 'Bakery/Snack', rating: '4.6', price: '$$' },
        { type: 'experience', city: 'Bruges', name: 'Canal Boat Tour', details: 'See the city from the water' },
        { type: 'hotel', city: 'Amsterdam', name: 'Amsterdam Marriott Hotel', details: 'Near Vondelpark', rating: '4.3', price: '$198' },
        { type: 'restaurant', city: 'Amsterdam', name: 'The Seafood Bar', details: 'Seafood', rating: '4.6', price: '$$$' },
        { type: 'experience', city: 'Amsterdam', name: 'Bike Tour', details: 'Explore like a local' },
        { type: 'hotel', city: 'Cologne', name: 'Ruby Ella Hotel', details: 'Stylish & modern', rating: '4.4', price: '$97' },
        { type: 'restaurant', city: 'Cologne', name: 'Peters Brauhaus', details: 'German, Pub', rating: '3.9', price: '$$' },
        { type: 'experience', city: 'Cologne', name: 'Cologne Cathedral Tour', details: 'Historic architecture' },
        { type: 'hotel', city: 'Luxembourg', name: 'Le Royal Hotel', details: 'Luxury stay', rating: '4.5', price: '$236' },
        { type: 'restaurant', city: 'Luxembourg', name: 'Le Sud', details: 'Fine Dining, French', rating: '4.4', price: '$$$$' },
        { type: 'experience', city: 'Luxembourg', name: 'Bock Casemates', details: 'Underground fortifications' },
        { type: 'hotel', city: 'Frankfurt', name: 'NH Collection Frankfurt City', details: 'Modern, near shopping', rating: '4.3', price: '$102' },
        { type: 'restaurant', city: 'Frankfurt', name: 'Apfelwein Wagner', details: 'German, European', rating: '3.8', price: '$$' },
        { type: 'experience', city: 'Frankfurt', name: 'Römerberg Square', details: 'Historic city center' },
        { type: 'hotel', city: 'Interlaken', name: 'Hotel Interlaken', details: 'Historic, scenic', rating: '4.2', price: '$147' },
        { type: 'restaurant', city: 'Interlaken', name: 'Restaurant Stadthaus', details: 'Swiss, European', rating: '4.2', price: '$$-$$$' },
        { type: 'experience', city: 'Interlaken', name: 'Jungfraujoch Excursion', details: 'Top of Europe' },
        { type: 'hotel', city: 'Montreux', name: 'Eurotel Montreux', details: 'Scenic lake views', rating: '4.2', price: '$172' },
        { type: 'restaurant', city: 'Montreux', name: 'Le Palais Oriental', details: 'Lebanese, Persian', rating: '3.9', price: '$$$$' },
        { type: 'experience', city: 'Montreux', name: 'Château de Chillon', details: 'Iconic lakeside castle' },
    ],
    routeMap: ["Paris", "Brussels", "Bruges", "Amsterdam", "Cologne", "Luxembourg", "Frankfurt", "Interlaken", "Montreux", "Paris"],
    places: {
        restaurants: [
            { name: 'Le Procope', city: 'Paris', address: '13 Rue de l\'Ancienne Comédie, 75006 Paris', mapsUrl: 'https://goo.gl/maps/A2ToXN9B7ps' },
            { name: 'La Mère Poulard', city: 'Mont-Saint-Michel', address: 'Grande Rue, 50170 Le Mont-Saint-Michel', mapsUrl: 'https://goo.gl/maps/Gb8rYzFNYX32' },
            { name: 'House of Waffles', city: 'Bruges', address: 'Wollestraat 31, 8000 Brugge, Belgium', mapsUrl: 'https://goo.gl/maps/U7PH6qBw3S52' },
            { name: 'De Kas', city: 'Amsterdam', address: 'Kamerlingh Onneslaan 3, 1097 DE Amsterdam', mapsUrl: 'https://goo.gl/maps/N48SJMBvZrS2' },
            { name: 'The Seafood Bar', city: 'Amsterdam', address: 'Spui 15, 1012 WX Amsterdam', mapsUrl: 'https://goo.gl/maps/turFcfHS11WZ4zqV9' },
            { name: 'Guts & Glory', city: 'Amsterdam', address: 'Utrechtsestraat 6, 1017 VN Amsterdam', mapsUrl: 'https://goo.gl/maps/KrhvKScNkzR2' },
            { name: 'Brauerei Schumacher', city: 'Düsseldorf', address: 'Oststraße 123, 40210 Düsseldorf', mapsUrl: 'https://goo.gl/maps/QqNZk4et2Fr' },
            { name: 'Hanse-Stube', city: 'Cologne', address: 'Trankgasse 1-5, 50667 Köln', mapsUrl: 'https://goo.gl/maps/jXdCGaPSWyr' },
            { name: 'Le Sud', city: 'Luxembourg', address: '8 Rives de Clausen, 2165 Luxembourg', mapsUrl: 'https://goo.gl/maps/DVw9Kwz5DgM2' },
            { name: 'Apfelwein Wagner', city: 'Frankfurt', address: 'Schweizer Str. 71, 60594 Frankfurt am Main', mapsUrl: 'https://goo.gl/maps/2LuKBeu5vK62' },
            { name: 'Wirtshaus Taube', city: 'Lucerne', address: 'Burgerstrasse 3, 6003 Luzern, Switzerland', mapsUrl: 'https://goo.gl/maps/FX6gQ3ueof8wW3mZ7' },
            { name: 'Stadthaus / Goldener Anker', city: 'Interlaken', address: 'Obere Gasse 17, 3800 Interlaken (Goldener Anker)', mapsUrl: 'https://goo.gl/maps/gTwbRYYJNXz' },
            { name: 'Le Palais Oriental', city: 'Montreux', address: 'Quai Ernest-Ansermet 23, 1820 Montreux, CH', mapsUrl: 'https://goo.gl/maps/2pcDPoNRzBF2' }
        ],
        attractions: [
            { name: 'Notre-Dame Cathedral', city: 'Paris', address: '6 Parvis Notre-Dame, 75004 Paris', mapsUrl: 'https://goo.gl/maps/E9CTtoBx3eE2' },
            { name: 'Seine River Walk / Cruise', city: 'Paris', address: 'Along Quai de Montebello & Pont Neuf', mapsUrl: 'https://goo.gl/maps/1cU6L6C4M1H2' },
            { name: 'Mont-Saint-Michel Abbey', city: 'Normandy', address: 'Mont-Saint-Michel, 50170, France', mapsUrl: 'https://goo.gl/maps/3J2n15Y1BLF2' },
            { name: 'Eiffel Tower & Trocadéro', city: 'Paris', address: 'Champ de Mars, 5 Av. Anatole France, 75007', mapsUrl: 'https://goo.gl/maps/yNPUKZJXP2q' },
            { name: 'Grand Place', city: 'Brussels', address: 'Grand-Place, 1000 Bruxelles, Belgium', mapsUrl: 'https://goo.gl/maps/Y5nRJQco11Q2' },
            { name: 'Belfry of Bruges', city: 'Bruges', address: 'Markt 7, 8000 Brugge, Belgium', mapsUrl: 'https://goo.gl/maps/tGozCpEV5TC2' },
            { name: 'Rijksmuseum', city: 'Amsterdam', address: 'Museumstraat 1, 1071 XX Amsterdam', mapsUrl: 'https://goo.gl/maps/HWdEfywMvgu' },
            { name: 'Anne Frank House', city: 'Amsterdam', address: 'Prinsengracht 263-267, 1016 GV Amsterdam', mapsUrl: 'https://goo.gl/maps/bNReuW7vhYu' },
            { name: 'Cologne Cathedral', city: 'Cologne', address: 'Domkloster 4, 50667 Köln, Germany', mapsUrl: 'https://goo.gl/maps/EEGy4zQd5F82' },
            { name: 'Porta Nigra', city: 'Trier', address: 'Porta-Nigra-Platz, 54290 Trier, Germany', mapsUrl: 'https://goo.gl/maps/rUrw5Sn9KrC2' },
            { name: 'Chapel Bridge', city: 'Lucerne', address: 'Kapellbrücke, Luzern, Switzerland', mapsUrl: 'https://goo.gl/maps/LxZpxPgca1U2' },
            { name: 'Jungfraujoch / Sphinx Observatory', city: 'Alps Region', address: 'Jungfraujoch, 3801 Fieschertal, Switzerland', mapsUrl: 'https://goo.gl/maps/vEPaKfXD3Jv' },
            { name: 'Château de Chillon', city: 'Montreux', address: 'Av. de Chillon 21, 1820 Veytaux, Switzerland', mapsUrl: 'https://goo.gl/maps/wTVQirj6c9z' },
            { name: 'Sacré-Cœur / Montmartre', city: 'Paris', address: '35 Rue du Chevalier de la Barre, 75018 Paris', mapsUrl: 'https://goo.gl/maps/WK3ixPSFDix' }
        ],
        scenicDrives: [
            { name: 'Alsace Wine Route', highlights: 'Strasbourg → Riquewihr → Ribeauvillé → Colmar → Haut-Koenigsbourg Castle', mapsUrl: 'https://goo.gl/maps/z2xQGmB7nAR2' },
            { name: 'Black Forest Scenic Route', highlights: 'Freiburg → Triberg → Titisee → Schaffhausen → Rhine Falls', mapsUrl: 'https://goo.gl/maps/atcEXAiHZbq' },
            { name: 'Interlaken to Montreux', highlights: 'Spiez → Gruyères → Lavaux Vineyards → Château de Chillon', mapsUrl: 'https://goo.gl/maps/FxZxZt1NxXQ2' },
            { name: 'Paris to Dijon (Return Route)', highlights: 'Beaune → Dijon → Fontainebleau → Paris', mapsUrl: 'https://goo.gl/maps/NLEPcCuKyhZ2' }
        ]
    }
};

// Load itinerary.json and initialize dashboard
async function initializeDashboard() {
    try {
        const response = await fetch('itinerary.json');
        if (!response.ok) throw new Error('Failed to load itinerary.json');
        const itineraryData = await response.json();
        tripData.itinerary = itineraryData;
    } catch (e) {
        console.error('Error loading itinerary.json:', e);
        tripData.itinerary = [];
    }
    populateItineraryTable();
    populateBookingsTable();
    createCostsChart();
    populateRecommendations();
    populatePlacesTables();
    setupTabs();
    setupFilters();
    displayTodayItinerary();
    displayTotalCost();
    createRouteMap();
    populateWeatherForQuickReference();
}

document.addEventListener('DOMContentLoaded', initializeDashboard);

function setupTabs() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.section');
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tab = link.dataset.tab;
            
            tabLinks.forEach(item => item.classList.remove('tab-active'));
            link.classList.add('tab-active');

            sections.forEach(section => {
                if (section.id === tab) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
}

function createRouteMap() {
    const container = document.getElementById('route-map-container');
    container.innerHTML = '';
    tripData.routeMap.forEach((city, index) => {
        const cityEl = document.createElement('div');
        cityEl.className = 'flex items-center';
        
        const cityName = document.createElement('div');
        cityName.className = 'py-2 px-3 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-400';
        cityName.textContent = city;
        cityEl.appendChild(cityName);

        if (index < tripData.routeMap.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'mx-2 md:mx-4 text-blue-400 font-bold text-xl';
            arrow.textContent = '→';
            cityEl.appendChild(arrow);
        }
        container.appendChild(cityEl);
    });
}

function addGoogleMapsLinksToHighlights(highlightsText, cityContext) {
    let processedHighlights = highlightsText;
    tripData.recommendations.forEach(rec => {
        // Only link if the recommendation's city matches the itinerary item's city or if it's a general experience
        // Or if the recommendation name is very specific and likely a landmark
        const isRelevant = rec.city === cityContext || 
                          rec.type === 'experience' ||
                          ['Eiffel Tower', 'Notre-Dame Cathedral', 'Mont-Saint-Michel Abbey', 'Grand Place', 'Atomium', 'Manneken Pis', 'Grote Markt', 'Belfry Tower', 'Basilica of the Holy Blood', 'Choco-Story Museum', 'Cathedral of Our Lady', 'Dam Square', 'Royal Palace', 'Rijksmuseum', 'Van Gogh Museum', 'Anne Frank House', 'Zaanse Schans', 'Giethoorn', 'Cologne Cathedral', 'Reichsburg Castle', 'Porta Nigra', 'Trier Cathedral', 'Karl Marx House', 'Bock Casemates', 'Römerberg Square', 'Palmengarten', 'Main Tower', 'Heidelberg Castle', 'Old Bridge', 'Chapel Bridge', 'Spiez Castle', 'Gruyères Castle', 'Rochers-de-Naye', 'Château de Chillon', 'Citadel of Besançon', 'Château de Fontainebleau', 'Sacré-Cœur', 'Arc de Triomphe'].includes(rec.name);

        if (isRelevant) {
            // Create a regex to match the recommendation name, case-insensitive, and as a whole word
            // Using \b for word boundaries to prevent partial matches (e.g., "Park" matching "Parking")
            // Also escape special characters in the name to use in regex
            const escapedName = rec.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b${escapedName}\\b`, 'gi');

            if (processedHighlights.match(regex)) {
                const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rec.name + ', ' + rec.city)}`;
                const linkHtml = `<a href="${googleMapsLink}" target="_blank" class="text-blue-600 hover:underline">${rec.name}</a> <a href="${googleMapsLink}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a>`;
                processedHighlights = processedHighlights.replace(regex, linkHtml);
            }
        }
    });
    return processedHighlights;
}

function populateItineraryTable() {
    const tableBody = document.getElementById('itinerary-table-body');
    tableBody.innerHTML = '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    tripData.itinerary.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 hover:bg-gray-50';
        const itemDate = new Date(item.date);

        if (itemDate.getTime() === today.getTime()) {
            row.classList.add('current-day-highlight');
        }

        // Extract main city from the route string for Google Maps link
        const mainCityMatch = item.route.match(/^(.*?)(?:\s*→.*)?$/);
        const mainCity = mainCityMatch ? mainCityMatch[1].trim() : item.route;
        const googleMapsLinkForRoute = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mainCity)}`;

        // Process highlights to add links for specific places/restaurants
        const processedHighlights = addGoogleMapsLinksToHighlights(item.highlights, mainCity);

        // Responsive/mobile-friendly: Use a card layout on small screens
        row.innerHTML = `
            <td class="p-3 font-medium hidden sm:table-cell">${item.day}</td>
            <td class="p-3 hidden sm:table-cell">${new Date(item.date + 'T00:00:00Z').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })}</td>
            <td class="p-3 hidden sm:table-cell"><a href="${googleMapsLinkForRoute}" target="_blank" class="text-blue-600 hover:underline">${item.route}</a> <a href="${googleMapsLinkForRoute}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></td>
            <td class="p-3 hidden sm:table-cell">${processedHighlights}</td>
            <td class="p-3 hidden sm:table-cell">${item.stay}</td>
            <td class="block sm:hidden p-0 m-0 border-0" colspan="100%">
                <div class="rounded-lg shadow bg-white p-3 mb-2 w-full">
                    <div class="flex justify-between items-center mb-1">
                        <span class="font-bold">Day ${item.day}</span>
                        <span class="text-xs text-gray-500">${new Date(item.date + 'T00:00:00Z').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })}</span>
                    </div>
                    <div class="mb-1"><a href="${googleMapsLinkForRoute}" target="_blank" class="text-blue-600 hover:underline">${item.route}</a> <a href="${googleMapsLinkForRoute}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></div>
                    <div class="mb-1 text-sm">${processedHighlights}</div>
                    <div class="text-xs text-gray-600">Stay: <span class="font-semibold">${item.stay}</span></div>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Hide table header on mobile for full width cards
    const table = document.getElementById('itinerary-table');
    if (table) {
        const thead = table.querySelector('thead');
        if (thead) {
            thead.classList.add('hidden', 'sm:table-header-group');
        }
    }
}

function displayTodayItinerary() {
    const card = document.getElementById('today-itinerary-card');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayItem = tripData.itinerary.find(item => new Date(item.date).getTime() === today.getTime());

    if (todayItem) {
        const mainCityMatch = todayItem.route.match(/^(.*?)(?:\s*→.*)?$/);
        const mainCity = mainCityMatch ? mainCityMatch[1].trim() : todayItem.route;
        const processedHighlights = addGoogleMapsLinksToHighlights(todayItem.highlights, mainCity);

        card.innerHTML = `
            <h3 class="text-xl font-semibold">${new Date(todayItem.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
            <p class="mt-2 text-gray-700"><strong>Route:</strong> ${todayItem.route}</p>
            <p class="mt-1 text-gray-700"><strong>Highlights:</strong> ${processedHighlights}</p>
            <p class="mt-1 text-gray-700"><strong>Overnight Stay:</strong> ${todayItem.stay}</p>
            <p class="mt-1 text-gray-700"><strong>Hotel:</strong> ${todayItem.hotel || ''}</p>
        `;
    } else {
        card.innerHTML = `<p>No itinerary scheduled for today. You might be between trip dates!</p>`;
    }
}

function displayTotalCost() {
    const chfToEurRate = 1.02;
    // Use itinerary data for hotel costs
    const totalCost = tripData.itinerary.filter(item => item.hotel).reduce((acc, item) => {
        const chfInEur = item.chargeCHF * chfToEurRate;
        return acc + item.chargeEUR + chfInEur;
    }, 0);
    document.getElementById('total-cost').textContent = `€${totalCost.toFixed(2)}`;
}

function populateBookingsTable() {
    const tableBody = document.getElementById('bookings-table-body');
    tableBody.innerHTML = '';
    // Use itinerary data for hotel costs
    tripData.itinerary.forEach(item => {
        if (!item.hotel) return; // Only show days with hotel info
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 hover:bg-gray-50';
        let charge = item.chargeEUR > 0 ? `€${item.chargeEUR.toFixed(2)}` : `CHF ${item.chargeCHF.toFixed(2)}`;
        const googleMapsLinkForHotel = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.hotel + ', ' + item.stay)}`;
        row.innerHTML = `
            <td class="p-3 font-medium">${item.stay}</td>
            <td class="p-3">${item.hotel} <a href="${googleMapsLinkForHotel}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></td>
            <td class="p-3">${charge}</td>
            <td class="p-3">${item.parking || ''}</td>
        `;
        tableBody.appendChild(row);
    });
}

function createCostsChart() {
    const ctx = document.getElementById('costsChart').getContext('2d');
    const chfToEurRate = 1.02;
    // Use itinerary data for hotel costs
    const hotelNights = tripData.itinerary.filter(item => item.hotel);
    const labels = hotelNights.map(item => item.stay);
    const data = hotelNights.map(item => {
        const chfInEur = item.chargeCHF * chfToEurRate;
        return item.chargeEUR + chfInEur;
    });
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Hotel Cost in EUR',
                data: data,
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '€' + value;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                     callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function populateRecommendations() {
    const container = document.getElementById('recommendations-container');
    container.innerHTML = '';
    tripData.recommendations.forEach(rec => {
        const card = document.createElement('div');
        card.className = 'recommendation-card border border-gray-200 p-4 rounded-lg bg-white shadow-sm';
        card.dataset.city = rec.city;

        let icon = '';
        let detailsHtml = '';
        const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rec.name + ', ' + rec.city)}`;

        if(rec.type === 'hotel') {
            icon = '🏨';
            detailsHtml = `<p class="text-sm text-gray-600">${rec.details}</p><div class="flex justify-between items-center mt-2 text-sm"><span class="text-yellow-500">⭐ ${rec.rating}</span><span class="font-semibold">${rec.price}</span></div>`;
        } else if(rec.type === 'restaurant') {
            icon = '🍴';
            detailsHtml = `<p class="text-sm text-gray-600">${rec.details}</p><div class="flex justify-between items-center mt-2 text-sm"><span class="text-yellow-500">⭐ ${rec.rating}</span><span class="font-semibold">${rec.price}</span></div>`;
        } else {
            icon = '⭐';
            detailsHtml = `<p class="text-sm text-gray-600">${rec.details}</p>`;
        }

        card.innerHTML = `
            <h4 class="font-bold inline-flex items-center">${icon} ${rec.name} <a href="${googleMapsLink}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></h4>
            ${detailsHtml}
        `;
        container.appendChild(card);
    });
}

function setupFilters() {
    const filter = document.getElementById('city-filter');
    const cities = ['All', ...new Set(tripData.recommendations.map(r => r.city))];
    filter.innerHTML = cities.map(city => `<option value="${city}">${city}</option>`).join('');

    filter.addEventListener('change', (e) => {
        const selectedCity = e.target.value;
        const cards = document.querySelectorAll('.recommendation-card');
        cards.forEach(card => {
            if (selectedCity === 'All' || card.dataset.city === selectedCity) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

function populatePlacesTables() {
    const restaurantsTableBody = document.getElementById('places-restaurants-table-body');
    restaurantsTableBody.innerHTML = '';
    tripData.places.restaurants.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 hover:bg-gray-50';
        const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ', ' + item.city)}`;
        row.innerHTML = `
            <td class="p-3 font-medium">${item.name} <a href="${googleMapsLink}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></td>
            <td class="p-3">${item.city}</td>
            <td class="p-3">${item.address}</td>
        `;
        restaurantsTableBody.appendChild(row);
    });

    const attractionsTableBody = document.getElementById('places-attractions-table-body');
    attractionsTableBody.innerHTML = '';
    tripData.places.attractions.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 hover:bg-gray-50';
        const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ', ' + item.city)}`;
        row.innerHTML = `
            <td class="p-3 font-medium">${item.name} <a href="${googleMapsLink}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></td>
            <td class="p-3">${item.city}</td>
            <td class="p-3">${item.address}</td>
        `;
        attractionsTableBody.appendChild(row);
    });

    const drivesTableBody = document.getElementById('places-drives-table-body');
    drivesTableBody.innerHTML = '';
    tripData.places.scenicDrives.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-200 hover:bg-gray-50';
        // For scenic drives, the mapsUrl is already a direct link to the route
        const googleMapsLink = item.mapsUrl;
        row.innerHTML = `
            <td class="p-3 font-medium">${item.name} <a href="${googleMapsLink}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></td>
            <td class="p-3">${item.highlights}</td>
        `;
        drivesTableBody.appendChild(row);
    });
}

// --- Weather Automation for Quick Reference Table ---
async function populateWeatherForQuickReference() {
    // Map of city names to lat/lon for Open-Meteo (add more as needed)
    const cityCoords = {
        'Paris': { lat: 48.8566, lon: 2.3522 },
        'Mont-Saint-Michel': { lat: 48.6361, lon: -1.5115 },
        'Brussels': { lat: 50.8503, lon: 4.3517 },
        'Bruges': { lat: 51.2093, lon: 3.2247 },
        'Amsterdam': { lat: 52.3676, lon: 4.9041 },
        'Cologne': { lat: 50.9375, lon: 6.9603 },
        'Luxembourg': { lat: 49.6116, lon: 6.1319 },
        'Frankfurt': { lat: 50.1109, lon: 8.6821 },
        'Interlaken': { lat: 46.6863, lon: 7.8632 },
        'Montreux': { lat: 46.4381, lon: 6.9116 }
    };
    for (const item of tripData.itinerary) {
        // Extract main city for weather (use first city in route string)
        let city = item.route.split('→')[0].split(',')[0].trim();
        if (city === 'Zaanse Schans' || city === 'Giethoorn') city = 'Amsterdam';
        if (!cityCoords[city]) continue;
        const { lat, lon } = cityCoords[city];
        // Format date as YYYY-MM-DD
        const date = item.date;
        // Open-Meteo API: daily forecast for max/min temp, rain, and weathercode
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode&timezone=Europe%2FBerlin&start_date=${date}&end_date=${date}`;
        try {
            const resp = await fetch(url);
            if (!resp.ok) throw new Error('No weather');
            const data = await resp.json();
            const tmax = data.daily.temperature_2m_max?.[0];
            const tmin = data.daily.temperature_2m_min?.[0];
            const weatherCode = data.daily.weathercode?.[0];
            // Map Open-Meteo weather codes to emoji/icons
            const weatherIcons = {
                0: '☀️', // Clear sky
                1: '🌤️', // Mainly clear
                2: '⛅', // Partly cloudy
                3: '☁️', // Overcast
                45: '🌫️', // Fog
                48: '🌫️', // Depositing rime fog
                51: '🌦️', // Drizzle: Light
                53: '🌦️', // Drizzle: Moderate
                55: '🌦️', // Drizzle: Dense
                56: '🌧️', // Freezing Drizzle: Light
                57: '🌧️', // Freezing Drizzle: Dense
                61: '🌦️', // Rain: Slight
                63: '🌧️', // Rain: Moderate
                65: '🌧️', // Rain: Heavy
                66: '🌧️', // Freezing Rain: Light
                67: '🌧️', // Freezing Rain: Heavy
                71: '🌨️', // Snow fall: Slight
                73: '🌨️', // Snow fall: Moderate
                75: '🌨️', // Snow fall: Heavy
                77: '🌨️', // Snow grains
                80: '🌦️', // Rain showers: Slight
                81: '🌧️', // Rain showers: Moderate
                82: '🌧️', // Rain showers: Violent
                85: '🌨️', // Snow showers: Slight
                86: '🌨️', // Snow showers: Heavy
                95: '⛈️', // Thunderstorm: Slight/Moderate
                96: '⛈️', // Thunderstorm with slight hail
                99: '⛈️'  // Thunderstorm with heavy hail
            };
            let weatherStr = '--';
            if (typeof tmax === 'number' && typeof tmin === 'number') {
                const tmaxF = Math.round(tmax * 9/5 + 32);
                const tminF = Math.round(tmin * 9/5 + 32);
                const icon = weatherIcons[weatherCode] || '';
                weatherStr = `${icon} ${tmaxF}°/${tminF}°F`;
            }
            document.getElementById(`weather-day-${item.day}`).textContent = weatherStr;
        } catch (e) {
            document.getElementById(`weather-day-${item.day}`).textContent = '--';
        }
    }
}
