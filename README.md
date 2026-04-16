# LLM Universe

A free, open-source interactive learning hub for understanding Large Language Models from the ground up.

**[Live Site](https://large-language-model-drab.vercel.app/)**

## What is this?

LLM Universe is a curated, structured learning path that takes you from "what is an LLM?" to deeply understanding how they work. Instead of scattered resources across the internet, everything is organized into 8 modules with embedded videos, interactive tools, and reading materials.

## Modules

| # | Module | What You'll Learn |
|---|--------|-------------------|
| 0 | **The Big Picture** | What LLMs are, the training pipeline, why transformers matter |
| 1 | **The Math You Need** | Vectors, matrices, dot products, softmax, gradient descent |
| 2 | **Neural Networks** | Backpropagation, layers, weights, loss functions |
| 3 | **Tokenization** | BPE, how text becomes numbers, tokenizer differences |
| 4 | **The Transformer** | Self-attention, Q/K/V, multi-head attention, full architecture |
| 5 | **Training LLMs** | Pretraining data, next token prediction, GPT-2 reproduction |
| 6 | **Post-Training** | SFT, RLHF, DPO, alignment, hallucinations |
| 7 | **Using LLMs** | Prompt engineering, model selection, RAG, agents, local LLMs |

## Features

- Dark cosmic theme with animated star field background
- Sidebar navigation with per-module progress tracking
- localStorage-based checklist persistence
- Lazy-loaded YouTube embeds
- Curated interactive tools (Transformer Explainer, TensorFlow Playground, Tiktokenizer, etc.)
- Mobile responsive
- Static export deployed on Vercel

## Tech Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion

## Run Locally

```bash
git clone https://github.com/Reficul013/Large-Language-Model.git
cd Large-Language-Model
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Credits

This project curates content from incredible educators and builders:

- **Andrej Karpathy** — Deep dive videos on LLMs, tokenizers, GPT-2 reproduction
- **3Blue1Brown** — Visual explanations of neural networks, transformers, and attention
- **Jay Alammar** — Illustrated Transformer and GPT-2 guides
- **Georgia Tech / Polo Club** — Transformer Explainer, CNN Explainer, GAN Lab
- **Brendan Bycroft** — LLM Visualization at bbycroft.net

## Contributing

Found a broken link? Know a resource that should be included? Open an issue or submit a PR.

## License

Open source.
