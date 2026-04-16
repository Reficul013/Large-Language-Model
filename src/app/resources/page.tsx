"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

interface ResourceLink {
  title: string;
  url: string;
  desc: string;
}

const categories: { title: string; icon: string; items: ResourceLink[] }[] = [
  {
    title: "YouTube Channels",
    icon: "🎬",
    items: [
      { title: "Andrej Karpathy", url: "https://www.youtube.com/@AndrejKarpathy", desc: "Deep dives into LLMs, tokenizers, GPT reproduction, and practical AI usage from a legendary AI researcher." },
      { title: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown", desc: "The gold standard for visual math and ML explanations. Neural networks, transformers, and attention explained beautifully." },
      { title: "Yannic Kilcher", url: "https://www.youtube.com/@YannicKilcher", desc: "In-depth paper reviews and ML news. Great for staying current with research." },
    ],
  },
  {
    title: "Interactive Tools",
    icon: "🧪",
    items: [
      { title: "bbycroft.net LLM Visualization", url: "https://bbycroft.net/llm", desc: "3D animated walkthrough of every component inside an LLM." },
      { title: "Transformer Explainer", url: "https://poloclub.github.io/transformer-explainer/", desc: "Live GPT-2 in browser with full architecture visualization." },
      { title: "TensorFlow Playground", url: "https://playground.tensorflow.org/", desc: "Build and train neural networks interactively in the browser." },
      { title: "Tiktokenizer", url: "https://tiktokenizer.vercel.app/", desc: "See GPT tokenization live as you type." },
      { title: "CNN Explainer", url: "https://poloclub.github.io/cnn-explainer/", desc: "Interactive CNN visualization from Georgia Tech." },
      { title: "GAN Lab", url: "https://poloclub.github.io/ganlab/", desc: "Explore GANs interactively in the browser." },
      { title: "Seeing Theory", url: "https://seeing-theory.brown.edu/", desc: "Visual introduction to probability and statistics." },
      { title: "Attention Viz", url: "https://attentionviz.com/", desc: "Visualize attention patterns in transformer models." },
      { title: "TensorFlow Embedding Projector", url: "https://projector.tensorflow.org/", desc: "Explore word embeddings in 3D space." },
      { title: "BPE Visualizer", url: "https://www.bpe-visualizer.com/", desc: "Step-by-step Byte Pair Encoding animation." },
      { title: "Neural Network Sandbox", url: "https://nn.ameo.dev/", desc: "Build, train, visualize custom neural networks in browser." },
      { title: "LM Arena", url: "https://lmarena.ai/", desc: "Compare LLM models head-to-head with community rankings." },
    ],
  },
  {
    title: "Key Papers",
    icon: "📄",
    items: [
      { title: "Attention Is All You Need (2017)", url: "https://arxiv.org/abs/1706.03762", desc: "The original Transformer paper that started it all." },
      { title: "InstructGPT (2022)", url: "https://arxiv.org/abs/2203.02155", desc: "The SFT → Reward Model → PPO pipeline for instruction following." },
      { title: "DPO (2023)", url: "https://arxiv.org/abs/2305.18290", desc: "Direct Preference Optimization — simpler alternative to RLHF." },
    ],
  },
  {
    title: "Books",
    icon: "📚",
    items: [
      { title: "Neural Networks and Deep Learning", url: "http://neuralnetworksanddeeplearning.com/", desc: "Michael Nielsen's free online book — the gold standard for understanding neural networks." },
    ],
  },
  {
    title: "Courses",
    icon: "🎓",
    items: [
      { title: "DeepLearning.AI — Post-Training Course", url: "https://www.deeplearning.ai/courses/fine-tuning-and-reinforcement-learning-for-llms-intro-to-post-training/", desc: "Structured course on fine-tuning and RL for LLMs." },
      { title: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course", desc: "Google's practical intro to machine learning concepts." },
    ],
  },
  {
    title: "Blogs & Articles",
    icon: "✍️",
    items: [
      { title: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/", desc: "Jay Alammar's legendary visual guide to transformers." },
      { title: "The Illustrated GPT-2", url: "https://jalammar.github.io/illustrated-gpt2/", desc: "Visual walkthrough of GPT-2 architecture and generation." },
      { title: "Illustrating RLHF", url: "https://huggingface.co/blog/rlhf", desc: "Hugging Face's visual explainer of RLHF." },
      { title: "Sebastian Raschka's Magazine", url: "https://magazine.sebastianraschka.com/", desc: "In-depth articles on LLM training, RLHF, and ML research." },
      { title: "Transformer Circuits", url: "https://transformer-circuits.pub/", desc: "Anthropic's mechanistic interpretability research." },
      { title: "Anthropic Prompt Engineering Guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering", desc: "Official guide to effective prompting with Claude." },
      { title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", desc: "OpenAI's practical prompting strategies." },
    ],
  },
  {
    title: "Communities",
    icon: "👥",
    items: [
      { title: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/", desc: "Reddit's main ML community — paper discussions, news, and research." },
      { title: "Hugging Face", url: "https://huggingface.co/", desc: "The GitHub of ML — models, datasets, spaces, and an amazing community." },
      { title: "r/LocalLLaMA", url: "https://www.reddit.com/r/LocalLLaMA/", desc: "Community focused on running LLMs locally." },
    ],
  },
  {
    title: "Code & Repositories",
    icon: "💻",
    items: [
      { title: "build-nanogpt", url: "https://github.com/karpathy/build-nanogpt", desc: "Karpathy's GPT-2 reproduction code — follow along with the video." },
      { title: "FineWeb Dataset", url: "https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1", desc: "Documentation on curating high-quality pretraining data." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Sidebar />
      <main className="lg:pl-72 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-12 pt-16 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-star-white mb-3">
              Resources
            </h1>
            <p className="text-lg text-star-dim max-w-2xl">
              Every resource referenced throughout LLM Universe, organized by
              type. Bookmark this page as your go-to reference.
            </p>
          </motion.div>

          <div className="space-y-12">
            {categories.map((cat, catIndex) => (
              <motion.section
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="font-display font-semibold text-2xl text-star-white">
                    {cat.title}
                  </h2>
                  <span className="text-xs text-star-muted bg-cosmos-800 px-2 py-0.5 rounded-full">
                    {cat.items.length}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, i) => (
                    <motion.a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50 hover:border-cosmos-400/50 hover:bg-cosmos-800 transition-all duration-300"
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <h3 className="font-display font-medium text-sm text-star-white group-hover:text-nebula-purple transition-colors mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-star-muted leading-relaxed">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-2 text-[11px] text-star-dim group-hover:text-nebula-purple transition-colors">
                        Visit
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
