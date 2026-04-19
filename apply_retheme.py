import os

ROOT = '/Users/mohebial/Documents/GitHub/NLDM'

# ─── SHARED CSS VARIABLES & RESET ─────────────────────────────────────────────
SHARED_VARS = """
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
            --bg:         #f7f4ef;
            --bg-card:    #ffffff;
            --bg-muted:   #f0ece4;
            --border:     #e2ddd5;
            --ink:        #1c1917;
            --ink-light:  #57534e;
            --ink-faint:  #a8a29e;
            --teal:       #0d9488;
            --teal-soft:  rgba(13,148,136,0.1);
            --amber:      #b45309;
            --amber-soft: rgba(180,83,9,0.1);
            --violet:     #6d28d9;
            --violet-soft:rgba(109,40,217,0.1);
            --green:      #15803d;
            --green-soft: rgba(21,128,61,0.1);
            --shadow-sm:  0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05);
            --shadow-md:  0 4px 16px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.06);
            --shadow-lg:  0 12px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.07);
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg);
            color: var(--ink);
            line-height: 1.6;
        }

        header {
            padding: 1.25rem 2.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 1100px;
            margin: 0 auto;
            border-bottom: 1px solid var(--border);
        }

        .back-link {
            color: var(--ink-light);
            text-decoration: none;
            font-size: 0.88rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            transition: color 0.2s;
        }
        .back-link:hover { color: var(--ink); }

        .header-divider { color: var(--border); }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            text-decoration: none;
            color: var(--ink);
        }

        .logo-icon {
            width: 32px;
            height: 32px;
            background: var(--ink);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo-text { font-weight: 700; font-size: 1rem; color: var(--ink); }

        .page-header {
            max-width: 1100px;
            margin: 3rem auto 0;
            padding: 0 2.5rem 2.5rem;
        }

        .page-header h1 {
            font-family: 'Lora', Georgia, serif;
            font-size: clamp(2rem, 4vw, 2.75rem);
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: var(--ink);
        }

        .page-header p {
            color: var(--ink-light);
            font-size: 1.05rem;
            max-width: 600px;
        }

        .page-tag {
            display: inline-block;
            padding: 0.35rem 1rem;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 1.25rem;
        }

        .content {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 2.5rem 6rem;
        }

        footer {
            border-top: 1px solid var(--border);
            padding: 1.75rem 2.5rem;
            text-align: center;
            color: var(--ink-faint);
            font-size: 0.82rem;
            background: var(--bg-card);
        }

        footer a { color: var(--ink-light); text-decoration: none; }
        footer a:hover { color: var(--ink); text-decoration: underline; }
"""

SHARED_HEADER_HTML = """    <header>
        <a href="index.html" class="back-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back
        </a>
        <span class="header-divider">/</span>
        <a href="index.html" class="logo">
            <div class="logo-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 2a9 9 0 0 1 9 9c0 3.6-3.4 6.2-5.5 8.5-1.1 1.2-2.3 2.5-3.5 2.5s-2.4-1.3-3.5-2.5C6.4 17.2 3 14.6 3 11a9 9 0 0 1 9-9z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
            </div>
            <span class="logo-text">NLDM</span>
        </a>
    </header>"""

SHARED_FOOTER_HTML = """    <footer>
        <a href="index.html">&larr; Back to NLDM</a> &nbsp;&middot;&nbsp;
        <a href="https://github.com/mohebi-n-associates/NLDM" target="_blank">GitHub</a>
    </footer>"""

# ─── review.html ──────────────────────────────────────────────────────────────
review = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam Prep | NLDM</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;0,600;1,400&display=swap" rel="stylesheet">
    <style>{SHARED_VARS}
        .page-tag {{ background: var(--amber-soft); color: var(--amber); border: 1px solid rgba(180,83,9,0.15); }}

        .modules-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.25rem;
        }}

        @media (max-width: 680px) {{ .modules-grid {{ grid-template-columns: 1fr; }} }}

        .module-card {{
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 1.75rem;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            box-shadow: var(--shadow-sm);
            transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
            position: relative;
            overflow: hidden;
        }}

        .module-card::before {{
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--amber), #f97316);
            opacity: 0;
            transition: opacity 0.25s;
        }}

        .module-card:hover {{
            border-color: transparent;
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
        }}

        .module-card:hover::before {{ opacity: 1; }}

        .module-num {{
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--amber);
            background: var(--amber-soft);
            border-radius: 6px;
            padding: 0.2rem 0.55rem;
            align-self: flex-start;
        }}

        .module-title {{
            font-size: 1.05rem;
            font-weight: 600;
            line-height: 1.35;
            color: var(--ink);
        }}

        .module-arrow {{
            margin-top: auto;
            padding-top: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.82rem;
            color: var(--ink-faint);
            transition: color 0.2s, gap 0.2s;
        }}

        .module-card:hover .module-arrow {{
            color: var(--amber);
            gap: 0.7rem;
        }}
    </style>
    <script src="analytics.js"></script>
</head>
<body>

{SHARED_HEADER_HTML}

    <div class="page-header">
        <div class="page-tag">&#128221; Exam Prep</div>
        <h1>Exam Prep</h1>
        <p>Key concepts, summaries, and study guides for each module. Work through them before exams to consolidate your understanding.</p>
    </div>

    <div class="content">
        <div class="modules-grid">

            <a href="./ExamPrep/Module06/" class="module-card">
                <span class="module-num">Module 6</span>
                <div class="module-title">Habituation, Sensitization &amp; Perceptual Learning</div>
                <div class="module-arrow">Open guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>

            <a href="./ExamPrep/Module07/" class="module-card">
                <span class="module-num">Module 7</span>
                <div class="module-title">Classical Conditioning</div>
                <div class="module-arrow">Open guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>

            <a href="./ExamPrep/Module08/" class="module-card">
                <span class="module-num">Module 8</span>
                <div class="module-title">Operant Conditioning</div>
                <div class="module-arrow">Open guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>

            <a href="./ExamPrep/Module09/" class="module-card">
                <span class="module-num">Module 9</span>
                <div class="module-title">Generalization &amp; Discrimination Learning</div>
                <div class="module-arrow">Open guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>

            <a href="./ExamPrep/Module10/" class="module-card">
                <span class="module-num">Module 10</span>
                <div class="module-title">Skill Memory &amp; Brain-Machine Interfaces</div>
                <div class="module-arrow">Open guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>

            <a href="./ExamPrep/Module11/" class="module-card">
                <span class="module-num">Module 11</span>
                <div class="module-title">Working Memory, Cognitive Control &amp; Dopamine in the PFC</div>
                <div class="module-arrow">Open guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>

            <a href="./ExamPrep/Module12/" class="module-card">
                <span class="module-num">Module 12</span>
                <div class="module-title">Emotions, Memory &amp; Social Learning</div>
                <div class="module-arrow">Open guide <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </a>

        </div>
    </div>

{SHARED_FOOTER_HTML}

</body>
</html>
"""

# ─── demonstrations.html ──────────────────────────────────────────────────────
demonstrations = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demonstrations | NLDM</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;0,600;1,400&display=swap" rel="stylesheet">
    <style>{SHARED_VARS}
        header {{ max-width: 1200px; }}
        .page-header {{ max-width: 1200px; }}
        .content {{ max-width: 1200px; }}

        .page-tag {{ background: var(--teal-soft); color: var(--teal); border: 1px solid rgba(13,148,136,0.15); }}

        .demo-category {{ margin-bottom: 3.5rem; }}

        .demo-category-header {{
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid var(--border);
        }}

        .demo-category-icon {{
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            flex-shrink: 0;
        }}

        .demo-category-header h3 {{ font-size: 1.1rem; font-weight: 600; color: var(--ink); }}
        .demo-category-header span {{ font-size: 0.8rem; color: var(--ink-light); }}

        .demonstrations-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 1.25rem;
        }}

        @media (max-width: 700px) {{ .demonstrations-grid {{ grid-template-columns: 1fr; }} }}

        .demo-card {{
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            box-shadow: var(--shadow-sm);
            transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
            position: relative;
            overflow: hidden;
        }}

        .demo-card::before {{
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--teal), #06b6d4);
            opacity: 0;
            transition: opacity 0.25s;
        }}

        .demo-card:hover {{
            border-color: transparent;
            transform: translateY(-3px);
            box-shadow: var(--shadow-lg);
        }}

        .demo-card:hover::before {{ opacity: 1; }}

        .demo-card-top {{
            display: flex;
            align-items: flex-start;
            gap: 0.85rem;
        }}

        .demo-number {{
            width: 34px;
            height: 34px;
            border-radius: 9px;
            background: var(--teal-soft);
            color: var(--teal);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.88rem;
            font-weight: 700;
            flex-shrink: 0;
        }}

        .demo-card-title h4 {{ font-size: 1rem; font-weight: 600; margin-bottom: 0.1rem; line-height: 1.3; color: var(--ink); }}
        .demo-card-title span {{ font-size: 0.75rem; color: var(--ink-light); }}

        .demo-card-desc {{ color: var(--ink-light); font-size: 0.88rem; line-height: 1.65; flex: 1; }}

        .demo-card-tags {{ display: flex; flex-wrap: wrap; gap: 0.4rem; }}

        .demo-tag {{
            font-size: 0.7rem;
            padding: 0.2rem 0.55rem;
            border-radius: 6px;
            background: var(--teal-soft);
            color: var(--teal);
            font-weight: 500;
        }}

        .demo-launch-btn {{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.6rem 1.2rem;
            background: var(--teal);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.85rem;
            transition: all 0.25s;
            box-shadow: 0 2px 8px rgba(13,148,136,0.25);
        }}

        .demo-launch-btn:hover {{
            background: #0f766e;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(13,148,136,0.35);
        }}

        .demo-launch-btn svg {{ width: 15px; height: 15px; transition: transform 0.2s; }}
        .demo-launch-btn:hover svg {{ transform: translateX(3px); }}
    </style>
    <script src="analytics.js"></script>
</head>
<body>

{SHARED_HEADER_HTML}

    <div class="page-header">
        <div class="page-tag">&#127891; Interactive Demonstrations</div>
        <h1>Demonstrations</h1>
        <p>Visual explanations of key concepts in cognitive neuroscience. Watch, interact, and build intuition for how the brain makes decisions.</p>
    </div>

    <div class="content">

        <!-- Decision Making -->
        <div class="demo-category">
            <div class="demo-category-header">
                <div class="demo-category-icon" style="background: rgba(13,148,136,0.1);">&#9878;&#65039;</div>
                <div><h3>Decision Making</h3><span>How the brain accumulates evidence and commits to choices</span></div>
            </div>
            <div class="demonstrations-grid">

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">1</div>
                        <div class="demo-card-title"><h4>Trading Silver</h4><span>Value-Based Decision Making</span></div>
                    </div>
                    <p class="demo-card-desc">Should you buy the silver? Watch the brain weigh subjective value against market price, accumulating evidence toward a BUY or DON&rsquo;T BUY boundary.</p>
                    <div class="demo-card-tags"><span class="demo-tag">Drift Rate</span><span class="demo-tag">Threshold</span><span class="demo-tag">DDM</span></div>
                    <a href="./Demonstrations/TradingSilver/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">2</div>
                        <div class="demo-card-title"><h4>The Drift Diffusion Model</h4><span>Mapping the Architecture of Choice</span></div>
                    </div>
                    <p class="demo-card-desc">How does the brain decide what we perceive? See how an evidence accumulator integrates noisy sensory signals until committing to a choice.</p>
                    <div class="demo-card-tags"><span class="demo-tag">Coherence</span><span class="demo-tag">Speed-Accuracy</span><span class="demo-tag">Shadlen &amp; Newsome</span></div>
                    <a href="./Demonstrations/DriftDiffusionModel/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

            </div>
        </div>

        <!-- Learning & Prediction -->
        <div class="demo-category">
            <div class="demo-category-header">
                <div class="demo-category-icon" style="background: rgba(21,128,61,0.1);">&#129504;</div>
                <div><h3>Learning &amp; Prediction</h3><span>How dopamine signals teach the brain to predict rewards</span></div>
            </div>
            <div class="demonstrations-grid">

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">3</div>
                        <div class="demo-card-title"><h4>Learning Value Through Experience</h4><span>The Rescorla-Wagner Model</span></div>
                    </div>
                    <p class="demo-card-desc">An agent discovers a restaurant&rsquo;s true quality through noisy feedback, updating its estimate one meal at a time. Watch prediction errors shrink as learning converges.</p>
                    <div class="demo-card-tags"><span class="demo-tag">Learning Rate &alpha;</span><span class="demo-tag">Prediction Error &delta;</span><span class="demo-tag">Dopamine</span></div>
                    <a href="./Demonstrations/RescorlaWagner/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">4</div>
                        <div class="demo-card-title"><h4>Learning to Anticipate</h4><span>TD Learning &amp; Dopamine</span></div>
                    </div>
                    <p class="demo-card-desc">Prediction errors shift backward from reward to the earliest predictive cue over learning &mdash; the exact pattern seen in dopamine neuron recordings.</p>
                    <div class="demo-card-tags"><span class="demo-tag">TD Error</span><span class="demo-tag">Discount &gamma;</span><span class="demo-tag">Schultz 1997</span></div>
                    <a href="./Demonstrations/TemporalDifference/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">5</div>
                        <div class="demo-card-title"><h4>The Coffee Walk</h4><span>Learning State Values</span></div>
                    </div>
                    <p class="demo-card-desc">Watch values propagate backward from a goal as an agent walks Home &rarr; Park &rarr; Street &rarr; Coffee Shop. See how discount factor shapes the value gradient.</p>
                    <div class="demo-card-tags"><span class="demo-tag">State Values</span><span class="demo-tag">Spatial TD</span><span class="demo-tag">Discount &gamma;</span></div>
                    <a href="./Demonstrations/CoffeeWalk/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

            </div>
        </div>

        <!-- Operant Conditioning -->
        <div class="demo-category">
            <div class="demo-category-header">
                <div class="demo-category-icon" style="background: rgba(180,83,9,0.1);">&#9201;&#65039;</div>
                <div><h3>Operant Conditioning</h3><span>How reinforcement schedules shape the patterns of behavior</span></div>
            </div>
            <div class="demonstrations-grid">

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">6</div>
                        <div class="demo-card-title"><h4>Reinforcement Schedules</h4><span>FR &middot; FI &middot; VR &middot; VI</span></div>
                    </div>
                    <p class="demo-card-desc">Press a lever under four different reinforcement schedules and watch the classic cumulative records emerge &mdash; from the steady slot-machine pull of variable ratio to the scalloped waiting pattern of fixed interval.</p>
                    <div class="demo-card-tags"><span class="demo-tag">Schedules</span><span class="demo-tag">Cumulative Record</span><span class="demo-tag">Skinner</span></div>
                    <a href="./Demonstrations/ReinforcementSchedules/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

            </div>
        </div>

        <!-- Action Selection -->
        <div class="demo-category">
            <div class="demo-category-header">
                <div class="demo-category-icon" style="background: rgba(109,40,217,0.1);">&#127919;</div>
                <div><h3>Action Selection</h3><span>How the brain chooses between competing actions under uncertainty</span></div>
            </div>
            <div class="demonstrations-grid">

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">7</div>
                        <div class="demo-card-title"><h4>The Softmax Bandit</h4><span>Explore vs Exploit</span></div>
                    </div>
                    <p class="demo-card-desc">Two slot machines with hidden payoff rates. Should you exploit the best arm or explore? Temperature &tau; controls the balance in this Boltzmann policy demo.</p>
                    <div class="demo-card-tags"><span class="demo-tag">Temperature &tau;</span><span class="demo-tag">Q-Values</span><span class="demo-tag">Regret</span></div>
                    <a href="./Demonstrations/SoftmaxBandit/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">8</div>
                        <div class="demo-card-title"><h4>The Actor-Critic Model</h4><span>Separating Evaluation from Action</span></div>
                    </div>
                    <p class="demo-card-desc">The Critic learns state value V, the Actor learns action preferences m(a), both taught by a shared dopamine-like prediction error &delta;. Compare learning rates for each system.</p>
                    <div class="demo-card-tags"><span class="demo-tag">Critic (V)</span><span class="demo-tag">Actor (m)</span><span class="demo-tag">Striatum</span></div>
                    <a href="./Demonstrations/ActorCritic/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

            </div>
        </div>

        <!-- Memory & Priming -->
        <div class="demo-category">
            <div class="demo-category-header">
                <div class="demo-category-icon" style="background: rgba(109,40,217,0.1);">&#128161;</div>
                <div><h3>Memory &amp; Priming</h3><span>How prior experience shapes perception and recall without awareness</span></div>
            </div>
            <div class="demonstrations-grid">

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">9</div>
                        <div class="demo-card-title"><h4>Word-Stem Completion</h4><span>Implicit Memory &amp; Priming</span></div>
                    </div>
                    <p class="demo-card-desc">Study a list of words, then complete word stems like MOT___. Does prior exposure bias what comes to mind? Experience the priming effect &mdash; a hallmark of implicit memory.</p>
                    <div class="demo-card-tags"><span class="demo-tag">Priming</span><span class="demo-tag">Implicit Memory</span><span class="demo-tag">Schacter &amp; Graf</span></div>
                    <a href="./Demonstrations/WordStemCompletion/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

            </div>
        </div>

        <!-- Spatial Navigation -->
        <div class="demo-category">
            <div class="demo-category-header">
                <div class="demo-category-icon" style="background: rgba(21,128,61,0.1);">&#128506;&#65039;</div>
                <div><h3>Spatial Navigation</h3><span>How the hippocampus builds a cognitive map of the environment</span></div>
            </div>
            <div class="demonstrations-grid">

                <div class="demo-card">
                    <div class="demo-card-top">
                        <div class="demo-number">10</div>
                        <div class="demo-card-title"><h4>Place Cells &amp; Visual Landmarks</h4><span>Hippocampal Spatial Coding</span></div>
                    </div>
                    <p class="demo-card-desc">Guide a rat through a three-armed maze and watch a hippocampal place cell fire. Rotate the maze and a visual cue card to discover that place fields are anchored to landmarks, not absolute position.</p>
                    <div class="demo-card-tags"><span class="demo-tag">Place Fields</span><span class="demo-tag">Hippocampus</span><span class="demo-tag">O&rsquo;Keefe &amp; Nadel</span></div>
                    <a href="./Demonstrations/PlaceCells/" target="_blank" class="demo-launch-btn">Launch Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>

            </div>
        </div>

    </div>

{SHARED_FOOTER_HTML}

</body>
</html>
"""

# ─── experiments.html ─────────────────────────────────────────────────────────
experiments = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Experiments | NLDM</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;0,600;1,400&display=swap" rel="stylesheet">
    <style>{SHARED_VARS}
        header {{ max-width: 1200px; }}
        .page-header {{ max-width: 1200px; }}
        .content {{ max-width: 1200px; }}

        .page-tag {{ background: var(--violet-soft); color: var(--violet); border: 1px solid rgba(109,40,217,0.15); }}

        .experiments-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.5rem;
        }}

        @media (max-width: 700px) {{ .experiments-grid {{ grid-template-columns: 1fr; }} }}

        .experiment-card {{
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 2rem;
            position: relative;
            overflow: hidden;
            transition: all 0.3s;
            text-decoration: none;
            color: inherit;
            display: block;
            box-shadow: var(--shadow-sm);
        }}

        .experiment-card[href]:hover {{
            transform: translateY(-6px);
            border-color: transparent;
            box-shadow: var(--shadow-lg);
        }}

        .experiment-card::before {{
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--violet), #9333ea);
            opacity: 0;
            transition: opacity 0.3s;
        }}

        .experiment-card[href]:hover::before {{ opacity: 1; }}

        .card-badge {{
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 0.3rem 0.7rem;
            border-radius: 50px;
        }}

        .badge-live {{ background: rgba(21,128,61,0.1); color: var(--green); }}
        .badge-soon {{ background: var(--amber-soft); color: var(--amber); }}
        .badge-new  {{ background: rgba(234,88,12,0.1); color: #ea580c; }}

        .card-icon {{
            width: 56px;
            height: 56px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
        }}

        .experiment-card h3 {{ font-size: 1.2rem; font-weight: 600; margin-bottom: 0.65rem; color: var(--ink); }}

        .experiment-card p {{
            color: var(--ink-light);
            font-size: 0.93rem;
            margin-bottom: 1.25rem;
            line-height: 1.7;
        }}

        .card-tags {{ display: flex; flex-wrap: wrap; gap: 0.5rem; }}

        .card-tag {{
            font-size: 0.75rem;
            padding: 0.3rem 0.7rem;
            background: var(--bg-muted);
            border-radius: 50px;
            color: var(--ink-light);
        }}

        .card-actions {{
            margin-top: 1.5rem;
            display: flex;
            gap: 1rem;
            align-items: center;
        }}

        .btn-primary {{
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            padding: 0.55rem 1.1rem;
            background: var(--violet);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.88rem;
            transition: all 0.25s;
            box-shadow: 0 2px 8px rgba(109,40,217,0.25);
        }}

        .btn-primary:hover {{ background: #5b21b6; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(109,40,217,0.35); }}

        .btn-ghost {{
            color: var(--ink-light);
            font-size: 0.88rem;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            transition: color 0.2s;
        }}

        .btn-ghost:hover {{ color: var(--ink); }}

        .card-arrow {{
            position: absolute;
            bottom: 1.75rem;
            right: 1.75rem;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--bg-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }}

        .experiment-card[href]:hover .card-arrow {{ background: var(--violet); }}
        .experiment-card[href]:hover .card-arrow svg {{ stroke: white; }}

        .experiment-card.muted {{ cursor: default; opacity: 0.7; }}
        .experiment-card.muted:hover {{ transform: none; border-color: var(--border); box-shadow: var(--shadow-sm); }}
        .experiment-card.muted:hover::before {{ opacity: 0; }}
    </style>
    <script src="analytics.js"></script>
</head>
<body>

{SHARED_HEADER_HTML}

    <div class="page-header">
        <div class="page-tag">&#129514; Interactive Labs</div>
        <h1>Experiments</h1>
        <p>Participate in real paradigms, collect your own data, and compare results against the rest of the class in real-time.</p>
    </div>

    <div class="content">
        <div class="experiments-grid">

            <!-- Real-Time Allocation -->
            <div class="experiment-card">
                <span class="card-badge badge-new">New</span>
                <div class="card-icon" style="background: rgba(234,88,12,0.1);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2">
                        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
                    </svg>
                </div>
                <h3>Real-Time Allocation</h3>
                <p>Interactive classroom poll. Distribute 100 points across 5 categories and see the class consensus update in real-time.</p>
                <div class="card-tags">
                    <span class="card-tag">Classroom</span>
                    <span class="card-tag">Poll</span>
                    <span class="card-tag">Real-time</span>
                </div>
                <div class="card-actions">
                    <a href="./ClassPolls/RealTimeAllocation/dist/index.html" class="btn-primary">Join Poll</a>
                    <a href="./ClassPolls/RealTimeAllocation/dist/index.html#/dashboard" class="btn-ghost">Dashboard &rarr;</a>
                </div>
            </div>

            <!-- Random Dot Motion -->
            <a href="./RandomDotMotionTask/" class="experiment-card">
                <span class="card-badge badge-live">Live</span>
                <div class="card-icon" style="background: var(--violet-soft);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" stroke-width="2">
                        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                        <circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
                        <circle cx="7" cy="7" r="1"/><circle cx="17" cy="17" r="1"/>
                        <circle cx="17" cy="7" r="1"/><circle cx="7" cy="17" r="1"/>
                    </svg>
                </div>
                <h3>Random Dot Motion</h3>
                <p>The classic perceptual decision-making paradigm. Detect coherent motion in noisy dot fields and experience how the brain accumulates evidence over time.</p>
                <div class="card-tags">
                    <span class="card-tag">Perception</span>
                    <span class="card-tag">Evidence Accumulation</span>
                    <span class="card-tag">Speed-Accuracy</span>
                </div>
                <div class="card-arrow">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
            </a>

            <!-- Two-Armed Bandit -->
            <div class="experiment-card muted">
                <span class="card-badge badge-soon">Coming Soon</span>
                <div class="card-icon" style="background: var(--violet-soft);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" stroke-width="2">
                        <rect x="3" y="3" width="7" height="18" rx="2"/>
                        <rect x="14" y="3" width="7" height="18" rx="2"/>
                        <circle cx="6.5" cy="12" r="1.5"/>
                        <circle cx="17.5" cy="12" r="1.5"/>
                    </svg>
                </div>
                <h3>Two-Armed Bandit</h3>
                <p>Explore the exploration-exploitation tradeoff. Learn which option pays out more while balancing the need to gather information vs. maximize rewards.</p>
                <div class="card-tags">
                    <span class="card-tag">Reinforcement Learning</span>
                    <span class="card-tag">Explore vs Exploit</span>
                    <span class="card-tag">Reward</span>
                </div>
            </div>

            <!-- Stroop Task -->
            <div class="experiment-card muted">
                <span class="card-badge badge-soon">Coming Soon</span>
                <div class="card-icon" style="background: var(--teal-soft);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2">
                        <path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>
                    </svg>
                </div>
                <h3>Stroop Task</h3>
                <p>Experience cognitive interference firsthand. Name ink colors while ignoring word meanings and discover the limits of attentional control.</p>
                <div class="card-tags">
                    <span class="card-tag">Cognitive Control</span>
                    <span class="card-tag">Interference</span>
                    <span class="card-tag">Attention</span>
                </div>
            </div>

            <!-- Rule Learning -->
            <div class="experiment-card muted">
                <span class="card-badge badge-soon">Coming Soon</span>
                <div class="card-icon" style="background: var(--green-soft);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2">
                        <rect x="3" y="3" width="6" height="8" rx="1"/>
                        <rect x="15" y="3" width="6" height="8" rx="1"/>
                        <rect x="9" y="13" width="6" height="8" rx="1"/>
                        <circle cx="6" cy="7" r="1"/>
                        <path d="M16 5l3 3-3 3"/>
                    </svg>
                </div>
                <h3>Rule Learning Task</h3>
                <p>Discover hidden rules through trial and error, then adapt when the rules suddenly change. A test of cognitive flexibility and hypothesis testing.</p>
                <div class="card-tags">
                    <span class="card-tag">Cognitive Flexibility</span>
                    <span class="card-tag">Rule Learning</span>
                    <span class="card-tag">Set Shifting</span>
                </div>
            </div>

        </div>
    </div>

{SHARED_FOOTER_HTML}

</body>
</html>
"""

# ─── overview.html ────────────────────────────────────────────────────────────
overview = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Overview | NLDM</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;0,600;1,400&display=swap" rel="stylesheet">
    <style>{SHARED_VARS}
        body {{ min-height: 100vh; display: flex; flex-direction: column; }}

        main {{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem 2.5rem;
            text-align: center;
        }}

        .placeholder-icon {{ font-size: 3.5rem; margin-bottom: 1.5rem; line-height: 1; }}

        h1 {{
            font-family: 'Lora', Georgia, serif;
            font-size: clamp(2rem, 4vw, 2.75rem);
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--ink);
        }}

        h1 em {{ font-style: italic; color: var(--green); }}

        .main-p {{
            color: var(--ink-light);
            font-size: 1.05rem;
            max-width: 480px;
            margin: 0 auto 2.5rem;
        }}

        .pill {{
            display: inline-block;
            background: var(--green-soft);
            border: 1px solid rgba(21,128,61,0.2);
            color: var(--green);
            padding: 0.45rem 1.1rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 2.5rem;
        }}

        .back-btn {{
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.7rem 1.4rem;
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--ink-light);
            text-decoration: none;
            border-radius: 10px;
            font-weight: 500;
            font-size: 0.9rem;
            box-shadow: var(--shadow-sm);
            transition: all 0.2s;
        }}

        .back-btn:hover {{ border-color: var(--green); color: var(--ink); box-shadow: var(--shadow-md); }}
    </style>
    <script src="analytics.js"></script>
</head>
<body>

{SHARED_HEADER_HTML}

    <main>
        <div class="placeholder-icon">&#128193;</div>
        <div class="pill">Coming Soon</div>
        <h1>Course <em>Overview</em></h1>
        <p class="main-p">The syllabus, lecture schedule, grading policy, and course information will be available here at the start of term.</p>
        <a href="index.html" class="back-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to home
        </a>
    </main>

{SHARED_FOOTER_HTML}

</body>
</html>
"""

files = {
    'review.html': review,
    'demonstrations.html': demonstrations,
    'experiments.html': experiments,
    'overview.html': overview,
}

for filename, content in files.items():
    path = os.path.join(ROOT, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'OK: {filename}')

print('Done.')
