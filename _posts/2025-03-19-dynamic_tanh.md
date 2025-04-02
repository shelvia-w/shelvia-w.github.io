---
layout: post
title: Transformers Can Work Without Normalization Layer? ⚡
date: 2025-03-19
description: 🤔 <b><i> Yann LeCun's group introduced an alternative called Dynamic Tanh (DyT). </b></i>
tags: regularization
categories: paper
---

Last week, a friend shared an interesting paper with me from LeCun's group, "[Transformers without Normalization](https://arxiv.org/pdf/2503.10622)," where they introduced Dynamic Tanh (DyT) as a replacement for layer normalization in Transformers. Let's briefly look at what it's about!

**Contents:**
- [Dynamic Tanh](#-dynamic-tanh)
- [Layer Normalization](#-layer-normalization)
- [Results](#-results)
- [Questions to Ponder](#-questions-to-ponder)
- [References](#-references)

#### ✨ Dynamic Tanh
Instead of using a normalization layer, they propose a simple element-wise operation:

$$DyT(x)=\tanh(\alpha x)$$

where $\alpha$ is a learnabele scalar parameter.

Their motivation? While researchers have been busy tweaking various parts of the Transformer architecture, the normalization layer has remained largely untouched. This raises an intriguing question: Is layer normalization truly essential for Transformers to perform well?

#### ✨ Layer Normalization
Transformers typically rely on layer normalization (LN), which normalizes each token individually across its features, without considering other tokens or batch samples. LN is usually applied before self-attention and feed-forward layers. In the paper, they plotted the input-output curve of the LN layer (before the affine transformation) and noticed an interesting trend:
- In earlier layers, the relationship is mostly linear.
- In deeper layers, the curve starts resembling a tanh function.

This observation aligns with insights from [several papers](https://arxiv.org/pdf/2406.01255) exploring why normalization techniques work so well - definitely something I should dive deeper into!

#### 🌟 Results
They found that swapping LN with DyT in Transformers resulted in a similar loss curve and comparable performance (slightly better in some cases). However, this doesn’t hold when replacing batch normalization with DyT in traditional architectures like ResNets, suggesting that the role of normalization might differ across model types.

#### 💭 Questions to Ponder
- Why is the suppression of extreme values or the non-linearity component crucial?
- Can we find an alternative function for batch normalization in classic networks that achieves similar results?

#### 📚 References
- [Transformers without Normalization](https://arxiv.org/pdf/2503.10622)
- [On the Nonlinearity of Layer Normalization](https://arxiv.org/pdf/2406.01255)
