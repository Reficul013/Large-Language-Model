"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";

interface ResourceLink {
  title: string;
  url: string;
  desc: string;
}

const categories: { title: string; icon: string; color: string; items: ResourceLink[] }[] = [
  {
    title: "YouTube Channels",
    icon: "🎬",
    color: "#EF4444",
    items: [
      { title: "Andrej Karpathy", url: "https://www.youtube.com/@AndrejKarpathy", desc: "Deep dives into LLMs, tokenizers, GPT reproduction, and practical AI usage." },
      { title: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown", desc: "The gold standard for visual math and ML explanations." },
      { title: "Yannic Kilcher", url: "https://www.youtube.com/@YannicKilcher", desc: "In-depth paper reviews and ML news." },
    ],
  },
  {
    title: "Interactive Tools",
    icon: "🧪",
    color: "#8B5CF6",
    items: [
      { title: "bbycroft.net LLM Visualization", url: "https://bbycroft.net/llm", desc: "3D animated walkthrough of every component inside an LLM." },
      { title: "Transformer Explainer", url: "https://poloclub.github.io/transformer-explainer/", desc: "Live GPT-2 in browser with full architecture visualization." },
      { title: "TensorFlow Playground", url: "https://playground.tensorflow.org/", desc: "Build and train neural networks interactively." },
      { title: "Tiktokenizer", url: "https://tiktokenizer.vercel.app/", desc: "See GPT tokenization live as you type." },
      { title: "CNN Explainer", url: "https://poloclub.github.io/cnn-explainer/", desc: "Interactive CNN visualization from Georgia Tech." },
      { title: "GAN Lab", url: "https://poloclub.github.io/ganlab/", desc: "Explore GANs interactively in the browser." },
      { title: "Seeing Theory", url: "https://seeing-theory.brown.edu/", desc: "Visual introduction to probability and statistics." },
      { title: "Attention Viz", url: "https://attentionviz.com/", desc: "Visualize attention patterns in transformer models." },
      { title: "Embedding Projector", url: "https://projector.tensorflow.org/", desc: "Explore word embeddings in 3D space." },
      { title: "BPE Visualizer", url: "https://www.bpe-visualizer.com/", desc: "Step-by-step Byte Pair Encoding animation." },
      { title: "Neural Network Sandbox", url: "https://nn.ameo.dev/", desc: "Build and train custom neural networks." },
      { title: "LM Arena", url: "https://lmarena.ai/", desc: "Compare LLM models head-to-head." },
    ],
  },
  {
    title: "Key Papers",
    icon: "📄",
    color: "#06B6D4",
    items: [
      { title: "Attention Is All You Need (2017)", url: "https://arxiv.org/abs/1706.03762", desc: "The original Transformer paper." },
      { title: "InstructGPT (2022)", url: "https://arxiv.org/abs/2203.02155", desc: "The SFT → Reward Model → PPO pipeline." },
      { title: "DPO (2023)", url: "https://arxiv.org/abs/2305.18290", desc: "Direct Preference Optimization — simpler RLHF alternative." },
    ],
  },
  {
    title: "Books",
    icon: "📚",
    color: "#10B981",
    items: [
      { title: "Neural Networks and Deep Learning", url: "http://neuralnetworksanddeeplearning.com/", desc: "Michael Nielsen's free online book." },
    ],
  },
  {
    title: "Courses",
    icon: "🎓",
    color: "#F59E0B",
    items: [
      { title: "DeepLearning.AI — Post-Training", url: "https://www.deeplearning.ai/courses/fine-tuning-and-reinforcement-learning-for-llms-intro-to-post-training/", desc: "Fine-tuning and RL for LLMs." },
      { title: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course", desc: "Practical intro to machine learning." },
    ],
  },
  {
    title: "Blogs & Articles",
    icon: "✍️",
    color: "#EC4899",
    items: [
      { title: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/", desc: "Jay Alammar's visual guide to transformers." },
      { title: "The Illustrated GPT-2", url: "https://jalammar.github.io/illustrated-gpt2/", desc: "Visual walkthrough of GPT-2." },
      { title: "Illustrating RLHF", url: "https://huggingface.co/blog/rlhf", desc: "Hugging Face's visual RLHF explainer." },
      { title: "Sebastian Raschka", url: "https://magazine.sebastianraschka.com/", desc: "In-depth LLM training articles." },
      { title: "Transformer Circuits", url: "https://transformer-circuits.pub/", desc: "Anthropic's interpretability research." },
      { title: "Anthropic Prompt Guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering", desc: "Official Claude prompting guide." },
      { title: "OpenAI Prompt Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", desc: "Official OpenAI prompting strategies." },
    ],
  },
  {
    title: "Communities",
    icon: "👥",
    color: "#6366F1",
    items: [
      { title: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/", desc: "Reddit's main ML community." },
      { title: "Hugging Face", url: "https://huggingface.co/", desc: "The GitHub of ML." },
      { title: "r/LocalLLaMA", url: "https://www.reddit.com/r/LocalLLaMA/", desc: "Community for running LLMs locally." },
    ],
  },
  {
    title: "Code & Repositories",
    icon: "💻",
    color: "#14B8A6",
    items: [
      { title: "build-nanogpt", url: "https://github.com/karpathy/build-nanogpt", desc: "Karpathy's GPT-2 reproduction code." },
      { title: "FineWeb Dataset", url: "https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1", desc: "High-quality pretraining data documentation." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Sidebar />
      <main className="lg:pl-[280px] min-h-screen">
        {/* Header */}
        <div className="border-b border-cosmos-700/30 bg-gradient-to-b from-nebula-purple/5 to-transparent">
          <div className="max-w-5xl mx-auto px-6 pt-16 pb-10 lg:pt-12">
            <div>
              <span className="text-xs font-medium text-nebula-purple uppercase tracking-widest mb-3 block">
                Curated Collection
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-3">
                Resources
              </h1>
              <p className="text-lg text-star-dim max-w-2xl">
                Every resource referenced throughout LLM Universe, organized by
                type. Bookmark this page.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="space-y-12">
            {categories.map((cat) => (
              <section key={cat.title}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xl w-9 h-9 rounded-lg bg-cosmos-800/80 flex items-center justify-center">
                    {cat.icon}
                  </span>
                  <h2 className="font-display font-semibold text-xl text-star-white">
                    {cat.title}
                  </h2>
                  <span className="text-[10px] text-star-muted bg-cosmos-800/80 px-2 py-0.5 rounded-full">
                    {cat.items.length}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glass-card block p-4 rounded-xl"
                    >
                      <h3 className="font-display font-medium text-sm text-star-white group-hover:text-nebula-purple transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-star-muted leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-2 text-[10px] text-star-dim group-hover:text-nebula-purple transition-colors">
                        Visit
                        <svg
                          className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
