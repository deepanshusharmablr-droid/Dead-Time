const challenges = [
    {
        title: "Learn to juggle",
        description: "Grab three objects and spend your free time trying to learn a basic three-ball juggling pattern.",
        vibes: ["move", "random"],
        time: [20, 30, 60]
    },
    {
        title: "Learn 10 words",
        description: "Pick a language you've always wanted to learn and learn 10 useful words.",
        vibes: ["learn"],
        time: [10, 20, 30]
    },
    {
        title: "Take a different route",
        description: "Walk somewhere you visit regularly, but take a route you've never taken before.",
        vibes: ["move", "random"],
        time: [20, 30, 60]
    },
    {
        title: "Photograph the ordinary",
        description: "Take 5 photos of things around you that you'd normally never notice.",
        vibes: ["chill", "random"],
        time: [10, 20, 30]
    },
    {
        title: "Call someone",
        description: "Call a friend you haven't properly spoken to in a while. No texting. Actually call them.",
        vibes: ["social"],
        time: [10, 20, 30, 60]
    },
    {
        title: "Learn Morse code",
        description: "Learn the basics of Morse code and see if you can send a message using it.",
        vibes: ["learn", "random"],
        time: [20, 30, 60]
    },
    {
        title: "Go somewhere you've never been",
        description: "Pick a nearby place you've always passed but never actually visited. Go check it out.",
        vibes: ["move", "random"],
        time: [30, 60]
    },
    {
        title: "Make something",
        description: "Use whatever is around you to make something completely useless but surprisingly fun.",
        vibes: ["chill", "random"],
        time: [20, 30, 60]
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

        timeButtons.forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        selectedTime = Number(button.dataset.time);

    });

});


vibeButtons.forEach(button => {

    button.addEventListener("click", () => {

        vibeButtons.forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        selectedVibe = button.dataset.vibe;

    });

});


function findChallenge() {

    let possibleChallenges = challenges.filter(challenge => {

        const matchesTime = selectedTime === null ||
            challenge.time.includes(selectedTime);

        const matchesVibe = selectedVibe === null ||
            selectedVibe === "random" ||
            challenge.vibes.includes(selectedVibe);

        return matchesTime && matchesVibe;

    });


    if (possibleChallenges.length === 0) {

        possibleChallenges = challenges;

    }


    const randomIndex =
        Math.floor(Math.random() * possibleChallenges.length);

    const challenge = possibleChallenges[randomIndex];


    challengeTime.textContent =
        selectedTime ? `${selectedTime} MINUTES` : "YOUR FREE TIME";

    challengeTitle.textContent = challenge.title;

    challengeDescription.textContent = challenge.description;

    challengeCard.classList.add("visible");

    challengeCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


generateButton.addEventListener("click", findChallenge);

againButton.addEventListener("click", findChallenge);

// deployment refresh
