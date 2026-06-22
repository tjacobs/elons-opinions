/*
 * Elon's Opinions — data tree
 *
 * Every leaf "opinion" below is a real, publicly reported quote from Elon Musk,
 * with a source link so you can verify it. Some are transcribed/condensed as
 * reported by the cited outlet. Nothing here is invented. This project is an
 * independent reference and is not affiliated with or endorsed by Elon Musk.
 *
 * Structure:
 *   node = { id, name, blurb?, children?: [node], opinions?: [opinion] }
 *   opinion = { quote, context, year, source, url }
 */

window.DATA = {
  id: "root",
  name: "Life",
  children: [
    {
      id: "tech",
      name: "Technology",
      blurb: "Machines, intelligence, and the tools that reshape us.",
      children: [
        {
          id: "ai",
          name: "Artificial Intelligence",
          blurb: "His long-running alarm about smarter-than-human AI.",
          children: [
            {
              id: "ai-danger",
              name: "Is AI dangerous?",
              opinions: [
                {
                  quote: "With artificial intelligence, we are summoning the demon. In all those stories where there's the guy with the pentagram and the holy water, it's like — yeah, he's sure he can control the demon. Doesn't work out.",
                  context: "Speaking at the MIT AeroAstro Centennial Symposium.",
                  year: "2014",
                  source: "CBS News",
                  url: "https://www.cbsnews.com/news/elon-musk-artificial-intelligence-is-like-summoning-the-demon/"
                },
                {
                  quote: "I think AI is a fundamental risk to the existence of human civilization, in a way that car accidents, airplane crashes, faulty drugs or bad food were not.",
                  context: "Address to the U.S. National Governors Association.",
                  year: "2017",
                  source: "TIME",
                  url: "https://time.com/3541005/elon-musk-artificial-intelligence/"
                }
              ]
            },
            {
              id: "ai-regulation",
              name: "Should we regulate it?",
              opinions: [
                {
                  quote: "AI is a rare case where we need to be proactive in regulation, instead of reactive. Because by the time we are reactive in AI regulation, it's too late.",
                  context: "National Governors Association meeting.",
                  year: "2017",
                  source: "TIME",
                  url: "https://time.com/3541005/elon-musk-artificial-intelligence/"
                }
              ]
            },
            {
              id: "ai-jobs",
              name: "Will AI take our jobs?",
              opinions: [
                {
                  quote: "Probably none of us will have a job. … AI and robots will provide any goods and services you want.",
                  context: "On the future of work in an age of advanced AI and humanoid robots.",
                  year: "2026",
                  source: "Fortune",
                  url: "https://fortune.com/2026/01/19/when-does-elon-musk-say-work-will-be-optional-and-money-will-be-irrelevant-ai-robotics/"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "space",
      name: "Space & Humanity",
      blurb: "Why he wants us off this rock.",
      children: [
        {
          id: "mars",
          name: "Mars",
          blurb: "The case for a second home for humanity.",
          children: [
            {
              id: "mars-why",
              name: "Why colonize Mars?",
              opinions: [
                {
                  quote: "Eventually, all life on Earth will be destroyed by the sun. The sun is gradually expanding, and so we do at some point need to be a multiplanet civilization because Earth will be incinerated.",
                  context: "Explaining the long-term motivation behind SpaceX.",
                  year: "2024",
                  source: "Space.com",
                  url: "https://www.space.com/astronomy/mars/eventually-all-life-on-earth-will-be-destroyed-by-the-sun-elon-musk-explains-his-drive-to-colonize-mars"
                }
              ]
            },
            {
              id: "mars-now",
              name: "Why now?",
              opinions: [
                {
                  quote: "This is the first time in the 4.5-billion-year history of Earth that it's been possible to extend life beyond our planet. That window of opportunity may be open for a long time — or it may be open for a short time.",
                  context: "Making the case to begin Mars settlement without delay.",
                  year: "2016",
                  source: "Space.com",
                  url: "https://www.space.com/31388-elon-musk-colonize-mars-now.html"
                }
              ]
            }
          ]
        },
        {
          id: "multiplanet",
          name: "Becoming multiplanetary",
          opinions: [
            {
              quote: "I think the wise move is to make life multiplanetary while we can.",
              context: "Unveiling his plan to colonize Mars at the International Astronautical Congress.",
              year: "2016",
              source: "NPR",
              url: "https://www.npr.org/sections/thetwo-way/2016/09/27/495622695/this-afternoon-elon-musk-unveils-his-plan-for-colonizing-mars"
            }
          ]
        }
      ]
    },
    {
      id: "energy",
      name: "Cars & Energy",
      blurb: "Electric transport and the planet's power supply.",
      children: [
        {
          id: "ev",
          name: "Electric cars",
          children: [
            {
              id: "ev-why",
              name: "Why he built Tesla",
              opinions: [
                {
                  quote: "The reason for me to do it is not because I saw a huge market opportunity. It was clear that we were not going to see electric cars from major car manufacturers.",
                  context: "On founding Tesla to accelerate the move to sustainable transport.",
                  year: "—",
                  source: "Utility Dive",
                  url: "https://www.utilitydive.com/news/8-unforgettable-quotes-from-teslasolarcity-founder-elon-musk/282774/"
                }
              ]
            }
          ]
        },
        {
          id: "renewables",
          name: "Renewable energy",
          opinions: [
            {
              quote: "By definition, we must move to renewable energy. … To argue otherwise is to say we will eventually run out of energy and die, or civilization will collapse.",
              context: "On why a transition away from fossil fuels is inevitable.",
              year: "—",
              source: "Utility Dive",
              url: "https://www.utilitydive.com/news/8-unforgettable-quotes-from-teslasolarcity-founder-elon-musk/282774/"
            }
          ]
        }
      ]
    },
    {
      id: "work",
      name: "Work & Success",
      blurb: "How he thinks you should build things.",
      children: [
        {
          id: "work-ethic",
          name: "How hard to work",
          opinions: [
            {
              quote: "Work like hell. I mean you just have to put in 80 to 100 hour weeks every week. … Nobody ever changed the world on 40 hours a week.",
              context: "Advice on the effort required to build something world-changing.",
              year: "2018",
              source: "Inc.",
              url: "https://www.inc.com/business-insider/elon-musk-says-you-need-to-work-80-hours-a-week-to-save-the-world.html"
            },
            {
              quote: "If somebody else is working 50 hours and you're working 100, you'll get twice as much done in the course of a year.",
              context: "His \"simple math\" argument for long hours.",
              year: "2025",
              source: "Yahoo Finance",
              url: "https://finance.yahoo.com/news/simple-math-musk-said-100-134527947.html"
            }
          ]
        },
        {
          id: "failure",
          name: "Failure & risk",
          opinions: [
            {
              quote: "Failure is an option here. If things are not failing, you are not innovating enough.",
              context: "On the role of failure at SpaceX.",
              year: "—",
              source: "24/7 Wall St.",
              url: "https://247wallst.com/personal-finance/2025/02/24/elon-musk-says-failure-is-an-option-here-if-youre-not-failing-youre-not-taking-enough-risks-is-this-a-smart-approach/"
            },
            {
              quote: "When something is important enough, you do it even if the odds are not in your favor.",
              context: "Reflecting on pressing ahead with Tesla and SpaceX through near-bankruptcy.",
              year: "—",
              source: "The Quotes Collection",
              url: "https://thequotescollection.com/elon-musk-famous-quotes/"
            }
          ]
        },
        {
          id: "persistence",
          name: "Persistence",
          opinions: [
            {
              quote: "Persistence is very important. You should not give up unless you are forced to give up.",
              context: "On not quitting when things get hard.",
              year: "—",
              source: "The Quotes Collection",
              url: "https://thequotescollection.com/elon-musk-famous-quotes/"
            }
          ]
        },
        {
          id: "feedback",
          name: "Criticism & feedback",
          opinions: [
            {
              quote: "Really pay attention to negative feedback and solicit it, particularly from friends. … Hardly anyone does that, and it's incredibly helpful.",
              context: "Advice on improving by seeking out criticism.",
              year: "—",
              source: "The Quotes Collection",
              url: "https://thequotescollection.com/elon-musk-famous-quotes/"
            }
          ]
        }
      ]
    },
    {
      id: "money",
      name: "Money & Economy",
      blurb: "Wealth, purpose, and a post-scarcity future.",
      children: [
        {
          id: "money-purpose",
          name: "What money is for",
          opinions: [
            {
              quote: "I always invest my own money in the companies that I create. I don't believe in the whole thing of just using other people's money.",
              context: "On putting his own fortune on the line.",
              year: "—",
              source: "BrainyQuote",
              url: "https://www.brainyquote.com/quotes/elon_musk_567231"
            }
          ]
        },
        {
          id: "money-future",
          name: "The future of money",
          opinions: [
            {
              quote: "I think money disappears as a concept, honestly.",
              context: "On a future where AI and robots make goods and labor abundant.",
              year: "2026",
              source: "Fortune",
              url: "https://fortune.com/2026/01/19/when-does-elon-musk-say-work-will-be-optional-and-money-will-be-irrelevant-ai-robotics/"
            }
          ]
        }
      ]
    },
    {
      id: "society",
      name: "Society & Civilization",
      blurb: "Population, speech, and the fate of civilization.",
      children: [
        {
          id: "population",
          name: "Birth rates & population",
          children: [
            {
              id: "pop-collapse",
              name: "The biggest risk?",
              opinions: [
                {
                  quote: "Population collapse due to low birth rates is a much bigger risk to civilization than global warming.",
                  context: "Posted on Twitter/X.",
                  year: "2022",
                  source: "X (@elonmusk)",
                  url: "https://x.com/elonmusk/status/1563020169160851456"
                },
                {
                  quote: "I think one of the biggest risks to civilization is the low birth rate and the rapidly declining birth rate. … If people don't have more children, civilization is going to crumble.",
                  context: "Speaking at the Wall Street Journal CEO Council.",
                  year: "2021",
                  source: "CNBC",
                  url: "https://www.cnbc.com/2021/12/07/elon-musk-civilization-will-crumble-if-we-dont-have-more-children.html"
                }
              ]
            }
          ]
        },
        {
          id: "free-speech",
          name: "Free speech",
          opinions: [
            {
              quote: "Free speech is the bedrock of a functioning democracy, and Twitter is the digital town square where matters vital to the future of humanity are debated.",
              context: "Statement on completing his acquisition of Twitter.",
              year: "2022",
              source: "Wikipedia",
              url: "https://en.wikipedia.org/wiki/Acquisition_of_Twitter_by_Elon_Musk"
            }
          ]
        }
      ]
    },
    {
      id: "mind",
      name: "Mind & Reality",
      blurb: "How to think — and whether any of this is real.",
      children: [
        {
          id: "first-principles",
          name: "First-principles thinking",
          opinions: [
            {
              quote: "You boil things down to the most fundamental truths … and then reason up from there, as opposed to reasoning by analogy.",
              context: "Describing the physics-style reasoning he applies to problems.",
              year: "—",
              source: "CNBC",
              url: "https://www.cnbc.com/2020/02/28/billionaire-elon-musk-this-is-a-powerful-way-of-thinking-but-hard-to-do-how-it-works.html"
            }
          ]
        },
        {
          id: "simulation",
          name: "The simulation hypothesis",
          opinions: [
            {
              quote: "There's a one in billions chance that this is base reality.",
              context: "At the Code Conference, arguing we are probably living in a simulation.",
              year: "2016",
              source: "Space.com",
              url: "https://www.space.com/41749-elon-musk-living-in-simulation-rogan-podcast.html"
            },
            {
              quote: "If you assume any rate of improvement at all, games will eventually be indistinguishable from reality. … We're most likely in a simulation.",
              context: "Code Conference, on why simulated worlds will become indistinguishable from reality.",
              year: "2016",
              source: "Space.com",
              url: "https://www.space.com/41749-elon-musk-living-in-simulation-rogan-podcast.html"
            }
          ]
        }
      ]
    },
    {
      id: "education",
      name: "Education",
      blurb: "What's wrong with school, and how to fix it.",
      children: [
        {
          id: "edu-problem",
          name: "Teach the problem, not the tools",
          opinions: [
            {
              quote: "It's important to teach problem-solving, or teach to the problem and not the tools. … You need the relevance — otherwise the brain discards it.",
              context: "On rethinking how subjects are taught in schools.",
              year: "2017",
              source: "CNBC",
              url: "https://www.cnbc.com/2017/07/20/elon-musk-this-question-can-help-fix-the-u-s-education-system.html"
            }
          ]
        },
        {
          id: "edu-game",
          name: "Make learning a game",
          opinions: [
            {
              quote: "You want education to be as close to a video game as possible. … The more you can gamify the process of learning, the better.",
              context: "On making education engaging rather than rote.",
              year: "—",
              source: "InsideEVs",
              url: "https://insideevs.com/news/557206/elon-musk-education-schools/"
            }
          ]
        }
      ]
    }
  ]
};
