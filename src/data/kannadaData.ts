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
      { id: "num4", kannada: "ನಾಲ್ಕು", english: "4", pronunciation: "naalakku" },
      { id: "num5", kannada: "ಐದು", english: "5", pronunciation: "aidu" },
      { id: "num6", kannada: "ಆರು", english: "6", pronunciation: "aaru" },
      { id: "num7", kannada: "ಏಳು", english: "7", pronunciation: "eLu" },
      { id: "num8", kannada: "ಎಂಟು", english: "8", pronunciation: "entu" },
      { id: "num9", kannada: "ಒಂಬತ್ತು", english: "9", pronunciation: "ombattu" },
      { id: "num10", kannada: "ಹತ್ತು", english: "10", pronunciation: "hattu" },
      { id: "num11", kannada: "ಹನ್ನೊಂದು", english: "11", pronunciation: "hannonDu" },
      { id: "num12", kannada: "ಹನ್ನೆರಡು", english: "12", pronunciation: "hanneradu" },
      { id: "num13", kannada: "ಹದಿಮೂರು", english: "13", pronunciation: "hadimuuru" },
      { id: "num14", kannada: "ಹದಿನಾಲ್ಕು", english: "14", pronunciation: "hadinaalku" },
      { id: "num15", kannada: "ಹದಿನೈದು", english: "15", pronunciation: "hadinaidu" },
      { id: "num16", kannada: "ಹದಿನಾರು", english: "16", pronunciation: "hadinaaru" },
      { id: "num17", kannada: "ಹದಿನೇಳು", english: "17", pronunciation: "hadineelu" },
      { id: "num18", kannada: "ಹದಿನೆಂಟು", english: "18", pronunciation: "hadenenTu" },
      { id: "num19", kannada: "ಹತ್ತೊಂಬತ್ತು", english: "19", pronunciation: "hattombattu" },
      { id: "num20", kannada: "ಇಪ್ಪತ್ತು", english: "20", pronunciation: "ippattu" },
      { id: "num50", kannada: "ಐವತ್ತು", english: "50", pronunciation: "ayvattu" },
      { id: "num100", kannada: "ನೂರು", english: "100", pronunciation: "nooru" },
      { id: "num200", kannada: "ಇನ್ನೂರು", english: "200", pronunciation: "iinnooru" },
      { id: "num500", kannada: "ಐನೂರು", english: "500", pronunciation: "aynooru" },
      { id: "num1000", kannada: "ಸಾವಿರ", english: "1000", pronunciation: "saavira" }
      ]
      
    
  },
  {
    title: "Colors (ಬಣ್ಣಗಳು)",
    description: "Common colors in Kannada",
    words: [
      { id: "col1", kannada: "ಕೆಂಪು", english: "Red", pronunciation: "kempuu" },
      { id: "col2", kannada: "ನೀಲಿ", english: "Blue", pronunciation: "neeli" },
      { id: "col3", kannada: "ಹಸಿರು", english: "Green", pronunciation: "hasiru" },
      { id: "col4", kannada: "ಹಳದಿ", english: "Yellow", pronunciation: "haladi" },
      { id: "col5", kannada: "ಕಪ್ಪು", english: "Black", pronunciation: "kappu" },
      { id: "col6", kannada: "ಬಿಳಿ", english: "White", pronunciation: "biLi" },
      { id: "col7", kannada: "ಕಂದು", english: "Brown", pronunciation: "kandu" },
      { id: "col8", kannada: "ನೇರಳೆ", english: "Purple", pronunciation: "neerale" },
      { id: "col9", kannada: "ಬೂದು", english: "Grey", pronunciation: "buudu" },
      { id: "col10", kannada: "ಕಿತ್ತಳೆ", english: "Orange", pronunciation: "kittaale" },
      { id: "col11", kannada: "ಕೇಸರಿ", english: "Saffron", pronunciation: "keesari" }

    ]
  },
  {
    title: "Greetings (ಹಲೋ)",
    description: "Essential greetings and basic phrases",
    words: [
        { id: "phr1", kannada: "ನಮಸ್ಕಾರ", english: "Hello", pronunciation: "namaskara" },
        { id: "phr3", kannada: "ಹೇಗಿದ್ದೀರಾ", english: "How are you?", pronunciation: "heggiddeera" },
        { id: "phr2", kannada: "ಧನ್ಯವಾದ", english: "Thank you", pronunciation: "dhanyavaada" },
    ]
},
{
    title: "Basic Communication (ಮೂಲಭೂತ ಸಂವಹನ)",
    description: "Phrases for everyday communication",
    words: [
        { id: "phr4", kannada: "ನನಗೆ ಸ್ವಲ್ಪ ಮಾತ್ರ ಕನ್ನಡ ಬರುತ್ತೆ", english: "I know very little Kannada", pronunciation: "nanagey swalpa maatra kannada baruthae" },
        { id: "phr5", kannada: "ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ", english: "A little bit", pronunciation: "swalpa swalpa" },
        { id: "phr6", kannada: "ಎಷ್ಟು", english: "How much?", pronunciation: "eshtu" },
        { id: "phr7", kannada: "ನನ್ನ ಹೆಸರು", english: "My name is", pronunciation: "nanna hesaru" },
        { id: "phr8", kannada: "ಊಟ ಆಯ್ತಾ?", english: "Had food?", pronunciation: "uuta ayta" }
    ]
},
{
    title: "Requests & Questions (ವಿನಂತಿಗಳು ಮತ್ತು ಪ್ರಶ್ನೆಗಳು)",
    description: "Common phrases for asking questions and making requests",
    words: [
        { id: "phr10", kannada: "ನನಗೆ ಸಹಾಯ ಬೇಕು", english: "I need help", pronunciation: "nanagee sahaaya beku" },
        { id: "phr17", kannada: "ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ", english: "Please wait", pronunciation: "dayavittu nireekshisi" },
        { id: "phr18", kannada: "ನೀವು ಬರುತ್ತೀರಾ?", english: "Will you come?", pronunciation: "neevu barutteeraa?" }
    ]
},
  {
    title: "Relationship Nouns (ಸಂಬಂಧದ ನಾಮಪದಗಳು)",
    description: "Essential terms for relationships",
    words: [
      
        { id: "rel1", kannada: "ತಂದೆ", english: "Father", pronunciation: "tande" },
        { id: "rel2", kannada: "ತಾಯಿ", english: "Mother", pronunciation: "taayee" },
        { id: "rel3", kannada: "ಅಣ್ಣ", english: "Elder Brother", pronunciation: "aNNa" },
        { id: "rel4", kannada: "ತಮ್ಮ", english: "Younger Brother", pronunciation: "tamma" },
        { id: "rel5", kannada: "ಅಕ್ಕ", english: "Elder Sister", pronunciation: "akka" },
        { id: "rel6", kannada: "ತಂಗಿ", english: "Younger Sister", pronunciation: "tangi" },
        { id: "rel7", kannada: "ಅಜ್ಜ", english: "Grandfather", pronunciation: "ajja" },
        { id: "rel8", kannada: "ಅಜ್ಜಿ", english: "Grandmother", pronunciation: "ajji" },
        { id: "rel9", kannada: "ದೊಡ್ಡಪ್ಪ", english: "Uncle", pronunciation: "doddappa" },
        { id: "rel10", kannada: "ದೊಡ್ಡಮ್ಮ", english: "Aunty", pronunciation: "doddamma" },
        { id: "rel11", kannada: "ಅತ್ತಿಗೆ", english: "Sister-in-law", pronunciation: "attige" },
        { id: "rel12", kannada: "ಮಗ", english: "Son", pronunciation: "maaga" },
        { id: "rel13", kannada: "ಮಗಳು", english: "Daughter", pronunciation: "magalu" },
        { id: "rel14", kannada: "ಗಂಡ", english: "Husband", pronunciation: "ganda" },
        { id: "rel15", kannada: "ಹೆಂಡತಿ", english: "Wife", pronunciation: "hendathi" },
        { id: "rel16", kannada: "ಸ್ನೇಹಿತೆ", english: "Female Friend", pronunciation: "sneeheetii" },
        { id: "rel17", kannada: "ಸ್ನೇಹಿತ", english: "Male Friend", pronunciation: "sneehita" },
      ]
      
    
  },
  {
    title: "Fruits & Vegetables (ಹಣ್ಣುಗಳು ಮತ್ತು ತರಕಾರಿಗಳು)",
    description: "Common fruits and vegetables in Kannada",
    words: [
    // Fruits
    { id: "fv1", kannada: "ಸಪೋಟಾ", english: "Sapota (Chikoo)", pronunciation: "sapoota" },
    { id: "fv2", kannada: "ಸೇಬು", english: "Apple", pronunciation: "siibu" },
    { id: "fv3", kannada: "ಬಾಳೆಹಣ್ಣು", english: "Banana", pronunciation: "baalehannu" },
    { id: "fv4", kannada: "ದ್ರಾಕ್ಷಿ", english: "Grapes", pronunciation: "draakshi" },
    { id: "fv5", kannada: "ಮಾವಿನ ಹಣ್ಣು", english: "Mango", pronunciation: "maaavina haNNu" },
    { id: "fv6", kannada: "ಕಿತ್ತಳೆ ಹಣ್ಣು", english: "Orange", pronunciation: "kittale haNNu" },
    { id: "fv7", kannada: "ಅನಾನಸು", english: "Pineapple", pronunciation: "anaanasu" },
    { id: "fv8", kannada: "ಪರಂಗಿ ಹಣ್ಣು", english: "Papaya", pronunciation: "parangi hannu" },
    { id: "fv9", kannada: "ನಿಂಬೆ ಹಣ್ಣು", english: "Lemon", pronunciation: "nimbe hannu" },
    { id: "fv10", kannada: "ದಾಳಿಂಬ್ರೆ", english: "Pomegranate", pronunciation: "daalimbrre" },

    // Vegetables
    { id: "fv11", kannada: "ಕೋಸು", english: "Cabbage", pronunciation: "koosu" },
    { id: "fv12", kannada: "ಆಲೂಗೆಡ್ಡೆ", english: "Potato", pronunciation: "aaloogeDDe" },
    { id: "fv13", kannada: "ಟೊಮಾಟೋ", english: "Tomato", pronunciation: "tomaatuu" },
    { id: "fv14", kannada: "ಸೌತೇಕಾಯಿ", english: "Cucumber", pronunciation: "soutekaayi" },
    { id: "fv15", kannada: "ಬೆಂಡೇಕಾಯಿ", english: "Ladyfinger (Okra)", pronunciation: "benDiikaayee" },
    { id: "fv16", kannada: "ಬದನೆಕಾಯಿ", english: "Brinjal (Eggplant)", pronunciation: "badanekaayi" },
    { id: "fv17", kannada: "ಗಜ್ಜರಿ", english: "Carrot", pronunciation: "gajjree" },
    { id: "fv18", kannada: "ಹುರಳಿಕಾಯಿ", english: "Beans", pronunciation: "hurulikaayi" }
]

      
    
  },
  
];
