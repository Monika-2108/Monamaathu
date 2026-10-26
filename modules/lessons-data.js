export const lessonsPerModule = 30;

const moduleInfo = [
  { id: "conversations", title: "Everyday Conversations" },
  { id: "shopping", title: "Shopping & Groceries" },
  { id: "travel", title: "Travel & Transport" },
  { id: "food", title: "Food & Restaurants" },
  { id: "culture", title: "Festivals & Culture" },
  { id: "family", title: "Family & Relationships" },
  { id: "education", title: "Education & College" },
  { id: "work", title: "Work & Careers" },
  { id: "health", title: "Health & Hospital" },
  { id: "emergency", title: "Emergencies & Safety" },
  { id: "home", title: "Home & Daily Life" },
  { id: "time", title: "Time, Dates & Weather" },
  { id: "directions", title: "Places & Directions" },
  { id: "social", title: "Friends & Social Life" },
  { id: "advanced", title: "Karnataka & Advanced Kannada" }
];

const conversations = [
  {
    title: "Greetings in Kannada",
    phrases: [
      ["ನಮಸ್ಕಾರ", "Namaskāra", "Hello / Greetings"],
      ["ಹೇಗಿದ್ದೀರಾ?", "Hēgiddīrā?", "How are you? (polite)"],
      ["ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "Nānu chennāgiddēne", "I am fine"],
      ["ಧನ್ಯವಾದಗಳು", "Dhanyavādagaḷu", "Thank you"],
      ["ಮತ್ತೆ ಸಿಗೋಣ", "Matte sigōṇa", "See you again"]
    ],
    questions: [
      ['What does "ನಮಸ್ಕಾರ" mean?', ["Goodbye", "Hello", "Sorry", "Please"], "Hello"],
      ['How do you say "Thank you"?', ["ನಮಸ್ಕಾರ", "ಹೌದು", "ಧನ್ಯವಾದಗಳು", "ಬೇಡ"], "ಧನ್ಯವಾದಗಳು"],
      ['What does "ಹೇಗಿದ್ದೀರಾ?" mean?', ["Where are you?", "How are you?", "What is this?", "See you"], "How are you?"],
      ['Which phrase means "I am fine"?', ["ಮತ್ತೆ ಸಿಗೋಣ", "ಧನ್ಯವಾದಗಳು", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ನಮಸ್ಕಾರ"], "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ"],
      ['Which phrase means "See you again"?', ["ಮತ್ತೆ ಸಿಗೋಣ", "ಹೌದು", "ನಮಸ್ಕಾರ", "ಧನ್ಯವಾದಗಳು"], "ಮತ್ತೆ ಸಿಗೋಣ"]
    ]
  },
  {
    title: "Introducing Yourself",
    phrases: [
      ["ನನ್ನ ಹೆಸರು ಮೋನಿಕಾ", "Nanna hesaru Mōnikā", "My name is Monika"],
      ["ನಿಮ್ಮ ಹೆಸರು ಏನು?", "Nimma hesaru ēnu?", "What is your name?"],
      ["ನಾನು ಬೆಂಗಳೂರಿನಿಂದ ಬಂದಿದ್ದೇನೆ", "Nānu Beṅgaḷūrininda bandiddēne", "I am from Bengaluru"],
      ["ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು", "Nimmannu bhēṭiyāgi santōṣavāyitu", "Nice to meet you"],
      ["ನಾನು ವಿದ್ಯಾರ್ಥಿನಿ", "Nānu vidyārthini", "I am a female student"]
    ],
    questions: [
      ['What does "ನನ್ನ ಹೆಸರು ಮೋನಿಕಾ" mean?', ["What is your name?", "My name is Monika", "I am fine", "Nice to meet you"], "My name is Monika"],
      ['How do you ask "What is your name?" politely?', ["ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ಧನ್ಯವಾದಗಳು", "ಮತ್ತೆ ಸಿಗೋಣ"], "ನಿಮ್ಮ ಹೆಸರು ಏನು?"],
      ['What does "ನಾನು ವಿದ್ಯಾರ್ಥಿನಿ" mean?', ["I am a teacher", "I am a doctor", "I am a female student", "I am from Bengaluru"], "I am a female student"],
      ['Which phrase means "Nice to meet you"?', ["ನಮಸ್ಕಾರ", "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ಬೇಡ"], "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು"],
      ['What does "ನಾನು ಬೆಂಗಳೂರಿನಿಂದ ಬಂದಿದ್ದೇನೆ" mean?', ["I live in a house", "I am going to college", "I am from Bengaluru", "What is your name?"], "I am from Bengaluru"]
    ]
  },
  {
    title: "Asking Someone's Name",
    phrases: [
      ["ನಿಮ್ಮ ಹೆಸರೇನು?", "Nimma hesarēnu?", "What is your name?"],
      ["ನನ್ನ ಹೆಸರು ರವಿ", "Nanna hesaru Ravi", "My name is Ravi"],
      ["ನಿಮ್ಮನ್ನು ಏನೆಂದು ಕರೆಯಬೇಕು?", "Nimmannu ēnendu kareyabēku?", "What should I call you?"],
      ["ನಿಮ್ಮ ಪರಿಚಯ ಮಾಡಿಕೊಳ್ಳಬಹುದೇ?", "Nimma parichaya māḍikoḷḷabahudē?", "May I introduce myself?"],
      ["ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಖುಷಿಯಾಯಿತು", "Nimmannu bhēṭiyāgi khuṣiyāyitu", "Pleased to meet you"]
    ],
    questions: [
      ['What does "ನಿಮ್ಮ ಹೆಸರೇನು?" mean?', ["Where do you live?", "What is your name?", "How old are you?", "Where are you going?"], "What is your name?"],
      ['Which phrase means "My name is Ravi"?', ["ನನ್ನ ಹೆಸರು ರವಿ", "ನಿಮ್ಮ ಹೆಸರೇನು?", "ನಮಸ್ಕಾರ", "ಬೇಡ"], "ನನ್ನ ಹೆಸರು ರವಿ"],
      ['Which word means "name" in these phrases?', ["ಮನೆ", "ಹೆಸರು", "ನೀರು", "ಊರು"], "ಹೆಸರು"],
      ['What does "ನಮಸ್ಕಾರ" mean?', ["Thank you", "Hello", "Good night", "Sorry"], "Hello"],
      ['Which phrase expresses pleasure at meeting someone?', ["ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಖುಷಿಯಾಯಿತು", "ನಿಮ್ಮ ಹೆಸರೇನು?", "ನೀರು ಕೊಡಿ", "ಎಲ್ಲಿ ಹೋಗುತ್ತೀರಿ?"], "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಖುಷಿಯಾಯಿತು"]
    ]
  },
  {
    title: "How Are You?",
    phrases: [
      ["ನೀವು ಹೇಗಿದ್ದೀರಿ?", "Nīvu hēgiddīri?", "How are you?"],
      ["ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "Nānu chennāgiddēne", "I am fine"],
      ["ನನಗೆ ಸ್ವಲ್ಪ ಆಯಾಸವಾಗಿದೆ", "Nanage svalpa āyāsavāgide", "I am a little tired"],
      ["ಎಲ್ಲವೂ ಚೆನ್ನಾಗಿದೆ", "Ellavū chennāgide", "Everything is fine"],
      ["ನಿಮ್ಮ ದಿನ ಹೇಗಿತ್ತು?", "Nimma dina hēgittu?", "How was your day?"]
    ],
    questions: [
      ['What does "ನೀವು ಹೇಗಿದ್ದೀರಿ?" mean?', ["How are you?", "What is your name?", "Where are you?", "Who are you?"], "How are you?"],
      ['How do you say "I am fine"?', ["ನನಗೆ ಹಸಿವಾಗಿದೆ", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ನನಗೆ ಗೊತ್ತಿಲ್ಲ", "ನಮಸ್ಕಾರ"], "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ"],
      ['What does "ಆಯಾಸ" relate to?', ["Happiness", "Tiredness", "Food", "Travel"], "Tiredness"],
      ['What does "ಎಲ್ಲವೂ ಚೆನ್ನಾಗಿದೆ" mean?', ["Nothing is ready", "Everything is fine", "I am hungry", "See you later"], "Everything is fine"],
      ['Which phrase asks about someone\'s day?', ["ನಿಮ್ಮ ದಿನ ಹೇಗಿತ್ತು?", "ನೀರು ಕೊಡಿ", "ನನ್ನ ಹೆಸರು ರವಿ", "ಬೇಗ ಬನ್ನಿ"], "ನಿಮ್ಮ ದಿನ ಹೇಗಿತ್ತು?"]
    ]
  },
  {
    title: "Polite Words",
    phrases: [
      ["ದಯವಿಟ್ಟು", "Dayaviṭṭu", "Please"],
      ["ಧನ್ಯವಾದಗಳು", "Dhanyavādagaḷu", "Thank you"],
      ["ಕ್ಷಮಿಸಿ", "Kṣamisi", "Excuse me / Sorry"],
      ["ಪರವಾಗಿಲ್ಲ", "Paravāgilla", "It's okay / No problem"],
      ["ಸ್ವಾಗತ", "Svāgata", "Welcome"]
    ],
    questions: [
      ['What does "ದಯವಿಟ್ಟು" mean?', ["Please", "Goodbye", "Never", "Tomorrow"], "Please"],
      ['Which phrase means "Thank you"?', ["ಕ್ಷಮಿಸಿ", "ಸ್ವಾಗತ", "ಧನ್ಯವಾದಗಳು", "ಪರವಾಗಿಲ್ಲ"], "ಧನ್ಯವಾದಗಳು"],
      ['What does "ಕ್ಷಮಿಸಿ" mean?', ["Welcome", "Excuse me / Sorry", "Good morning", "Come here"], "Excuse me / Sorry"],
      ['What does "ಪರವಾಗಿಲ್ಲ" mean?', ["It's okay", "I am lost", "I am hungry", "Where is it?"], "It's okay"],
      ['Which word means "Welcome"?', ["ಬೇಡ", "ಸ್ವಾಗತ", "ನೀರು", "ಹೌದು"], "ಸ್ವಾಗತ"]
    ]
  },
  {
    title: "Meeting Someone New",
    phrases: [
      ["ನೀವು ಎಲ್ಲಿಂದ ಬಂದಿದ್ದೀರಿ?", "Nīvu ellinda bandiddīri?", "Where are you from?"],
      ["ನಾನು ಮೈಸೂರಿನಿಂದ ಬಂದಿದ್ದೇನೆ", "Nānu Maisūrininda bandiddēne", "I am from Mysuru"],
      ["ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?", "Nīvu ēnu māḍuttīri?", "What do you do?"],
      ["ನಾನು ವಿದ್ಯಾರ್ಥಿ", "Nānu vidyārthi", "I am a male student"],
      ["ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ", "Matte bhēṭiyāgōṇa", "Let's meet again"]
    ],
    questions: [
      ['What does "ನೀವು ಎಲ್ಲಿಂದ ಬಂದಿದ್ದೀರಿ?" mean?', ["Where are you from?", "What is your job?", "How are you?", "Where is the shop?"], "Where are you from?"],
      ['Which phrase means "I am from Mysuru"?', ["ನಾನು ವಿದ್ಯಾರ್ಥಿ", "ನಾನು ಮೈಸೂರಿನಿಂದ ಬಂದಿದ್ದೇನೆ", "ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ", "ಸ್ವಾಗತ"], "ನಾನು ಮೈಸೂರಿನಿಂದ ಬಂದಿದ್ದೇನೆ"],
      ['What does "ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?" ask?', ["What do you do?", "Where do you sleep?", "What do you eat?", "When do you leave?"], "What do you do?"],
      ['What does "ನಾನು ವಿದ್ಯಾರ್ಥಿ" mean?', ["I am a doctor", "I am a male student", "I am a teacher", "I am a driver"], "I am a male student"],
      ['Which phrase means "Let\'s meet again"?', ["ಕ್ಷಮಿಸಿ", "ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ", "ನಮಸ್ಕಾರ", "ದಯವಿಟ್ಟು"], "ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ"]
    ]
  },
  {
    title: "Asking for Help",
    phrases: [
      ["ನನಗೆ ಸಹಾಯ ಬೇಕು", "Nanage sahāya bēku", "I need help"],
      ["ದಯವಿಟ್ಟು ಸಹಾಯ ಮಾಡಿ", "Dayaviṭṭu sahāya māḍi", "Please help me"],
      ["ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ", "Nanage arthavāgalilla", "I did not understand"],
      ["ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ", "Mattomme hēḷi", "Please say it again"],
      ["ಧನ್ಯವಾದಗಳು, ನೀವು ಸಹಾಯ ಮಾಡಿದಿರಿ", "Dhanyavādagaḷu, nīvu sahāya māḍidiri", "Thank you for helping"]
    ],
    questions: [
      ['What does "ನನಗೆ ಸಹಾಯ ಬೇಕು" mean?', ["I need help", "I need food", "I need a ticket", "I am fine"], "I need help"],
      ['Which phrase politely asks someone to help?', ["ಮತ್ತೆ ಸಿಗೋಣ", "ದಯವಿಟ್ಟು ಸಹಾಯ ಮಾಡಿ", "ನನ್ನ ಹೆಸರು ರವಿ", "ಬೇಡ"], "ದಯವಿಟ್ಟು ಸಹಾಯ ಮಾಡಿ"],
      ['What does "ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ" mean?', ["I understood", "I did not understand", "I am leaving", "I am hungry"], "I did not understand"],
      ['How do you ask someone to repeat something?', ["ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ", "ನಮಸ್ಕಾರ", "ಸ್ವಾಗತ", "ಹೌದು"], "ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ"],
      ['What does "ಸಹಾಯ" mean?', ["Help", "House", "Water", "Time"], "Help"]
    ]
  },
  {
    title: "Making Requests",
    phrases: [
      ["ನನಗೆ ನೀರು ಬೇಕು", "Nanage nīru bēku", "I need water"],
      ["ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ", "Dayaviṭṭu illi kuḷitukoḷḷi", "Please sit here"],
      ["ಬಾಗಿಲು ತೆರೆಯಿರಿ", "Bāgilu tereyiri", "Please open the door"],
      ["ಸ್ವಲ್ಪ ಕಾಯಿರಿ", "Svalpa kāyiri", "Please wait a little"],
      ["ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?", "Nanage sahāya māḍabahudē?", "Could you help me?"]
    ],
    questions: [
      ['What does "ನನಗೆ ನೀರು ಬೇಕು" mean?', ["I need water", "I need a book", "I am thirsty tomorrow", "I am going home"], "I need water"],
      ['Which phrase asks someone to sit here?', ["ಬಾಗಿಲು ತೆರೆಯಿರಿ", "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ", "ಸ್ವಲ್ಪ ಕಾಯಿರಿ", "ನಮಸ್ಕಾರ"], "ದಯವಿಟ್ಟು ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ"],
      ['What does "ಬಾಗಿಲು ತೆರೆಯಿರಿ" mean?', ["Close the window", "Open the door", "Bring food", "Wait here"], "Open the door"],
      ['What does "ಸ್ವಲ್ಪ ಕಾಯಿರಿ" mean?', ["Please wait a little", "Please leave now", "Please speak loudly", "Please sit down"], "Please wait a little"],
      ['Which phrase asks "Could you help me?"', ["ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?", "ನನಗೆ ನೀರು ಬೇಕು", "ಮತ್ತೆ ಸಿಗೋಣ", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ"], "ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?"]
    ]
  },
  {
    title: "Saying Yes and No",
    phrases: [
      ["ಹೌದು", "Haudu", "Yes"],
      ["ಇಲ್ಲ", "Illa", "No / There isn't"],
      ["ಸರಿ", "Sari", "Okay / All right"],
      ["ಖಂಡಿತ", "Khaṇḍita", "Certainly"],
      ["ನನಗೆ ಗೊತ್ತಿಲ್ಲ", "Nanage gottilla", "I don't know"]
    ],
    questions: [
      ['What does "ಹೌದು" mean?', ["No", "Yes", "Maybe", "Never"], "Yes"],
      ['What does "ಇಲ್ಲ" usually mean?', ["Yes", "No / There isn't", "Welcome", "Thank you"], "No / There isn't"],
      ['Which word means "Okay"?', ["ಸರಿ", "ಬೇಡ", "ನೀರು", "ಮನೆ"], "ಸರಿ"],
      ['What does "ಖಂಡಿತ" mean?', ["Certainly", "Yesterday", "Slowly", "Nothing"], "Certainly"],
      ['How do you say "I don\'t know"?', ["ನನಗೆ ಗೊತ್ತಿಲ್ಲ", "ನನಗೆ ನೀರು ಬೇಕು", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ಧನ್ಯವಾದಗಳು"], "ನನಗೆ ಗೊತ್ತಿಲ್ಲ"]
    ]
  },
  {
    title: "Understanding Simple Replies",
    phrases: [
      ["ಸರಿ, ಧನ್ಯವಾದಗಳು", "Sari, dhanyavādagaḷu", "Okay, thank you"],
      ["ನನಗೆ ಗೊತ್ತಾಯಿತು", "Nanage gottāyitu", "I understood"],
      ["ಇನ್ನೂ ಸ್ವಲ್ಪ ಸಮಯ ಬೇಕು", "Innū svalpa samaya bēku", "I need a little more time"],
      ["ನಾನು ಒಪ್ಪುತ್ತೇನೆ", "Nānu opputtēne", "I agree"],
      ["ನನಗೆ ಖಚಿತವಿಲ್ಲ", "Nanage khachitavilla", "I am not sure"]
    ],
    questions: [
      ['What does "ನನಗೆ ಗೊತ್ತಾಯಿತು" mean?', ["I understood", "I forgot", "I am tired", "I disagree"], "I understood"],
      ['Which phrase means "I agree"?', ["ನಾನು ಒಪ್ಪುತ್ತೇನೆ", "ನನಗೆ ಖಚಿತವಿಲ್ಲ", "ನನಗೆ ಗೊತ್ತಿಲ್ಲ", "ಬೇಡ"], "ನಾನು ಒಪ್ಪುತ್ತೇನೆ"],
      ['What does "ನನಗೆ ಖಚಿತವಿಲ್ಲ" mean?', ["I am not sure", "I am certain", "I am hungry", "I am late"], "I am not sure"],
      ['Which phrase asks for more time?', ["ಇನ್ನೂ ಸ್ವಲ್ಪ ಸಮಯ ಬೇಕು", "ಸರಿ, ಧನ್ಯವಾದಗಳು", "ನಮಸ್ಕಾರ", "ಸ್ವಾಗತ"], "ಇನ್ನೂ ಸ್ವಲ್ಪ ಸಮಯ ಬೇಕು"],
      ['What does "ಸರಿ" mean?', ["Okay", "Water", "Name", "Tomorrow"], "Okay"]
    ]
  },
  {
    title: "Talking About Your Family",
    phrases: [
      ["ಇದು ನನ್ನ ಕುಟುಂಬ", "Idu nanna kuṭumba", "This is my family"],
      ["ನನಗೆ ಒಬ್ಬ ಅಣ್ಣ ಇದ್ದಾನೆ", "Nanage obba aṇṇa iddāne", "I have an older brother"],
      ["ನನಗೆ ಒಬ್ಬ ತಂಗಿ ಇದ್ದಾಳೆ", "Nanage obba taṅgi iddāḷe", "I have a younger sister"],
      ["ನನ್ನ ತಾಯಿ ಶಿಕ್ಷಕಿ", "Nanna tāyi śikṣaki", "My mother is a teacher"],
      ["ನನ್ನ ತಂದೆ ಮನೆಯಲ್ಲಿ ಇದ್ದಾರೆ", "Nanna tande maneyalli iddāre", "My father is at home"]
    ],
    questions: [
      ['What does "ಕುಟುಂಬ" mean?', ["School", "Family", "Market", "Hospital"], "Family"],
      ['What does "ನನ್ನ ತಾಯಿ ಶಿಕ್ಷಕಿ" mean?', ["My mother is a teacher", "My father is a doctor", "My sister is home", "My brother is a student"], "My mother is a teacher"],
      ['Which word means "mother"?', ["ತಂದೆ", "ತಾಯಿ", "ಅಣ್ಣ", "ತಂಗಿ"], "ತಾಯಿ"],
      ['What does "ನನ್ನ ತಂದೆ ಮನೆಯಲ್ಲಿ ಇದ್ದಾರೆ" mean?', ["My father is at home", "My father is at school", "My mother is at home", "My brother is outside"], "My father is at home"],
      ['What does "ಅಣ್ಣ" mean?', ["Younger sister", "Older brother", "Mother", "Friend"], "Older brother"]
    ]
  },
  {
    title: "Talking About Your Day",
    phrases: [
      ["ಇಂದು ನನ್ನ ದಿನ ಚೆನ್ನಾಗಿತ್ತು", "Indu nanna dina chennāgittu", "My day was good today"],
      ["ನಾನು ಬೆಳಿಗ್ಗೆ ಬೇಗ ಎದ್ದೆ", "Nānu beḷigge bēga edde", "I woke up early in the morning"],
      ["ನಾನು ಕೆಲಸಕ್ಕೆ ಹೋದೆ", "Nānu kelasakke hōde", "I went to work"],
      ["ನಾನು ಸ್ನೇಹಿತರನ್ನು ಭೇಟಿಯಾದೆ", "Nānu snēhitarannu bhēṭiyāde", "I met my friends"],
      ["ಈಗ ನಾನು ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತಿದ್ದೇನೆ", "Īga nānu viśrānti paḍeyuttiddēne", "I am resting now"]
    ],
    questions: [
      ['What does "ಇಂದು" mean?', ["Yesterday", "Today", "Tomorrow", "Night"], "Today"],
      ['Which phrase means "I woke up early"?', ["ನಾನು ಕೆಲಸಕ್ಕೆ ಹೋದೆ", "ನಾನು ಬೆಳಿಗ್ಗೆ ಬೇಗ ಎದ್ದೆ", "ನಾನು ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತಿದ್ದೇನೆ", "ನಮಸ್ಕಾರ"], "ನಾನು ಬೆಳಿಗ್ಗೆ ಬೇಗ ಎದ್ದೆ"],
      ['What does "ಸ್ನೇಹಿತರು" mean?', ["Teachers", "Friends", "Parents", "Doctors"], "Friends"],
      ['What does "ಈಗ" mean?', ["Now", "Later", "Yesterday", "Always"], "Now"],
      ['Which phrase means "I went to work"?', ["ನಾನು ಕೆಲಸಕ್ಕೆ ಹೋದೆ", "ನಾನು ಮನೆಗೆ ಬಂದೆ", "ನಾನು ಊಟ ಮಾಡಿದೆ", "ನಾನು ಮಲಗಿದೆ"], "ನಾನು ಕೆಲಸಕ್ಕೆ ಹೋದೆ"]
    ]
  },
  {
    title: "Talking About Hobbies",
    phrases: [
      ["ನನಗೆ ಪುಸ್ತಕ ಓದುವುದು ಇಷ್ಟ", "Nanage pustaka ōduvudu iṣṭa", "I like reading books"],
      ["ನನಗೆ ಸಂಗೀತ ಕೇಳುವುದು ಇಷ್ಟ", "Nanage saṅgīta kēḷuvudu iṣṭa", "I like listening to music"],
      ["ನಾನು ಚಿತ್ರ ಬಿಡಿಸುತ್ತೇನೆ", "Nānu chitra biḍisuttēne", "I draw pictures"],
      ["ನಾನು ಕ್ರಿಕೆಟ್ ಆಡುತ್ತೇನೆ", "Nānu krikeṭ āḍuttēne", "I play cricket"],
      ["ನಿಮ್ಮ ಹವ್ಯಾಸ ಏನು?", "Nimma hav yāsa ēnu?", "What is your hobby?"]
    ],
    questions: [
      ['What does "ಪುಸ್ತಕ" mean?', ["Book", "Music", "Game", "Food"], "Book"],
      ['Which phrase means "I like listening to music"?', ["ನನಗೆ ಸಂಗೀತ ಕೇಳುವುದು ಇಷ್ಟ", "ನಾನು ಕ್ರಿಕೆಟ್ ಆಡುತ್ತೇನೆ", "ನಾನು ಚಿತ್ರ ಬಿಡಿಸುತ್ತೇನೆ", "ನನಗೆ ನೀರು ಬೇಕು"], "ನನಗೆ ಸಂಗೀತ ಕೇಳುವುದು ಇಷ್ಟ"],
      ['What does "ನಾನು ಕ್ರಿಕೆಟ್ ಆಡುತ್ತೇನೆ" mean?', ["I watch a movie", "I play cricket", "I read a book", "I cook food"], "I play cricket"],
      ['Which word means "hobby" in the question?', ["ಹೆಸರು", "ಹವ್ಯಾಸ", "ಸಮಯ", "ನೀರು"], "ಹವ್ಯಾಸ"],
      ['What does "ಚಿತ್ರ ಬಿಡಿಸುತ್ತೇನೆ" mean?', ["I draw pictures", "I listen to music", "I go to work", "I am resting"], "I draw pictures"]
    ]
  },
  {
    title: "Talking on the Phone",
    phrases: [
      ["ಹಲೋ, ಯಾರು ಮಾತನಾಡುತ್ತಿದ್ದೀರಿ?", "Halō, yāru mātanāḍuttiddīri?", "Hello, who is speaking?"],
      ["ನಾನು ಮೋನಿಕಾ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ", "Nānu Mōnikā mātanāḍuttiddēne", "This is Monika speaking"],
      ["ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕಾಯಿರಿ", "Dayaviṭṭu svalpa kāyiri", "Please wait a moment"],
      ["ನಂತರ ಕರೆ ಮಾಡುತ್ತೇನೆ", "Nantara kare māḍuttēne", "I will call later"],
      ["ನಿಮ್ಮ ಧ್ವನಿ ಸ್ಪಷ್ಟವಾಗಿಲ್ಲ", "Nimma dhvani spaṣṭavāgilla", "Your voice is not clear"]
    ],
    questions: [
      ['What does "ಯಾರು" mean?', ["Who", "Where", "When", "Why"], "Who"],
      ['Which phrase means "I will call later"?', ["ನಂತರ ಕರೆ ಮಾಡುತ್ತೇನೆ", "ನಮಸ್ಕಾರ", "ನೀರು ಕೊಡಿ", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ"], "ನಂತರ ಕರೆ ಮಾಡುತ್ತೇನೆ"],
      ['What does "ಕರೆ" mean in this context?', ["Call", "Food", "Road", "Name"], "Call"],
      ['Which phrase asks someone to wait?', ["ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕಾಯಿರಿ", "ಮತ್ತೆ ಸಿಗೋಣ", "ನಾನು ಹೊರಡುತ್ತೇನೆ", "ಧನ್ಯವಾದಗಳು"], "ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಕಾಯಿರಿ"],
      ['What does "ಸ್ಪಷ್ಟವಾಗಿಲ್ಲ" mean?', ["Is not clear", "Is very good", "Is expensive", "Is nearby"], "Is not clear"]
    ]
  },
  {
    title: "Inviting Someone",
    phrases: [
      ["ನಮ್ಮ ಮನೆಗೆ ಬನ್ನಿ", "Namma manege banni", "Please come to our house"],
      ["ನೀವು ಊಟಕ್ಕೆ ಬರುತ್ತೀರಾ?", "Nīvu ūṭakke baruttīrā?", "Will you come for a meal?"],
      ["ನಾಳೆ ಭೇಟಿಯಾಗೋಣ", "Nāḷe bhēṭiyāgōṇa", "Let's meet tomorrow"],
      ["ನಿಮಗೆ ಸಮಯ ಇದೆಯೇ?", "Nimage samaya ideyē?", "Do you have time?"],
      ["ನಿಮ್ಮನ್ನು ಕಾಯುತ್ತೇನೆ", "Nimmannu kāyuttēne", "I will wait for you"]
    ],
    questions: [
      ['What does "ನಮ್ಮ ಮನೆಗೆ ಬನ್ನಿ" mean?', ["Come to our house", "Go to the market", "Sit here", "Wait outside"], "Come to our house"],
      ['What does "ನಾಳೆ" mean?', ["Today", "Tomorrow", "Yesterday", "Morning"], "Tomorrow"],
      ['Which phrase asks whether someone has time?', ["ನಿಮಗೆ ಸಮಯ ಇದೆಯೇ?", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ನಮಸ್ಕಾರ", "ಧನ್ಯವಾದಗಳು"], "ನಿಮಗೆ ಸಮಯ ಇದೆಯೇ?"],
      ['What does "ಊಟ" mean?', ["Meal / Food", "Road", "Book", "Water"], "Meal / Food"],
      ['Which phrase means "I will wait for you"?', ["ನಿಮ್ಮನ್ನು ಕಾಯುತ್ತೇನೆ", "ನಮ್ಮ ಮನೆಗೆ ಬನ್ನಿ", "ನಾಳೆ ಭೇಟಿಯಾಗೋಣ", "ಬೇಡ"], "ನಿಮ್ಮನ್ನು ಕಾಯುತ್ತೇನೆ"]
    ]
  },
  {
    title: "Apologising",
    phrases: [
      ["ನನ್ನನ್ನು ಕ್ಷಮಿಸಿ", "Nannannu kṣamisi", "Please forgive me"],
      ["ನನ್ನ ತಪ್ಪಾಯಿತು", "Nanna tappāyitu", "I made a mistake"],
      ["ನಾನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮಾಡಲಿಲ್ಲ", "Nānu uddēśapūrvakavāgi māḍalilla", "I did not do it intentionally"],
      ["ಇನ್ನು ಮುಂದೆ ಹೀಗೆ ಮಾಡುವುದಿಲ್ಲ", "Innu munde hīge māḍuvudilla", "I won't do this again"],
      ["ದಯವಿಟ್ಟು ನನ್ನನ್ನು ಕ್ಷಮಿಸಿ", "Dayaviṭṭu nannannu kṣamisi", "Please forgive me"]
    ],
    questions: [
      ['What does "ನನ್ನನ್ನು ಕ್ಷಮಿಸಿ" mean?', ["Please forgive me", "Come here", "Thank you", "I am fine"], "Please forgive me"],
      ['What does "ತಪ್ಪು" mean?', ["Mistake", "Friend", "Time", "Food"], "Mistake"],
      ['Which phrase means "I made a mistake"?', ["ನನ್ನ ತಪ್ಪಾಯಿತು", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ಮತ್ತೆ ಸಿಗೋಣ", "ನನಗೆ ನೀರು ಬೇಕು"], "ನನ್ನ ತಪ್ಪಾಯಿತು"],
      ['What does "ಇನ್ನು ಮುಂದೆ" mean?', ["From now on", "Yesterday", "At home", "In the morning"], "From now on"],
      ['Which phrase promises not to repeat the action?', ["ಇನ್ನು ಮುಂದೆ ಹೀಗೆ ಮಾಡುವುದಿಲ್ಲ", "ನಮಸ್ಕಾರ", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ಸ್ವಾಗತ"], "ಇನ್ನು ಮುಂದೆ ಹೀಗೆ ಮಾಡುವುದಿಲ್ಲ"]
    ]
  },
  {
    title: "Expressing Feelings",
    phrases: [
      ["ನನಗೆ ಸಂತೋಷವಾಗಿದೆ", "Nanage santōṣavāgide", "I am happy"],
      ["ನನಗೆ ದುಃಖವಾಗಿದೆ", "Nanage duḥkhavāgide", "I am sad"],
      ["ನನಗೆ ಭಯವಾಗುತ್ತಿದೆ", "Nanage bhayavāguttide", "I am feeling afraid"],
      ["ನನಗೆ ಕೋಪ ಬಂದಿದೆ", "Nanage kōpa bandide", "I am angry"],
      ["ನಾನು ಶಾಂತವಾಗಿದ್ದೇನೆ", "Nānu śāntavāgiddēne", "I am calm"]
    ],
    questions: [
      ['What does "ಸಂತೋಷ" mean?', ["Happiness", "Anger", "Fear", "Hunger"], "Happiness"],
      ['Which phrase means "I am sad"?', ["ನನಗೆ ದುಃಖವಾಗಿದೆ", "ನನಗೆ ಸಂತೋಷವಾಗಿದೆ", "ನಾನು ಶಾಂತವಾಗಿದ್ದೇನೆ", "ನಮಸ್ಕಾರ"], "ನನಗೆ ದುಃಖವಾಗಿದೆ"],
      ['What does "ಭಯ" mean?', ["Fear", "Joy", "Time", "Friend"], "Fear"],
      ['Which phrase means "I am angry"?', ["ನನಗೆ ಕೋಪ ಬಂದಿದೆ", "ನನಗೆ ದುಃಖವಾಗಿದೆ", "ನನಗೆ ಹಸಿವಾಗಿದೆ", "ನಾನು ವಿದ್ಯಾರ್ಥಿನಿ"], "ನನಗೆ ಕೋಪ ಬಂದಿದೆ"],
      ['What does "ಶಾಂತ" mean?', ["Calm / Peaceful", "Angry", "Busy", "Hungry"], "Calm / Peaceful"]
    ]
  },
  {
    title: "Making Small Talk",
    phrases: [
      ["ಇಂದು ಹವಾಮಾನ ಚೆನ್ನಾಗಿದೆ", "Indu havāmāna chennāgide", "The weather is nice today"],
      ["ನೀವು ಇಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಾ?", "Nīvu illi vāsisuttīrā?", "Do you live here?"],
      ["ನೀವು ಏನು ಓದುತ್ತಿದ್ದೀರಿ?", "Nīvu ēnu ōduttiddīri?", "What are you studying?"],
      ["ನಿಮ್ಮ ಊರು ಯಾವುದು?", "Nimma ūru yāvudu?", "Which is your hometown?"],
      ["ನಿಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಲು ಸಂತೋಷವಾಯಿತು", "Nimmondige mātanāḍalu santōṣavāyitu", "It was nice talking with you"]
    ],
    questions: [
      ['What does "ಹವಾಮಾನ" mean?', ["Weather", "Family", "School", "Food"], "Weather"],
      ['Which phrase asks "Do you live here?"', ["ನೀವು ಇಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಾ?", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ನೀರು ಕೊಡಿ", "ಮತ್ತೆ ಸಿಗೋಣ"], "ನೀವು ಇಲ್ಲಿ ವಾಸಿಸುತ್ತೀರಾ?"],
      ['What does "ಓದುತ್ತಿದ್ದೀರಿ" relate to?', ["Studying / Reading", "Sleeping", "Driving", "Cooking"], "Studying / Reading"],
      ['What does "ಊರು" mean?', ["Hometown / Place", "Water", "Book", "Hospital"], "Hometown / Place"],
      ['Which phrase means "It was nice talking with you"?', ["ನಿಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಲು ಸಂತೋಷವಾಯಿತು", "ನನಗೆ ಹಸಿವಾಗಿದೆ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ", "ಬೇಡ"], "ನಿಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಲು ಸಂತೋಷವಾಯಿತು"]
    ]
  },
  {
    title: "Talking About Plans",
    phrases: [
      ["ನಾಳೆ ಏನು ಯೋಜನೆ?", "Nāḷe ēnu yōjane?", "What are the plans for tomorrow?"],
      ["ನಾನು ಕಾಲೇಜಿಗೆ ಹೋಗುತ್ತೇನೆ", "Nānu kālējige hōguttēne", "I will go to college"],
      ["ನಾವು ಸಿನಿಮಾ ನೋಡೋಣ", "Nāvu sinimā nōḍōṇa", "Let's watch a movie"],
      ["ನನಗೆ ಇಂದು ಕೆಲಸವಿದೆ", "Nanage indu kelasavide", "I have work today"],
      ["ನಂತರ ಮಾತನಾಡೋಣ", "Nantara mātanāḍōṇa", "Let's talk later"]
    ],
    questions: [
      ['What does "ನಾಳೆ" mean?', ["Tomorrow", "Today", "Yesterday", "Now"], "Tomorrow"],
      ['Which phrase means "I will go to college"?', ["ನಾನು ಕಾಲೇಜಿಗೆ ಹೋಗುತ್ತೇನೆ", "ನಾವು ಸಿನಿಮಾ ನೋಡೋಣ", "ನಂತರ ಮಾತನಾಡೋಣ", "ನನಗೆ ನೀರು ಬೇಕು"], "ನಾನು ಕಾಲೇಜಿಗೆ ಹೋಗುತ್ತೇನೆ"],
      ['What does "ಸಿನಿಮಾ" mean?', ["Movie", "School", "Food", "Road"], "Movie"],
      ['Which phrase means "I have work today"?', ["ನನಗೆ ಇಂದು ಕೆಲಸವಿದೆ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ", "ನಮಸ್ಕಾರ", "ನನ್ನ ಹೆಸರು ರವಿ"], "ನನಗೆ ಇಂದು ಕೆಲಸವಿದೆ"],
      ['What does "ನಂತರ ಮಾತನಾಡೋಣ" mean?', ["Let's talk later", "Let's eat now", "Please sit down", "I am tired"], "Let's talk later"]
    ]
  },
  {
    title: "At a Café With Friends",
    phrases: [
      ["ನಾವು ಕಾಫಿ ಕುಡಿಯೋಣ", "Nāvu kāphi kuḍiyōṇa", "Let's drink coffee"],
      ["ನಿಮಗೆ ಏನು ಬೇಕು?", "Nimage ēnu bēku?", "What would you like?"],
      ["ನನಗೆ ಚಹಾ ಬೇಕು", "Nanage chahā bēku", "I would like tea"],
      ["ಇದು ತುಂಬಾ ರುಚಿಯಾಗಿದೆ", "Idu tumbā ruchiyāgide", "This is very tasty"],
      ["ಬಿಲ್ ತಂದುಕೊಡಿ", "Bill tandukoḍi", "Please bring the bill"]
    ],
    questions: [
      ['What does "ಕಾಫಿ" mean?', ["Coffee", "Tea", "Water", "Juice"], "Coffee"],
      ['Which phrase means "I would like tea"?', ["ನನಗೆ ಚಹಾ ಬೇಕು", "ನನಗೆ ನೀರು ಬೇಕು", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ಮತ್ತೆ ಸಿಗೋಣ"], "ನನಗೆ ಚಹಾ ಬೇಕು"],
      ['What does "ರುಚಿಯಾಗಿದೆ" mean?', ["Tasty", "Expensive", "Far away", "Late"], "Tasty"],
      ['Which phrase asks for the bill?', ["ಬಿಲ್ ತಂದುಕೊಡಿ", "ನಮಸ್ಕಾರ", "ದಯವಿಟ್ಟು ಕುಳಿತುಕೊಳ್ಳಿ", "ನೀವು ಎಲ್ಲಿಂದ ಬಂದಿದ್ದೀರಿ?"], "ಬಿಲ್ ತಂದುಕೊಡಿ"],
      ['What does "ನಿಮಗೆ ಏನು ಬೇಕು?" mean?', ["What would you like?", "Where do you live?", "How old are you?", "What is your name?"], "What would you like?"]
    ]
  },
  {
    title: "At College",
    phrases: [
      ["ನಾನು ಕಾಲೇಜಿನಲ್ಲಿ ಓದುತ್ತಿದ್ದೇನೆ", "Nānu kālējinalli ōduttiddēne", "I am studying in college"],
      ["ನನ್ನ ತರಗತಿ ಎಲ್ಲಿದೆ?", "Nanna taragati ellide?", "Where is my classroom?"],
      ["ಇಂದು ಪಾಠ ಇದೆಯೇ?", "Indu pāṭha ideyē?", "Is there a lesson today?"],
      ["ನಾನು ಗೃಹಪಾಠ ಮುಗಿಸಿದ್ದೇನೆ", "Nānu gṛhapāṭha mugisiddēne", "I have finished my homework"],
      ["ನಾಳೆ ಪರೀಕ್ಷೆ ಇದೆ", "Nāḷe parīkṣe ide", "There is an exam tomorrow"]
    ],
    questions: [
      ['What does "ಕಾಲೇಜು" mean?', ["College", "Hospital", "Shop", "Station"], "College"],
      ['Which phrase asks "Where is my classroom?"', ["ನನ್ನ ತರಗತಿ ಎಲ್ಲಿದೆ?", "ಇಂದು ಪಾಠ ಇದೆಯೇ?", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ನಿಮ್ಮ ಹೆಸರು ಏನು?"], "ನನ್ನ ತರಗತಿ ಎಲ್ಲಿದೆ?"],
      ['What does "ಗೃಹಪಾಠ" mean?', ["Homework", "Lunch", "Bus", "Teacher"], "Homework"],
      ['What does "ಪರೀಕ್ಷೆ" mean?', ["Exam", "Friend", "Water", "Holiday"], "Exam"],
      ['Which phrase means "I have finished my homework"?', ["ನಾನು ಗೃಹಪಾಠ ಮುಗಿಸಿದ್ದೇನೆ", "ನಾಳೆ ಪರೀಕ್ಷೆ ಇದೆ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ", "ಮತ್ತೆ ಸಿಗೋಣ"], "ನಾನು ಗೃಹಪಾಠ ಮುಗಿಸಿದ್ದೇನೆ"]
    ]
  },
  {
    title: "At Work",
    phrases: [
      ["ನಾನು ಕಚೇರಿಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ", "Nānu kachēriyalli kelasa māḍuttēne", "I work in an office"],
      ["ಸಭೆ ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ?", "Sabhe yāvāga prārambhavāguttade?", "When does the meeting start?"],
      ["ನಾನು ವರದಿಯನ್ನು ಕಳುಹಿಸಿದ್ದೇನೆ", "Nānu varadiyannu kaḷuhisiddēne", "I have sent the report"],
      ["ದಯವಿಟ್ಟು ನನಗೆ ಇಮೇಲ್ ಮಾಡಿ", "Dayaviṭṭu nanage īmēl māḍi", "Please email me"],
      ["ನಾನು ಕೆಲಸ ಮುಗಿಸಿದ್ದೇನೆ", "Nānu kelasa mugisiddēne", "I have finished the work"]
    ],
    questions: [
      ['What does "ಕಚೇರಿ" mean?', ["Office", "Kitchen", "School", "Market"], "Office"],
      ['Which phrase asks when a meeting starts?', ["ಸಭೆ ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ?", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ನೀರು ಕೊಡಿ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ"], "ಸಭೆ ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ?"],
      ['What does "ವರದಿ" mean?', ["Report", "Lunch", "Friend", "Ticket"], "Report"],
      ['What does "ಕಳುಹಿಸಿದ್ದೇನೆ" mean?', ["I have sent", "I have eaten", "I have slept", "I have arrived"], "I have sent"],
      ['Which phrase means "I have finished the work"?', ["ನಾನು ಕೆಲಸ ಮುಗಿಸಿದ್ದೇನೆ", "ನಾನು ಕಚೇರಿಗೆ ಹೋಗುತ್ತೇನೆ", "ನಾನು ವಿದ್ಯಾರ್ಥಿನಿ", "ನಮಸ್ಕಾರ"], "ನಾನು ಕೆಲಸ ಮುಗಿಸಿದ್ದೇನೆ"]
    ]
  },
  {
    title: "Talking About Food",
    phrases: [
      ["ನನಗೆ ಹಸಿವಾಗಿದೆ", "Nanage hasivāgide", "I am hungry"],
      ["ನನಗೆ ಬಾಯಾರಿಕೆಯಾಗಿದೆ", "Nanage bāyārikeyāgide", "I am thirsty"],
      ["ಊಟ ಸಿದ್ಧವಾಗಿದೆ", "Ūṭa siddhavāgide", "The meal is ready"],
      ["ಇನ್ನೂ ಸ್ವಲ್ಪ ಅನ್ನ ಕೊಡಿ", "Innū svalpa anna koḍi", "Please give me a little more rice"],
      ["ಊಟ ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ", "Ūṭa tumbā chennāgide", "The food is very good"]
    ],
    questions: [
      ['What does "ಹಸಿವು" mean?', ["Hunger", "Thirst", "Sleep", "Anger"], "Hunger"],
      ['Which phrase means "I am thirsty"?', ["ನನಗೆ ಬಾಯಾರಿಕೆಯಾಗಿದೆ", "ನನಗೆ ಹಸಿವಾಗಿದೆ", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ನಮಸ್ಕಾರ"], "ನನಗೆ ಬಾಯಾರಿಕೆಯಾಗಿದೆ"],
      ['What does "ಊಟ ಸಿದ್ಧವಾಗಿದೆ" mean?', ["The meal is ready", "The bus is late", "The shop is closed", "The class has started"], "The meal is ready"],
      ['What does "ಅನ್ನ" mean in this context?', ["Rice", "Coffee", "Book", "Road"], "Rice"],
      ['Which phrase praises the food?', ["ಊಟ ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ", "ನನಗೆ ನೀರು ಬೇಕು", "ನಾನು ಹೊರಡುತ್ತೇನೆ", "ಮತ್ತೆ ಸಿಗೋಣ"], "ಊಟ ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ"]
    ]
  },
  {
    title: "At the Market",
    phrases: [
      ["ಇದು ಎಷ್ಟು?", "Idu eṣṭu?", "How much is this?"],
      ["ಬೆಲೆ ತುಂಬಾ ಹೆಚ್ಚಾಗಿದೆ", "Bele tumbā hechchāgide", "The price is very high"],
      ["ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ", "Svalpa kaḍime māḍi", "Please reduce it a little"],
      ["ನನಗೆ ಇದು ಬೇಕು", "Nanage idu bēku", "I want this"],
      ["ನಾನು ಹಣ ಕೊಡುತ್ತೇನೆ", "Nānu haṇa koḍuttēne", "I will pay the money"]
    ],
    questions: [
      ['What does "ಇದು ಎಷ್ಟು?" mean?', ["How much is this?", "Where is this?", "Who is this?", "When is this?"], "How much is this?"],
      ['What does "ಬೆಲೆ" mean?', ["Price", "Water", "Time", "Name"], "Price"],
      ['Which phrase asks for a lower price?', ["ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ", "ನನಗೆ ಇದು ಬೇಕು", "ನಾನು ಹಣ ಕೊಡುತ್ತೇನೆ", "ನಮಸ್ಕಾರ"], "ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ"],
      ['What does "ನನಗೆ ಇದು ಬೇಕು" mean?', ["I want this", "I lost this", "I sold this", "I made this"], "I want this"],
      ['Which word means "money"?', ["ಹಣ", "ಮನೆ", "ಹೆಸರು", "ಸಮಯ"], "ಹಣ"]
    ]
  },
  {
    title: "Asking for Directions",
    phrases: [
      ["ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", "Bas nilḍāṇa ellide?", "Where is the bus stop?"],
      ["ನೇರವಾಗಿ ಹೋಗಿ", "Nēravāgi hōgi", "Go straight"],
      ["ಎಡಕ್ಕೆ ತಿರುಗಿ", "Eḍakke tirugi", "Turn left"],
      ["ಬಲಕ್ಕೆ ತಿರುಗಿ", "Balakke tirugi", "Turn right"],
      ["ಇದು ಎಷ್ಟು ದೂರ?", "Idu eṣṭu dūra?", "How far is it?"]
    ],
    questions: [
      ['What does "ಎಲ್ಲಿದೆ?" mean?', ["Where is it?", "How much?", "Who is it?", "What time?"], "Where is it?"],
      ['Which phrase means "Go straight"?', ["ನೇರವಾಗಿ ಹೋಗಿ", "ಎಡಕ್ಕೆ ತಿರುಗಿ", "ಬಲಕ್ಕೆ ತಿರುಗಿ", "ಇಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ"], "ನೇರವಾಗಿ ಹೋಗಿ"],
      ['What does "ಎಡಕ್ಕೆ" mean?', ["Left", "Right", "Straight", "Behind"], "Left"],
      ['What does "ಬಲಕ್ಕೆ" mean?', ["Right", "Left", "Straight", "Inside"], "Right"],
      ['Which phrase asks "How far is it?"', ["ಇದು ಎಷ್ಟು ದೂರ?", "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", "ನಮಸ್ಕಾರ", "ನೀರು ಕೊಡಿ"], "ಇದು ಎಷ್ಟು ದೂರ?"]
    ]
  },
  {
    title: "Talking About Time",
    phrases: [
      ["ಈಗ ಎಷ್ಟು ಗಂಟೆ?", "Īga eṣṭu gaṇṭe?", "What time is it now?"],
      ["ಈಗ ಹತ್ತು ಗಂಟೆ", "Īga hattu gaṇṭe", "It is ten o'clock now"],
      ["ನಾನು ತಡವಾಗಿದ್ದೇನೆ", "Nānu taḍavāgiddēne", "I am late"],
      ["ದಯವಿಟ್ಟು ಬೇಗ ಬನ್ನಿ", "Dayaviṭṭu bēga banni", "Please come quickly"],
      ["ನಾಳೆ ಬೆಳಿಗ್ಗೆ ಭೇಟಿಯಾಗೋಣ", "Nāḷe beḷigge bhēṭiyāgōṇa", "Let's meet tomorrow morning"]
    ],
    questions: [
      ['What does "ಈಗ" mean?', ["Now", "Tomorrow", "Yesterday", "Never"], "Now"],
      ['What does "ಗಂಟೆ" mean in this context?', ["Hour / O'clock", "Month", "Year", "Road"], "Hour / O'clock"],
      ['Which phrase means "I am late"?', ["ನಾನು ತಡವಾಗಿದ್ದೇನೆ", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ನಾನು ವಿದ್ಯಾರ್ಥಿನಿ", "ನಮಸ್ಕಾರ"], "ನಾನು ತಡವಾಗಿದ್ದೇನೆ"],
      ['What does "ಬೇಗ ಬನ್ನಿ" mean?', ["Come quickly", "Leave tomorrow", "Sit here", "Eat slowly"], "Come quickly"],
      ['What does "ಬೆಳಿಗ್ಗೆ" mean?', ["Morning", "Evening", "Night", "Afternoon"], "Morning"]
    ]
  },
  {
    title: "Talking About Weather",
    phrases: [
      ["ಇಂದು ಬಿಸಿಲಿದೆ", "Indu bisilide", "It is sunny today"],
      ["ಇಂದು ಮಳೆ ಬರುತ್ತಿದೆ", "Indu maḷe baruttide", "It is raining today"],
      ["ಹವಾಮಾನ ತಂಪಾಗಿದೆ", "Havāmāna tampāgide", "The weather is cool"],
      ["ಗಾಳಿ ಜೋರಾಗಿ ಬೀಸುತ್ತಿದೆ", "Gāḷi jōrāgi bīsuttide", "The wind is blowing strongly"],
      ["ನನಗೆ ಚಳಿ ಆಗುತ್ತಿದೆ", "Nanage chaḷi āguttide", "I am feeling cold"]
    ],
    questions: [
      ['What does "ಮಳೆ" mean?', ["Rain", "Sun", "Wind", "Cloud"], "Rain"],
      ['Which phrase means "It is sunny today"?', ["ಇಂದು ಬಿಸಿಲಿದೆ", "ಇಂದು ಮಳೆ ಬರುತ್ತಿದೆ", "ಹವಾಮಾನ ತಂಪಾಗಿದೆ", "ನನಗೆ ಚಳಿ ಆಗುತ್ತಿದೆ"], "ಇಂದು ಬಿಸಿಲಿದೆ"],
      ['What does "ತಂಪಾಗಿದೆ" mean?', ["Cool", "Hot", "Hungry", "Late"], "Cool"],
      ['What does "ಗಾಳಿ" mean?', ["Wind / Air", "Food", "Book", "House"], "Wind / Air"],
      ['Which phrase means "I am feeling cold"?', ["ನನಗೆ ಚಳಿ ಆಗುತ್ತಿದೆ", "ನನಗೆ ಹಸಿವಾಗಿದೆ", "ನನಗೆ ಸಂತೋಷವಾಗಿದೆ", "ನಾನು ಕೆಲಸ ಮಾಡುತ್ತೇನೆ"], "ನನಗೆ ಚಳಿ ಆಗುತ್ತಿದೆ"]
    ]
  },
  {
    title: "Talking About Travel",
    phrases: [
      ["ನಾನು ಬಸ್ಸಿನಲ್ಲಿ ಹೋಗುತ್ತೇನೆ", "Nānu bassinalli hōguttēne", "I go by bus"],
      ["ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", "Railu nilḍāṇa ellide?", "Where is the railway station?"],
      ["ನನಗೆ ಒಂದು ಟಿಕೆಟ್ ಬೇಕು", "Nanage ondu ṭikeṭ bēku", "I need one ticket"],
      ["ಬಸ್ ಯಾವಾಗ ಬರುತ್ತದೆ?", "Bas yāvāga baruttade?", "When does the bus arrive?"],
      ["ನಾವು ಇಲ್ಲಿ ಇಳಿಯಬೇಕು", "Nāvu illi iḷiyabēku", "We need to get down here"]
    ],
    questions: [
      ['What does "ಬಸ್ಸಿನಲ್ಲಿ" mean?', ["By bus / In the bus", "By train", "At home", "On foot"], "By bus / In the bus"],
      ['Which phrase asks where the railway station is?', ["ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", "ಬಸ್ ಯಾವಾಗ ಬರುತ್ತದೆ?", "ನನಗೆ ನೀರು ಬೇಕು", "ನಮಸ್ಕಾರ"], "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?"],
      ['What does "ಟಿಕೆಟ್" mean?', ["Ticket", "Money", "Time", "Food"], "Ticket"],
      ['What does "ಯಾವಾಗ" mean?', ["When", "Where", "Who", "Why"], "When"],
      ['Which phrase means "We need to get down here"?', ["ನಾವು ಇಲ್ಲಿ ಇಳಿಯಬೇಕು", "ನಾನು ಬಸ್ಸಿನಲ್ಲಿ ಹೋಗುತ್ತೇನೆ", "ಮತ್ತೆ ಸಿಗೋಣ", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ"], "ನಾವು ಇಲ್ಲಿ ಇಳಿಯಬೇಕು"]
    ]
  },
  {
    title: "At a Shop",
    phrases: [
      ["ನನಗೆ ಒಂದು ಚೀಲ ಬೇಕು", "Nanage ondu chīla bēku", "I need a bag"],
      ["ಬೇರೆ ಬಣ್ಣ ಇದೆಯೇ?", "Bēre baṇṇa ideyē?", "Is another colour available?"],
      ["ನಾನು ಇದನ್ನು ಖರೀದಿಸುತ್ತೇನೆ", "Nānu idannu kharīdisuttēne", "I will buy this"],
      ["ಕಾರ್ಡ್ ಮೂಲಕ ಪಾವತಿಸಬಹುದೇ?", "Kārḍ mūlaka pāvatisabahudē?", "Can I pay by card?"],
      ["ರಸೀದಿ ಕೊಡಿ", "Rasīdi koḍi", "Please give me a receipt"]
    ],
    questions: [
      ['What does "ಚೀಲ" mean?', ["Bag", "Book", "Bus", "Room"], "Bag"],
      ['What does "ಬಣ್ಣ" mean?', ["Colour", "Price", "Time", "Name"], "Colour"],
      ['Which phrase means "I will buy this"?', ["ನಾನು ಇದನ್ನು ಖರೀದಿಸುತ್ತೇನೆ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ", "ನನಗೆ ನೀರು ಬೇಕು", "ನಮಸ್ಕಾರ"], "ನಾನು ಇದನ್ನು ಖರೀದಿಸುತ್ತೇನೆ"],
      ['What does "ರಸೀದಿ" mean?', ["Receipt", "Ticket", "Wallet", "Door"], "Receipt"],
      ['Which phrase asks to pay by card?', ["ಕಾರ್ಡ್ ಮೂಲಕ ಪಾವತಿಸಬಹುದೇ?", "ಬೇರೆ ಬಣ್ಣ ಇದೆಯೇ?", "ರಸೀದಿ ಕೊಡಿ", "ಮತ್ತೆ ಸಿಗೋಣ"], "ಕಾರ್ಡ್ ಮೂಲಕ ಪಾವತಿಸಬಹುದೇ?"]
    ]
  },
  {
    title: "At the Doctor",
    phrases: [
      ["ನನಗೆ ಆರೋಗ್ಯ ಸರಿಯಿಲ್ಲ", "Nanage ārōgya sariyilla", "I am not feeling well"],
      ["ನನಗೆ ತಲೆನೋವು ಇದೆ", "Nanage talenōvu ide", "I have a headache"],
      ["ನನಗೆ ಜ್ವರ ಬಂದಿದೆ", "Nanage jvara bandide", "I have a fever"],
      ["ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಕರೆಸಿ", "Dayaviṭṭu vaidyaran̄nu karesi", "Please call the doctor"],
      ["ನನಗೆ ಔಷಧಿ ಬೇಕು", "Nanage auṣadhi bēku", "I need medicine"]
    ],
    questions: [
      ['What does "ಆರೋಗ್ಯ" mean?', ["Health", "Money", "Weather", "Food"], "Health"],
      ['Which phrase means "I have a headache"?', ["ನನಗೆ ತಲೆನೋವು ಇದೆ", "ನನಗೆ ಜ್ವರ ಬಂದಿದೆ", "ನನಗೆ ಹಸಿವಾಗಿದೆ", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ"], "ನನಗೆ ತಲೆನೋವು ಇದೆ"],
      ['What does "ಜ್ವರ" mean?', ["Fever", "Headache", "Cold weather", "Hunger"], "Fever"],
      ['Which phrase asks someone to call the doctor?', ["ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಕರೆಸಿ", "ನನಗೆ ನೀರು ಬೇಕು", "ನಮಸ್ಕಾರ", "ಮತ್ತೆ ಸಿಗೋಣ"], "ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಕರೆಸಿ"],
      ['What does "ಔಷಧಿ" mean?', ["Medicine", "Ticket", "Book", "Receipt"], "Medicine"]
    ]
  },
  {
    title: "At Home",
    phrases: [
      ["ನಾನು ಮನೆಗೆ ಬಂದೆ", "Nānu manege bande", "I came home"],
      ["ಬಾಗಿಲು ಮುಚ್ಚಿ", "Bāgilu muchchi", "Close the door"],
      ["ದೀಪ ಹಚ್ಚಿ", "Dīpa hachchi", "Turn on the light"],
      ["ನನಗೆ ಸ್ವಲ್ಪ ವಿಶ್ರಾಂತಿ ಬೇಕು", "Nanage svalpa viśrānti bēku", "I need some rest"],
      ["ನಾವು ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡೋಣ", "Nāvu oṭṭige ūṭa māḍōṇa", "Let's eat together"]
    ],
    questions: [
      ['What does "ಮನೆ" mean?', ["House / Home", "School", "Shop", "Hospital"], "House / Home"],
      ['Which phrase means "Close the door"?', ["ಬಾಗಿಲು ಮುಚ್ಚಿ", "ದೀಪ ಹಚ್ಚಿ", "ಮನೆಗೆ ಬನ್ನಿ", "ನಮಸ್ಕಾರ"], "ಬಾಗಿಲು ಮುಚ್ಚಿ"],
      ['What does "ದೀಪ" mean?', ["Light / Lamp", "Door", "Food", "Bed"], "Light / Lamp"],
      ['Which phrase means "I need some rest"?', ["ನನಗೆ ಸ್ವಲ್ಪ ವಿಶ್ರಾಂತಿ ಬೇಕು", "ನನಗೆ ನೀರು ಬೇಕು", "ನಾನು ಹೊರಡುತ್ತೇನೆ", "ಮತ್ತೆ ಸಿಗೋಣ"], "ನನಗೆ ಸ್ವಲ್ಪ ವಿಶ್ರಾಂತಿ ಬೇಕು"],
      ['What does "ಒಟ್ಟಿಗೆ" mean?', ["Together", "Quickly", "Yesterday", "Outside"], "Together"]
    ]
  },
  {
    title: "Making Friends",
    phrases: [
      ["ನಾವು ಸ್ನೇಹಿತರಾಗೋಣ", "Nāvu snēhitarāgōṇa", "Let's be friends"],
      ["ನಿಮ್ಮನ್ನು ಮತ್ತೆ ನೋಡಲು ಸಂತೋಷ", "Nimmannu matte nōḍalu santōṣa", "Happy to see you again"],
      ["ನೀವು ನನ್ನ ಒಳ್ಳೆಯ ಸ್ನೇಹಿತರು", "Nīvu nanna oḷḷeya snēhitaru", "You are my good friend"],
      ["ನಾವು ಒಟ್ಟಿಗೆ ಹೋಗೋಣ", "Nāvu oṭṭige hōgōṇa", "Let's go together"],
      ["ನಿಮ್ಮ ಜೊತೆ ಸಮಯ ಕಳೆಯುವುದು ಚೆನ್ನಾಗಿದೆ", "Nimma jote samaya kaḷeyuvudu chennāgide", "It's nice spending time with you"]
    ],
    questions: [
      ['What does "ಸ್ನೇಹಿತರು" mean?', ["Friends", "Parents", "Teachers", "Doctors"], "Friends"],
      ['Which phrase means "Let\'s be friends"?', ["ನಾವು ಸ್ನೇಹಿತರಾಗೋಣ", "ನಮಸ್ಕಾರ", "ನನಗೆ ನೀರು ಬೇಕು", "ಬೇಡ"], "ನಾವು ಸ್ನೇಹಿತರಾಗೋಣ"],
      ['What does "ಒಳ್ಳೆಯ" mean?', ["Good", "Bad", "Late", "Far"], "Good"],
      ['What does "ಒಟ್ಟಿಗೆ ಹೋಗೋಣ" mean?', ["Let's go together", "Let's sleep now", "I am going alone", "Please wait"], "Let's go together"],
      ['Which phrase says it is nice spending time with someone?', ["ನಿಮ್ಮ ಜೊತೆ ಸಮಯ ಕಳೆಯುವುದು ಚೆನ್ನಾಗಿದೆ", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ನನಗೆ ಜ್ವರ ಬಂದಿದೆ", "ಬಾಗಿಲು ಮುಚ್ಚಿ"], "ನಿಮ್ಮ ಜೊತೆ ಸಮಯ ಕಳೆಯುವುದು ಚೆನ್ನಾಗಿದೆ"]
    ]
  },
  {
    title: "Saying Goodbye",
    phrases: [
      ["ವಿದಾಯ", "Vidāya", "Goodbye"],
      ["ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ", "Matte bhēṭiyāgōṇa", "Let's meet again"],
      ["ಜಾಗ್ರತೆಯಿಂದ ಹೋಗಿ", "Jāgratheyinda hōgi", "Go carefully / Take care"],
      ["ಶುಭ ರಾತ್ರಿ", "Śubha rātri", "Good night"],
      ["ನಿಮ್ಮ ದಿನ ಚೆನ್ನಾಗಿರಲಿ", "Nimma dina chennāgirali", "Have a nice day"]
    ],
    questions: [
      ['What does "ವಿದಾಯ" mean?', ["Goodbye", "Hello", "Welcome", "Sorry"], "Goodbye"],
      ['Which phrase means "Good night"?', ["ಶುಭ ರಾತ್ರಿ", "ಶುಭೋದಯ", "ನಮಸ್ಕಾರ", "ಧನ್ಯವಾದಗಳು"], "ಶುಭ ರಾತ್ರಿ"],
      ['What does "ಜಾಗ್ರತೆಯಿಂದ ಹೋಗಿ" mean?', ["Go carefully / Take care", "Come quickly", "Sit here", "Eat well"], "Go carefully / Take care"],
      ['Which phrase means "Let\'s meet again"?', ["ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ", "ನನಗೆ ನೀರು ಬೇಕು", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ಬೇಡ"], "ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ"],
      ['What does "ನಿಮ್ಮ ದಿನ ಚೆನ್ನಾಗಿರಲಿ" mean?', ["Have a nice day", "Where are you?", "I am hungry", "What is your name?"], "Have a nice day"]
    ]
  },
  {
    title: "Everyday Conversation Practice",
    phrases: [
      ["ನಿಮಗೆ ಕನ್ನಡ ಬರುತ್ತದೆಯೇ?", "Nimage Kannada baruttadeyē?", "Do you know Kannada?"],
      ["ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ", "Nānu Kannada kaliyuttiddēne", "I am learning Kannada"],
      ["ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ", "Dayaviṭṭu nidhānavāgi mātanāḍi", "Please speak slowly"],
      ["ನಿಮ್ಮ ಮಾತು ನನಗೆ ಅರ್ಥವಾಯಿತು", "Nimma mātu nanage arthavāyitu", "I understood what you said"],
      ["ನಾನು ಪ್ರತಿದಿನ ಅಭ್ಯಾಸ ಮಾಡುತ್ತೇನೆ", "Nānu pratidina abhyāsa māḍuttēne", "I practise every day"]
    ],
    questions: [
      ['What does "ಕನ್ನಡ" mean?', ["Kannada", "Hindi", "English", "Tamil"], "Kannada"],
      ['Which phrase means "I am learning Kannada"?', ["ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ", "ನನಗೆ ನೀರು ಬೇಕು", "ಮತ್ತೆ ಸಿಗೋಣ"], "ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ"],
      ['What does "ನಿಧಾನವಾಗಿ" mean?', ["Slowly", "Quickly", "Loudly", "Tomorrow"], "Slowly"],
      ['What does "ಪ್ರತಿದಿನ" mean?', ["Every day", "Once a year", "Yesterday", "Next week"], "Every day"],
      ['Which phrase asks someone to speak slowly?', ["ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ", "ನಮಸ್ಕಾರ", "ವಿದಾಯ", "ನನಗೆ ಹಸಿವಾಗಿದೆ"], "ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ"]
    ]
  },
  {
    title: "Talking About Learning",
    phrases: [
      ["ಕನ್ನಡ ಕಲಿಯುವುದು ನನಗೆ ಇಷ್ಟ", "Kannada kaliyuvudu nanage iṣṭa", "I like learning Kannada"],
      ["ಈ ಪದದ ಅರ್ಥ ಏನು?", "Ī padada artha ēnu?", "What is the meaning of this word?"],
      ["ನಾನು ಹೊಸ ಪದಗಳನ್ನು ಕಲಿಯುತ್ತೇನೆ", "Nānu hosa padagaḷannu kaliyuttēne", "I learn new words"],
      ["ನನ್ನ ಉಚ್ಚಾರಣೆ ಸರಿಯಿದೆಯೇ?", "Nanna uchchāraṇe sariyideyē?", "Is my pronunciation correct?"],
      ["ನಾನು ಇನ್ನಷ್ಟು ಅಭ್ಯಾಸ ಮಾಡಬೇಕು", "Nānu innasṭu abhyāsa māḍabēku", "I need to practise more"]
    ],
    questions: [
      ['What does "ಅರ್ಥ" mean?', ["Meaning", "Name", "Road", "House"], "Meaning"],
      ['Which phrase means "I learn new words"?', ["ನಾನು ಹೊಸ ಪದಗಳನ್ನು ಕಲಿಯುತ್ತೇನೆ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ", "ನಾನು ಊಟ ಮಾಡುತ್ತೇನೆ", "ನನಗೆ ಜ್ವರ ಬಂದಿದೆ"], "ನಾನು ಹೊಸ ಪದಗಳನ್ನು ಕಲಿಯುತ್ತೇನೆ"],
      ['What does "ಉಚ್ಚಾರಣೆ" mean?', ["Pronunciation", "Weather", "Family", "Ticket"], "Pronunciation"],
      ['Which phrase asks if pronunciation is correct?', ["ನನ್ನ ಉಚ್ಚಾರಣೆ ಸರಿಯಿದೆಯೇ?", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ನೀರು ಎಲ್ಲಿದೆ?", "ಮತ್ತೆ ಸಿಗೋಣ"], "ನನ್ನ ಉಚ್ಚಾರಣೆ ಸರಿಯಿದೆಯೇ?"],
      ['What does "ಇನ್ನಷ್ಟು" mean?', ["More", "Less", "Never", "Yesterday"], "More"]
    ]
  },
  {
    title: "Making Weekend Plans",
    phrases: [
      ["ವಾರಾಂತ್ಯದಲ್ಲಿ ಏನು ಮಾಡುತ್ತೀರಿ?", "Vārāntyadalli ēnu māḍuttīri?", "What will you do on the weekend?"],
      ["ನಾನು ಸ್ನೇಹಿತರ ಜೊತೆ ಹೊರಗೆ ಹೋಗುತ್ತೇನೆ", "Nānu snēhitara jote horage hōguttēne", "I will go out with friends"],
      ["ನಾವು ಉದ್ಯಾನವನಕ್ಕೆ ಹೋಗೋಣ", "Nāvu udyānavanakke hōgōṇa", "Let's go to the park"],
      ["ನಾನು ಮನೆಯಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತೇನೆ", "Nānu maneyalli viśrānti paḍeyuttēne", "I will rest at home"],
      ["ನಿಮ್ಮ ಯೋಜನೆ ಚೆನ್ನಾಗಿದೆ", "Nimma yōjane chennāgide", "Your plan is good"]
    ],
    questions: [
  ['What does "ವಾರಾಂತ್ಯ" mean?', ["Weekend", "Morning", "Month", "Holiday ticket"], "Weekend"],
  ['Which phrase means "Let\'s go to the park"?', ["ನಾವು ಉದ್ಯಾನವನಕ್ಕೆ ಹೋಗೋಣ", "ನಾನು ಮನೆಯಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತೇನೆ", "ನಮಸ್ಕಾರ", "ನನಗೆ ನೀರು ಬೇಕು"], "ನಾವು ಉದ್ಯಾನವನಕ್ಕೆ ಹೋಗೋಣ"],
  ['What does "ಹೊರಗೆ" mean?', ["Outside", "Inside", "Tomorrow", "Yesterday"], "Outside"],
  ['Which phrase means "I will rest at home"?', ["ನಾನು ಮನೆಯಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತೇನೆ", "ನಾನು ಸ್ನೇಹಿತರ ಜೊತೆ ಹೊರಗೆ ಹೋಗುತ್ತೇನೆ", "ನೀವು ಎಲ್ಲಿಂದ ಬಂದಿದ್ದೀರಿ?", "ವಿದಾಯ"], "ನಾನು ಮನೆಯಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತೇನೆ"],
  ['What does "ಯೋಜನೆ" mean?', ["Plan", "Price", "Food", "Name"], "Plan"]
]
  },
  {
    title: "Talking About Goals",
    phrases: [
      ["ನನ್ನ ಗುರಿ ಕನ್ನಡವನ್ನು ಚೆನ್ನಾಗಿ ಕಲಿಯುವುದು", "Nanna guri Kannadavannu chennāgi kaliyuvudu", "My goal is to learn Kannada well"],
      ["ನಾನು ಪ್ರತಿದಿನ ಹೊಸದನ್ನು ಕಲಿಯುತ್ತೇನೆ", "Nānu pratidina hosadannu kaliyuttēne", "I learn something new every day"],
      ["ನಾನು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದೇನೆ", "Nānu prayatnisuttiddēne", "I am trying"],
      ["ನಾನು ತಪ್ಪುಗಳಿಂದ ಕಲಿಯುತ್ತೇನೆ", "Nānu tappugaḷinda kaliyuttēne", "I learn from mistakes"],
      ["ನಾನು ಖಂಡಿತವಾಗಿ ಸುಧಾರಿಸುತ್ತೇನೆ", "Nānu khaṇḍitavāgi sudhārisuttēne", "I will definitely improve"]
    ],
    questions: [
      ['What does "ಗುರಿ" mean?', ["Goal", "Mistake", "Food", "Friend"], "Goal"],
      ['Which phrase means "I am trying"?', ["ನಾನು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದೇನೆ", "ನಾನು ಮಲಗುತ್ತಿದ್ದೇನೆ", "ನನಗೆ ನೀರು ಬೇಕು", "ವಿದಾಯ"], "ನಾನು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದೇನೆ"],
      ['What does "ತಪ್ಪುಗಳು" mean?', ["Mistakes", "Goals", "Friends", "Books"], "Mistakes"],
      ['Which phrase means "I learn from mistakes"?', ["ನಾನು ತಪ್ಪುಗಳಿಂದ ಕಲಿಯುತ್ತೇನೆ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ", "ನನಗೆ ಹಸಿವಾಗಿದೆ", "ನಿಮ್ಮ ಹೆಸರು ಏನು?"], "ನಾನು ತಪ್ಪುಗಳಿಂದ ಕಲಿಯುತ್ತೇನೆ"],
      ['What does "ಸುಧಾರಿಸುತ್ತೇನೆ" mean?', ["I will improve", "I will leave", "I will sleep", "I will forget"], "I will improve"]
    ]
  },
  {
    title: "Handling Misunderstandings",
    phrases: [
      ["ನನಗೆ ನಿಮ್ಮ ಮಾತು ಅರ್ಥವಾಗಲಿಲ್ಲ", "Nanage nimma mātu arthavāgalilla", "I did not understand what you said"],
      ["ದಯವಿಟ್ಟು ಮತ್ತೆ ವಿವರಿಸಿ", "Dayaviṭṭu matte vivarisi", "Please explain again"],
      ["ನಾನು ತಪ್ಪಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡೆ", "Nānu tappāgi arthamāḍikoṇḍe", "I misunderstood"],
      ["ಈಗ ನನಗೆ ಅರ್ಥವಾಯಿತು", "Īga nanage arthavāyitu", "Now I understand"],
      ["ನಿಮ್ಮ ತಾಳ್ಮೆಗೆ ಧನ್ಯವಾದಗಳು", "Nimma tāḷmege dhanyavādagaḷu", "Thank you for your patience"]
    ],
    questions: [
      ['What does "ವಿವರಿಸಿ" mean?', ["Explain", "Leave", "Eat", "Sleep"], "Explain"],
      ['Which phrase means "I misunderstood"?', ["ನಾನು ತಪ್ಪಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡೆ", "ಈಗ ನನಗೆ ಅರ್ಥವಾಯಿತು", "ನಮಸ್ಕಾರ", "ನನಗೆ ನೀರು ಬೇಕು"], "ನಾನು ತಪ್ಪಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡೆ"],
      ['What does "ಈಗ" mean?', ["Now", "Later", "Never", "Yesterday"], "Now"],
      ['Which phrase thanks someone for their patience?', ["ನಿಮ್ಮ ತಾಳ್ಮೆಗೆ ಧನ್ಯವಾದಗಳು", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ", "ವಿದಾಯ"], "ನಿಮ್ಮ ತಾಳ್ಮೆಗೆ ಧನ್ಯವಾದಗಳು"],
      ['What does "ಅರ್ಥವಾಯಿತು" mean?', ["Understood", "Forgot", "Arrived", "Left"], "Understood"]
    ]
  },
  {
    title: "Inviting and Responding",
    phrases: [
      ["ನೀವು ನಮ್ಮ ಜೊತೆ ಬರುತ್ತೀರಾ?", "Nīvu namma jote baruttīrā?", "Will you come with us?"],
      ["ಹೌದು, ಖಂಡಿತ ಬರುತ್ತೇನೆ", "Haudu, khaṇḍita baruttēne", "Yes, I will definitely come"],
      ["ಕ್ಷಮಿಸಿ, ನನಗೆ ಸಮಯವಿಲ್ಲ", "Kṣamisi, nanage samayavilla", "Sorry, I don't have time"],
      ["ಮುಂದಿನ ಬಾರಿ ಖಂಡಿತ", "Mundina bāri khaṇḍita", "Definitely next time"],
      ["ನಿಮ್ಮ ಆಹ್ವಾನಕ್ಕೆ ಧನ್ಯವಾದಗಳು", "Nimma āhvānakke dhanyavādagaḷu", "Thank you for your invitation"]
    ],
    questions: [
      ['What does "ನಮ್ಮ ಜೊತೆ" mean?', ["With us", "Without us", "At home", "Tomorrow"], "With us"],
      ['Which phrase means "Yes, I will definitely come"?', ["ಹೌದು, ಖಂಡಿತ ಬರುತ್ತೇನೆ", "ಕ್ಷಮಿಸಿ, ನನಗೆ ಸಮಯವಿಲ್ಲ", "ವಿದಾಯ", "ನನಗೆ ನೀರು ಬೇಕು"], "ಹೌದು, ಖಂಡಿತ ಬರುತ್ತೇನೆ"],
      ['What does "ಸಮಯವಿಲ್ಲ" mean?', ["Have no time", "Have lots of time", "Have money", "Have food"], "Have no time"],
      ['What does "ಮುಂದಿನ ಬಾರಿ" mean?', ["Next time", "Last time", "Every day", "Right now"], "Next time"],
      ['Which phrase thanks someone for an invitation?', ["ನಿಮ್ಮ ಆಹ್ವಾನಕ್ಕೆ ಧನ್ಯವಾದಗಳು", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", "ನನಗೆ ಹಸಿವಾಗಿದೆ"], "ನಿಮ್ಮ ಆಹ್ವಾನಕ್ಕೆ ಧನ್ಯವಾದಗಳು"]
    ]
  },
  {
    title: "Review: Everyday Conversations",
    phrases: [
      ["ನಮಸ್ಕಾರ, ಹೇಗಿದ್ದೀರಾ?", "Namaskāra, hēgiddīrā?", "Hello, how are you?"],
      ["ನನ್ನ ಹೆಸರು ಮೋನಿಕಾ", "Nanna hesaru Mōnikā", "My name is Monika"],
      ["ನನಗೆ ಕನ್ನಡ ಕಲಿಯುವುದು ಇಷ್ಟ", "Nanage Kannada kaliyuvudu iṣṭa", "I like learning Kannada"],
      ["ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ", "Dayaviṭṭu nidhānavāgi mātanāḍi", "Please speak slowly"],
      ["ಧನ್ಯವಾದಗಳು, ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ", "Dhanyavādagaḷu, matte bhēṭiyāgōṇa", "Thank you, let's meet again"]
    ],
    questions: [
  ['What does "ನಮಸ್ಕಾರ" mean?', ["Hello", "Goodbye", "Sorry", "Never"], "Hello"],
  ['How do you say "My name is Monika"?', ["ನನ್ನ ಹೆಸರು ಮೋನಿಕಾ", "ನಿಮ್ಮ ಹೆಸರು ಏನು?", "ನನಗೆ ನೀರು ಬೇಕು", "ವಿದಾಯ"], "ನನ್ನ ಹೆಸರು ಮೋನಿಕಾ"],
  ['Which phrase means "Please speak slowly"?', ["ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ", "ಮತ್ತೆ ಸಿಗೋಣ", "ನನಗೆ ಹಸಿವಾಗಿದೆ", "ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ"], "ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ"],
  ['What does "ಧನ್ಯವಾದಗಳು" mean?', ["Thank you", "Hello", "Good night", "Help"], "Thank you"],
  ['Which phrase means "Let’s meet again"?', ["ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ", "ನನಗೆ ಜ್ವರ ಬಂದಿದೆ", "ನೀರು ಕೊಡಿ", "ನನ್ನ ಹೆಸರು ರವಿ"], "ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ"]
]
  }
];

function convertLesson(lesson) {
  return {
    title: lesson.title,
    phrases: lesson.phrases.map(([kannada, pronunciation, meaning]) => ({
      kannada,
      pronunciation,
      meaning
    })),
    questions: lesson.questions.map(([question, options, answer]) => ({
      question,
      options,
      answer
    }))
  };
}

const extraContent = {
  shopping: [
    ["ಇದು ಎಷ್ಟು?", "Idu eshtu?", "How much is this?"],
    ["ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ", "Svalpa kadime maadi", "Please reduce the price"],
    ["ನನಗೆ ಇದು ಬೇಕು", "Nanage idu beku", "I want this"],
    ["ಬೇರೆ ಬಣ್ಣ ಇದೆಯೇ?", "Bere banna ideye?", "Is another colour available?"],
    ["ರಸೀದಿ ಕೊಡಿ", "Raseedi kodi", "Please give me a receipt"],
    ["ನಾನು ಹಣ ಕೊಡುತ್ತೇನೆ", "Naanu hana koduttene", "I will pay"],
    ["ಚೀಲ ಬೇಕು", "Cheela beku", "I need a bag"],
    ["ಇದು ತುಂಬಾ ದುಬಾರಿ", "Idu tumba dubaari", "This is very expensive"]
  ],
  travel: [
    ["ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", "Bus nildana ellide?", "Where is the bus stop?"],
    ["ನೇರವಾಗಿ ಹೋಗಿ", "Neravagi hogi", "Go straight"],
    ["ಎಡಕ್ಕೆ ತಿರುಗಿ", "Edakke tirugi", "Turn left"],
    ["ಬಲಕ್ಕೆ ತಿರುಗಿ", "Balakke tirugi", "Turn right"],
    ["ನನಗೆ ಒಂದು ಟಿಕೆಟ್ ಬೇಕು", "Nanage ondu ticket beku", "I need one ticket"],
    ["ರೈಲು ಯಾವಾಗ ಬರುತ್ತದೆ?", "Railu yavaga baruttade?", "When does the train arrive?"],
    ["ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ", "Illi nillisiri", "Please stop here"],
    ["ನಾನು ಆಟೋದಲ್ಲಿ ಹೋಗುತ್ತೇನೆ", "Naanu auto dalli hoguttene", "I will go by auto"]
  ],
  food: [
    ["ನನಗೆ ಹಸಿವಾಗಿದೆ", "Nanage hasivagide", "I am hungry"],
    ["ನನಗೆ ನೀರು ಬೇಕು", "Nanage neeru beku", "I need water"],
    ["ಊಟ ಸಿದ್ಧವಾಗಿದೆ", "Oota siddhavagide", "The meal is ready"],
    ["ಇದು ತುಂಬಾ ರುಚಿಯಾಗಿದೆ", "Idu tumba ruchiyagide", "This is very tasty"],
    ["ಮೆನು ತೋರಿಸಿ", "Menu torisi", "Please show me the menu"],
    ["ನನಗೆ ಚಹಾ ಬೇಕು", "Nanage chaha beku", "I want tea"],
    ["ಬಿಲ್ ತಂದುಕೊಡಿ", "Bill tandukodi", "Please bring the bill"],
    ["ನಾನು ಸಸ್ಯಾಹಾರಿ", "Naanu sasyahaari", "I am vegetarian"]
  ],
  culture: [
    ["ಹಬ್ಬದ ಶುಭಾಶಯಗಳು", "Habbada shubhashayagalu", "Festival greetings"],
    ["ದೀಪಾವಳಿ ಶುಭಾಶಯಗಳು", "Deepavali shubhashayagalu", "Happy Deepavali"],
    ["ಯುಗಾದಿ ಹಬ್ಬದ ಶುಭಾಶಯಗಳು", "Yugadi habbada shubhashayagalu", "Happy Ugadi"],
    ["ಸಂಕ್ರಾಂತಿ ಶುಭಾಶಯಗಳು", "Sankranti shubhashayagalu", "Happy Sankranti"],
    ["ನಾವು ಹಬ್ಬವನ್ನು ಆಚರಿಸುತ್ತೇವೆ", "Naavu habbavannu aacharisutteve", "We celebrate the festival"],
    ["ನಿಮ್ಮ ಊರು ಯಾವುದು?", "Nimma ooru yavudu?", "What is your hometown?"],
    ["ಇದು ನಮ್ಮ ಸಂಪ್ರದಾಯ", "Idu namma sampradaya", "This is our tradition"],
    ["ನನಗೆ ಕನ್ನಡ ಸಂಸ್ಕೃತಿ ಇಷ್ಟ", "Nanage Kannada samskruti ishta", "I like Kannada culture"]
  ],
  family: [
    ["ಇದು ನನ್ನ ಕುಟುಂಬ", "Idu nanna kutumba", "This is my family"],
    ["ಇವರು ನನ್ನ ತಾಯಿ", "Ivaru nanna taayi", "This is my mother"],
    ["ಇವರು ನನ್ನ ತಂದೆ", "Ivaru nanna tande", "This is my father"],
    ["ನನಗೆ ಒಬ್ಬ ಅಣ್ಣ ಇದ್ದಾನೆ", "Nanage obba anna iddane", "I have an older brother"],
    ["ನನಗೆ ಒಬ್ಬ ತಂಗಿ ಇದ್ದಾಳೆ", "Nanage obba tangi iddale", "I have a younger sister"],
    ["ನನ್ನ ಅಜ್ಜಿ ಮನೆಯಲ್ಲಿದ್ದಾರೆ", "Nanna ajji maneyalliddare", "My grandmother is at home"],
    ["ನಾವು ಒಟ್ಟಿಗೆ ವಾಸಿಸುತ್ತೇವೆ", "Naavu ottige vasisutteve", "We live together"],
    ["ನಾನು ನನ್ನ ಕುಟುಂಬವನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ", "Naanu nanna kutumbavannu preetisuttene", "I love my family"]
  ],
  education: [
    ["ನಾನು ಕಾಲೇಜಿನಲ್ಲಿ ಓದುತ್ತಿದ್ದೇನೆ", "Naanu college nalli oduttiddene", "I study in college"],
    ["ನನ್ನ ತರಗತಿ ಎಲ್ಲಿದೆ?", "Nanna taragati ellide?", "Where is my classroom?"],
    ["ಇಂದು ಪಾಠ ಇದೆಯೇ?", "Indu paatha ideye?", "Is there a lesson today?"],
    ["ನಾನು ಗೃಹಪಾಠ ಮುಗಿಸಿದ್ದೇನೆ", "Naanu gruhapaatha mugisiddene", "I finished my homework"],
    ["ನಾಳೆ ಪರೀಕ್ಷೆ ಇದೆ", "Naale parikshe ide", "There is an exam tomorrow"],
    ["ನನಗೆ ಒಂದು ಪ್ರಶ್ನೆ ಇದೆ", "Nanage ondu prashne ide", "I have a question"],
    ["ದಯವಿಟ್ಟು ವಿವರಿಸಿ", "Dayavittu vivarisi", "Please explain"],
    ["ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ", "Naanu Kannada kaliyuttiddene", "I am learning Kannada"]
  ],
  work: [
    ["ನಾನು ಕಚೇರಿಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ", "Naanu kacheriyalli kelasa maduttene", "I work in an office"],
    ["ಸಭೆ ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ?", "Sabhe yavaga prarambhavaguttade?", "When does the meeting start?"],
    ["ನಾನು ವರದಿಯನ್ನು ಕಳುಹಿಸಿದ್ದೇನೆ", "Naanu varadiyannu kaluhisiddene", "I have sent the report"],
    ["ದಯವಿಟ್ಟು ನನಗೆ ಇಮೇಲ್ ಮಾಡಿ", "Dayavittu nanage email maadi", "Please email me"],
    ["ನಾನು ಕೆಲಸ ಮುಗಿಸಿದ್ದೇನೆ", "Naanu kelasa mugisiddene", "I have finished the work"],
    ["ನನಗೆ ಸಹಾಯ ಬೇಕು", "Nanage sahaya beku", "I need help"],
    ["ನಾನು ಇಂದು ಬಿಡುವಿನಲ್ಲಿದ್ದೇನೆ", "Naanu indu biduvinalliddene", "I am off today"],
    ["ನಾಳೆ ಮಾತನಾಡೋಣ", "Naale maatadona", "Let's talk tomorrow"]
  ],
  health: [
    ["ನನಗೆ ಆರೋಗ್ಯ ಸರಿಯಿಲ್ಲ", "Nanage aarogya sariyilla", "I am not feeling well"],
    ["ನನಗೆ ತಲೆನೋವು ಇದೆ", "Nanage talenovu ide", "I have a headache"],
    ["ನನಗೆ ಜ್ವರ ಬಂದಿದೆ", "Nanage jvara bandide", "I have a fever"],
    ["ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಕರೆಸಿ", "Dayavittu vaidyaranannu karesi", "Please call the doctor"],
    ["ನನಗೆ ಔಷಧಿ ಬೇಕು", "Nanage aushadhi beku", "I need medicine"],
    ["ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿದೆ?", "Aspatre ellide?", "Where is the hospital?"],
    ["ನನಗೆ ವಿಶ್ರಾಂತಿ ಬೇಕು", "Nanage vishranti beku", "I need rest"],
    ["ನೋವು ತುಂಬಾ ಇದೆ", "Novu tumba ide", "The pain is severe"]
  ],
  emergency: [
    ["ನನಗೆ ಸಹಾಯ ಬೇಕು", "Nanage sahaya beku", "I need help"],
    ["ದಯವಿಟ್ಟು ಪೊಲೀಸರನ್ನು ಕರೆಸಿ", "Dayavittu police annu karesi", "Please call the police"],
    ["ಆಂಬುಲೆನ್ಸ್ ಕರೆಸಿ", "Ambulance karesi", "Call an ambulance"],
    ["ನಾನು ದಾರಿ ತಪ್ಪಿದ್ದೇನೆ", "Naanu daari tappiddene", "I am lost"],
    ["ನಿಲ್ಲಿಸಿ!", "Nillisiri!", "Stop!"],
    ["ಅಪಾಯವಿದೆ", "Apayavide", "There is danger"],
    ["ನನ್ನ ಫೋನ್ ಕಳೆದುಹೋಗಿದೆ", "Nanna phone kaleduhogide", "I lost my phone"],
    ["ದಯವಿಟ್ಟು ಬೇಗ ಬನ್ನಿ", "Dayavittu bega banni", "Please come quickly"]
  ],
  home: [
    ["ನಾನು ಮನೆಗೆ ಬಂದೆ", "Naanu manege bande", "I came home"],
    ["ಬಾಗಿಲು ಮುಚ್ಚಿ", "Bagilu mucchi", "Close the door"],
    ["ದೀಪ ಹಚ್ಚಿ", "Deepa hacchi", "Turn on the light"],
    ["ನನಗೆ ಸ್ವಲ್ಪ ವಿಶ್ರಾಂತಿ ಬೇಕು", "Nanage svalpa vishranti beku", "I need some rest"],
    ["ನಾವು ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡೋಣ", "Naavu ottige oota madona", "Let's eat together"],
    ["ನೀರು ಎಲ್ಲಿದೆ?", "Neeru ellide?", "Where is the water?"],
    ["ಮನೆ ಸ್ವಚ್ಛವಾಗಿದೆ", "Mane svachchhavAgide", "The house is clean"],
    ["ನಾನು ಬಟ್ಟೆ ಒಗೆಯುತ್ತೇನೆ", "Naanu batte ogeyuttene", "I wash clothes"]
  ],
  time: [
    ["ಈಗ ಎಷ್ಟು ಗಂಟೆ?", "Eega eshtu gante?", "What time is it now?"],
    ["ಈಗ ಹತ್ತು ಗಂಟೆ", "Eega hattu gante", "It is ten o'clock"],
    ["ನಾನು ತಡವಾಗಿದ್ದೇನೆ", "Naanu tadavagiddene", "I am late"],
    ["ದಯವಿಟ್ಟು ಬೇಗ ಬನ್ನಿ", "Dayavittu bega banni", "Please come quickly"],
    ["ನಾಳೆ ಬೆಳಿಗ್ಗೆ ಭೇಟಿಯಾಗೋಣ", "Naale beligge bhetiyagona", "Let's meet tomorrow morning"],
    ["ಇಂದು ಯಾವ ದಿನ?", "Indu yaava dina?", "What day is it today?"],
    ["ಇಂದು ಮಳೆ ಬರುತ್ತಿದೆ", "Indu male baruttide", "It is raining today"],
    ["ಹವಾಮಾನ ತಂಪಾಗಿದೆ", "Havamaana tampaagide", "The weather is cool"]
  ],
  directions: [
    ["ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", "Bus nildana ellide?", "Where is the bus stop?"],
    ["ನೇರವಾಗಿ ಹೋಗಿ", "Neravagi hogi", "Go straight"],
    ["ಎಡಕ್ಕೆ ತಿರುಗಿ", "Edakke tirugi", "Turn left"],
    ["ಬಲಕ್ಕೆ ತಿರುಗಿ", "Balakke tirugi", "Turn right"],
    ["ಇದು ಎಷ್ಟು ದೂರ?", "Idu eshtu doora?", "How far is it?"],
    ["ಹತ್ತಿರದಲ್ಲಿದೆಯೇ?", "Hattiradallideye?", "Is it nearby?"],
    ["ನನಗೆ ದಾರಿ ತೋರಿಸಿ", "Nanage daari torisi", "Please show me the way"],
    ["ನಾನು ದಾರಿ ತಪ್ಪಿದ್ದೇನೆ", "Naanu daari tappiddene", "I am lost"]
  ],
  social: [
    ["ನಾವು ಸ್ನೇಹಿತರಾಗೋಣ", "Naavu snehitaraagona", "Let's be friends"],
    ["ನಿಮ್ಮನ್ನು ಮತ್ತೆ ನೋಡಲು ಸಂತೋಷ", "Nimmannu matte nodalu santosha", "Happy to see you again"],
    ["ನೀವು ನನ್ನ ಒಳ್ಳೆಯ ಸ್ನೇಹಿತರು", "Neevu nanna olleya snehitaru", "You are my good friend"],
    ["ನಾವು ಒಟ್ಟಿಗೆ ಹೋಗೋಣ", "Naavu ottige hogona", "Let's go together"],
    ["ನಿಮ್ಮ ಜೊತೆ ಮಾತನಾಡಲು ಸಂತೋಷ", "Nimma jote maatanaadalu santosha", "Nice talking with you"],
    ["ನಿಮಗೆ ಸಮಯ ಇದೆಯೇ?", "Nimage samaya ideye?", "Do you have time?"],
    ["ನಾಳೆ ಭೇಟಿಯಾಗೋಣ", "Naale bhetiyagona", "Let's meet tomorrow"],
    ["ನಿಮ್ಮ ದಿನ ಚೆನ್ನಾಗಿರಲಿ", "Nimma dina chennagirali", "Have a nice day"]
  ],
  advanced: [
    ["ನನಗೆ ಕನ್ನಡ ಸ್ವಲ್ಪ ಬರುತ್ತದೆ", "Nanage Kannada svalpa baruttade", "I know a little Kannada"],
    ["ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ", "Dayavittu nidhaanavaagi maatanaadi", "Please speak slowly"],
    ["ಈ ಪದದ ಅರ್ಥ ಏನು?", "Ee padada artha enu?", "What does this word mean?"],
    ["ನಾನು ಪ್ರತಿದಿನ ಅಭ್ಯಾಸ ಮಾಡುತ್ತೇನೆ", "Naanu pratidina abhyaasa maduttene", "I practise every day"],
    ["ನಮ್ಮ ಕರ್ನಾಟಕ ಸುಂದರವಾಗಿದೆ", "Namma Karnataka sundaravagide", "Our Karnataka is beautiful"],
    ["ನನಗೆ ಕನ್ನಡ ಸಂಸ್ಕೃತಿ ಇಷ್ಟ", "Nanage Kannada samskruti ishta", "I like Kannada culture"],
    ["ನಾನು ಇನ್ನಷ್ಟು ಕಲಿಯಬೇಕು", "Naanu innashtu kaliyabeku", "I want to learn more"],
    ["ನಿಮ್ಮ ತಾಳ್ಮೆಗೆ ಧನ್ಯವಾದಗಳು", "Nimma taalmege dhanyavaadagalu", "Thank you for your patience"]
  ]
};

const lessonTitles = {
  shopping: ["Asking Prices", "Bargaining Politely", "Choosing Products", "Colours and Sizes", "Paying at Shops"],
  travel: ["Finding the Bus Stop", "Giving Directions", "Buying Tickets", "Travelling by Bus", "Getting Around Town"],
  food: ["Ordering Food", "Asking for Water", "Talking About Taste", "At a Restaurant", "Paying the Bill"],
  culture: ["Festival Greetings", "Ugadi and Deepavali", "Karnataka Traditions", "Family Celebrations", "Talking About Culture"],
  family: ["Introducing Your Family", "Parents and Grandparents", "Brothers and Sisters", "Talking About Home", "Family Activities"],
  education: ["At College", "In the Classroom", "Asking Questions", "Homework and Exams", "Learning Kannada"],
  work: ["Introducing Your Job", "Office Conversations", "Meetings and Reports", "Asking for Help", "Work Schedules"],
  health: ["Describing Symptoms", "At the Hospital", "Talking to a Doctor", "Medicine and Rest", "Asking for Care"],
  emergency: ["Asking for Help", "Calling the Police", "Medical Emergencies", "Finding Your Way", "Staying Safe"],
  home: ["Coming Home", "Household Requests", "Daily Chores", "Food at Home", "Cleaning and Rest"],
  time: ["Asking the Time", "Talking About Days", "Making Appointments", "Weather Words", "Morning and Evening"],
  directions: ["Finding Places", "Left and Right", "Asking How Far", "Finding Nearby Places", "Explaining a Route"],
  social: ["Making Friends", "Inviting Someone", "Making Plans", "Talking Together", "Saying Goodbye"],
  advanced: ["Speaking More Kannada", "Understanding New Words", "Practising Daily", "Karnataka Culture", "Building Confidence"]
};

const moduleDescriptions = {
  shopping: "Shopping & Groceries",
  travel: "Travel & Transport",
  food: "Food & Restaurants",
  culture: "Festivals & Culture",
  family: "Family & Relationships",
  education: "Education & College",
  work: "Work & Careers",
  health: "Health & Hospital",
  emergency: "Emergencies & Safety",
  home: "Home & Daily Life",
  time: "Time, Dates & Weather",
  directions: "Places & Directions",
  social: "Friends & Social Life",
  advanced: "Karnataka & Advanced Kannada"
};

function createQuestions(phrases) {
  return phrases.map((phrase, index) => {
    const options = [
      phrase[2],
      phrases[(index + 1) % phrases.length][2],
      phrases[(index + 2) % phrases.length][2],
      phrases[(index + 3) % phrases.length][2]
    ];
    return [
      `What does "${phrase[0]}" mean?`,
      [...new Set(options)].length === 4 ? options : [
        phrase[2],
        "Please help me",
        "Where is it?",
        "Thank you"
      ],
      phrase[2]
    ];
  });
}

export const modules = moduleInfo.map((module) => ({
  ...module,
  lessons: Array.from({ length: lessonsPerModule }, (_, index) => {
    if (module.id === "conversations" && conversations[index]) {
      return convertLesson(conversations[index]);
    }

    const bank = extraContent[module.id];

    if (!bank) {
      return {
        title: `Lesson ${index + 1}`,
        phrases: [],
        questions: []
      };
    }

    const start = (index * 3) % bank.length;
    const selected = Array.from({ length: 5 }, (_, offset) =>
      bank[(start + offset) % bank.length]
    );

    const titles = lessonTitles[module.id] || [module.title];
    const topic = titles[index % titles.length];

    return {
      title: `${topic} — Part ${index + 1}`,
      phrases: selected.map(([kannada, pronunciation, meaning]) => ({
        kannada,
        pronunciation,
        meaning
      })),
      questions: createQuestions(selected).map(([question, options, answer]) => ({
        question,
        options,
        answer
      }))
    };
  })
}));