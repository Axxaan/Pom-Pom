<div align="center">

<img src="https://static.wikia.nocookie.net/houkai-star-rail/images/5/53/Sticker_PPG_07_Pom-Pom_12.png/revision/latest?cb=20230717183717" width="220" alt="Pom-Pom happy" />

# 🚂 Pom-Pom

> <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/3/31/Sticker_PPG_07_Pom-Pom_03.png/revision/latest?cb=20230717183713" width="120" align="left" alt="Pom-Pom embarrassed" /> *"Not to brag or anything, but Pom-Pom knows every passenger on this train!"* 🐾

<br/>

A web app for Honkai Star Rail players to get team building and relic advice through a conversational AI interface. Ask about any character, get recommendations tailored to your roster.

**🌐 Live demo:** [hsr-buddy.vercel.app](https://hsr-buddy.vercel.app)
**📬 Contact:** [azan.sikder1@gmail.com](mailto:azan.sikder1@gmail.com)

</div>

---

## <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/7/73/Sticker_PPG_07_Pom-Pom_07.png/revision/latest?cb=20230717183711" width="120" align="center" alt="Pom-Pom confused" /> What it does

You type in a question like *"I have Acheron and Mortenax Blade, who should I run with them?"* and Pom-Pom gives you a breakdown of team compositions, relic sets, and playstyle tips. It knows the current roster and pulls in relevant character data based on what you ask about.

---

## 🛠️ Tech stack

| Layer | Tech |
|---|---|
| Frontend | React + Vite, deployed on Vercel |
| Backend | Node.js + Express, deployed on Railway |
| AI | Claude API (Anthropic) with dynamic context injection |
| Data | Community-sourced character and relic data, updated per patch cycle |

---

## 🔧 Notable implementation details

- Stateful multi-turn chat with full conversation history passed to the API on every request
- API key secured server-side via an Express proxy — never exposed to the browser
- Dynamic prompt engineering with per-request context injection, pulling relevant character and teammate data from a structured JSON file based on what the user asks about
- Teammate chain resolution — when a character is mentioned, the server also pulls in full entries for all their listed teammates, giving the AI accurate data on newer characters it may not have been trained on
- Markdown rendering via `react-markdown` + `remark-gfm` for formatted responses including tables, bullet points, and bold text
- Production deployment across two platforms (Vercel + Railway) with environment-specific CORS configuration and Vite build-time environment variables
- Character alias resolution maps common nicknames (e.g. "DHIL", "SAM", "TB Harmony") to canonical character names before context lookup
- Character personality layer built from real in-game dialogue, injected as voice examples in the system prompt

---

## <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/c/c8/Sticker_PPG_07_Pom-Pom_09.png/revision/latest?cb=20250725220422" width="120" align="center" alt="Pom-Pom teaching" /> How it works

The React frontend sends your message to an Express proxy server, which injects relevant HSR character data into the prompt before forwarding it to the Claude API. The proxy keeps the API key secure server-side and handles CORS between the two deployed services.

Character data lives in a structured JSON file. When you mention a character, the server pulls their entry plus their recommended teammates and injects all of it as context. The AI has accurate, up-to-date game data to reason from rather than relying on potentially outdated training data.

```
User message
    ↓
React frontend  →  Express proxy  →  Claude API
                       ↑
               characters.json
          (context injected per query)
```

---

## <img src="https://static.wikia.nocookie.net/houkai-star-rail/images/f/fb/Sticker_PPG_07_Pom-Pom_14.png/revision/latest?cb=20230717183719" width="120" align="center" alt="Pom-Pom running" /> Running locally

```bash
# Clone the repo
git clone https://github.com/Axxaan/hsr-buddy.git

# Start the backend
cd server
npm install
npm run dev

# Start the frontend (new terminal)
cd client
npm install
npm run dev
```

You'll need an Anthropic API key in `server/.env`:

```
ANTHROPIC_API_KEY=your_key_here
```

---

<div align="center">

> *"La la la la la~ All aboard the Astral Express, Trailblazer!"* 🌟

</div>
