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
    id:      'possibility-theory-for-epistemic-uncertainty-quantification-in-deep-learning',
    type:    'research',
    image:  'images/research/possibility-theory.svg',
    title:   'Possibility Theory for Epistemic Uncertainty Quantification in Deep Learning',
    desc:    'Exploring possibility theory as a way to quantify epistemic uncertainty in deep learning models.',
    summary: `This research aims to develop the theory and applications of possibility theory for representing epistemic uncertainty in deep learning.`,
    tags:    ['Research', 'Active', 'Epistemic Uncertainty', 'Possibility Theory'],
    sections: [
      {
        heading: 'Motivation',
        html: `<p>Deep learning models often make highly confident predictions even when they are operating beyond the limits of their knowledge, such as under distribution shift, in low-data regimes, or in safety-critical settings. This makes epistemic uncertainty important because it captures what the model does not know due to limited or incomplete evidence, helping us identify when its predictions may be unreliable. Possibility theory offers a promising framework for this problem because it represents degrees of plausibility without requiring precise probability estimates, making it well suited for modelling epistemic uncertainty.</p>`,
      },
      {
        heading: 'Research Direction',
        html: `<ol class="detail-numbered-list">
          <li><strong>Possibilistic variational inference with application to deep learning</strong>. Variational approaches have been widely used for probabilistic inference in deep learning, but they typically rely on probability theory. By developing a possibilistic variational inference framework, we can leverage the strengths of possibility theory to better capture epistemic uncertainty in deep learning models.</li>
          <li><strong>Decentralised possibilistic inference for dynamic-aware federated learning</strong>. Federated learning enables collaborative model training across distributed devices while preserving data privacy. However, most existing federated learning approaches are based on probability theory and may not adequately capture epistemic uncertainty in dynamic environments. This research explores the development of a decentralised possibilistic federated learning framework that can better handle uncertainty in such settings.</li>
        </ol>`,
      },
    ],
  },

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
    id:      'aesthetic-puzzles',
    type:    'project',
    image:   'images/projects/aesthetic-puzzles.svg',
    title:   'Aesthetic Puzzles',
    desc:    'A collection of playful visual puzzles designed to make problem solving feel fun and beautiful.',
    summary: 'A project that transforms classic brain teasers into clean, aesthetic, interactive experiences.',
    tags:    ['Project', 'Live', 'Interactive', 'Puzzles'],
    sections: [
      {
        heading: 'What is it?',
        html: `<p>Aesthetic Puzzles is a collection of popular brain teasers and interview-style puzzles, redesigned as calm, visually satisfying interactive experiences. It focuses on logic, clarity, and discovery, turning short problem-solving sessions into something more beautiful and more enjoyable.</p>`,
      },
      {
        heading: 'Features',
        grid: [
          {
            label: 'Visual Problem Statements',
            color: 'lavender',
            text: 'Use clear images and diagrams to make each puzzle easier to grasp at a glance.',
          },
          {
            label: 'Simple Infographics',
            color: 'pink',
            text: 'Break down puzzle ideas with clean, easy-to-understand visual explanations.',
          },
          {
            label: 'Step-by-Step Explanations',
            color: 'teal',
            text: 'Guide users through the reasoning process one step at a time.',
          },
          {
            label: 'Interactive Solution Visualizer',
            color: 'gold',
            text: 'Let users explore how the solution works through interactive visual feedback.',
          },
        ],
      },
      {
        heading: 'Motivation',
        html: `<p>I have always loved puzzles and brain teasers since I was young. I used to write about them on <a href="https://medium.com/@shelvia1039" target="_blank" rel="noopener noreferrer" class="detail-link">Medium</a>, but eventually took a break and never quite returned to it. Part of the reason was that I realized I am more of a visualizer than a writer. With the help of AI, it has become much easier to bring puzzle problems and solutions to life visually. My love for design and puzzles is what led me to create this website, with the hope that others will find it useful and enjoyable too :)</p>`,
      },
    ],
    extraLinks: [
      { label: 'Visit Aesthetic Puzzles →', href: 'https://shelvia-w.github.io/aesthetic-puzzles/', style: 'primary' },
    ],
  },

  {
    id:      'aesthetic-leetcode',
    type:    'project',
    image:   'images/projects/aesthetic-leetcode.svg',
    title:   'Aesthetic LeetCode',
    desc:    'A visual-first way to learn LeetCode that makes algorithm practice feel calmer, clearer, and more approachable.',
    summary: 'A project that transforms LeetCode problems into clean, aesthetic, interactive learning experiences.',
    tags:    ['Project', 'Live', 'Coding Practice', 'Learning'],
    sections: [
      {
        heading: 'What is it?',
        html: `<p>Aesthetic LeetCode is a collection of algorithm problems and solution walkthroughs, redesigned as calm, visually satisfying interactive learning experiences. It focuses on clarity, intuition, and step-by-step understanding, making LeetCode practice feel more approachable, beautiful, and enjoyable.</p>`,
      },
      {
        heading: 'Features',
        grid: [
          {
            label: 'Simple Infographics',
            color: 'lavender',
            text: 'Use clean visuals to make problem patterns and solution ideas easier to understand at a glance.',
          },
          {
            label: 'Concept Explanation',
            color: 'pink',
            text: 'Explain the core algorithm concepts behind each problem in a clear and approachable way.',
          },
          {
            label: 'Step-by-Step Explanations',
            color: 'teal',
            text: 'Walk through the reasoning process one step at a time, from intuition to solution.',
          },
          {
            label: 'Interactive Visualizer',
            color: 'gold',
            text: 'Let users explore how the algorithm works through interactive visual feedback.',
          },
        ],
      },
      {
        heading: 'Motivation',
        html: `<p>I am not a software engineer, so mastering <a href="https://leetcode.com/problemset/" target="_blank" rel="noopener noreferrer" class="detail-link">Leetcode</a> is not essential for me. Still, I find many of the problems fun, and I enjoy learning the algorithms behind them. Since I do not have a formal computer science background, this website is also a way for me to self-learn these concepts. I am a visual learner, so I naturally understand and remember things better when I can visualize them. I created this website to support my own learning journey, and I hope it can be useful to others too :)</p>`,
      },
    ],
    extraLinks: [
      { label: 'Visit Aesthetic LeetCode →', href: 'https://shelvia-w.github.io/aesthetic-leetcode/', style: 'primary' },
    ],
  },

  {
    id:      'a-to-z-vibes',
    type:    'project',
    image:   'images/projects/vibe-coding.svg',
    title:   'A to Z Vibe Coding',
    desc:    'A place where I let my creativity run wild through vibe-coded small projects.',
    summary: 'A fun project where I build small, playful, and creative coding experiments one idea at a time, using each piece as a way to explore, learn, and make something interesting.',
    tags:    ['Project', 'Live', 'AI Safety', 'Creativity'],
    sections: [
      {
        heading: 'What is it?',
        html: `<p>A to Z Vibe Coding is a space where I bring my creative ideas to life through mini projects. It features 26 projects, one for each letter of the alphabet, with each title inspired by one of my favorite songs. After completing the initial 26 projects, I will also build four more challenging projects. Each project reflects something personal to me: a memory, an interest, a value, or a part of who I am. Through vibe coding, this project also becomes a way for me to learn how to prompt AI more effectively and explore what I can create with it.</p>`,
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
      { label: 'Visit A to Z Vibe Coding →', href: 'https://shelvia-w.github.io/a-to-z-vibes/', style: 'primary' },
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
