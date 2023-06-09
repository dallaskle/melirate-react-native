export const greetings = [
    "Hello there",
    "Hi friend",
    "Hey you",
    "Heya sunshine",
    "Good day",
    "Greetings",
    "Howdy partner",
    "Yo dude",
    "Sup bro",
    "What's up",
    "Hey there",
    "Hiya mate",
    //"Good morning",
    //"Good afternoon",
    //"Good evening",
    //"Goodnight",
    //"See ya later",
    "Take care",
    //"Catch you later",
    //"Bye for now",
    //"Peace out",
    //"Farewell",
    "Nice to see you",
    //"Long time no see",
    "Welcome back",
    "Welcome home",
    //"Happy Friday",
    //"Happy weekend",
    //"Happy Monday",
    "Have a good one",
    "How's it going",
    "What's happening",
    //"What's new",
    "How are you",
    "How's life",
    "Feeling good",
    "Feeling great",
    "Looking good",
    "Feeling fabulous",
    "You got this",
    "Keep it up",
    "Stay strong",
    "Stay focused",
    "Stay positive",
    "Never give up",
    "Believe in yourself",
    "You're awesome",
    "You rock",
    "You're the best",
    "Cheers mate",
    //"Hey beautiful",
    //"Hello handsome",
    "Howdy y'all",
    "What's crackin'",
    "Hiya neighbor",
    "Howdy ho",
    "Hello sunshine",
    "Hey stud",
    "Sup homie",
    "Good vibes",
    //"How's tricks",
    "Good karma",
    "Namaste friend",
    "What's cookin'",
    "High five",
    "Hugs and kisses",
    "You da bomb",
    "Love ya",
    "Hey champ",
    "Looking sharp",
    "Great job",
    "Keep shining",
    //"Top of the morning",
    //"Right back at ya",
    "Have a blessed day",
    "You're the bomb",
    "Glad to see you",
    "Nice to meet you",
    //"Pleased to meet you",
    "Welcome aboard",
    "How's your day",
    "You're fantastic",
    "You're amazing",
    "Thanks for being you",
    "Thanks for being awesome",
    "Good on ya"
  ];

export const getGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}