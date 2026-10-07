/* =========================================================
   DEAD TIME — INTERACTIVE CHALLENGE ENGINE
   ========================================================= */


/* =========================================================
   CHALLENGE DATA
   ========================================================= */

const challenges = [

    {
        id: "morse-code",

        title: "Learn Morse Code",

        category: "LEARN",

        description:
            "Learn the fundamentals of Morse code, practice decoding it, and finish by sending your own message.",

        vibes: ["learn", "random"],

        time: [20, 30, 60],

        overview: [
            "Understand how Morse code works",
            "Learn the core symbols and patterns",
            "Decode progressively harder messages",
            "Practice recalling letters without a reference",
            "Complete a real-world Morse mission"
        ],

        modules: [

            {
                type: "info",

                title: "Meet the two symbols",

                content: `
                    <p>
                        Morse code looks complicated at first, but the entire
                        system is built from just <strong>two signals</strong>.
                    </p>

                    <p>
                        A <strong>dot</strong> is a short signal.
                        A <strong>dash</strong> is a long signal.
                    </p>

                    <p>
                        Every letter is simply a different combination of
                        dots and dashes.
                    </p>
                `,

                example:
                    "DOT  →  .\nDASH →  -\n\nE → .\nT → -"
            },


            {
                type: "quiz",

                title: "Your first check",

                question:
                    "Which Morse code represents the letter E?",

                choices: [
                    ".",
                    "-",
                    "..",
                    "--"
                ],

                answer: ".",

                hint:
                    "E is the simplest Morse letter. It contains only one short signal.",

                explanation:
                    "Correct. E = . because it is the simplest possible Morse character."
            },


            {
                type: "info",

                title: "Start building letters",

                content: `
                    <p>
                        Once we combine dots and dashes, we can represent
                        more letters.
                    </p>

                    <p>
                        You don't need to memorize the entire Morse alphabet
                        immediately. We're going to build it gradually.
                    </p>
                `,

                example:
                    "A → .-\nN → -.\nI → ..\nM → --\n\nS → ...\nO → ---"
            },


            {
                type: "quiz",

                title: "Decode a letter",

                question:
                    "What letter is represented by .- ?",

                choices: [
                    "A",
                    "N",
                    "I",
                    "M"
                ],

                answer: "A",

                hint:
                    "Remember: A is dot followed by dash.",

                explanation:
                    "Exactly. A = .-."
            },


            {
                type: "quiz",

                title: "Another one",

                question:
                    "What letter is represented by ... ?",

                choices: [
                    "E",
                    "I",
                    "S",
                    "O"
                ],

                answer: "S",

                hint:
                    "Start with E = one dot. I = two dots. Keep going.",

                explanation:
                    "Correct. S = ... — three dots."
            },


            {
                type: "info",

                title: "Patterns make Morse easier",

                content: `
                    <p>
                        Here's the important trick: Morse isn't random.
                        Many letters are built by extending simpler ones.
                    </p>

                    <p>
                        Think of it like a tree. Start with a single signal,
                        then add another signal to create new letters.
                    </p>
                `,

                example:
                    "E  .\nI  ..\nS  ...\nH  ....\n\nT  -\nM  --\nO  ---"
            },


            {
                type: "quiz",

                title: "Pattern recognition",

                question:
                    "If E is . and I is .., what would S be?",

                choices: [
                    ".-",
                    "...",
                    "--",
                    "-."
                ],

                answer: "...",

                hint:
                    "We're adding another dot each time.",

                explanation:
                    "Correct. E = ., I = .., S = ..."
            },


            {
                type: "input",

                title: "Decode your first word",

                question:
                    "Decode this Morse message:",

                example:
                    "... --- ...",

                placeholder:
                    "Type the word here...",

                answer: "SOS",

                hint:
                    "Break it into three letters: ... / --- / ...",

                explanation:
                    "Correct. ... = S, --- = O, ... = S."
            },


            {
                type: "info",

                title: "How words work",

                content: `
                    <p>
                        Morse separates letters with spaces.
                    </p>

                    <p>
                        So when you see:
                    </p>

                    <p>
                        <strong>.... . .-.. .-.. ---</strong>
                    </p>

                    <p>
                        you should read it one chunk at a time.
                    </p>
                `,

                example:
                    ".... = H\n. = E\n.-.. = L\n.-.. = L\n--- = O\n\nHELLO"
            },


            {
                type: "input",

                title: "Decode HELLO",

                question:
                    "What does this message say?",

                example:
                    ".... . .-.. .-.. ---",

                placeholder:
                    "Type your answer...",

                answer: "HELLO",

                hint:
                    "Decode each group separately.",

                explanation:
                    "Correct. You just decoded HELLO."
            },


            {
                type: "practice",

                title: "Build your recall",

                duration: 90,

                content: `
                    <p>
                        For the next 90 seconds, try to memorize these
                        eight letters:
                    </p>

                    <p>
                        E, T, A, N, I, M, S, O
                    </p>

                    <p>
                        Don't worry about speed. Focus on recognizing the
                        patterns.
                    </p>
                `
            },


            {
                type: "quiz",

                title: "No cheat sheet",

                question:
                    "Without looking back, what is O in Morse code?",

                choices: [
                    "...",
                    "--",
                    "---",
                    ".-"
                ],

                answer: "---",

                hint:
                    "O is three long signals.",

                explanation:
                    "Correct. O = ---."
            },


            {
                type: "input",

                title: "Encode a word",

                question:
                    "Write the Morse code for SOS.",

                placeholder:
                    "Example: ... --- ...",

                answer: "... --- ...",

                hint:
                    "S = ..., O = --- and S = ...",

                explanation:
                    "Exactly. SOS = ... --- ..."
            },


            {
                type: "mission",

                title: "Your final mission",

                content: `
                    <p>
                        You've now learned enough Morse code to actually use it.
                    </p>

                    <p>
                        Your mission is to write your own name in Morse code.
                        Then write a short message of at least three letters.
                    </p>

                    <p>
                        Try doing it <strong>without looking anything up</strong>.
                    </p>
                `,

                instruction:
                    "Complete the Morse exercise in real life before continuing."
            },


            {
                type: "reflection",

                title: "Lock it in",

                question:
                    "In your own words, explain how Morse code represents letters.",

                placeholder:
                    "Write what you learned..."
            }

        ]
    }

];


/* =========================================================
   STATE
   ========================================================= */

let selectedTime = null;
let selectedVibe = null;

let currentChallenge = null;
let currentModule = 0;

let moduleCompleted = false;
let moduleScore = 0;
let totalQuestions = 0;
let correctQuestions = 0;

let timerInterval = null;
let remainingSeconds = 0;
let isPracticeTimerRunning = false;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const timeButtons =
    document.querySelectorAll(".time-option");

const vibeButtons =
    document.querySelectorAll(".vibe-option");

const navButtons =
    document.querySelectorAll(".nav-button");

const generateButton =
    document.getElementById("generateButton");

const againButton =
    document.getElementById("againButton");

const startButton =
    document.getElementById("startButton");

const continueButton =
    document.getElementById("continueButton");

const hintButton =
    document.getElementById("hintButton");

const newChallengeButton =
    document.getElementById("newChallengeButton");

const challengeCard =
    document.getElementById("challengeCard");

const challengeIntro =
    document.getElementById("challengeIntro");

const engine =
    document.getElementById("engine");

const completionScreen =
    document.getElementById("completionScreen");

const challengeCategory =
    document.getElementById("challengeCategory");

const challengeTime =
    document.getElementById("challengeTime");

const challengeTitle =
    document.getElementById("challengeTitle");

const challengeDescription =
    document.getElementById("challengeDescription");

const challengeOverview =
    document.getElementById("challengeOverview");

const moduleType =
    document.getElementById("moduleType");

const moduleTitle =
    document.getElementById("moduleTitle");

const engineTimer =
    document.getElementById("engineTimer");

const moduleCounter =
    document.getElementById("moduleCounter");

const progressPercentage =
    document.getElementById("progressPercentage");

const progressFill =
    document.getElementById("progressFill");

const learningArea =
    document.getElementById("learningArea");

const feedback =
    document.getElementById("feedback");

const completionMessage =
    document.getElementById("completionMessage");

const completionMinutes =
    document.getElementById("completionMinutes");

const completionScore =
    document.getElementById("completionScore");


/* =========================================================
   TIME SELECTION
   ========================================================= */

timeButtons.forEach(button => {

    button.addEventListener("click", () => {

        timeButtons.forEach(btn =>
            btn.classList.remove("selected")
        );

        button.classList.add("selected");

        selectedTime =
            Number(button.dataset.time);

    });

});


/* =========================================================
   VIBE SELECTION
   ========================================================= */

vibeButtons.forEach(button => {

    button.addEventListener("click", () => {

        vibeButtons.forEach(btn =>
            btn.classList.remove("selected")
        );

        button.classList.add("selected");

        selectedVibe =
            button.dataset.vibe;

    });

});


/* =========================================================
   NAVIGATION
   ========================================================= */

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page =
            button.dataset.page;

        navButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        document
            .querySelectorAll(".page")
            .forEach(section =>
                section.classList.remove("active")
            );

        document
            .getElementById(page + "Page")
            .classList.add("active");

        if (page === "stats") {
            updateStats();
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   FIND CHALLENGE
   ========================================================= */

function findChallenge() {

    let possible =
        challenges.filter(challenge => {

            const timeMatch =
                selectedTime === null ||
                challenge.time.includes(selectedTime);

            const vibeMatch =
                selectedVibe === null ||
                selectedVibe === "random" ||
                challenge.vibes.includes(selectedVibe);

            return timeMatch && vibeMatch;

        });


    if (possible.length === 0) {
        possible = challenges;
    }


    currentChallenge =
        possible[
            Math.floor(
                Math.random() * possible.length
            )
        ];


    challengeCategory.textContent =
        currentChallenge.category;


    challengeTime.textContent =
        selectedTime
            ? `${selectedTime} MINUTES`
            : "YOUR FREE TIME";


    challengeTitle.textContent =
        currentChallenge.title;


    challengeDescription.textContent =
        currentChallenge.description;


    challengeOverview.innerHTML =
        currentChallenge.overview
            .map(item =>
                `<div>→ ${item}</div>`
            )
            .join("");


    challengeIntro.style.display =
        "block";

    engine.classList.remove("visible");

    completionScreen.classList.remove("visible");


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


/* =========================================================
   START CHALLENGE
   ========================================================= */

startButton.addEventListener(
    "click",
    startChallenge
);


function startChallenge() {

    currentModule = 0;

    moduleScore = 0;

    correctQuestions = 0;

    totalQuestions =
        currentChallenge.modules.filter(
            module =>
                module.type === "quiz" ||
                module.type === "input"
        ).length;


    challengeIntro.style.display =
        "none";

    completionScreen.classList.remove(
        "visible"
    );

    engine.classList.add(
        "visible"
    );


    renderModule();

}


/* =========================================================
   RENDER MODULE
   ========================================================= */

function renderModule() {

    clearTimers();


    const module =
        currentChallenge.modules[currentModule];


    moduleCompleted = false;

    feedback.className = "feedback";

    feedback.textContent = "";


    moduleType.textContent =
        getModuleLabel(module.type);


    moduleTitle.textContent =
        module.title;


    moduleCounter.textContent =
        `${currentModule + 1} / ${currentChallenge.modules.length}`;


    const percent =
        Math.round(
            (currentModule /
                currentChallenge.modules.length) *
            100
        );


    progressPercentage.textContent =
        `${percent}%`;

    progressFill.style.width =
        `${percent}%`;


    continueButton.disabled = false;

    continueButton.textContent =
        currentModule ===
        currentChallenge.modules.length - 1
            ? "FINISH →"
            : "CONTINUE →";


    hintButton.style.visibility =
        module.hint ? "visible" : "hidden";


    learningArea.innerHTML = "";


    renderModuleContent(module);

}


/* =========================================================
   MODULE LABELS
   ========================================================= */

function getModuleLabel(type) {

    const labels = {

        info: "LEARN",

        quiz: "CHECKPOINT",

        input: "PRACTICE",

        practice: "PRACTICE",

        mission: "MISSION",

        reflection: "REFLECTION"

    };


    return labels[type] || "CHALLENGE";

}


/* =========================================================
   RENDER CONTENT
   ========================================================= */

function renderModuleContent(module) {


    /* INFO */

    if (module.type === "info") {

        learningArea.innerHTML = `

            <div class="module-content">

                ${module.content}

                <div class="example-box">
                    ${module.example}
                </div>

            </div>

        `;

        return;

    }


    /* QUIZ */

    if (module.type === "quiz") {

        learningArea.innerHTML = `

            <div class="question-box">

                <p class="question-text">
                    ${module.question}
                </p>

                <div class="choice-grid">

                    ${module.choices
                        .map(choice => `
                            <button
                                class="choice-button"
                                data-answer="${choice}">
                                ${choice}
                            </button>
                        `)
                        .join("")}

                </div>

            </div>

        `;


        document
            .querySelectorAll(".choice-button")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () =>
                        checkChoice(
                            button,
                            module
                        )
                );

            });


        continueButton.disabled = true;

        return;

    }


    /* INPUT */

    if (module.type === "input") {

        learningArea.innerHTML = `

            <div class="question-box">

                <p class="question-text">
                    ${module.question}
                </p>

                ${
                    module.example
                        ? `
                            <div class="example-box">
                                ${module.example}
                            </div>
                          `
                        : ""
                }

                <input
                    class="answer-input"
                    id="answerInput"
                    placeholder="${module.placeholder || "Type your answer..."}"
                    autocomplete="off"
                >

            </div>

        `;


        continueButton.textContent =
            "CHECK ANSWER";


        continueButton.disabled = false;


        return;

    }


    /* PRACTICE */

    if (module.type === "practice") {

        learningArea.innerHTML = `

            <div class="module-content">

                ${module.content}

            </div>

            <div class="practice-timer">

                <div
                    class="practice-time"
                    id="practiceTime">
                    ${formatSeconds(module.duration)}
                </div>

                <button
                    class="timer-start-button"
                    id="practiceStart">
                    START PRACTICE
                </button>

            </div>

        `;


        continueButton.disabled = true;


        document
            .getElementById("practiceStart")
            .addEventListener(
                "click",
                startPracticeTimer
            );


        return;

    }


    /* MISSION */

    if (module.type === "mission") {

        learningArea.innerHTML = `

            <div class="mission-box">

                <h3>
                    Your mission
                </h3>

                <div class="module-content">
                    ${module.content}
                </div>

                <label class="mission-check">

                    <input
                        type="checkbox"
                        id="missionCheck">

                    <span>
                        ${module.instruction}
                    </span>

                </label>

            </div>

        `;


        continueButton.disabled = true;


        document
            .getElementById("missionCheck")
            .addEventListener(
                "change",
                event => {

                    continueButton.disabled =
                        !event.target.checked;

                }
            );


        return;

    }


    /* REFLECTION */

    if (module.type === "reflection") {

        learningArea.innerHTML = `

            <div class="question-box">

                <p class="question-text">
                    ${module.question}
                </p>

                <textarea
                    class="reflection-input"
                    id="reflectionInput"
                    placeholder="${module.placeholder}">
                </textarea>

            </div>

        `;


        continueButton.disabled = true;


        document
            .getElementById("reflectionInput")
            .addEventListener(
                "input",
                event => {

                    continueButton.disabled =
                        event.target.value
                            .trim()
                            .length < 5;

                }
            );

    }

}


/* =========================================================
   QUIZ CHECKING
   ========================================================= */

function checkChoice(button, module) {

    const answer =
        button.dataset.answer;


    const buttons =
        document.querySelectorAll(
            ".choice-button"
        );


    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (
        answer.toLowerCase() ===
        module.answer.toLowerCase()
    ) {

        button.classList.add("correct");

        showFeedback(
            `✓ ${module.explanation}`,
            "success"
        );


        correctQuestions++;

        moduleScore++;

        moduleCompleted = true;

        continueButton.disabled = false;


    } else {

        button.classList.add("wrong");


        showFeedback(
            `Not quite. ${module.hint || "Take another look and try again."}`,
            "error"
        );


        setTimeout(() => {

            buttons.forEach(btn => {

                btn.disabled = false;

                btn.classList.remove(
                    "wrong"
                );

            });

        }, 900);

    }

}


/* =========================================================
   INPUT CHECKING
   ========================================================= */

function checkInput(module) {

    const input =
        document.getElementById(
            "answerInput"
        );


    if (!input) {
        return;
    }


    const userAnswer =
        input.value
            .trim()
            .toUpperCase();


    const correctAnswer =
        module.answer
            .trim()
            .toUpperCase();


    if (
        userAnswer === correctAnswer
    ) {

        showFeedback(
            `✓ ${module.explanation}`,
            "success"
        );


        correctQuestions++;

        moduleScore++;

        moduleCompleted = true;

        continueButton.textContent =
            currentModule ===
            currentChallenge.modules.length - 1
                ? "FINISH →"
                : "CONTINUE →";


    } else {

        showFeedback(
            `Not quite. ${module.hint}`,
            "error"
        );

    }

}


/* =========================================================
   FEEDBACK
   ========================================================= */

function showFeedback(
    message,
    type
) {

    feedback.textContent =
        message;

    feedback.className =
        `feedback visible ${type}`;

}


/* =========================================================
   HINT
   ========================================================= */

hintButton.addEventListener(
    "click",
    () => {

        const module =
            currentChallenge
                .modules[currentModule];


        if (!module.hint) {
            return;
        }


        showFeedback(
            `Hint: ${module.hint}`,
            "success"
        );

    }
);


/* =========================================================
   CONTINUE
   ========================================================= */

continueButton.addEventListener(
    "click",
    () => {

        const module =
            currentChallenge
                .modules[currentModule];


        /* INPUT */

        if (
            module.type === "input" &&
            !moduleCompleted
        ) {

            checkInput(module);

            if (!moduleCompleted) {
                return;
            }

        }


        /* LAST MODULE */

        if (
            currentModule >=
            currentChallenge.modules.length - 1
        ) {

            completeChallenge();

            return;

        }


        currentModule++;

        renderModule();

        window.scrollTo({
            top:
                challengeCard.offsetTop - 40,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   PRACTICE TIMER
   ========================================================= */

function startPracticeTimer() {

    if (isPracticeTimerRunning) {
        return;
    }


    isPracticeTimerRunning = true;


    const module =
        currentChallenge
            .modules[currentModule];


    remainingSeconds =
        module.duration;


    const startButton =
        document.getElementById(
            "practiceStart"
        );


    startButton.disabled = true;

    startButton.textContent =
        "PRACTICING...";


    timerInterval =
        setInterval(() => {

            remainingSeconds--;


            const display =
                document.getElementById(
                    "practiceTime"
                );


            if (display) {

                display.textContent =
                    formatSeconds(
                        remainingSeconds
                    );

            }


            if (remainingSeconds <= 0) {

                clearTimers();

                startButton.textContent =
                    "PRACTICE COMPLETE ✓";

                moduleCompleted = true;

                continueButton.disabled =
                    false;

                showFeedback(
                    "Nice. You completed the practice period.",
                    "success"
                );

            }

        }, 1000);

}


/* =========================================================
   COMPLETE CHALLENGE
   ========================================================= */

function completeChallenge() {

    clearTimers();


    const minutes =
        selectedTime || 10;


    const stats =
        getStats();


    stats.totalChallenges++;

    stats.totalMinutes += minutes;


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    stats.completions.push({

        date: today,

        title: currentChallenge.title,

        minutes: minutes,

        score:
            totalQuestions > 0
                ? Math.round(
                    (correctQuestions /
                        totalQuestions) *
                    100
                )
                : 100

    });


    calculateStreak(stats);

    saveStats(stats);


    const score =
        totalQuestions > 0
            ? Math.round(
                (correctQuestions /
                    totalQuestions) *
                100
            )
            : 100;


    completionMinutes.textContent =
        minutes;


    completionScore.textContent =
        `${score}%`;


    completionMessage.textContent =
        `You completed "${currentChallenge.title}" and reclaimed ${minutes} minutes. More importantly, you actually did something with them.`;


    engine.classList.remove(
        "visible"
    );

    completionScreen.classList.add(
        "visible"
    );


    updateStats();

}


/* =========================================================
   STREAK
   ========================================================= */

function calculateStreak(stats) {

    const dates =
        [
            ...new Set(
                stats.completions.map(
                    item => item.date
                )
            )
        ]
        .sort()
        .reverse();


    if (dates.length === 0) {

        stats.currentStreak = 0;

        return;

    }


    let streak = 1;


    for (
        let i = 0;
        i < dates.length - 1;
        i++
    ) {

        const current =
            new Date(dates[i]);

        const previous =
            new Date(dates[i + 1]);


        const difference =
            Math.round(
                (current - previous) /
                (1000 * 60 * 60 * 24)
            );


        if (difference === 1) {

            streak++;

        } else {

            break;

        }

    }


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    const lastDate =
        dates[0];


    const daysSinceLast =
        Math.round(
            (
                new Date(today) -
                new Date(lastDate)
            ) /
            (1000 * 60 * 60 * 24)
        );


    if (daysSinceLast > 1) {
        streak = 0;
    }


    stats.currentStreak =
        streak;


    stats.longestStreak =
        Math.max(
            stats.longestStreak,
            streak
        );

}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function getStats() {

    const saved =
        localStorage.getItem(
            "deadTimeStats"
        );


    if (!saved) {

        return {

            totalChallenges: 0,

            totalMinutes: 0,

            completions: [],

            currentStreak: 0,

            longestStreak: 0

        };

    }


    return JSON.parse(saved);

}


function saveStats(stats) {

    localStorage.setItem(
        "deadTimeStats",
        JSON.stringify(stats)
    );

}


/* =========================================================
   STATS
   ========================================================= */

function updateStats() {

    const stats =
        getStats();


    document.getElementById(
        "totalChallenges"
    ).textContent =
        stats.totalChallenges;


    document.getElementById(
        "currentStreak"
    ).textContent =
        stats.currentStreak;


    document.getElementById(
        "longestStreak"
    ).textContent =
        stats.longestStreak;


    document.getElementById(
        "totalMinutes"
    ).textContent =
        stats.totalMinutes;


    const message =
        document.getElementById(
            "activityMessage"
        );


    if (
        stats.totalChallenges === 0
    ) {

        message.textContent =
            "Complete your first challenge to start building your history.";

    } else {

        message.textContent =
            `You've completed ${stats.totalChallenges} challenge${stats.totalChallenges === 1 ? "" : "s"} and reclaimed ${stats.totalMinutes} minutes.`;

    }

}


/* =========================================================
   RESET
   ========================================================= */

document
    .getElementById("resetStatsButton")
    .addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Reset all Dead Time progress?"
                );


            if (!confirmed) {
                return;
            }


            localStorage.removeItem(
                "deadTimeStats"
            );


            updateStats();

        }
    );


/* =========================================================
   NEW CHALLENGE
   ========================================================= */

newChallengeButton.addEventListener(
    "click",
    () => {

        completionScreen.classList.remove(
            "visible"
        );

        findChallenge();

    }
);


/* =========================================================
   TIMER HELPERS
   ========================================================= */

function clearTimers() {

    clearInterval(timerInterval);

    timerInterval = null;

    isPracticeTimerRunning = false;

    remainingSeconds = 0;

    engineTimer.textContent = "00:00";

}


function formatSeconds(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const remaining =
        seconds % 60;


    return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;

}


/* =========================================================
   INITIALIZE
   ========================================================= */

updateStats();
