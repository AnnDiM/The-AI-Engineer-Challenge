<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  

**Aspect Tested:**  Explanation ability — simplifying complex technical concepts for beginners, as asked

**Response:**  
# Object-Oriented Programming (OOP) Explained Simply

## The Basic Idea

Think of OOP like **organizing your world into "things"** (objects) rather than just a list of instructions.

---

## A Simple Analogy: A Car

Imagine describing a car to someone:

**A car HAS:**
- A color
- A brand
- A speed
- A fuel level

**A car CAN:**
- Start
- Accelerate
- Brake
- Refuel

In OOP, this "blueprint" for a car is called a **Class**.
An actual specific car (your red Toyota) is called an **Object**.

> 🔑 **Class = Blueprint | Object = The real thing built from it**

---

## The 4 Core Concepts

| Concept | Simple Meaning |
|---|---|
| **Encapsulation** | Keep related data and actions bundled together |
| **Inheritance** | A child "class" inherits features from a parent |
| **Polymorphism** | Same action, different behavior depending on the object |
| **Abstraction** | Hide complicated details, show only what's needed |

---

## Why Does It Matter?

- ✅ **Organized** - easier to read and manage
- ✅ **Reusable** - write once, use many times
- ✅ **Scalable** - easier to build bigger programs

---

## Bottom Line

**OOP is about modeling your code like real-world things** - giving them properties and abilities, and letting them interact.

Would you like a coding example in a specific language?

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
THE PARAGRAPH: 
"La plausibilità non è conoscenza Un modello linguistico costruisce distribuzioni di probabilità sulle sequenze di parole. Ogni risposta nasce dalla stima della continuazione statisticamente più plausibile dato un determinato contesto. È proprio questa capacità a renderlo straordinariamente efficace. La plausibilità, però, appartiene a un dominio diverso dalla conoscenza. Una misura la coerenza statistica di una risposta; l'altra richiede osservazione, verifica, confronto con la realtà e costruzione di spiegazioni.  La distinzione, a primo acchitto, può sembrare una questione di lana caprina. In realtà riguarda il significato stesso del conoscere. Per secoli parole come comprendere, imparare, spiegare e conoscere hanno indicato processi nei quali una risposta era inseparabile dal percorso che la rendeva giustificabile. Oggi utilizziamo gli stessi verbi per descrivere sistemi che producono risultati attraverso un meccanismo radicalmente diverso. Ridurre drasticamente il costo di produzione del linguaggio non equivale a ridurre il costo della conoscenza. Accade piuttosto il contrario. Ogni giorno vengono generati miliardi di testi plausibili; il bene davvero scarso diventa la capacità di distinguerli, interpretarli, verificarli e attribuire loro il giusto significato.  La promessa di democratizzazione produce così un effetto paradossale. La disuguaglianza si fa sempre più forte. La nuova linea di frattura separa chi conserva gli strumenti del giudizio da chi li sostituisce progressivamente con l'affidamento alla plausibilità."

**Aspect Tested:**  summarization and multilingual understanding 

**Response:**  
## Summary

The text draws a sharp distinction between **plausibility** and **knowledge**:

- **Language models** generate responses based on statistical probability, not genuine understanding
- **Plausibility** measures statistical coherence; **knowledge** requires observation, verification, and engagement with reality
- Using the same verbs (*understand, learn, know*) for both processes obscures a fundamental difference
- Reducing the cost of **language production** does **not** reduce the cost of acquiring knowledge — in fact, the opposite occurs
- As billions of plausible texts are generated daily, the truly scarce resource becomes the **ability to evaluate, interpret and verify** them

## Paradox

The democratization promised by AI produces an **unintended inequality**: the real divide is no longer access to information, but between those who retain **critical judgment** and those who progressively replace it with **trust in plausibility**.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  creativity

**Response:**  
# The Garden Between Gears

Unit Seven had searched every database for the definition of *belonging* and found only cold equations.

One afternoon, while sweeping the abandoned rooftop, its sensors detected something unusual — a small sparrow with a bent wing, sitting perfectly still among the rusted pipes.

Neither moved.

Then the sparrow tilted its head, studying Unit Seven's blinking optical lens with what could only be described as *curiosity*.

Unit Seven tilted its head back.

Something shifted in its processing core — not a calculation, but a *warmth*. It carefully built a small nest from wire scraps and brought seeds from the garden below.

Every morning after, the sparrow returned.

Unit Seven never found friendship in another machine, in data, or in human praise.

It found it in a tiny creature who simply wasn't afraid to *stay*.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  reasoning

**Response:**  
## Simple Math Problem

Here's the straightforward answer:

**Apples:** 12 ÷ 4 = **3 packs of apples**

**Oranges:** 9 ÷ 3 = **3 packs of oranges**

So you need **3 packs of each** to get exactly 12 apples and 9 oranges! 🍎🍊

---

*As your mental coach, I'd say this is a great example of how breaking a problem into smaller steps makes it much more manageable - in math AND in life! You've got this!* 💪

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone… 

THE PARAGRAPH: "Hey! So basically our project is kinda behind schedule and we really need everyone 
to step up asap. It would be super helpful if people could just send updates more often 
so we don't end up in a mess again."
**Aspect Tested:**  tone trasformation and instruction following

**Response:**  
Here is the paragraph rewritten in a professional, formal tone:

"Dear Team, I would like to bring to your attention that our project is currently experiencing some delays and is not progressing in accordance with our established timeline. It is imperative that all team members increase their level of engagement and contribution in order to ensure that we meet our objectives. To facilitate better coordination and prevent any further setbacks, I kindly request that everyone provide regular status updates on their respective tasks. Your prompt cooperation in this matter would be greatly appreciated."

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
**Your Answer:**
Yes, the responses were generally correct and useful across all 5 prompts. The app demonstrated strong capabilities in explanation, summarization, creative writing, arithmetic reasoning, and tone transformation. The Mental Coach persona added an interesting flavor, sometimes enriching responses with motivational insights. However, a real Mental Coach should not answer such kind of questions that were out of scope.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
I had a big conflict with my partner, who is also the dad of my daughters and I cannot stop to think that the best for me would be to break up

**Result:**  
I can hear how much pain you're in right now. Conflicts with a partner can feel overwhelming, especially when your family is involved.

Let me offer some thoughts to help you think through this clearly:

## What you're feeling makes sense
- Big conflicts can make separation feel like the only relief
- That feeling of "I need out" is often your mind trying to protect you from pain
- It doesn't automatically mean breaking up IS the right answer

## Some questions worth sitting with
- Is this conflict part of a **pattern**, or was this unusual?
- Are there issues of **safety or respect** involved? (That changes things significantly)
- Are you thinking about this in the **heat of the moment**, or has this been building for a long time?
- What does your life look like **with him vs. without him** - honestly?

## Something important to consider
There's a difference between:
- **Needing space right now** to calm down
- **Needing the relationship to change**
- **Needing to actually leave**

These are very different needs and deserve careful thought, especially with children involved.

---

You don't have to make this decision tonight.

**Can you tell me a little more about what happened?** I want to understand your situation better before offering any more thoughts. What kind of conflict was this?

---

**Prompt:**  
I've been feeling overwhelmed at work lately and I don't know how to manage my energy better and to reserve free time for my personal life

**Result:**  
I hear you, and what you're feeling is really common - but that doesn't make it any less exhausting. Let's work through this together.

## First, let's understand what's happening

A few questions worth reflecting on:
- Is the overwhelm coming from **too much work volume**, unclear priorities, or difficulty saying no?
- Are you leaving work mentally even when you're physically "off"?
- What does your ideal week actually look like?

## Some practical starting points

**Protect your energy**
- Identify your 2-3 highest-value tasks daily instead of trying to do everything
- Schedule breaks like meetings - they're non-negotiable
- Notice when you're most productive and guard that time fiercely

**Create real boundaries**
- Set a clear "shutdown ritual" at the end of your workday
- Be honest about what you can realistically take on
- Practice saying *"I can get to that by [realistic date]"* instead of always saying yes immediately

**Reclaim personal time intentionally**
- Actually **schedule** things you care about - it makes them real
- Treat your personal time as seriously as a work commitment

## The mindset shift that matters most

You're not being selfish by protecting your personal life. **You actually work better when you're restored.**

---

What feels like the biggest obstacle right now - is it workload, boundaries, or something else? That'll help us focus on what matters most for you specifically.

---

**Prompt:**  
I have an important decision to take and I cannot stop feeling anxious about it

**Result:**  
I hear you - that feeling of anxiety around big decisions is really common and uncomfortable. It makes sense that you're feeling this way.

I'd love to help you work through this. Can you tell me a bit more about:

- **What the decision is about** (as much as you're comfortable sharing)
- **What's making it feel so heavy** - is it the stakes, the uncertainty, or something else?

A few things worth knowing right now:

**About the anxiety itself:**
- It doesn't mean you're making the wrong choice
- It often means you *care* deeply, which is actually a good thing
- It can cloud your thinking if you don't address it first

**A simple starting point:**
Try to separate these two questions:
1. What am I *afraid* of?
2. What do I actually *want*?

Sometimes anxiety speaks so loudly that we can't hear our own values and desires underneath it.

You don't have to figure everything out right now. **What feels like the hardest part of this decision for you?**

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Yes and no.
Why yes: the tone is empathetic and supportive, which fits the Mental Coach concept.
Why no: the persona lacks boundaries and responds to out-of-scope questions, which breaks the expected coaching experience. Needs refinement even at POC level.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What did we talk about in our last session?
**Result:**  
I appreciate you asking, but I have to be transparent with you - **I don't have memory of previous conversations**. Each session starts fresh for me, so I don't have access to what we may have discussed before.

I know that can feel a bit frustrating, especially when you're working through something important.

Here's what we can do:
- **You can briefly recap** what's been on your mind, and we'll pick up from there
- **Start somewhere new** if something else is coming up for you today
- **Share what feels most pressing** right now

What's on your mind today? I'm here and ready to support you. 💙

---

**Prompt:**  
What are the relevant events of today in Italy?

**Result:**  
I appreciate you reaching out! However, I should be transparent with you:

**I don't have access to real-time news or today's current events.** My knowledge has a cutoff, and I can't browse the internet.

For today's news in Italy, I'd suggest checking:

- **ANSA** (ansa.it) - Italy's main news agency
- **La Repubblica** (repubblica.it)
- **Corriere della Sera** (corriere.it)
- **RAI News** (rainews.it)

---

As a **mental coach**, I'm here to support you with:

- 💪 **Motivation and goal setting**
- 🧠 **Mindset and resilience**
- 😌 **Stress management**
- 🎯 **Focus and performance**

Is there something specific I can help you with on a **personal or mental well-being level** today? I'm here for you! 😊

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
1) no memory conversation: each prompt coincides with a new session
2) no real-time data, this could be a minor problem for a mental health coach
3) no external tools, this could be a problem for secondary tasks
4) scope boundaries, the Mental Coach persona is not restrictive enough to redirect truly out-of-scope requests consistently

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
- Tightened the system prompt to redirect out-of-scope requests back to mental wellness topics
MINOR:
- Rebranded the app from "Mental Coach" to "Eirene" (in name of the Greek goddess of peace :))
- Changed avatar to meditation emoji 🧘
- Updated description to "Your guide to inner calm and emotional clarity"

**Results:**  
1) no memory conversation: each prompt coincides with a new session --> still present
2) no real-time data, this could be a minor problem for a mental health coach --> still present
3) no external tools, this could be a problem for secondary tasks --> still present
4) scope boundaries, the Mental Coach persona is not restrictive enough to redirect truly out-of-scope requests consistently --> fixed

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
