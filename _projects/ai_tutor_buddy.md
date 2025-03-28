---
layout: page
title: AI Tutor Buddy
description: Improve and speed up your learning with AI
img: assets/img/ai_tutor_buddy/ai_tutor.png
importance: 1
category: webapp
related_publications: true
---

<img src="https://raw.githubusercontent.com/shelvia-w/shelvia-w.github.io/refs/heads/master/assets/img/ai_tutor_buddy/ai_tutor_cover.png" width='820px'>

I’m currently working on a challenge to build an AI tutor that helps me understand and review concepts more effectively. The goal of this AI tutor is to prioritize building intuition over diving into technical details. Here's my idea:

A personal AI tutor that tests a user's understanding of a specific concept provided by the user. The tutor asks thoughtful, layered questions instead of offering direct answers, guiding the user toward insight through encouragement, Socratic questioning, and concept reinforcement. It uses five defined levels of difficulty:
1. Recall / Recognition
2. Understanding / Explanation
3. Conceptual Analysis (e.g., reasoning about definitions, properties, and structural behavior in context)
4. What-If Scenarios (exploring consequences, edge cases, or alternate situations)
5. Deep Technical Exploration (unpacking the mechanics, theory, or edge-case behavior of the concept)
The tutor can only proceed to the next level once the previous level is satisfactorily completed. It incorporates periodic review of past concepts to promote spaced repetition. The tone is always sympathetic, patient, supportive, and friendly, helping the user feel confident and comfortable while thinking deeply. If the user struggles, the tutor breaks questions down or rephrases rather than giving up or giving away the answer. The tutor must not provide immediate solutions—instead, it guides the student’s thought process carefully toward understanding. It uses a casual, approachable tone to make learning feel relaxed and low-pressure.

I don't have any experience building a web app, but I'm excited to give it my best shot!

As an experiment, I would try to review the concepts in the [Deep Learning book](https://www.deeplearningbook.org/) by Ian Goodfellow, Yoshua Bengio and Aaron Courville. I'm including the concepts and learning outcomes [here](https://docs.google.com/document/d/1b_5vsnmOVNmR-cUjWShrw__siAFOPblu6TNZ26Jp5wY/edit?usp=sharing). For example:

**Topic**: Scalars, Vectors, Matrices and Tensors <br>
**Learning outcome**: Distinguish between scalars, vectors, matrices, and tensors, and describe their roles in mathematical and machine learning contexts.

Here are the examples of the 5 levels:

#### Level 1:
Let’s warm up. Just answer in your own words: <br>
What is a scalar? <br>
What is a vector? <br>
Can you tell me the difference between a matrix and a tensor?

#### Level 2:
Can you describe how scalars, vectors, matrices, and tensors each show up in machine learning workflows? <br>
For example: where might we use a scalar vs. a matrix? <br>

No rush—just tell me what you know or suspect. I’ll help connect the dots! <br>

#### Level 3:
I’ll give you 4 examples—just tell me which of these each one is: <br>
1. A single loss value computed after training one epoch. 
2. A list of weights in a simple linear regression model.
3. An image batch with shape (32, 64, 64, 3).
4. A table of training data with 1000 samples and 20 features.

Your options: Scalar, Vector, Matrix, or Tensor <br>
Drop your answers like this: 1 → ___, 2 → ___, etc.

#### Level 4:
You’re designing a neural network to process tabular data with 5 features per input. But by mistake, someone passes in the data as a 1D array of shape (5000,) instead of the intended 2D shape (1000, 5). <br>

What might go wrong in this case? <br>
What would your model think it's receiving, and how could that mess up the training process? <br>

Think it through and explain what you think might happen!

#### Level 5:
In deep learning frameworks (like PyTorch or TensorFlow), inputs are often structured as tensors with specific dimensions. For example: <br>
Image input tensor shape: (batch_size, height, width, channels) or (batch_size, channels, height, width)

Why do frameworks care so much about this dimensional order? <br>
What could go wrong if dimensions are swapped or misordered? <br>
And why can't a single generalized tensor structure work regardless of order?

Dig in as deep as you want—shape inference, convolutional filters, memory layout, etc. Let’s hear your technical take.

### Preview
Here's a preview of the website:

<img src="https://raw.githubusercontent.com/shelvia-w/shelvia-w.github.io/refs/heads/master/assets/img/ai_tutor_buddy/web.png" width='820px'>


### Updates:
- Tested the AI tutor using custom GPT.
- In the progress of prototyping the website.
