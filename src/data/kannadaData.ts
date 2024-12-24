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
      { id: "num3", kannada: "ಮೂರು", english: "3", pronunciation: "muuru" },
      { id: "num4", kannada: "ನಾಲ್ಕು", english: "4", pronunciation: "naalku" },
      { id: "num5", kannada: "ಐದು", english: "5", pronunciation: "aidu" },
      { id: "num6", kannada: "ಆರು", english: "6", pronunciation: "aaru" },
      { id: "num7", kannada: "ಊದು", english: "7", pronunciation: "eelu" },
      { id: "num8", kannada: "ಎಂಟು", english: "8", pronunciation: "entu" },
      { id: "num9", kannada: "ಒಂಬತ್ತು", english: "9", pronunciation: "ombattu" },
      { id: "num10", kannada: "ಹತ್ತು", english: "10", pronunciation: "hattu" },
      { id: "num11", kannada: "ಹೋದು", english: "11", pronunciation: "hannondu" },
      { id: "num12", kannada: "ಹನ್ನೆರಡು", english: "12", pronunciation: "hanneradu" },
      { id: "num13", kannada: "ಹದಿಮೂರು", english: "13", pronunciation: "hadimuuru" },
      { id: "num14", kannada: "ಹದಿನಾಲ್ಕು", english: "14", pronunciation: "hadinaalku" },
      { id: "num15", kannada: "ಹದಿನೈದು", english: "15", pronunciation: "hadinaidu" },
      { id: "num16", kannada: "ಹದಿನಾರು", english: "16", pronunciation: "hadinaaru" },
      { id: "num17", kannada: "ಹದಿನೇಳು", english: "17", pronunciation: "hadineelu" },
      { id: "num18", kannada: "ಹದಿನೆಂಟು", english: "18", pronunciation: "hadinentu" },
      { id: "num19", kannada: "ಹತ್ತೊಂಬತ್ತು", english: "19", pronunciation: "hattombattu" },
      { id: "num20", kannada: "ಇಪ್ಪತ್ತು", english: "20", pronunciation: "ippattu" },
      { id: "num50", kannada: "ಐವತ್ತು", english: "50", pronunciation: "aivattu" },
      { id: "num100", kannada: "ನೂರು", english: "100", pronunciation: "nuuru" },
      { id: "num200", kannada: "ನೂರೆರಡು", english: "200", pronunciation: "eradunuuru" },
      { id: "num500", kannada: "ಆಯು", english: "500", pronunciation: "aidunuuru" },
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
      { id: "col7", kannada: "ಕಂದು", english: "Brown", pronunciation: "kandu" },
      { id: "col8", kannada: "ನೀರಳೆ", english: "Purple", pronunciation: "neerale" },
      { id: "col9", kannada: "ಉದ್ದ", english: "Grey", pronunciation: "uuda" },
      { id: "col10", kannada: "ಕಿತ್ತಳೆ", english: "Orange", pronunciation: "kittale" },
      { id: "col11", kannada: "ಕೆಸರಿ", english: "Saffron", pronunciation: "kesari" }

    ]
  },
  {
    title: "Common Phrases (ಸಾಮಾನ್ಯ ಪದಗಳು)",
    description: "Essential everyday phrases",
    words: [
      { id: "phr1", kannada: "ನಮಸ್ಕಾರ", english: "Hello", pronunciation: "namaskara" },
      { id: "phr2", kannada: "ಧನ್ಯವಾದ", english: "Thank you", pronunciation: "dhanyavada" },
      { id: "phr3", kannada: "ಹೇಗಿದ್ದೀರಾ", english: "How are you?", pronunciation: "hegiddira" },
      { id: "phr4", kannada: "ನನಗೆ ಬಹುದೂರ ಕನ್ನಡ ಬರುತ್ತೆ", english: "I know very little Kannada", pronunciation: "nanage bahudura kannada barutte" },
      { id: "phr5", kannada: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ", english: "A little bit", pronunciation: "swalpa swalpa" },
      { id: "phr6", kannada: "ಎಷ್ಟು", english: "How much?", pronunciation: "eshtu" },
      { id: "phr7", kannada: "ನನ್ನ ಹೆಸರು", english: "My name is", pronunciation: "nanna hesaru" },
      { id: "phr8", kannada: "ಊಟ ಆಯ್ತಾ?", english: "Had food?", pronunciation: "oota ayta" }
    ]
  },
  {
    title: "Relationship Nouns (ಸಂಬಂಧದ ನಾಮಪದಗಳು)",
    description: "Essential terms for relationships",
    words: [
      
        { id: "rel1", kannada: "ತಂದೆ", english: "Father", pronunciation: "tande" },
        { id: "rel2", kannada: "ತಾಯಿ", english: "Mother", pronunciation: "taayi" },
        { id: "rel3", kannada: "ಅಣ್ಣ", english: "Elder Brother", pronunciation: "anna" },
        { id: "rel4", kannada: "ತಮ್ಮ", english: "Younger Brother", pronunciation: "tamma" },
        { id: "rel5", kannada: "ಅಕ್ಕ", english: "Elder Sister", pronunciation: "akka" },
        { id: "rel6", kannada: "ತಂಗಿ", english: "Younger Sister", pronunciation: "tangi" },
        { id: "rel7", kannada: "ಅಜ್ಜ", english: "Grandfather", pronunciation: "ajja" },
        { id: "rel8", kannada: "ಅಜ್ಜಿ", english: "Grandmother", pronunciation: "ajji" },
        { id: "rel9", kannada: "ಡೊಡ್ಡಪ್ಪ", english: "Uncle", pronunciation: "doddappa" },
        { id: "rel10", kannada: "ಡೊಡ್ಡಮ್ಮ", english: "Aunty", pronunciation: "doddamma" },
        { id: "rel11", kannada: "ಅತ್ತಿಗೆ", english: "Sister-in-law", pronunciation: "attige" },
        { id: "rel12", kannada: "ಮಗ", english: "Son", pronunciation: "maga" },
        { id: "rel13", kannada: "ಮಗಳು", english: "Daughter", pronunciation: "magalu" },
        { id: "rel14", kannada: "ಗಂಡ", english: "Husband", pronunciation: "ganda" },
        { id: "rel15", kannada: "ಹೆಂಡತಿ", english: "Wife", pronunciation: "hendati" },
        { id: "rel16", kannada: "ಸ್ನೇಹಿತೆ", english: "Female Friend", pronunciation: "sneehite" },
        { id: "rel17", kannada: "ಸ್ನೇಹಿತ", english: "Male Friend", pronunciation: "sneehita" },
      ]
      
    
  },
  
];
