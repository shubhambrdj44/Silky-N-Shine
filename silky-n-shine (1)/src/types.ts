export interface PackageDetail {
  name: string;
  price: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  note?: string;
}

export interface ServiceCategory {
  title: string;
  type: 'packages' | 'list' | 'hair' | 'waxing';
  items?: ServiceItem[];
  packages?: PackageDetail[];
}

export const BRIDAL_PACKAGES: PackageDetail[] = [
  {
    name: "Classic Bridal",
    price: "₹15,000",
    items: ["HD Makeup", "Hairstyling", "Saree/Dupatta Draping", "Complimentary Eyelashes"]
  },
  {
    name: "Premium Bridal",
    price: "₹20,000",
    items: ["HD/Airbrush Makeup", "Advance Hairstyling (2 looks)", "Designer Draping", "Eyelashes + Nail Paint", "Free Trial"]
  },
  {
    name: "Luxury Bridal",
    price: "₹28,000",
    items: ["Airbrush HD (Premium Brands)", "Signature Hairstyling", "Double Dupatta Draping", "Nail Extension", "Eyelashes", "Jewelry Setting", "Free Party Makeup"]
  }
];

export const PRE_BRIDAL_PACKAGES: PackageDetail[] = [
  {
    name: "Budget Glow",
    price: "₹6,000",
    items: ["Lacto Protein Facial", "Diamond / Polishing Bleach", "Tanning Remove Body Bleach + Wax", "Body Polishing", "B-Wax + Lightning Gel", "L’Oréal Hair Spa", "Manicure + Pedicure", "Any Hair Cut", "Thread Work Included"]
  },
  {
    name: "Gold Shine",
    price: "₹8,000",
    items: ["Gold Sheen / O3+ Facial", "Protein Tanning Bleach", "Tanning Body Bleach", "Rica Tanning Body Wax + Rica B-Wax", "Body Spa", "Lotus Manicure + Pedicure", "L’Oréal Spa + Treatment + Ozon", "Any Hair Cut", "Thread Work Included"]
  },
  {
    name: "Monthly Glow Plan",
    price: "₹15,000",
    items: ["2x O3+/Lotus Facials", "2x O3+/Lotus Clean Ups", "2x D-Tan", "2x Oxy / Polishing Bleach", "2x Tanning Remove Body Bleach", "2x Tanning Remove Body Wax", "2x V-Wax + Lightning Gel", "1x Body Spa", "Body Polishing", "2x L’Oréal Hair Spa", "2x L’Oréal Hair Treatments", "Face Cream", "Any Hair Cut", "2x Lotus Manicure + Pedicure", "Thread Work Included"]
  }
];

export const FACIAL_SERVICES: ServiceItem[] = [
  { id: 'f1', name: 'Hydra Facial', price: '4000/-' },
  { id: 'f2', name: 'Derma Facial', price: '3000/-' },
  { id: 'f3', name: 'Lotus Gold Sheen Facial', price: '2000/-' },
  { id: 'f4', name: 'O3+ Facial', price: '2000/-' },
  { id: 'f5', name: 'Lotus Insta Fair', price: '2000/-' },
  { id: 'f6', name: 'Lacto Protein', price: '1000/-' },
  { id: 'f7', name: 'Rose Wine', price: '800/-' },
  { id: 'f8', name: 'Skin Tightening Mask', price: '1000/-' },
  { id: 'f9', name: 'Oxy', price: '700/-' },
  { id: 'f10', name: 'Glycolic', price: '1000/-' },
  { id: 'f11', name: 'D Tan Facial', price: '600/-' },
  { id: 'f12', name: 'Wine Facial', price: '600/-' },
  { id: 'f13', name: 'Diamond Facial', price: '600/-' },
  { id: 'f14', name: 'Acne Treatment', price: '500/-' },
  { id: 'f15', name: 'Gold', price: '500/-' },
  { id: 'f16', name: 'Whitening', price: '500/-' },
  { id: 'f17', name: 'Papaya', price: '500/-' },
  { id: 'f18', name: 'Pearl', price: '400/-' },
  { id: 'f19', name: 'Insta Glow', price: '400/-' },
  { id: 'f20', name: 'Fruit', price: '400/-' },
];

export const CLEAN_UP: ServiceItem[] = [
  { id: 'c1', name: 'Hydra', price: '2000/-' },
  { id: 'c2', name: 'Derma', price: '1500/-' },
  { id: 'c3', name: 'Lotus Gold Sheen + Galvanic', price: '800/-' },
  { id: 'c4', name: 'Lotus', price: '600/-' },
  { id: 'c5', name: 'O3+ Whitening', price: '800/-' },
  { id: 'c6', name: 'O3+ D-Tan', price: '800/-' },
  { id: 'c7', name: 'Lacto Protein', price: '500/-' },
  { id: 'c8', name: 'Oxy', price: '400/-' },
  { id: 'c9', name: 'Rose Wine', price: '400/-' },
  { id: 'c10', name: 'Glycolic', price: '500/-' },
  { id: 'c11', name: 'Wine', price: '300/-' },
  { id: 'c12', name: 'Diamond', price: '300/-' },
  { id: 'c13', name: 'Gold', price: '300/-' },
  { id: 'c14', name: 'Acne Treatment', price: '400/-' },
  { id: 'c15', name: 'D-Tan', price: '300/-' },
  { id: 'c16', name: 'Papaya', price: '300/-' },
  { id: 'c17', name: 'Whitening', price: '300/-' },
  { id: 'c18', name: 'Pearl', price: '250/-' },
  { id: 'c19', name: 'Fruit (Mix)', price: '250/-' },
];

export const WAXING: ServiceItem[] = [
  { id: 'w1', name: 'Arms Wax', price: '120/-' },
  { id: 'w2', name: 'Normal Full Legs Wax', price: '180/-' },
  { id: 'w3', name: 'Chocolate Arm Wax', price: '150/-' },
  { id: 'w4', name: 'Chocolate Full Legs Wax', price: '300/-' },
  { id: 'w5', name: 'Rica Arm Tan Removing Wax', price: '350/-' },
  { id: 'w6', name: 'Rica Full Legs', price: '650/-' },
  { id: 'w7', name: 'Normal Body Wax', price: '600/-' },
  { id: 'w8', name: 'Chocolate Body Wax', price: '800/-' },
  { id: 'w9', name: 'Rica Removal Body Wax', price: '1500/-' },
  { id: 'w10', name: 'Face Normal Waxing', price: '300/-' },
  { id: 'w11', name: 'Rica Face Tanning Wax', price: '500/-' },
  { id: 'w12', name: 'Aloe Vera Wax Arms', price: '150/-' },
  { id: 'w13', name: 'Aloe Vera Wax Full Leg', price: '300/-' },
  { id: 'w14', name: 'Charcoal Body Wax', price: '1000/-' },
  { id: 'w15', name: 'Charcoal Arms', price: '200/-' },
  { id: 'w16', name: 'Charcoal Full Legs Wax', price: '400/-' },
  { id: 'w17', name: 'V Wax Normal', price: '500/-' },
  { id: 'w18', name: 'Rica V Wax', price: '1000/-' },
  { id: 'w19', name: 'Aloe Vera Full Body Wax', price: '800/-' },
];

export const MAKEUP_OTHER: ServiceItem[] = [
  { id: 'mo1', name: 'Engagement HD', price: '5000/-' },
  { id: 'mo2', name: 'Engagement Airbrush', price: '8000/-' },
  { id: 'mo3', name: 'Haldi/Mehendi Glam', price: '6500/-' },
  { id: 'mo4', name: 'Haldi/Mehendi Natural', price: '5000/-' },
  { id: 'mo5', name: 'Party Makeup Regular', price: '2500/-' },
  { id: 'mo6', name: 'Party Makeup HD', price: '3500/-' },
  { id: 'mo7', name: 'Party Makeup Airbrush', price: '5500/-' },
];

export const OTHER_SERVICES: ServiceItem[] = [
  { id: 'ot1', name: 'Body Polishing', price: '2000/-' },
  { id: 'ot2', name: 'Body Spa', price: '2500/-' },
  { id: 'ot3', name: 'Body Massage', price: '600/-' },
  { id: 'ot4', name: 'Mini Polishing / Body Bleach + Body Wax + Scrub', price: '1500/-' },
  { id: 'ot5', name: 'Bleach Fruit', price: '150/-' },
  { id: 'ot6', name: 'Bleach Gold / Diamond', price: '200/-' },
  { id: 'ot7', name: 'Bleach Oxy', price: '200/-' },
  { id: 'ot8', name: 'Bleach Tan Remove', price: '250/-' },
  { id: 'ot9', name: 'Bleach Tan + Whitening', price: '400/-' },
];

export const HAIR_SERVICES = [
  {
    category: "Hair Cutting",
    items: [
      { name: "Straight Cut", price: "50/-" },
      { name: "U-V Cut", price: "80/-" },
      { name: "Laser & Step Cut", price: "200/-" },
      { name: "Multi & Feather Cut", price: "250/-" },
      { name: "Layer Cut", price: "150/-" },
    ]
  },
  {
    category: "Hair Rebonding",
    items: [
      { name: "Short Hair", price: "4000/-" },
      { name: "Medium Hair", price: "5000/-" },
      { name: "Long Hair", price: "7000/-" },
      { name: "Hair Pressing", price: "Length Acc." },
      { name: "Keratin Treatment", price: "Length Acc." },
    ]
  },
  {
    category: "Hair Color",
    items: [
      { name: "Root Touch up", price: "800/-" },
      { name: "Global Hair Color", price: "Length Acc." },
    ]
  },
  {
    category: "Hair Care",
    items: [
      { name: "Loreal Spa", price: "500/-" },
      { name: "Loreal Treatment", price: "700/-" },
      { name: "Loreal Spa Double Treatment + Ozon", price: "1000/-" },
    ]
  }
];

export const SPECIAL_OFFERS = [
  "Luxury Bridal + 1 Party Makeup Free",
  "Bridal + Engagement = 10% OFF",
  "Group booking (2+) = 15% OFF",
];
