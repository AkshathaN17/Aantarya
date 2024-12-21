interface KannadaWord {
  id: string;
  kannada: string;
  english: string;
  pronunciation: string;
}

interface KannadaSection {
  title: string;
  description: string;
  words: KannadaWord[];
}

export const kannadaData: KannadaSection[] = [
  {
    title: "Numbers (ಸಂಖ್ಯೆಗಳು)",
    description: "Essential numbers in Kannada",
    words: [
      { id: "num1", kannada: "ಒಂದು", english: "1", pronunciation: "ondu" },
      { id: "num2", kannada: "ಎರಡು", english: "2", pronunciation: "eradu" },
      { id: "num3", kannada: "ಮೂರು", english: "3", pronunciation: "mooru" },
      { id: "num4", kannada: "ನಾಲ್ಕು", english: "4", pronunciation: "naalku" },
      { id: "num5", kannada: "ಐದು", english: "5", pronunciation: "aidu" },
      { id: "num10", kannada: "ಹತ್ತು", english: "10", pronunciation: "hattu" },
      { id: "num20", kannada: "ಇಪ್ಪತ್ತು", english: "20", pronunciation: "ippattu" },
      { id: "num50", kannada: "ಐವತ್ತು", english: "50", pronunciation: "aivattu" },
      { id: "num100", kannada: "ನೂರು", english: "100", pronunciation: "nooru" },
      { id: "num1000", kannada: "ಸಾವಿರ", english: "1000", pronunciation: "saavira" }
    ]
  },
  {
    title: "Colors (ಬಣ್ಣಗಳು)",
    description: "Common colors in Kannada",
    words: [
      { id: "col1", kannada: "ಕೆಂಪು", english: "Red", pronunciation: "kempu" },
      { id: "col2", kannada: "ನೀಲಿ", english: "Blue", pronunciation: "neeli" },
      { id: "col3", kannada: "ಹಸಿರು", english: "Green", pronunciation: "hasiru" },
      { id: "col4", kannada: "ಹಳದಿ", english: "Yellow", pronunciation: "haladi" },
      { id: "col5", kannada: "ಕಪ್ಪು", english: "Black", pronunciation: "kappu" },
      { id: "col6", kannada: "ಬಿಳಿ", english: "White", pronunciation: "bili" },
      { id: "col7", kannada: "ಕಂದು", english: "Brown", pronunciation: "kandu" }
    ]
  },
  {
    title: "Common Phrases (ಸಾಮಾನ್ಯ ಪದಗಳು)",
    description: "Essential everyday phrases",
    words: [
      { id: "phr1", kannada: "ನಮಸ್ಕಾರ", english: "Hello", pronunciation: "namaskara" },
      { id: "phr2", kannada: "ಧನ್ಯವಾದ", english: "Thank you", pronunciation: "dhanyavada" },
      { id: "phr3", kannada: "ಹೇಗಿದ್ದೀರಾ", english: "How are you?", pronunciation: "hegiddira" },
      { id: "phr4", kannada: "ನನಗೆ ಕನ್ನಡ ಬರುವುದಿಲ್ಲ", english: "I don't know Kannada", pronunciation: "nanage kannada baruvudilla" },
      { id: "phr5", kannada: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ", english: "A little bit", pronunciation: "swalpa swalpa" },
      { id: "phr6", kannada: "ಎಷ್ಟು", english: "How much?", pronunciation: "eshtu" },
      { id: "phr7", kannada: "ನನ್ನ ಹೆಸರು", english: "My name is", pronunciation: "nanna hesaru" },
      { id: "phr8", kannada: "ಊಟ ಆಯ್ತಾ?", english: "Had food?", pronunciation: "oota ayta" }
    ]
  }
];