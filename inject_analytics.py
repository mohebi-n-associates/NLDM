import os
import re

ROOT = '/Users/mohebial/Documents/GitHub/NLDM'

# (relative_path_from_root, relative_path_to_analytics_js)
files = [
    # Root level
    ('index.html', 'analytics.js'),
    ('review.html', 'analytics.js'),
    ('demonstrations.html', 'analytics.js'),
    ('experiments.html', 'analytics.js'),
    ('overview.html', 'analytics.js'),
    # One level deep
    ('RandomDotMotionTask/index.html', '../analytics.js'),
    # Two levels deep — ExamPrep modules
    ('ExamPrep/Module06/index.html', '../../analytics.js'),
    ('ExamPrep/Module07/index.html', '../../analytics.js'),
    ('ExamPrep/Module08/index.html', '../../analytics.js'),
    ('ExamPrep/Module09/index.html', '../../analytics.js'),
    ('ExamPrep/Module10/index.html', '../../analytics.js'),
    ('ExamPrep/Module11/index.html', '../../analytics.js'),
    ('ExamPrep/Module12/index.html', '../../analytics.js'),
    # Two levels deep — Demonstrations
    ('Demonstrations/ActorCritic/index.html', '../../analytics.js'),
    ('Demonstrations/bandit_task/index.html', '../../analytics.js'),
    ('Demonstrations/CoffeeWalk/index.html', '../../analytics.js'),
    ('Demonstrations/DriftDiffusionModel/index.html', '../../analytics.js'),
    ('Demonstrations/PlaceCells/index.html', '../../analytics.js'),
    ('Demonstrations/ReinforcementSchedules/index.html', '../../analytics.js'),
    ('Demonstrations/RescorlaWagner/index.html', '../../analytics.js'),
    ('Demonstrations/SoftmaxBandit/index.html', '../../analytics.js'),
    ('Demonstrations/TemporalDifference/index.html', '../../analytics.js'),
    ('Demonstrations/TradingSilver/index.html', '../../analytics.js'),
    ('Demonstrations/WordStemCompletion/index.html', '../../analytics.js'),
]

SNIPPET_TEMPLATE = '<script src="{path}"></script>'
ALREADY_MARKER = 'analytics.js'

results = []
for rel_path, analytics_path in files:
    full_path = os.path.join(ROOT, rel_path)
    if not os.path.exists(full_path):
        results.append(f'SKIP (not found): {rel_path}')
        continue
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    if ALREADY_MARKER in content:
        # Check if it already has the exact script tag or just the marker
        # For simplicity based on the prompt, we skip if the marker is anywhere
        results.append(f'SKIP (already has analytics): {rel_path}')
        continue
    snippet = SNIPPET_TEMPLATE.format(path=analytics_path)
    if '</head>' not in content:
        results.append(f'SKIP (no </head> tag): {rel_path}')
        continue
    new_content = content.replace('</head>', f'  {snippet}\n</head>', 1)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    results.append(f'OK: {rel_path}')

for r in results:
    print(r)
