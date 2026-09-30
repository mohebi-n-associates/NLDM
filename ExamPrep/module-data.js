window.NLDM_MODULES = {
  "01": {
    title: "Foundations: Learning, Choice & Decision",
    summary: "The conceptual map for the course: what learning and decision-making mean, why uncertainty creates a computational problem, and how goals, alternatives, values, and choice map onto the brain.",
    tags: ["Definitions", "Decision framework", "Neural systems"],
    objectives: [
      "Distinguish learning from a temporary change in performance.",
      "Explain why a choice requires at least two alternatives.",
      "Describe the roles of goals, knowledge, alternatives, and values in a decision.",
      "Explain why uncertain environments require learning and computation rather than fixed reflexes.",
      "Map core decision components onto PFC, ACC, hippocampus, vmPFC, dopamine, basal ganglia, and LIP."
    ],
    sections: [
      {
        title: "Why definitions matter",
        content: `<p>Words such as <strong>learning</strong>, <strong>decision</strong>, and <strong>choice</strong> feel intuitive until we test their boundaries. A useful definition must separate learning from fatigue, maturation, sensory adaptation, reflexes, and a one-time change in behavior.</p><p>Learning is inferred from behavior, but it is not identical to behavior. A person may learn something without expressing it immediately, and performance can change temporarily without lasting learning. The scientific task is to connect experience to a relatively durable change in behavior or in the mechanisms that support behavior.</p><div class="concept-check"><strong>Stress test:</strong> If caffeine briefly improves reaction time, performance changed—but did learning occur? Ask whether experience produced a durable change that can be expressed later.</div>`
      },
      {
        title: "The anatomy of a decision problem",
        content: `<p>A decision is not merely an action. It is a problem structured by several components:</p><table><thead><tr><th>Component</th><th>Question</th></tr></thead><tbody><tr><td>Goal</td><td>What outcome is the agent trying to achieve?</td></tr><tr><td>Knowledge</td><td>What does the agent believe about the situation?</td></tr><tr><td>Alternatives</td><td>What actions or options are available?</td></tr><tr><td>Values</td><td>How desirable or costly are the possible outcomes?</td></tr><tr><td>Choice</td><td>Which alternative is selected?</td></tr></tbody></table><p>A change in any component can change the decision. The same options produce different choices when goals, beliefs, or subjective values differ.</p>`
      },
      {
        title: "Choice, uncertainty, and ambiguity",
        content: `<p><strong>Choice</strong> requires at least two possible alternatives. A response with no alternative may be an action or reflex, but it is not a choice in the relevant sense.</p><p>Decision difficulty grows when goals are unclear, knowledge is incomplete, alternatives are poorly specified, or values are hard to compare. Later modules separate <strong>risk</strong>, where probabilities are known, from <strong>ambiguity</strong>, where probabilities themselves are uncertain.</p><p>Time also matters. Delaying a choice can create more information, but it can carry opportunity costs. Decision-making therefore includes deciding when to stop gathering evidence and commit.</p>`
      },
      {
        title: "Why brains are needed",
        content: `<p>Fixed stimulus-response rules work in stable environments. Brains become valuable when the world is variable, partially observable, and uncertain. An adaptive organism must infer hidden states, remember previous outcomes, compare unlike options, predict consequences, and revise its behavior.</p><p>This is the course's central claim: the brain is an organ for solving uncertainty. Learning updates the organism's internal model; decision mechanisms use that model to select action.</p>`
      },
      {
        title: "Mapping the framework onto neural systems",
        content: `<table><thead><tr><th>Function</th><th>Candidate neural contribution</th></tr></thead><tbody><tr><td>Maintain goals</td><td>Dorsolateral prefrontal cortex supports task rules and longer-term goals.</td></tr><tr><td>Monitor conflict</td><td>Anterior cingulate cortex tracks conflict, uncertainty, and the need to adjust control.</td></tr><tr><td>Represent alternatives</td><td>PFC constructs action possibilities; hippocampal memory supplies relevant episodes and imagined futures.</td></tr><tr><td>Compute subjective value</td><td>Ventromedial PFC integrates multiple attributes into a common value signal.</td></tr><tr><td>Learn value</td><td>Dopamine systems broadcast prediction-error signals that update striatal representations.</td></tr><tr><td>Accumulate evidence</td><td>Parietal and frontal circuits, including LIP, integrate evidence toward commitment.</td></tr></tbody></table><p>These are interacting systems, not isolated boxes. A decision emerges from their coordination.</p>`
      },
      {
        title: "The course arc",
        content: `<p>The remaining modules progressively fill in this map. Modules 2–4 ask how values and evidence are represented. Module 5 asks how value is learned. Modules 6–9 examine major forms of learning. Modules 10–12 cover skill, working memory, emotion, and social learning. Module 13 asks how biological learning compares with machine learning.</p><div class="concept-check"><strong>Unifying question:</strong> How does an agent use incomplete evidence and past experience to select an adaptive action?</div>`
      }
    ],
    terms: [
      {term: "Learning", definition: "A relatively durable change in behavior or in the mechanisms supporting behavior that results from experience."},
      {term: "Performance", definition: "The behavior expressed at a particular moment; it can be affected by motivation, fatigue, context, or temporary state."},
      {term: "Decision", definition: "A structured problem involving goals, knowledge, alternatives, values, and selection."},
      {term: "Choice", definition: "Selection of one option from at least two available alternatives."},
      {term: "Alternative", definition: "A possible action or option available to the decision-maker."},
      {term: "Subjective value", definition: "The decision-maker's internal estimate of how desirable an option or outcome is."},
      {term: "Uncertainty", definition: "Incomplete knowledge about states, outcomes, or the reliability of an estimate."},
      {term: "ACC", definition: "Anterior cingulate cortex; contributes to conflict monitoring, uncertainty, learning-rate adjustment, and control allocation."},
      {term: "vmPFC", definition: "Ventromedial prefrontal cortex; integrates attributes into subjective-value representations."},
      {term: "Evidence accumulation", definition: "Integration of noisy information over time until a decision criterion is reached."}
    ],
    questions: [
      {text: "Which example most clearly demonstrates learning rather than a temporary performance change?", options: ["Running faster immediately after caffeine", "Responding less after repeated harmless tones and showing the change later", "Blinking when air reaches the eye", "Typing slowly because of fatigue"], correct: 1, explanation: "The repeated-tone case links experience to a change that persists beyond a momentary state."},
      {text: "Why is a reflexive withdrawal from a hot surface not necessarily a choice?", options: ["It has no goal", "It involves the spinal cord", "There may be no competing alternative under consideration", "It is always learned"], correct: 2, explanation: "Choice requires selection among alternatives; a fixed protective response need not include that structure."},
      {text: "A person can list the pros and cons of two options but cannot feel which is preferable. Which function is most directly impaired?", options: ["Sensory transduction", "Subjective-value integration", "Motor execution", "Long-term potentiation"], correct: 1, explanation: "Integrating attributes into an overall subjective value is strongly associated with vmPFC function."},
      {text: "What does ACC activity most naturally signal in the introductory framework?", options: ["Retinal motion", "Conflict or uncertainty requiring control", "Muscle fatigue", "Sound frequency"], correct: 1, explanation: "ACC helps monitor conflict, uncertainty, and the need to adjust control."},
      {text: "Why does an uncertain environment create a need for learning?", options: ["Fixed responses are always metabolically expensive", "The same stimulus can require different actions as conditions change", "Learning eliminates all noise", "Only uncertain environments contain rewards"], correct: 1, explanation: "When consequences vary with hidden or changing conditions, agents must update predictions rather than rely only on fixed responses."},
      {text: "Which change can alter a decision while leaving the available alternatives unchanged?", options: ["A new goal", "Removal of all neural noise", "Elimination of value", "Absence of any action"], correct: 0, explanation: "The same alternatives can be ranked differently when the decision-maker's goal changes."},
      {text: "Which system is most directly associated with learning from reward prediction errors?", options: ["Dopamine projections to striatum", "Primary visual cortex only", "Spinal motor neurons", "Cochlea"], correct: 0, explanation: "Midbrain dopamine signals help update value and action representations in striatum."},
      {text: "What is the best summary of the course's organizing problem?", options: ["How reflexes remove all uncertainty", "How agents use experience and incomplete evidence to choose adaptive actions", "How all decisions become conscious", "How value can be measured only in money"], correct: 1, explanation: "The course connects experience, uncertainty, value, computation, and neural action selection."}
    ],
    related: [
      {title: "Course overview", description: "See the complete thirteen-module arc.", href: "../../overview.html"},
      {title: "Demonstrations", description: "Preview the models that operationalize the framework.", href: "../../demonstrations.html"},
      {title: "Experiments", description: "Experience choice tasks from the participant's perspective.", href: "../../experiments.html"}
    ],
    previous: null,
    next: "02"
  },

  "02": {
    title: "Value, Risk & Ambiguity",
    summary: "How the brain compares unlike options using a common currency, integrates benefits and action costs, and changes choice when probabilities are known, risky, or ambiguous.",
    tags: ["Common currency", "Expected utility", "Risk and ambiguity"],
    objectives: [
      "Explain why comparing unlike options requires a common subjective-value code.",
      "Distinguish stimulus value, action cost, and action value.",
      "Use expected value and expected utility to analyze risky choices.",
      "Distinguish risk from ambiguity and aleatory from epistemic uncertainty.",
      "Describe contributions of vmPFC, striatum, insula, PFC, and dopamine to value and uncertainty."
    ],
    sections: [
      {
        title: "The common-currency problem",
        content: `<p>Choices often compare attributes with different units: price, taste, time, effort, social meaning, and risk. A choice system needs a representation that lets these attributes influence a single comparison. The course calls this a neural <strong>common currency</strong>.</p><p><strong>Stimulus value (SV)</strong> is the expected subjective value of obtaining or consuming an option. <strong>Action cost (AC)</strong> represents effort, delay, or other costs of obtaining it. <strong>Action value (AV)</strong> integrates the two.</p><div class="equation">AV = SV − AC</div><p>The same stimulus can therefore support different actions when effort, delay, or context changes.</p>`
      },
      {
        title: "From value difference to choice",
        content: `<p>Value comparison is noisy. In a drift-diffusion account, momentary evidence favoring one option over another is accumulated until it reaches a decision bound. Larger value differences produce faster average drift, shorter response times, and more consistent choices. Similar values create slow, variable choices.</p><table><thead><tr><th>Parameter</th><th>Interpretation</th></tr></thead><tbody><tr><td>Drift</td><td>Average evidence direction, related to value difference.</td></tr><tr><td>Noise</td><td>Trial-to-trial and moment-to-moment variability.</td></tr><tr><td>Bound</td><td>Evidence required before commitment.</td></tr></tbody></table>`
      },
      {
        title: "Where subjective value is represented",
        content: `<p>Activity in <strong>vmPFC</strong> tracks willingness to pay and subjective value across different types of goods. This modality-independent representation is what makes vmPFC a candidate common-currency region.</p><p>A Becker–DeGroot–Marschak-style auction can estimate willingness to pay while making honest valuation the best strategy. The neural claim is not that vmPFC contains literal dollars; it represents an internal ranking that correlates with revealed preferences.</p><p>Values also depend on time. Delayed outcomes are typically discounted, so the subjective value of the same reward decreases as its delay grows.</p>`
      },
      {
        title: "Risk, ambiguity, and two kinds of uncertainty",
        content: `<table><thead><tr><th>Concept</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td>Risk</td><td>Outcome probabilities are known.</td><td>A gamble with a stated 50% chance.</td></tr><tr><td>Ambiguity</td><td>Relevant probabilities are unknown or incompletely specified.</td><td>Choosing from an urn with an unknown color composition.</td></tr><tr><td>Aleatory uncertainty</td><td>Irreducible randomness in the process.</td><td>The next fair coin flip.</td></tr><tr><td>Epistemic uncertainty</td><td>Uncertainty caused by limited knowledge.</td><td>Whether the coin is fair.</td></tr></tbody></table><p>People commonly prefer a risky option over an objectively comparable ambiguous one. More information can reduce epistemic uncertainty, but it cannot remove the randomness of a fair coin.</p>`
      },
      {
        title: "Expected value and expected utility",
        content: `<div class="equation">Expected value: EV = Σ pᵢ × xᵢ</div><p>Expected value weights each objective outcome by its probability. <strong>Expected utility</strong> instead weights the subjective utility of each outcome.</p><div class="equation">Expected utility: EU = Σ pᵢ × u(xᵢ)</div><p>Diminishing marginal utility explains why an additional dollar can matter less as wealth increases. Expected utility is a normative framework for internally consistent choice, but observed behavior can depart from it. The distinction between normative and descriptive models is essential: a model can prescribe how an ideal agent should choose without fully predicting how people do choose.</p>`
      },
      {
        title: "Neural systems for risk and uncertainty",
        content: `<p>The <strong>striatum</strong> contributes to reward anticipation and approach. The <strong>prefrontal cortex</strong> contributes control and evaluation. The <strong>insula</strong> responds to aversive bodily states, risk, and uncertainty and may function as an alarm signal. vmPFC integrates subjective value.</p><p>Dopamine neurons multiplex information. Phasic deviations from baseline can signal reward prediction errors, while sustained activity can track uncertainty across a waiting period. These are not identical to pleasure: they are computational signals that help guide learning and behavior.</p><div class="concept-check"><strong>Do not collapse the terms:</strong> known risk, ambiguous probability, outcome variance, and uncertainty about your estimate are related but different quantities.</div>`
      }
    ],
    terms: [
      {term: "Common currency", definition: "A shared subjective-value representation that permits unlike options and attributes to be compared."},
      {term: "Stimulus value", definition: "The expected subjective benefit of obtaining or consuming a stimulus."},
      {term: "Action cost", definition: "Effort, time, risk, or another cost required to obtain an outcome."},
      {term: "Action value", definition: "Integrated value of performing an action, represented here as stimulus value minus action cost."},
      {term: "Risk", definition: "Choice among outcomes whose probabilities are known."},
      {term: "Ambiguity", definition: "Choice when relevant outcome probabilities are unknown or incompletely specified."},
      {term: "Aleatory uncertainty", definition: "Irreducible variability inherent in a stochastic process."},
      {term: "Epistemic uncertainty", definition: "Reducible uncertainty arising from incomplete knowledge or limited data."},
      {term: "Expected utility", definition: "The probability-weighted sum of subjective utilities rather than objective outcome magnitudes."},
      {term: "vmPFC", definition: "A prefrontal region whose activity tracks integrated subjective value across different reward types."}
    ],
    questions: [
      {text: "Why does choice require a common currency?", options: ["All options have the same physical unit", "Unlike attributes must influence a shared comparison", "Money is always the only reward", "Neural signals contain no noise"], correct: 1, explanation: "A common value representation allows price, effort, taste, delay, and other attributes to affect one comparison."},
      {text: "An appealing restaurant is an hour away. In AV = SV − AC, the travel time primarily changes:", options: ["Stimulus value only", "Action cost", "Outcome probability only", "Sensory noise"], correct: 1, explanation: "The restaurant can retain the same intrinsic appeal while the cost of acting to obtain it increases."},
      {text: "Which is a decision under ambiguity?", options: ["A fair coin bet", "A lottery with published odds", "Choosing a treatment when its success rate is unknown", "A die roll"], correct: 2, explanation: "The relevant probability is not specified, making this ambiguity rather than known risk."},
      {text: "What can additional observations reduce?", options: ["Aleatory uncertainty of a fair coin", "Epistemic uncertainty about whether a coin is fair", "All randomness", "Diminishing utility"], correct: 1, explanation: "More data can improve knowledge of the coin's bias but cannot determine the next stochastic outcome."},
      {text: "Why can expected utility prefer a sure amount over an equal-EV gamble?", options: ["Probabilities are ignored", "Utility can be concave with diminishing marginal gains", "Outcomes have no value", "Risk and ambiguity are identical"], correct: 1, explanation: "A concave utility function makes the loss hurt more in utility terms than an equal monetary gain helps."},
      {text: "Which result supports vmPFC as a common-currency region?", options: ["It responds only to visual motion", "Its activity tracks subjective value across different reward categories", "It controls spinal reflexes", "It stores objective prices"], correct: 1, explanation: "A modality-independent value code can compare different goods in a shared representational format."},
      {text: "In a value-based diffusion model, a larger value difference should generally produce:", options: ["Slower and less reliable choices", "Faster and more reliable choices", "No effect on response time", "Only a criterion shift"], correct: 1, explanation: "A larger difference increases drift toward the higher-valued bound."},
      {text: "Which statement about dopamine is most accurate here?", options: ["It is simply pleasure", "Phasic and sustained activity can carry different learning and uncertainty signals", "It encodes only movement", "It removes subjective preferences"], correct: 1, explanation: "The slides distinguish phasic prediction-error signaling from sustained uncertainty-related activity."}
    ],
    related: [
      {title: "Trading Silver", description: "Manipulate values and observe noisy choice dynamics.", href: "../../Demonstrations/TradingSilver/"},
      {title: "Drift Diffusion", description: "Explore how drift, noise, and bounds shape choices.", href: "../../Demonstrations/DriftDiffusionModel/"},
      {title: "Student projects", description: "See applications involving risk and ambiguity.", href: "../../student-projects.html"}
    ],
    previous: "01",
    next: "03"
  },

  "03": {
    title: "Choice Under Uncertainty",
    summary: "How the anterior cingulate and orbitofrontal cortex track uncertainty, volatility, value, and information—and how curiosity changes what counts as rewarding.",
    tags: ["ACC and OFC", "Volatility", "Information seeking"],
    objectives: [
      "Distinguish probability, outcome risk, and uncertainty about an estimate.",
      "Explain why an optimal learning rate depends on environmental volatility.",
      "Describe ACC contributions to prediction error, reward history, exploration, and information value.",
      "Describe OFC representations of outcome identity and changing reward features.",
      "Explain how novelty and information can influence choice beyond physical reward."
    ],
    sections: [
      {
        title: "Three quantities that should not be confused",
        content: `<table><thead><tr><th>Quantity</th><th>What it describes</th></tr></thead><tbody><tr><td>Probability</td><td>The true likelihood of an outcome in the environment.</td></tr><tr><td>Risk</td><td>The spread or variance of possible outcomes; often greatest near p = .5 for binary outcomes.</td></tr><tr><td>Uncertainty</td><td>The decision-maker's confidence in an estimated probability or value.</td></tr></tbody></table><p>Two agents can face the same objective probability but have different uncertainty because one has observed more evidence. This distinction matters because uncertainty should influence both learning and information-seeking.</p>`
      },
      {
        title: "Learning rate should follow volatility",
        content: `<div class="equation">Vₜ₊₁ = Vₜ + α × δₜ</div><p>The learning rate α determines how strongly the current prediction error changes value. In a <strong>stable</strong> environment, a low learning rate prevents overreaction to random noise. In a <strong>volatile</strong> environment, a high learning rate helps the agent adapt after true changes.</p><p>The best α is therefore not a fixed personality trait. It should track the estimated rate at which the environment changes.</p>`
      },
      {
        title: "ACC: history, volatility, and exploration",
        content: `<p>The anterior cingulate cortex represents multiple quantities relevant to adaptive learning: expected reward, outcome prediction errors, volatility, and the value of gathering information. ACC activity increases when people explore rather than simply choose the option with the highest current estimate.</p><p>Lesion evidence suggests ACC is needed to integrate outcomes across an appropriate history. Without it, choice can become dominated by only the most recent trial. The problem is not merely detecting an error; it is deciding how much the error should change future behavior.</p>`
      },
      {
        title: "OFC: what outcome is expected?",
        content: `<p>Orbitofrontal cortex contributes detailed representations of expected outcomes—their identity, sensory properties, and current desirability. This supports flexible revaluation. If an outcome becomes devalued, an intact goal-directed system can change choice without relearning every action from scratch.</p><p>OFC is therefore more than a scalar reward meter. It helps represent <em>which</em> outcome is predicted, allowing current goals and physiological state to modify its value.</p>`
      },
      {
        title: "The value of information",
        content: `<p>Exploration can sacrifice immediate reward to improve future decisions. Information has <strong>instrumental value</strong> when it can guide later action. People and animals also seek <strong>non-instrumental information</strong> that cannot change the eventual outcome, suggesting that knowing can itself acquire value.</p><p>ACC participates in decisions to explore, while a broader network involving prefrontal, striatal, habenular, and dopaminergic systems helps integrate information value with physical reward.</p>`
      },
      {
        title: "Novelty and curiosity",
        content: `<p>Novelty detection draws on multiple systems and timescales. Perirhinal cortex, hippocampus, prefrontal cortex, amygdala, basal forebrain, and striatum can distinguish novelty, recency, or surprise. Fast-learning systems also tend to forget quickly; slower systems support more stable familiarity estimates.</p><p>Novelty is not identical to reward. Dopamine can enhance learning about rewards associated with novel stimuli without necessarily encoding novelty prediction errors when novelty has no reward value. Keeping novelty and reward partly separate preserves flexibility: novelty can be appetitive, neutral, or aversive depending on context.</p><div class="concept-check"><strong>Central synthesis:</strong> Adaptive choice requires estimates of value, uncertainty, volatility, and information—not expected reward alone.</div>`
      }
    ],
    terms: [
      {term: "Volatility", definition: "The rate at which the underlying state or reward structure of an environment changes."},
      {term: "Learning rate", definition: "The fraction of a prediction error used to update an estimate on the current trial."},
      {term: "Exploration", definition: "Choosing partly to gain information rather than maximize estimated immediate reward."},
      {term: "Exploitation", definition: "Choosing the option currently believed to have the highest value."},
      {term: "Value of information", definition: "The benefit of reducing uncertainty, either for future action or because information itself is valued."},
      {term: "ACC", definition: "Anterior cingulate cortex; contributes to action-outcome learning, volatility tracking, exploration, and control allocation."},
      {term: "OFC", definition: "Orbitofrontal cortex; represents expected outcome identity and features needed for flexible revaluation."},
      {term: "Outcome devaluation", definition: "A reduction in an outcome's current desirability used to test whether behavior is goal-directed."},
      {term: "Novelty", definition: "The degree to which a stimulus or event has not been encountered before in the relevant context."},
      {term: "Non-instrumental information", definition: "Information sought even though obtaining it cannot improve the material outcome."}
    ],
    questions: [
      {text: "A slot machine's payoff changes every few trials. What learning-rate adjustment is adaptive?", options: ["Lower α", "Higher α", "Set α to zero", "Ignore prediction errors"], correct: 1, explanation: "High volatility makes recent outcomes more informative about the current state, favoring faster updating."},
      {text: "Why should a stable environment favor a lower learning rate?", options: ["Rewards have no variance", "Single surprising outcomes are more likely to be noise than true change", "No learning is possible", "ACC is inactive"], correct: 1, explanation: "Slow updating prevents estimates from chasing random fluctuations."},
      {text: "Choosing an uncertain option to learn its payoff is an example of:", options: ["Exploitation", "Exploration", "Outcome devaluation", "Sensory adaptation"], correct: 1, explanation: "The choice gives up some expected immediate value to acquire information."},
      {text: "Which impairment best fits an ACC lesion in the cited reward-history work?", options: ["Blindness", "Choices depend almost entirely on the last outcome", "All rewards lose identity", "No motor output"], correct: 1, explanation: "ACC supports integration over a suitable history rather than only the most recent trial."},
      {text: "Why is OFC important after an outcome is devalued?", options: ["It produces the reward", "It represents expected outcome features and current desirability", "It removes uncertainty from sensory evidence", "It controls the cochlea"], correct: 1, explanation: "Detailed outcome representations permit flexible choice when current value changes."},
      {text: "Seeking a spoiler for a story even though it cannot change the ending illustrates:", options: ["Non-instrumental information seeking", "Only expected-value maximization", "Habituation", "Motor learning"], correct: 0, explanation: "The information changes knowledge but cannot improve the external outcome."},
      {text: "What distinguishes uncertainty from objective probability?", options: ["Uncertainty describes confidence in an estimate", "Uncertainty is always irreducible", "Probability is subjective only", "They are synonyms"], correct: 0, explanation: "Uncertainty can differ across observers who have different amounts of evidence about the same process."},
      {text: "Why is novelty kept partly separate from reward valuation?", options: ["Novelty is always pleasant", "Its sign depends on context and it can be appetitive or aversive", "Dopamine never responds to reward", "Familiarity has no neural basis"], correct: 1, explanation: "A flexible system should not force every new stimulus to carry the same reward value."}
    ],
    related: [
      {title: "Softmax Bandit", description: "See exploration change with choice temperature.", href: "../../Demonstrations/SoftmaxBandit/"},
      {title: "Two-Armed Bandit", description: "Learn changing reward probabilities anonymously.", href: "../../Demonstrations/bandit_task/"},
      {title: "Actor–Critic", description: "Preview how values and policies are updated.", href: "../../Demonstrations/ActorCritic/"}
    ],
    previous: "02",
    next: "04"
  },

  "04": {
    title: "Perceptual Decision-Making",
    summary: "How noisy sensory evidence becomes a categorical choice: signal detection, motion-sensitive cortex, accumulation to bound, urgency, and confidence.",
    tags: ["Signal detection", "Drift diffusion", "MT and LIP"],
    objectives: [
      "Distinguish perceptual sensitivity from decision criterion using signal detection theory.",
      "Explain how random-dot motion isolates noisy sensory evidence.",
      "Describe correlational and causal evidence that area MT represents motion evidence.",
      "Interpret drift rate, boundary, starting point, and noise in a drift-diffusion model.",
      "Explain how parietal and frontal circuits transform graded evidence into commitment and confidence."
    ],
    sections: [
      {
        title: "The perceptual decision problem",
        content: `<p>Sensory signals are noisy and incomplete, but behavior often requires a discrete response: left or right, present or absent, safe or dangerous. A perceptual decision system must infer a hidden state from overlapping distributions of evidence.</p><p>The random-dot motion task controls evidence strength through <strong>coherence</strong>: the proportion of dots moving together. Low coherence produces weak evidence and difficult choices; high coherence produces strong evidence and easier choices.</p>`
      },
      {
        title: "Signal detection: sensitivity versus bias",
        content: `<p>Signal detection theory separates the ability to discriminate signal from noise from the willingness to report that a signal is present.</p><table><thead><tr><th></th><th>Signal present</th><th>Signal absent</th></tr></thead><tbody><tr><td>Say “present”</td><td>Hit</td><td>False alarm</td></tr><tr><td>Say “absent”</td><td>Miss</td><td>Correct rejection</td></tr></tbody></table><p><strong>Sensitivity (d′)</strong> depends on the separation of the internal signal and noise distributions. The <strong>criterion</strong> is the evidence threshold for saying “present.” Payoffs, expectations, and urgency can move the criterion without improving sensory sensitivity.</p><div class="equation">d′ = z(hit rate) − z(false-alarm rate)</div>`
      },
      {
        title: "Area MT represents motion evidence",
        content: `<p>Neurons in middle temporal cortex (MT/V5) are selective for motion direction. Their neurometric sensitivity can approach the animal's psychometric sensitivity in random-dot tasks.</p><p>Three kinds of evidence matter:</p><ul><li><strong>Representation:</strong> firing rates scale with motion strength in a neuron's preferred direction.</li><li><strong>Choice probability:</strong> trial-to-trial fluctuations predict choice even when the stimulus is identical.</li><li><strong>Causality:</strong> microstimulation biases reports toward the stimulated neurons' preferred direction.</li></ul><p>MT supplies momentary sensory evidence. Another mechanism must integrate it over time.</p>`
      },
      {
        title: "Accumulation to bound",
        content: `<p>The drift-diffusion model treats a decision variable as a noisy running total. A choice occurs when this total reaches one of two bounds.</p><table><thead><tr><th>Parameter</th><th>Behavioral meaning</th><th>Neural interpretation</th></tr></thead><tbody><tr><td>Drift rate v</td><td>Quality/direction of evidence</td><td>Difference between competing evidence populations</td></tr><tr><td>Boundary a</td><td>Speed–accuracy setting</td><td>Evidence required before commitment</td></tr><tr><td>Starting point z</td><td>Prior bias</td><td>Initial advantage for one response</td></tr><tr><td>Noise</td><td>Choice and RT variability</td><td>Stochastic neural activity</td></tr><tr><td>Nondecision time</td><td>Encoding and movement time</td><td>Processes outside deliberation</td></tr></tbody></table><p>Higher boundaries improve accuracy but lengthen response time. Stronger evidence increases drift and usually improves both speed and accuracy.</p>`
      },
      {
        title: "Where evidence becomes commitment",
        content: `<p>Neural activity in LIP, FEF, posterior parietal cortex, and frontal orienting fields reflects evolving decision variables. Parietal signals can track graded accumulator values, while frontal signals can become more categorical near commitment.</p><p>This supports a distributed pathway: MT represents momentary evidence; parietal and frontal circuits integrate it; motor-planning circuits embody the emerging choice. Decision and action preparation are therefore closely linked.</p>`
      },
      {
        title: "Urgency and confidence",
        content: `<p>A fixed-bound model can wait indefinitely when evidence is weak. Biological systems often add an <strong>urgency signal</strong> or collapsing bound so that less evidence is required as time passes. This reduces costly indecision but increases late errors.</p><p>Confidence reflects evidence quality and the state of the accumulator. Animals can opt for a smaller sure reward more often after weak evidence, and waiting time can predict accuracy. Confidence is not infallible introspection; it is a usable readout of decision evidence.</p><div class="concept-check"><strong>General principle:</strong> Sensory cortex supplies evidence, association circuits integrate it, and thresholds translate graded belief into categorical action.</div>`
      }
    ],
    terms: [
      {term: "Random-dot motion", definition: "A perceptual task in which a controlled proportion of dots moves coherently while the remainder moves randomly."},
      {term: "Coherence", definition: "The proportion of motion elements carrying a shared directional signal."},
      {term: "Sensitivity (d′)", definition: "Standardized separation between internal signal and noise distributions."},
      {term: "Criterion", definition: "The internal evidence threshold used to classify a stimulus as signal-present."},
      {term: "Area MT", definition: "Motion-sensitive extrastriate visual cortex that represents direction and strength of motion evidence."},
      {term: "Drift rate", definition: "Average rate and direction at which evidence accumulates."},
      {term: "Decision boundary", definition: "Amount of accumulated evidence required before committing to a response."},
      {term: "Starting-point bias", definition: "Initial displacement of the decision variable caused by priors, payoffs, or expectations."},
      {term: "Urgency signal", definition: "Time-dependent pressure to commit, functionally similar to lowering a decision bound."},
      {term: "Confidence", definition: "An estimate of the probability that a decision is correct based on available evidence and decision dynamics."}
    ],
    questions: [
      {text: "A participant says “signal present” more often, increasing both hits and false alarms. What most likely changed?", options: ["Sensitivity only", "Criterion", "Motion coherence", "Nondecision time only"], correct: 1, explanation: "A more liberal criterion produces more present responses without necessarily increasing separation of signal and noise."},
      {text: "What does lower dot coherence do in an RDM task?", options: ["Strengthens directional evidence", "Weakens directional evidence", "Raises objective reward", "Eliminates noise"], correct: 1, explanation: "Fewer dots carry coherent directional motion, making discrimination harder."},
      {text: "Which finding is the strongest causal evidence for MT's role?", options: ["MT responds to motion", "MT activity correlates with choice", "MT microstimulation biases motion reports", "MT is anatomically near visual cortex"], correct: 2, explanation: "Directly manipulating MT and changing behavior supports a causal contribution."},
      {text: "Raising the DDM boundary should generally cause:", options: ["Faster, less accurate choices", "Slower, more accurate choices", "Faster, more accurate choices with no cost", "No behavioral change"], correct: 1, explanation: "A higher bound requires more evidence, trading time for accuracy."},
      {text: "Which parameter most directly reflects stimulus quality?", options: ["Drift rate", "Starting point", "Motor latency", "Criterion label"], correct: 0, explanation: "Stronger evidence produces a larger average drift toward the correct bound."},
      {text: "Why is MT not sufficient to explain the complete decision?", options: ["MT has no motion selectivity", "It represents momentary evidence but does not by itself explain temporal integration and commitment", "MT contains only motor neurons", "It works only in humans"], correct: 1, explanation: "Downstream parietal and frontal circuits accumulate MT-like evidence toward action."},
      {text: "A deadline causes people to respond with less evidence late in a trial. This is consistent with:", options: ["A growing urgency signal", "Higher sensitivity", "No decision boundary", "Outcome devaluation"], correct: 0, explanation: "Urgency effectively lowers the evidence requirement as time passes."},
      {text: "Why might confidence decline on weak-coherence trials?", options: ["The accumulator contains less diagnostic evidence", "The motor response disappears", "All criteria become identical", "Weak evidence guarantees an error"], correct: 0, explanation: "Weak evidence makes the chosen state less distinct from its alternative, reducing estimated correctness."}
    ],
    related: [
      {title: "Random Dot Motion", description: "Experience changing coherence, accuracy, and response time.", href: "../../RandomDotMotionTask/"},
      {title: "Drift Diffusion", description: "Manipulate model parameters directly.", href: "../../Demonstrations/DriftDiffusionModel/"},
      {title: "Trading Silver", description: "Apply accumulation to value-based choice.", href: "../../Demonstrations/TradingSilver/"}
    ],
    previous: "03",
    next: "05"
  },

  "05": {
    title: "Value Learning, Dopamine & Reinforcement Learning",
    summary: "How prediction errors update value, how temporal-difference learning assigns credit through time, and how dopamine shapes state values and action policies in the basal ganglia.",
    tags: ["Prediction error", "Temporal difference", "Actor–critic"],
    objectives: [
      "Explain why learning is driven by prediction error rather than reward alone.",
      "Apply the Rescorla–Wagner update and interpret learning rate.",
      "Describe dopamine responses to unexpected, predicted, and omitted rewards.",
      "Explain temporal-difference learning, discounting, and backward credit assignment.",
      "Distinguish critic/state-value learning from actor/action-policy learning and describe causal dopamine evidence."
    ],
    sections: [
      {
        title: "The credit-assignment problem",
        content: `<p>Choices require values, but values are not given in advance. An agent must discover which states, cues, and actions predict outcomes. The key learning signal is <strong>surprise</strong>: the difference between what occurred and what was expected.</p><div class="equation">Prediction error: δₜ = rₜ − Vₜ</div><p>A positive error means better than expected; a negative error means worse than expected; a fully predicted outcome produces zero error and little or no update.</p>`
      },
      {
        title: "Rescorla–Wagner value updating",
        content: `<div class="equation">Vₜ₊₁ = Vₜ + α(rₜ − Vₜ)</div><p>The learning rate α controls how much weight the latest error receives. Rewriting the equation shows that the new value is a weighted average of the previous estimate and current outcome:</p><div class="equation">Vₜ₊₁ = (1 − α)Vₜ + αrₜ</div><p>Large α produces rapid, noisy updating. Small α produces slow, stable learning. When reward is fully predicted, r − V = 0, so value stops changing.</p>`
      },
      {
        title: "Dopamine as reward prediction error",
        content: `<p>Midbrain dopamine neurons in VTA and substantia nigra project broadly to striatum and cortex. Their phasic responses match the sign and timing of reward prediction error:</p><ul><li>An unexpected reward produces a burst.</li><li>After learning, the burst transfers from reward to the predictive cue.</li><li>An expected reward produces little response at delivery.</li><li>An omitted expected reward produces a pause at the expected time.</li></ul><p>This is more precise than “dopamine equals pleasure.” The signal indicates a change in expected value and teaches downstream synapses.</p>`
      },
      {
        title: "Temporal-difference learning",
        content: `<p>Rescorla–Wagner updates after an outcome. Temporal-difference learning extends the error to sequences by including the value of the next state.</p><div class="equation">δₜ = rₜ + γV(sₜ₊₁) − V(sₜ)</div><p>The discount factor γ determines how much future value matters. Values closer to reward become accurate first; prediction errors then migrate backward to earlier predictors. This backward shift is temporal credit assignment: earlier states gain value because they lead to later valuable states.</p><p>A high γ places more weight on delayed outcomes; a low γ discounts the future steeply.</p>`
      },
      {
        title: "Bandits, Q-values, and softmax choice",
        content: `<p>In a multi-armed bandit, each action has an unknown reward probability. The agent must learn a separate action value Q(a) while balancing exploration and exploitation.</p><div class="equation">Qₜ₊₁(a) = Qₜ(a) + α[rₜ − Qₜ(a)]</div><p>Only the chosen action is updated. A <strong>softmax policy</strong> translates action values into choice probabilities. Inverse temperature β controls exploitation: high β makes choice nearly deterministic; low β produces more exploration.</p><div class="equation">P(a) = exp(βQ(a)) / Σⱼ exp(βQ(j))</div>`
      },
      {
        title: "Actor–critic and causal evidence",
        content: `<p>The <strong>critic</strong> estimates state value V(s) and computes TD error. The <strong>actor</strong> stores a policy or action preferences and uses the same error to strengthen or weaken the selected action.</p><table><thead><tr><th>Component</th><th>Computational role</th><th>Candidate substrate</th></tr></thead><tbody><tr><td>Critic</td><td>Evaluate states; temporal credit</td><td>Ventral striatum with VTA dopamine</td></tr><tr><td>Actor</td><td>Select actions; structural credit</td><td>Dorsal striatum and basal-ganglia pathways</td></tr><tr><td>Teaching signal</td><td>Signed prediction error</td><td>Phasic dopamine</td></tr></tbody></table><p>Manipulating dopamine changes subsequent choice as the model predicts. Dopamine medication in Parkinson's disease shifts learning from positive versus negative outcomes, and time-specific optogenetic stimulation can increase repetition of the action paired with the artificial dopamine burst.</p><div class="concept-check"><strong>Core message:</strong> A small dopaminergic system broadcasts error signals that update both what situations are worth and which actions should be repeated.</div>`
      }
    ],
    terms: [
      {term: "Prediction error", definition: "Signed difference between obtained and expected value, used as a learning signal."},
      {term: "Learning rate α", definition: "Fraction of the current error used to update a value estimate."},
      {term: "Rescorla–Wagner rule", definition: "Error-correction rule that changes expected value in proportion to outcome minus expectation."},
      {term: "Temporal-difference error", definition: "Difference between current value and the combination of immediate reward plus discounted next-state value."},
      {term: "Discount factor γ", definition: "Weight assigned to future value relative to immediate reward."},
      {term: "Q-value", definition: "Expected cumulative reward for selecting a particular action in a state."},
      {term: "Softmax", definition: "Choice rule that converts relative action values into graded probabilities."},
      {term: "Inverse temperature β", definition: "Softmax parameter controlling how strongly choice favors the highest-value action."},
      {term: "Critic", definition: "Actor–critic component that estimates state value and supplies a prediction-error signal."},
      {term: "Actor", definition: "Actor–critic component that learns and selects an action policy."}
    ],
    questions: [
      {text: "A reward arrives exactly as predicted. What is the Rescorla–Wagner error?", options: ["Positive", "Negative", "Approximately zero", "Equal to α"], correct: 2, explanation: "When obtained and expected rewards match, there is no discrepancy to drive an update."},
      {text: "If α is increased while experience stays the same, values will generally:", options: ["Update faster", "Stop updating", "Ignore recent outcomes", "Become objective probabilities instantly"], correct: 0, explanation: "A larger learning rate applies more of each prediction error to the value estimate."},
      {text: "After conditioning, where should a phasic dopamine burst occur?", options: ["Only after movement", "At the predictive cue rather than the fully predicted reward", "Continuously at maximum", "Never"], correct: 1, explanation: "Once reward is predicted, surprise transfers to the earliest reliable predictor."},
      {text: "What happens when an expected reward is omitted?", options: ["A positive dopamine burst", "A pause below baseline at the expected reward time", "No neural response is possible", "Only sensory cortex changes"], correct: 1, explanation: "The omission is a negative prediction error timed to when reward was expected."},
      {text: "What does TD learning add to a simple reward-minus-expectation rule?", options: ["Only motor noise", "Discounted value of the next state", "A fixed utility curve", "No temporal information"], correct: 1, explanation: "Next-state value allows learning before terminal reward and propagates credit through sequences."},
      {text: "A lower γ implies that an agent:", options: ["Values distant rewards more", "Discounts distant rewards more steeply", "Has no learning rate", "Always explores"], correct: 1, explanation: "A lower discount factor rapidly reduces the contribution of delayed outcomes."},
      {text: "In Q-learning for a bandit, which value is updated after a choice?", options: ["Every action equally", "Only the chosen action's value", "No action value", "The motor response time only"], correct: 1, explanation: "The outcome provides direct evidence about the selected option."},
      {text: "What does high softmax β produce?", options: ["More random choice", "Stronger exploitation of the highest-valued action", "Lower learned values", "No prediction error"], correct: 1, explanation: "High inverse temperature concentrates probability on the current best option."},
      {text: "Which actor–critic component handles state evaluation?", options: ["Actor", "Critic", "Motor plant", "Sensory receptor"], correct: 1, explanation: "The critic learns state value and computes the error used by both components."},
      {text: "Why is optogenetic dopamine manipulation important evidence?", options: ["It only correlates firing with reward", "Its timing can causally alter whether a chosen action is repeated", "It proves dopamine is pleasure", "It removes action selection"], correct: 1, explanation: "Direct, time-specific manipulation closes the causal loop predicted by the learning model."}
    ],
    related: [
      {title: "Rescorla–Wagner", description: "Manipulate learning rate, salience, and prediction error.", href: "../../Demonstrations/RescorlaWagner/"},
      {title: "Temporal Difference", description: "Watch prediction errors move backward through time.", href: "../../Demonstrations/TemporalDifference/"},
      {title: "Coffee Walk", description: "Learn values across a sequence of states.", href: "../../Demonstrations/CoffeeWalk/"},
      {title: "Softmax Bandit", description: "Explore learning and choice temperature.", href: "../../Demonstrations/SoftmaxBandit/"},
      {title: "Actor–Critic", description: "Separate state evaluation from policy learning.", href: "../../Demonstrations/ActorCritic/"},
      {title: "Two-Armed Bandit", description: "Apply action-value learning in a changing task.", href: "../../Demonstrations/bandit_task/"}
    ],
    previous: "04",
    next: "06"
  },

  "06": {
    title: "Habituation, Sensitization & Perceptual Learning",
    summary: "How repetition changes attention and responding, from simple Aplysia circuits to priming, perceptual expertise, cortical plasticity, and hippocampal place fields.",
    tags: ["Nonassociative learning", "Aplysia", "Perceptual plasticity"],
    objectives: ["Distinguish habituation, sensory adaptation, fatigue, sensitization, and dishabituation.", "Explain dual-process accounts of repeated stimulation.", "Describe synaptic depression and serotonin-mediated facilitation in Aplysia.", "Distinguish priming, mere exposure, and discrimination training.", "Explain how experience changes cortical maps and spatial representations."],
    sections: [
      {title: "Learning from repetition", content: `<p><strong>Habituation</strong> is a decrease in a behavioral response after repeated exposure to its eliciting stimulus. It is not sensory adaptation or muscle fatigue: the organism remains capable of responding, and a novel stimulus can restore the response through <strong>dishabituation</strong>.</p><p>Habituation is often stimulus-specific and can show spontaneous recovery after a rest. Massed exposure usually produces fast but less durable change; spaced exposure develops more slowly and lasts longer.</p>`},
      {title: "Sensitization and dual processes", content: `<p><strong>Sensitization</strong> is an increase in responsiveness following an intense or arousing event. Unlike habituation, it often generalizes beyond the eliciting stimulus.</p><p>Dual-process theory proposes that a stimulus activates both an S–R habituation process and a state-system sensitization process. Observed behavior is their sum. Weak repeated stimuli tend to reveal habituation; intense stimuli can make sensitization dominate.</p>`},
      {title: "Aplysia: a circuit-level explanation", content: `<p>Repeated siphon stimulation depresses glutamate release from the active sensory neuron onto the motor neuron, weakening gill withdrawal. This is a <strong>homosynaptic</strong> change because it is restricted to the repeatedly active pathway.</p><p>A tail shock recruits modulatory interneurons that release serotonin onto sensory terminals. The next siphon touch releases more glutamate and produces a stronger withdrawal. This <strong>heterosynaptic facilitation</strong> explains why sensitization can generalize.</p>`},
      {title: "Priming and perceptual learning", content: `<p><strong>Priming</strong> occurs when previous exposure facilitates later identification or production, often without conscious recollection. Word-stem completion provides a classic behavioral measure.</p><p><strong>Perceptual learning</strong> improves discrimination through experience. Passive exposure can reveal diagnostic features, while explicit discrimination training with feedback sharpens distinctions among similar stimuli. Expertise changes what information is attended to and how sensory representations are organized.</p>`},
      {title: "Cortical and spatial plasticity", content: `<p>Sensory receptive fields and cortical maps can reorganize with experience or injury. Constraint-induced movement therapy uses intensive behavior to oppose learned non-use and drive remapping.</p><p>Hippocampal <strong>place cells</strong> fire in specific locations. Their place fields become more stable and precise with experience, linking familiarization to spatial representation. Landmark manipulations reveal that the code reflects relationships within an environment rather than a fixed point on the retina.</p>`}
    ],
    terms: [{term:"Habituation",definition:"Response decrement caused by repeated stimulation, not fatigue or receptor adaptation."},{term:"Dishabituation",definition:"Recovery of a habituated response after a novel or intense stimulus."},{term:"Sensitization",definition:"Heightened responsiveness produced by an arousing event."},{term:"Dual-process theory",definition:"Account in which habituation and sensitization processes jointly determine observed response strength."},{term:"Homosynaptic depression",definition:"Reduced transmission confined to the repeatedly active synapse."},{term:"Heterosynaptic facilitation",definition:"Modulatory enhancement that changes transmission at other synapses."},{term:"Priming",definition:"Facilitation of later processing due to prior exposure, often without conscious recall."},{term:"Perceptual learning",definition:"Experience-dependent improvement in detecting or discriminating sensory information."},{term:"Place cell",definition:"Hippocampal neuron that fires when an animal occupies a particular region."},{term:"Cortical plasticity",definition:"Experience-dependent change in receptive fields, maps, or synaptic organization."}],
    questions: [
      {text:"A response returns after a novel stimulus even though the repeated stimulus has not changed. This is:",options:["Fatigue","Dishabituation","Sensory adaptation","Extinction"],correct:1,explanation:"A novel event can restore a habituated response, showing the response system is still capable of acting."},
      {text:"Why is habituation considered stimulus-specific?",options:["All responses decline together","Response can remain strong to a different stimulus","It occurs only in one sensory system","It requires reward"],correct:1,explanation:"A full response to a novel stimulus distinguishes pathway-specific learning from general fatigue."},
      {text:"An intense shock increases responses to several later stimuli. Which process dominates?",options:["Habituation","Sensitization","Priming","Extinction"],correct:1,explanation:"Arousal recruits a state system that broadly amplifies subsequent responding."},
      {text:"What produces short-term habituation in the Aplysia gill-withdrawal circuit?",options:["More serotonin","Less glutamate release from the repeatedly active sensory terminal","Motor-neuron growth","New dopamine neurons"],correct:1,explanation:"Repeated activation produces homosynaptic depression of transmitter release."},
      {text:"Why is Aplysia sensitization heterosynaptic?",options:["It changes only the shocked synapse","A modulatory interneuron facilitates multiple sensory terminals","It has no synapses","It occurs only in muscle"],correct:1,explanation:"Serotonergic modulation changes pathways beyond the one carrying the sensitizing event."},
      {text:"Completing a word stem with a previously viewed word despite no conscious recollection demonstrates:",options:["Priming","Sensitization","Motor fatigue","Punishment"],correct:0,explanation:"Prior exposure biases later processing without requiring explicit memory."},
      {text:"Place fields becoming more stable with exploration best illustrates:",options:["Loss of all spatial coding","Experience-dependent representational plasticity","A fixed reflex","Sensory fatigue"],correct:1,explanation:"Experience refines hippocampal representations of location."}
    ],
    related:[{title:"Word-Stem Completion",description:"Measure implicit-memory priming.",href:"../../Demonstrations/WordStemCompletion/"},{title:"Place Cells",description:"Explore landmarks and hippocampal spatial coding.",href:"../../Demonstrations/PlaceCells/"},{title:"Module 5",description:"Contrast nonassociative change with prediction-error learning.",href:"../Module05/"}],previous:"05",next:"07"
  },

  "07": {
    title: "Classical Conditioning",
    summary: "How organisms learn that one event predicts another, why contingency and timing matter, and how cerebellar and hippocampal circuits support different conditioned relationships.",
    tags: ["Pavlovian learning", "Prediction", "Cerebellum and hippocampus"],
    objectives: ["Use US, UR, CS, and CR precisely.", "Distinguish acquisition, extinction, spontaneous recovery, and renewal.", "Explain why contingency and prediction error matter more than simple pairing.", "Apply blocking and Rescorla–Wagner logic.", "Compare cerebellar and hippocampal contributions to conditioning."],
    sections: [
      {title:"From pairing to prediction",content:`<p>In classical conditioning, a cue comes to predict a biologically significant event. Before learning, an unconditioned stimulus (US) produces an unconditioned response (UR). After CS–US training, the conditioned stimulus (CS) produces a conditioned response (CR).</p><p>The CR is anticipatory and need not copy the UR. Drug cues, for example, can elicit compensatory responses that oppose the drug's direct effect.</p>`},
      {title:"Acquisition, extinction, and context",content:`<p><strong>Acquisition</strong> increases responding as the CS becomes predictive. During <strong>extinction</strong>, the CS occurs without the US and responding declines. Extinction is new learning, not erasure: spontaneous recovery, renewal outside the extinction context, and reinstatement can reveal the original association.</p>`},
      {title:"Timing and contingency",content:`<p>Conditioning depends on how well the CS predicts the US. Forward pairings, in which the CS precedes the US by an informative interval, usually outperform simultaneous or backward pairings. If the US is equally likely without the CS, pairing alone supplies little information.</p><div class="concept-check"><strong>Key distinction:</strong> Contiguity asks whether events occur together; contingency asks whether one changes the probability of the other.</div>`},
      {title:"Prediction error and blocking",content:`<p>In blocking, cue A already predicts the US. Adding a new cue B to the A–US compound produces little learning about B because the US is not surprising.</p><div class="equation">ΔVᵢ = αᵢβ(λ − ΣV)</div><p>Rescorla–Wagner distributes learning across present cues according to the total prediction error. Overshadowing, overexpectation, and conditioned inhibition follow the same competitive logic.</p>`},
      {title:"Neural circuits",content:`<p>Delay eyeblink conditioning depends on cerebellar circuitry: pontine inputs carry CS information, climbing fibers carry the teaching signal, and cerebellar plasticity changes timed output. Trace conditioning introduces a temporal gap and relies more on hippocampal and forebrain representations.</p><p>The hippocampus also supports contextual relationships and configural information. Different forms of conditioning can therefore share behavioral vocabulary while depending on different circuits.</p>`}
    ],
    terms:[{term:"Unconditioned stimulus",definition:"Biologically significant event that elicits a response without prior learning."},{term:"Conditioned stimulus",definition:"Initially neutral cue that gains predictive power through experience."},{term:"Conditioned response",definition:"Learned anticipatory response to the conditioned stimulus."},{term:"Acquisition",definition:"Growth of conditioned responding during predictive CS–US experience."},{term:"Extinction",definition:"New learning produced when the CS no longer predicts the US."},{term:"Contingency",definition:"Degree to which the CS changes the probability of the US."},{term:"Blocking",definition:"Failure to learn about a new cue when an established cue already predicts the outcome."},{term:"Conditioned inhibition",definition:"Learning that a cue predicts omission of an otherwise expected outcome."},{term:"Trace conditioning",definition:"Conditioning with a gap between CS offset and US onset, often requiring hippocampal support."}],
    questions:[
      {text:"After learning, a tone predicts food. The tone is the:",options:["US","UR","CS","CR"],correct:2,explanation:"The formerly neutral tone is now a conditioned predictor."},
      {text:"Why can a CR differ from the UR?",options:["Conditioning has no prediction","The CR prepares for the expected US and may compensate for it","US and CS are identical","The cerebellum prevents learning"],correct:1,explanation:"Conditioned responding is anticipatory and can serve preparation or homeostasis."},
      {text:"A response returns when an extinguished CS is tested in the original context. This is:",options:["Renewal","Acquisition","Habituation","Blocking"],correct:0,explanation:"Context change reveals that extinction suppressed rather than erased the original memory."},
      {text:"Why does blocking occur?",options:["The US is surprising","The established cue already explains the US, leaving little prediction error","The new cue is always invisible","Extinction erases cue A"],correct:1,explanation:"No unexpected outcome remains to assign to the added cue."},
      {text:"Which schedule usually produces strong conditioning?",options:["CS reliably precedes US","US occurs equally often with and without CS","CS follows US","CS and US are unrelated"],correct:0,explanation:"A forward, informative CS supplies predictive value."},
      {text:"Which structure is especially important when a temporal gap must be bridged in trace conditioning?",options:["Hippocampus","Retina","Spinal cord only","Cochlea"],correct:0,explanation:"The hippocampus supports a maintained representation across the trace interval."},
      {text:"What does extinction teach?",options:["The CS never existed","The CS currently predicts no US in this context","The UR is impossible","All synapses reset"],correct:1,explanation:"Extinction adds a competing CS–no-US memory that is context-sensitive."}
    ],
    related:[{title:"Rescorla–Wagner",description:"Simulate acquisition, extinction, and cue competition.",href:"../../Demonstrations/RescorlaWagner/"},{title:"Temporal Difference",description:"Extend prediction through time.",href:"../../Demonstrations/TemporalDifference/"},{title:"Module 6",description:"Contrast associative prediction with nonassociative repetition.",href:"../Module06/"}],previous:"06",next:"08"
  },

  "08": {
    title: "Operant Conditioning",
    summary: "How actions are shaped by their consequences, how reinforcement schedules organize behavior, and how basal-ganglia, orbitofrontal, and dopamine systems support action learning.",
    tags: ["Action–outcome learning", "Reinforcement schedules", "Basal ganglia"],
    objectives:["Distinguish operant from classical conditioning.","Use the S–R–O framework to analyze action learning.","Distinguish reinforcement from punishment and positive from negative procedures.","Predict behavior under fixed/variable and ratio/interval schedules.","Describe roles of dopamine, basal ganglia, OFC, insula, and dACC."],
    sections:[
      {title:"Actions produce outcomes",content:`<p>Operant conditioning changes the probability of an action because of its consequences. In the S–R–O framework, a discriminative stimulus S indicates when response R is likely to produce outcome O.</p><p>Thorndike's law of effect states that actions followed by satisfying outcomes become more likely. Free-operant procedures measure response rate; discrete-trial procedures present separated choice opportunities.</p>`},
      {title:"Shaping, chaining, and timing",content:`<p><strong>Shaping</strong> reinforces successive approximations to a target action. <strong>Chaining</strong> links actions into sequences, with each completed step cueing the next. Immediate, contingent outcomes support learning better than delayed outcomes because temporal proximity reduces credit-assignment ambiguity.</p>`},
      {title:"Reinforcement and punishment",content:`<table><thead><tr><th>Procedure</th><th>Add</th><th>Remove</th></tr></thead><tbody><tr><td>Increase behavior</td><td>Positive reinforcement</td><td>Negative reinforcement</td></tr><tr><td>Decrease behavior</td><td>Positive punishment</td><td>Negative punishment</td></tr></tbody></table><p>Positive and negative describe adding or removing a stimulus—not good and bad. Reinforcement increases the future response; punishment decreases it.</p>`},
      {title:"Schedules of reinforcement",content:`<table><thead><tr><th>Schedule</th><th>Contingency</th><th>Typical pattern</th></tr></thead><tbody><tr><td>Fixed ratio</td><td>Set number of responses</td><td>High rate with post-reinforcement pause</td></tr><tr><td>Variable ratio</td><td>Changing response requirement</td><td>High, steady, persistent rate</td></tr><tr><td>Fixed interval</td><td>First response after set time</td><td>Scalloped acceleration</td></tr><tr><td>Variable interval</td><td>First response after changing time</td><td>Moderate, steady rate</td></tr></tbody></table>`},
      {title:"Brain mechanisms and addiction",content:`<p>Dopamine prediction errors reinforce corticostriatal representations of chosen actions. Dorsal striatum is central to learned action selection; OFC represents outcome identity and current value. Insula and dorsal ACC contribute to aversive outcomes, effort, and control.</p><p>Drugs can produce unusually strong or repeated reinforcement signals and recruit habit circuitry. Addiction is not simply “wanting pleasure”; it reflects learned cue value, action habits, altered control, and persistent motivational signals.</p>`}
    ],
    terms:[{term:"Operant conditioning",definition:"Learning to make or withhold actions because of their consequences."},{term:"Discriminative stimulus",definition:"Cue indicating whether a particular response is likely to be reinforced."},{term:"Shaping",definition:"Reinforcing successive approximations to a target behavior."},{term:"Chaining",definition:"Building an ordered sequence in which each response creates the cue for the next."},{term:"Negative reinforcement",definition:"Increasing behavior by removing or avoiding an aversive event."},{term:"Punishment",definition:"A consequence that decreases the future probability of a behavior."},{term:"Ratio schedule",definition:"Reinforcement determined by number of responses."},{term:"Interval schedule",definition:"Reinforcement determined by the first response after a time interval."},{term:"Outcome devaluation",definition:"Reduction in outcome value used to test goal-directed action control."}],
    questions:[
      {text:"A rat presses a lever and then receives food. What makes this operant?",options:["Food occurs regardless of behavior","The outcome depends on the response","The lever is a US","No learning occurs"],correct:1,explanation:"The response changes the probability of the outcome."},
      {text:"Removing an unpleasant alarm when a seat belt is fastened is:",options:["Negative reinforcement","Positive punishment","Negative punishment","Habituation"],correct:0,explanation:"Removal of the aversive sound increases fastening behavior."},
      {text:"Which schedule usually produces high, persistent responding?",options:["Variable ratio","Fixed interval","Fixed ratio with one response","Extinction"],correct:0,explanation:"Unpredictable response requirements sustain steady responding and resist extinction."},
      {text:"A scalloped response pattern is characteristic of:",options:["Fixed interval","Variable ratio","Continuous punishment","Classical trace conditioning"],correct:0,explanation:"Responding rises as the predictable interval approaches its end."},
      {text:"Why does immediate feedback improve action learning?",options:["It increases ambiguity","It makes credit assignment to the action easier","It removes outcome value","It stops dopamine"],correct:1,explanation:"Short action–outcome delays reduce uncertainty about which action caused the consequence."},
      {text:"Which result indicates goal-directed rather than habitual control?",options:["Action persists after devaluation","Action declines immediately after its outcome is devalued","Response is a reflex","No outcome was learned"],correct:1,explanation:"Sensitivity to current outcome value implies an action–outcome representation."},
      {text:"What does dopamine contribute to operant learning?",options:["Only muscle contraction","A prediction-error signal that changes corticostriatal action representations","Retinal adaptation","Elimination of punishment"],correct:1,explanation:"Signed errors reinforce or weaken recently selected actions."}
    ],
    related:[{title:"Reinforcement Schedules",description:"Produce FR, FI, VR, and VI response patterns.",href:"../../Demonstrations/ReinforcementSchedules/"},{title:"Actor–Critic",description:"Connect action learning to basal-ganglia organization.",href:"../../Demonstrations/ActorCritic/"},{title:"Softmax Bandit",description:"Explore probabilistic action selection.",href:"../../Demonstrations/SoftmaxBandit/"}],previous:"07",next:"09"
  },

  "09": {
    title: "Generalization & Discrimination Learning",
    summary: "How past learning transfers to new stimuli, how training sharpens distinctions, and how elemental, distributed, and configural representations support categories.",
    tags: ["Similarity gradients", "Stimulus representation", "Categories"],
    objectives:["Interpret stimulus-generalization gradients.","Explain how discrimination training changes responding and attention.","Compare discrete, distributed, and configural stimulus representations.","Explain peak shift and acquired distinctiveness/equivalence.","Relate behavioral gradients to sensory cortical and hippocampal representations."],
    sections:[
      {title:"The generalization problem",content:`<p><strong>Generalization</strong> transfers learning to novel events according to similarity. A generalization gradient plots response strength against difference from the trained stimulus. Narrow gradients indicate precise discrimination; broad gradients indicate extensive transfer.</p><p>Generalization is adaptive when similar situations share consequences, but dangerous when superficial similarity hides an important difference.</p>`},
      {title:"Discrimination and peak shift",content:`<p>Discrimination training reinforces responding to S+ and withholds or punishes responding to S−. The resulting gradient can shift its peak away from S−, producing <strong>peak shift</strong>. Training changes both associative value and attention to features that distinguish the stimuli.</p>`},
      {title:"How stimuli are represented",content:`<table><thead><tr><th>Representation</th><th>Idea</th></tr></thead><tbody><tr><td>Discrete/elemental</td><td>Separate nodes code identifiable features.</td></tr><tr><td>Distributed</td><td>Overlapping activity patterns encode similarity naturally.</td></tr><tr><td>Configural</td><td>A combination is represented as a whole beyond the sum of elements.</td></tr></tbody></table><p>Elemental models handle many feature-based discriminations. Configural solutions are needed when a compound's meaning depends on the relationship among its parts, as in negative patterning.</p>`},
      {title:"Learning changes similarity",content:`<p>Stimuli paired with the same outcome can become functionally more similar (<strong>acquired equivalence</strong>), whereas stimuli paired with different outcomes become easier to distinguish (<strong>acquired distinctiveness</strong>). Categories are therefore learned organizations of feature and outcome relationships, not mere lists.</p>`},
      {title:"Neural representations",content:`<p>Topographic sensory maps provide overlapping codes that can support graded generalization. Experience tunes cortical representations toward task-relevant distinctions. Hippocampal pattern separation helps keep similar episodes distinct, while pattern completion retrieves a stored representation from partial cues.</p><div class="concept-check"><strong>Balance:</strong> Good learning requires enough generalization to transfer knowledge and enough discrimination to avoid applying it in the wrong context.</div>`}
    ],
    terms:[{term:"Generalization gradient",definition:"Curve relating response strength to similarity between test and trained stimuli."},{term:"Discrimination learning",definition:"Learning to respond differently to stimuli with different consequences."},{term:"Peak shift",definition:"Maximum responding displaced away from a nonreinforced comparison stimulus."},{term:"Elemental representation",definition:"Stimulus code composed of separable feature elements."},{term:"Distributed representation",definition:"Stimulus code expressed as an overlapping pattern across multiple units."},{term:"Configural representation",definition:"Representation of a compound or relationship as a distinct whole."},{term:"Acquired equivalence",definition:"Increase in functional similarity after stimuli predict the same outcome."},{term:"Acquired distinctiveness",definition:"Increase in discriminability after stimuli predict different outcomes."},{term:"Pattern separation",definition:"Hippocampal process that makes similar input patterns more distinct."}],
    questions:[
      {text:"A broad generalization gradient means:",options:["Responding transfers across many similar stimuli","Only S+ evokes behavior","No learning occurred","All representations are configural"],correct:0,explanation:"Broad gradients reflect extensive transfer beyond the trained stimulus."},
      {text:"Training S+ with reinforcement and S− without reinforcement often shifts peak responding:",options:["Toward S−","Away from S−","To zero","Randomly on every trial"],correct:1,explanation:"Excitation around S+ and inhibition around S− combine to produce peak shift."},
      {text:"Which code naturally represents graded similarity through overlapping activation?",options:["Distributed representation","A single motor command","An unconditioned response","A fixed interval"],correct:0,explanation:"Similar inputs activate overlapping subsets of units in a distributed code."},
      {text:"Negative patterning, where A and B are reinforced but AB is not, challenges:",options:["Purely additive elemental models","All configural models","Sensory receptors","Extinction"],correct:0,explanation:"If AB is only the sum of reinforced A and B, the model predicts the wrong response unless it adds configural information."},
      {text:"Two cues become more confusable after both predict the same outcome. This is:",options:["Acquired equivalence","Peak shift","Punishment","Sensitization"],correct:0,explanation:"Shared consequences increase functional similarity."},
      {text:"What is the adaptive purpose of pattern separation?",options:["Treat all episodes as the same","Reduce interference among similar memories","Eliminate generalization","Create motor fatigue"],correct:1,explanation:"Separating overlapping inputs helps retain distinct episodic records."},
      {text:"What is the central tradeoff in this module?",options:["Reward versus punishment only","Transfer useful knowledge versus preserving important distinctions","Vision versus hearing","Speed versus muscle strength"],correct:1,explanation:"Adaptive agents must generalize enough to transfer and discriminate enough to avoid costly errors."}
    ],
    related:[{title:"Rescorla–Wagner",description:"See how cue values compete during learning.",href:"../../Demonstrations/RescorlaWagner/"},{title:"Place Cells",description:"Explore separation and stability in spatial codes.",href:"../../Demonstrations/PlaceCells/"},{title:"Module 7",description:"Review cue competition and prediction.",href:"../Module07/"}],previous:"08",next:"10"
  },

  "10": {
    title: "Skill Memory & Brain–Machine Interfaces",
    summary: "How practice transforms controlled performance into efficient skill, how cortical–striatal–cerebellar systems divide the work, and how neural activity can control external devices.",
    tags: ["Skill acquisition", "Basal ganglia", "Brain–machine interfaces"],
    objectives:["Classify perceptual–motor and cognitive skills as open or closed.","Explain the cognitive, associative, and autonomous stages of skill learning.","Compare constant/variable and massed/distributed practice.","Describe cortical, basal-ganglia, and cerebellar contributions.","Explain population coding, BMI learning, neural drift, and ethical constraints."],
    sections:[
      {title:"What counts as a skill?",content:`<p>A <strong>skill</strong> is an ability that improves through practice. Perceptual–motor skills coordinate perception and movement; cognitive skills apply rules or strategies. <strong>Closed</strong> skills occur in predictable environments, while <strong>open</strong> skills must adapt online to changing conditions.</p><p>Skills are procedural: performance can improve even when the learner cannot fully verbalize what changed.</p>`},
      {title:"Stages of acquisition",content:`<p>Fitts's stages describe a shift in control. The <strong>cognitive stage</strong> is slow and verbally mediated. The <strong>associative stage</strong> refines action sequences and reduces error. The <strong>autonomous stage</strong> is fast and requires less conscious control.</p><p>Automaticity frees working-memory resources but can reduce flexibility when the environment changes.</p>`},
      {title:"Practice and transfer",content:`<p>Distributed practice supports retention better than equivalent massed practice. Variable practice may hurt immediate performance but improve transfer to new conditions; constant practice can optimize a narrow, stable task. Feedback must be informative without making the learner dependent on constant external correction.</p>`},
      {title:"A distributed neural system",content:`<table><thead><tr><th>System</th><th>Contribution</th></tr></thead><tbody><tr><td>Cortex</td><td>Sensory representations, planning, and task-specific motor patterns</td></tr><tr><td>Basal ganglia</td><td>Action selection, reinforcement, chunking, and automatic routines</td></tr><tr><td>Cerebellum</td><td>Timing, prediction, error correction, and calibration</td></tr></tbody></table><p>Early learning recruits broad control networks; efficient performance shifts toward specialized sensorimotor and subcortical loops. Parkinson's and Huntington's disease reveal separable effects on acquisition and expression.</p>`},
      {title:"Brain–machine interfaces",content:`<p>Motor cortical neurons show directional tuning. A population vector combines many noisy neurons to estimate intended movement more reliably than any single cell. BMIs decode these population signals to control cursors, prostheses, stimulation, or communication devices.</p><p>Users learn the decoder as the decoder adapts to the user: BMI control is itself a skill. <strong>Neural drift</strong> means the contributing population can change across time even when behavior remains stable, creating a challenge for long-term calibration.</p><p>Ethical questions include privacy of neural data, agency, equitable access, consent, security, and whether device actions are experienced as one's own.</p>`}
    ],
    terms:[{term:"Perceptual–motor skill",definition:"Learned action pattern guided by sensory input."},{term:"Cognitive skill",definition:"Practiced ability relying on strategies, rules, or problem solving."},{term:"Open skill",definition:"Skill performed in a changing environment requiring online adaptation."},{term:"Closed skill",definition:"Skill performed under relatively stable and predictable conditions."},{term:"Automaticity",definition:"Efficient performance with reduced demand on conscious control."},{term:"Variable practice",definition:"Practice across changing examples or conditions to improve transfer."},{term:"Population coding",definition:"Representation carried by the joint activity of many broadly tuned neurons."},{term:"Neural drift",definition:"Change in the neural population supporting stable behavior over time."},{term:"BMI",definition:"System that decodes neural activity to control or communicate with an external device."}],
    questions:[
      {text:"Improvising in a changing game is best classified as:",options:["Closed skill","Open skill","Unconditioned reflex","Sensory adaptation"],correct:1,explanation:"The performer must continually adjust to unpredictable external conditions."},
      {text:"Which stage relies most on verbal rules and conscious attention?",options:["Cognitive","Associative","Autonomous","Extinction"],correct:0,explanation:"Beginners initially use explicit instructions and deliberate control."},
      {text:"Why can variable practice improve transfer?",options:["It removes all errors","It trains adaptation across a broader range of conditions","It guarantees faster practice performance","It eliminates memory"],correct:1,explanation:"Variation teaches which features matter across contexts rather than optimizing one narrow case."},
      {text:"Which system is especially important for timing and error-based calibration?",options:["Cerebellum","Retina","Amygdala only","Cochlea"],correct:0,explanation:"Cerebellar circuits predict and correct sensorimotor timing errors."},
      {text:"Why does a BMI use population coding?",options:["Single neurons are perfectly reliable","Joint activity provides a more stable movement estimate","Motor cortex has no direction tuning","It removes the need for learning"],correct:1,explanation:"Combining many broad, noisy signals improves decoding."},
      {text:"Why is BMI control itself a learned skill?",options:["The user must adapt neural activity to the decoder while receiving feedback","The decoder never changes","No feedback exists","Only muscles control it"],correct:0,explanation:"Closed-loop practice changes how the user recruits neural signals and how the decoder interprets them."},
      {text:"What does neural drift challenge?",options:["Long-term decoder stability","The existence of neurons","All motor learning","The concept of feedback"],correct:0,explanation:"A decoder trained on yesterday's population pattern may degrade even when intended behavior is unchanged."}
    ],
    related:[{title:"Actor–Critic",description:"Connect reinforcement to basal-ganglia skill learning.",href:"../../Demonstrations/ActorCritic/"},{title:"Backpropagation",description:"Compare adaptive decoders with error-driven machine learning.",href:"../../Demonstrations/Backpropagation/"},{title:"Module 13",description:"Compare biological and machine learning directly.",href:"../Module13/"}],previous:"09",next:"11"
  },

  "11": {
    title: "Working Memory, Cognitive Control & Dopamine",
    summary: "How prefrontal circuits maintain and manipulate information, how dopamine regulates stability and flexibility, and why control fails in characteristic ways.",
    tags: ["Working memory", "Prefrontal cortex", "D1/D2 modulation"],
    objectives:["Distinguish sensory, short-term, and working memory.","Explain Baddeley's multicomponent model.","Compare PFC maintenance, manipulation, inhibition, and task switching.","Explain attractor stability and dopamine's inverted-U effects.","Relate stability–flexibility tradeoffs to exploration, schizophrenia, and ADHD."],
    sections:[
      {title:"From short-term storage to working memory",content:`<p>Sensory memory briefly preserves modality-specific input. Short-term memory maintains information through rehearsal. <strong>Working memory</strong> keeps information available for manipulation, planning, selection, and goal-directed action.</p><p>Baddeley's framework separates a phonological loop, visuospatial sketchpad, central executive, and episodic buffer. The components interact with long-term knowledge rather than forming an isolated box.</p>`},
      {title:"Cognitive control and PFC",content:`<p>Cognitive control includes controlled updating, task switching, planning, attention, and suppression of inappropriate responses. Dorsolateral PFC is strongly involved in manipulation and rule-guided organization; ventrolateral PFC contributes maintenance, selection, and inhibition.</p><p>Persistent activity can maintain a representation after the stimulus disappears, but the network must also admit relevant new information.</p>`},
      {title:"Attractor networks and gating",content:`<p>Recurrently connected populations can settle into an <strong>attractor state</strong> that maintains a pattern despite noise. A gate controls when incoming information updates the state. Too much stability creates perseveration; too little stability creates distractibility.</p><p>Basal-ganglia–PFC loops help decide when to open the gate, connecting working memory to the same action-selection architecture used elsewhere in the course.</p>`},
      {title:"Dopamine as a modulator",content:`<p>Dopamine is a neuromodulator, not a simple fast excitatory or inhibitory switch. Mesocortical dopamine changes the gain and stability of PFC networks through slower G-protein-coupled D1 and D2 receptors.</p><p>D1-dominant effects tend to stabilize active representations and suppress noise; D2-related effects can promote updating and flexible output. Performance often follows an <strong>inverted-U</strong>: too little dopamine produces weak maintenance, while too much produces rigid or noisy control depending on circuit and receptor balance.</p>`},
      {title:"Clinical and computational consequences",content:`<p>Schizophrenia can involve unstable representations, inappropriate salience, or impaired gating. ADHD can involve difficulty sustaining task goals and regulating flexible updating. These disorders are not reducible to one global dopamine level; receptor, pathway, timing, and region matter.</p><p>The stability–flexibility problem parallels exploitation versus exploration: stable working memory protects a chosen goal, while flexible updating allows adaptation when the world changes.</p>`}
    ],
    terms:[{term:"Working memory",definition:"Temporary active representation available for manipulation and goal-directed use."},{term:"Cognitive control",definition:"Processes that organize behavior around internal goals rather than dominant stimulus-driven responses."},{term:"Phonological loop",definition:"Working-memory component supporting speech-based information."},{term:"Visuospatial sketchpad",definition:"Component supporting temporary visual and spatial representations."},{term:"Attractor state",definition:"Stable recurrent population pattern that persists despite small disturbances."},{term:"Gating",definition:"Control over when information enters, updates, or exits an active representation."},{term:"Neuromodulator",definition:"Signal that adjusts excitability, gain, or plasticity rather than directly carrying fast point-to-point content."},{term:"Inverted-U",definition:"Relationship in which intermediate modulation supports best performance while both extremes impair it."},{term:"Stability–flexibility tradeoff",definition:"Need to protect current goals while remaining able to update when conditions change."}],
    questions:[
      {text:"Remembering a phone number while reordering its digits requires:",options:["Sensory memory only","Working memory","A spinal reflex","Habituation"],correct:1,explanation:"The information is maintained and actively manipulated."},
      {text:"What is the role of an attractor network?",options:["Erase every representation","Maintain a stable activity pattern despite noise","Generate only sensory adaptation","Eliminate recurrent connections"],correct:1,explanation:"Recurrent excitation can keep a representation active after input ends."},
      {text:"A gate that never opens would produce:",options:["Excessive updating","Rigid maintenance and failure to incorporate relevant new information","Perfect flexibility","No long-term memory"],correct:1,explanation:"Overstability protects old content at the cost of adaptation."},
      {text:"Why is dopamine called a neuromodulator here?",options:["It directly encodes every stimulus","It changes gain and circuit dynamics through slower receptor pathways","It exists only in muscles","It has no receptors"],correct:1,explanation:"Dopamine tunes how PFC circuits respond rather than carrying the primary fast signal."},
      {text:"What does an inverted-U predict?",options:["More dopamine is always better","Intermediate modulation can outperform both low and high extremes","Dopamine never affects control","All receptors act identically"],correct:1,explanation:"Both insufficient and excessive modulation can impair PFC computation."},
      {text:"How does working-memory stability relate to exploitation?",options:["Both protect a current policy or goal","They always increase randomness","Neither uses PFC","They prevent learning"],correct:0,explanation:"Stable maintenance supports persistence with the selected goal, analogous to exploiting a current policy."},
      {text:"Why is a one-dimensional 'dopamine level' account of psychiatric symptoms inadequate?",options:["Dopamine has no role","Effects depend on receptor, pathway, region, timing, and network state","All patients are identical","Only serotonin exists"],correct:1,explanation:"Neuromodulatory effects are circuit-specific and nonlinear."}
    ],
    related:[{title:"Rule-learning experiment",description:"Explore cognitive flexibility when available.",href:"../../experiments.html"},{title:"Actor–Critic",description:"Connect PFC gating to basal-ganglia action selection.",href:"../../Demonstrations/ActorCritic/"},{title:"Module 3",description:"Revisit volatility and flexible updating.",href:"../Module03/"}],previous:"10",next:"12"
  },

  "12": {
    title: "Emotion, Memory & Social Learning",
    summary: "How bodily responses, conscious feelings, and action tendencies interact; how the amygdala shapes emotional learning and memory; and how observation transfers knowledge between individuals.",
    tags: ["Emotion", "Amygdala", "Observational learning"],
    objectives:["Separate physiological, behavioral, and conscious components of emotion.","Compare major theories of emotion.","Explain conditioned emotional responses, learned helplessness, and amygdala circuitry.","Describe how arousal changes encoding and retrieval.","Distinguish imitation, emulation, modeling, and social transmission."],
    sections:[
      {title:"What is an emotion?",content:`<p>An emotion is a coordinated cluster of physiological responses, observable behaviors or action tendencies, and conscious feelings. These components can covary without being identical. Cultural display rules influence expression, while many physiological and perceptual capacities have broad biological foundations.</p><p>Autonomic arousal mobilizes energy for action, but similar arousal can accompany different experienced emotions depending on appraisal and context.</p>`},
      {title:"Theories of emotional experience",content:`<table><thead><tr><th>Theory</th><th>Core claim</th></tr></thead><tbody><tr><td>James–Lange</td><td>Perception of bodily change contributes to emotional experience.</td></tr><tr><td>Cannon–Bard</td><td>Central processing produces feeling and bodily response in parallel.</td></tr><tr><td>Two-factor</td><td>Arousal is interpreted using a cognitive label supplied by context.</td></tr><tr><td>Appraisal accounts</td><td>Evaluation of significance, controllability, and goals shapes emotion.</td></tr></tbody></table>`},
      {title:"Emotional learning and the amygdala",content:`<p>A conditioned emotional response transfers affective significance to a predictive cue. Amygdala circuits receive sensory and contextual inputs, learn threat or value relationships, and influence autonomic and defensive outputs.</p><p>The amygdala is not a single “fear center.” Different nuclei participate in input, plasticity, output, and regulation, and PFC–amygdala interactions can suppress or reinterpret learned responses.</p><p>Learned helplessness develops when aversive outcomes appear uncontrollable, changing later motivation and action even when control becomes possible.</p>`},
      {title:"Emotion and memory",content:`<p>Arousal can enhance consolidation of salient events through amygdala interactions with hippocampal and hormonal systems. Yet high stress at retrieval can impair flexible recall and working memory. The effect depends on timing, intensity, and the memory process being measured.</p><p>Emotional memories can be vivid without being perfectly accurate. Confidence and detail are not the same as objective fidelity.</p>`},
      {title:"Learning from others",content:`<p><strong>Social learning</strong> occurs when an observer monitors others and changes later action. Imitation copies an observed action; emulation reproduces an outcome using potentially different actions; modeling includes learning about consequences from another individual's experience.</p><p>Bandura's Bobo-doll work showed that children can acquire actions without direct reinforcement. Mirror-related premotor and parietal activity links observed and executed action, but it does not by itself explain complex empathy or social understanding.</p><p>Birdsong reveals how social feedback and dopamine can tune performance errors. Oxytocin and neuromodulatory systems can change the salience of social cues. Social learning therefore reuses reinforcement, motor, memory, and control circuits rather than relying on one isolated “social-learning center.”</p>`}
    ],
    terms:[{term:"Emotion",definition:"Coordinated physiological, behavioral, and conscious responses to an affectively significant situation."},{term:"Appraisal",definition:"Evaluation of an event's meaning for goals, control, and well-being."},{term:"Conditioned emotional response",definition:"Learned affective or autonomic response to a cue predicting an emotional event."},{term:"Amygdala",definition:"Interconnected nuclei important for affective learning, salience, memory modulation, and defensive output."},{term:"Learned helplessness",definition:"Reduced action after experience with outcomes that appear uncontrollable."},{term:"Emotional memory modulation",definition:"Influence of arousal and amygdala–hormonal systems on encoding and consolidation."},{term:"Imitation",definition:"Reproduction of an observed action pattern."},{term:"Emulation",definition:"Achieving an observed outcome without necessarily copying the model's actions."},{term:"Modeling",definition:"Learning behavior and expected consequences by observing another individual."},{term:"Mirror system",definition:"Distributed action-perception network active during both execution and observation of some actions."}],
    questions:[
      {text:"Which is not sufficient by itself to define a complete emotional episode?",options:["Physiological arousal alone","A cluster of feeling, behavior, and physiology","Context-sensitive appraisal","Action tendency"],correct:0,explanation:"Similar autonomic arousal can accompany different emotions and requires interpretation within a broader response pattern."},
      {text:"Which theory emphasizes interpreting arousal using context?",options:["Two-factor theory","A fixed reflex account","Signal detection theory","Rescorla–Wagner only"],correct:0,explanation:"Two-factor accounts combine bodily arousal with a cognitive label."},
      {text:"Why is calling the amygdala a single fear center misleading?",options:["It has no role in emotion","Its nuclei support multiple learning, salience, memory, and output functions","It exists only in humans","It controls only language"],correct:1,explanation:"Amygdala circuitry is heterogeneous and participates in more than one affective operation."},
      {text:"Stress enhances encoding but impairs recall during an exam. What resolves the apparent contradiction?",options:["Stress has no effect","Its effects depend on timing and memory process","All memories are emotional","Encoding and retrieval are identical"],correct:1,explanation:"Arousal can strengthen consolidation while acute stress at retrieval disrupts flexible access."},
      {text:"A child observes an adult use a tool, then reaches the same outcome with a different movement. This is closest to:",options:["Emulation","Exact imitation","Habituation","Punishment"],correct:0,explanation:"The observer reproduces the result rather than copying the specific action sequence."},
      {text:"What did observational-learning studies show about direct reinforcement?",options:["It is required for every new action","Observers can acquire behavior without being directly reinforced","It prevents imitation","It eliminates attention"],correct:1,explanation:"Consequences observed for a model can guide later action."},
      {text:"Why are mirror responses not a complete theory of social cognition?",options:["They provide an action–observation link but do not alone explain inference, goals, or empathy","They occur only in plants","They eliminate learning","They are identical to dopamine"],correct:0,explanation:"Complex social understanding requires broader memory, valuation, and control systems."},
      {text:"What is the course-level synthesis of social learning?",options:["It uses one isolated social module","It coordinates reinforcement, motor, memory, affective, and control circuits","It needs no observation","It is unrelated to dopamine"],correct:1,explanation:"Social information enters many of the same adaptive-learning systems used for nonsocial behavior."}
    ],
    related:[{title:"Word-Stem Completion",description:"Contrast implicit memory with socially acquired knowledge.",href:"../../Demonstrations/WordStemCompletion/"},{title:"Module 7",description:"Review conditioned emotional responses as predictive learning.",href:"../Module07/"},{title:"Module 13",description:"Compare social biological learning with machine systems.",href:"../Module13/"}],previous:"11",next:"13"
  },

  "13": {
    title: "Learning in Carbon & Silicon",
    summary: "A capstone comparison of biological and machine learning: shared algorithms and architectures, profound mechanistic differences, and a two-way exchange between neuroscience and AI.",
    tags: ["Machine learning", "Biological plausibility", "Course synthesis"],
    objectives: [
      "Distinguish supervised, unsupervised, and reinforcement learning and identify biological analogs.",
      "Trace the conceptual path from formal neurons and Hebbian learning to perceptrons and deep networks.",
      "Explain why exact backpropagation is difficult to map directly onto biological synapses.",
      "Evaluate convergences involving TD error, model-based/model-free control, visual hierarchies, and actor–critic systems.",
      "Explain major divergences between present machine learning and biological learning."
    ],
    sections: [
      {
        title: "Three machine-learning paradigms",
        content: `<table><thead><tr><th>Paradigm</th><th>Training signal</th><th>Biological analogy</th></tr></thead><tbody><tr><td>Supervised</td><td>Correct target for each input</td><td>Cerebellar error-driven motor calibration</td></tr><tr><td>Unsupervised</td><td>No target; discover structure</td><td>Hebbian learning and cortical self-organization</td></tr><tr><td>Reinforcement</td><td>Delayed scalar reward</td><td>Dopamine and basal-ganglia learning</td></tr></tbody></table><p>A whole brain uses all three at once. A child learning language extracts statistical regularities, receives partial social correction, and experiences reinforcement. Integrating these signals flexibly is itself a major unsolved engineering problem.</p>`
      },
      {
        title: "From formal neurons to deep networks",
        content: `<p>McCulloch and Pitts formalized a threshold neuron. Hebb proposed experience-dependent strengthening between coactive neurons. Rosenblatt's perceptron added an error-driven learning rule but could solve only linearly separable problems in its single-layer form.</p><p>Multilayer networks solved representational limits, while backpropagation made their hidden weights trainable. Convolutional networks borrowed hierarchical and pooling ideas from visual neuroscience; modern deep learning scaled these principles with data, compute, and improved optimization.</p><div class="concept-check"><strong>Historical caution:</strong> The XOR problem exposed the limits of a single layer; it did not show that all neural networks were impossible.</div>`
      },
      {
        title: "Backpropagation and biological plausibility",
        content: `<p>Backpropagation computes how each weight contributed to output error and sends precisely coordinated gradients backward through the network. Exact implementation appears biologically difficult because it assumes symmetric forward/backward weights, global error transport, and stored activations.</p><p>The brain still faces the same <strong>credit-assignment problem</strong>. Candidate alternatives include local predictive-coding errors, contrastive Hebbian mechanisms, dendritic error signals, and neuromodulatory gating. Similar final representations do not prove identical learning mechanisms.</p>`
      },
      {
        title: "Four meaningful convergences",
        content: `<ol><li><strong>TD learning and dopamine:</strong> a mathematically defined prediction error closely matches phasic dopamine responses.</li><li><strong>Model-free and model-based control:</strong> habits trade flexibility for speed, while planning uses an internal transition model.</li><li><strong>Hierarchical vision:</strong> early network layers and early visual areas represent simple features; later stages encode increasingly complex, invariant structure.</li><li><strong>Actor–critic organization:</strong> value evaluation and policy learning map onto distinguishable corticostriatal systems sharing dopamine error signals.</li></ol><p>These are productive convergences when a shared computational object generates testable predictions across machine and biological systems.</p>`
      },
      {
        title: "Where brains and machines diverge",
        content: `<table><thead><tr><th>Biological learners</th><th>Typical present-day ML systems</th></tr></thead><tbody><tr><td>Learn from few examples and rich prior structure</td><td>Often require large datasets or extensive simulation</td></tr><tr><td>Learn continuously without clean task boundaries</td><td>Can catastrophically forget earlier tasks</td></tr><tr><td>Integrate perception, action, memory, motivation, and social context</td><td>Are commonly optimized for a narrower objective</td></tr><tr><td>Operate with severe energy and communication constraints</td><td>Can require energy-intensive centralized computation</td></tr><tr><td>Use local, recurrent, embodied, chemically modulated circuits</td><td>Often use abstract layers and global gradient optimization</td></tr></tbody></table><p>Machine competence at a task does not imply human-like understanding, consciousness, motivation, or learning history.</p>`
      },
      {
        title: "A bidirectional science",
        content: `<p>Neuroscience has inspired machine architectures, but trained models now also serve as quantitative hypotheses about brains. Researchers compare network and neural population geometry, predict which images will drive specific neurons, and test whether learning algorithms reproduce biological behavior.</p><p>The relationship is a loop: biology inspires algorithms; algorithms make precise predictions; experiments accept, reject, or refine those models. The capstone question therefore has no simple yes/no answer. Brains and machines can share computations while differing radically in implementation, data efficiency, embodiment, and goals.</p><div class="concept-check"><strong>Capstone:</strong> Ask separately whether two systems share a problem, a representation, an algorithm, an implementation, or only an outward behavior.</div>`
      }
    ],
    terms: [
      {term: "Supervised learning", definition: "Learning a mapping from inputs to supplied target outputs using an explicit error signal."},
      {term: "Unsupervised learning", definition: "Learning structure, features, or a generative model without target labels."},
      {term: "Reinforcement learning", definition: "Learning action policies from rewards obtained through interaction with an environment."},
      {term: "Perceptron", definition: "A trainable linear threshold unit that converges when a classification problem is linearly separable."},
      {term: "Backpropagation", definition: "Algorithm that uses the chain rule to compute how each network weight contributes to output error."},
      {term: "Credit assignment", definition: "Determining which internal states, times, or actions were responsible for an outcome."},
      {term: "Predictive coding", definition: "Framework in which hierarchical levels exchange predictions and local prediction errors."},
      {term: "Model-free learning", definition: "Learning cached values or policies directly from experience without an explicit transition model."},
      {term: "Model-based learning", definition: "Learning an internal model of transitions and outcomes that can be used for planning."},
      {term: "Catastrophic forgetting", definition: "Abrupt loss of previously learned abilities when a network is trained on new tasks or distributions."}
    ],
    questions: [
      {text: "A system learns from images paired with correct category labels. This is:", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Habituation only"], correct: 0, explanation: "The correct target supplied for every example defines supervised learning."},
      {text: "Which biological system provides the clearest course analogy to reinforcement learning?", options: ["Retina only", "Dopamine and basal ganglia", "Cochlea only", "Spinal reflex only"], correct: 1, explanation: "Dopamine prediction errors update values and action policies in basal-ganglia circuits."},
      {text: "What limitation did the XOR example reveal?", options: ["All learning is impossible", "A single-layer perceptron cannot solve nonlinearly separable mappings", "Multilayer networks cannot represent logic", "Hebbian learning requires labels"], correct: 1, explanation: "The limitation concerned linear separability and single-layer representation, not neural networks in general."},
      {text: "Why is exact backpropagation considered biologically problematic?", options: ["Brains have no synapses", "It assumes coordinated reverse gradients and weight symmetry not clearly present in cortex", "It uses local information", "It cannot learn"], correct: 1, explanation: "The weight-transport and global credit signals used in standard backprop lack an obvious direct neural implementation."},
      {text: "The match between TD error and dopamine is a strong convergence because:", options: ["Both use the word reward", "A precise mathematical signal predicts neural firing patterns", "Dopamine neurons run computer code", "All dopamine signals are identical"], correct: 1, explanation: "The convergence links a defined computational quantity to quantitative neural behavior."},
      {text: "Which behavior most clearly indicates model-based control?", options: ["Repeating a cached response after its outcome is devalued", "Changing choice immediately after learning that an outcome is no longer desirable", "A fixed reflex", "Random responding"], correct: 1, explanation: "Flexible revaluation requires knowledge of the action–outcome structure rather than only a cached action value."},
      {text: "Similar representations in a CNN and visual cortex prove that both learned by backpropagation. True or false?", options: ["True", "False"], correct: 1, explanation: "A shared representation or objective does not uniquely identify the mechanism that produced it."},
      {text: "Which is a major difference between brains and many current ML systems?", options: ["Brains never learn", "Brains integrate continuous, embodied, energy-efficient learning across tasks", "Machines never process inputs", "Brains have no credit-assignment problem"], correct: 1, explanation: "Biological learning is continual, multimodal, embodied, and remarkably efficient compared with many task-specific systems."},
      {text: "What makes the neuroscience–AI relationship bidirectional?", options: ["Only neuroscience influences AI", "Brain findings inspire models, and models generate predictions tested in brains", "Neither field uses experiments", "They share identical hardware"], correct: 1, explanation: "The scientific loop runs from biological inspiration to computational prediction and back to experiment."},
      {text: "What is the best answer to whether machines learn like brains?", options: ["Always yes", "Always no", "They can share problems or computations while differing in algorithms and implementation", "The question has no scientific content"], correct: 2, explanation: "A careful comparison separates goals, representations, algorithms, mechanisms, embodiment, and outward performance."}
    ],
    related: [
      {title: "Backpropagation", description: "Train a small network and inspect error propagation.", href: "../../Demonstrations/Backpropagation/"},
      {title: "Temporal Difference", description: "Connect an AI algorithm to dopamine dynamics.", href: "../../Demonstrations/TemporalDifference/"},
      {title: "Actor–Critic", description: "Compare a machine architecture with basal-ganglia organization.", href: "../../Demonstrations/ActorCritic/"},
      {title: "Place Cells", description: "Compare biological representations with learned state spaces.", href: "../../Demonstrations/PlaceCells/"},
      {title: "Final project guide", description: "Build and test a web-based behavioral model.", href: "../../project.html"},
      {title: "Student projects", description: "Explore student-built behavioral systems.", href: "../../student-projects.html"}
    ],
    previous: "12",
    next: null
  }
};
