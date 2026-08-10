// Mock content for the UI/UX pass. Swap for a real API later.

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Stay = {
  slug: string;
  name: string;
  village: string;
  district: string;
  state: string;
  host: string;
  tags: string[];
  rating: number;
  reviews: number;
  price: number;
  image: string;
};

export const stays: Stay[] = [
  {
    slug: "apple-orchard-cottage",
    name: "Apple Orchard Cottage",
    village: "Thanedar",
    district: "Shimla",
    state: "Himachal Pradesh",
    host: "Devinder Thakur",
    tags: ["Organic", "Mountain view", "Weekend"],
    rating: 4.92,
    reviews: 148,
    price: 3200,
    image: img("photo-1470071459604-3b5ec3a7fe05"),
  },
  {
    slug: "backwater-coconut-farm",
    name: "Backwater Coconut Farm",
    village: "Kumarakom",
    district: "Kottayam",
    state: "Kerala",
    host: "Leela Mathew",
    tags: ["Waterfront", "Food included", "Couples"],
    rating: 4.97,
    reviews: 212,
    price: 4100,
    image: img("photo-1512343879784-a960bf40e7f2"),
  },
  {
    slug: "golden-fields-farmstead",
    name: "Golden Fields Farmstead",
    village: "Sultanpur Lodhi",
    district: "Kapurthala",
    state: "Punjab",
    host: "Harjeet Singh",
    tags: ["Family friendly", "Organic", "Food included"],
    rating: 4.85,
    reviews: 96,
    price: 2800,
    image: img("photo-1500382017468-9049fed747ef"),
  },
  {
    slug: "cardamom-hill-retreat",
    name: "Cardamom Hill Retreat",
    village: "Vandanmedu",
    district: "Idukki",
    state: "Kerala",
    host: "Anil Varghese",
    tags: ["Organic", "Adventure", "Mountain view"],
    rating: 4.89,
    reviews: 131,
    price: 3600,
    image: img("photo-1441974231531-c6227db76b6e"),
  },
  {
    slug: "misty-coffee-verandah",
    name: "Misty Coffee Verandah",
    village: "Suntikoppa",
    district: "Kodagu",
    state: "Karnataka",
    host: "Nalini Ponnappa",
    tags: ["Couples", "Pet friendly", "Weekend"],
    rating: 4.94,
    reviews: 178,
    price: 3900,
    image: img("photo-1508739773434-c26b3d09e071"),
  },
  {
    slug: "kumaon-stone-cottage",
    name: "Kumaon Stone Cottage",
    village: "Satkhol",
    district: "Nainital",
    state: "Uttarakhand",
    host: "Prakash Bisht",
    tags: ["Mountain view", "Family friendly", "Adventure"],
    rating: 4.8,
    reviews: 74,
    price: 2950,
    image: img("photo-1518495973542-4542c06a5843"),
  },
  {
    slug: "teesta-riverside-homestead",
    name: "Teesta Riverside Homestead",
    village: "Rinchenpong",
    district: "West Sikkim",
    state: "Sikkim",
    host: "Pema Lepcha",
    tags: ["Waterfront", "Adventure", "Organic"],
    rating: 4.88,
    reviews: 63,
    price: 3050,
    image: img("photo-1506905925346-21bda4d32df4"),
  },
  {
    slug: "desert-millet-haveli",
    name: "Desert Millet Haveli",
    village: "Khimsar",
    district: "Nagaur",
    state: "Rajasthan",
    host: "Bhanwar Rathore",
    tags: ["Food included", "Family friendly", "Weekend"],
    rating: 4.83,
    reviews: 109,
    price: 3400,
    image: img("photo-1524492412937-b28074a5d7da"),
  },
  {
    slug: "sundarban-tide-cottage",
    name: "Sundarban Tide Cottage",
    village: "Pakhiralay",
    district: "South 24 Parganas",
    state: "West Bengal",
    host: "Sujata Mondal",
    tags: ["Waterfront", "Pet friendly", "Adventure"],
    rating: 4.81,
    reviews: 58,
    price: 2650,
    image: img("photo-1439066615861-d1af74d74000"),
  },
];

export const stayFilters = {
  Property: [
    "All",
    "Organic",
    "Mountain view",
    "Waterfront",
    "Family friendly",
    "Pet friendly",
  ],
  Style: ["Weekend", "Adventure", "Couples", "Food included"],
};

export type Experience = {
  slug: string;
  title: string;
  state: string;
  hours: number;
  price: number;
  rating: number;
  image: string;
};

export const experiences: Experience[] = [
  {
    slug: "paddy-planting-kerala",
    title: "Plant a paddy with a Kerala family",
    state: "Kerala",
    hours: 4,
    price: 900,
    rating: 4.94,
    image: img("photo-1500937386664-56d1dfef3854"),
  },
  {
    slug: "sadya-kitchen-trail",
    title: "Cook a 12-dish Sadya on a banana leaf",
    state: "Kerala",
    hours: 5,
    price: 1500,
    rating: 4.98,
    image: img("photo-1585937421612-70a008356fbe"),
  },
  {
    slug: "bullock-cart-trail",
    title: "Bullock cart trail through mustard fields",
    state: "Rajasthan",
    hours: 3,
    price: 1100,
    rating: 4.86,
    image: img("photo-1533900298318-6b8da08a523e"),
  },
  {
    slug: "apple-picking-himachal",
    title: "Apple picking at 2,200 metres",
    state: "Himachal Pradesh",
    hours: 3,
    price: 1200,
    rating: 4.91,
    image: img("photo-1568702846914-96b305d2aaeb"),
  },
  {
    slug: "toddy-tapping",
    title: "Climb along for a toddy tapping morning",
    state: "Kerala",
    hours: 2,
    price: 950,
    rating: 4.8,
    image: img("photo-1519681393784-d120267933ba"),
  },
  {
    slug: "cardamom-forest-trek",
    title: "Cardamom forest trek with a spice farmer",
    state: "Sikkim",
    hours: 6,
    price: 2200,
    rating: 4.95,
    image: img("photo-1464822759023-fed622ff2c3b"),
  },
];

export const destinations = [
  { state: "Himachal Pradesh", count: 42, image: img("photo-1626621341517-bbf3d9990a23", 800) },
  { state: "Kerala", count: 68, image: img("photo-1602216056096-3b40cc0c9944", 800) },
  { state: "Punjab", count: 24, image: img("photo-1470252649378-9c29740c9fa8", 800) },
  { state: "Sikkim", count: 19, image: img("photo-1544735716-392fe2489ffa", 800) },
  { state: "Karnataka", count: 51, image: img("photo-1501854140801-50d01698950b", 800) },
  { state: "Uttarakhand", count: 47, image: img("photo-1493246507139-91e8fad9978e", 800) },
];

export const testimonials = [
  {
    quote:
      "We came for a weekend and left with a kilo of turmeric and a family we still call on festivals.",
    name: "Ananya Rao",
    role: "Traveller · Bengaluru",
    image: img("photo-1544005313-94ddf0286df2", 200),
  },
  {
    quote:
      "The land fed us for forty years. Now it also pays for my daughter's college.",
    name: "Harjeet Singh",
    role: "Host · Kapurthala, Punjab",
    image: img("photo-1507003211169-0a1dd7228f2d", 200),
  },
  {
    quote:
      "No resort buffet comes close to eating what was picked an hour ago, ten steps away.",
    name: "Rohit Menon",
    role: "Traveller · Mumbai",
    image: img("photo-1500648767791-00dcc994a43e", 200),
  },
];

/* ------------------------------------------------------------------ *
 * Hand-picked homes — full listings with a detail page.
 * "The Mango Woods" uses the real photos in /public. The other two are
 * placeholders until real photos and copy are supplied.
 * ------------------------------------------------------------------ */

export type Package = {
  name: string;
  nights: number;
  /** null renders as "Rate on request" rather than inventing a figure. */
  price: number | null;
  blurb: string;
  includes: string[];
  popular?: boolean;
};

/** A distinct kind of accommodation inside one property — shown as its own
 *  block on the detail page so a bungalow doesn't get mixed in with rooms. */
export type StayType = {
  name: string;
  /** First image leads the block; the next two render as thumbnails beneath it. */
  images: string[];
  blurb: string;
  /** Free text so a host can say "sleeps 2, extra mattress on request". */
  sleeps?: string;
  highlights: string[];
};

export type Home = {
  slug: string;
  name: string;
  village: string;
  district: string;
  state: string;
  host: string;
  hostAvatar: string;
  /** Omitted on brand-new listings — renders as "New" rather than a made-up score. */
  rating?: number;
  price: number | null;
  tags: string[];
  /** First image is the cover and the large frame in the gallery. */
  images: string[];
  story: string[];
  /** Separate accommodation blocks within the property, each with its own photo. */
  stayTypes?: StayType[];
  doHere: string[];
  included: string[];
  packages: Package[];
  /* Everything below is optional — omitted when the host hasn't told us. */
  /** The property's own brand mark, shown above the title on its page. */
  logo?: string;
  hostSince?: number;
  reviews?: number;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  baths?: number;
  checkIn?: string;
  checkOut?: string;
  mealPlan?: { meal: string; time: string; detail: string }[];
  facilities?: string[];
  nearby?: { name: string; km: number }[];
  whyUs?: string[];
  notes?: string[];
  website?: string;
  rareFind?: boolean;
  /** True while the listing is still using stand-in photography. */
  placeholder?: boolean;
};

export const homes: Home[] = [
  {
    slug: "the-mango-woods",
    name: "The Mango Woods",
    village: "Pali",
    district: "Ratnagiri",
    state: "Maharashtra",
    host: "Sandeep & Manasi Sawant",
    hostSince: 2019,
    hostAvatar: img("photo-1507003211169-0a1dd7228f2d", 200),
    rating: 4.93,
    reviews: 127,
    price: 4500,
    guests: 12,
    bedrooms: 4,
    beds: 6,
    baths: 4,
    tags: ["Organic", "Family friendly", "Food included"],
    images: [
      "/mangowoods1.jpeg",
      "/mangowoods2.jpeg",
      "/mangowoods3.jpeg",
      "/mangowoods4.jpeg",
      // Add a 5th photo here and the gallery switches to the 2×2 layout.
    ],
    story: [
      "Forty Alphonso trees, one long red-earth path, and a pool that catches the festoon lights after dark. The Mango Woods is a working orchard first and a guesthouse second — the harvest still pays the bills, and guests are simply welcome to be part of it.",
      "The villa sleeps twelve across four rooms with a wide tiled veranda for the hours nobody wants to spend indoors. Meals are Konkani and family-style: rice, sol kadhi, whatever the garden gave up that morning, and mango in every form the season allows.",
    ],
    doHere: [
      "Mango picking in season",
      "Night swim under the trees",
      "Bullock cart ride",
      "Bonfire dinners",
      "Orchard walk with Sandeep",
    ],
    included: [
      "Swimming pool",
      "Home-cooked meals",
      "Wi-Fi",
      "Free parking",
      "Bonfire pit",
      "Power backup",
      "Hot water",
      "Pet friendly",
    ],
    packages: [
      {
        name: "Weekend Under the Mangoes",
        nights: 2,
        price: 8900,
        blurb: "The default. Arrive Friday evening, leave Sunday slowly.",
        includes: [
          "2 nights for 2 guests",
          "All meals, Konkani family-style",
          "Bonfire and pool access",
        ],
      },
      {
        name: "Alphonso Harvest Week",
        nights: 4,
        price: 16500,
        blurb: "April to June only, when the whole orchard is working.",
        includes: [
          "4 nights for 2 guests",
          "Picking and grading with the family",
          "A crate of Alphonso to carry home",
        ],
        popular: true,
      },
      {
        name: "Full Orchard Buyout",
        nights: 1,
        price: 21000,
        blurb: "The entire property — all four rooms, pool and grounds.",
        includes: [
          "Up to 12 guests",
          "Private cook for the stay",
          "Late checkout at 2 pm",
        ],
      },
    ],
    rareFind: true,
  },
  {
    slug: "prakriti-agro-farm",
    name: "Prakriti Agro Farm",
    village: "Jawhar",
    district: "Palghar",
    state: "Maharashtra",
    host: "Ujjwal B.",
    hostAvatar: img("photo-1507003211169-0a1dd7228f2d", 200),
    rating: 4.5, // as rated on Google and TripAdvisor
    price: null, // rate on request — no published figure
    tags: ["Family friendly", "Pet friendly", "Food included"],
    images: ["/prakarti1.jpg", "/prakarti2.jpg", "/prakarti3.jpg"],
    logo: "/prakartilogo.png",
    story: [
      "Looking for a peaceful getaway from busy life? Prakriti Agro Farm sits on the outskirts of Jawhar hill station, close to every major attraction in the area but far enough out that the evenings stay quiet.",
      "Rooms are well appointed in both AC and non-AC, the restaurant runs veg and non-veg through the day, and the pool is open from half past seven in the morning until seven at night.",
    ],
    checkIn: "12 noon",
    checkOut: "11 am",
    doHere: [
      "Swimming pool",
      "Table tennis",
      "Carrom",
      "Badminton",
      "Children's play area",
      "Chess, Ludo and Uno",
    ],
    included: [
      "Swimming pool",
      "Home-cooked meals",
      "Hot water",
      "Free parking",
      "Power backup",
      "Pet friendly",
    ],
    facilities: [
      "Well appointed rooms, AC and non-AC",
      "Ample car parking",
      "Power backup",
      "In-house restaurant, veg and non-veg",
      "Hot and cold water, 24 hours",
      "Complimentary pickup and drop at Jawhar bus stand",
      "Car rental for sightseeing or outstation transfers, chargeable",
    ],
    mealPlan: [
      {
        meal: "Buffet lunch",
        time: "1:00 pm – 2:30 pm",
        detail:
          "Pickle, papad, salad, chapati, two veg mains, a rice, a dal, a dessert and one non-veg gravy.",
      },
      {
        meal: "Hi tea",
        time: "5:30 pm – 6:30 pm",
        detail: "One pakoda item with tea and coffee.",
      },
      {
        meal: "Buffet dinner",
        time: "8:30 pm – 9:45 pm",
        detail:
          "Pickle, papad, salad, chapati, two veg mains, a rice, a dal, a dessert and one non-veg gravy.",
      },
      {
        meal: "Breakfast",
        time: "8:30 am – 10:00 am",
        detail: "Two veg preparations and one egg preparation, with tea and coffee.",
      },
    ],
    nearby: [
      { name: "Jaivilas Palace", km: 1 },
      { name: "Hanuman Point", km: 2.3 },
      { name: "Warli Kala Kendra (Aviraj Art)", km: 3 },
      { name: "Sunset Point", km: 3.4 },
      { name: "Jaisagar Dam", km: 4 },
      { name: "Shirpamal, 360° view spot", km: 6 },
      { name: "Khadkhad Dam", km: 13 },
      { name: "Dabhosa Waterfall", km: 20 },
    ],
    whyUs: [
      "Rated 4.5 on Google and TripAdvisor",
      "Certificate of Excellence winner, 2018 and 2019",
      "TripAdvisor Travellers' Choice winner, 2020",
      "Sanitized rooms",
      "Near every major Jawhar attraction",
      "Pet friendly",
    ],
    notes: [
      "Check-in 12 noon, check-out 11 am.",
      "Starters, mineral water and beverages are charged separately.",
      "Children under 3 stay free. Ages 3–10 are charged half. Over 10 is charged as an adult.",
      "An Aadhaar card is required for every guest.",
      "Final settlement in cash only.",
      "A Dunlop mattress is provided for each extra person in a room.",
      "Any change in headcount must reach us 3 days before arrival. Last-minute cancellations mean either fewer rooms or charges for the minimum headcount you guaranteed.",
      "Swimming pool open 7:30 am to 7:00 pm. Smoking and drinking in the pool premises is strictly prohibited.",
      "Music or sound of any kind is allowed until 10 pm only, per government guidelines.",
      "Driver accommodation is complimentary in the staff room. Driver meals are ₹850 per head for all meals.",
    ],
    website: "https://www.prakritiagrofarmjawhar.com",
    packages: [
      {
        name: "Weekend Package",
        nights: 1,
        price: null,
        blurb:
          "The full board weekend — arrive for lunch, leave after breakfast the next morning.",
        includes: [
          "Stay in a well appointed room",
          "Buffet lunch, hi tea and buffet dinner",
          "Next morning breakfast",
          "Pool, indoor games and play area",
          "Complimentary Jawhar bus stand pickup and drop",
        ],
        popular: true,
      },
    ],
  },
  {
    slug: "shivar-agro-tourism",
    name: "Shivar Agro Tourism",
    // TODO: confirm the village and district with the host before going live.
    village: "Shivar",
    district: "Ratnagiri",
    state: "Maharashtra",
    host: "The Shivar family",
    hostAvatar: img("photo-1507003211169-0a1dd7228f2d", 200),
    price: null, // rate on request — no published figure yet
    tags: ["Organic", "Family friendly", "Food included"],
    images: [
      "/shivar_agro_tourism1.jpg",
      "/shivar_agro_tourism2.jpg",
      "/shivar_agro_toursim3.jpg", // filename typo is the host's — kept as uploaded
      "/shivar_agro_tourism4.jpg",
    ],
    story: [
      "Mud walls that stay cool through the worst of the afternoon, reclaimed teak that turns orange under a single bulb, and a moss-green plaster you will want to put your hand on before you have even unpacked. Shivar Agro Tourism was built out of the farm it stands on — earth from the plot, timber salvaged from old village houses, bamboo cut a short walk away.",
      "Nothing here is a theme. The mango trees framed in the bedroom window are the same ones shading the courtyard at lunch, the kitchen cooks whatever the land handed over that morning, and the loudest thing after dark is the tree line. Come for a night and you will spend most of it outside.",
    ],
    stayTypes: [
      {
        name: "The Mud Cottages",
        images: ["/shivar_agro_tourism2.jpg"],
        blurb:
          "Hand-plastered earth rooms with reclaimed-wood walls and warm, low light. Cool at noon without a compressor running, and quiet enough at night to hear the orchard.",
        sleeps: "2 guests, extra mattress on request",
        highlights: [
          "Hand-plastered mud and moss-green lime walls",
          "Reclaimed teak panelling with bamboo detailing",
          "Double bed, ceiling fan and a tea and kettle tray",
          "Ensuite bath with a stone basin and hot water",
        ],
      },
      {
        name: "The Bungalow",
        images: [
          "/shivar_agro_Bungalow.jpg",
          "/shivar_agor_bunglow.jpg", // filename typo is the host's — kept as uploaded
          "/shivar_agro_bunglow.jpg",
        ],
        blurb:
          "The old Mangalore-tiled house at the centre of the farm, with a deep shaded verandah and its own strip of garden. Inside it is all high whitewashed beams, a teak jhula hanging in the middle of the hall, and diwans along the windows for the hours between meals. Booked whole — best for a family or one group travelling together.",
        sleeps: "A whole-house booking for a family or group",
        highlights: [
          "Traditional Mangalore-tiled roof and full-length verandah",
          "Big hall with a teak swing, diwan seating and a rocking chair",
          "Wood-panelled bedrooms with attached bathrooms",
          "Private garden and sit-out under the mango trees",
          "Booked as a whole house, never shared with another party",
        ],
      },
    ],
    doHere: [
      "Sunrise walk through the orchard",
      "Mango picking in season",
      "Mud-plaster and bamboo craft demo",
      "Bonfire and star-watching",
      "Bullock cart round the plot",
      "Village cycle ride",
    ],
    included: [
      "Home-cooked meals",
      "Hot water",
      "Free parking",
      "Power backup",
      "Bonfire pit",
      "Wi-Fi",
    ],
    packages: [
      {
        name: "A Night in the Mud Cottage",
        nights: 1,
        price: null,
        blurb: "The short one. Arrive for lunch, leave after a slow breakfast.",
        includes: [
          "1 night in a mud cottage for 2 guests",
          "Lunch, evening tea, dinner and breakfast",
          "Orchard walk and bonfire",
        ],
        popular: true,
      },
      {
        name: "Whole Bungalow Weekend",
        nights: 2,
        price: null,
        blurb:
          "The full house for one group — verandah, garden and courtyard included.",
        includes: [
          "2 nights, the bungalow to yourselves",
          "All meals, cooked from the farm",
          "Bullock cart ride and craft demo",
        ],
      },
    ],
  },
  {
    slug: "kaveri-paddy-homestead",
    name: "Kaveri Paddy Homestead",
    village: "Kushalnagar",
    district: "Kodagu",
    state: "Karnataka",
    host: "Ramesh Achaiah",
    hostSince: 2020,
    hostAvatar: img("photo-1500648767791-00dcc994a43e", 200),
    rating: 4.9,
    reviews: 88,
    price: 3800,
    guests: 8,
    bedrooms: 3,
    beds: 4,
    baths: 3,
    tags: ["Waterfront", "Family friendly", "Weekend"],
    images: [
      img("photo-1508739773434-c26b3d09e071"),
      img("photo-1500382017468-9049fed747ef"),
      img("photo-1439066615861-d1af74d74000"),
      img("photo-1500937386664-56d1dfef3854"),
      img("photo-1505232530843-7e94d7faaf90"),
    ],
    story: [
      "Paddy on three sides, the Kaveri on the fourth, and a verandah built for watching both.",
      "Placeholder copy — swap for the real story once the listing is confirmed.",
    ],
    doHere: ["Paddy transplanting", "Coracle ride", "Coffee estate walk"],
    included: ["Home-cooked meals", "Wi-Fi", "Free parking", "Power backup"],
    packages: [
      {
        name: "Riverside Weekend",
        nights: 2,
        price: 7200,
        blurb: "Placeholder package — pricing to be confirmed.",
        includes: ["2 nights for 2 guests", "All meals"],
      },
    ],
    placeholder: true,
  },
];

/* ------------------------------------------------------------------ *
 * Blog
 * ------------------------------------------------------------------ */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorAvatar: string;
  /** ISO date — formatted at render so the output stays stable. */
  date: string;
  readMins: number;
  image: string;
  featured?: boolean;
  body: { heading?: string; paragraphs: string[] }[];
};

export const postCategories = [
  "All",
  "Farm life",
  "Food",
  "Travel",
  "Hosting",
  "Impact",
];

export const posts: Post[] = [
  {
    slug: "what-a-farm-morning-actually-looks-like",
    title: "What a farm morning actually looks like",
    excerpt:
      "Nobody tells you the day starts at 4:40 am, or that the first hour is the quietest you will ever experience.",
    category: "Farm life",
    author: "Ananya Rao",
    authorAvatar: img("photo-1544005313-94ddf0286df2", 200),
    date: "2026-07-18",
    readMins: 6,
    image: img("photo-1500937386664-56d1dfef3854"),
    featured: true,
    body: [
      {
        paragraphs: [
          "The alarm is a rooster only in stories. On most farms it is a mobile phone on the windowsill, set for 4:40, and the sound of someone already moving in the next room.",
          "By the time a guest surfaces at seven, half the day's work is done. The milking is over. The first round of water has gone to the field. Somebody has already walked to the road and back.",
        ],
      },
      {
        heading: "The first hour belongs to nobody",
        paragraphs: [
          "There is an hour before sunrise when the farm is neither asleep nor working. The light is grey, the birds are loud, and there is genuinely nothing for a visitor to do except stand in it.",
          "Guests who come expecting an itinerary find this hour uncomfortable. Guests who come back come back for it.",
        ],
      },
      {
        heading: "What you can help with, honestly",
        paragraphs: [
          "You will not be trusted with the animals on day one, and you should not want to be. What you can do is carry, sort, pick and wash — the parts of the work that are labour rather than skill.",
          "This is not a token gesture. During harvest, an extra pair of hands for two hours is an extra pair of hands for two hours.",
        ],
      },
    ],
  },
  {
    slug: "eating-with-the-season-in-a-konkan-kitchen",
    title: "Eating with the season in a Konkan kitchen",
    excerpt:
      "Sol kadhi in the heat, ambe dal when the mangoes come. The menu is not a choice — it is a calendar.",
    category: "Food",
    author: "Rohit Menon",
    authorAvatar: img("photo-1500648767791-00dcc994a43e", 200),
    date: "2026-07-02",
    readMins: 5,
    image: img("photo-1585937421612-70a008356fbe"),
    body: [
      {
        paragraphs: [
          "Ask a Konkan host what is for lunch and you will rarely get a list. You get a season.",
          "In April the answer is mango, in every register — raw in the dal, ripe in the bowl, dried on the roof for later in the year.",
        ],
      },
      {
        heading: "The kitchen has no cold storage",
        paragraphs: [
          "Most farm kitchens keep almost nothing. What arrives in the morning is cooked by afternoon, and what is left over decides dinner.",
          "It means the food is better than it has any right to be, and it means asking for something out of season is a slightly rude question.",
        ],
      },
    ],
  },
  {
    slug: "jawhar-the-hill-station-nobody-crowds",
    title: "Jawhar: the hill station nobody crowds",
    excerpt:
      "Three hours from Mumbai, Warli country, and a viewpoint that gives you 360 degrees to yourself.",
    category: "Travel",
    author: "Ananya Rao",
    authorAvatar: img("photo-1544005313-94ddf0286df2", 200),
    date: "2026-06-21",
    readMins: 7,
    image: img("photo-1501854140801-50d01698950b"),
    body: [
      {
        paragraphs: [
          "Everyone drives to Lonavala. Almost nobody turns north to Jawhar, which is how Jawhar has stayed the way it is.",
          "It sits in Palghar district, in the middle of Warli country, and the art you see on the walls is not decoration bought for tourists — it is local.",
        ],
      },
      {
        heading: "What is worth the detour",
        paragraphs: [
          "Shirpamal gives you a full 360-degree view and usually gives it to you alone. Dabhosa waterfall is a twenty-kilometre run and best right after the monsoon.",
          "Jaisagar dam and Hanuman point are close enough to do in an evening without rushing dinner.",
        ],
      },
    ],
  },
  {
    slug: "why-we-pay-hosts-first",
    title: "Why we pay hosts first",
    excerpt:
      "Eighty per cent of every booking goes to the family hosting you. Here is the arithmetic behind that number.",
    category: "Impact",
    author: "Harjeet Singh",
    authorAvatar: img("photo-1507003211169-0a1dd7228f2d", 200),
    date: "2026-06-05",
    readMins: 4,
    image: img("photo-1470252649378-9c29740c9fa8"),
    body: [
      {
        paragraphs: [
          "Agro-tourism only works if the farmer wins first. That sounds like a slogan until you look at what the alternative does to a village.",
          "When the platform takes the larger share, hosts cut costs on the only things guests actually came for — the food, the time, the attention.",
        ],
      },
      {
        heading: "The number in practice",
        paragraphs: [
          "On a ₹4,000 night, ₹3,200 reaches the host. The rest covers payments, verification visits and support.",
          "It is a thinner margin than the industry runs on. It is also the reason our hosts answer the phone.",
        ],
      },
    ],
  },
  {
    slug: "listing-your-farm-without-changing-it",
    title: "Listing your farm without changing it",
    excerpt:
      "The most common question from new hosts is what they need to build first. Usually the answer is nothing.",
    category: "Hosting",
    author: "Harjeet Singh",
    authorAvatar: img("photo-1507003211169-0a1dd7228f2d", 200),
    date: "2026-05-24",
    readMins: 5,
    image: img("photo-1500382017468-9049fed747ef"),
    body: [
      {
        paragraphs: [
          "Every week a farmer asks whether they should add a swimming pool before listing. Almost always, no.",
          "Guests are not comparing your farm to a resort. They are comparing it to their apartment, and your farm is already winning.",
        ],
      },
      {
        heading: "What actually needs work",
        paragraphs: [
          "A clean bathroom with reliable hot water. A room that gets dark at night. A place to sit outside. Those three fix most complaints.",
          "A field executive walks the property with you before you go live and tells you which of these you already have.",
        ],
      },
    ],
  },
  {
    slug: "the-crop-calendar-for-travellers",
    title: "A crop calendar for travellers",
    excerpt:
      "When to go where, if you want to arrive while something is actually being harvested.",
    category: "Travel",
    author: "Rohit Menon",
    authorAvatar: img("photo-1500648767791-00dcc994a43e", 200),
    date: "2026-05-09",
    readMins: 8,
    image: img("photo-1568702846914-96b305d2aaeb"),
    body: [
      {
        paragraphs: [
          "The single biggest upgrade to a farm stay is arriving in the right month. A mango farm in December is a nice garden. In May it is a workplace.",
        ],
      },
      {
        heading: "Roughly, by season",
        paragraphs: [
          "April to June: mango in the Konkan, apple blossom in Himachal. June to August: paddy transplanting across Kerala and the Konkan.",
          "September to November: coffee and cardamom in Kodagu and Idukki. December to March: wheat and mustard across Punjab and Haryana.",
        ],
      },
    ],
  },
  {
    slug: "what-guests-get-wrong-about-village-nights",
    title: "What guests get wrong about village nights",
    excerpt:
      "There is no nightlife. That is the feature, and it takes most people two evenings to believe it.",
    category: "Farm life",
    author: "Ananya Rao",
    authorAvatar: img("photo-1544005313-94ddf0286df2", 200),
    date: "2026-04-27",
    readMins: 4,
    image: img("photo-1519681393784-d120267933ba"),
    body: [
      {
        paragraphs: [
          "The first night, people reach for their phones. The second night, they notice the sky.",
          "Most farms go quiet by ten, partly out of habit and partly because sound rules require it. Nobody who stays two nights complains about this by the end.",
        ],
      },
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const popularFilters = [
  "Organic",
  "Family-friendly",
  "Weekend escape",
  "Mountain view",
  "Food included",
  "Pet-friendly",
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
