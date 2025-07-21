const allGroups = [
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ],
  [
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    },
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    }
  ],
  [
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    },
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    }
  ],
  [
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    },
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    }
  ],
  [
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    },
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    }
  ],
  [
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    },
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    }
  ],
  [
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    },
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    }
  ],
  [
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    },
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    }
  ],
  [
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    },
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    }
  ],
  [
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    },
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    }
  ],
  [
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    }
  ],
  [
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    },
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    }
  ],
  [
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    },
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    }
  ],
  [
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    },
    {
      "he": "בית",
      "en": "House"
    },
    {
      "he": "ספר",
      "en": "Book"
    }
  ],
  [
    {
      "he": "מים",
      "en": "Water"
    },
    {
      "he": "לחם",
      "en": "Bread"
    },
    {
      "he": "מלך",
      "en": "King"
    },
    {
      "he": "עיר",
      "en": "City"
    }
  ],
  [
    {
      "he": "שמש",
      "en": "Sun"
    },
    {
      "he": "לב",
      "en": "Heart"
    },
    {
      "he": "יד",
      "en": "Hand"
    },
    {
      "he": "אור",
      "en": "Light"
    }
  ],
  [
    {
      "he": "כסף",
      "en": "Money"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "שדה",
      "en": "Field"
    },
    {
      "he": "עץ",
      "en": "Tree"
    }
  ],
  [
    {
      "he": "ים",
      "en": "Sea"
    },
    {
      "he": "אדם",
      "en": "Man"
    },
    {
      "he": "אשה",
      "en": "Woman"
    },
    {
      "he": "ילד",
      "en": "Child"
    }
  ],
  [
    {
      "he": "לילה",
      "en": "Night"
    },
    {
      "he": "יום",
      "en": "Day"
    },
    {
      "he": "אוכל",
      "en": "Food"
    },
    {
      "he": "דג",
      "en": "Fish"
    }
  ],
  [
    {
      "he": "אש",
      "en": "Fire"
    },
    {
      "he": "חיים",
      "en": "Life"
    },
    {
      "he": "רוח",
      "en": "Wind"
    },
    {
      "he": "שמיים",
      "en": "Sky"
    }
  ],
  [
    {
      "he": "אוזן",
      "en": "Ear"
    },
    {
      "he": "עין",
      "en": "Eye"
    },
    {
      "he": "פה",
      "en": "Mouth"
    },
    {
      "he": "לבוש",
      "en": "Clothes"
    }
  ],
  [
    {
      "he": "אמת",
      "en": "Truth"
    },
    {
      "he": "שלום",
      "en": "Peace"
    },
    {
      "he": "שמחה",
      "en": "Joy"
    },
    {
      "he": "ברכה",
      "en": "Blessing"
    }
  ],
  [
    {
      "he": "חסד",
      "en": "Kindness"
    },
    {
      "he": "גוף",
      "en": "Body"
    },
    {
      "he": "כוכב",
      "en": "Star"
    },
    {
      "he": "רגל",
      "en": "Leg"
    }
  ],
  [
    {
      "he": "אדמה",
      "en": "Earth"
    },
    {
      "he": "שער",
      "en": "Gate"
    },
    {
      "he": "אבן",
      "en": "Stone"
    },
    {
      "he": "סוס",
      "en": "Horse"
    }
  ],
  [
    {
      "he": "חמור",
      "en": "Donkey"
    },
    {
      "he": "עבד",
      "en": "Servant"
    },
    {
      "he": "אוצר",
      "en": "Treasure"
    },
    {
      "he": "זהב",
      "en": "Gold"
    }
  ],
  [
    {
      "he": "גן",
      "en": "Garden"
    },
    {
      "he": "נהר",
      "en": "River"
    },
    {
      "he": "רגל",
      "en": "Leg"
    },
    {
      "he": "שיר",
      "en": "Song"
    }
  ]
];