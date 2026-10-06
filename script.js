const challenges = [
    {
        title: "Learn to juggle",
        description: "Grab three objects and spend your free time trying to learn a basic three-ball juggling pattern."
    },
    {
        title: "Take a different route",
        description: "Walk somewhere you visit regularly, but take a route you've never taken before."
    },
    {
        title: "Learn 10 words",
        description: "Pick a language you've always wanted to learn and learn 10 useful words."
    },
    {
        title: "Photograph the ordinary",
        description: "Take 5 photos of things around you that you'd normally never notice."
    },
    {
        title: "Call someone",
        description: "Call a friend you haven't properly spoken to in a while. No texting. Actually call them."
    }
];

function getRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    return challenges[randomIndex];
}
