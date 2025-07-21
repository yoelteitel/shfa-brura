const allGroups = [
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ],
  [
    {
      "he": "The",
      "en": "the"
    },
    {
      "he": "Be",
      "en": "be"
    },
    {
      "he": "To",
      "en": "to"
    },
    {
      "he": "Of",
      "en": "of"
    }
  ],
  [
    {
      "he": "And",
      "en": "and"
    },
    {
      "he": "A",
      "en": "a"
    },
    {
      "he": "In",
      "en": "in"
    },
    {
      "he": "That",
      "en": "that"
    }
  ],
  [
    {
      "he": "Have",
      "en": "have"
    },
    {
      "he": "I",
      "en": "I"
    },
    {
      "he": "It",
      "en": "it"
    },
    {
      "he": "For",
      "en": "for"
    }
  ],
  [
    {
      "he": "Not",
      "en": "not"
    },
    {
      "he": "On",
      "en": "on"
    },
    {
      "he": "With",
      "en": "with"
    },
    {
      "he": "He",
      "en": "he"
    }
  ],
  [
    {
      "he": "As",
      "en": "as"
    },
    {
      "he": "You",
      "en": "you"
    },
    {
      "he": "Do",
      "en": "do"
    },
    {
      "he": "At",
      "en": "at"
    }
  ],
  [
    {
      "he": "This",
      "en": "this"
    },
    {
      "he": "But",
      "en": "but"
    },
    {
      "he": "His",
      "en": "his"
    },
    {
      "he": "By",
      "en": "by"
    }
  ],
  [
    {
      "he": "From",
      "en": "from"
    },
    {
      "he": "They",
      "en": "they"
    },
    {
      "he": "We",
      "en": "we"
    },
    {
      "he": "Say",
      "en": "say"
    }
  ],
  [
    {
      "he": "Her",
      "en": "her"
    },
    {
      "he": "She",
      "en": "she"
    },
    {
      "he": "Or",
      "en": "or"
    },
    {
      "he": "An",
      "en": "an"
    }
  ],
  [
    {
      "he": "Will",
      "en": "will"
    },
    {
      "he": "My",
      "en": "my"
    },
    {
      "he": "One",
      "en": "one"
    },
    {
      "he": "All",
      "en": "all"
    }
  ],
  [
    {
      "he": "Would",
      "en": "would"
    },
    {
      "he": "There",
      "en": "there"
    },
    {
      "he": "Their",
      "en": "their"
    },
    {
      "he": "What",
      "en": "what"
    }
  ],
  [
    {
      "he": "So",
      "en": "so"
    },
    {
      "he": "Up",
      "en": "up"
    },
    {
      "he": "Out",
      "en": "out"
    },
    {
      "he": "If",
      "en": "if"
    }
  ],
  [
    {
      "he": "About",
      "en": "about"
    },
    {
      "he": "Who",
      "en": "who"
    },
    {
      "he": "Get",
      "en": "get"
    },
    {
      "he": "Which",
      "en": "which"
    }
  ],
  [
    {
      "he": "Go",
      "en": "go"
    },
    {
      "he": "Me",
      "en": "me"
    },
    {
      "he": "When",
      "en": "when"
    },
    {
      "he": "Make",
      "en": "make"
    }
  ],
  [
    {
      "he": "Can",
      "en": "can"
    },
    {
      "he": "Like",
      "en": "like"
    },
    {
      "he": "Time",
      "en": "time"
    },
    {
      "he": "No",
      "en": "no"
    }
  ],
  [
    {
      "he": "Just",
      "en": "just"
    },
    {
      "he": "Him",
      "en": "him"
    },
    {
      "he": "Know",
      "en": "know"
    },
    {
      "he": "Take",
      "en": "take"
    }
  ],
  [
    {
      "he": "People",
      "en": "people"
    },
    {
      "he": "Into",
      "en": "into"
    },
    {
      "he": "Year",
      "en": "year"
    },
    {
      "he": "Your",
      "en": "your"
    }
  ],
  [
    {
      "he": "Good",
      "en": "good"
    },
    {
      "he": "Some",
      "en": "some"
    },
    {
      "he": "Could",
      "en": "could"
    },
    {
      "he": "Them",
      "en": "them"
    }
  ],
  [
    {
      "he": "See",
      "en": "see"
    },
    {
      "he": "Other",
      "en": "other"
    },
    {
      "he": "Than",
      "en": "than"
    },
    {
      "he": "Then",
      "en": "then"
    }
  ],
  [
    {
      "he": "Now",
      "en": "now"
    },
    {
      "he": "Look",
      "en": "look"
    },
    {
      "he": "Only",
      "en": "only"
    },
    {
      "he": "Come",
      "en": "come"
    }
  ],
  [
    {
      "he": "Its",
      "en": "its"
    },
    {
      "he": "Over",
      "en": "over"
    },
    {
      "he": "Think",
      "en": "think"
    },
    {
      "he": "Also",
      "en": "also"
    }
  ],
  [
    {
      "he": "Back",
      "en": "back"
    },
    {
      "he": "After",
      "en": "after"
    },
    {
      "he": "Use",
      "en": "use"
    },
    {
      "he": "Two",
      "en": "two"
    }
  ],
  [
    {
      "he": "How",
      "en": "how"
    },
    {
      "he": "Our",
      "en": "our"
    },
    {
      "he": "Work",
      "en": "work"
    },
    {
      "he": "First",
      "en": "first"
    }
  ],
  [
    {
      "he": "Well",
      "en": "well"
    },
    {
      "he": "Way",
      "en": "way"
    },
    {
      "he": "Even",
      "en": "even"
    },
    {
      "he": "New",
      "en": "new"
    }
  ],
  [
    {
      "he": "Want",
      "en": "want"
    },
    {
      "he": "Because",
      "en": "because"
    },
    {
      "he": "Any",
      "en": "any"
    },
    {
      "he": "These",
      "en": "these"
    }
  ],
  [
    {
      "he": "Give",
      "en": "give"
    },
    {
      "he": "Day",
      "en": "day"
    },
    {
      "he": "Most",
      "en": "most"
    },
    {
      "he": "Us",
      "en": "us"
    }
  ]
];