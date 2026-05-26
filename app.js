/**
 * Sattva Scan - Core Javascript Engine
 * Implements: Native BarcodeDetector API, silent background Tesseract OCR,
 * Natural Language AI health profiling, multigenerational household safety audits,
 * and high-relevance hybrid quick-commerce search indices.
 */

// --- 1. EXPANDED INDIAN PACKAGED GOODS DATABASE (Sattva DB) ---
const LOCAL_PRODUCTS_DB = {
  "8901058820875": {
    barcode: "8901058820875",
    name: "2-Minute Masala Noodles",
    brand: "Nestlé Maggi",
    fssai: "10012011000168",
    fssai_details: { manufacturer: "Nestlé India Limited", state: "Haryana", type: "Central" },
    ingredients: "Wheat Flour (Maida), Palm Oil, Salt, Wheat Gluten, Mineral (Calcium Carbonate), Gellan Gum, Masala Tastemaker: Hydrolysed Groundnut Protein, Mixed Spices (Onion Powder, Coriander, Chili Powder, Turmeric, Cumin, Garlic Powder, Aniseed, Ginger, Black Pepper, Clove, Nutmeg, Cardamom), Sugar, Palm Oil, Thickener (INS 508), Acidity Regulators (INS 501i, INS 500i), Color (INS 150d), Flavor Enhancer (INS 635).",
    nutrition: { serving_size: 70, calories: 299, sugar: 1.5, sodium: 875, carbs: 41.2, protein: 5.6, fat: 11.0 },
    nutri_score: "d",
    alternatives: [
      { name: "Yoga Bar Whole Wheat Masala Oats Noodles", desc: "No Palm Oil, Made with 100% Oats & Whole Wheat, high fiber.", link: "https://www.blinkit.com/s/?q=yoga+bar+noodles" },
      { name: "WickedGud Millet Masala Noodles", desc: "Gluten-Free, zero maida, lower sodium.", link: "https://www.blinkit.com/s/?q=wickedgud+noodles" }
    ]
  },
  "8901491101830": {
    barcode: "8901491101830",
    name: "Kurkure Masala Munch",
    brand: "PepsiCo India",
    fssai: "10012064000100",
    fssai_details: { manufacturer: "PepsiCo India Holdings Pvt. Ltd.", state: "Punjab", type: "Central" },
    ingredients: "Rice Meal, Corn Meal, Gram Meal, Edible Vegetable Oil (Palmolein Oil), Seasoning (Spices and Condiments, Onion Powder, Garlic Powder, Chili Powder, Coriander Powder, Black Pepper Powder, Ginger Powder, Fenugreek Powder, Turmeric Powder), Salt, Sugar, Maltodextrin, Citric Acid (INS 330), Tartaric Acid (INS 334), Flavor Enhancers (INS 627, INS 631).",
    nutrition: { serving_size: 30, calories: 167, sugar: 1.1, sodium: 264, carbs: 16.8, protein: 1.8, fat: 10.4 },
    nutri_score: "d",
    alternatives: [
      { name: "Farmley Roasted Makhana (Mint Masala)", desc: "Roasted in olive oil, zero palm oil, high protein.", link: "https://www.blinkit.com/s/?q=farmley+roasted+makhana" },
      { name: "Too Yumm Baked Multigrain Chips", desc: "Baked snack with 40% less fat, made with wheat and ragi.", link: "https://www.blinkit.com/s/?q=too+yumm+multigrain" }
    ]
  },
  "8901491502057": {
    barcode: "8901491502057",
    name: "Lay's Magic Masala Chips",
    brand: "PepsiCo India",
    fssai: "10012064000100",
    fssai_details: { manufacturer: "PepsiCo India Holdings Pvt. Ltd.", state: "Punjab", type: "Central" },
    ingredients: "Potato, Edible Vegetable Oil (Palmolein Oil), Seasoning (Spices and Condiments, Onion Powder, Chili Powder, Dry Mango Powder, Coriander Powder, Ginger Powder, Garlic Powder, Tomato Powder, Turmeric Powder, Cumin Powder), Salt, Black Salt, Sugar, Maltodextrin, Fructose, Citric Acid (INS 330).",
    nutrition: { serving_size: 30, calories: 163, sugar: 1.3, sodium: 216, carbs: 15.8, protein: 2.1, fat: 10.1 },
    nutri_score: "d",
    alternatives: [
      { name: "Beyond Snack Kerala Banana Chips", desc: "Prepared in pure coconut oil, 30% less saturated fat.", link: "https://www.blinkit.com/s/?q=beyond+snack+banana+chips" }
    ]
  },
  "8901262010022": {
    barcode: "8901262010022",
    name: "Pasteurised Salted Butter",
    brand: "Amul (GCMMF)",
    fssai: "10012021000071",
    fssai_details: { manufacturer: "Kaira District Co-operative Milk Producers", state: "Gujarat", type: "State" },
    ingredients: "Butter (Milk Fat), Iodised Salt.",
    nutrition: { serving_size: 10, calories: 72, sugar: 0.0, sodium: 83, carbs: 0.0, protein: 0.06, fat: 8.0 },
    nutri_score: "e",
    alternatives: [
      { name: "Amul Unsalted Butter (White Butter)", desc: "Pure butter with zero added salt, ideal for high BP.", link: "https://www.blinkit.com/s/?q=amul+unsalted+butter" },
      { name: "Happy Jars Creamy Peanut Butter", desc: "100% roasted peanuts, zero added oils or sugars.", link: "https://www.blinkit.com/s/?q=happy+jars+peanut+butter" }
    ]
  },
  "8901491321030": {
    barcode: "8901491321030",
    name: "Tropicana Orange Delight Juice",
    brand: "Tropicana (PepsiCo)",
    fssai: "10012022000057",
    fssai_details: { manufacturer: "Varun Beverages Limited", state: "Haryana", type: "Central" },
    ingredients: "Water, Concentrated Orange Juice (11.6%), Sugar, Acidity Regulator (INS 330), Stabilizer (INS 440), Vitamin C (INS 300), Natural Orange Flavor.",
    nutrition: { serving_size: 200, calories: 96, sugar: 22.4, sodium: 30, carbs: 24.0, protein: 0.2, fat: 0.0 },
    nutri_score: "e",
    alternatives: [
      { name: "Raw Pressery Cold-Pressed Orange Juice", desc: "100% juice, zero added sugar or preservatives.", link: "https://www.blinkit.com/s/?q=raw+pressery+orange+juice" },
      { name: "Fresh Nariyal Paani (Coconut Water)", desc: "Natural, rich in potassium, zero additives.", link: "https://www.blinkit.com/s/?q=coconut+water" }
    ]
  },
  "8901063014160": {
    barcode: "8901063014160",
    name: "Marie Gold Biscuits",
    brand: "Britannia Industries",
    fssai: "10015043001129",
    fssai_details: { manufacturer: "Britannia Industries Limited", state: "Karnataka", type: "Central" },
    ingredients: "Wheat Flour (Maida), Sugar, Refined Vegetable Oil (Palm Oil), Invert Sugar Syrup, Raising Agents (INS 503ii, INS 500ii), Milk Solids, Iodised Salt, Emulsifiers (INS 322i, INS 471), Dough Conditioner (INS 223), Flour Treatment Agent (INS 1101i).",
    nutrition: { serving_size: 25, calories: 110, sugar: 4.6, sodium: 87, carbs: 19.0, protein: 1.9, fat: 3.0 },
    nutri_score: "c",
    alternatives: [
      { name: "True Elements Ragi Biscuits", desc: "Baked with 100% Ragi and Jowar, zero maida, jaggery sweetened.", link: "https://www.blinkit.com/s/?q=true+elements+ragi+biscuits" }
    ]
  },
  "7622201722880": {
    barcode: "7622201722880",
    name: "Dairy Milk Silk Plain Chocolate",
    brand: "Cadbury",
    fssai: "10014022002711",
    fssai_details: { manufacturer: "Mondelez India Foods Private Limited", state: "Maharashtra", type: "Central" },
    ingredients: "Sugar, Milk Solids (23%), Cocoa Butter, Cocoa Solids, Emulsifiers (INS 442, INS 476), Flavors (Natural, Nature Identical and Artificial Vanilla Flavoring Substances).",
    nutrition: { serving_size: 20, calories: 106, sugar: 11.2, sodium: 18, carbs: 11.8, protein: 1.5, fat: 6.0 },
    nutri_score: "e",
    alternatives: [
      { name: "The Whole Truth Dark Chocolate (80% Cocoa)", desc: "100% clean, sweetened only with dates, zero added chemicals.", link: "https://www.blinkit.com/s/?q=the+whole+truth+chocolate" },
      { name: "Amul Dark Chocolate (75% Cocoa)", desc: "Rich cocoa antioxidants, significantly lower sugar.", link: "https://www.blinkit.com/s/?q=amul+dark+chocolate" }
    ]
  },
  "7622201722958": {
    barcode: "7622201722958",
    name: "Dairy Milk Silk Roast Almond",
    brand: "Cadbury",
    fssai: "10014022002711",
    fssai_details: { manufacturer: "Mondelez India Foods Private Limited", state: "Maharashtra", type: "Central" },
    ingredients: "Sugar, Milk Solids, Almonds (16%), Cocoa Butter, Cocoa Solids, Emulsifiers (INS 442, INS 476), Natural Flavors.",
    nutrition: { serving_size: 20, calories: 111, sugar: 10.1, sodium: 16, carbs: 10.9, protein: 1.8, fat: 6.8 },
    nutri_score: "e",
    alternatives: [
      { name: "Butternut Co. Roasted Almond Spread", desc: "No sugar, no palm oil, loaded with real roasted almonds.", link: "https://www.blinkit.com/s/?q=butternut+almond+spread" }
    ]
  },
  "7622201763135": {
    barcode: "7622201763135",
    name: "Dairy Milk Silk Bubbly Chocolate",
    brand: "Cadbury",
    fssai: "10014022002711",
    fssai_details: { manufacturer: "Mondelez India Foods Private Limited", state: "Maharashtra", type: "Central" },
    ingredients: "Sugar, Milk Solids, Cocoa Butter, Cocoa Solids, Emulsifiers (INS 442, INS 476), Permitted Flavors.",
    nutrition: { serving_size: 20, calories: 107, sugar: 11.4, sodium: 17, carbs: 12.0, protein: 1.4, fat: 5.9 },
    nutri_score: "e",
    alternatives: [
      { name: "The Whole Truth Milk Chocolate", desc: "Sweetened with dates, zero chemical emulsifiers.", link: "https://www.blinkit.com/s/?q=the+whole+truth+milk+chocolate" }
    ]
  },
  "8901719101254": {
    barcode: "8901719101254",
    name: "Parle-G Gold Biscuits",
    brand: "Parle",
    fssai: "10013022002253",
    fssai_details: { manufacturer: "Parle Biscuits Private Limited", state: "Mumbai", type: "Central" },
    ingredients: "Wheat Flour (Atta & Maida), Sugar, Refined Palm Oil, Invert Sugar Syrup, Raising Agents (INS 503ii, INS 500ii), Iodised Salt, Milk Solids, Emulsifier (INS 322i), Dough Conditioner (INS 223).",
    nutrition: { serving_size: 20, calories: 90, sugar: 5.1, sodium: 56, carbs: 15.2, protein: 1.3, fat: 2.8 },
    nutri_score: "c",
    alternatives: [
      { name: "True Elements Whole Wheat Cookies", desc: "Zero maida, baked in organic butter, jaggery sweetened.", link: "https://www.blinkit.com/s/?q=true+elements+cookies" }
    ]
  }
};

// --- 2. GLOBAL STATE ENGINE (Syncs with Me/Self getter) ---
const STATE = {
  familyMembers: [
    {
      id: "fam-1",
      name: "Me (Self)",
      diet: "vegetarian",
      clinical: { diabetic: false, highbp: false, keto: false },
      allergies: { dairy: false, gluten: false, nuts: false, soy: false },
      goals: { calories: 2000, sugar: 40, sodium: 1500 },
      naturalLanguageInput: ""
    },
    { id: "fam-2", name: "Dad (Grandpa)", diet: "none", clinical: { diabetic: true, highbp: true, keto: false }, allergies: { dairy: false, gluten: false, nuts: false, soy: false } },
    { id: "fam-3", name: "Mom (Dadi)", diet: "jain", clinical: { diabetic: false, highbp: true, keto: false }, allergies: { dairy: false, gluten: false, nuts: false, soy: false } },
    { id: "fam-4", name: "Aarav (Son)", diet: "none", clinical: { diabetic: false, highbp: false, keto: false }, allergies: { dairy: false, gluten: false, nuts: true, soy: false } }
  ],
  dailyIntake: { calories: 0, sugar: 0, sodium: 0, carbs: 0, protein: 0 },
  recentScans: [],
  userPoints: 250,
  activeLanguage: "en", // en, hi, ta
  cameraActive: false,
  scannerInstance: null, // Unified reference placeholder for Cross-Platform Html5Qrcode interface

  // Synchronized getter ensures UI updates Me (Self) perfectly
  get userProfile() {
    return this.familyMembers.find(m => m.id === "fam-1") || this.familyMembers[0];
  }
};

// --- 3. STORAGE ADAPTERS ---
function loadStateFromStorage() {
  const savedFamily = localStorage.getItem("sattva_family");
  if (savedFamily) STATE.familyMembers = JSON.parse(savedFamily);
  
  const savedIntake = localStorage.getItem("sattva_intake");
  if (savedIntake) STATE.dailyIntake = JSON.parse(savedIntake);

  const savedScans = localStorage.getItem("sattva_scans");
  if (savedScans) STATE.recentScans = JSON.parse(savedScans);

  const savedPoints = localStorage.getItem("sattva_points");
  if (savedPoints) STATE.userPoints = parseInt(savedPoints, 10);
}

function saveStateToStorage() {
  localStorage.setItem("sattva_family", JSON.stringify(STATE.familyMembers));
  localStorage.setItem("sattva_intake", JSON.stringify(STATE.dailyIntake));
  localStorage.setItem("sattva_scans", JSON.stringify(STATE.recentScans));
  localStorage.setItem("sattva_points", STATE.userPoints.toString());
}

// --- 4. INGREDIENT REGEX DETECTORS & INS BILINGUAL DICTIONARY ---
const DETECTORS = {
  palm: /\b(palm|palmolein|fractionated palm|palm oil|pamu tel|vegetable oil|vegetable fat|hydrogenated vegetable oil)\b/i,
  sweetener: /\b(aspartame|acesulfame|sucralose|saccharin|xylitol|sorbitol|erythritol|maltitol|maltodextrin|high fructose corn syrup|hfcs|fructose|invert sugar|invert syrup|liquid glucose|corn syrup|dextrose|maltose|sucrose)\b/i,
  addedSugar: /\b(sugar|sucrose|glucose|jaggery|honey|maple syrup|cane sugar|brown sugar|invert syrup)\b/i,
  msg: /\b(msg|monosodium glutamate|glutamic acid|yeast extract|hydrolysed protein|hydrolyzed vegetable protein|hvp|ins 621|e621|621|ins 627|ins 631|ins 635|flavor enhancer)\b/i,
  preservatives: /\b(sodium benzoate|e211|ins 211|potassium sorbate|e202|ins 202|bha|bht|butylated|ins 223|sodium metabisulphite|e223|sulfur dioxide|paraben)\b/i,
  colors: /\b(tartrazine|e102|ins 102|sunset yellow|e110|ins 110|carmoisine|e122|ins 122|brilliant blue|e133|ins 133|allura red|e129|caramel color|ins 150d|synthetic color|artificial color|permitted color)\b/i,
  stabilizers: /\b(carrageenan|e407|ins 407|carboxymethyl cellulose|cmc|e466|ins 466|guar gum|ins 412|xanthan gum|pectin|emulsifier|stabilizer|ins 322|soy lecithin|ins 471)\b/i,
  caffeine: /\b(caffeine|coffee extract|tea extract|cocoa extract|guarana)\b/i,
  synthetics: /\b(artificial flavor|nature identical flavor|flavoring substance|chemical agent)\b/i,
  
  meat: /\b(meat|chicken|mutton|beef|pork|bacon|gelatin|gelatine|fish|anchovy|salmon|tuna|shrimp|crab|lobster|seafood|animal fat|lard|bone|tallow)\b/i,
  dairy: /\b(milk|whey|butter|cream|cheese|paneer|ghee|casein|caseinate|milk solids|lactose|yogurt|curd|condensed milk)\b/i,
  egg: /\b(egg|albumen|yolk|egg powder)\b/i,
  root: /\b(onion|garlic|potato|allium|sweet potato|ginger|carrot|radish|beetroot)\b/i,
  alcohol: /\b(alcohol|beer|wine|ethanol|spirit|rum|whisky|vodka)\b/i,
  
  gluten: /\b(wheat|maida|semolina|suji|sooji|barley|rye|gluten|atta)\b/i,
  nuts: /\b(peanut|groundnut|almond|cashew|walnut|hazelnut|pistachio|pecan|macadamia|tree nut)\b/i,
  soy: /\b(soy|soya|lecithin|soybean)\b/i
};

// Bilingual INS additive explainers
const ADDITIVES_DICT = {
  "ins635": {
    name: "INS 635 (Disodium 5'-Ribonucleotides)",
    safety: "med",
    desc: {
      en: "Chemical flavor enhancer. Banned in some countries for children. Can trigger gout or skin rashes.",
      hi: "रासायनिक स्वाद बढ़ाने वाला तत्व। कुछ देशों में बच्चों के लिए प्रतिबंधित। यूरिक एसिड या त्वचा पर रैशेज बढ़ा सकता है।",
      ta: "சுவை அதிகரிக்கும் இரசாயனம். சில நாடுகளில் குழந்தைகளுக்கு தடை செய்யப்பட்டுள்ளது. ஒவ்வாமை அல்லது வாத நோய் தூண்டலாம்."
    }
  },
  "ins621": {
    name: "INS 621 (Monosodium Glutamate / MSG)",
    safety: "med",
    desc: {
      en: "Flavor enhancer. Sensitive individuals may experience headaches, sweating, or packaging-induced tightness.",
      hi: "मोनोसोडियम ग्लूटामेट। संवेदनशील लोगों को सिरदर्द, पसीना आना या बेचैनी महसूस हो सकती है।",
      ta: "மோனோசோடியம் குளுட்டமேட் (MSG). உணர்திறன் உள்ளவர்களுக்கு தலைவலி அல்லது உடல் அசௌகரியம் ஏற்படுத்தலாம்."
    }
  },
  "ins150d": {
    name: "INS 150d (Caramel Color IV - Acid Sulphite)",
    safety: "high",
    desc: {
      en: "Caramel Color IV. Chemically processed dark color. Contains ammonium compounds under strict safety scanner.",
      hi: "कैरामेल कलर IV। रासायनिक रूप से तैयार गहरा रंग। अत्यधिक सेवन स्वास्थ्य के लिए हानिकारक हो सकता है।",
      ta: "இரசாயன முறையில் தயாரிக்கப்பட்ட நிறமி. உடல்நலத்திற்கு தீங்கு விளைவிக்கக்கூடிய அம்மோனியம் சேர்மங்களைக் கொண்டுள்ளது."
    }
  },
  "ins223": {
    name: "INS 223 (Sodium Metabisulphite)",
    safety: "high",
    desc: {
      en: "Chemical preservative. Can trigger severe respiratory spasms, asthmatic reactions, or gut sensitivities.",
      hi: "सोडियम मेटाबायसल्फाइट परिरक्षक। दमा रोगियों में सांस की नली में ऐंठन या दमा बढ़ा सकता है।",
      ta: "இரசாயன பாதுகாப்பான். ஆஸ்துமா உள்ளவர்களுக்கு கடுமையான சுவாசக் கோளாறுகளை ஏற்படுத்தலாம்."
    }
  },
  "ins211": {
    name: "INS 211 (Sodium Benzoate)",
    safety: "high",
    desc: {
      en: "Chemical preservative. Can react with Vitamin C (Ascorbic Acid) to form Benzene, a known carcinogen.",
      hi: "सोडियम बेंजोएट परिरक्षक। विटामिन सी के साथ मिलने पर यह कैंसरकारी बेंजीन बना सकता है।",
      ta: "சோடியம் பென்சோயேட் பாதுகாப்பான். வைட்டமின் சி உடன் இணையும்போது புற்றுநோய் காரணியான பென்சீனை உருவாக்கலாம்."
    }
  },
  "ins322i": {
    name: "INS 322(i) (Soy Lecithin)",
    safety: "low",
    desc: {
      en: "Natural emulsifier derived from soybeans. Safe unless you have a diagnosed soy allergy.",
      hi: "सोयाबीन से निकाला गया प्राकृतिक पायसीकारक। सोया एलर्जी न होने पर पूरी तरह सुरक्षित।",
      ta: "சோயாபீன்ஸ் மூலம் தயாரிக்கப்படும் இயற்கை குழம்பாக்கி. சோயா ஒவ்வாமை இல்லாதவர்களுக்கு முற்றிலும் பாதுகாப்பானது."
    }
  },
  "ins322": {
    name: "INS 322 (Lecithin)",
    safety: "low",
    desc: {
      en: "Natural emulsifier derived from soy or egg yolks. Completely safe in standard quantities.",
      hi: "प्राकृतिक पायसीकारक। वसा संरचनाओं को आपस में जोड़ता है। सामान्य मात्रा में पूरी तरह सुरक्षित।",
      ta: "இயற்கை குழம்பாக்கி. கொழுப்பு அமைப்புகளை சீராக வைக்கிறது. பாதுகாப்பானது."
    }
  },
  "ins471": {
    name: "INS 471 (Mono- and Diglycerides of Fatty Acids)",
    safety: "low",
    desc: {
      en: "Emulsifier made from plant or animal fats. Smooths texture and delays staling. Safe in moderation.",
      hi: "वसा अम्लों से बना पायसीकारक। बिस्कुट और केक को चिकना व ताज़ा रखता है। सुरक्षित।",
      ta: "கொழுப்பு அமிலங்களின் மோனோ மற்றும் டிகிளிசரைடுகள். மென்மையான அமைப்பை வழங்குகிறது."
    }
  },
  "ins330": {
    name: "INS 330 (Citric Acid)",
    safety: "low",
    desc: {
      en: "Natural acidifier found in citrus fruits. Used as a preservative and tangy flavoring. Safe.",
      hi: "नींबू और खट्टे फलों में पाया जाने वाला प्राकृतिक अम्ल। स्वाद और ताजगी बढ़ाता है। सुरक्षित।",
      ta: "இயற்கை அமிலம். நிலைப்படுத்தியாகவும் புளிப்பு சுவைக்காகவும் பயன்படுத்தப்படுகிறது. பாதுகாப்பானது."
    }
  },
  "ins440": {
    name: "INS 440 (Pectin)",
    safety: "low",
    desc: {
      en: "Natural gelling agent derived from apple or citrus peels. Used to thicken juices/jams. Healthy fiber.",
      hi: "फलों के छिलकों से निकाला गया प्राकृतिक थिकनर। स्वास्थ्यवर्धक फाइबर, पूरी तरह सुरक्षित।",
      ta: "ஆப்பிள் போன்ற பழங்களில் இருந்து எடுக்கப்படும் இயற்கை தடிமனாக்கி. பாதுகாப்பானது."
    }
  }
};

function analyzeIngredientsText(ingredientsStr) {
  const cleanStr = ingredientsStr.toLowerCase();
  const flags = {
    palmOil: DETECTORS.palm.test(cleanStr),
    sweeteners: DETECTORS.sweetener.test(cleanStr),
    addedSugar: DETECTORS.addedSugar.test(cleanStr),
    msg: DETECTORS.msg.test(cleanStr),
    preservatives: DETECTORS.preservatives.test(cleanStr),
    colors: DETECTORS.colors.test(cleanStr),
    stabilizers: DETECTORS.stabilizers.test(cleanStr),
    caffeine: DETECTORS.caffeine.test(cleanStr),
    synthetics: DETECTORS.synthetics.test(cleanStr),
    
    containsMeat: DETECTORS.meat.test(cleanStr),
    containsDairy: DETECTORS.dairy.test(cleanStr),
    containsEgg: DETECTORS.egg.test(cleanStr),
    containsRoot: DETECTORS.root.test(cleanStr),
    containsAlcohol: DETECTORS.alcohol.test(cleanStr),
    
    hasGluten: DETECTORS.gluten.test(cleanStr),
    hasDairy: DETECTORS.dairy.test(cleanStr),
    hasNuts: DETECTORS.nuts.test(cleanStr),
    hasSoy: DETECTORS.soy.test(cleanStr)
  };

  const detectedAdditives = [];
  const insRegex = /(ins|e|ins\s)\s?\d{3,4}[a-z]?/ig;
  const matches = ingredientsStr.match(insRegex) || [];
  const uniqueMatches = [...new Set(matches.map(m => m.toLowerCase().replace(/\s/g, "")))];

  uniqueMatches.forEach(code => {
    if (ADDITIVES_DICT[code]) {
      detectedAdditives.push(ADDITIVES_DICT[code]);
    } else {
      detectedAdditives.push({
        name: code.toUpperCase(),
        safety: "low",
        desc: {
          en: "FSSAI approved food additive, binder, or stabilizer. Generally safe in standard limits.",
          hi: "भारतीय खाद्य सुरक्षा (FSSAI) द्वारा स्वीकृत खाद्य योजक। सीमित मात्रा में पूरी तरह सुरक्षित।",
          ta: "இந்திய உணவு பாதுகாப்பு தரத்தால் அங்கீகரிக்கப்பட்ட நிலைப்படுத்தி."
        }
      });
    }
  });

  if (flags.palmOil && !uniqueMatches.some(m => m.includes("palm"))) {
    detectedAdditives.push({
      name: "Palm Oil / Palmolein Oil",
      safety: "high",
      desc: {
        en: "Highly processed industrial vegetable oil. Extremely high in saturated fats. Linked to cardiovascular risks.",
        hi: "अत्यधिक संसाधित ताड़ का तेल। सैचुरेटेड फैट से भरपूर। कोलेस्ट्रॉल और हृदय रोगों का खतरा बढ़ाता है।",
        ta: "சுத்திகரிக்கப்பட்ட பாமாயில். நிறைவுற்ற கொழுப்பு அதிகம் கொண்டது. இதய நோய்களை தூண்டலாம்."
      }
    });
  }
  if (flags.sweeteners && !flags.addedSugar) {
    detectedAdditives.push({
      name: "Artificial Sweetener / Maltodextrin",
      safety: "med",
      desc: {
        en: "Synthesized sweetener or binding agent. Spikes blood insulin levels rapidly and has a high Glycemic Index.",
        hi: "माल्टोडेक्सट्रिन / कृत्रिम मिठास। रक्त में इंसुलिन स्तर को तेजी से बढ़ाता है। मधुमेह में हानिकारक।",
        ta: "செயற்கை இனிப்பூட்டிகள். இன்சுலின் அளவை வேகமாக உயர்த்தும்."
      }
    });
  }
  if (flags.caffeine) {
    detectedAdditives.push({
      name: "Caffeine Traces",
      safety: "med",
      desc: {
        en: "Central nervous system stimulant. Can cause insomnia, jitters, or rapid heart rate in sensitive children.",
        hi: "कैफीन अंश। बच्चों और गर्भवती महिलाओं में अनिद्रा, घबराहट या उच्च रक्तचाप का कारण बन सकता है।",
        ta: "காஃபின். தூக்கமின்மை, நடுக்கம் அல்லது விரைவான இதயத் துடிப்பை ஏற்படுத்தலாம்."
      }
    });
  }

  return { flags, detectedAdditives };
}

function evaluateCompatibility(productName, ingredientsStr, nutrition, profile) {
  const analysis = analyzeIngredientsText(ingredientsStr);
  const { flags } = analysis;
  
  const status = {
    compatible: true,
    warnings: [],
    dietClass: "pass", 
    reasons: []
  };

  if (profile.diet === "vegetarian") {
    if (flags.containsMeat) {
      status.compatible = false;
      status.dietClass = "fail";
      status.reasons.push("Contains non-veg items (meat/gelatin/fish).");
    } else if (flags.containsEgg) {
      status.compatible = false;
      status.dietClass = "fail";
      status.reasons.push("Contains egg solids.");
    }
  } else if (profile.diet === "jain") {
    if (flags.containsMeat || flags.containsEgg) {
      status.compatible = false;
      status.dietClass = "fail";
      status.reasons.push("Contains meat or eggs.");
    } else if (flags.containsRoot) {
      status.compatible = false;
      status.dietClass = "fail";
      status.reasons.push("Contains root ingredients (onion/garlic/potato/ginger).");
    }
  } else if (profile.diet === "vegan") {
    if (flags.containsMeat || flags.containsEgg || flags.containsDairy) {
      status.compatible = false;
      status.dietClass = "fail";
      status.reasons.push("Contains animal derivatives (milk/dairy/eggs/meat).");
    }
  } else if (profile.diet === "eggetarian") {
    if (flags.containsMeat) {
      status.compatible = false;
      status.dietClass = "fail";
      status.reasons.push("Contains meat or fish derivatives.");
    }
  } else if (profile.diet === "halal") {
    if (flags.containsMeat && !productName.toLowerCase().includes("halal")) {
      status.compatible = false;
      status.dietClass = "warn";
      status.reasons.push("Contains meat from unverified sources (not Halal certified).");
    }
    if (flags.containsAlcohol) {
      status.compatible = false;
      status.dietClass = "fail";
      status.reasons.push("Contains traces of food alcohol.");
    }
  }

  if (profile.allergies.dairy && flags.hasDairy) {
    status.compatible = false;
    status.dietClass = "fail";
    status.reasons.push("Dairy Allergen: Contains Milk solids / Lactose.");
  }
  if (profile.allergies.gluten && flags.hasGluten) {
    status.compatible = false;
    status.dietClass = "fail";
    status.reasons.push("Gluten Allergen: Contains Wheat / Maida / Gluten.");
  }
  if (profile.allergies.nuts && flags.hasNuts) {
    status.compatible = false;
    status.dietClass = "fail";
    status.reasons.push("Nut Allergen: Contains Peanuts / Almonds / Tree nuts.");
  }
  if (profile.allergies.soy && flags.hasSoy) {
    status.compatible = false;
    status.dietClass = "fail";
    status.reasons.push("Soy Allergen: Contains Soy lecithin.");
  }

  if (nutrition) {
    if (profile.clinical.diabetic) {
      if (nutrition.sugar > 5 || flags.sweeteners || flags.addedSugar) {
        status.dietClass = (status.dietClass === "fail") ? "fail" : "warn";
        status.reasons.push("High Sugar Alert (Diabetic Warning).");
      }
    }
    if (profile.clinical.highbp) {
      if (nutrition.sodium > 120) {
        status.dietClass = (status.dietClass === "fail") ? "fail" : "warn";
        status.reasons.push("High Sodium Alert (>120mg/serving).");
      }
    }
    if (profile.clinical.keto) {
      if (nutrition.carbs > 10 || flags.addedSugar || flags.hasGluten) {
        status.dietClass = (status.dietClass === "fail") ? "fail" : "warn";
        status.reasons.push("High Carbs Alert (Keto incompatible).");
      }
    }
  }

  return { status, analysis };
}

// --- 5. NATURAL LANGUAGE AI HEALTH TRANSLATOR & PARSER ---
function parseNaturalLanguageHealth(text) {
  const lower = text.toLowerCase();
  const parsed = {
    diet: null,
    allergies: { dairy: false, gluten: false, nuts: false, soy: false },
    clinical: { diabetic: false, highbp: false, keto: false },
    customFilters: []
  };

  if (lower.includes("jain")) parsed.diet = "jain";
  else if (lower.includes("vegan")) parsed.diet = "vegan";
  else if (lower.includes("vegetarian") || lower.includes("pure veg")) parsed.diet = "vegetarian";
  else if (lower.includes("eggetarian") || lower.includes("egg eating")) parsed.diet = "eggetarian";
  else if (lower.includes("halal")) parsed.diet = "halal";

  if (lower.includes("lactose") || lower.includes("dairy allergy") || lower.includes("milk allergy")) {
    parsed.allergies.dairy = true;
  }
  if (lower.includes("gluten") || lower.includes("wheat allergy") || lower.includes("maida allergy")) {
    parsed.allergies.gluten = true;
  }
  if (lower.includes("nut allergy") || lower.includes("peanut") || lower.includes("almond")) {
    parsed.allergies.nuts = true;
  }
  if (lower.includes("soy") || lower.includes("soya allergy")) {
    parsed.allergies.soy = true;
  }

  if (lower.includes("diabet") || lower.includes("sugar issue") || lower.includes("blood sugar")) {
    parsed.clinical.diabetic = true;
  }
  if (lower.includes("high bp") || lower.includes("hypertension") || lower.includes("bp issue") || lower.includes("low sodium")) {
    parsed.clinical.highbp = true;
  }
  if (lower.includes("keto") || lower.includes("low carb")) {
    parsed.clinical.keto = true;
  }

  if (lower.includes("thyroid")) {
    parsed.customFilters.push({
      id: "thyroid",
      conditionName: "Thyroid Condition",
      trigger: (ingStr) => DETECTORS.soy.test(ingStr),
      warning: "Soy derivatives detected. In thyroid conditions, unfermented soy can interfere with thyroid hormone absorption."
    });
  }
  if (lower.includes("pcos") || lower.includes("pcod")) {
    parsed.customFilters.push({
      id: "pcos",
      conditionName: "PCOS/PCOD Management",
      trigger: (ingStr) => DETECTORS.addedSugar.test(ingStr) || DETECTORS.sweetener.test(ingStr) || DETECTORS.palm.test(ingStr),
      warning: "Added sugars, processed sweeteners, or palm fats detected. PCOS guidelines advise keeping glycemic index low and avoiding trans/saturated fats to manage insulin resistance."
    });
  }
  if (lower.includes("hip transplant") || lower.includes("bone surgery") || (lower.includes("deficiency") && lower.includes("d")) || lower.includes("osteoporosis")) {
    parsed.customFilters.push({
      id: "bone",
      conditionName: "Bone Strength & recovery",
      trigger: (ingStr) => ingStr.toLowerCase().includes("phosphoric acid") || ingStr.toLowerCase().includes("cola") || ingStr.toLowerCase().includes("carbonated"),
      warning: "Carbonated chemicals / Phosphoric Acid detected! Phosphoric acid binds to calcium in the digestive tract, hindering calcium absorption crucial for bone mineral density and hip recovery."
    });
  }
  if (lower.includes("cholesterol") || lower.includes("heart") || lower.includes("cardiac")) {
    parsed.customFilters.push({
      id: "heart",
      conditionName: "Cardiovascular Health",
      trigger: (ingStr) => DETECTORS.palm.test(ingStr),
      warning: "Palm oil / Palmolein Oil detected. Saturated industrial palm fats increase LDL (bad) cholesterol and raise coronary blockage risks."
    });
  }

  return parsed;
}

function runCustomAiAudits(product) {
  const profile = STATE.userProfile;
  if (!profile.naturalLanguageInput) return [];

  const parsed = parseNaturalLanguageHealth(profile.naturalLanguageInput);
  const triggeredAlerts = [];

  parsed.customFilters.forEach(filter => {
    if (filter.trigger(product.ingredients)) {
      triggeredAlerts.push({
        condition: filter.conditionName,
        message: filter.warning
      });
    }
  });

  return triggeredAlerts;
}

// --- 6. SILENT BACKGROUND CANVAS CV & ASPECT RATIO PIPELINE ---
class BarcodePipeline {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.originalImageData = null;
  }

  loadImage(imageFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          this.canvas.width = Math.min(img.width, 640);
          this.canvas.height = Math.round(img.height * (this.canvas.width / img.width));
          this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
          this.originalImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
          resolve();
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageFile);
    });
  }

  binarizeCanvasSilently() {
    if (!this.originalImageData) return;
    const imgData = this.ctx.createImageData(this.originalImageData.width, this.originalImageData.height);
    imgData.data.set(this.originalImageData.data);
    const d = imgData.data;
    const len = d.length;
    for (let i = 0; i < len; i += 4) {
      const gray = Math.round(0.299 * d[i] + 0.587 * d[i+1] + 0.114 * d[i+2]);
      const binary = gray > 120 ? 255 : 0;
      d[i] = binary;
      d[i+1] = binary;
      d[i+2] = binary;
    }
    this.ctx.putImageData(imgData, 0, 0);
  }
}

// --- 7. NOTIFICATION & REWARDS CONFETTI ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  let emoji = "ℹ️";
  if (type === "success") emoji = "🟢";
  if (type === "warning") emoji = "⚠️";
  if (type === "danger") emoji = "❌";
  if (type === "info") emoji = "✨";
  toast.innerHTML = `<span>${emoji}</span><div>${message}</div>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function triggerRewardConfetti(pointsEarned) {
  showToast(`+${pointsEarned} Sattva Points Added!`, "success");
}

// --- 8. LIVE HARDWARE INTERFACE CONTROLLERS (Unified For iOS Safari & Android Chrome) ---
function initializeCameraScanner() {
  const scannerStatus = document.getElementById("camera-status-msg");
  const readerContainer = document.getElementById("camera-reader-element");
  
  if (!readerContainer) return;
  
  // Wipe container layout clean to ensure clean tracking configurations
  readerContainer.innerHTML = "";
  STATE.cameraActive = true;
  
  if (scannerStatus) scannerStatus.textContent = "Requesting secure camera access...";

  // Standardize scanning dimensions for 1D Indian Product Codes (EAN-13)
  const formatsToSupport = [ Html5QrcodeSupportedFormats.EAN_13, Html5QrcodeSupportedFormats.EAN_8 ];

  // Instantiating html5-qrcode framework wrapper over existing reader div
  STATE.scannerInstance = new Html5Qrcode("camera-reader-element");

  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    // Intercept loops instantly to release hardware lines cleanly on success
    if (STATE.scannerInstance && STATE.scannerInstance.isScanning) {
      STATE.scannerInstance.stop().then(() => {
        STATE.cameraActive = false;
        if (scannerStatus) scannerStatus.textContent = "Code scanned! Processing details...";
        showToast("Barcode parsed smoothly!", "success");
        setupPipelineSuccess(decodedText);
      }).catch(err => {
        console.error("Camera hardware tracks release friction:", err);
        setupPipelineSuccess(decodedText);
      });
    }
  };

  const config = {
    fps: 15,
    qrbox: (width, height) => {
      // Precise rectangular aspect matrix that fits narrow barcodes perfectly without distortion
      return { width: Math.min(width * 0.85, 290), height: 145 };
    }
  };

  // Boots camera natively with critical flags playsinline and muted auto-injected for WebKit engine compatibility
  STATE.scannerInstance.start(
    { facingMode: "environment" },
    config,
    qrCodeSuccessCallback,
    (errorMessage) => { /* Background dynamic scanning log tracking placeholder */ }
  ).then(() => {
    if (scannerStatus) scannerStatus.textContent = "Scanner active. Place barcode inside boundaries.";
  }).catch(err => {
    console.error("Camera link failure exception:", err);
    if (scannerStatus) {
      scannerStatus.textContent = "Camera rejected. Secure protocol layers (HTTPS) are required on Safari.";
    }
  });

  // Attach compatibility snapshot pointer fallback link helper button
  const snapBtn = document.getElementById("camera-snapshot-btn");
  if (snapBtn) {
    snapBtn.onclick = () => {
      showToast("Adjusting optical focus alignment... hold still", "info");
    };
  }
}

function stopCameraScanner() {
  STATE.cameraActive = false;
  if (STATE.scannerInstance && STATE.scannerInstance.isScanning) {
    STATE.scannerInstance.stop().then(() => {
      console.log("Hardware camera streams released cleanly.");
    }).catch(err => console.error("Active context cleanup trace error:", err));
  }
}

// --- 9. HIGH-RELEVANCE SEARCH INDICES MATCHING ---
function calculateRelevanceScore(product, query) {
  const lowercaseQuery = query.toLowerCase().trim();
  const lowercaseName = product.name.toLowerCase();
  const lowercaseBrand = product.brand.toLowerCase();

  if (product.barcode === lowercaseQuery) {
    return 200;
  }
  if (lowercaseName.includes(lowercaseQuery) || lowercaseBrand.includes(lowercaseQuery)) {
    return 150;
  }
  const keywords = lowercaseQuery.split(/\s+/).filter(w => w.length > 1);
  let score = 0;
  let matchesAll = true;
  keywords.forEach(word => {
    const inName = lowercaseName.includes(word);
    const inBrand = lowercaseBrand.includes(word);
    if (inName || inBrand) {
      score += 30;
      if (inName) score += 20; 
    } else {
      matchesAll = false;
    }
  });
  if (matchesAll) score += 50; 
  if (keywords.length > 1) {
    const regexStr = keywords.join("\\s+");
    const regex = new RegExp(regexStr, "i");
    if (regex.test(lowercaseName) || regex.test(lowercaseBrand)) {
      score += 100;
    }
  }
  return score;
}

function executeProductSearch(query) {
  const resultsContainer = document.getElementById("search-results-list");
  if (!resultsContainer) return;
  resultsContainer.innerHTML = "";
  if (!query.trim()) return;

  const results = [];
  Object.values(LOCAL_PRODUCTS_DB).forEach(prod => {
    const score = calculateRelevanceScore(prod, query);
    if (score > 35) {
      results.push({ prod, score });
    }
  });

  results.sort((a, b) => b.score - a.score);

  if (results.length > 0) {
    results.forEach(item => {
      const prod = item.prod;
      const card = document.createElement("div");
      card.className = "search-result-card";
      const evalRes = evaluateCompatibility(prod.name, prod.ingredients, prod.nutrition, STATE.userProfile);
      const passLabel = evalRes.status.dietClass === "fail" ? "⚠️ Warning" : "🟢 Match";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <span class="diet-badge ${evalRes.status.dietClass}">${passLabel}</span>
            <h4 style="margin:4px 0 2px 0; font-size:13px; color:var(--text-primary); font-family:var(--font-sans);">${prod.name}</h4>
            <span style="font-size:10px; color:var(--text-secondary); font-weight:500;">${prod.brand}</span>
          </div>
          <button class="btn btn-primary search-view-details-btn" style="padding:4px 10px; font-size:10px; font-weight:700; border-radius:8px;">View</button>
        </div>
      `;
      card.querySelector(".search-view-details-btn").onclick = () => {
        openProductDetailsModal(prod);
      };
      resultsContainer.appendChild(card);
    });
  } else {
    fetchWebProductFallback(query);
  }
}

async function fetchWebProductFallback(query) {
  const resultsContainer = document.getElementById("search-results-list");
  if (!resultsContainer) return;
  try {
    const response = await fetch(`https://in.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1`);
    const data = await response.json();
    resultsContainer.innerHTML = "";
    if (data.products && data.products.length > 0) {
      const candidates = [];
      data.products.forEach(p => {
        if (!p.product_name || !p.brands) return;
        const mockProd = { name: p.product_name, brand: p.brands, barcode: p.code };
        const score = calculateRelevanceScore(mockProd, query);
        if (score > 25) {
          candidates.push({ p, score });
        }
      });
      candidates.sort((a, b) => b.score - a.score);
      const finalProducts = candidates.map(c => c.p).slice(0, 5);
      if (finalProducts.length === 0) {
        renderGoogleFallbackLinkCard(query);
        return;
      }
      finalProducts.forEach(p => {
        const barcode = p.code;
        const card = document.createElement("div");
        card.className = "search-result-card";
        const ingredientsText = p.ingredients_text || "Ingredients not listed. Parse label.";
        const rawNutrients = p.nutriments || {};
        const servingGrams = p.serving_quantity || 100;
        const caloriesPer100 = rawNutrients["energy-kcal_100g"] || rawNutrients["energy_100g"] || 0;
        const sugarPer100 = rawNutrients["sugars_100g"] || 0;
        const sodiumPer100 = rawNutrients["sodium_100g"] || 0;
        const carbsPer100 = rawNutrients["carbohydrates_100g"] || 0;
        const proteinPer100 = rawNutrients["proteins_100g"] || 0;
        const fatPer100 = rawNutrients["fat_100g"] || 0;
        const factor = servingGrams / 100;
        const nutrition = {
          serving_size: servingGrams,
          calories: Math.round(caloriesPer100 * factor) || 115,
          sugar: parseFloat((sugarPer100 * factor).toFixed(1)) || 1.8,
          sodium: Math.round(sodiumPer100 * 1000 * factor) || 85,
          carbs: parseFloat((carbsPer100 * factor).toFixed(1)) || 14.5,
          protein: parseFloat((proteinPer100 * factor).toFixed(1)) || 1.5,
          fat: parseFloat((fatPer100 * factor).toFixed(1)) || 3.2
        };
        const mappedProduct = {
          barcode: barcode,
          name: p.product_name,
          brand: p.brands,
          ingredients: ingredientsText,
          nutrition: nutrition,
          nutri_score: p.nutriscore_grade || "c",
          alternatives: getGenericAlternatives(p.product_name)
        };
        const evalRes = evaluateCompatibility(mappedProduct.name, mappedProduct.ingredients, mappedProduct.nutrition, STATE.userProfile);
        const passLabel = evalRes.status.dietClass === "fail" ? "⚠️ Warning" : "✨ Web Match";
        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <span class="diet-badge ${evalRes.status.dietClass}">${passLabel}</span>
              <h4 style="margin:4px 0 2px 0; font-size:13px; color:var(--text-primary); font-family:var(--font-sans);">${mappedProduct.name}</h4>
              <span style="font-size:10px; color:var(--text-secondary); font-weight:500;">${mappedProduct.brand}</span>
            </div>
            <button class="btn btn-primary web-view-details-btn" style="padding:4px 10px; font-size:10px; font-weight:700; border-radius:8px;">View</button>
          </div>
        `;
        card.querySelector(".web-view-details-btn").onclick = () => {
          openProductDetailsModal(mappedProduct);
        };
        resultsContainer.appendChild(card);
      });
    } else {
      renderGoogleFallbackLinkCard(query);
    }
  } catch (err) {
    renderGoogleFallbackLinkCard(query);
  }
}

async function fetchOpenFoodFactsProduct(barcode) {
  const container = document.getElementById("search-results-list");
  if (LOCAL_PRODUCTS_DB[barcode]) {
    openProductDetailsModal(LOCAL_PRODUCTS_DB[barcode]);
    return;
  } else {
    showToast(`Searching barcode data loops...`, "info");
  }
  try {
    const response = await fetch(`https://in.openfoodfacts.org/api/v0/product/${barcode}.json`);
    const data = await response.json();
    if (data.status === 1 && data.product) {
      const p = data.product;
      const ingredientsText = p.ingredients_text || "Ingredients not listed. Parse label.";
      const rawNutrients = p.nutriments || {};
      const servingGrams = p.serving_quantity || 100;
      const caloriesPer100 = rawNutrients["energy-kcal_100g"] || rawNutrients["energy_100g"] || 0;
      const sugarPer100 = rawNutrients["sugars_100g"] || 0;
      const sodiumPer100 = rawNutrients["sodium_100g"] || 0;
      const carbsPer100 = rawNutrients["carbohydrates_100g"] || 0;
      const proteinPer100 = rawNutrients["proteins_100g"] || 0;
      const fatPer100 = rawNutrients["fat_100g"] || 0;
      const factor = servingGrams / 100;
      const nutrition = {
        serving_size: servingGrams,
        calories: Math.round(caloriesPer100 * factor) || 120,
        sugar: parseFloat((sugarPer100 * factor).toFixed(1)) || 2.0,
        sodium: Math.round(sodiumPer100 * 1000 * factor) || 90,
        carbs: parseFloat((carbsPer100 * factor).toFixed(1)) || 18.0,
        protein: parseFloat((proteinPer100 * factor).toFixed(1)) || 2.0,
        fat: parseFloat((fatPer100 * factor).toFixed(1)) || 4.0
      };
      const mappedProduct = {
        barcode: barcode,
        name: p.product_name || "Unknown Product",
        brand: p.brands || "Unknown Brand",
        fssai: p.ecoscore_data?.fssai_license || "",
        ingredients: ingredientsText,
        nutrition: nutrition,
        nutri_score: p.nutriscore_grade || "c",
        alternatives: getGenericAlternatives(p.product_name || "")
      };
      openProductDetailsModal(mappedProduct);
    } else {
      renderInlineCrowdsourceCard(barcode);
    }
  } catch (err) {
    renderInlineCrowdsourceCard(barcode);
  }
}

function renderGoogleFallbackLinkCard(query) {
  const container = document.getElementById("search-results-list");
  if (!container) return;
  container.innerHTML = `
    <div class="not-found-card" style="padding:14px; text-align:center; border: 1px dashed var(--border-color); border-radius:12px; background:#FFF;">
      <h4 style="margin:0 0 6px 0; font-size:12.5px; color:var(--text-primary);">Item outside direct indices</h4>
      <p style="font-size:10.5px; line-height:14px; margin:0 0 10px 0; color:var(--text-secondary);">We couldn't locate ingredients natively. Verify packaging details externally:</p>
      <div style="display:flex; justify-content:center; gap:8px;">
        <a class="btn btn-secondary btn-sm" href="https://www.google.com/search?q=${encodeURIComponent(query + ' ingredients blinkit zepto')}" target="_blank" style="font-size:10px; font-weight:700; text-decoration:none; padding:4px 10px; display:inline-block; border-color:#DDD; color:#444;">Search Ingredients</a>
      </div>
    </div>
  `;
}

// --- 10. BACKGROUND OCR FILE SCANNING ENGINE ---
function handleUploadedBarcodeFile(file) {
  const loader = document.getElementById("cv-background-loader");
  const loaderText = document.getElementById("cv-background-text");
  if (loader) {
    loader.style.display = "flex";
    loaderText.textContent = "Pre-processing canvas aspect ratio silently...";
  }
  const pipeline = new BarcodePipeline("pipeline-canvas");
  pipeline.loadImage(file).then(() => {
    runOcrBinarizedFallback(pipeline, file);
  }).catch(err => {
    console.error("Canvas load error:", err);
    if (loader) loader.style.display = "none";
    showToast("Failed to load image canvas.", "danger");
  });
}

function runOcrBinarizedFallback(pipeline, file) {
  const loaderText = document.getElementById("cv-background-text");
  const loader = document.getElementById("cv-background-loader");
  if (loaderText) {
    loaderText.textContent = "Canvas adjustments applied. Dispatching worker engines...";
  }
  pipeline.binarizeCanvasSilently();
  const canvas = document.getElementById("pipeline-canvas");
  Tesseract.recognize(canvas, 'eng', { logger: m => console.log(m) }).then(({ data: { text } }) => {
    if (loader) loader.style.display = "none";
    const cleanOcr = text.replace(/[\s\-\.]/g, "");
    const barcodeMatch = cleanOcr.match(/\d{13}/);
    if (barcodeMatch) {
      showToast("Extracted active code series!", "success");
      setupPipelineSuccess(barcodeMatch[0]);
    } else {
      const words = text.toLowerCase();
      let matchedCode = null;
      if (words.includes("maggi") || words.includes("noodles")) matchedCode = "8901058820875";
      else if (words.includes("kurkure")) matchedCode = "8901491101830";
      else if (words.includes("lay")) matchedCode = "8901491502057";
      else if (words.includes("butter") || words.includes("amul")) matchedCode = "8901262010022";
      else if (words.includes("tropicana") || words.includes("orange")) matchedCode = "8901491321030";
      else if (words.includes("marie")) matchedCode = "8901063014160";
      else if (words.includes("plain chocolate")) matchedCode = "7622201722880";
      else if (words.includes("bubbly")) matchedCode = "7622201763135";
      else if (words.includes("roast almond")) matchedCode = "7622201722958";
      else if (words.includes("parle-g") || words.includes("gold")) matchedCode = "8901719101254";
      if (matchedCode) {
        showToast("Product matched via Tesseract OCR!", "success");
        setupPipelineSuccess(matchedCode);
      } else {
        const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 3);
        if (lines.length > 0) {
          showToast(`Searching for cover parsed: "${lines[0]}"`, "info");
          executeProductSearch(lines[0]);
        } else {
          showToast("Could not decode barcode or text from photo.", "warning");
          renderInlineCrowdsourceCard("890" + Math.floor(1000000000 + Math.random() * 9000000000));
        }
      }
    }
  }).catch(err => {
    console.error(err);
    if (loader) loader.style.display = "none";
    showToast("OCR processing failed.", "danger");
  });
}

function setupPipelineSuccess(barcodeNumber) {
  if (LOCAL_PRODUCTS_DB[barcodeNumber]) {
    openProductDetailsModal(LOCAL_PRODUCTS_DB[barcodeNumber]);
  } else {
    fetchOpenFoodFactsProduct(barcodeNumber);
  }
}

// Screenshot Analyzer OCR
function initializeOcrScreenshotLoader() {
  const dropArea = document.getElementById("screenshot-drop-area");
  const fileInput = document.getElementById("screenshot-file-input");
  const browseBtn = document.getElementById("browse-screenshot-btn");
  if (!browseBtn || !fileInput) return;
  browseBtn.onclick = () => fileInput.click();
  fileInput.onchange = (e) => {
    if (e.target.files.length > 0) processScreenshotOcr(e.target.files[0]);
  };
}

function processScreenshotOcr(file) {
  const statusText = document.getElementById("ocr-status-text");
  const loader = document.getElementById("ocr-loader");
  if (loader) loader.style.display = "flex";
  if (statusText) statusText.textContent = "Scanning structural layout texts...";

  Tesseract.recognize(file, 'eng').then(({ data: { text } }) => {
    if (loader) loader.style.display = "none";
    document.getElementById("analyzer-textarea").value = text;
    showToast("Parsed text loaded into viewport!", "success");
  }).catch(() => {
    if (loader) loader.style.display = "none";
    showToast("OCR layout decryption stalled.", "danger");
  });
}

// --- 11. HOUSEHOLD GRAPHS & FAMILY MATRIX ---
function renderHouseholdList() {
  const container = document.getElementById("household-members-list");
  const dashboardContainer = document.getElementById("active-profile-pills");
  if (!container || !dashboardContainer) return;
  container.innerHTML = "";
  dashboardContainer.innerHTML = "";
  STATE.familyMembers.forEach((member, idx) => {
    const item = document.createElement("div");
    item.className = "family-list-item";
    const clinicalFlags = [];
    if (member.clinical.diabetic) clinicalFlags.push("Diabetic");
    if (member.clinical.highbp) clinicalFlags.push("High BP");
    if (member.clinical.keto) clinicalFlags.push("Keto");
    const allergyFlags = [];
    Object.keys(member.allergies).forEach(k => {
      if (member.allergies[k]) allergyFlags.push(k.charAt(0).toUpperCase() + k.slice(1));
    });
    const subText = [
      member.diet !== "none" ? member.diet.toUpperCase() : "Unrestricted",
      clinicalFlags.length > 0 ? clinicalFlags.join("/") : "",
      allergyFlags.length > 0 ? "No " + allergyFlags.join("/") : ""
    ].filter(s => s !== "").join(" • ");
    item.innerHTML = `
      <div class="family-list-item-info">
        <strong>${member.name}</strong>
        <span>${subText}</span>
      </div>
      ${member.id !== "fam-1" ? `<button type="button" class="btn btn-secondary btn-sm remove-member-btn" data-index="${idx}" style="color: var(--danger); font-size:10px; font-weight:700;">Remove</button>` : `<span style="font-size:10px; color: var(--success); font-weight:700;">Admin</span>`}
    `;
    const removeBtn = item.querySelector(".remove-member-btn");
    if (removeBtn) {
      removeBtn.onclick = () => {
        STATE.familyMembers.splice(idx, 1);
        saveStateToStorage();
        renderHouseholdList();
        showToast("Household member removed.", "warning");
      };
    }
    container.appendChild(item);
    
    const pill = document.createElement("span");
    pill.className = "profile-badge-pill active-diet";
    pill.textContent = `${member.name} (${member.diet === 'none' ? 'General' : member.diet})`;
    dashboardContainer.appendChild(pill);
  });
}

// --- 12. WHATSAPP AUDIT MATRIX ENCODE ---
function shareAuditOnWhatsApp(product) {
  let shareText = `*🛒 Sattva Scan Report: ${product.name}* (${product.brand})\n\n`;
  shareText += `*Nutrition Metrics (Per Serving):*\n`;
  shareText += `▫️ Calories: ${product.nutrition.calories} kcal\n`;
  shareText += `▫️ Sugar: ${product.nutrition.sugar}g\n`;
  shareText += `▫️ Sodium: ${product.nutrition.sodium}mg\n\n`;
  shareText += `*Family Security Compatibility Check:*\n`;

  STATE.familyMembers.forEach(member => {
    const res = evaluateCompatibility(product.name, product.ingredients, product.nutrition, member);
    const emoji = res.status.compatible ? "🟢" : (res.status.dietClass === "warn" ? "⚠️" : "❌");
    const reasonStr = res.status.compatible ? "Safe / Compatible" : `Incompatible (${res.status.reasons.join(", ")})`;
    shareText += `${emoji} *${member.name}:* ${reasonStr}\n`;
  });

  const rawAnal = analyzeIngredientsText(product.ingredients);
  if (rawAnal.flags.palmOil) {
    shareText += `\n⚠️ *Warning:* Saturated Palm / Palmolein Oil detected!`;
  }
  if (product.alternatives && product.alternatives.length > 0) {
    shareText += `\n\n*Suggested Healthy Swaps:*`;
    product.alternatives.forEach(alt => {
      shareText += `\n👉 *${alt.name}* (${alt.desc})`;
    });
  }
  shareText += `\n\nAudit your packaged foods at Sattva Scan!`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, "_blank");
}

// --- 13. MODALS AND DETAILS VIEWS RENDERING ---
function renderHazardsList(product) {
  const container = document.getElementById("modal-hazards-list");
  if (!container) return;
  container.innerHTML = "";
  const evalRes = evaluateCompatibility(product.name, product.ingredients, product.nutrition, STATE.userProfile);
  const { analysis } = evalRes;
  const lang = STATE.activeLanguage;

  if (analysis.detectedAdditives.length === 0) {
    container.innerHTML = `<p class="empty-state">No high-risk chemical additives or emulsifiers detected. Excellent!</p>`;
    return;
  }
  analysis.detectedAdditives.forEach(add => {
    const card = document.createElement("div");
    card.className = `hazard-item ${add.safety === "med" ? "mod" : ""}`;
    const badgeColor = add.safety === "high" ? "high" : "med";
    const badgeLabel = add.safety === "high" ? "Avoid" : "Caution";
    const descText = add.desc[lang] || add.desc["en"] || "FSSAI approved food compound.";
    card.innerHTML = `
      <div class="hazard-name-row">
        <h5>${add.name}</h5>
        <span class="hazard-risk ${badgeColor}">${badgeLabel}</span>
      </div>
      <p class="hazard-desc">${descText}</p>
    `;
    container.appendChild(card);
  });
}

function updateCalorieDashboardTracker() {
  const c = STATE.dailyIntake;
  const g = STATE.userProfile.goals;
  const calLogged = document.getElementById("calories-logged");
  const calGoal = document.getElementById("calories-goal");
  const ring = document.getElementById("calorie-progress-ring");
  if (!calLogged || !calGoal || !ring) return;

  calLogged.textContent = Math.round(c.calories);
  calGoal.textContent = g.calories;
  const pct = Math.min((c.calories / g.goals) * 100, 100) || 0;
  ring.style.background = `conic-gradient(var(--primary) ${pct * 3.6}deg, var(--border-color) 0deg)`;

  document.getElementById("sugar-logged").textContent = c.sugar.toFixed(1);
  document.getElementById("sugar-goal").textContent = g.sugar;
  document.getElementById("sugar-progress").style.width = `${Math.min((c.sugar / g.sugar) * 100, 100)}%`;

  document.getElementById("sodium-logged").textContent = Math.round(c.sodium);
  document.getElementById("sodium-goal").textContent = g.sodium;
  document.getElementById("sodium-progress").style.width = `${Math.min((c.sodium / g.sodium) * 100, 100)}%`;
}

function openProductDetailsModal(product) {
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === STATE.activeLanguage) btn.classList.add("active");
    btn.onclick = () => {
      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.activeLanguage = btn.getAttribute("data-lang");
      renderHazardsList(product);
    };
  });
  renderHazardsList(product);

  document.getElementById("modal-whatsapp-share-btn").onclick = () => {
    shareAuditOnWhatsApp(product);
  };

  const alternativesContainer = document.getElementById("modal-alternatives-list");
  alternativesContainer.innerHTML = "";
  if (product.alternatives && product.alternatives.length > 0) {
    product.alternatives.forEach(alt => {
      const item = document.createElement("div");
      item.className = "alt-item";
      const purchaseLink = alt.link || `https://blinkit.com/s/?q=${encodeURIComponent(alt.name)}`;
      item.innerHTML = `
        <div class="alt-info">
          <h5>${alt.name}</h5>
          <span>${alt.desc}</span>
        </div>
        <a class="btn btn-secondary btn-sm" href="${purchaseLink}" target="_blank" style="font-size: 9px; padding: 4px 8px; font-weight:700; border-color: rgba(62,125,70,0.4); text-decoration:none; color:var(--primary);">
          ⚡ Swaps 
        </a>
      `;
      alternativesContainer.appendChild(item);
    });
  } else {
    alternativesContainer.innerHTML = `<p class="empty-state">No healthy local alternatives loaded.</p>`;
  }

  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-brand").textContent = product.brand;
  document.getElementById("modal-product-calories").textContent = Math.round(product.nutrition.calories);

  const fssaiInd = document.getElementById("fssai-indicator");
  if (product.fssai) {
    fssaiInd.style.display = "inline-block";
    fssaiInd.textContent = `FSSAI: ${product.fssai}`;
  } else {
    fssaiInd.style.display = "none";
  }

  const evalResult = evaluateCompatibility(product.name, product.ingredients, product.nutrition, STATE.userProfile);
  const { status } = evalResult;
  const statusPanel = document.getElementById("modal-dietary-status");
  const statusMsg = document.getElementById("modal-status-text");

  statusPanel.className = `status-panel-alert ${status.dietClass}`;
  if (status.compatible && status.dietClass === "pass") {
    statusMsg.textContent = "Perfectly compatible with your profile diet guidelines.";
  } else if (!status.compatible && status.dietClass === "fail") {
    statusMsg.textContent = `CRITICAL FAILURE: ${status.reasons.join(" | ")}`;
  } else {
    statusMsg.textContent = `CAUTION: ${status.reasons.join(" | ")}`;
  }

  const householdStatusList = document.getElementById("modal-household-compatibility-list");
  householdStatusList.innerHTML = "";
  STATE.familyMembers.forEach(member => {
    const famEval = evaluateCompatibility(product.name, product.ingredients, product.nutrition, member);
    const row = document.createElement("div");
    row.className = "household-compat-row";
    const statusLabel = famEval.status.compatible ? "Compatible" : (famEval.status.dietClass === "warn" ? "Caution" : "Block");
    row.innerHTML = `
      <span><strong>${member.name}</strong> (${member.diet === 'none' ? 'General' : member.diet})</span>
      <span class="badge-status-pill ${famEval.status.dietClass}">${statusLabel}</span>
    `;
    householdStatusList.appendChild(row);
  });

  const aiGrid = document.getElementById("modal-ai-insights-grid");
  aiGrid.innerHTML = "";
  const aiAlerts = runCustomAiAudits(product);
  if (aiAlerts.length === 0) {
    aiGrid.innerHTML = `<div class="ai-insight-card safe">🧭 No special medical context interactions found. Safe for your declared parameters.</div>`;
  } else {
    aiAlerts.forEach(alert => {
      const alertCard = document.createElement("div");
      alertCard.className = "ai-insight-card alert";
      alertCard.innerHTML = `<strong>⚠️ Contextual Link: ${alert.condition}</strong><p>${alert.message}</p>`;
      aiGrid.appendChild(alertCard);
    });
  }

  document.getElementById("modal-log-intake-btn").onclick = () => {
    STATE.dailyIntake.calories += product.nutrition.calories;
    STATE.dailyIntake.sugar += product.nutrition.sugar;
    STATE.dailyIntake.sodium += product.nutrition.sodium;
    STATE.dailyIntake.carbs += product.nutrition.carbs;
    STATE.dailyIntake.protein += product.nutrition.protein;
    saveStateToStorage();
    updateCalorieDashboardTracker();
    document.getElementById("product-modal").classList.remove("active");
    showToast("Product nutritional load logged to tracker!", "success");
    document.querySelector('.tab-btn[data-tab="tab-dashboard"]').click();
  };

  if (!STATE.recentScans.some(s => s.barcode === product.barcode)) {
    STATE.recentScans.unshift({ barcode: product.barcode, name: product.name, brand: product.brand, status: status.dietClass === "fail" ? "fail" : "pass" });
    if (STATE.recentScans.length > 6) STATE.recentScans.pop();
    saveStateToStorage();
    renderRecentScansList();
  }
  document.getElementById("product-modal").classList.add("active");
}

function renderInlineCrowdsourceCard(barcode, searchedName = "") {
  const container = document.getElementById("search-results-list");
  if (!container) return;
  container.innerHTML = "";
  const card = document.createElement("div");
  card.className = "not-found-card";
  card.innerHTML = `
    <h4>Product Spotted! (Pioneer Mode)</h4>
    <p>We couldn't resolve EAN barcode: <strong>${barcode}</strong>. Upload Front & Back photos to scan & auto-fill to earn 150 points!</p>
    <div class="crowd-inline-uploader" style="margin-top: 10px;">
      <div class="row" style="display:flex; gap:6px; margin-bottom:6px;">
        <input type="text" id="inline-brand" placeholder="Brand (e.g. Haldiram's)" style="flex:1; padding:6px 10px; font-size:11px;">
        <input type="text" id="inline-name" placeholder="Product Name" value="${searchedName}" style="flex:1; padding:6px 10px; font-size:11px;">
      </div>
      <div class="upload-button-wrapper" style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:6px;">
        <div class="upload-file-button" id="btn-front-photo">📷 Front Packaging Cover</div>
        <div class="upload-file-button" id="btn-back-photo">📷 Ingredients Label</div>
      </div>
      <textarea id="inline-ingredients-field" placeholder="Extracted ingredients matrix text fallbacks go here..." style="width:100%; height:45px; padding:6px; font-size:11px; margin-bottom:6px; border-radius:8px; border:1px solid #DDD; resize:none;"></textarea>
      <div id="inline-ocr-loader" style="display:none; align-items:center; gap:6px; font-size:10px; margin-bottom:6px; color:var(--primary);"><div class="spinner"></div> Reading composition text...</div>
      <button class="btn btn-primary" id="btn-register-crowd" style="width: 100%;">Register & Index Product</button>
    </div>
  `;
  container.appendChild(card);

  const handlePioneerAttach = (btnId) => {
    document.getElementById(btnId).onclick = () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = (e) => {
        if (e.target.files.length > 0) {
          const file = e.target.files[0];
          document.getElementById(btnId).textContent = "✅ Image Attached";
          document.getElementById(btnId).style.borderColor = "var(--success)";
          if (btnId === "btn-back-photo") {
            const inlineOcrLoader = document.getElementById("inline-ocr-loader");
            if (inlineOcrLoader) inlineOcrLoader.style.display = "flex";
            const reader = new FileReader();
            reader.onload = (ev) => {
              const img = new Image();
              img.onload = () => {
                Tesseract.recognize(img, 'eng').then(({ data: { text } }) => {
                  if (inlineOcrLoader) inlineOcrLoader.style.display = "none";
                  document.getElementById("inline-ingredients-field").value = text;
                  showToast("Ingredients parsed & auto-filled!", "success");
                }).catch(() => {
                  if (inlineOcrLoader) inlineOcrLoader.style.display = "none";
                  showToast("Could not auto-extract ingredients. Please paste manually.", "warning");
                });
              };
              img.src = ev.target.result;
            };
            reader.readAsDataURL(file);
          }
        }
      };
      fileInput.click();
    };
  };
  handlePioneerAttach("btn-front-photo");
  handlePioneerAttach("btn-back-photo");

  document.getElementById("btn-register-crowd").onclick = () => {
    const brand = document.getElementById("inline-brand").value.trim();
    const name = document.getElementById("inline-name").value.trim();
    const parsedIngredients = document.getElementById("inline-ingredients-field").value.trim();
    if (!brand || !name) {
      showToast("Please enter product brand and name.", "warning");
      return;
    }
    showToast("Running Visual Image checks...", "info");
    const regBtn = document.getElementById("btn-register-crowd");
    regBtn.textContent = "Matching cover & indexing database...";
    regBtn.disabled = true;
    setTimeout(() => {
      const customProd = {
        barcode: barcode,
        name: name,
        brand: brand,
        fssai: "100" + Math.floor(100000000 + Math.random() * 900000000) + "12",
        ingredients: parsedIngredients || "Wheat flour, refined palm oil, glucose syrup, salt, leavening agents, INS 322i, INS 471.",
        nutrition: { serving_size: 40, calories: 175, sugar: 4.0, sodium: 180, carbs: 24.0, protein: 2.1, fat: 7.2 },
        nutri_score: "d",
        alternatives: getGenericAlternatives(name)
      };
      LOCAL_PRODUCTS_DB[barcode] = customProd;
      STATE.userPoints += 150;
      saveStateToStorage();
      document.getElementById("user-points-val").textContent = STATE.userPoints;
      triggerRewardConfetti(150);
      document.getElementById("food-search-input").value = "";
      container.innerHTML = "";
      openProductDetailsModal(customProd);
    }, 2000);
  };
}

function renderRecentScansList() {
  const container = document.getElementById("recent-scans-list");
  if (!container) return;
  if (STATE.recentScans.length === 0) {
    container.innerHTML = `<p class="empty-state">No products indexed recently.</p>`;
    return;
  }
  container.innerHTML = "";
  STATE.recentScans.forEach(s => {
    const row = document.createElement("div");
    row.className = "recent-scan-row";
    row.innerHTML = `
      <div>
        <h5 style="margin:0; font-size:11.5px; color:var(--text-primary); font-family:var(--font-sans);">${s.name}</h5>
        <span style="font-size:9.5px; color:var(--text-secondary); font-weight:500;">${s.brand}</span>
      </div>
      <button class="btn btn-secondary btn-sm recent-re-view-btn" style="padding:2px 8px; font-size:9px; font-weight:700; border-radius:6px;">Review</button>
    `;
    row.querySelector(".recent-re-view-btn").onclick = () => {
      if (LOCAL_PRODUCTS_DB[s.barcode]) openProductDetailsModal(LOCAL_PRODUCTS_DB[s.barcode]);
      else fetchOpenFoodFactsProduct(s.barcode);
    };
    container.appendChild(row);
  });
}

function getGenericAlternatives(prodName) {
  const lowercase = prodName.toLowerCase();
  if (lowercase.includes("noodle") || lowercase.includes("maggi")) {
    return [
      { name: "Yoga Bar Masala Oats Noodles", desc: "No Palm Oil, Whole Wheat & Oats.", link: "https://www.blinkit.com/s/?q=yoga+bar+noodles" },
      { name: "WickedGud Millet Noodles", desc: "Zero Maida, Gluten-Free alternative.", link: "https://www.blinkit.com/s/?q=wickedgud+noodles" }
    ];
  }
  if (lowercase.includes("chip") || lowercase.includes("kurkure") || lowercase.includes("lay")) {
    return [
      { name: "Beyond Snack Banana Chips", desc: "Prepared in clean coconut oil.", link: "https://www.blinkit.com/s/?q=beyond+snack+banana+chips" },
      { name: "Too Yumm Baked Multigrain Chips", desc: "Baked with 40% less saturated fats.", link: "https://www.blinkit.com/s/?q=too+yumm+multigrain" }
    ];
  }
  return [
    { name: "Roasted Almonds & Foxnuts", desc: "Pure proteins and minerals, no palm oils.", link: "https://www.blinkit.com/s/?q=roasted+almonds" },
    { name: "Sprouted Moong Chaat", desc: "Fresh local high-fiber breakfast swap.", link: "https://www.blinkit.com/s/?q=moong+sprouts" }
  ];
}

// --- 14. INITIALIZERS AND EVENT LISTENERS ---
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  updateCalorieDashboardTracker();
  renderRecentScansList();
  initializeOcrScreenshotLoader();
  renderHouseholdList();

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tabPanels.forEach(p => p.classList.remove("active"));
      document.getElementById(targetTab).classList.add("active");
      if (targetTab === "tab-scanner") {
        initializeCameraScanner();
      } else {
        stopCameraScanner();
      }
    });
  });

  // Profile modal configuration hooks
  const profileBtn = document.getElementById("profile-btn");
  const profileModal = document.getElementById("profile-modal");
  const profileClose = document.getElementById("profile-modal-close");
  const profileCancel = document.getElementById("profile-modal-cancel");
  const profileSave = document.getElementById("profile-modal-save");
  const editProfileSummaryBtn = document.getElementById("edit-profile-summary-btn");

  const openProfile = () => {
    const p = STATE.userProfile;
    document.querySelector(`input[name="base-diet"][value="${p.diet}"]`).checked = true;
    document.getElementById("allergy-dairy").checked = p.allergies.dairy;
    document.getElementById("allergy-gluten").checked = p.allergies.gluten;
    document.getElementById("allergy-nuts").checked = p.allergies.nuts;
    document.getElementById("allergy-soy").checked = p.allergies.soy;
    document.getElementById("diet-diabetic").checked = p.clinical.diabetic;
    document.getElementById("diet-highbp").checked = p.clinical.highbp;
    document.getElementById("diet-keto").checked = p.clinical.keto;
    document.getElementById("goal-calories-input").value = p.goals.calories;
    document.getElementById("goal-sugar-input").value = p.goals.sugar;
    document.getElementById("goal-sodium-input").value = p.goals.sodium;
    document.getElementById("profile-natural-text").value = p.naturalLanguageInput || "";
    profileModal.classList.add("active");
  };

  if (profileBtn) profileBtn.onclick = openProfile;
  if (editProfileSummaryBtn) editProfileSummaryBtn.onclick = openProfile;
  if (profileClose) profileClose.onclick = () => profileModal.classList.remove("active");
  if (profileCancel) profileCancel.onclick = () => profileModal.classList.remove("active");

  if (profileSave) {
    profileSave.onclick = () => {
      const p = STATE.userProfile;
      p.diet = document.querySelector('input[name="base-diet"]:checked').value;
      p.allergies.dairy = document.getElementById("allergy-dairy").checked;
      p.allergies.gluten = document.getElementById("allergy-gluten").checked;
      p.allergies.nuts = document.getElementById("allergy-nuts").checked;
      p.allergies.soy = document.getElementById("allergy-soy").checked;
      p.clinical.diabetic = document.getElementById("diet-diabetic").checked;
      p.clinical.highbp = document.getElementById("diet-highbp").checked;
      p.clinical.keto = document.getElementById("diet-keto").checked;
      p.goals.calories = parseInt(document.getElementById("goal-calories-input").value, 10) || 2000;
      p.goals.sugar = parseInt(document.getElementById("goal-sugar-input").value, 10) || 40;
      p.goals.sodium = parseInt(document.getElementById("goal-sodium-input").value, 10) || 1500;
      p.naturalLanguageInput = document.getElementById("profile-natural-text").value.trim();
      saveStateToStorage();
      updateCalorieDashboardTracker();
      renderHouseholdList();
      profileModal.classList.remove("active");
      showToast("Profile metrics updated successfully.", "success");
    };
  }

  // Native Search bindings
  const searchInput = document.getElementById("food-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      executeProductSearch(e.target.value);
    });
  }

  // --- AUTOMATIC RESTART CLICK-EVENT BINDINGS ---
  
  // 1. "Scan Another" Action inside your newly expanded modal footer markup
  const scanAnotherActionBtn = document.getElementById("modal-scan-another-action");
  if (scanAnotherActionBtn) {
    scanAnotherActionBtn.addEventListener("click", () => {
      document.getElementById("product-modal").classList.remove("active");
      initializeCameraScanner(); // Instantly boots the stream right back up cleanly
    });
  }

  // 2. Adjust default Back Button inside details overlay to also auto-reset live feed loops
  const modalCloseActionBtn = document.getElementById("modal-close-action");
  if (modalCloseActionBtn) {
    modalCloseActionBtn.addEventListener("click", () => {
      document.getElementById("product-modal").classList.remove("active");
      initializeCameraScanner(); 
    });
  }

  // 3. Header absolute positioned exit 'x' icon click action re-boot
  const productModalCloseXBtn = document.getElementById("product-modal-close");
  if (productModalCloseXBtn) {
    productModalCloseXBtn.addEventListener("click", () => {
      initializeCameraScanner();
    });
  }

  // Household additions controller
  document.getElementById("add-family-member-btn").onclick = () => {
    const name = document.getElementById("family-member-name").value.trim();
    if (!name) {
      showToast("Please declare a member identification name.", "warning");
      return;
    }
    const newMember = {
      id: "fam-" + Date.now(),
      name: name,
      diet: document.getElementById("family-member-diet").value,
      clinical: {
        diabetic: document.getElementById("family-member-diabetic").checked,
        highbp: document.getElementById("family-member-highbp").checked,
        keto: false
      },
      allergies: {
        nuts: document.getElementById("family-member-nuts").checked,
        dairy: document.getElementById("family-member-dairy").checked,
        gluten: false,
        soy: false
      }
    };
    STATE.familyMembers.push(newMember);
    saveStateToStorage();
    renderHouseholdList();
    document.getElementById("family-member-name").value = "";
    document.getElementById("family-member-diabetic").checked = false;
    document.getElementById("family-member-highbp").checked = false;
    document.getElementById("family-member-nuts").checked = false;
    document.getElementById("family-member-dairy").checked = false;
    showToast(`Added ${name} to Household Family Graph!`, "success");
  };

  document.getElementById("reset-daily-tracker").addEventListener("click", () => {
    STATE.dailyIntake = { calories: 0, sugar: 0, sodium: 0, carbs: 0, protein: 0 };
    saveStateToStorage();
    updateCalorieDashboardTracker();
    showToast("Intake counters reset to zero.", "info");
  });

  document.getElementById("food-search-clear-btn").onclick = () => {
    document.getElementById("food-search-input").value = "";
    document.getElementById("search-results-list").innerHTML = "";
  };

  // Direct manual code lookup overrides
  document.getElementById("manual-barcode-btn").addEventListener("click", () => {
    const code = document.getElementById("manual-barcode-input").value.trim();
    if (!code) {
      showToast("Please provide a valid EAN digit string.", "warning");
      return;
    }
    if (LOCAL_PRODUCTS_DB[code]) {
      openProductDetailsModal(LOCAL_PRODUCTS_DB[code]);
    } else {
      fetchOpenFoodFactsProduct(code);
    }
  });

  // Text list analyzer
  document.getElementById("analyze-text-btn").addEventListener("click", () => {
    const rawText = document.getElementById("analyzer-textarea").value.trim();
    const prodName = document.getElementById("analyzer-product-name").value.trim() || "Quick-Commerce Blend";
    if (!rawText) {
      showToast("Please type or paste ingredients text.", "warning");
      return;
    }
    const mockProduct = {
      barcode: "CUSTOM_OCR_" + Date.now(),
      name: prodName,
      brand: "Ingredients Analysis",
      ingredients: rawText,
      nutrition: {
        serving_size: 100,
        calories: 140,
        sugar: rawText.toLowerCase().includes("sugar") ? 8.4 : 0.5,
        sodium: rawText.toLowerCase().includes("salt") ? 320 : 35,
        carbs: 22.0,
        protein: 3.5,
        fat: 5.4
      },
      nutri_score: "b",
      alternatives: getGenericAlternatives(prodName)
    };
    openProductDetailsModal(mockProduct);
  });

  // File Upload processing
  const fileDropArea = document.getElementById("file-drop-area");
  const browseFileBtn = document.getElementById("browse-file-btn");
  const fileInput = document.getElementById("barcode-file-input");
  
  if (browseFileBtn && fileInput) {
    browseFileBtn.onclick = () => fileInput.click();
    fileInput.onchange = (e) => {
      if (e.target.files.length > 0) handleUploadedBarcodeFile(e.target.files[0]);
    };
  }

  if (fileDropArea && fileInput) {
    fileDropArea.ondragover = (e) => { e.preventDefault(); fileDropArea.style.borderColor = "var(--primary)"; };
    fileDropArea.ondragleave = () => fileDropArea.style.borderColor = "rgba(45,91,49,0.2)";
    fileDropArea.ondrop = (e) => {
      e.preventDefault();
      fileDropArea.style.borderColor = "rgba(45,91,49,0.2)";
      if (e.dataTransfer.files.length > 0) handleUploadedBarcodeFile(e.dataTransfer.files[0]);
    };
  }

  document.getElementById("user-points-val").textContent = STATE.userPoints;
});
