export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  fact: string;
  category: string;
}

export const quizQuestions: QuizQuestion[] = [
  
  {
    id: 101,
    question: "Which Bengaluru landmark is home to the Karnataka State Legislature and is a symbol of the city’s political heritage?",
    options: ["Vidhana Soudha", "Bangalore Palace", "Lalbagh Botanical Garden", "Cubbon Park"],
    correctAnswer: 0,
    fact: "Vidhana Soudha is the seat of the Karnataka State Legislature and an architectural marvel built in the 1950s.",
    category: "Places and Their Significance",
  },
  
  {
    id: 102,
    question: "Which historic park in Bengaluru is known for its diverse collection of flora and the annual flower shows held in its Glass House?",
    options: ["Lalbagh Botanical Garden", "Cubbon Park", "Bannerghatta Biological Park", "Hesaraghatta Lake"],
    correctAnswer: 0,
    fact: "Lalbagh is a historic botanical garden in Bengaluru, renowned for its variety of plants and annual flower shows held in the Glass House.",
    category: "Places and Their Significance",
  },
  
  {
    id: 103,
    question: "Which grand Bengaluru palace, built in the 19th century, is a blend of Tudor, Scottish Gothic, and Indian styles?",
    options: ["Bangalore Palace", "Mysore Palace", "Tipu Sultan's Summer Palace", "Rashtrapati Bhavan"],
    correctAnswer: 0,
    fact: "Bangalore Palace, built in 1887, combines Tudor, Scottish Gothic, and Indian architectural styles.",
    category: "Places and Their Significance",
  },
 
  {
    id: 104,
    question: "Which Bengaluru lake is known for its role in birdwatching and its serene environment, attracting migratory birds during the winter months?",
    options: ["Ulsoor Lake", "Hesaraghatta Lake", "Sankey Tank", "Bellandur Lake"],
    correctAnswer: 1,
    fact: "Hesaraghatta Lake is a peaceful spot for birdwatching, especially in winter when migratory birds visit.",
    category: "Places and Their Significance",
  },

  {
    id: 105,
    question: "Which Bengaluru museum, dedicated to science and technology, is named after a prominent engineer and offers interactive exhibits for visitors?",
    options: [
      "Visvesvaraya Industrial and Technological Museum",
      "National Gallery of Modern Art",
      "Indian Music Experience Museum",
      "Karnataka Chitrakala Parishath",
    ],
    correctAnswer: 0,
    fact: "The Visvesvaraya Industrial and Technological Museum is a hub for science and technology enthusiasts with interactive exhibits.",
    category: "Places and Their Significance",
  },
 
  {
    id: 106,
    question: "Which Bengaluru park, located in the heart of the city, serves as a popular recreational space and has historical significance dating back to the British era?",
    options: ["Cubbon Park", "Lalbagh Botanical Garden", "Bannerghatta Biological Park", "Malleswaram Park"],
    correctAnswer: 0,
    fact: "Cubbon Park, established in 1870, is a major green space and recreational hub in Bengaluru.",
    category: "Places and Their Significance",
  },
  
  {
    id: 107,
    question: "Which Bengaluru street is renowned for its bustling shopping experience, with historical significance and iconic markets?",
    options: ["M.G. Road", "Commercial Street", "Brigade Road", "Church Street"],
    correctAnswer: 1,
    fact: "Commercial Street is one of Bengaluru’s busiest shopping streets, known for its wide range of items and historical significance.",
    category: "Places and Their Significance",
  },
  
  {
    id: 108,
    question: "Which Bengaluru institution, known for its architectural beauty, houses the state's legislative assembly and is a symbol of Karnataka’s governance?",
    options: ["Vidhana Soudha", "Bangalore Palace", "Tipu Sultan’s Summer Palace", "R.K. Narayan Memorial Library"],
    correctAnswer: 0,
    fact: "Vidhana Soudha, built in the 1950s, is an iconic symbol of Karnataka's legislative body.",
    category: "Places and Their Significance",
  },
 
  {
    id: 109,
    question: "Which Bengaluru area is known for its tech industry and is often referred to as India's Silicon Valley?",
    options: ["Whitefield", "Koramangala", "Electronic City", "HSR Layout"],
    correctAnswer: 2,
    fact: "Electronic City is a major tech hub in Bengaluru and is often referred to as India's Silicon Valley.",
    category: "Places and Their Significance",
  },

  {
    id: 110,
    question: "Which Bengaluru lake, though a popular spot for boating and recreation, is also a site of ecological concern due to pollution and urban development?",
    options: ["Bellandur Lake", "Ulsoor Lake", "Sankey Tank", "Hesaraghatta Lake"],
    correctAnswer: 0,
    fact: "Bellandur Lake, once a beautiful spot for recreation, is now infamous for its pollution and urban challenges.",
    category: "Places and Their Significance",
  },
  {
    id: 111,
    question: "Which famous Bengaluru street, named after a British general, is known for its iconic colonial-era buildings and historical charm?",
    options: ["M.G. Road", "Brigade Road", "Church Street", "Cunningham Road"],
    correctAnswer: 0,
    fact: "M.G. Road is one of Bengaluru’s most famous streets, known for its colonial-era buildings and historical significance.",
    category: "Places and Their Significance",
  },
  {
    id: 112,
    question: "Which iconic Bengaluru garden, laid out in the 19th century, is famous for its glasshouse that hosts a biannual flower show?",
    options: ["Lalbagh Botanical Garden", "Cubbon Park", "Bannerghatta Biological Park", "Hesaraghatta Lake"],
    correctAnswer: 0,
    fact: "Lalbagh Botanical Garden is known for its lush greenery and the Glass House, where the biannual flower show is held.",
    category: "Places and Their Significance",
  },
  {
    id: 113,
    question: "Which Bengaluru landmark is a significant historical site related to Tipu Sultan and his resistance against British colonial rule?",
    options: ["Tipu Sultan's Summer Palace", "Bangalore Palace", "Vidhana Soudha", "Hesaraghatta Lake"],
    correctAnswer: 0,
    fact: "Tipu Sultan’s Summer Palace is a historical site reflecting the grandeur of the ruler and his defiance against British colonial forces.",
    category: "Places and Their Significance",
  },
  {
    id: 114,
    question: "Which famous landmark in Bengaluru is known for its importance as a center of commerce and culture, especially the high-end shopping and entertainment options it offers?",
    options: ["UB City Mall", "M.G. Road", "Brigade Road", "Indiranagar"],
    correctAnswer: 0,
    fact: "UB City Mall is a luxury shopping center in Bengaluru, offering a mix of high-end brands and entertainment.",
    category: "Places and Their Significance",
  },
  {
    id: 115,
    question: "Which historical monument in Bengaluru was built in the 18th century and serves as a reminder of the city’s colonial past, often visited by tourists and history enthusiasts?",
    options: ["Bangalore Fort", "Tipu Sultan’s Summer Palace", "Vidhana Soudha", "Lalbagh Botanical Garden"],
    correctAnswer: 0,
    fact: "Bangalore Fort, originally built by Kempegowda in the 16th century and later modified by the British, highlights Bengaluru’s colonial past.",
    category: "Places and Their Significance",
  },
  {
    id: 201,
    question: "Which street food in Bengaluru is known for its crispy, golden exterior and spicy stuffing of mashed potatoes, often served with chutney?",
    options: ["Vada Pav", "Masala Dosa", "Pani Puri", "Samosa"],
    correctAnswer: 3,
    fact: "Samosa, a beloved vegetarian street food in Bengaluru, is deep-fried and filled with a spicy mashed potato filling. It is typically served with chutney.",
    category: "Food Authenticity of the City",
  },
  {
    id: 202,
    question: "Which traditional Bengaluru sweet uses ghee and sugar, and is often served during festivals and special occasions?",
    options: ["Mysore Pak", "Chiroti", "Rava Ladoo", "Obbattu"],
    correctAnswer: 0,
    fact: "Mysore Pak is a rich, ghee-based sweet made with chickpea flour, sugar, and ghee, originating from Mysore but beloved in Bengaluru.",
    category: "Food Authenticity of the City",
  },
  
  {
    id: 203,
    question: "Which popular vegetarian breakfast dish in Bengaluru is made from fermented rice and black lentils, served with chutney and sambar?",
    options: ["Dosa", "Upma", "Pesarattu", "Idli"],
    correctAnswer: 3,
    fact: "Idli is a steamed rice cake made from fermented rice and urad dal (black lentils), served with chutney and sambar. It’s a traditional breakfast dish in Bengaluru.",
    category: "Food Authenticity of the City"
},
{
    id: 204,
    question: "Which Bengaluru-based dish is made of rice, lentils, and vegetables, and is served with a tangy tamarind sauce?",
    options: ["Bisi Bele Bath", "Pulao", "Pesarattu", "Pongal"],
    correctAnswer: 0,
    fact: "Bisi Bele Bath is a spicy, tangy rice dish made with lentils, vegetables, and tamarind, served hot with papad or chips.",
    category: "Food Authenticity of the City"
},
{
    id: 205,
    question: "Which iconic Bengaluru snack is made from ground rice and lentils, fried until crispy, and typically served with chutney?",
    options: ["Medu Vada", "Pakoda", "Chakkli", "Bhaji"],
    correctAnswer: 0,
    fact: "Medu Vada is a savory, doughnut-shaped snack made from ground rice and lentils, deep-fried and served with coconut chutney or sambar.",
    category: "Food Authenticity of the City"
},
{
    id: 206,
    question: "Which Bengaluru-based vegetarian food item is often served on a banana leaf and includes rice, vegetables, and a variety of chutneys?",
    options: ["South Indian Thali", "Biryani", "Pesarattu", "Dosa"],
    correctAnswer: 0,
    fact: "A South Indian Thali served on a banana leaf typically includes rice, sambar, rasam, vegetables, curd, and a variety of chutneys, and is commonly enjoyed during festivals.",
    category: "Food Authenticity of the City"
},
{
    id: 207,
    question: "Which vegetarian drink is an essential part of Bengaluru's food culture, especially during hot weather, often served as a digestive aid?",
    options: ["Buttermilk", "Lassi", "Fresh Lime Soda", "Masala Chai"],
    correctAnswer: 0,
    fact: "Buttermilk is a yogurt-based drink, often flavored with spices like cumin, coriander, and curry leaves, providing a cooling effect during hot weather in Bengaluru.",
    category: "Food Authenticity of the City"
},
{
    id: 208,
    question: "Which is the best-known vegetarian snack in Bengaluru made with rice, green chilies, and a tangy tamarind flavor, served as a quick snack in local eateries?",
    options: ["Puliyodarai", "Bisi Bele Bath", "Dosa", "Idli"],
    correctAnswer: 0,
    fact: "Puliyodarai is a tangy tamarind rice made with rice, tamarind paste, peanuts, and spices. It’s often served as a snack or light meal in Bengaluru.",
    category: "Food Authenticity of the City"
},
{
    id: 209,
    question: "Which Bengaluru-based vegetarian dish, popular during festivals, is made of a rice flour batter and filled with sweet jaggery and coconut filling?",
    options: ["Obbattu", "Rava Ladoo", "Chiroti", "Kesari"],
    correctAnswer: 0,
    fact: "Obbattu is a traditional sweet flatbread made of rice flour and filled with jaggery and coconut, commonly served during festivals like Ugadi.",
    category: "Food Authenticity of the City"
},
{
    id: 210,
    question: "Which dish from Bengaluru is a unique combination of rice, dal, vegetables, and jaggery, served on festive occasions to balance the flavors of sweet, sour, and savory?",
    options: ["Pongal", "Bisi Bele Bath", "Rava Kesari", "Chitranna"],
    correctAnswer: 1,
    fact: "Bisi Bele Bath combines rice, lentils, vegetables, and jaggery with tamarind, making it a perfect balance of savory, sweet, and tangy flavors.",
    category: "Food Authenticity of the City"
},
{
    id: 211,
    question: "Which sweet treat from Bengaluru is made of rice, coconut, jaggery, and is wrapped in banana leaves, often enjoyed during festive seasons?",
    options: ["Kudu", "Kadubu", "Modak", "Obbattu"],
    correctAnswer: 1,
    fact: "Kadubu is made from rice flour, stuffed with jaggery and coconut, and wrapped in a banana leaf. It is commonly enjoyed during festivals like Ganesha Chaturthi.",
    category: "Food Authenticity of the City"
},

{
  id: 212,
  question: "Which vegetarian dish from Bengaluru is made from rice, vegetables, and spices, and is usually served with coconut chutney and sambar?",
  options: ["Bisi Bele Bath", "Pongal", "Pesarattu", "Chitranna"],
  correctAnswer: 3,
  fact: "Chitranna is a popular rice dish made with lemon, spices, and peanuts, served with coconut chutney and sambar.",
  category: "Food Authenticity of the City"
},
{
  id: 213,
  question: "Which street food in Bengaluru is a popular breakfast item, made from a thin rice flour batter cooked on a griddle and typically served with a spiced potato filling?",
  options: ["Rava Dosa", "Masala Dosa", "Neer Dosa", "Akki Rotti"],
  correctAnswer: 1,
  fact: "Masala Dosa is a famous breakfast dish consisting of a crispy dosa filled with a spiced mashed potato filling. It is a staple in Bengaluru and served with chutney and sambar.",
  category: "Food Authenticity of the City"
},
{
  id: 214,
  question: "Which of the following is a traditional dessert of Bengaluru made from lentils, coconut, and jaggery, typically served during festivals?",
  options: ["Rava Kesari", "Holige", "Avalakki", "Puran Poli"],
  correctAnswer: 1,
  fact: "Holige is a sweet flatbread made with a filling of coconut, jaggery, and lentils. It is a traditional dessert of Bengaluru and is commonly prepared during festivals like Ugadi.",
  category: "Food Authenticity of the City"
},
{
  id: 215,
  question: "Which traditional beverage from Bengaluru, commonly consumed during festivals, is made with yogurt and flavored with mint, curry leaves, and spices?",
  options: ["Buttermilk", "Lassi", "Mango Lassi", "Coconut Water"],
  correctAnswer: 0,
  fact: "Buttermilk, or 'Majjige,' is a refreshing yogurt-based drink commonly consumed in Bengaluru, especially during hot days or festivals.",
  category: "Food Authenticity of the City"
},
{
  id: 301,
  question: "What is the traditional Kannada festival celebrated exclusively to honor bulls and cattle?",
  options: ["Kambala", "Kadalekai Parishe", "Karaga", "Mattu Pongal"],
  correctAnswer: 3,
  fact: "Mattu Pongal honors cattle for their contribution to agriculture. Farmers decorate bulls and cows with garlands and paint.",
  category: "Culture, Traditions, and Festivities"
},
{
  id: 302,
  question: "Which festival is unique to Bengaluru and marks the beginning of the groundnut harvest?",
  options: ["Kambala", "Kadalekai Parishe", "Hampi Utsav", "Suggi Habba"],
  correctAnswer: 1,
  fact: "Kadalekai Parishe, held in the Bull Temple area, celebrates the first groundnut harvest and attracts traders and devotees.",
  category: "Culture, Traditions, and Festivities"
},
{
  id: 303,
  question: "Which traditional art form of Bengaluru is known for storytelling through dance and music?",
  options: ["Yakshagana", "Kathak", "Bharatanatyam", "Mohiniyattam"],
  correctAnswer: 0,
  fact: "Yakshagana is a traditional art form of Karnataka that combines dance, music, and dialogue to narrate epic stories.",
  category: "Culture, Traditions, and Festivities"
},
{
  id: 304,
  question: "What is the name of the traditional floral decoration often used during festivals in Bengaluru?",
  options: ["Kolam", "Rangoli", "Muggulu", "Mandala"],
  correctAnswer: 1,
  fact: "Rangoli is a traditional art form made using colored powders and flowers, commonly created during festivals in Bengaluru.",
  category: "Culture, Traditions, and Festivities"
},
{
  id: 305,
  question: "Which historical site in Bengaluru is known as the summer palace of Tipu Sultan?",
  options: ["Bangalore Palace", "Tipu Sultan's Summer Palace", "Lalbagh Palace", "Vidhana Soudha"],
  correctAnswer: 1,
  fact: "Tipu Sultan's Summer Palace is an iconic historical site built entirely out of teak wood and showcases Indo-Islamic architecture.",
  category: "Historical and Heritage Sites"
},

  {
    id: 306,
    question: "Which Bengaluru locality is known for its vibrant celebration of Ugadi with traditional rituals and community feasts?",
    options: ["Malleswaram", "Basavanagudi", "Whitefield", "Koramangala"],
    correctAnswer: 0,
    fact: "Malleswaram is one of Bengaluru’s oldest localities, where Ugadi is celebrated with temple rituals, traditional food, and community participation.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 307,
    question: "What is the traditional Kannada dessert often prepared during Bengaluru festivals?",
    options: ["Mysore Pak", "Obbattu (Holige)", "Chiroti", "Rava Ladoo"],
    correctAnswer: 1,
    fact: "Obbattu, a flatbread stuffed with jaggery and lentils, is a staple dessert during festivals like Ugadi and Deepavali in Bengaluru.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 308,
    question: "Which folk art form originating in Bengaluru includes humorous, satirical performances?",
    options: ["Yakshagana", "Gombe Aata", "Bayalata", "Kannada Rangabhoomi"],
    correctAnswer: 3,
    fact: "Kannada Rangabhoomi, or Kannada theater, flourished in Bengaluru, showcasing plays with humor, satire, and social commentary.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 309,
    question: "What makes Sankranthi unique in Bengaluru compared to other parts of Karnataka?",
    options: [
      "Flying kites in parks.",
      "Rangoli competitions across neighborhoods.",
      "Exchange of ellu-bella (sesame-jaggery).",
      "Cattle processions in urban areas."
    ],
    correctAnswer: 2,
    fact: "During Sankranthi, Bengaluru residents exchange ellu-bella as a token of goodwill and community spirit, unique to urban traditions.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 310,
    question: "Which Bengaluru temple hosts a festival where the deity is bathed in pure butter?",
    options: ["Dodda Ganesha Temple", "ISKCON Temple", "Gavi Gangadhareshwara Temple", "Banashankari Temple"],
    correctAnswer: 0,
    fact: "At the Dodda Ganesha Temple in Basavanagudi, the deity is anointed with butter during special rituals.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 311,
    question: "Which traditional music form, known for its spiritual and devotional focus, is often performed at the renowned temples in Bengaluru?",
    options: ["Carnatic music", "Hindustani classical music", "Folk music", "Sufi music"],
    correctAnswer: 0,
    fact: "Carnatic music is deeply rooted in the South Indian tradition and is predominantly performed in Bengaluru’s temples.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 312,
    question: "In which part of Bengaluru is the traditional festival of 'Bangalore Habba' celebrated, showcasing local arts, crafts, and culture?",
    options: ["Whitefield", "MG Road", "Indiranagar", "Cubbon Park"],
    correctAnswer: 3,
    fact: "The Bangalore Habba, an annual cultural festival, is celebrated in Cubbon Park, showcasing local arts, crafts, music, and dance.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 313,
    question: "What is the significance of the 'Hennu Kachhe' ceremony performed during marriages in Bengaluru?",
    options: [
      "Welcoming the groom’s family",
      "Symbolic union of families",
      "Blessings for the couple’s new life",
      "Auspicious beginning of wedding rituals"
    ],
    correctAnswer: 2,
    fact: "'Hennu Kachhe' is an important wedding ritual in Bengaluru where the bride and groom receive blessings for prosperity and happiness.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 314,
    question: "Which Bengaluru-based traditional craft, made from intricately woven materials, is renowned globally?",
    options: ["Mysore Silk", "Bangalore Rosewood Inlay", "Lambani Embroidery", "Bidriware"],
    correctAnswer: 1,
    fact: "Bangalore Rosewood Inlay is a traditional craft where wood is intricately carved and decorated with inlays, making it unique to Bengaluru.",
    category: "Culture, Traditions, and Festivities"
  },
  {
    id: 315,
    question: "Which iconic Bengaluru temple holds a grand procession during the annual 'Kote Venkataramana Temple Car Festival'?",
    options: ["Bull Temple", "Kote Venkataramana Temple", "Malleswaram Temple", "Dodda Basavana Gudi"],
    correctAnswer: 1,
    fact: "The Kote Venkataramana Temple holds the grand 'Car Festival' every year, attracting thousands of devotees.",
    category: "Culture, Traditions, and Festivities"
  },

{
  id: 401,
  question: "Which iconic structure in Bengaluru is the seat of the state legislature of Karnataka?",
  options: ["Vidhana Soudha", "Attara Kacheri", "High Court of Karnataka", "Bangalore Palace"],
  correctAnswer: 0,
  fact: "Vidhana Soudha is a magnificent building housing the state legislature of Karnataka, known for its Neo-Dravidian architecture.",
  category: "Historical and Heritage Sites"
},
{
  id: 402,
  question: "Which Bengaluru landmark is a botanical garden known for its glass house and annual flower shows?",
  options: ["Cubbon Park", "Lalbagh Botanical Garden", "Nandi Hills", "Ulsoor Lake"],
  correctAnswer: 1,
  fact: "Lalbagh Botanical Garden is a renowned garden in Bengaluru, famous for its glass house modeled after London's Crystal Palace.",
  category: "Historical and Heritage Sites"
},
{
  id: 403,
  question: "Which lake in Bengaluru is known for its serene beauty and boating activities?",
  options: ["Ulsoor Lake", "Bellandur Lake", "Hebbal Lake", "Madiwala Lake"],
  correctAnswer: 0,
  fact: "Ulsoor Lake is a popular destination for boating and leisure activities, offering picturesque views and tranquility.",
  category: "Historical and Heritage Sites"
},
{
  id: 404,
  question: "Which ancient temple in Bengaluru is dedicated to Lord Shiva and known for its unique monolithic bull statue?",
  options: ["Bull Temple", "Gavi Gangadhareshwara Temple", "Banashankari Temple", "ISKCON Temple"],
  correctAnswer: 0,
  fact: "The Bull Temple in Basavanagudi is famous for its massive Nandi (bull) statue carved out of a single granite rock.",
  category: "Historical and Heritage Sites"
},
{
  id: 405,
  question: "Which palace in Bengaluru is inspired by England's Windsor Castle and is a popular tourist attraction?",
  options: ["Bangalore Palace", "Tipu Sultan's Summer Palace", "Lalbagh Palace", "Mysore Palace"],
  correctAnswer: 0,
  fact: "Bangalore Palace is a stunning architectural masterpiece influenced by Tudor and Gothic styles, resembling Windsor Castle.",
  category: "Historical and Heritage Sites"
},
{
    id: 406,
    question: "What was the significance of the Begur village in Bengaluru's early history?",
    options: [
      "It was the first administrative capital.",
      "It served as a military outpost.",
      "It housed ancient inscriptions referencing Bengaluru.",
      "It was a religious pilgrimage center."
    ],
    correctAnswer: 2,
    fact: "Begur has inscriptions from the 9th century mentioning 'Benda Kaluru,' marking Bengaluru's earliest recorded name.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 407,
    question: "Why did Tipu Sultan rename Bengaluru to 'Nazrabad'?",
    options: [
      "To honor a Sufi saint.",
      "To reflect Islamic culture.",
      "To signify a city of victory.",
      "As a mark of rebellion against the British."
    ],
    correctAnswer: 2,
    fact: "Tipu Sultan renamed Bengaluru 'Nazrabad' to celebrate his victories against the British.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 408,
    question: "Which ancient Kannada poem references Bengaluru?",
    options: [
      "Kavirajamarga",
      "Pampa Bharata",
      "Vachana Sahitya",
      "Chandombudhi"
    ],
    correctAnswer: 0,
    fact: "The 9th-century text 'Kavirajamarga' praises the region surrounding Bengaluru as part of a cultural heartland.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 409,
    question: "Which legendary story is associated with the Nandi Hills near Bengaluru?",
    options: [
      "Birthplace of the Arkavathy River",
      "Tipu Sultan's hidden treasures",
      "Origin of Nandi, Lord Shiva’s vehicle",
      "Ancient Jain pilgrim site"
    ],
    correctAnswer: 0,
    fact: "Nandi Hills is known as the source of the Arkavathy River, which flows through parts of Karnataka.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 410,
    question: "What was the original purpose of Lalbagh when it was established by Hyder Ali?",
    options: [
      "A military camp",
      "A summer retreat for royalty",
      "A botanical garden",
      "A venue for social gatherings"
    ],
    correctAnswer: 2,
    fact: "Lalbagh was founded by Hyder Ali in 1760 as a botanical garden with rare and exotic plant species.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 411,
    question: "What historical connection does Cubbon Park have with British rule?",
    options: [
      "It was a military parade ground.",
      "It was named after a British commissioner.",
      "It served as the British Governor’s residence.",
      "It was used for colonial administrative meetings."
    ],
    correctAnswer: 1,
    fact: "Cubbon Park was named after Sir Mark Cubbon, a British Commissioner who played a key role in Bengaluru's development.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 412,
    question: "What historical event took place at Bangalore Palace in 1887?",
    options: [
      "The signing of a treaty with the British.",
      "The coronation of a Wodeyar king.",
      "The hosting of the first Bangalore Flower Show.",
      "The completion of the palace’s construction."
    ],
    correctAnswer: 3,
    fact: "The Bangalore Palace, inspired by Windsor Castle, was completed in 1887.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 413,
    question: "Which prominent ancient ruler is believed to have laid the foundation for Bengaluru's agrarian economy?",
    options: [
      "Kempe Gowda I",
      "Hyder Ali",
      "Tipu Sultan",
      "Chikkadevaraja Wodeyar"
    ],
    correctAnswer: 3,
    fact: "Chikkadevaraja Wodeyar introduced reforms in irrigation and agriculture, bolstering Bengaluru’s economy.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 414,
    question: "Which ruler introduced Persian influences into Bengaluru’s architecture?",
    options: [
      "Hyder Ali",
      "Tipu Sultan",
      "Kempe Gowda II",
      "The British East India Company"
    ],
    correctAnswer: 0,
    fact: "Hyder Ali integrated Persian influences, as seen in Lalbagh’s architectural designs and water features.",
    category: "Origin, History, Civilization, and Legacy"
  },
  {
    id: 415,
    question: "Why is the Kempe Gowda Museum on MG Road significant to Bengaluru?",
    options: [
      "It was the first museum in the city.",
      "It showcases artifacts from Bengaluru’s founding.",
      "It commemorates Kempe Gowda’s contributions with rare exhibits.",
      "It is built on the site of Kempe Gowda’s original fort."
    ],
    correctAnswer: 2,
    fact: "The Kempe Gowda Museum showcases his contributions, including models of watchtowers and the city’s original layout.",
    category: "Origin, History, Civilization, and Legacy"
  }
];
