const tripData = {
            itinerary: [
                { day: 1, date: "2025-07-11", route: "Paris", highlights: "<b>Jul 11:</b> Arrive Paris & Evening Exploration<br>- Pick up rental car at Charles de Gaulle Airport (~1 hour drive to city center).<br>- Check into hotel & rest to recover from jet lag.<br>- <b>Evening: Light exploration & dinner</b><br>&nbsp;&nbsp;- Stroll through <b>Île de la Cité</b> and see <b>Notre-Dame Cathedral</b> (8:00–18:45, free entry, tower: ticket required).<br>&nbsp;&nbsp;- Walk along the <b>Seine River</b> and enjoy the sunset views.<br>&nbsp;&nbsp;- <b>Dinner at Le Procope</b>, one of Paris’ oldest restaurants.", duration: "~1h", stay: "Paris", confirmation: "Le Méridien Paris Arc De Triomphe, Conf #81765448" },
                { day: 2, date: "2025-07-12", route: "Paris → Mont-Saint-Michel", highlights: "<b>Jul 12:</b> Paris → Mont-Saint-Michel<br>🚗 <b>Morning: Drive to Mont-Saint-Michel</b> (~4 hours)<br>- Depart Paris early (~6 AM) to maximize time at Mont-Saint-Michel.<br>- Arrive around 10 AM and explore the island.<br>- Visit <b>Mont-Saint-Michel Abbey</b> (9:00–19:00, ticket required), medieval streets, and scenic viewpoints.<br>- Enjoy lunch at La Mère Poulard, famous for its traditional omelets.<br><br>🚗 <b>Afternoon: Return to Paris</b> (~4 hours)<br>- Depart Mont-Saint-Michel around 2 PM to return to Paris by 6 PM.<br>- Evening: Free time in Paris for relaxation or optional activities like:<br>- Strolling through Le Marais or Latin Quarter.<br>- <b>Seine River cruise</b> (various operators, 10:00–22:00, ticket required) or exploring Montmartre.", duration: "~4h + 4h", stay: "Paris", confirmation: "Le Méridien Paris Arc De Triomphe, Conf #81765448" },
                { day: 3, date: "2025-07-13", route: "Paris → Brussels", highlights: "<b>Jul 13:</b> 🚗 <b>Morning: Eiffel Tower Visit</b><br>- Arrive early (~8 AM) to avoid crowds.<br>- Explore Trocadéro Gardens for panoramic views.<br>- Visit the <b>Eiffel Tower observation deck</b> (9:00–23:45, ticket required, pre-book recommended).<br>- Alternative: Take a <b>Seine River cruise</b> for a relaxed morning (10:00–22:00, ticket required).<br><br>🚗 <b>Midday: Drive to Brussels</b> (~3.5 hours)<br>- Optional stop in Lille for lunch.<br>- Arrive in Brussels by late afternoon (~3 PM).<br><br>🏙️ <b>Afternoon: Explore Brussels</b><br>- Visit <b>Grand Place</b> (open square, free), <b>Atomium</b> (10:00–18:00, ticket required), and <b>Manneken Pis</b> (always open, free).<br>- Enjoy a Belgian dinner experience at a local brasserie.", duration: "~3.5h", stay: "Brussels", confirmation: "Courtyard Brussels, Conf #82383330" },
                { day: 4, date: "2025-07-14", route: "Brussels → Bruges", highlights: "<b>Jul 14:</b> Brussels → Bruges<br>🚗 <b>Morning: Drive from Brussels to Bruges</b> (~1 hour)<br>- Depart <b>early (~8 AM)</b> to maximize time in Bruges.<br>- Optional <b>stop in Ghent</b> (~30 mins detour) for a quick canal-side coffee.<br><br>🏰 <b>Midday: Explore Bruges</b><br>- Visit <b>Grote Markt & Belfry Tower</b> (Belfry: 9:30–18:00, ticket required) – Climb for panoramic views.<br>- Walk through <b>De Burg & Basilica of the Holy Blood</b> (Basilica: 9:30–12:00, 14:00–17:30, free).<br>- Take a <b>canal cruise</b> (10:00–18:00, ticket required) for a unique perspective of the medieval city.<br>- Lunch at <b>House of Waffles</b> for Belgian specialties.<br><br>🌅 <b>Afternoon: More Bruges Highlights</b><br>- Explore <b>Boniface Bridge & Church of Our Lady</b> (Church: 9:00–17:00, ticket for museum).<br>- Stroll through <b>Minnewater Park</b> for a peaceful break.<br>- Visit <b>Choco-Story Museum</b> (10:00–18:00, ticket required) for a Belgian chocolate experience.<br><br>🏨 <b>Evening: Stay Overnight in Bruges</b><br>- Enjoy a <b>Belgian beer tasting</b> at a local brewery.", duration: "~1h", stay: "Bruges", confirmation: "Grand Hotel Casselbergh Bruges, see .eml" },
                { day: 5, date: "2025-07-15", route: "Bruges → Amsterdam", highlights: "<b>Jul 15:</b> Bruges → Amsterdam<br>🚗 <b>Morning: Drive from Bruges to Amsterdam</b> (~3 hours)<br>- Depart <b>early (~8 AM)</b> to maximize time in Amsterdam.<br>- Optional <b>stop in Antwerp</b> (~1 hour detour) for a quick coffee and a visit to the <b>Cathedral of Our Lady</b> (10:00–17:00, ticket required).<br><br>🏙️ <b>Midday: Arrive in Amsterdam & Initial Exploration</b><br>- Visit <b>Dam Square</b> and the Royal Palace (Royal Palace: 10:00–17:00, ticket required).<br>- Walk through the <b>Jordaan district</b>, known for its charming streets and cafés.<br>- Lunch at <b>De Kas</b>, a farm-to-table restaurant in a greenhouse setting.<br><br>🌅 <b>Afternoon: Cultural & Scenic Experiences</b><br>- Explore the <b>Rijksmuseum</b> (9:00–17:00, ticket required) or <b>Van Gogh Museum</b> (9:00–18:00, ticket required).<br>- Take a <b>canal cruise</b> (10:00–22:00, ticket required) for a relaxing introduction to the city.<br>- Visit the <b>Anne Frank House</b> (9:00–22:00, ticket required, pre-booking essential).<br><br>🏨 <b>Evening: Stay Overnight in Amsterdam</b><br>- Enjoy dinner at <b>The Seafood Bar</b> or <b>Restaurant Guts & Glory</b>.", duration: "~3h", stay: "Amsterdam", confirmation: "Apollo Hotel Amsterdam, Tribute Portfolio, Conf #90210066" },
                { day: 6, date: "2025-07-16", route: "Zaanse Schans, Giethoorn", highlights: "<b>Jul 16:</b> Amsterdam → Zaanse Schans & Giethoorn<br>🚗 <b>Morning: Drive to Zaanse Schans</b> (~20 mins)<br>- Explore <b>historic windmills</b>, wooden houses, and Dutch crafts (Zaanse Schans: 9:00–17:00, free entry, some museums: ticket required).<br>- Visit the <b>cheese factory</b> and <b>wooden shoe workshop</b>.<br>- Optional <b>boat ride along the Zaan River</b>.<br>- <a href=\"http://zaanseschans.nl/\">More details here</a>.<br><br>🚗 <b>Midday: Drive to Giethoorn</b> (~1.5 hours)<br>- Known as the <b>\"Dutch Venice\"</b>, Giethoorn is a car-free village with canals.<br>- Take a <b>small boat tour</b> through the scenic waterways (9:00–18:00, ticket required).<br>- Enjoy lunch at a <b>canal-side café</b>.<br>- <a href=\"https://www.viator.com/tours/Amsterdam/Giethoorn-and-Zaanse-Schans-Day-Tour/d525-39989P6\">Tour options available</a> for guided experiences.<br><br>🚗 <b>Afternoon: Return to Amsterdam</b> (~1.5 hours)<br>- Optional stop in <b>Haarlem</b> (~30 mins detour) for a relaxed Dutch town experience.<br>- Evening free for exploring Amsterdam’s nightlife or dining.<br><br>🏨 <b>Evening: Stay Overnight in Amsterdam</b>", duration: "20m + 1.5h + 1.5h", stay: "Amsterdam", confirmation: "Apollo Hotel Amsterdam, Tribute Portfolio, Conf #90210066" },
                { day: 7, date: "2025-07-17", route: "Amsterdam → Cologne", highlights: "<b>Jul 17:</b> Amsterdam → Düsseldorf → Cologne<br>🚗 <b>Morning: Drive from Amsterdam to Düsseldorf</b> (~2.5 hours)<br>- Depart <b>early (~8 AM)</b> to maximize time in Düsseldorf.<br>- Explore <b>Königsallee</b>, a famous shopping boulevard.<br>- Visit the <b>Rhine Promenade</b> for scenic river views.<br>- Optional stop at <b>MedienHafen</b>, a modern architectural district.<br>- Enjoy <b>lunch at Brauerei Schumacher</b>, known for traditional German beer and food.<br><br>🚗 <b>Afternoon: Drive to Cologne</b> (~1 hour)<br>- Arrive in Cologne by <b>mid-afternoon (~3 PM)</b>.<br>- Visit <b>Cologne Cathedral</b> (6:00–20:00, free entry, tower: ticket required), one of Germany’s most iconic landmarks.<br>- Explore <b>Old Town (Altstadt)</b> and walk along the Rhine River.<br>- Optional <b>Rhine River cruise</b> (April–Oct, 10:00–19:00, ticket required) for a relaxed evening.<br><br>🏨 <b>Evening: Stay Overnight in Cologne</b><br>- Enjoy dinner at <b>Hanse-Stube</b>, known for fine German cuisine.", duration: "2.5h + 1h", stay: "Cologne", confirmation: "Cologne Marriott Hotel, Conf #85548222" },
                { day: 8, date: "2025-07-18", route: "Cologne → Luxembourg", highlights: "<b>Jul 18:</b> Cologne → Luxembourg<br>🚗 <b>Morning: Drive from Cologne to Luxembourg</b> (~2.5 hours)<br>- Depart <b>early (~8 AM)</b> to maximize time in Luxembourg.<br>- Optional <b>stop in Cochem</b> (~1 hour detour) for a scenic break along the Moselle River.<br>- Visit <b>Reichsburg Castle</b> (9:00–17:00, ticket required) for stunning views.<br><br>🏙️ <b>Midday: Explore Trier (Optional Stop)</b> (~1 hour from Cochem)<br>- Germany’s <b>oldest city</b>, known for its <b>Roman ruins</b>.<br>- Visit <b>Porta Nigra</b> (9:00–18:00, ticket required), <b>Trier Cathedral</b> (6:30–18:00, free), and <b>Karl Marx House</b> (10:00–18:00, ticket required).<br>- Enjoy lunch at <b>Weinstube Kesselstatt</b>, known for local wines.<br><br>🚗 <b>Afternoon: Arrive in Luxembourg</b> (~1 hour from Trier)<br>- Explore <b>Luxembourg City’s Old Town</b>.<br>- Visit <b>Bock Casemates</b> (10:00–17:30, ticket required), underground tunnels with historical significance.<br>- Walk through <b>Grund District</b>, a charming riverside area.<br><br>🏨 <b>Evening: Stay Overnight in Luxembourg</b><br>- Enjoy dinner at <b>Le Sud</b>, offering rooftop views.", duration: "~2.5h + detours", stay: "Luxembourg", confirmation: "Moxy Luxembourg Airport, Conf #85559601" },
                { day: 9, date: "2025-07-19", route: "Luxembourg → Frankfurt", highlights: "<b>Jul 19:</b> Luxembourg → Frankfurt<br>🚗 <b>Morning: Drive from Luxembourg to Frankfurt</b> (~3 hours)<br>- Depart <b>early (~8 AM)</b> to maximize time in Frankfurt.<br>- Optional <b>stop in Trier</b> (~1 hour detour) for Roman history.<br>- Visit <b>Porta Nigra</b> (9:00–18:00, ticket required), <b>Trier Cathedral</b> (6:30–18:00, free), and <b>Karl Marx House</b> (10:00–18:00, ticket required).<br><br>🏙️ <b>Midday: Explore Rhine Valley (Optional Stop)</b><br>- Scenic drive through <b>Bernkastel-Kues</b>, a charming wine town.<br>- Stop in <b>Sankt Goar</b> for views of <b>Rheinfels Castle</b> (10:00–17:00, ticket required).<br><br>🚗 <b>Afternoon: Arrive in Frankfurt</b> (~1 hour from Rhine Valley)<br>- Visit <b>Römerberg Square</b>, the historic old town.<br>- Explore <b>Palmengarten</b> (9:00–18:00, ticket required), a beautiful botanical garden.<br>- Optional <b>Main Tower observation deck</b> (10:00–21:00, ticket required) for panoramic city views.<br><br>🏨 <b>Evening: Stay Overnight in Frankfurt</b><br>- Enjoy dinner at <b>Apfelwein Wagner</b>, famous for Frankfurt’s apple wine.", duration: "~4h", stay: "Frankfurt", confirmation: "Frankfurt Marriott Hotel, Conf #85578530" },
                { day: 10, date: "2025-07-20", route: "Frankfurt → Interlaken", highlights: `<b>Jul 20:</b> Frankfurt → Lucerne<br>🚗 <b>Morning: Drive from Frankfurt to Lucerne</b> (~4 hours)<br>- Depart <b>early (~8 AM)</b> to maximize time in Lucerne.<br>- Optional <b>stop in Heidelberg</b> (~1 hour detour) to visit <b>Heidelberg Castle</b> (9:00–18:00, ticket required) and the <b>Old Bridge</b> (always open, free).<br><br>🏙️ <b>Midday: Scenic Drive Through the Black Forest</b><br>- Pass through <b>Freiburg im Breisgau</b>, a charming university town.<br>- Stop at <b>Titisee Lake</b> for a relaxing break.<br><br>🚗 <b>Afternoon: Arrive in Lucerne</b> (~2 PM)<br>- Visit <b>Chapel Bridge</b> (always open, free), Lucerne’s iconic wooden bridge.<br>- Explore <b>Old Town</b>, filled with colorful medieval buildings.<br>- Optional <b>Lake Lucerne boat tour</b> (April–Oct, 9:00–18:00, ticket required) for stunning alpine views.<br><br>🚗 <b>Evening: Travel to Interlaken</b> (~1h 50m by train or ~1h by car)<br>- Check in to hotel and relax.<br><br><b>Alternative Route:</b><br><b>Frankfurt → Alsace Wine Route (France)</b><br>- Drive to <b>Strasbourg</b> (~2.5 hours).<br>- Explore <b>Strasbourg’s Old Town</b>, visit the <b>Cathedral</b>, and enjoy Alsatian cuisine.<br>- Follow the <b>Alsace Wine Route</b>, stopping at picturesque villages like <b>Riquewihr, Ribeauvillé, and Colmar</b>.<br>- Visit <b>Haut-Koenigsbourg Castle</b> for panoramic views.<br><br>Cross into Germany and drive through the <b>Black Forest</b> (~1.5 hours).<br>- Stop at <b>Triberg</b>, famous for its waterfalls and cuckoo clocks.<br>- Visit <b>Titisee Lake</b>, a serene alpine lake.<br>- Explore <b>Freiburg</b>, a charming university town with medieval architecture.<br><br>Continue south through <b>Schaffhausen</b>, stopping at <b>Rhine Falls</b>, Europe’s largest waterfall.<br>- Cross into Switzerland and drive to <b>Lucerne</b> (~2 hours).<br>- Arrive in Lucerne and explore <b>Chapel Bridge, Lake Lucerne, and Mount Pilatus</b>.<br><br>🚗 <b>Evening: Travel to Interlaken</b>`, duration: "~6h", stay: "Interlaken", confirmation: "Boutique Hotel Bellevue, Conf #58571" },
                { day: 11, date: "2025-07-21", route: "Interlaken & Jungfraujoch", highlights: `<b>Jul 21:</b> Interlaken to Interlaken & Jungfraujoch<br>🚆 <b>Morning: Travel from Interlaken Ost → Lauterbrunnen (~20m)<br>&nbsp;&nbsp;- Lauterbrunnen → Wengen → Kleine Scheidegg → Jungfraujoch (~1h 50m)<br><br>🏔️ <b>Midday: Explore Jungfraujoch (\"Top of Europe\")</b><br>- Visit <b>Ice Palace</b>, <b>Sphinx Observatory</b>, and <b>Aletsch Glacier</b> (Jungfraujoch: 8:00–16:20, ticket required, pre-book recommended)<br>- Enjoy lunch at <b>Top of Europe Restaurant</b><br><br>🚗 <b>Afternoon: Return to Interlaken</b> (~2 hours)<br>- Take the <b>same route back</b> via Lauterbrunnen or Grindelwald<br>- Explore <b>Lake Brienz</b> or relax in Interlaken<br><br>🏨 <b>Evening: Stay overnight in Interlaken</b>`, duration: "~1h + 🚆 time", stay: "Interlaken", confirmation: "Boutique Hotel Bellevue, Conf #58571" },
                { day: 12, date: "2025-07-22", route: "Interlaken → Montreux", highlights: `<b>Jul 22:</b> 🚗 <b>Interlaken → Montreux (Driving Route)</b><br>🚗 <b>Morning: Drive from Interlaken to Montreux</b> (~2 hours)<br>- Depart <b>early (~8 AM)</b> to maximize exploration time.<br>- <b>Suggested stops along the way:</b><br>&nbsp;&nbsp;- <b>Spiez</b> – Stunning lakeside town with <b>Spiez Castle</b> (10:00–17:00, ticket required) and vineyard views. (~30 mins)<br>&nbsp;&nbsp;- <b>Gruyères</b> – Famous for <b>Gruyères Castle</b> (9:00–18:00, ticket required) & Swiss cheese tasting (~45 mins).<br>&nbsp;&nbsp;- <b>Lavaux Vineyards</b> – UNESCO site with <b>wine tasting</b> and panoramic views (~30 mins, tasting: ticket required).<br>- extra stop at <b>Rochers-de-Naye</b>, a panoramic mountain viewpoint (9:00–17:00, ticket required, ~50 min drive from Montreux).<br><br>🏙️ <b>Midday: Arrive in Montreux & Explore</b><br>- Visit <b>Château de Chillon</b> (9:00–19:00, ticket required), a stunning medieval castle on Lake Geneva.<br>- Walk along the <b>Montreux Lakeside Promenade</b> for breathtaking scenery.<br>- <b>Optional:</b> Drive to <b>Rochers-de-Naye</b> for panoramic mountain views (9:00–17:00, ticket required).<br><br>🏨 <b>Evening: Stay Overnight in Montreux</b><br>- Enjoy dinner at <b>Le Palais Oriental</b>, offering lakeside dining.<br><br>🚗 <b>Alternative Route:</b><br>- <b>If you prefer a scenic detour</b>, take the <b>Jaun Pass route</b> from Interlaken to Gruyères—<b>beautiful alpine roads!</b>`, duration: "~2h (drive)", stay: "Montreux", confirmation: "Grand Hotel Suisse Majestic, Conf #87355071" },
                { day: 13, date: "2025-07-23", route: "Montreux → Paris", highlights: "<b>Jul 23:</b> Scenic Drive Back to Paris<br>- Early morning departure from Montreux (~6-7 hours drive).<br>- <b>Suggested stops along the way:</b><br>&nbsp;&nbsp;- <b>Lausanne</b> – Quick coffee stop by <b>Lake Geneva</b>.<br>&nbsp;&nbsp;- <b>Besançon</b> – Explore the <b>Citadel of Besançon</b> (10:00–18:00, ticket required), a UNESCO site.<br>&nbsp;&nbsp;- <b>Dijon</b> – Famous for <b>mustard & Burgundy wines</b>, perfect for lunch.<br>&nbsp;&nbsp;- <b>Fontainebleau</b> – Visit <b>Château de Fontainebleau</b> (9:30–17:00, ticket required), a historic royal palace.<br>- <b>Alternative</b> drive through Beaune, a beautiful wine village in Burgundy.<br><br>🏙️ <b>Evening in Paris:</b><br>- Relax & enjoy a final night in the city<br>- Optional <b>Seine River dinner cruise</b> (various operators, 18:00–22:00, ticket required) for a memorable farewell.", duration: "~6-7h", stay: "Paris", confirmation: "Not Booked" },
                { day: 14, date: "2025-07-24", route: "Paris", highlights: "<b>Jul 24:</b> Departure & Final Paris Moments<br>- <b>Morning:</b> Leisurely breakfast at <b>Café de Flore</b> or <b>Angelina Paris</b>.<br>- <b>Optional quick visit:</b><br>&nbsp;&nbsp;- <b>Montmartre & Sacré-Cœur</b> (Sacré-Coœur: 6:00–22:30, free entry, dome: ticket required) for panoramic city views.<br>&nbsp;&nbsp;- <b>Champs-Élysées & Arc de Triomphe</b> (Arc: 10:00–23:00, ticket required) for a final Parisian stroll.<br>- Or quick stop in <b>Saint-Germain-des-Prés</b> for a relaxed café breakfast instead of Champs-Élysées <br>- Return rental car at airport & flight check-in.", duration: "~1h", stay: "Paris", confirmation: "" },
            ],
            hotelCosts: [
                { city: "Paris", hotel: "Le Méridien Paris Arc De Triomphe", chargeEUR: 406.10, chargeCHF: 0, parking: "€36/day (valet only)" },
                { city: "Brussels", hotel: "Courtyard Brussels", chargeEUR: 130.89, chargeCHF: 0, parking: "€25/day (weekday) / €12.50 (weekend)" },
                { city: "Bruges", hotel: "Grand Hotel Casselbergh Bruges", chargeEUR: 207.03, chargeCHF: 0, parking: "€30/day (underground, secure)" },
                { city: "Amsterdam", hotel: "Apollo Hotel Amsterdam, Tribute Portfolio, Conf #90210066", chargeEUR: 377.10, chargeCHF: 0, parking: "€30/day (limited hotel spaces)" },
                { city: "Cologne", hotel: "Cologne Marriott Hotel (Points)", chargeEUR: 0.00, chargeCHF: 0, parking: "€30/day (on-site garage)" },
                { city: "Luxembourg", hotel: "Moxy Luxembourg Airport", chargeEUR: 139.00, chargeCHF: 0, parking: "Discounted airport parking (Car Park A/B)" },
                { city: "Frankfurt", hotel: "Frankfurt Marriott Hotel", chargeEUR: 164.65, chargeCHF: 0, parking: "€29/day (Westendgate garage)" },
                { city: "Interlaken", hotel: "Hotel Bernerhof, Conf #WSP202668644", chargeEUR: 0, chargeCHF: 511.00, parking: "On-site parking available (fee applies)" },
                { city: "Montreux", hotel: "Grand Hotel Suisse Majestic", chargeEUR: 0, chargeCHF: 370.00, parking: "Underground parking available (fee applies)" },
            ],
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

        document.addEventListener('DOMContentLoaded', () => {
            populateItineraryTable();
            populateBookingsTable();
            createCostsChart();
            populateRecommendations();
            populatePlacesTables(); // New function call
            setupTabs();
            setupFilters();
            displayTodayItinerary();
            displayTotalCost();
            createRouteMap();
            populateWeatherForQuickReference();
        });

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
            tableBody.innerHTML = ''; // Clear existing content
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

                row.innerHTML = `
                    <td class="p-3 font-medium">${item.day}</td>
                    <td class="p-3">${new Date(item.date + 'T00:00:00Z').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })}</td>
                    <td class="p-3"><a href="${googleMapsLinkForRoute}" target="_blank" class="text-blue-600 hover:underline">${item.route}</a> <a href="${googleMapsLinkForRoute}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></td>
                    <td class="p-3">${processedHighlights}</td>
                    <td class="p-3">${item.stay}</td>
                `;
                tableBody.appendChild(row);
            });
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
                    <p class="mt-1 text-gray-700"><strong>Confirmation:</strong> ${todayItem.confirmation}</p>
                `;
            } else {
                card.innerHTML = `<p>No itinerary scheduled for today. You might be between trip dates!</p>`;
            }
        }
        
        function displayTotalCost() {
            const chfToEurRate = 1.02; 
            const totalCost = tripData.hotelCosts.reduce((acc, cost) => {
                const chfInEur = cost.chargeCHF * chfToEurRate;
                return acc + cost.chargeEUR + chfInEur;
            }, 0);
            document.getElementById('total-cost').textContent = `€${totalCost.toFixed(2)}`;
        }

        function populateBookingsTable() {
            const tableBody = document.getElementById('bookings-table-body');
            tableBody.innerHTML = ''; // Clear existing content
            tripData.hotelCosts.forEach(item => {
                const row = document.createElement('tr');
                row.className = 'border-b border-gray-200 hover:bg-gray-50';
                
                let charge = item.chargeEUR > 0 ? `€${item.chargeEUR.toFixed(2)}` : `CHF ${item.chargeCHF.toFixed(2)}`;
                const googleMapsLinkForHotel = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.hotel + ', ' + item.city)}`;

                row.innerHTML = `
                    <td class="p-3 font-medium">${item.city}</td>
                    <td class="p-3">${item.hotel} <a href="${googleMapsLinkForHotel}" target="_blank" class="google-maps-icon" title="View on Google Maps">🌐</a></td>
                    <td class="p-3">${charge}</td>
                    <td class="p-3">${item.parking}</td>
                `;
                tableBody.appendChild(row);
            });
        }
        
        function createCostsChart() {
            const ctx = document.getElementById('costsChart').getContext('2d');
            const chfToEurRate = 1.02;

            const labels = tripData.hotelCosts.map(item => item.city);
            const data = tripData.hotelCosts.map(item => {
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
        // Open-Meteo API: daily forecast for max/min temp and rain
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FBerlin&start_date=${date}&end_date=${date}`;
        try {
            const resp = await fetch(url);
            if (!resp.ok) throw new Error('No weather');
            const data = await resp.json();
            const tmax = data.daily.temperature_2m_max?.[0];
            const tmin = data.daily.temperature_2m_min?.[0];
            const rain = data.daily.precipitation_probability_max?.[0];
            let weatherStr = '--';
            if (typeof tmax === 'number' && typeof tmin === 'number') {
                const tmaxF = Math.round(tmax * 9/5 + 32);
                const tminF = Math.round(tmin * 9/5 + 32);
                weatherStr = `${Math.round(tmax)}°/${Math.round(tmin)}°C (${tmaxF}°/${tminF}°F)`;
                if (typeof rain === 'number') weatherStr += `, Rain: ${rain}%`;
            }
            document.getElementById(`weather-day-${item.day}`).textContent = weatherStr;
        } catch (e) {
            document.getElementById(`weather-day-${item.day}`).textContent = '--';
        }
    }
}
