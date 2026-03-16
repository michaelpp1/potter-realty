export interface City {
  slug: string
  name: string
  tagline: string
  description: string
  population: string
  elevation: string
  heroPhoto: string
  highlights: { icon: string; label: string; value: string }[]
  lifestyle: string
  schools: string
  commute: string
  marketOverview: string
  thingsToKnow: string[]
  neighborhoods: string[]
}

export const cities: City[] = [
  {
    slug: 'fort-collins',
    name: 'Fort Collins',
    tagline: 'Colorado\'s Choice City',
    heroPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
    description:
      'Fort Collins is Northern Colorado\'s largest and most vibrant city, home to Colorado State University, an award winning craft beer scene, and one of the most walkable downtown districts in the country. Old Town Fort Collins is a beautifully preserved historic district packed with locally owned restaurants, boutiques, live music, and breweries. The Cache la Poudre River cuts through town, offering world class fly fishing and whitewater rafting. Fort Collins consistently ranks as one of the best places to live in the U.S. for its balance of outdoor access, community culture, and quality of life.',
    population: '~175,000',
    elevation: '4,984 ft',
    highlights: [
      { icon: '🍺', label: 'Craft Beer', value: '20+ breweries in city limits' },
      { icon: '🎓', label: 'University', value: 'Colorado State University' },
      { icon: '🏞️', label: 'Outdoor Access', value: 'Cache la Poudre River, Horsetooth Reservoir' },
      { icon: '🚶', label: 'Walkability', value: 'Old Town, top walkable downtown in CO' },
      { icon: '🎨', label: 'Arts & Culture', value: 'Vibrant arts, music, and food scene' },
      { icon: '🌄', label: 'Mountain Views', value: 'Stunning front range views year round' },
    ],
    lifestyle:
      'Fort Collins offers an unmatched blend of university energy and outdoor adventure. Residents enjoy year round trail access, world class cycling routes, and easy access to Rocky Mountain National Park and the Poudre Canyon. The food and drink scene is legendary in Colorado, and the city has a young, active, and welcoming culture.',
    schools:
      'Served by Poudre School District (PSD), one of the top rated districts in Colorado. Home to Colorado State University for higher education.',
    commute:
      'I 25 provides easy north south access. Denver International Airport is approximately 70 miles south (~1 hour). Loveland is 15 minutes south.',
    marketOverview:
      'Fort Collins is one of the most competitive real estate markets in Northern Colorado. Strong demand from CSU, tech employers, and lifestyle seekers keeps the market active. Both condos and single family homes move quickly.',
    thingsToKnow: [
      'Old Town Fort Collins is modeled as the inspiration for Disneyland\'s Main Street USA',
      'Home to New Belgium Brewing, Odell Brewing, and dozens more craft breweries',
      'The Poudre River runs through the heart of the city',
      'Consistently ranked a top 10 city to live in the U.S.',
      'Excellent cycling infrastructure throughout the city',
    ],
    neighborhoods: [
      'Old Town / Downtown',
      'Midtown',
      'Southeast Fort Collins',
      'Fossil Creek',
      'Harmony Corridor',
      'West Fort Collins',
    ],
  },
  {
    slug: 'loveland',
    name: 'Loveland',
    tagline: 'The Sweetheart City',
    heroPhoto: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=80',
    description:
      'Loveland is Northern Colorado\'s arts capital, a city that has built a genuinely distinctive identity around sculpture, public art, and community. The city has more than 500 public works of art, four sculpture parks (all free and open year round), and two working bronze foundries that have made it a destination for serious collectors. Every August, Benson Sculpture Garden hosts Sculpture in the Park, the largest outdoor juried sculpture show in the country, drawing over 160 national and international artists. Loveland\'s Valentine\'s Day remailing program, now in its 80th year, hand stamps and remails roughly 100,000 valentines annually for people around the world who want their card postmarked from the Sweetheart City. Founded in 1877 along the Colorado Central Railroad, the city has evolved from a sugar beet farming economy into a technology and healthcare hub, with Keysight Technologies operating a major research and development campus on the former Hewlett Packard site where HP built its first facility outside California in 1962.',
    population: '~80,000',
    elevation: '4,982 ft',
    highlights: [
      { icon: '🗿', label: 'Public Art', value: 'Benson Sculpture Garden: 188 permanent works recognized among the top 20 contemporary art sites in the U.S.' },
      { icon: '🏔️', label: 'Mountain Access', value: 'Gateway to Rocky Mountain National Park via the Big Thompson Canyon, about an hour west' },
      { icon: '🌊', label: 'Lakes and Reservoirs', value: 'Carter Lake, Boyd Lake, Pinewood Reservoir, and Flatiron Reservoir for boating, camping, and swimming' },
      { icon: '💌', label: 'Valentine\'s Capital', value: 'Remailing program hand stamps roughly 100,000 valentines each February, now in its 80th year' },
      { icon: '🌍', label: 'Chapungu Sculpture Park', value: 'The only permanent exhibit of Zimbabwean stone sculpture in the U.S., 82 works across 26 acres' },
      { icon: '⛳', label: 'Golf and Trails', value: 'Mariana Butte Golf Course borders the Big Thompson River with panoramic Rockies views' },
    ],
    lifestyle:
      'Loveland has a creative, unhurried character that is unlike any other city on the Front Range. The arts community is professional and prolific, the brewery scene is local and low key, and the outdoor access is exceptional. River\'s Edge Natural Area, situated on a former HP campus along the Big Thompson River, offers two miles of wildlife trail almost entirely within city limits. Carter Lake and Boyd Lake are close enough to feel like your own backyard. The city draws a broad mix of working families, artists, retirees, and outdoor enthusiasts who appreciate that Loveland does not try to be Denver or Fort Collins.',
    schools:
      'Served by Thompson School District (TSD), which covers Loveland and Berthoud. Aims Community College has a full campus in Loveland, making continuing education and workforce training easy to access.',
    commute:
      'Fort Collins is 15 minutes north on US 287, and Longmont is about 20 minutes south. I 25 puts Denver within an hour and Denver International Airport within roughly 55 minutes. The central location between Fort Collins and the Denver metro makes Loveland one of the most commuter friendly cities in Northern Colorado.',
    marketOverview:
      'Loveland consistently offers better value per square foot than Fort Collins while sitting in the same employment corridor. Established neighborhoods near downtown and the lakes appeal to buyers who want character and mature landscaping, while the southeast and Centerra areas offer newer construction with modern finishes. Strong appreciation over the past decade reflects Loveland\'s growing appeal to buyers priced out of Fort Collins.',
    thingsToKnow: [
      'Benson Sculpture Garden has been recognized as one of the 200 most important modern and contemporary art sites in the world by multiple publications',
      'Loveland has two working bronze foundries and a finishing house, making it one of the most active sculptural arts cities in the country',
      'Keysight Technologies, a spinoff of Agilent and ultimately Hewlett Packard, still operates a research and development campus in Loveland where HP built its first non California facility in 1962',
      'River\'s Edge Natural Area was created from the former HP property purchased by the city in 2011 and now offers wildlife viewing, birding, and trail access along the Big Thompson River',
      'Chapungu Sculpture Park is the only permanent exhibit of Zimbabwean stone sculpture in the United States, featuring 82 works across a 26 acre park with a 1.5 mile walking trail',
    ],
    neighborhoods: [
      'Downtown Loveland',
      'SW Loveland / Mariana Butte',
      'SE Loveland',
      'Centerra',
      'North Loveland',
      'Orchard Farms',
    ],
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    tagline: 'One of Colorado\'s Fastest Growing Communities',
    heroPhoto: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
    description:
      'Windsor is one of the most sought after communities in Northern Colorado, and it\'s easy to see why. Known for its excellent schools, beautiful parks, and strong family friendly culture, Windsor has grown rapidly while managing to maintain its tight knit community feel. Windsor Lake and Boardwalk Park are the heart of the city, offering swimming, paddleboarding, a splash pad, and year round events. Windsor sits at the intersection of Larimer and Weld Counties, giving residents access to both Fort Collins and Greeley amenities with lower property taxes in many areas.',
    population: '~35,000',
    elevation: '4,650 ft',
    highlights: [
      { icon: '🏊', label: 'Recreation', value: 'Windsor Lake & Boardwalk Park' },
      { icon: '🏫', label: 'Schools', value: 'Top rated Weld RE 4 School District' },
      { icon: '🌱', label: 'Growth', value: 'One of CO\'s fastest growing communities' },
      { icon: '🏠', label: 'Housing', value: 'New construction & established neighborhoods' },
      { icon: '🎉', label: 'Community', value: 'Strong events, festivals, and local culture' },
      { icon: '📍', label: 'Location', value: 'Between Fort Collins & Greeley on US 34' },
    ],
    lifestyle:
      'Windsor residents love the combination of small town community and modern amenities. The city has a strong local identity. People actually know their neighbors here. Boardwalk Park is the social hub in summer, and the restaurant and shopping scene has grown significantly in recent years.',
    schools:
      'Weld County School District RE 4 serves Windsor and is consistently among the top rated districts in the state. Excellent elementary, middle, and high school options.',
    commute:
      'US 34 connects Windsor to Loveland (15 min) and Greeley (20 min). Fort Collins is approximately 20 minutes north via US 257. Easy I 25 access.',
    marketOverview:
      'Windsor\'s real estate market is highly competitive with strong demand from families moving to the area. A mix of new subdivisions and established neighborhoods. Lower property taxes than Larimer County is a notable draw.',
    thingsToKnow: [
      'Windsor spans both Larimer and Weld Counties, important for tax planning',
      'Boardwalk Park hosts over 100 community events annually',
      'Windsor Lake is a hidden gem for paddleboarding and swimming',
      'Excellent new construction options in communities like Water Valley',
      'Strong sense of community with very active neighborhood associations',
    ],
    neighborhoods: [
      'Water Valley',
      'Westfield',
      'Chimney Park',
      'Raindance',
      'Steeplechase',
      'Downtown Windsor',
    ],
  },
  {
    slug: 'timnath',
    name: 'Timnath',
    tagline: 'Small Town Charm, Big Colorado Living',
    heroPhoto: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80',
    description:
      'Timnath is one of Northern Colorado\'s most charming and fastest growing small towns. Tucked between Fort Collins and Windsor, Timnath has transformed in recent years from a quiet farming community into a desirable residential destination. Timnath Reservoir is a crown jewel, a stunning body of water with boating, paddleboarding, and trail access. The town has attracted some of the region\'s most beautiful new home developments while preserving its open feel and spectacular mountain views. For those who want a quieter pace with easy access to Fort Collins amenities, Timnath is an ideal choice.',
    population: '~7,000',
    elevation: '4,850 ft',
    highlights: [
      { icon: '🌊', label: 'Reservoir', value: 'Timnath Reservoir, boating & paddleboarding' },
      { icon: '🏔️', label: 'Mountain Views', value: 'Some of the best front range views in NoCo' },
      { icon: '🏡', label: 'New Homes', value: 'Premium new construction communities' },
      { icon: '🌿', label: 'Open Space', value: 'Surrounded by open space and trails' },
      { icon: '📍', label: 'Location', value: 'Minutes from Fort Collins & Windsor' },
      { icon: '🌱', label: 'Growth', value: 'Rapidly growing with strong investment value' },
    ],
    lifestyle:
      'Timnath offers a peaceful, open air lifestyle that feels removed from the bustle without being far from anything. Residents tend to love the quiet, the views, and the newer homes. It\'s particularly popular with families and remote workers who want space and scenery.',
    schools:
      'Served by Poudre School District (PSD), one of Colorado\'s top rated districts. Proximity to Fort Collins schools is a major draw.',
    commute:
      'Fort Collins is 10 to 15 minutes west. Windsor is 5 to 10 minutes east. I 25 interchange provides quick access north and south.',
    marketOverview:
      'Timnath has seen strong appreciation as the town has grown. New construction communities are among the most active in Northern Colorado. Larger lots and premium finishes are common.',
    thingsToKnow: [
      'Timnath Reservoir offers water recreation very close to home',
      'Among the fastest growing towns in Colorado by percentage',
      'New development has brought excellent parks and trail systems',
      'Mountain views are particularly stunning from the eastern neighborhoods',
      'Very family friendly with newer infrastructure throughout',
    ],
    neighborhoods: [
      'Timnath Ranch',
      'Riverbend',
      'Wildwing',
      'Old Town Timnath',
      'Registry Ridge',
    ],
  },
  {
    slug: 'berthoud',
    name: 'Berthoud',
    tagline: 'The Garden Spot of Colorado',
    heroPhoto: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80',
    description:
      'Berthoud is a small Colorado town with big personality. Nicknamed "The Garden Spot of Colorado," Berthoud sits between Loveland and Longmont and offers some of the most picturesque farmland and mountain views in the region. In recent years, Berthoud has gained national attention thanks to TPC Colorado, a world class golf course community that brought premium resort style living to this small town. Downtown Berthoud has a classic, walkable Main Street feel with locally owned businesses and a strong sense of history. Equestrian properties and acreage lots are also common here, attracting buyers who want more land and a rural feel without being far from amenities.',
    population: '~12,000',
    elevation: '5,021 ft',
    highlights: [
      { icon: '⛳', label: 'Golf', value: 'TPC Colorado, world class golf community' },
      { icon: '🐴', label: 'Equestrian', value: 'Horse properties and acreage available' },
      { icon: '🌾', label: 'Scenery', value: 'Beautiful farmland and mountain backdrops' },
      { icon: '🏘️', label: 'Downtown', value: 'Classic walkable Main Street' },
      { icon: '🌄', label: 'Front Range', value: 'Stunning Rockies views in every direction' },
      { icon: '🤝', label: 'Community', value: 'Tight knit, welcoming small town culture' },
    ],
    lifestyle:
      'Berthoud is for those who want more space, fresh air, and a genuine small town Colorado lifestyle. Residents love the slower pace, the neighborly culture, and the beauty of the surrounding area. TPC Colorado has also brought a resort amenity lifestyle option that\'s rare in a town this size.',
    schools:
      'Served by Thompson School District (TSD). Berthoud High School and nearby schools are well regarded.',
    commute:
      'Loveland is 15 minutes north, Longmont 15 minutes south. Access to I 25 and US 287. Fort Collins is approximately 30 minutes.',
    marketOverview:
      'Berthoud offers a range of price points, from affordable starter homes to luxury TPC Colorado residences. Acreage properties are particularly sought after. The market has strengthened as the town has grown.',
    thingsToKnow: [
      'TPC Colorado hosts PGA level tournaments and has a world class practice facility',
      'Berthoud has some of the best equestrian property options in NoCo',
      'Little Thompson River runs through the area offering scenic trails',
      'Historic downtown has a great annual harvest festival',
      'Between Loveland and Longmont, strategic location for commuters',
    ],
    neighborhoods: [
      'TPC Colorado / Heron Lakes',
      'Berthoud Old Town',
      'Fickel Farm',
      'Harvest Ridge',
      'McIntosh Lake area',
    ],
  },
  {
    slug: 'johnstown',
    name: 'Johnstown',
    tagline: 'Growing Community, Great Value',
    heroPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
    description:
      'Johnstown is one of Northern Colorado\'s most well positioned growing communities. Situated along I 25 between Loveland and Greeley, Johnstown offers excellent access to major employment centers, top tier new construction, and genuinely great value for buyers. The town has a welcoming, family oriented character and has attracted significant retail and restaurant development in recent years. Johnstown\'s location at the crossroads of US 34 and I 25 makes it one of the most commuter friendly cities in the region, easily accessible to Fort Collins, Loveland, Greeley, and the Denver metro.',
    population: '~20,000',
    elevation: '4,692 ft',
    highlights: [
      { icon: '🛣️', label: 'Access', value: 'I 25 & US 34 corridor, commuter ideal' },
      { icon: '💰', label: 'Value', value: 'Great price per sq ft vs. Fort Collins' },
      { icon: '🏗️', label: 'Growth', value: 'Active new construction and development' },
      { icon: '🛍️', label: 'Retail', value: 'Growing retail and dining scene' },
      { icon: '👨‍👩‍👧', label: 'Families', value: 'Family friendly neighborhoods and parks' },
      { icon: '📍', label: 'Location', value: 'Equal distance from Loveland & Greeley' },
    ],
    lifestyle:
      'Johnstown is practical, affordable, and growing fast. It appeals strongly to young families and first time homebuyers who want space, value, and easy access to employment. The community is invested in its parks, trails, and local businesses.',
    schools:
      'Thompson School District (TSD) and Weld County RE 5J serve Johnstown. Good school options at all levels.',
    commute:
      'Direct I 25 access is a major advantage. Loveland 10 min, Greeley 20 min, Fort Collins 25 min, DIA approximately 60 min.',
    marketOverview:
      'Johnstown consistently offers some of the best value in Northern Colorado. New subdivisions continue to expand, and the Weld County location means lower property taxes for many parcels. Strong rental demand as well.',
    thingsToKnow: [
      'One of the best commuter locations in all of Northern Colorado',
      'Lower property taxes in Weld County portions of Johnstown',
      'Johnstown Town Center has major retailers and dining options',
      'Strong new construction pipeline with multiple active builders',
      'Clear Creek Trail connects to regional trail network',
    ],
    neighborhoods: [
      'TPC Colorado area',
      'Stroh Farm',
      'Johnstown Village',
      'Rolling Hills',
      'Milliken (nearby)',
    ],
  },
  {
    slug: 'wellington',
    name: 'Wellington',
    tagline: 'Northern Colorado\'s Small Town Gem',
    heroPhoto: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=80',
    description:
      'Wellington is the northernmost community in the Northern Colorado corridor and one of the most authentically small town places in the region. With a close knit community, affordable housing, and easy access to Fort Collins, Wellington attracts buyers who want a quieter pace of life without giving up Northern Colorado\'s lifestyle. The town has a proud agricultural heritage and a genuine rural feel, with wide open spaces, big skies, and minimal traffic. For buyers being priced out of Fort Collins, Wellington offers real affordability with a short commute, and a community that still feels like it did 20 years ago.',
    population: '~10,000',
    elevation: '5,220 ft',
    highlights: [
      { icon: '💰', label: 'Affordability', value: 'Most affordable city in NoCo' },
      { icon: '🌾', label: 'Rural Feel', value: 'Wide open spaces and big sky country' },
      { icon: '🤝', label: 'Community', value: 'Extremely tight knit, small town warmth' },
      { icon: '📍', label: 'Fort Collins', value: '15 minutes south on US 287' },
      { icon: '🏠', label: 'Space', value: 'Larger lots at lower price points' },
      { icon: '🐕', label: 'Outdoor Life', value: 'Trails, open space, and room to roam' },
    ],
    lifestyle:
      'Wellington is for people who genuinely love small town life. Neighbors know each other, the pace is relaxed, and the cost of living is refreshingly reasonable. It\'s particularly popular with families who want space and a tight community while staying connected to Fort Collins.',
    schools:
      'Served by Poudre School District (PSD). Wellington Middle School and Eyestone Elementary are community anchors.',
    commute:
      'US 287 south to Fort Collins in approximately 15 to 20 minutes. I 25 access via Owl Canyon Road. DIA approximately 90 minutes.',
    marketOverview:
      'Wellington is the most affordable market in Northern Colorado, making it attractive to first time buyers and investors. Price to size ratio is excellent. As Fort Collins has grown north, Wellington has benefited significantly.',
    thingsToKnow: [
      'Home to the famous "Wellington Days" community festival each summer',
      'US 287 provides a straight shot to Old Town Fort Collins',
      'Agricultural land surrounds the town, keeping the rural feel intact',
      'One of the only places in NoCo where you can get a 3 bedroom home under $400k',
      'Strong sense of local pride and community involvement',
    ],
    neighborhoods: [
      'Wellington Old Town',
      'Boxelder Creek Ranch',
      'Harvest Park',
      'Country Meadows',
    ],
  },
  {
    slug: 'greeley',
    name: 'Greeley',
    tagline: 'The Heart of Weld County',
    heroPhoto: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
    description:
      'Greeley is the largest city in Weld County and a major economic and cultural hub in Eastern Northern Colorado. Home to the University of Northern Colorado (UNC), Greeley has a vibrant arts and culture scene, a thriving food scene, and a diverse, energetic community. The city has made significant investments in its downtown corridor with new restaurants, breweries, and entertainment venues. Greeley\'s economy is one of the most diverse in Colorado, anchored by agriculture, energy, healthcare, education, and manufacturing. For buyers seeking value, investment properties, or proximity to major employers, Greeley is a compelling choice.',
    population: '~105,000',
    elevation: '4,658 ft',
    highlights: [
      { icon: '🎓', label: 'University', value: 'University of Northern Colorado (UNC)' },
      { icon: '🎵', label: 'Culture', value: 'Island Grove Events Center, arts & music scene' },
      { icon: '💼', label: 'Economy', value: 'Diverse industries: ag, energy, healthcare' },
      { icon: '🏙️', label: 'Downtown', value: 'Growing arts and dining district' },
      { icon: '💰', label: 'Value', value: 'Excellent affordability and rental returns' },
      { icon: '📍', label: 'Access', value: 'US 34, US 85, and highway 257' },
    ],
    lifestyle:
      'Greeley is a city in transition. It has a strong working class identity paired with a growing arts and culture scene fueled by UNC. The community is welcoming and diverse, and the cost of living is among the lowest in the region. For buyers who want more square footage for their dollar, Greeley delivers.',
    schools:
      'Greeley-Evans School District 6 serves the area. UNC provides exceptional higher education options in town.',
    commute:
      'US 34 west to Loveland (30 min) or Windsor (20 min). US 85 south toward metro Denver. Fort Collins 40 minutes north.',
    marketOverview:
      'Greeley offers the most affordable housing in the region with strong rental demand driven by UNC and large employment centers. Investment properties perform well here. The market is active at entry level and mid range price points.',
    thingsToKnow: [
      'Greeley Independence Stampede is one of the largest 4th of July rodeos in the U.S.',
      'Island Grove Regional Park hosts major concerts and events year round',
      'UNC drives strong rental demand and cultural activity',
      'Weld County is one of the top oil producing counties in the U.S.',
      'Pawnee National Grassland is nearby for unique outdoor exploration',
    ],
    neighborhoods: [
      'Old Town / Downtown Greeley',
      'West Greeley',
      'East Greeley',
      'UNC Campus Area',
      'Promontory',
      'Evans (adjacent city)',
    ],
  },
  {
    slug: 'severance',
    name: 'Severance',
    tagline: 'Rural Roots, Colorado Values',
    heroPhoto: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80',
    description:
      'Severance is a small, growing community in Weld County just north of Windsor. Known historically for its quirky claim to fame, being home to the Rocky Mountain Oyster Festival, Severance has a genuine rural character with wide open spaces and an authentic Colorado feel. The town is growing steadily as buyers seek affordability and space outside of Windsor and Fort Collins. With expansive views, newer residential developments, and easy access to Windsor and I 25, Severance offers a peaceful lifestyle at accessible price points. It\'s ideal for buyers who want land, space, and a truly rural Colorado experience while staying connected to the broader Northern Colorado community.',
    population: '~5,000',
    elevation: '4,850 ft',
    highlights: [
      { icon: '🌄', label: 'Open Space', value: 'Wide open land and big sky views' },
      { icon: '💰', label: 'Affordability', value: 'Competitive pricing in Weld County' },
      { icon: '🏡', label: 'Space', value: 'Larger lots and rural properties' },
      { icon: '📍', label: 'Location', value: 'Minutes from Windsor and I 25' },
      { icon: '🌱', label: 'Growth', value: 'New residential developments' },
      { icon: '🐄', label: 'Rural Charm', value: 'Authentic small town agricultural feel' },
    ],
    lifestyle:
      'Severance is for those who want a truly rural Colorado lifestyle without being isolated. It\'s quiet, spacious, and genuinely down to earth. Residents value the wide open spaces, the lack of traffic, and the tight community feel.',
    schools:
      'Weld County School District RE 4 (Windsor schools) serves Severance. Students often attend Windsor High School.',
    commute:
      'Windsor is 10 minutes south. I 25 accessible via Windsor or Johnstown. Greeley is 20 minutes east.',
    marketOverview:
      'Severance offers some of the best value per acre in Northern Colorado. New subdivisions are bringing modern homes while keeping prices accessible. Rural properties and hobby farms are available.',
    thingsToKnow: [
      'Home of the famous annual Rocky Mountain Oyster Festival',
      'Connected to Windsor by Weld County Road 74',
      'New residential development has modernized the town significantly',
      'Agriculture and open space are preserved throughout the area',
      'One of the most affordable entry points in the Windsor/Fort Collins corridor',
    ],
    neighborhoods: [
      'Severance Shores',
      'Buffalo Creek',
      'West Ridge',
      'Rural properties along WCR 74',
    ],
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
