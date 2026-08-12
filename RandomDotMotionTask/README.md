# 🎯 Random Dot Motion Task

A browser-based implementation of the classic **random dot motion paradigm** used in perceptual decision-making research.

**[▶️ Try the live demo](https://mohebi-n-associates.github.io/NLDM/RandomDotMotionTask/)**

The course version is deliberately local-only: task responses remain in React
state for the current browser tab and are neither transmitted nor saved.

---

## What is this?

This is a simple perceptual decision-making experiment where you watch a cloud of moving dots and decide whether the coherent motion is **leftward** or **rightward**. Some proportion of dots (the "coherence") move together in one direction, while the rest move randomly.

This paradigm has been foundational in understanding:
- How the brain accumulates noisy evidence over time
- The speed-accuracy tradeoff in decision-making
- Neural mechanisms of choice (see: Shadlen & Newsome's work on area MT/LIP)

---

## 🚀 Quick Start

Open `index.html` in a modern browser or serve the repository with a local static
web server. The page loads React, Babel, Tailwind, Chart.js, and course analytics
from their respective web services, but it does not send task responses to them.

---

## 🔧 How to Modify

The entire experiment is in a single `index.html` file. Open it in any text editor.

### Easy Modifications (Change Values)

Look for the **ADJUSTABLE PARAMETERS** section:

```javascript
// ═══════════════════════════════════════════════════════════════
// ADJUSTABLE PARAMETERS - Try changing these!
// ═══════════════════════════════════════════════════════════════
const [coherence, setCoherence] = useState(0.3);        // 0.0 to 1.0
const [numDots, setNumDots] = useState(100);            // total dots
const [stimulusDuration, setStimulusDuration] = useState(1000); // ms
```

And the **DISPLAY CONSTANTS**:

```javascript
const CANVAS_SIZE = 300;
const DOT_RADIUS = 2;
const DOT_SPEED = 3;          // pixels per frame
const APERTURE_RADIUS = 120;  // circular viewing window
```

### Medium Modifications (Add Features)

**Add a confidence rating:**
After each response, ask participants to rate their confidence (1-5). Store this in `trialData`.

**Add a response deadline:**
Force a response within X milliseconds, or record it as a "miss."

**Change the motion directions:**
Instead of left/right, try up/down or use 4 directions.

**Add practice trials:**
Include 5 easy trials (high coherence) before the main experiment.

### Advanced Modifications (New Paradigms)

**Psychometric curve:**
Run multiple coherence levels within a session and plot accuracy vs. coherence.

**Drift Diffusion Model:**
Fit a DDM to RT distributions and estimate drift rate, boundary, and non-decision time.

**Asymmetric rewards:**
Make one direction worth more points. Does this induce bias?

---

## 📊 Understanding the Code

### Key Concepts

**Signal vs. Noise Dots:**
```javascript
dots.push({
    x: ...,
    y: ...,
    isSignal: Math.random() < coherence  // This is the key line!
});
```

Each dot is randomly assigned as "signal" (moves coherently) or "noise" (moves randomly) based on the coherence parameter.

**Motion Update:**
```javascript
if (dot.isSignal) {
    // Signal dots move in the coherent direction
    newX = dot.x + DOT_SPEED * directionRef.current;
} else {
    // Noise dots move in a random direction
    const randomAngle = Math.random() * Math.PI * 2;
    newX = dot.x + Math.cos(randomAngle) * DOT_SPEED;
    newY = dot.y + Math.sin(randomAngle) * DOT_SPEED;
}
```

**Reaction Time Measurement:**
```javascript
setStimulusStartTime(Date.now());  // When stimulus appears
// ...
const rt = Date.now() - stimulusStartTime;  // When response occurs
```

---

## 🧠 Discussion Questions

1. **Coherence threshold:** At what coherence level does your performance drop to chance (50%)? What does this tell you about perceptual limits?

2. **Speed-accuracy tradeoff:** If you respond faster, does your accuracy decrease? How would you test this systematically?

3. **Evidence accumulation:** Why does longer stimulus duration generally improve accuracy (up to a point)? What model of decision-making does this support?

4. **Defining "decision":** When exactly does the "decision" happen—when you see the stimulus, when you feel certain, or when you press the key?

5. **The (A, a₀) framework:** What is the action set A in this task? What factors make up the "problem situation" a₀?

---

## 📚 Key References

- Newsome, W. T., & Paré, E. B. (1988). A selective impairment of motion perception following lesions of the middle temporal visual area (MT). *Journal of Neuroscience*.

- Shadlen, M. N., & Newsome, W. T. (2001). Neural basis of a perceptual decision in the parietal cortex. *Nature Neuroscience*.

- Gold, J. I., & Shadlen, M. N. (2007). The neural basis of decision making. *Annual Review of Neuroscience*.

- Ratcliff, R., & McKoon, G. (2008). The diffusion decision model: Theory and data. *Neural Computation*.

---

## 🛠️ Technical Notes

- **No build step required:** Uses React and Tailwind via CDN
- **No participant database:** Results disappear when the page is closed or reset
- **Mobile-friendly:** Touch the buttons on phones/tablets
- **Browser support:** Any modern browser (Chrome, Firefox, Safari, Edge)

---

## 📝 License

MIT License - Feel free to use, modify, and share!

---

*Created for educational purposes. Part of a course on Learning and Decision-Making.*
