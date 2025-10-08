'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import AnimateOnView from '../../../../animations/AnimateOnView'
import { fadeDown, staggerContainer, headingVariant } from '../../../../animations/animations'

// Custom SVG Icons
const BrainIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const BotIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
)

const SparklesIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 1.5L5 6l1.5 1.5L5 9m0 0l1.5 1.5L5 12l1.5 1.5L5 15m14-12l-1.5 1.5L19 6l-1.5 1.5L19 9m0 0l-1.5 1.5L19 12l-1.5 1.5L19 15M12 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zm0 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
  </svg>
)

const SettingsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="m3 5 9 9 9-9"></path>
    <path d="M3 12a9 3 0 0 0 18 0"></path>
    <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
  </svg>
)

const SearchIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
)

const CloudIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

const AutomationIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
)

const CompassIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"></polygon>
  </svg>
)

interface ServiceCard {
  id: number
  title: string
  description: string
  features: string[]
  outcome: string
  icon: React.ReactNode
  gradient: string
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Full-Stack AI & GenAI Development",
    description: "We build end-to-end AI ecosystems that integrate data, models, APIs, and applications.",
    features: [
      "AI-powered web & mobile apps",
      "LLM-driven copilots & chatbots",
      "API integrations & workflow automation",
      "Cloud-native deployment & scaling"
    ],
    outcome: "Scalable AI platforms designed for real-world impact.",
    icon: <BrainIcon />,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Agentic AI & Multi-Agent Systems",
    description: "Go beyond chatbots — we create autonomous AI agents that reason, plan, and act.",
    features: [
      "Multi-agent ecosystems",
      "Tool-augmented agents (APIs, RAG, databases)",
      "Industry-specific copilots (Healthcare, Finance, Legal, Retail)",
      "Secure execution environments"
    ],
    outcome: "AI agents that don't just answer — they take action.",
    icon: <BotIcon />,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Generative AI Applications",
    description: "Harness the creative power of GenAI to supercharge your workflows.",
    features: [
      "Conversational AI assistants",
      "Text, code, image & content generation",
      "Knowledge copilots with RAG pipelines",
      "Multimodal AI (text + vision + speech + video)"
    ],
    outcome: "Intelligent assistants that understand, create, and interact naturally.",
    icon: <SparklesIcon />,
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 4,
    title: "LLM Finetuning & Custom Training",
    description: "We make AI work in your language, on your data.",
    features: [
      "Instruction-tuning for GPT, LLaMA, Mistral, Falcon, etc.",
      "LoRA / QLoRA / PEFT for cost-efficient finetuning",
      "Dataset cleaning & preparation pipelines",
      "Continuous improvement with RLHF / RLAIF"
    ],
    outcome: "Domain-specific AI models that are accurate, reliable, and aligned.",
    icon: <SettingsIcon />,
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    title: "RAG (Retrieval-Augmented Generation) Systems",
    description: "Make your AI fact-based and context-aware with RAG.",
    features: [
      "Custom vector database pipelines (Pinecone, Weaviate, Milvus, FAISS)",
      "Private knowledge base integration",
      "Secure data embeddings & retrieval",
      "Optimized accuracy with benchmarking"
    ],
    outcome: "Answers that are always factual, relevant, and up-to-date.",
    icon: <SearchIcon />,
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    id: 6,
    title: "AI Infrastructure & MLOps",
    description: "We take your AI from prototype to production.",
    features: [
      "Model deployment & scaling",
      "CI/CD pipelines for AI workflows",
      "Monitoring, observability & retraining loops",
      "Governance & compliance controls"
    ],
    outcome: "Production-ready AI with enterprise-grade reliability.",
    icon: <CloudIcon />,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: 7,
    title: "Data Engineering & Intelligence",
    description: "AI is only as strong as its data — we help you get it right.",
    features: [
      "Data pipelines (ETL/ELT) for AI",
      "Structured & unstructured data processing",
      "Embedding optimization",
      "Knowledge graphs & hybrid RAG systems"
    ],
    outcome: "A strong data foundation for smarter AI.",
    icon: <DatabaseIcon />,
    gradient: "from-violet-500 to-purple-600"
  },
  {
    id: 8,
    title: "AI Safety, Security & Compliance",
    description: "Trustworthy AI is our priority.",
    features: [
      "Bias detection & fairness evaluation",
      "Hallucination mitigation techniques",
      "Privacy-preserving AI (secure embeddings, on-prem deployment)",
      "Regulatory compliance (GDPR, HIPAA, SOC2, etc.)"
    ],
    outcome: "Safe, ethical AI you can trust at scale.",
    icon: <ShieldIcon />,
    gradient: "from-slate-500 to-gray-600"
  },
  {
    id: 9,
    title: "Multimodal AI Solutions",
    description: "We build AI that goes beyond text.",
    features: [
      "Image & document intelligence (OCR, DICOM)",
      "Speech & audio copilots (transcription, voice assistants)",
      "Video analytics & understanding",
      "Cross-modal AI experiences"
    ],
    outcome: "AI that sees, hears, and understands.",
    icon: <EyeIcon />,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: 10,
    title: "AI Copilots & Workflow Automation",
    description: "Reimagine productivity with AI copilots.",
    features: [
      "Customer support automation",
      "Sales & marketing copilots",
      "Finance, legal, and healthcare AI assistants",
      "Workflow orchestration with agentic AI"
    ],
    outcome: "Smarter workflows, less manual effort, more efficiency.",
    icon: <AutomationIcon />,
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    id: 11,
    title: "AI Consulting & Strategy",
    description: "We guide organizations to unlock AI's full potential.",
    features: [
      "AI maturity & readiness assessment",
      "Use-case discovery & ROI analysis",
      "Architecture & tool selection (LangChain, LlamaIndex, etc.)",
      "Long-term AI adoption roadmaps"
    ],
    outcome: "A clear path to AI transformation.",
    icon: <CompassIcon />,
    gradient: "from-teal-500 to-cyan-600"
  }
]



const Content: React.FC = () => {
  return (
   <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <AnimateOnView variants={headingVariant} className="text-center mb-8 md:mb-14 lg:mb-16 xl:mb-20">
          <motion.h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Our AI Services
          </motion.h2>
          <motion.p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business and unlock new possibilities through cutting-edge technology
          </motion.p>
        </AnimateOnView>

        {/* Services Grid */}
        <AnimateOnView variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeDown} className="group cursor-pointer relative">
              <div className="h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 p-8 transition-all duration-500 relative overflow-hidden">
                
                {/* Icon & Title */}
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-600">
                    <span className="text-emerald-600 font-bold">Outcome: </span>
                    <span className="text-gray-700">{service.outcome}</span>
                  </p>
                </div>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-3 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-2xl`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimateOnView>
      </div>
    </div>
  )
}

export default Content