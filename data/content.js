/* ============================================================
   CONTENT REGISTRY
   To add a new research item or project, add an entry to
   RESEARCH or PROJECTS below. That's all — no HTML file needed.

   SECTION TYPES (each section needs `heading` + one of):
     html:  '<p>HTML string</p>'          — freeform paragraphs
     list:  ['Item one', 'Item two']      — styled bullet list
     code:  'line1\nline2'               — monospace glass panel
     grid:  [{label, color, text}, ...]  — 2-column mini-card grid
     cards: [{title, color, text}, ...]  — stacked glass cards

   TAG NAMES (auto-styled): 'Research' | 'Project' | 'Active' |
     'Live' | 'In Progress' | anything else → lavender pill

   IMAGE: path relative to site root, e.g. 'images/research/my-topic.svg'
     Replace with any .svg, .png, or .jpg. Omit the field to show a gradient placeholder.
   ============================================================ */

const RESEARCH = [
  {
    id:      'uncertainty-quantification-in-deep-learning',
    type:    'research',
    image:   'images/research/uncertainty-quantification.svg',
    title:   'Uncertainty Quantification in Deep Learning',
    desc:    'Studying how to prevent overconfidence in deep learning models.',
    summary: `The goal of this research is to improve the confidence estimates of deep learning models, focusing on post-hoc uncertainty quantification techniques.`,
    tags:    ['Research', 'Completed', 'Uncertainty Quantification'],
    sections: [
      {
        heading: 'Motivation',
        html: `<p>Deep learning models are increasingly used in settings where their predictions can influence important decisions, yet their confidence estimates are often poorly calibrated. A model may assign high confidence to incorrect predictions, especially under distribution shifts or unfamiliar inputs, making it difficult to know when its outputs should be trusted. This research focuses on post-hoc uncertainty quantification techniques, which aim to improve confidence estimates after a model has been trained. Post-hoc techniques are appealing because they can be applied to existing models without requiring retraining. This is especially valuable for black-box models, where access to the training process or model internals may be limited.</p>`,
      },
      {
        heading: 'Published Research Papers',
        cards: [
          {
            title: 'Pointwise Information Measures as Confidence Estimators in Deep Neural Networks: A Comparative Study',
            color: 'gold',
            text:  '<strong>S. Wongso</strong>, R. Ghosh, and M. Motani. Proceedings of the 42nd International Conference on Machine Learning (ICML), 2025.',
            links: [
              { label: 'Paper', href: 'https://proceedings.mlr.press/v267/wongso25a.html' },
              { label: 'Code',  href: 'https://github.com/shelvia-w/Pointwise-Information-Measures' },
              { label: 'Blog',  href: 'https://shelvia-w.github.io/Pointwise-Information-Measures/' },
            ],
          },
          {
            title: 'Pointwise Sliced Mutual Information for Neural Network Explainability',
            color: 'gold',
            text:  '<strong>S. Wongso</strong>, R. Ghosh, and M. Motani. 2023 IEEE International Symposium on Information Theory (ISIT), pp. 1776-1781, IEEE, 2023.',
            links: [
              { label: 'Paper', href: 'https://ieeexplore.ieee.org/document/10207010' },
            ],
          },
        ],
      },
    ],
  },

  {
    id:      'generalization-in-deep-neural-networks',
    type:    'research',
    image:   'images/research/generalization.svg',
    title:   'Generalization in Deep Neural Networks',
    desc:    'Understanding how and why deep neural networks generalize while still having the capacity to memorize.',
    summary: `The goal of this research is to understand the learning dynamics and mechanisms behind generalization in deep neural networks.`,
    tags:    ['Research', 'Completed', 'Generalization'],
    sections: [
      {
        heading: 'Motivation',
        html: `<p>Deep neural networks have achieved remarkable performance across many tasks, yet their ability to generalize remains difficult to fully explain. In particular, modern networks often contain far more parameters than training examples, allowing them to fit the training data extremely well while still performing well on unseen data. This raises an important question: what mechanisms allow deep neural networks to move beyond memorization and learn representations that support generalization?</p>`,
      },
      {
        heading: 'Published Research Papers',
        cards: [
          {
            title: 'Using Sliced Mutual Information to Study Memorization and Generalization in Deep Neural Networks',
            color: 'gold',
            text:  '<strong>S. Wongso</strong>, R. Ghosh, and M. Motani. Proceedings of The 26th International Conference on Artificial Intelligence and Statistics (AISTATS), 2023.',
            links: [
              { label: 'Paper', href: 'https://proceedings.mlr.press/v206/wongso23a.html' },
              { label: 'Code',  href: 'https://github.com/shelvia-w/SMI-DNN' },
              { label: 'Blog',  href: 'https://shelvia-w.github.io/SMI-DNN/' },
            ],
          },
          {
            title: 'Understanding Deep Neural Networks Using Sliced Mutual Information',
            color: 'gold',
            text:  '<strong>S. Wongso</strong>, R. Ghosh, and M. Motani. 2022 IEEE International Symposium on Information Theory (ISIT), pp. 133–138, IEEE, 2022.',
            links: [
              { label: 'Paper', href: 'https://ieeexplore.ieee.org/document/9834357/' },
            ],
          },
        ],
      },
    ],
  },
];

const PROJECTS = [
  {
    id:      'ai-safety-corner',
    type:    'project',
    image:   'images/projects/ai-safety.svg',
    title:   'AI Safety Corner',
    desc:    'A personal guide to AI safety — built to make the field easier to navigate.',
    summary: `A personal, curated guide to AI safety, built to document my learning journey through the field and to gather the concepts, papers, and resources that have helped shape my understanding.`,
    tags:    ['Project', 'Live', 'AI Safety', 'Resource'],
    sections: [
      {
        heading: 'What is it?',
        html: `<p>AI Safety Corner is built for anyone curious about AI safety, whether they are just starting to learn or hoping to become more involved in the field. It is designed to be approachable for beginners while still offering routes into deeper technical material. The goal is to make AI safety feel clear, useful, and accessible to all readers without assuming they already know the field's jargon.</p>`,
      },
      {
        heading: 'What it covers',
        grid: [
          { label: 'Research Highlights', color: 'blue', text: 'Explore recent AI safety papers, ideas, and research directions.' },
          { label: 'Personal Notes', color: 'lime', text: 'Follow my learning notes as I explore AI safety.' },
          { label: 'Failure Cases', color: 'pink', text: 'Learn from real cases where AI systems behaved unexpectedly.' },
          { label: 'Evaluation', color: 'gold', text: 'Browse methods and benchmarks for testing AI systems.' },
          { label: 'Glossary', color: 'peach', text: 'Look up AI safety terms in clear, simple language.' },
          { label: 'System Cards', color: 'teal', text: 'Read safety summaries of major AI models and releases.' },
        ],
      },
      {
        heading: 'Motivation',
        html: `<p>When I first tried to learn about AI safety seriously, I did not know where to begin. The whole field felt overwhelming as there are too many topics to cover, and it was hard to find clear entry points. As I am navigating this field on my own, I want to share the resources and notes that have been most helpful to me, in the hope that they can make it easier for others to get started and find their way around the field.</p>`,
      },
    ],
    extraLinks: [
      { label: 'Visit AI Safety Corner →', href: 'https://shelvia-w.github.io/AI-Safety-Corner/', style: 'primary' },
    ],
  },

  {
    id:      'a-to-z-vibes',
    type:    'project',
    image:   'images/projects/vibe-coding.svg',
    title:   'A-to-Z Vibe Coding',
    desc:    'A place where I let my creativity run wild through vibe-coded small projects.',
    summary: 'A fun project where I build small, playful, and creative coding experiments one idea at a time, using each piece as a way to explore, learn, and make something interesting.',
    tags:    ['Project', 'Live', 'AI Safety', 'Creativity'],
    sections: [
      {
        heading: 'What is it?',
        html: `<p>A-to-Z Vibe Coding is a space where I bring my creative ideas to life through mini projects. It features 26 projects, one for each letter of the alphabet, with each title inspired by one of my favorite songs. After completing the initial 26 projects, I will also build four more challenging projects. Each project reflects something personal to me: a memory, an interest, a value, or a part of who I am. Through vibe coding, this project also becomes a way for me to learn how to prompt AI more effectively and explore what I can create with it.</p>`,
      },
      {
        heading: 'List of Projects',
        grid: [
          { label: 'A Sky Full of Stars', color: 'lavender', text: 'Wander through the beauty of the constellations and dance among the stars.' },
          { label: 'Beauty and a Beat', color: 'pink', text: "Help Belle melt the Beast's heart through the rhythm of love." },
        ],
      },
      {
        heading: 'Motivation',
        html: `<p>This project is largely inspired by Alexander Tingstrom's <a href="https://www.30daysofvibe.com/" target="_blank" rel="noopener noreferrer" class="detail-link"> 30 Days of Vibe</a>.</p>`,
      },
    ],
    extraLinks: [
      { label: 'Visit A-to-Z Vibe Coding →', href: 'https://shelvia-w.github.io/a-to-z-vibes/', style: 'primary' },
    ],
  },

  {
    id:      'positional-encoding-visualizer',
    type:    'project',
    image:   'images/projects/positional-encoding.svg',
    title:   'Positional Encoding Visualizer',
    desc:    'An interactive tool for understanding transformer position encodings.',
    summary: `An interactive, browser-based tool for understanding how positional encodings
              work in transformer models.`,
    tags:    ['Project', 'Live', 'Interactive', 'Transformers'],
    sections: [
      {
        heading: "What's Positional Encoding?",
        html: `<p>Positional encoding is a method used in Transformers to add information about the order of tokens in a sequence. Since Transformers process tokens in parallel, they do not naturally know which word comes first or later. The original Transformer used sinusoidal positional encoding, which represents positions using sine and cosine functions at different frequencies, helping the model capture both absolute and relative position patterns.</p>`,
      },
      {
        heading: 'Motivation',
        html: `<p>I couldn't find an interactive tool that made positional encodings
               genuinely <em>visual</em> rather than just presented as formulas. The standard
               textbook treatment shows the heatmap of sinusoidal embeddings, but doesn't
               connect that to what the model actually uses them for. This tool is an attempt
               to close that gap — to turn abstract mathematical structure into something you
               can manipulate and observe.</p>`,
      },
      {
        heading: 'Features',
        grid: [
          { label: 'Interactive Controls', color: 'peach', text: 'Adjust sequence length, model dimension, base constant, and token position.' },
          { label: 'Encoding Waves', color: 'gold', text: 'Visualize sinusoidal encoding patterns across token positions.' },
          { label: 'Position Highlight',  color: 'lavender', text: 'See the selected token position on each wave.' },
          { label: 'Sine & Cosine Components', color: 'pink', text: 'Compare different positional encoding dimensions.' },
        ],
      },
    ],
    extraLinks: [
      { label: 'Visit Sinusoidal Positional Encoding Visualizer →', href: 'https://shelvia-w.github.io/positional-encoding-visualizer/', style: 'primary' },
    ],
  },
];
