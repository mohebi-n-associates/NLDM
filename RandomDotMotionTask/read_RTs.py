import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Set up publication-quality plot style
plt.style.use('seaborn-v0_8-whitegrid')
plt.rcParams.update({
    'font.family': 'sans-serif',
    'font.sans-serif': ['Helvetica', 'Arial', 'DejaVu Sans'],
    'font.size': 14,
    'axes.labelsize': 16,
    'axes.titlesize': 18,
    'xtick.labelsize': 12,
    'ytick.labelsize': 12,
    'legend.fontsize': 12,
    'figure.dpi': 150,
    'savefig.dpi': 300,
    'savefig.bbox': 'tight',
    'axes.spines.top': False,
    'axes.spines.right': False,
})

file = '/Users/mohebial/Downloads/randomdotmotiontask-778bf-firebase-adminsdk-fbsvc-870e53c9b4.json'
cred = credentials.Certificate(file)
firebase_admin.initialize_app(cred)
db = firestore.client()

# Collect all trial data into a DataFrame
all_trials = []
n_participants = 0
for doc in db.collection('dot_motion_results').stream():
    n_participants += 1
    data = doc.to_dict()
    participant = data.get('participantName', 'Unknown')
    for trial in data.get('trials', []):
        trial['participant'] = participant
        all_trials.append(trial)

df = pd.DataFrame(all_trials)

# Print summary statistics
print("RT Summary Statistics:")
print(df['rt'].describe())

# Create presentation-quality histogram
fig, ax = plt.subplots(figsize=(10, 6))

# Get RT data
rt_data = df['rt'].values

# Create histogram with nice styling
n, bins, patches = ax.hist(rt_data, bins=100, color='#3498db', edgecolor='white', 
                            linewidth=1.2, alpha=0.85)

# Add a subtle gradient effect by coloring bins
cm = plt.cm.Blues
bin_centers = 0.5 * (bins[:-1] + bins[1:])
col = (bin_centers - bin_centers.min()) / (bin_centers.max() - bin_centers.min())
for c, p in zip(col, patches):
    plt.setp(p, 'facecolor', cm(0.4 + c * 0.5))

# Add mean and median lines
mean_rt = np.mean(rt_data)
median_rt = np.median(rt_data)

ax.axvline(mean_rt, color='#e74c3c', linestyle='--', linewidth=2.5, label=f'Mean: {mean_rt:.0f} ms')
ax.axvline(median_rt, color='#2ecc71', linestyle='-', linewidth=2.5, label=f'Median: {median_rt:.0f} ms')

# Labels and title
ax.set_xlabel('Reaction Time (ms)', fontweight='bold')
ax.set_ylabel('Frequency', fontweight='bold')
ax.set_title('Distribution of Reaction Times\nRandom Dot Motion Task', fontweight='bold', pad=15)

# Add legend
ax.legend(loc='upper right', frameon=True, fancybox=True, shadow=True)

# Add sample size annotation
n_trials = len(rt_data)
ax.text(0.98, 0.85, f'n = {n_trials} trials\n{n_participants} participants', 
        transform=ax.transAxes, ha='right', va='top',
        fontsize=12, bbox=dict(boxstyle='round,pad=0.3', facecolor='white', alpha=0.8))

# Adjust layout
plt.tight_layout()

# Save the figure
plt.savefig('/Users/mohebial/Documents/GitHub/NLDM/RandomDotMotionTask/RT_histogram.png', 
            facecolor='white', edgecolor='none')
plt.savefig('/Users/mohebial/Documents/GitHub/NLDM/RandomDotMotionTask/RT_histogram.pdf', 
            facecolor='white', edgecolor='none')

# Show the plot
plt.show()

print(f"\nPlot saved to RT_histogram.png and RT_histogram.pdf")

# ═══════════════════════════════════════════════════════════════
# SPEED-ACCURACY TRADEOFF PLOT
# ═══════════════════════════════════════════════════════════════

fig2, ax2 = plt.subplots(figsize=(10, 6))

# Create RT bins (10 quantile bins for equal sample sizes)
rt_bins = pd.qcut(df['rt'], q=10, duplicates='drop')
accuracy_by_rt = df.groupby(rt_bins)['correct'].agg(['mean', 'count', 'std'])
accuracy_by_rt['se'] = accuracy_by_rt['std'] / np.sqrt(accuracy_by_rt['count'])

# Get bin centers for x-axis
bin_centers_rt = [interval.mid for interval in accuracy_by_rt.index]
accuracy = accuracy_by_rt['mean'].values * 100  # Convert to percentage
se = accuracy_by_rt['se'].values * 100

# Plot with error bars
ax2.errorbar(bin_centers_rt, accuracy, yerr=se, fmt='o-', color='#3498db', 
            linewidth=2.5, markersize=10, capsize=5, capthick=2,
            markerfacecolor='white', markeredgewidth=2)

# Add chance level line
ax2.axhline(50, color='#95a5a6', linestyle='--', linewidth=1.5, label='Chance (50%)')

# Styling
ax2.set_xlabel('Reaction Time (ms)', fontweight='bold')
ax2.set_ylabel('Accuracy (%)', fontweight='bold')
ax2.set_title('Speed-Accuracy Tradeoff\nRandom Dot Motion Task', fontweight='bold', pad=15)
ax2.set_ylim([40, 105])

# Add legend
ax2.legend(loc='lower right', frameon=True, fancybox=True, shadow=True)

# Add sample size annotation
ax2.text(0.02, 0.98, f'n = {len(df)} trials\n{n_participants} participants', 
        transform=ax2.transAxes, ha='left', va='top',
        fontsize=12, bbox=dict(boxstyle='round,pad=0.3', facecolor='white', alpha=0.8))

plt.tight_layout()

# Save the figure
plt.savefig('/Users/mohebial/Documents/GitHub/NLDM/RandomDotMotionTask/performance_vs_RT.png', 
            facecolor='white', edgecolor='none')
plt.savefig('/Users/mohebial/Documents/GitHub/NLDM/RandomDotMotionTask/performance_vs_RT.pdf', 
            facecolor='white', edgecolor='none')

plt.show()

print(f"\nSpeed-accuracy plot saved to performance_vs_RT.png and performance_vs_RT.pdf")