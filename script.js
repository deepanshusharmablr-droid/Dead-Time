const challenges = [

    // CHILL

    {
        title: "Photograph the ordinary",
        description: "Take 5 photos of things around you that you'd normally never notice.",
        vibes: ["chill", "random"],
        time: [10, 20, 30]
    },

    {
        title: "Make a terrible drawing",
        description: "Pick the closest object and draw it in 5 minutes. Don't erase anything.",
        vibes: ["chill", "random"],
        time: [10]
    },

    {
        title: "Build the perfect playlist",
        description: "Make a 10-song playlist for a very specific mood or situation.",
        vibes: ["chill"],
        time: [20, 30]
    },

    {
        title: "Watch the world",
        description: "Sit somewhere comfortable and spend 15 minutes simply observing what's happening around you.",
        vibes: ["chill"],
        time: [20]
    },

    {
        title: "Clean one tiny thing",
        description: "Pick one drawer, shelf, folder or corner and make it completely clean.",
        vibes: ["chill"],
        time: [10, 20, 30]
    },

    {
        title: "Make something useless",
        description: "Use whatever is around you to make something completely useless but surprisingly fun.",
        vibes: ["chill", "random"],
        time: [20, 30, 60]
    },

    {
        title: "Write without stopping",
        description: "Set a timer for 10 minutes and write whatever comes into your head. Don't edit anything.",
        vibes: ["chill", "random"],
        time: [10, 20]
    },


    // LEARN

    {
        title: "Learn 10 words",
        description: "Pick a language you've always wanted to learn and learn 10 useful words.",
        vibes: ["learn"],
        time: [10, 20, 30]
    },

    {
        title: "Learn Morse code",
        description: "Learn the basics of Morse code and see if you can send a message using it.",
        vibes: ["learn", "random"],
        time: [20, 30, 60]
    },

    {
        title: "Learn a magic trick",
        description: "Find one simple magic trick and practice it until you can perform it smoothly.",
        vibes: ["learn", "random"],
        time: [20, 30, 60]
    },

    {
        title: "Learn to tie 3 knots",
        description: "Learn three useful knots and practice tying each one from memory.",
        vibes: ["learn"],
        time: [20, 30]
    },

    {
        title: "Learn something from Wikipedia",
        description: "Pick a completely random topic and spend 20 minutes understanding how it works.",
        vibes: ["learn", "random"],
        time: [20, 30]
    },

    {
        title: "Learn a new shortcut",
        description: "Find 5 keyboard shortcuts you don't know and practice using them.",
        vibes: ["learn"],
        time: [10, 20]
    },

    {
        title: "Understand something complicated",
        description: "Pick one thing you've always wondered about and spend 30 minutes actually figuring it out.",
        vibes: ["learn"],
        time: [30, 60]
    },

    {
        title: "Learn to recognize the sky",
        description: "Learn the names of 3 different types of clouds and see if you can spot them.",
        vibes: ["learn", "chill"],
        time: [20, 30]
    },


    // MOVE

    {
        title: "Take a different route",
        description: "Walk somewhere you visit regularly, but take a route you've never taken before.",
        vibes: ["move", "random"],
        time: [20, 30, 60]
    },

    {
        title: "Learn to juggle",
        description: "Grab three objects and spend your free time trying to learn a basic three-ball juggling pattern.",
        vibes: ["move", "random"],
        time: [20, 30, 60]
    },

    {
        title: "Walk with no destination",
        description: "Leave your building and walk for 20 minutes without planning where you're going.",
        vibes: ["move", "random"],
        time: [20, 30]
    },

    {
        title: "Do a mobility reset",
        description: "Spend 15 minutes slowly stretching and moving every major joint in your body.",
        vibes: ["move"],
        time: [20, 30]
    },

    {
        title: "Try a new sport",
        description: "Pick a sport you've never properly tried and spend 30 minutes learning the basics.",
        vibes: ["move", "random"],
        time: [30, 60]
    },

    {
        title: "Climb some stairs",
        description: "Find a safe staircase and spend 15–20 minutes walking up and down at a comfortable pace.",
        vibes: ["move"],
        time: [20, 30]
    },

    {
        title: "Balance challenge",
        description: "See how long you can stand on one leg. Practice until you can beat your first attempt.",
        vibes: ["move", "random"],
        time: [10, 20]
    },

    {
        title: "Explore your neighbourhood",
        description: "Walk around your neighbourhood and find three places you've never noticed before.",
        vibes: ["move", "random"],
        time: [30, 60]
    },


    // SOCIAL

    {
        title: "Call someone",
        description: "Call a friend you haven't properly spoken to in a while. No texting. Actually call them.",
        vibes: ["social"],
        time: [10, 20, 30, 60]
    },

    {
        title: "Ask someone a real question",
        description: "Ask someone you know a question you've never asked them before and actually listen to their answer.",
        vibes: ["social"],
        time: [10, 20]
    },

    {
        title: "Send an appreciation message",
        description: "Think of someone who has helped you and send them a genuine message telling them.",
        vibes: ["social"],
        time: [10]
    },

    {
        title: "Meet someone for chai",
        description: "Ask a friend to grab a quick chai or coffee. No phones for the first 15 minutes.",
        vibes: ["social"],
        time: [30, 60]
    },

    {
        title: "Teach someone something",
        description: "Find something you know well and teach it to someone who doesn't.",
        vibes: ["social", "learn"],
        time: [20, 30]
    },

    {
        title: "Have a conversation with a stranger",
        description: "Start a completely normal, respectful conversation with someone you wouldn't usually talk to.",
        vibes: ["social", "random"],
        time: [10, 20]
    },


    // RANDOM

    {
        title: "Flip a coin",
        description: "Think of two things you've been undecided about. Flip a coin and notice which result you secretly hope for.",
        vibes: ["random"],
        time: [10]
    },

    {
        title: "Draw your room from memory",
        description: "Leave the room, then draw a rough map of everything inside it from memory.",
        vibes: ["random", "chill"],
        time: [10, 20]
    },

    {
        title: "Create a ridiculous business",
        description: "Invent a completely ridiculous business. Give it a name, logo idea and business model.",
        vibes: ["random", "chill"],
        time: [20, 30]
    },

    {
        title: "Invent a useless invention",
        description: "Design a product that solves a problem nobody actually has.",
        vibes: ["random"],
        time: [20, 30]
    },

    {
        title: "Go somewhere you've never been",
        description: "Pick a nearby place you've always passed but never actually visited. Go check it out.",
        vibes: ["move", "random"],
        time: [30, 60]
    },

    {
        title: "Make a 60-second movie",
        description: "Use your phone to create a tiny one-minute film about absolutely anything.",
        vibes: ["random", "chill"],
        time: [30, 60]
    },

    {
        title: "Design your dream room",
        description: "Redesign your room on paper. Change everything. No budget limit.",
        vibes: ["random", "chill"],
        time: [20, 30]
    },

    {
        title: "Learn something from a stranger",
        description: "Find someone who is good at something you're not and ask them one question about it.",
        vibes: ["social", "learn", "random"],
        time: [10, 20]
    }

];


let selectedTime = null;
let selectedVibe = null;


const timeButtons = document.querySelectorAll(".time-option");
const vibeButtons = document.querySelectorAll(".vibe-option");

const generateButton = document.getElementById("generateButton");
const againButton = document.getElementById("againButton");

const challengeCard = document.getElementById("challengeCard");
const challengeTime = document.getElementById("challengeTime");
const challengeTitle = document.getElementById("challengeTitle");
const challengeDescription = document.getElementById("challengeDescription");


timeButtons.forEach(button => {

    button.addEventListener("click", () => {

        timeButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedTime = Number(button.dataset.time);

    });

});


vibeButtons.forEach(button => {

    button.addEventListener("click", () => {

        vibeButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedVibe = button.dataset.vibe;

    });

});


function findChallenge() {

    let possibleChallenges = challenges.filter(challenge => {

        const matchesTime =
            selectedTime === null ||
            challenge.time.includes(selectedTime);

        const matchesVibe =
            selectedVibe === null ||
            selectedVibe === "random" ||
            challenge.vibes.includes(selectedVibe);

        return matchesTime && matchesVibe;

    });


    if (possibleChallenges.length === 0) {
        possibleChallenges = challenges;
    }


    const randomIndex =
        Math.floor(Math.random() * possibleChallenges.length);

    const challenge =
        possibleChallenges[randomIndex];


    challengeTime.textContent =
        selectedTime
            ? `${selectedTime} MINUTES`
            : "YOUR FREE TIME";

    challengeTitle.textContent =
        challenge.title;

    challengeDescription.textContent =
        challenge.description;


    challengeCard.classList.add("visible");


    challengeCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


generateButton.addEventListener(
    "click",
    findChallenge
);

againButton.addEventListener(
    "click",
    findChallenge
);
