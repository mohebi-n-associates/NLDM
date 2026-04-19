import os

ROOT = os.getcwd()

HUB_DARK_CSS = """
        /* ── Dark mode overrides ── */
        [data-theme="dark"] {
            --bg:         #1c1917;
            --bg-card:    #292524;
            --bg-muted:   #231f1c;
            --border:     #3c3632;
            --ink:        #fafaf9;
            --ink-light:  #d6d3d1;
            --ink-faint:  #78716c;
            --teal:       #2dd4bf;
            --teal-soft:  rgba(45,212,191,0.12);
            --amber:      #fbbf24;
            --amber-soft: rgba(251,191,36,0.12);
            --violet:     #a78bfa;
            --violet-soft:rgba(167,139,250,0.12);
            --green:      #4ade80;
            --green-soft: rgba(74,222,128,0.12);
            --shadow-sm:  0 1px 3px rgba(0,0,0,0.4);
            --shadow-md:  0 4px 16px rgba(0,0,0,0.5);
            --shadow-lg:  0 16px 40px rgba(0,0,0,0.6);
        }
        [data-theme="dark"] .logo-icon { background: #e7e5e4; }
        [data-theme="dark"] .logo-icon svg { stroke: #1c1917 !important; }

        /* ── Theme toggle button ── */
        #theme-toggle {
            background: none;
            border: 1px solid var(--border);
            color: var(--ink-light);
            width: 34px; height: 34px;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            padding: 0;
            transition: background 0.2s, color 0.2s;
        }
        #theme-toggle:hover { background: var(--bg-muted); color: var(--ink); }
"""

MODULE_LIGHT_CSS = """
    /* ── Light mode overrides ── */
    [data-theme="light"] {
        --dark: #f7f4ef;
        --dark-light: #ffffff;
        --dark-mid: #f0ece4;
        --white: #1c1917;
        --gray: #57534e;
        --gray-light: #44403c;
        --light: #1c1917;
        --border: rgba(0,0,0,0.1);
        --primary: #4f46e5;
        --primary-dark: #4338ca;
        --secondary: #db2777;
        --accent: #0891b2;
        --emerald: #059669;
        --amber: #b45309;
        --rose: #e11d48;
    }
    [data-theme="light"] body { background: #f7f4ef; color: #1c1917; }
    [data-theme="light"] .bg-layer { display: none; }
    [data-theme="light"] .scroll-progress { background: linear-gradient(90deg, #4f46e5, #db2777); }
    /* ... remainder of MODULE_LIGHT_CSS from query ... */
    #theme-toggle {
        background: none;
        border: 1px solid var(--border);
        color: var(--gray-light);
        width: 34px; height: 34px;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        padding: 0;
        transition: background 0.2s, color 0.2s;
    }
    #theme-toggle:hover { background: rgba(255,255,255,0.08); color: var(--white); }
    [data-theme="light"] #theme-toggle { border-color: #e2ddd5; color: #57534e; }
    [data-theme="light"] #theme-toggle:hover { background: #f0ece4; color: #1c1917; }
"""

TOGGLE_BTN = '<button id="theme-toggle" onclick="__toggleTheme()" aria-label="Toggle theme"></button>'

hub_pages = ['index.html', 'review.html', 'demonstrations.html', 'experiments.html', 'overview.html']
for fname in hub_pages:
    path = os.path.join(ROOT, fname)
    if not os.path.exists(path):
        print(f'SKIP (not found): {fname}')
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'theme-toggle' in content:
        print(f'SKIP (already done): {fname}')
        continue
    content = content.replace('</style>', HUB_DARK_CSS + '\n    </style>', 1)
    content = content.replace('<script src="analytics.js"></script>', '<script src="theme.js"></script>\n  <script src="analytics.js"></script>', 1)
    if fname == 'index.html':
        old = '        <a href="https://github.com/mohebi-n-associates/NLDM" target="_blank" class="header-link">GitHub &rarr;</a>\n    </header>'
        new = '        <div style="display:flex;align-items:center;gap:.75rem;">\n            ' + TOGGLE_BTN + '\n            <a href="https://github.com/mohebi-n-associates/NLDM" target="_blank" class="header-link">GitHub &rarr;</a>\n        </div>\n    </header>'
        content = content.replace(old, new, 1)
    else:
        content = content.replace('</header>', '        ' + TOGGLE_BTN.replace('>', ' style="margin-left:auto">', 1) + '\n    </header>', 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'OK: {fname}')

module_nums = ['06', '07', '08', '09', '10', '11', '12']
for num in module_nums:
    rel = f'ExamPrep/Module{num}/index.html'
    path = os.path.join(ROOT, rel)
    if not os.path.exists(path):
        print(f'SKIP (not found): {rel}')
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'theme-toggle' in content:
        print(f'SKIP (already done): {rel}')
        continue
    content = content.replace('</style>', MODULE_LIGHT_CSS + '\n  </style>', 1)
    content = content.replace('<script src="../../analytics.js"></script>', '<script src="../../theme.js"></script>\n  <script src="../../analytics.js"></script>', 1)
    content = content.replace('</header>', '  ' + TOGGLE_BTN + '\n</header>', 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'OK: {rel}')
