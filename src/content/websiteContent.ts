export const websiteContent = {
  nav: [
    { label: "About", href: "#about" },
    { label: "Problem", href: "#problem" },
    { label: "Simulator", href: "#simulator" },
    { label: "Insights", href: "#insights" },
    { label: "Framework", href: "#framework" },
    { label: "Research", href: "#research" },
    { label: "Team", href: "#team" }
  ],
  hero: {
    eyebrow: "FinSight Design Guidelines",
    headline: "Designing Mobile Banking for Everyone",
    subheadline:
      "A research-driven prototype rethinking financial access for blind and low-vision users, from the ground up.",
    body:
      "FinSight is a mobile banking prototype built not to patch existing accessibility gaps, but to start from scratch with BLV users at the center of every decision.",
    primaryAction: { label: "Explore the guidelines", href: "#insights" },
    secondaryAction: { label: "See the research", href: "#research" }
  },
  about: {
    id: "about",
    eyebrow: "About",
    headline: "A public design guideline for accessible banking",
    body: [
      "We are a team of graduate students from UC Berkeley's School of Information, specializing in human-computer interaction, data science, and product design.",
      "Our research spans semi-structured interviews with blind and low-vision users, conversations with industry experts, and analysis of over 4,000 community posts from blind and low-vision banking communities.",
      "What we found is not just a usability problem. It is a systemic failure of design assumptions."
    ]
  },
  problem: {
    id: "problem",
    eyebrow: "The Problem",
    headline: "Mobile banking works, unless you cannot see the screen",
    body: [
      "Most mobile banking apps technically comply with accessibility standards. But compliance and usability are not the same thing.",
      "Research shows that only 27% of real accessibility barriers are detectable by standard compliance audits. The rest are invisible to the tools banks use to check their own work.",
      "The result: BLV users do not report failures. They adapt. They screenshot apps and paste them into assistive tools. They ask a sighted family member to check if a transfer went through. They avoid key tasks entirely. These workarounds have become so normalized that they disappear from the feedback banks actually receive."
    ],
    stats: [
      {
        value: "27%",
        label: "of real accessibility barriers are detected by standard compliance audits",
        source: "Romen and Svanaes, 2008"
      },
      {
        value: "4,600+",
        label: "digital accessibility lawsuits were filed in 2023 alone",
        source: "UsableNet, 2024"
      },
      {
        value: "$490B",
        label: "in annual disposable income is controlled by the disability community",
        source: "AIR, 2018"
      }
    ],
    complianceGap: {
      headline: "Compliance is not the same as confidence",
      body:
        "Standard audits catch a fraction of real barriers. Banks can pass audits and still leave BLV users without a clear, private, or trustworthy way to complete essential financial tasks."
    }
  },
  simulator: {
    id: "simulator",
    eyebrow: "Banking Flow Simulator",
    headline: "Experience the difference between screen-reader dependence and voice-guided design",
    intro:
      "Choose a common banking task and compare the current banking path with the FinSight path. This is a scripted demonstration, not a live banking product.",
    tasks: [
      {
        id: "deposit-check",
        label: "Deposit check",
        currentCount: "24 swipes",
        finsightCount: "1 action",
        currentSummary:
          "The user moves through promotions, navigation, unlabeled elements, and a static camera instruction before reaching the task.",
        finsightSummary:
          "The user starts from a task-first menu and receives sequenced guidance before capture begins.",
        currentSteps: [
          "Home. Tab bar. Home. Tab bar item, 1 of 5.",
          "Credit card offer. Image. Button.",
          "Accounts. Checking ending 4012. Balance.",
          "More. Button.",
          "Deposit checks. Button.",
          "Take photo of front of check. Button.",
          "Position check in frame. Image.",
          "Button."
        ],
        finsightSteps: [
          "Welcome back. Your balance is $2,340. What would you like to do today?",
          "Deposit check selected.",
          "To deposit a check, I will guide you through choosing an account, capturing the front, capturing the back, and confirming the amount.",
          "No session data is stored. Your information is processed locally and deleted when you leave this screen.",
          "Place the check on a flat surface. I will tell you how to move the camera.",
          "Move slightly left. Hold steady. Check detected."
        ]
      }
    ]
  },
  insightsIntro: {
    id: "insights",
    eyebrow: "Key Design Insights",
    headline: "Eight interaction failures, redesigned as guidelines",
    body:
      "Across BLV user interviews, industry expert conversations, and 4,000+ community posts, we identified interaction failures that make mobile banking slower, less private, and less trustworthy for blind and low-vision users."
  },
  insights: [
    {
      number: "01",
      title: "Prioritize audio experiences through a voice-guided workflow",
      problem:
        "Most banking apps are built for sighted users and then tested with a screen reader. When app updates ship with unlabeled buttons or inaccessible pop-ups, screen readers break silently and users are left stranded mid-task with no explanation.",
      approach:
        "Build a voice-first interaction layer into the banking flow itself, so guidance does not depend on third-party screen reader compatibility.",
      comparison: [
        {
          label: "What you hear on open",
          current: "Bank of America. Tab bar. Home. Tab bar item, 1 of 5. Double tap to activate.",
          finsight: "Welcome back. Your balance is $2,340. What would you like to do today?"
        },
        {
          label: "When a button is not labeled",
          current: "Silence, or Button.",
          finsight: "All states have defined audio and visible text."
        },
        {
          label: "After an app update",
          current: "Flows may silently break.",
          finsight: "Guidance is built into the product, not layered on top."
        }
      ],
      quotes: [
        "When you're using a screen reader, it reads line by line everything, all of these other things that you don't need.",
        "I had to screenshot the app, leave it, open ChatGPT, paste the screenshot in, and ask it what was on the screen. That's just how I do banking now."
      ]
    },
    {
      number: "02",
      title: "Create an activities menu that puts tasks first",
      problem:
        "Standard banking home screens are designed around marketing, not task completion. To deposit a check on a major banking app, the average BLV user passes through many sequential screen reader elements. Every element is overhead they did not ask for.",
      approach:
        "Use a minimal, task-first home screen: balance front and center, core actions immediately accessible, and nothing extra competing for attention.",
      comparison: [
        {
          label: "Home screen elements",
          current: "Promotions, card art, news feed, nav bar, settings, and notifications.",
          finsight: "Balance and four task shortcuts."
        },
        {
          label: "Swipes to reach Deposit Check",
          current: "About 24.",
          finsight: "1."
        },
        {
          label: "Swipes to reach Transfer",
          current: "About 17.",
          finsight: "1."
        }
      ],
      quotes: [
        "I just want to get in, do the thing, and get out. I don't need to hear about your credit card offer."
      ]
    },
    {
      number: "03",
      title: "Give a clear, upfront privacy notice",
      problem:
        "BLV users did not reject AI in banking outright, but many positioned it as a tool of last resort. The absence of upfront communication about what data is used, stored, or shared created background anxiety that never gets resolved.",
      approach:
        "Before AI guidance activates for any task, surface a single plain-language notice: No session data is stored. Your information is processed locally and deleted when you leave this screen.",
      comparison: [
        {
          label: "Privacy communication",
          current: "Buried in terms of service.",
          finsight: "Spoken aloud and shown at the point of activation."
        },
        {
          label: "When you learn what is stored",
          current: "After sign-up, if ever.",
          finsight: "Before any data is processed."
        },
        {
          label: "User control",
          current: "None in the moment.",
          finsight: "Explicit opt-in per task."
        }
      ],
      quotes: [
        "That's what scares me about AI with banking. I don't want somebody to get into that account somehow.",
        "I have no choice but to use AI sometimes. But I don't want it to know my financial information."
      ]
    },
    {
      number: "04",
      title: "Break complex tasks into step-by-step interactions",
      problem:
        "Complex tasks like check deposit are often presented as one screen with multiple fields, upload requirements, and instructions all at once. For screen reader users, this means navigating the full page before knowing what is required.",
      approach:
        "Decompose each task into sequenced steps announced one at a time. Before action is required, give a full pre-task briefing so users know what will happen next.",
      comparison: [
        {
          label: "Task introduction",
          current: "One screen with all requirements listed.",
          finsight: "Spoken and visible pre-task briefing before action is required."
        },
        {
          label: "How you know what is next",
          current: "Navigate the full screen.",
          finsight: "Each step is announced before you take it."
        },
        {
          label: "When you can prepare",
          current: "You cannot.",
          finsight: "Before you commit to the flow."
        }
      ],
      quotes: [
        "It didn't give you any directions as to where to position the check in the frame. You just kind of hope."
      ]
    },
    {
      number: "05",
      title: "Use real-time audio guidance during check capture",
      problem:
        "Check deposit fails at three structurally distinct stages for BLV users: reading the check amount before capture, aligning the camera during capture, and confirming the deposit after capture. Most apps address none of these. Some address one.",
      approach:
        "Provide continuous, stage-aware audio feedback throughout capture: Move the check slightly left. Hold steady. Check detected, capturing now.",
      comparison: [
        {
          label: "Guidance during capture",
          current: "Static picture or generic instruction.",
          finsight: "Live feedback that responds to what the camera sees."
        },
        {
          label: "Common workaround",
          current: "Leave the app, use another assistive tool, or ask someone for help.",
          finsight: "Stay in the banking task with privacy and independence intact."
        }
      ],
      quotes: [
        "I ended up just not depositing checks anymore. It was easier to go to the branch.",
        "My workaround was asking my husband. But I shouldn't have to do that for my own money."
      ]
    },
    {
      number: "06",
      title: "Add a catch window before irreversible actions",
      problem:
        "Several participants described making errors, including duplicate payments, not because they misunderstood the action but because there was no structured moment between review and execution.",
      approach:
        "After final review and before execution, deliver a verbal confirmation prompt: You're about to send $30 to Sarah. Say confirm to proceed, or say cancel to go back.",
      comparison: [
        {
          label: "Between review and execution",
          current: "One tap, immediate.",
          finsight: "Verbal confirmation gate."
        },
        {
          label: "How to undo a mistake",
          current: "Call customer service.",
          finsight: "Say cancel before it happens."
        },
        {
          label: "Who controls the pace",
          current: "The app.",
          finsight: "The user."
        }
      ],
      quotes: [
        "It would say transaction failed and then success two seconds later. So which was it?",
        "I made a duplicate payment because I wasn't sure the first one went through. There was no way to know."
      ]
    },
    {
      number: "07",
      title: "Read back post-transaction confirmation",
      problem:
        "Generic confirmation, such as a beep, vibration, or checkmark, creates ambiguity. Many BLV users do not consider a transaction done until they independently verify the outcome.",
      approach:
        "Every completed transaction should trigger a structured read-back: Payment confirmed. You sent $30.00 to Sarah Johnson on May 6, 2026. Your new checking balance is $2,310.00.",
      comparison: [
        {
          label: "Confirmation",
          current: "Checkmark animation and generic chime.",
          finsight: "Full verbal summary with recipient, amount, date, and new balance."
        },
        {
          label: "Need to verify independently",
          current: "Yes, often by navigating to transaction history.",
          finsight: "No, the needed information is provided immediately."
        },
        {
          label: "Emotional state after transaction",
          current: "Uncertain.",
          finsight: "Confident."
        }
      ],
      quotes: [
        "I'm second-guessing myself a lot. Did it really go or not?",
        "I would prefer if it actually says, not just a beep, okay, payment confirmed, you have paid $30 to Sarah. And then tells me my balance."
      ]
    },
    {
      number: "08",
      title: "Let users control verbosity and speed",
      problem:
        "Screen readers and voice interfaces ship with a default speed and verbosity that reflects a general-population average, which means they are wrong for almost everyone.",
      approach:
        "Make verbosity and speech rate accessible at any point in any task. New users get full guidance. Experienced users get efficiency. Both are first-class choices.",
      comparison: [
        {
          label: "Voice speed",
          current: "Device default, changed in system settings.",
          finsight: "Adjustable in-task, any time."
        },
        {
          label: "Guidance level",
          current: "Fixed.",
          finsight: "Detailed or concise, user's choice."
        },
        {
          label: "Where to change it",
          current: "Buried in accessibility settings.",
          finsight: "Available in-flow, always."
        }
      ],
      quotes: [
        "I would be more annoyed with a friendly tone than it telling me in a robotic way, quickly, at a speed I can set up."
      ]
    },
    {
      number: "09",
      title: "Design high-contrast screens for low-vision users",
      problem:
        "Low-vision users need interfaces that reduce glare, avoid visual clutter, and keep critical text and controls distinguishable without requiring a separate high-contrast setting.",
      approach:
        "Use dark mode by default, high contrast text and controls, large type, clear focus states, and no color-only status indicators."
    }
  ],
  research: {
    id: "research",
    eyebrow: "Research Foundation",
    headline: "Built from interviews, expert conversations, and community evidence",
    body:
      "FinSight translates research findings into reusable guidelines for banks, designers, accessibility experts, and BLV users who want clearer, more trustworthy financial tools.",
    items: [
      {
        value: "BLV interviews",
        label: "Semi-structured interviews with blind and low-vision users."
      },
      {
        value: "Expert conversations",
        label: "Industry expert conversations across accessibility, product, and financial services."
      },
      {
        value: "4,000+ posts",
        label: "Analysis of community posts from blind and low-vision banking communities."
      },
      {
        value: "Design synthesis",
        label:
          "Interaction guidelines for voice, privacy, task sequencing, confirmation, and visual contrast."
      }
    ]
  },
  framework: {
    id: "framework",
    eyebrow: "A Framework for the Industry",
    headline: "Instead of patching inaccessible flows, redesign the interaction model",
    intro:
      "These patterns translate the research into practical choices for banks, vendors, product teams, and designers.",
    patterns: [
      {
        insteadOf: "Screen-reader-dependent flows that expose every interface element equally.",
        designFor: "Voice-guided workflows that announce context, next action, state, and recovery options."
      },
      {
        insteadOf: "Home screens organized around promotions, card art, and secondary navigation.",
        designFor: "Task-first activity menus where essential banking actions are immediately reachable."
      },
      {
        insteadOf: "AI privacy details buried in account setup or terms of service.",
        designFor: "Plain-language privacy notices at the point where guidance activates."
      },
      {
        insteadOf: "Complex banking tasks presented as one dense screen.",
        designFor: "Sequenced steps with a pre-task briefing and one decision at a time."
      },
      {
        insteadOf: "Generic success states like beeps, checkmarks, or vague confirmation screens.",
        designFor:
          "Structured read-backs with recipient, amount, date, result, and updated balance."
      }
    ]
  },
  additionalSections: {
    eyebrow: "For Stakeholders",
    headline: "What this guideline helps different audiences see",
    cards: [
      {
        title: "Banks",
        body:
          "A practical view of where compliance misses real usability, and how banking flows can be redesigned around confidence and independence."
      },
      {
        title: "Designers",
        body:
          "A pattern library for replacing cluttered, screen-reader-dependent flows with task-first, voice-guided interactions."
      },
      {
        title: "Accessibility experts",
        body:
          "A research-backed argument for testing beyond audits and measuring whether users can complete real financial tasks."
      },
      {
        title: "BLV users",
        body:
          "A public artifact that names common workarounds as design failures, not personal failures."
      }
    ]
  },
  futureWork: {
    eyebrow: "What We Would Build Next",
    headline: "Future work for a production-ready FinSight",
    items: [
      "A generative AI advisory layer that can explain banking tasks without storing session data.",
      "A production-grade computer vision model for real-time check capture guidance.",
      "Deeper integration with native screen readers while preserving FinSight's built-in voice guidance.",
      "A downloadable version of the guideline framework for banks, vendors, and accessibility teams."
    ]
  },
  team: {
    id: "team",
    eyebrow: "Meet the Team",
    headline: "UC Berkeley School of Information capstone team",
    members: [
      { name: "Jessie Deng", role: "Product Lead / UX Researcher" },
      { name: "Sarah Algashgari", role: "Product Manager" },
      { name: "Michelle Lin", role: "Quantitative Researcher / Data Scientist" },
      { name: "Devi", role: "Software Engineer / Developer" },
      { name: "Sejin", role: "UX Designer" }
    ],
    advisor: "Faculty Advisor: Marti Hearst, UC Berkeley School of Information."
  },
  footer: {
    headline: "FinSight",
    body:
      "A design guideline and prototype for mobile banking experiences that center blind and low-vision users from the beginning."
  }
} as const;

export type Insight = (typeof websiteContent.insights)[number];
