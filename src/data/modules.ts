export interface Resource {
  type: "video" | "interactive" | "link";
  title: string;
  url: string;
  description: string;
  icon: string;
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  timeEstimate: string;
  color: string;
  intro: string[];
  videos: Resource[];
  interactives: Resource[];
  readings: Resource[];
  checklist: string[];
}

export const modules: Module[] = [
  {
    id: 0,
    slug: "the-big-picture",
    title: "The Big Picture",
    subtitle: "What Are LLMs?",
    description: "High-level intuition before any technical depth",
    timeEstimate: "5-6 hours",
    color: "#8B5CF6",
    intro: [
      "Large Language Models are, at their core, next-token prediction machines trained on vast amounts of internet text. They take a sequence of tokens (pieces of words) and predict what comes next — and from this deceptively simple objective emerges the ability to write essays, answer questions, write code, and reason about the world.",
      "The lineage goes: Deep Learning → NLP → Transformers → LLMs. Neural networks learned to process language, the Transformer architecture made it possible to train on massive scales efficiently, and LLMs are the result of scaling that architecture with enormous datasets and compute.",
      "Modern LLMs like GPT-4, Claude, and Gemini go through multiple stages: pretraining on internet text to learn language patterns, supervised fine-tuning on conversations and instructions, and alignment through RLHF (Reinforcement Learning from Human Feedback) to make them helpful, harmless, and honest."
    ],
    videos: [
      {
        type: "video",
        title: "Deep Dive into LLMs like ChatGPT",
        url: "https://www.youtube.com/watch?v=7xTGNNLPyMI",
        description: "Andrej Karpathy's foundational 3.5-hour deep dive covering everything about how LLMs work, from training data to RLHF. THE video to watch.",
        icon: "🎬"
      },
      {
        type: "video",
        title: "Large Language Models explained briefly",
        url: "https://www.youtube.com/watch?v=LPZh9BOjkQs",
        description: "3Blue1Brown's visual explanation of LLMs from the Neural Networks playlist — beautiful animations that build intuition.",
        icon: "🎬"
      }
    ],
    interactives: [
      {
        type: "interactive",
        title: "bbycroft.net LLM Visualization",
        url: "https://bbycroft.net/llm",
        description: "Stunning 3D animated walkthrough of every component inside an LLM. See how data flows from input tokens through attention layers to output predictions.",
        icon: "🔮"
      }
    ],
    readings: [],
    checklist: [
      "What an LLM is at a high level",
      "The general training pipeline (pretraining → fine-tuning → RLHF)",
      "Why transformers changed everything"
    ]
  },
  {
    id: 1,
    slug: "the-math-you-need",
    title: "The Math You Need",
    subtitle: "Linear Algebra, Probability & Calculus Basics",
    description: "Just enough math to not be lost",
    timeEstimate: "8-12 hours",
    color: "#06B6D4",
    intro: [
      "You don't need a math PhD to understand LLMs, but you do need to be comfortable with a few core concepts. The good news: the math that matters most is surprisingly visual and intuitive once you see it the right way.",
      "Vectors and matrices are the language neural networks speak. Every word becomes a vector (a list of numbers), every transformation is a matrix multiplication. Dot products measure similarity between vectors — this is literally how attention works. Softmax turns raw numbers into probabilities. And gradient descent is just 'go downhill' applied to finding the best model parameters.",
      "The resources below are hand-picked to build your intuition visually, not to drown you in proofs. Watch the 3Blue1Brown series — they're some of the best math education ever created."
    ],
    videos: [
      {
        type: "video",
        title: "Essence of Linear Algebra",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
        description: "3Blue1Brown's legendary playlist that makes linear algebra click visually. Vectors, matrices, transformations, eigenvalues — all animated beautifully.",
        icon: "🎬"
      },
      {
        type: "video",
        title: "Essence of Calculus",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
        description: "3Blue1Brown's visual approach to calculus. Derivatives and integrals explained with beautiful geometric intuition.",
        icon: "🎬"
      }
    ],
    interactives: [
      {
        type: "interactive",
        title: "Seeing Theory",
        url: "https://seeing-theory.brown.edu/",
        description: "Brown University's beautiful interactive introduction to probability and statistics. Drag, click, and explore probability concepts visually.",
        icon: "📊"
      },
      {
        type: "interactive",
        title: "TensorFlow Playground",
        url: "https://playground.tensorflow.org/",
        description: "Play with a real neural network in the browser. Tweak parameters and see how the model learns in real-time. Perfect for building intuition about features and decision boundaries.",
        icon: "🧪"
      }
    ],
    readings: [
      {
        type: "link",
        title: "Google ML Crash Course — Embeddings",
        url: "https://developers.google.com/machine-learning/crash-course/embeddings",
        description: "Google's clear explanation of word embeddings — how words become meaningful vectors in space.",
        icon: "📖"
      }
    ],
    checklist: [
      "What vectors and matrices are and why they matter",
      "What a dot product means intuitively",
      "Softmax function and probability distributions",
      "What gradient descent does (conceptually)"
    ]
  },
  {
    id: 2,
    slug: "neural-networks",
    title: "Neural Networks",
    subtitle: "Fundamentals of How Networks Learn",
    description: "Understand how neural networks learn before getting to transformers",
    timeEstimate: "6-10 hours",
    color: "#10B981",
    intro: [
      "Before you can understand transformers and LLMs, you need to understand the building blocks: neural networks. A neural network is, at its simplest, a function that takes numbers in and produces numbers out, with millions of adjustable knobs (parameters) in between.",
      "The magic is in how those knobs get adjusted. Through a process called backpropagation, the network compares its predictions to the correct answers, calculates how wrong it was (the loss), and then nudges every parameter in the direction that would make it slightly less wrong. Repeat this billions of times with billions of examples, and the network learns.",
      "The interactive tools below let you build and train neural networks in your browser. There's no substitute for actually seeing a network learn in real-time — watching the decision boundaries shift as training progresses makes everything click."
    ],
    videos: [
      {
        type: "video",
        title: "But what is a neural network?",
        url: "https://www.youtube.com/watch?v=aircAruvnKk",
        description: "3Blue1Brown Chapter 1 — The best introduction to neural networks ever made. Visual, intuitive, and thorough.",
        icon: "🎬"
      },
      {
        type: "video",
        title: "Gradient Descent — How Neural Networks Learn",
        url: "https://www.youtube.com/watch?v=IHZwWFHWa-w",
        description: "3Blue1Brown Chapter 2 — How neural networks actually learn by descending the loss landscape.",
        icon: "🎬"
      },
      {
        type: "video",
        title: "Backpropagation",
        url: "https://www.youtube.com/watch?v=Ilg3gGewQ5U",
        description: "3Blue1Brown Chapter 3 — The algorithm that makes learning possible, explained visually.",
        icon: "🎬"
      },
      {
        type: "video",
        title: "Backpropagation Calculus",
        url: "https://www.youtube.com/watch?v=tIeHLnjs5U8",
        description: "3Blue1Brown Chapter 4 — The calculus behind backpropagation for those who want the full picture.",
        icon: "🎬"
      }
    ],
    interactives: [
      {
        type: "interactive",
        title: "TensorFlow Playground",
        url: "https://playground.tensorflow.org/",
        description: "Build, train, and visualize neural networks in real-time. Experiment with layers, neurons, learning rates, and activation functions.",
        icon: "🧪"
      },
      {
        type: "interactive",
        title: "CNN Explainer",
        url: "https://poloclub.github.io/cnn-explainer/",
        description: "Interactive visualization of Convolutional Neural Networks. See how each layer transforms input images into features.",
        icon: "🔍"
      },
      {
        type: "interactive",
        title: "GAN Lab",
        url: "https://poloclub.github.io/ganlab/",
        description: "Explore Generative Adversarial Networks in the browser. Watch the generator and discriminator compete in real-time.",
        icon: "🎨"
      },
      {
        type: "interactive",
        title: "Neural Network Sandbox",
        url: "https://nn.ameo.dev/",
        description: "Build, train, and visualize custom neural network architectures entirely in the browser.",
        icon: "🏗️"
      }
    ],
    readings: [
      {
        type: "link",
        title: "Neural Networks and Deep Learning (Free Book)",
        url: "http://neuralnetworksanddeeplearning.com/",
        description: "Michael Nielsen's free online book. The gold standard for understanding neural networks from first principles, with interactive elements.",
        icon: "📖"
      }
    ],
    checklist: [
      "How a neural network learns through backpropagation",
      "What layers, weights, and biases are",
      "What loss functions and optimizers do",
      "CNNs vs. standard neural networks (brief)"
    ]
  },
  {
    id: 3,
    slug: "tokenization",
    title: "Tokenization",
    subtitle: "How LLMs See Text",
    description: "Understand how text becomes numbers",
    timeEstimate: "3-4 hours",
    color: "#F59E0B",
    intro: [
      "Here's a fundamental truth about LLMs: they never see text. They see numbers. Every word, every sentence, every prompt you type gets broken down into tokens — small pieces that might be whole words, parts of words, or even individual characters. Understanding tokenization is understanding the LLM's native language.",
      "The most common approach is Byte Pair Encoding (BPE). Starting with individual characters, BPE repeatedly merges the most frequent pairs to build up a vocabulary of subword units. Common words like 'the' become single tokens; rare words get split into pieces. This is why LLMs can struggle with spelling, counting characters, or handling non-English languages — it's all downstream of tokenization.",
      "The interactive tools below let you see exactly how different models tokenize text. Try typing the same sentence into multiple tokenizers and compare — you'll quickly build intuition for why LLMs behave the way they do."
    ],
    videos: [
      {
        type: "video",
        title: "Let's Build the GPT Tokenizer",
        url: "https://www.youtube.com/watch?v=zduSFxRajkE",
        description: "Andrej Karpathy builds a BPE tokenizer from scratch in Python. 2+ hours of hands-on understanding of exactly how tokenization works.",
        icon: "🎬"
      }
    ],
    interactives: [
      {
        type: "interactive",
        title: "Tiktokenizer",
        url: "https://tiktokenizer.vercel.app/",
        description: "See GPT tokenization live as you type. Color-coded tokens show exactly how your text gets split.",
        icon: "🔤"
      },
      {
        type: "interactive",
        title: "OpenAI Tokenizer",
        url: "https://platform.openai.com/tokenizer",
        description: "Official OpenAI tokenizer tool. See token counts and boundaries for GPT models.",
        icon: "🔤"
      },
      {
        type: "interactive",
        title: "BPE Visualizer",
        url: "https://www.bpe-visualizer.com/",
        description: "Step-by-step animation of the Byte Pair Encoding algorithm. Watch merges happen one at a time.",
        icon: "🎯"
      },
      {
        type: "interactive",
        title: "Hugging Face Tokenizer Playground",
        url: "https://huggingface.co/spaces/Xenova/the-tokenizer-playground",
        description: "Compare tokenizers across models — GPT, BERT, LLaMA, Mistral and more side by side.",
        icon: "🤗"
      },
      {
        type: "interactive",
        title: "Tokenizer Visualizer (Multi-Model)",
        url: "https://tokenization-visualization.netlify.app/",
        description: "GPT-2, BERT, LLaMA, Mistral tokenizer comparison with visual diff highlighting.",
        icon: "📊"
      }
    ],
    readings: [],
    checklist: [
      "Why we can't feed raw text to neural networks",
      "How Byte Pair Encoding (BPE) works step by step",
      "Why tokenization affects LLM behavior (spelling, counting, multilingual)",
      "Differences between GPT/BERT/LLaMA tokenizers"
    ]
  },
  {
    id: 4,
    slug: "transformer-architecture",
    title: "The Transformer",
    subtitle: "The Architecture That Powers All Modern LLMs",
    description: "Deep understanding of the architecture that powers all modern LLMs",
    timeEstimate: "8-12 hours",
    color: "#EC4899",
    intro: [
      "The Transformer architecture, introduced in the 2017 paper 'Attention Is All You Need,' is the engine behind every modern LLM. Understanding it is understanding the heart of the entire field. The core insight: instead of processing text sequentially (word by word), transformers process all tokens simultaneously and use 'attention' to figure out which tokens should influence which.",
      "Self-attention is the key mechanism. Each token creates three vectors: a Query (what am I looking for?), a Key (what do I contain?), and a Value (what information do I share?). The attention score between two tokens is the dot product of one's Query with the other's Key — and this elegant mechanism lets the model learn which words are relevant to each other, regardless of distance.",
      "The full architecture stacks multiple layers of self-attention and feed-forward networks, with residual connections and layer normalization holding everything together. The resources below include some of the best visualizations ever created for understanding transformers — from 3Blue1Brown's animations to Georgia Tech's live GPT-2 running in your browser."
    ],
    videos: [
      {
        type: "video",
        title: "Transformers Explained Visually",
        url: "https://www.youtube.com/watch?v=wjZofJX0v4M",
        description: "3Blue1Brown Chapter 5 — How LLMs work, explained with the signature beautiful animations. The best visual intro to transformers.",
        icon: "🎬"
      },
      {
        type: "video",
        title: "Attention in Transformers, Step-by-Step",
        url: "https://www.youtube.com/watch?v=eMlx5fFNoYc",
        description: "3Blue1Brown Chapter 6 — Deep dive into the attention mechanism with step-by-step visual walkthrough of Query, Key, and Value.",
        icon: "🎬"
      },
      {
        type: "video",
        title: "How Might LLMs Store Facts",
        url: "https://www.youtube.com/watch?v=9-Jl0dxWQs8",
        description: "3Blue1Brown Chapter 7 — Exploring how facts and knowledge are encoded in the feed-forward layers of transformers.",
        icon: "🎬"
      }
    ],
    interactives: [
      {
        type: "interactive",
        title: "Transformer Explainer (Georgia Tech)",
        url: "https://poloclub.github.io/transformer-explainer/",
        description: "Live GPT-2 running in your browser with full visualization of every component. See attention patterns, embeddings, and predictions in real-time.",
        icon: "⚡"
      },
      {
        type: "interactive",
        title: "bbycroft.net LLM Visualization",
        url: "https://bbycroft.net/llm",
        description: "3D walkthrough of the complete LLM architecture. Navigate through embeddings, attention heads, and output layers.",
        icon: "🔮"
      },
      {
        type: "interactive",
        title: "ML Visualized",
        url: "https://ml-visualized.com/",
        description: "Collection of interactive ML concept visualizations covering attention, embeddings, and more.",
        icon: "📊"
      },
      {
        type: "interactive",
        title: "Attention Viz",
        url: "https://attentionviz.com/",
        description: "Visualize attention patterns across layers and heads. See what the model is 'looking at' for each token.",
        icon: "👁️"
      },
      {
        type: "interactive",
        title: "TensorFlow Embedding Projector",
        url: "https://projector.tensorflow.org/",
        description: "Explore word embeddings in 3D. See how similar words cluster together in embedding space.",
        icon: "🌐"
      }
    ],
    readings: [
      {
        type: "link",
        title: "Attention Is All You Need (Original Paper)",
        url: "https://arxiv.org/abs/1706.03762",
        description: "The 2017 paper that started it all. Dense but foundational — the architecture described here powers every modern LLM.",
        icon: "📄"
      },
      {
        type: "link",
        title: "The Illustrated Transformer",
        url: "https://jalammar.github.io/illustrated-transformer/",
        description: "Jay Alammar's beautifully illustrated guide to the Transformer architecture. The most-shared visual explainer on the internet.",
        icon: "📖"
      },
      {
        type: "link",
        title: "The Illustrated GPT-2",
        url: "https://jalammar.github.io/illustrated-gpt2/",
        description: "Jay Alammar's visual guide to GPT-2 — see how the transformer architecture is used for text generation.",
        icon: "📖"
      },
      {
        type: "link",
        title: "Transformer Circuits (Anthropic)",
        url: "https://transformer-circuits.pub/",
        description: "Anthropic's deep research into mechanistic interpretability — understanding what's actually happening inside transformer models.",
        icon: "🔬"
      }
    ],
    checklist: [
      "What embeddings are and why they encode meaning",
      "How self-attention works (Query, Key, Value)",
      "What multi-head attention does",
      "How the full transformer architecture fits together",
      "How information flows from input tokens to output predictions"
    ]
  },
  {
    id: 5,
    slug: "training-llms",
    title: "Training LLMs",
    subtitle: "From Data to Model",
    description: "Understand the full training pipeline",
    timeEstimate: "5-8 hours",
    color: "#EF4444",
    intro: [
      "Training an LLM is conceptually simple: show the model billions of sentences, hide the next word, and adjust the parameters to predict it better. That's it — next token prediction. But the engineering required to do this at scale is staggering, involving thousands of GPUs, petabytes of data, and months of computation.",
      "The training data pipeline is crucial and often underappreciated. Web crawling captures the raw internet, but then comes filtering (removing spam, duplicates, toxic content), deduplication, and careful mixing of data sources. The quality of your data determines the quality of your model — 'garbage in, garbage out' applies more here than anywhere.",
      "Andrej Karpathy's 'Let's reproduce GPT-2' video is the crown jewel of this module. In 4 hours, he builds GPT-2 from scratch in PyTorch, demystifying every component from data loading to the training loop to evaluation. If you have the time for only one resource in this entire site, this might be it."
    ],
    videos: [
      {
        type: "video",
        title: "Let's Reproduce GPT-2 (124M)",
        url: "https://www.youtube.com/watch?v=l8pRSuU81PU",
        description: "Andrej Karpathy builds GPT-2 from scratch in PyTorch in 4 hours. The definitive hands-on guide to understanding LLM training end-to-end.",
        icon: "🎬"
      }
    ],
    interactives: [],
    readings: [
      {
        type: "link",
        title: "build-nanogpt (GitHub)",
        url: "https://github.com/karpathy/build-nanogpt",
        description: "Karpathy's repository with all the code from the GPT-2 reproduction video. Clone it and follow along.",
        icon: "💻"
      },
      {
        type: "link",
        title: "FineWeb Dataset Documentation",
        url: "https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1",
        description: "Hugging Face's documentation on FineWeb — a high-quality pretraining dataset. Understand what goes into curating training data.",
        icon: "📊"
      }
    ],
    checklist: [
      "Where training data comes from and how it's cleaned",
      "What 'next token prediction' actually means",
      "Why training is so expensive (compute, data, time)",
      "How GPT-2 can be reproduced from scratch"
    ]
  },
  {
    id: 6,
    slug: "post-training",
    title: "Post-Training",
    subtitle: "SFT, RLHF & Alignment",
    description: "Understand how base models become useful assistants",
    timeEstimate: "4-6 hours",
    color: "#8B5CF6",
    intro: [
      "A base LLM trained on internet text is like a brilliant but unruly student — it can complete any text pattern it's seen, but it doesn't follow instructions, can produce harmful content, and has no concept of being 'helpful.' Post-training is the process of turning this raw capability into a useful, aligned assistant.",
      "The pipeline typically has three stages. First, Supervised Fine-Tuning (SFT): show the model thousands of example conversations where a helpful assistant responds to questions. Second, train a reward model on human preferences — given two responses, which is better? Third, use Reinforcement Learning from Human Feedback (RLHF) to optimize the LLM's outputs against that reward model using PPO. An alternative, Direct Preference Optimization (DPO), skips the reward model entirely.",
      "Understanding post-training is key to understanding why LLMs behave the way they do — their 'personality,' their tendency to be helpful, their refusals, and yes, their hallucinations. It's also one of the most active areas of research in the field."
    ],
    videos: [
      {
        type: "video",
        title: "Deep Dive into LLMs — SFT & RLHF Sections",
        url: "https://www.youtube.com/watch?v=7xTGNNLPyMI&t=3660s",
        description: "Jump to the SFT/RLHF sections (~1:01:00) of Karpathy's deep dive. Clear explanation of the full post-training pipeline.",
        icon: "🎬"
      }
    ],
    interactives: [],
    readings: [
      {
        type: "link",
        title: "Illustrating RLHF (Hugging Face)",
        url: "https://huggingface.co/blog/rlhf",
        description: "The best visual explainer of RLHF on the internet. Diagrams and clear prose walk through every step of the process.",
        icon: "📖"
      },
      {
        type: "link",
        title: "LLM Training: RLHF and Its Alternatives",
        url: "https://magazine.sebastianraschka.com/p/llm-training-rlhf-and-its-alternatives",
        description: "Sebastian Raschka's comprehensive overview of RLHF, DPO, and other post-training methods with clear comparisons.",
        icon: "📖"
      },
      {
        type: "link",
        title: "InstructGPT Paper",
        url: "https://arxiv.org/abs/2203.02155",
        description: "The paper that introduced the SFT → Reward Model → PPO pipeline. The blueprint for making LLMs follow instructions.",
        icon: "📄"
      },
      {
        type: "link",
        title: "DPO Paper",
        url: "https://arxiv.org/abs/2305.18290",
        description: "Direct Preference Optimization — a simpler alternative to RLHF that's become widely adopted. Key reading for understanding modern alignment.",
        icon: "📄"
      },
      {
        type: "link",
        title: "DeepLearning.AI — Post-Training Course",
        url: "https://www.deeplearning.ai/courses/fine-tuning-and-reinforcement-learning-for-llms-intro-to-post-training/",
        description: "Structured course on fine-tuning and reinforcement learning for LLMs from DeepLearning.AI.",
        icon: "🎓"
      }
    ],
    checklist: [
      "Difference between a base model and a fine-tuned assistant",
      "How RLHF works (collect preferences → train reward model → PPO)",
      "What DPO is and why it's simpler than RLHF",
      "Why LLMs hallucinate and current mitigation strategies",
      "What 'alignment' means"
    ]
  },
  {
    id: 7,
    slug: "using-llms",
    title: "Using LLMs",
    subtitle: "Practical Skills",
    description: "Go from understanding to actually using LLMs effectively",
    timeEstimate: "4-6 hours",
    color: "#06B6D4",
    intro: [
      "You now understand how LLMs work from the ground up — the architecture, the training, the alignment. This final module bridges the gap from theory to practice. How do you actually use these models effectively? How do you choose between them? What are the practical techniques that make the difference between a mediocre prompt and one that gets exactly what you need?",
      "Prompt engineering is both an art and a science. System prompts set the model's behavior, few-shot examples teach it patterns, and chain-of-thought prompting unlocks reasoning. But beyond prompting, there's a growing ecosystem of techniques: RAG (Retrieval-Augmented Generation) lets models access external knowledge, tool use gives them the ability to take actions, and AI agents chain multiple LLM calls together to accomplish complex tasks.",
      "The landscape of models is also evolving rapidly. GPT-4, Claude, Gemini, Llama, DeepSeek — each has different strengths. Reasoning models like o1 and DeepSeek-R1 represent a new paradigm. And you can even run capable models locally on your own hardware with tools like Ollama."
    ],
    videos: [
      {
        type: "video",
        title: "How I Use LLMs",
        url: "https://www.youtube.com/watch?v=EWvNQjAaOHw",
        description: "Andrej Karpathy shares his personal LLM workflow — 2+ hours of practical tips, tool choices, and real-world usage patterns from one of the field's top researchers.",
        icon: "🎬"
      }
    ],
    interactives: [
      {
        type: "interactive",
        title: "LM Arena (Chatbot Arena)",
        url: "https://lmarena.ai/",
        description: "Compare LLM models head-to-head. Community-driven rankings based on blind human preferences across models.",
        icon: "🏆"
      }
    ],
    readings: [
      {
        type: "link",
        title: "Anthropic's Prompt Engineering Guide",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering",
        description: "Official guide to prompting Claude effectively. Clear techniques with examples for system prompts, few-shot, and chain-of-thought.",
        icon: "📖"
      },
      {
        type: "link",
        title: "OpenAI Prompt Engineering Guide",
        url: "https://platform.openai.com/docs/guides/prompt-engineering",
        description: "OpenAI's official prompting guide. Practical strategies that apply across models, with concrete examples.",
        icon: "📖"
      }
    ],
    checklist: [
      "How to write effective prompts",
      "Which LLM to use for different tasks",
      "What RAG is and when to use it",
      "What AI agents are",
      "How to run LLMs locally"
    ]
  }
];
