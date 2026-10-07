/* =========================================================
   DEAD TIME — INTERACTIVE CHALLENGE ENGINE
   ========================================================= */


/* =========================================================
   CHALLENGE DATA
   ========================================================= */

const challenges = [

    /* =========================================================
       1. MORSE CODE
       ========================================================= */

    {
        id: "morse-code",
        title: "Morse Code",
        category: "LEARN",
        description:
            "Learn how Morse code represents information, build recognition speed, decode and encode messages, and finish with a blind recall test.",
        vibes: ["learn", "random"],
        time: [20, 30, 60],

        overview: [
            "Understand the two-symbol structure of Morse code",
            "Build recognition through pattern grouping",
            "Decode progressively harder messages",
            "Encode English into Morse",
            "Test recall without a reference"
        ],

        modules: [

            {
                type: "info",
                title: "The Language of Two Signals",
                body: `
                    <p>Morse code looks complicated because we usually see long strings of dots and dashes.</p>

                    <p>But underneath all of it, Morse is extremely simple:</p>

                    <div class="concept-box">
                        <strong>Dot = short signal</strong><br>
                        <strong>Dash = long signal</strong>
                    </div>

                    <p>Every letter is simply a different arrangement of those two signals.</p>

                    <p>For example:</p>

                    <div class="concept-box">
                        E = .<br>
                        T = -<br>
                        A = .-<br>
                        N = -.
                    </div>

                    <p>The important idea is that you are not memorizing a new language. 
                    You are learning a system for representing letters using two signals.</p>
                `
            },

            {
                type: "quiz",
                title: "First Signal",
                question: "Which Morse symbol represents the letter E?",
                options: [".", "-", "..", ".-"],
                answer: 0,
                explanation: "E is the simplest Morse character: one dot.",
                hint: "Think of the shortest possible letter."
            },

            {
                type: "info",
                title: "Build From Patterns",
                body: `
                    <p>Instead of trying to memorize the entire alphabet randomly, notice how Morse letters are related.</p>

                    <div class="concept-box">
                        E = .<br>
                        I = ..<br>
                        S = ...<br><br>

                        T = -<br>
                        M = --<br>
                        O = ---
                    </div>

                    <p>See what happened?</p>

                    <p>Some letters are simply longer versions of simpler patterns.</p>

                    <p>This is one of the easiest ways to learn Morse: 
                    <strong>learn relationships rather than isolated symbols.</strong></p>
                `
            },

            {
                type: "quiz",
                title: "Pattern Recognition",
                question: "What does .- represent?",
                options: ["N", "A", "R", "K"],
                answer: 1,
                explanation: ".- is A.",
                hint: "It starts with a dot and finishes with a dash."
            },

            {
                type: "quiz",
                title: "Three Signals",
                question: "What does ... represent?",
                options: ["S", "H", "I", "V"],
                answer: 0,
                explanation: "S is three dots: ...",
                hint: "Think E → I → S."
            },

            {
                type: "info",
                title: "Think in Families",
                body: `
                    <p>Morse becomes much easier when you recognize families of patterns.</p>

                    <div class="concept-box">
                        E = .<br>
                        I = ..<br>
                        S = ...<br>
                        H = ....<br><br>

                        T = -<br>
                        M = --<br>
                        O = ---
                    </div>

                    <p>You can think of these almost like branches of a tree.</p>

                    <p>Start with one signal. Add another signal. 
                    The resulting pattern points toward another letter.</p>

                    <p>This is much more useful than blindly memorizing a table.</p>
                `
            },

            {
                type: "quiz",
                title: "Which Family?",
                question: "Which sequence belongs to the dot family?",
                options: ["E → I → S", "T → M → O", "A → N → M", "R → K → C"],
                answer: 0,
                explanation: "E, I, S and H are built progressively from dots.",
                hint: "Start with the single-dot letter."
            },

            {
                type: "input",
                title: "Decode SOS",
                question: "Decode this message: ... --- ...",
                answer: "sos",
                explanation: "The three groups are S, O, S.",
                hint: "Separate the message into three letters."
            },

            {
                type: "info",
                title: "Words Need Spacing",
                body: `
                    <p>Morse doesn't only need symbols. It also needs structure.</p>

                    <div class="concept-box">
                        <strong>Letters</strong> are separated from one another.<br><br>
                        <strong>Words</strong> have a larger separation.
                    </div>

                    <p>So:</p>

                    <div class="concept-box">
                        .... . .-.. .-.. ---<br><br>
                        H E L L O
                    </div>

                    <p>The individual Morse groups correspond to individual letters.
                    You decode each group separately, then combine the letters into words.</p>
                `
            },

            {
                type: "input",
                title: "Decode a Word",
                question: "Decode: .... . .-.. .-.. ---",
                answer: "hello",
                explanation: "H = ...., E = ., L = .-.., L = .-.., O = ---.",
                hint: "Decode each group independently."
            },

            {
                type: "practice",
                title: "Rapid Recall",
                duration: 90,
                instruction:
                    "For the next 90 seconds, repeatedly recall these letters without looking them up: E, T, A, N, I, M, S, O. Focus on recognizing the pattern instantly rather than consciously counting every symbol."
            },

            {
                type: "quiz",
                title: "The Long Signal",
                question: "What does --- represent?",
                options: ["M", "G", "O", "Q"],
                answer: 2,
                explanation: "O is three dashes: ---.",
                hint: "Think E/I/S and T/M/O as two parallel families."
            },

            {
                type: "input",
                title: "Encode SOS",
                question: "Encode SOS using dots and dashes.",
                answer: "... --- ...",
                explanation: "S = ..., O = ---, S = ...",
                hint: "You already decoded this message earlier."
            },

            {
                type: "mission",
                title: "Blind Transmission",
                instruction:
                    "Without looking anything up, write your name in Morse code and then create a second message containing at least three letters.",
                requirement:
                    "Complete the task without using a Morse reference."
            },

            {
                type: "reflection",
                title: "Explain the System",
                question:
                    "In your own words, explain how Morse code represents letters and why patterns make it easier to learn."
            }
        ]
    },


    /* =========================================================
       2. MEMORY PALACE
       ========================================================= */

    {
        id: "memory-palace",
        title: "Memory Palace",
        category: "LEARN",
        description:
            "Learn how spatial memory and vivid associations can be used to remember lists, concepts, and information far more reliably.",
        vibes: ["learn", "random"],
        time: [20, 30, 60],

        overview: [
            "Understand why ordinary repetition is weak",
            "Learn the memory-palace method",
            "Create a spatial route",
            "Convert abstract information into images",
            "Test recall after interference"
        ],

        modules: [

            {
                type: "info",
                title: "Why You Forget",
                body: `
                    <p>Your brain is not particularly good at remembering isolated information.</p>

                    <p>Try remembering this:</p>

                    <div class="concept-box">
                        17 — umbrella — copper — tiger — 82 — violin
                    </div>

                    <p>There is no obvious relationship between the items.</p>

                    <p>Now imagine:</p>

                    <p>A giant <strong>tiger</strong> wearing a <strong>violin</strong>
                    crashes through your front door while an <strong>umbrella</strong>
                    made of <strong>copper</strong> falls from the ceiling.</p>

                    <p>Suddenly the information becomes memorable.</p>

                    <p>The trick is <strong>association + imagery + location</strong>.</p>
                `
            },

            {
                type: "quiz",
                title: "The Core Principle",
                question: "Which combination makes information easier to remember?",
                options: [
                    "Repetition only",
                    "Random facts",
                    "Association, imagery and location",
                    "Reading the same sentence repeatedly"
                ],
                answer: 2,
                explanation:
                    "The memory-palace technique relies heavily on association, vivid imagery and spatial structure.",
                hint: "Think about why the tiger example was easier to remember."
            },

            {
                type: "info",
                title: "Build Your Palace",
                body: `
                    <p>A memory palace is simply a familiar place that you can mentally walk through.</p>

                    <p>It could be:</p>

                    <div class="concept-box">
                        Your bedroom → desk → bed → wardrobe → door
                    </div>

                    <p>The locations need to be consistent.</p>

                    <p>You then attach one piece of information to each location.</p>

                    <p>The physical route becomes the structure that holds the information.</p>
                `
            },

            {
                type: "quiz",
                title: "Order Matters",
                question: "Why should locations in a memory palace remain consistent?",
                options: [
                    "Because the brain dislikes colours",
                    "Because the route provides an ordered retrieval structure",
                    "Because changing rooms makes information disappear",
                    "Because every palace must have five rooms"
                ],
                answer: 1,
                explanation:
                    "A consistent route gives you a predictable sequence for retrieving information.",
                hint: "Imagine trying to navigate a building where the rooms randomly moved."
            },

            {
                type: "info",
                title: "Make Images Ridiculous",
                body: `
                    <p>Do not create boring mental images.</p>

                    <p>If you need to remember the word <strong>coffee</strong>,
                    don't simply imagine a cup.</p>

                    <p>Imagine a gigantic coffee cup flooding your bedroom,
                    with coffee pouring from the ceiling.</p>

                    <p>Strange images work because they stand out.</p>

                    <div class="concept-box">
                        Ordinary → weak memory<br>
                        Emotional + ridiculous + visual → stronger memory
                    </div>
                `
            },

            {
                type: "quiz",
                title: "Which Image Wins?",
                question: "You need to remember 'elephant'. Which mental image is strongest?",
                options: [
                    "A normal elephant",
                    "The word ELEPHANT written on paper",
                    "A tiny elephant driving your car through your bedroom",
                    "Repeating the word 20 times"
                ],
                answer: 2,
                explanation:
                    "Unexpected, exaggerated and interactive imagery creates stronger associations.",
                hint: "Which option would be hardest to forget?"
            },

            {
                type: "input",
                title: "Build Your First Route",
                question:
                    "Write five locations from a familiar place in the exact order you could mentally walk through them.",
                answerType: "long",
                explanation:
                    "There is no single correct route. The important part is that the sequence is clear and familiar.",
                hint:
                    "Example: front door → sofa → TV → kitchen → bedroom."
            },

            {
                type: "practice",
                title: "Memorization Round",
                duration: 90,
                instruction:
                    "Create a five-location mental route. Attach these five words to the locations using exaggerated images: APPLE, ROCKET, MIRROR, DOG, OCEAN. Spend the first minute building the images. Then try recalling the five words in order."
            },

            {
                type: "quiz",
                title: "Interference",
                question:
                    "Why is testing yourself after doing another task useful?",
                options: [
                    "It makes the information disappear",
                    "It tests whether the memory survives interference",
                    "It makes memorization unnecessary",
                    "It only measures reading speed"
                ],
                answer: 1,
                explanation:
                    "Real memory is often needed after distractions. Interference testing checks whether the memory is actually retrievable.",
                hint: "Imagine being asked to remember something 10 minutes later."
            },

            {
                type: "mission",
                title: "Use It For Real",
                instruction:
                    "Choose five things you genuinely need to remember today. Place each one at a different location in a familiar route. Later, try retrieving the list without checking your phone.",
                requirement:
                    "Use the technique on information that actually matters to you."
            },

            {
                type: "reflection",
                title: "Explain Your Method",
                question:
                    "Explain why a memory palace can work better than simply repeating information."
            }
        ]
    },


    /* =========================================================
       3. NEGOTIATION
       ========================================================= */

    {
        id: "negotiation",
        title: "Negotiation",
        category: "SOCIAL",
        description:
            "Learn the fundamentals of negotiation: interests, leverage, anchoring, alternatives, and how to create better outcomes without simply being aggressive.",
        vibes: ["social", "learn", "random"],
        time: [20, 30, 60],

        overview: [
            "Separate positions from interests",
            "Understand BATNA and leverage",
            "Recognize anchoring",
            "Practice asking better questions",
            "Handle realistic negotiation scenarios"
        ],

        modules: [

            {
                type: "info",
                title: "Position vs Interest",
                body: `
                    <p>A <strong>position</strong> is what someone says they want.</p>

                    <p>An <strong>interest</strong> is the reason they want it.</p>

                    <div class="concept-box">
                        Position: "I need ₹20,000."<br><br>
                        Interest: "I need enough money to cover my expenses this month."
                    </div>

                    <p>Negotiations often become easier when you discover the underlying interest.</p>

                    <p>If you only argue about positions, both sides can become stuck.</p>
                `
            },

            {
                type: "quiz",
                title: "Find The Interest",
                question:
                    "A freelancer says, 'I won't accept less than ₹50,000.' What should you try to understand?",
                options: [
                    "Why ₹50,000 is mathematically beautiful",
                    "What underlying need or constraint makes ₹50,000 important",
                    "How to force them below ₹50,000",
                    "Whether they like the number 50"
                ],
                answer: 1,
                explanation:
                    "Understanding the reason behind the position can reveal alternative solutions.",
                hint: "Ask yourself: 'Why this number?'"
            },

            {
                type: "info",
                title: "Your BATNA",
                body: `
                    <p>BATNA means <strong>Best Alternative To a Negotiated Agreement</strong>.</p>

                    <p>In simple terms:</p>

                    <div class="concept-box">
                        "What will I do if this deal fails?"
                    </div>

                    <p>If you have a strong alternative, you don't need to accept a bad deal.</p>

                    <p>Example:</p>

                    <p>If Company A offers you ₹40,000 but Company B will definitely pay ₹55,000,
                    Company A has much less leverage over you.</p>
                `
            },

            {
                type: "quiz",
                title: "Leverage",
                question:
                    "Which person generally has stronger negotiating leverage?",
                options: [
                    "Someone with no alternatives",
                    "Someone who desperately needs the deal",
                    "Someone with a strong alternative if the deal fails",
                    "Someone who talks the loudest"
                ],
                answer: 2,
                explanation:
                    "A strong alternative reduces your dependence on the current negotiation.",
                hint: "Think about what happens if you simply walk away."
            },

            {
                type: "info",
                title: "The First Number",
                body: `
                    <p>The first serious number introduced in a negotiation can influence the rest of the conversation.</p>

                    <p>This is called <strong>anchoring</strong>.</p>

                    <p>Imagine negotiating a laptop:</p>

                    <div class="concept-box">
                        Seller: "₹80,000."<br>
                        Buyer: "₹50,000."
                    </div>

                    <p>The conversation is now happening around those reference points.</p>

                    <p>Anchoring is powerful, but a random aggressive number isn't automatically a good anchor.</p>

                    <p>A useful anchor should be supported by reasoning or evidence.</p>
                `
            },

            {
                type: "quiz",
                title: "Good Anchor",
                question:
                    "Which is the strongest opening anchor when negotiating a used laptop?",
                options: [
                    "₹1 because everything should be cheap",
                    "A researched price based on condition and comparable listings",
                    "The highest number you can imagine",
                    "No number at all"
                ],
                answer: 1,
                explanation:
                    "A credible anchor is much more defensible than a completely arbitrary number.",
                hint: "Would the other person take your number seriously?"
            },

            {
                type: "input",
                title: "Ask Instead of Assume",
                question:
                    "You are buying something and the seller refuses your offer. Write one question that could reveal their underlying interest or constraint.",
                answerType: "long",
                explanation:
                    "Good negotiators gather information instead of immediately escalating the argument.",
                hint:
                    "Try something like: 'What makes that price important to you?'"
            },

            {
                type: "quiz",
                title: "Scenario: The Salary",
                question:
                    "A company offers ₹45,000. You know another company would likely offer ₹50,000, but you prefer the first company's role. What is the strongest response?",
                options: [
                    "Immediately accept",
                    "Threaten to leave",
                    "Explain your interest in the role and ask whether compensation has flexibility",
                    "Insult the offer"
                ],
                answer: 2,
                explanation:
                    "You can communicate your alternative while preserving the relationship and exploring flexibility.",
                hint: "You have leverage, but you also value this opportunity."
            },

            {
                type: "quiz",
                title: "Scenario: The Room",
                question:
                    "A roommate wants to pay less for rent because their room is smaller. What is the best first move?",
                options: [
                    "Say no immediately",
                    "Ask what outcome they consider fair and why",
                    "Tell them they are being cheap",
                    "End the discussion"
                ],
                answer: 1,
                explanation:
                    "Start by understanding the other person's reasoning before proposing solutions.",
                hint: "Information comes before solutions."
            },

            {
                type: "mission",
                title: "Real Negotiation",
                instruction:
                    "Have one low-stakes real negotiation today. Ask at least one question before making your counteroffer. Focus on understanding the other person's interests rather than simply trying to 'win'.",
                requirement:
                    "Use the interest → alternative → proposal approach."
            },

            {
                type: "reflection",
                title: "What Actually Creates Leverage?",
                question:
                    "Explain in your own words why having alternatives can change a negotiation."
            }
        ]
    },


    /* =========================================================
       4. MENTAL MATH
       ========================================================= */

    {
        id: "mental-math",
        title: "Mental Math",
        category: "THINK",
        description:
            "Build practical mental calculation skills using decomposition, percentages, estimation and arithmetic shortcuts instead of relying on a calculator.",
        vibes: ["learn", "think", "random"],
        time: [20, 30, 60],

        overview: [
            "Learn decomposition techniques",
            "Calculate percentages mentally",
            "Use estimation to check answers",
            "Perform multi-step calculations",
            "Build calculation speed"
        ],

        modules: [

            {
                type: "info",
                title: "Don't Calculate the Hard Way",
                body: `
                    <p>Mental math is often about transforming a difficult calculation into an easier one.</p>

                    <p>For example:</p>

                    <div class="concept-box">
                        19 × 6
                    </div>

                    <p>Instead of doing traditional multiplication:</p>

                    <div class="concept-box">
                        20 × 6 − 1 × 6<br>
                        = 120 − 6<br>
                        = 114
                    </div>

                    <p>This is called <strong>decomposition</strong>.</p>

                    <p>You change the problem into pieces that your brain handles more easily.</p>
                `
            },

            {
                type: "quiz",
                title: "Decompose",
                question: "What is the easiest mental approach for 29 × 7?",
                options: [
                    "30 × 7 − 7",
                    "20 × 7 + 20",
                    "29 + 7",
                    "30 × 6"
                ],
                answer: 0,
                explanation: "30 × 7 = 210, then subtract 7 → 203.",
                hint: "Move 29 to the nearby round number 30."
            },

            {
                type: "info",
                title: "Percentages Become Easy",
                body: `
                    <p>You don't need to memorize every percentage.</p>

                    <div class="concept-box">
                        10% = divide by 10<br>
                        5% = half of 10%<br>
                        1% = divide by 100<br>
                        20% = double 10%
                    </div>

                    <p>So to calculate 15% of ₹800:</p>

                    <div class="concept-box">
                        10% = ₹80<br>
                        5% = ₹40<br>
                        15% = ₹120
                    </div>

                    <p>Break percentages into simple pieces.</p>
                `
            },

            {
                type: "quiz",
                title: "Percentage",
                question: "What is 15% of 600?",
                options: ["60", "75", "90", "120"],
                answer: 2,
                explanation: "10% = 60 and 5% = 30, so 15% = 90.",
                hint: "Break 15% into 10% + 5%."
            },

            {
                type: "quiz",
                title: "Another Percentage",
                question: "What is 25% of 240?",
                options: ["40", "50", "60", "80"],
                answer: 2,
                explanation: "25% is one quarter. 240 ÷ 4 = 60.",
                hint: "25% = one quarter."
            },

            {
                type: "info",
                title: "Estimate Before You Calculate",
                body: `
                    <p>One of the most useful mental-math skills is knowing roughly what the answer should be.</p>

                    <p>Suppose you calculate:</p>

                    <div class="concept-box">
                        497 × 21
                    </div>

                    <p>Before calculating exactly, think:</p>

                    <div class="concept-box">
                        500 × 20 ≈ 10,000
                    </div>

                    <p>So if your exact answer suddenly becomes 100,000,
                    you immediately know something went wrong.</p>

                    <p>Estimation is an error-detection tool.</p>
                `
            },

            {
                type: "quiz",
                title: "Sanity Check",
                question: "Which answer is closest to 198 × 51?",
                options: ["1,000", "5,000", "10,000", "20,000"],
                answer: 2,
                explanation: "200 × 50 = 10,000, so the answer should be around 10,000.",
                hint: "Round both numbers first."
            },

            {
                type: "input",
                title: "Calculate It",
                question: "What is 48 × 25?",
                answer: "1200",
                explanation:
                    "25 is one quarter of 100. 48 × 100 = 4800, divided by 4 = 1200.",
                hint: "Use the fact that 25 = 100 ÷ 4."
            },

            {
                type: "input",
                title: "Discount",
                question:
                    "A ₹2,400 item is discounted by 15%. What is the final price?",
                answer: "2040",
                explanation:
                    "15% of ₹2400 = ₹360. ₹2400 − ₹360 = ₹2040.",
                hint:
                    "Calculate 10% and 5% separately."
            },

            {
                type: "practice",
                title: "Speed Round",
                duration: 90,
                instruction:
                    "For 90 seconds, solve as many mental calculations as possible. Try problems such as 19×6, 24×25, 15% of 800, 35% of 200, 99×8 and 450÷9. Prioritize accuracy first, then speed."
            },

            {
                type: "quiz",
                title: "Reverse Thinking",
                question:
                    "A price increased by 20% becomes ₹1,200. What was the original price?",
                options: ["₹960", "₹1,000", "₹1,020", "₹1,100"],
                answer: 1,
                explanation:
                    "120% of the original = 1200. Therefore the original is 1200 ÷ 1.2 = 1000.",
                hint: "₹1,200 represents 120%, not 100%."
            },

            {
                type: "mission",
                title: "Calculator-Free Day",
                instruction:
                    "For the next few small calculations you encounter today—tips, discounts, percentages, splitting bills—calculate the answer mentally before checking with your calculator.",
                requirement:
                    "Use estimation first and exact calculation second."
            },

            {
                type: "reflection",
                title: "The Real Skill",
                question:
                    "Explain why mental math is often more about transforming a problem than directly calculating it."
            }
        ]
    },


    /* =========================================================
       5. LOGIC & DEDUCTION
       ========================================================= */

    {
        id: "logic-deduction",
        title: "Logic & Deduction",
        category: "THINK",
        description:
            "Train structured reasoning by separating facts from assumptions, eliminating impossible cases, and solving increasingly difficult deduction problems.",
        vibes: ["think", "learn", "random"],
        time: [20, 30, 60],

        overview: [
            "Separate facts from assumptions",
            "Use elimination systematically",
            "Understand conditional reasoning",
            "Solve structured deduction problems",
            "Explain why an answer must be true"
        ],

        modules: [

            {
                type: "info",
                title: "Facts vs Assumptions",
                body: `
                    <p>Good reasoning starts by separating what you actually know from what you are merely assuming.</p>

                    <div class="concept-box">
                        FACT:<br>
                        "The light is on."
                        <br><br>
                        ASSUMPTION:<br>
                        "Someone must be inside."
                    </div>

                    <p>The assumption might be correct, but it isn't logically guaranteed.</p>

                    <p>Strong problem solving means constantly asking:</p>

                    <div class="concept-box">
                        "What do I actually know?"
                    </div>
                `
            },

            {
                type: "quiz",
                title: "Spot the Assumption",
                question:
                    "You see someone's phone on a table. What can you logically conclude?",
                options: [
                    "They are definitely in the building",
                    "They definitely left recently",
                    "The phone is on the table",
                    "They are currently using it"
                ],
                answer: 2,
                explanation:
                    "The only guaranteed fact from the observation is that the phone is on the table.",
                hint: "Choose only what the evidence directly proves."
            },

            {
                type: "info",
                title: "Elimination",
                body: `
                    <p>Many logic problems become easier when you eliminate impossible options instead of trying to immediately find the correct one.</p>

                    <p>Suppose three people—A, B and C—own three different objects.</p>

                    <p>If you discover:</p>

                    <div class="concept-box">
                        A ≠ red<br>
                        B ≠ blue<br>
                        C = green
                    </div>

                    <p>You've already removed several possibilities.</p>

                    <p>Logic is often a process of reducing the possibility space until only one answer remains.</p>
                `
            },

            {
                type: "quiz",
                title: "Elimination",
                question:
                    "Three boxes are red, blue and green. The red box is not Box A. The blue box is not Box B. Box C is green. Which statement must be true?",
                options: [
                    "Box A is blue",
                    "Box B is red",
                    "Box C is green",
                    "Box A is red"
                ],
                answer: 2,
                explanation:
                    "The problem directly states that Box C is green.",
                hint: "Start with information that is explicitly guaranteed."
            },

            {
                type: "info",
                title: "Conditional Logic",
                body: `
                    <p>Conditional statements are another major part of logical reasoning.</p>

                    <div class="concept-box">
                        If A happens → B happens.
                    </div>

                    <p>But be careful.</p>

                    <p>If you know B happened, you cannot automatically conclude A happened.</p>

                    <p>Example:</p>

                    <div class="concept-box">
                        If it rains → the ground becomes wet.
                    </div>

                    <p>The ground being wet does not prove that it rained.
                    Someone could have used a hose.</p>
                `
            },

            {
                type: "quiz",
                title: "Conditional Reasoning",
                question:
                    "If all marathon runners train regularly, and Ravi trains regularly, what can you conclude?",
                options: [
                    "Ravi is definitely a marathon runner",
                    "Ravi may be a marathon runner",
                    "Ravi never runs",
                    "Ravi definitely does not run"
                ],
                answer: 1,
                explanation:
                    "The rule only says marathon runners train regularly. Other people can also train regularly.",
                hint: "Does training regularly uniquely identify marathon runners?"
            },

            {
                type: "quiz",
                title: "The Switches",
                question:
                    "You have three switches and one light in another room. You can manipulate the switches before entering the room once. What information could help identify the correct switch?",
                options: [
                    "The colour of the switches",
                    "Whether the bulb is warm",
                    "The number of screws",
                    "Nothing can ever help"
                ],
                answer: 1,
                explanation:
                    "You can turn one switch on for a while, turn it off, turn another on, then enter and use whether the bulb is lit or warm to distinguish possibilities.",
                hint: "Don't only think about whether the bulb is ON or OFF."
            },

            {
                type: "input",
                title: "Deduction",
                question:
                    "A box contains only red and blue balls. You know there are more red balls than blue balls. If there are 5 blue balls, what is the smallest possible number of red balls?",
                answer: "6",
                explanation:
                    "There must simply be more red than 5, so the smallest possibility is 6.",
                hint: "More than 5 means the next whole number."
            },

            {
                type: "quiz",
                title: "The Classic",
                question:
                    "A farmer has chickens and cows. There are 10 animals and 28 legs. How many cows are there?",
                options: ["3", "4", "5", "6"],
                answer: 1,
                explanation:
                    "If all 10 were chickens there would be 20 legs. The extra 8 legs come from cows, each adding 2 extra legs. 8 ÷ 2 = 4 cows.",
                hint:
                    "Start by imagining every animal is a chicken."
            },

            {
                type: "practice",
                title: "Reasoning Sprint",
                duration: 90,
                instruction:
                    "For 90 seconds, solve small logic problems without immediately guessing. For each one, first write down the facts you know, then eliminate impossible options. Your goal is to build the habit of structured reasoning."
            },

            {
                type: "mission",
                title: "Catch an Assumption",
                instruction:
                    "During one conversation today, notice a conclusion someone makes. Ask yourself whether it is actually guaranteed by the evidence or whether it relies on an assumption.",
                requirement:
                    "Identify at least one assumption you normally would have overlooked."
            },

            {
                type: "reflection",
                title: "Explain Good Reasoning",
                question:
                    "What is the difference between having a possible explanation and having a logically proven conclusion?"
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
