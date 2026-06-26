const heroLines = [
    { type: "cmd", text: "thoth init" },
    { type: "output", text: "✦ Thoth v1.0.0 — Identity-Preserving Publishing Engine" },
    { type: "output", text: "Initialising local database..." },
    { type: "success", text: "✓  Database ready at ~/.thoth/thoth.db" },
    { type: "output", text: "" },
    { type: "output", text: "No API key detected. Using Ollama (local)." },
    { type: "success", text: "✓  Ollama connected — llama3.2 + nomic-embed-text" },
    { type: "output", text: "" },
    { type: "cmd", text: "thoth profile status" },
    { type: "output", text: "Voice profile      ━━━━━━━━━━━━━━ ready" },
    { type: "output", text: "Knowledge profile  ━━━━━━━━━━━━━━ ready" },
    { type: "output", text: "Publication profile ━━━━━━━━━━━━━ ready" },
    { type: "output", text: "" },
    { type: "section", text: 'Identity engine active. Run: thoth draft --topic "..."' },
];

const heroTerm = document.getElementById("hero-terminal");
let lineIdx = 0;

function renderHeroLine(line) {
    const div = document.createElement("div");
    if (line.type === "cmd") {
        div.classList.add("t-line");
        const prompt = document.createElement("span");
        prompt.className = "t-prompt";
        prompt.textContent = "$";
        const cmd = document.createElement("span");
        cmd.className = "t-cmd";
        cmd.textContent = line.text;
        div.appendChild(prompt);
        div.appendChild(cmd);
    } else if (line.type === "output") {
        div.classList.add("t-output");
        div.textContent = line.text;
    } else if (line.type === "success") {
        div.classList.add("t-success");
        div.textContent = line.text;
    } else if (line.type === "section") {
        div.classList.add("t-section");
        div.textContent = line.text;
    }
    heroTerm.appendChild(div);
}

function typeHeroTerminal() {
    if (lineIdx < heroLines.length) {
        renderHeroLine(heroLines[lineIdx]);
        lineIdx++;
        const delay = heroLines[lineIdx - 1].type === "cmd" ? 600 : 160;
        setTimeout(typeHeroTerminal, delay);
    } else {
        const cursor = document.createElement("span");
        cursor.classList.add("t-cursor-blink");
        heroTerm.appendChild(cursor);
    }
}

setTimeout(typeHeroTerminal, 1200);
