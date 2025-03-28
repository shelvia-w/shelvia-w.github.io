---
layout: page
title: AI Explainer
description: Ask AI to explain in 5 levels of difficulty.
img: assets/img/ai_explainer/ai_explainer.png
importance: 3
category: webapp
related_publications: true
---

<img src="https://raw.githubusercontent.com/shelvia-w/shelvia-w.github.io/refs/heads/master/assets/img/ai_explainer/ai_explainer_cover.png" width='820px'>


I’m currently working on a challenge to build an AI explainer that explains a concept in 5 different levels of difficulty. The goal of this AI explainer is to adapt to my level of understanding. If the concept is completely new and abstract to me, I’d prefer a simple explanation with analogies. But if I’m already somewhat familiar with it, I’d rather have a higher-level explanation. Here’s my idea:

The AI Explainer is designed to explain any concept across five levels of understanding, tailored to different audiences. It breaks down complex topics progressively, starting from a very simple explanation for a child, then gradually increasing in depth for a high school student, a college student, a graduate student, and finally an expert or professional level. The five levels are:

1. Child Level – Uses simple words and analogies suitable for a young child (around age 5–7).
2. High School Level – Explains the concept using basic academic understanding appropriate for a teenager.
3. College Level – Delivers a more detailed explanation with introductory technical terms, as taught in undergraduate courses.
4. Graduate Level – Introduces advanced ideas, theories, and terminology for someone with deeper academic or professional training.
5. Expert Level – Provides the most nuanced, technical, and comprehensive explanation, suitable for domain experts or specialists.

It adapts explanations according to the concept and can use analogies, technical terms, or simplified language depending on the level. It ensures clarity, avoids over-complication at early levels, and incorporates technical depth and nuance at advanced levels. It may ask the user for clarification if the concept is ambiguous or too broad, but will otherwise default to making the best-educated interpretation.

### Example

I asked it to explain "grokking in machine learning" in 5 levels:

#### Child Level

Imagine you're learning how to solve puzzles. At first, it's really hard, and you keep making mistakes. Then, one day, something just clicks in your brain — and suddenly, you can solve the puzzle super fast and really well!

That magical moment is called grokking — it's when you really understand something deep inside, not just a little bit, but all the way.

#### High School Level

Grokking in machine learning is like when you're studying for a test. At first, you kind of get the idea, but you’re still guessing. Then, after lots of practice, suddenly everything makes sense, and you start getting all the questions right — even the tricky ones.

In machine learning, a model might seem like it's not learning much at first. But after a lot of training, suddenly it "gets it" — it understands the pattern really well and performs much better. That surprise improvement is called grokking.

#### College Level

In machine learning, grokking refers to a phenomenon where a model, after initially overfitting to training data, suddenly begins to generalize very well to unseen data — often after a long period of continued training.

This seems counterintuitive because the model first memorizes training data and performs poorly on validation data. But then, over time, it transitions into a phase where it not only fits the training data but also generalizes extremely well — almost as if it suddenly "understands" the deeper rules of the task.

#### Graduate Level

Grokking is a delayed generalization phenomenon observed in deep learning models. Initially, the model overfits the training data, showing poor generalization. However, with prolonged training — sometimes far beyond when we'd expect convergence — the model abruptly transitions into a phase of excellent generalization.

This behavior challenges traditional generalization dynamics and suggests the model is gradually reorganizing its internal representations, potentially moving from memorization-based to structure-based understanding. Grokking has been studied using algorithmic datasets (like modular arithmetic tasks), where such transitions are easier to isolate and analyze. It's often associated with sparse, interpretable solutions emerging late in training.  

#### Expert Level

Grokking, as introduced in the 2022 paper “Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets” (Power et al.), describes a learning dynamic where models, particularly transformer architectures trained on algorithmic tasks, exhibit prolonged overfitting followed by a sudden phase transition into strong generalization.

This is particularly interesting in settings with low training data entropy, where the model must internalize abstract algorithmic rules. Overparameterized models first memorize data but, with extended training and proper regularization (e.g., weight decay), they transition into lower-complexity solutions that generalize. This suggests that the optimization landscape contains high-accuracy solutions of varying complexity, and that SGD can traverse from memorizing to generalized solutions over time.

Grokking raises questions about the implicit biases of training dynamics, phase transitions in solution manifolds, and the interplay between representation compression and generalization.

### Preview
Here's a preview of the website:

<img src="https://raw.githubusercontent.com/shelvia-w/shelvia-w.github.io/refs/heads/master/assets/img/ai_explainer/web.png" width='820px'>


### Updates:
- Tested the AI explainer using custom GPT.
- In the progress of prototyping the website.