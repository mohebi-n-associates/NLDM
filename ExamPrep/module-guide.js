(function () {
  'use strict';

  const moduleNumber = document.body.dataset.module;
  const data = window.NLDM_MODULES && window.NLDM_MODULES[moduleNumber];
  if (!data) {
    document.getElementById('module-root').innerHTML = '<div class="container"><div class="callout warning"><strong>Guide unavailable.</strong> This module could not be loaded.</div></div>';
    return;
  }

  document.title = `Module ${Number(moduleNumber)} — ${data.title} | NLDM`;
  document.querySelector('meta[name="description"]').content = data.summary;
  document.getElementById('header-title').textContent = `Module ${Number(moduleNumber)} · ${data.title}`;

  const root = document.getElementById('module-root');
  root.innerHTML = `
    <section class="hero guide-hero">
      <div class="hero-inner">
        <span class="eyebrow">Psychology 505 · Module ${Number(moduleNumber)}</span>
        <h1>${data.title}</h1>
        <p>${data.summary}</p>
        <div class="guide-meta">${data.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      </div>
    </section>
    <div class="container">
      <section class="section" aria-labelledby="objectives-title">
        <div class="section-heading"><span class="section-kicker">Learning objectives</span><h2 id="objectives-title">What you should be able to do</h2></div>
        <ul class="objective-list">${data.objectives.map(item => `<li>${item}</li>`).join('')}</ul>
      </section>

      <section class="section" aria-labelledby="guide-title">
        <div class="section-heading"><span class="section-kicker">Study guide</span><h2 id="guide-title">Build the model step by step</h2><p>Open each section, explain it in your own words, and connect the behavioral claim to its computational or neural mechanism.</p></div>
        <div class="study-sections">${data.sections.map((section, index) => `
          <details class="study-section" ${index === 0 ? 'open' : ''}>
            <summary><span class="section-index">${index + 1}</span>${section.title}</summary>
            <div class="study-copy">${section.content}</div>
          </details>`).join('')}</div>
      </section>

      <section class="section" aria-labelledby="terms-title">
        <div class="section-heading"><span class="section-kicker">Key terms</span><h2 id="terms-title">Retrieval practice</h2><p>Try to define each term before revealing the answer.</p></div>
        <div class="flashcard-grid">${data.terms.map((item, index) => `
          <button class="flashcard" type="button" aria-expanded="false" data-card="${index}">
            <span class="flashcard-term">${item.term}</span>
            <span class="flashcard-hint">Reveal definition</span>
            <span class="flashcard-definition">${item.definition}</span>
          </button>`).join('')}</div>
      </section>

      <section class="section" aria-labelledby="quiz-title">
        <div class="section-heading"><span class="section-kicker">Practice quiz</span><h2 id="quiz-title">Check your understanding</h2><p>Questions emphasize application and conceptual distinctions rather than isolated memorization.</p></div>
        <div class="quiz-score" id="quiz-score" role="status" aria-live="polite">0 of ${data.questions.length} checked</div>
        <div class="quiz-list">${data.questions.map((question, index) => `
          <article class="quiz-card" data-question="${index}">
            <fieldset>
              <legend>${index + 1}. ${question.text}</legend>
              ${question.options.map((option, optionIndex) => `<label class="quiz-option"><input type="radio" name="q${index}" value="${optionIndex}"><span>${option}</span></label>`).join('')}
            </fieldset>
            <button class="button quiz-check" type="button" data-check="${index}">Check answer</button>
            <div class="quiz-feedback" id="feedback-${index}" role="status"></div>
          </article>`).join('')}</div>
      </section>

      <section class="section" aria-labelledby="related-title">
        <div class="section-heading"><span class="section-kicker">Apply the ideas</span><h2 id="related-title">Related interactive material</h2></div>
        <div class="related-grid">${data.related.map(item => `<a class="related-card" href="${item.href}"><strong>${item.title}</strong><small>${item.description}</small></a>`).join('')}</div>
        <nav class="module-nav" aria-label="Module navigation">
          ${data.previous ? `<a class="button" href="../Module${data.previous}/">← Module ${Number(data.previous)}</a>` : '<span></span>'}
          ${data.next ? `<a class="button primary" href="../Module${data.next}/">Module ${Number(data.next)} →</a>` : '<a class="button primary" href="../../review.html">All modules →</a>'}
        </nav>
      </section>
    </div>`;

  const cardButtons = root.querySelectorAll('.flashcard');
  cardButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
    });
  });

  const checked = new Map();
  root.querySelectorAll('[data-check]').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.check);
      const selected = root.querySelector(`input[name="q${index}"]:checked`);
      const feedback = document.getElementById(`feedback-${index}`);
      if (!selected) {
        feedback.className = 'quiz-feedback incorrect';
        feedback.textContent = 'Choose an answer first.';
        return;
      }
      const correct = Number(selected.value) === data.questions[index].correct;
      checked.set(index, correct);
      feedback.className = `quiz-feedback ${correct ? 'correct' : 'incorrect'}`;
      feedback.innerHTML = `<strong>${correct ? 'Correct.' : 'Not quite.'}</strong> ${data.questions[index].explanation}`;
      const score = [...checked.values()].filter(Boolean).length;
      document.getElementById('quiz-score').textContent = `${score} correct · ${checked.size} of ${data.questions.length} checked`;
    });
  });
})();
