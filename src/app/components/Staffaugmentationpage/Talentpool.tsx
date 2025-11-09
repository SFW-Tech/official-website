import React from "react";
import AnimateOnView from "../../../../animations/AnimateOnView";
import { fadeDown, headingVariant, textScale } from "../../../../animations/animations";

function Talentpool() {
    
    
    const webTechs = ["NodeJS Developers", "MEAN Stack Developers", "MERN Stack Developers", "JAVA Developers", "GoLang Developers", "PHP Laravel Developers", "ROR Developers", ".NET Developers", "Magento Developers", "Laravel Developers", "Full-stack Developers"];
    const mobileTechs = ["iOS Developers", "iOS Swift Developers", "Android Developers", "Flutter Developers", "React Native Developers", "Ionic Developers", "Kotlin Developers", "Hybrid App Developers"];
    const serviceNowModules = ["ITSM", "ITBM", "ITOM", "ITAM", "IRM", "SecOps"];
    const qualityAssurance = ["Mobile App Tester", "Mobile Test Automation", "Selenium Test Engineer", "Cypress Test Engineer", "Web Test Automation", "Security and Penetration Tester", "Usability Tester", "Manual Tester", "Software Tester", "QA Engineers"];
    const platform = ["Mobile", "Web", "Desktop"];
    const frontend = ["Angular", "React", "Golang", "Vue.JS", "TypeScript", "JavaScript"];
    const backend = ["Java", ".Net", "Python", "NodeJS"];
    const mobile = ["Java", "Android", "Kotlin", "iOS", "Windows", "Laravel"];
    const database = ["MongoDB", "MySQL", "PostgreSQL"];
    const deployment = ["Servers", "VMs", "Containers", "Kubernetes", "Serverless"];
    const testing = ["Selenium", "JMeter", "Cypress", "Security and Penetration Testing"];
    const projecttools = ["JIRA"];
    const devops = ["Jenkins", "Azure Pipelines", "AWS Code Build"];
    const analytics = ["Google Big Query", "Amazon Redshift", "Firebase Analytics"];
    const agenticAIToolsAndFrameworks = ["LangChain", "LangSmith (For Monitoring)", "CrewAI", "LlamaIndex", "Haystack"];
    const mlOpsAndDeployment = ["MLflow", "Ray", "ONNX Runtime", "Triton Inference Server"];
    const annotationAndVisionTools = ["Roboflow", "FiftyOne", "Supervisely"];
    const syntheticDataAndSimulation = ["Mostly AI", "Gretel.ai"];
    const dataPreparationAndLabeling = ["Labelbox", "Scale AI", "SuperAnnotate", "Snorkel AI (weak supervision)", "AutoGen (Microsoft)", "n8n"];
    const vectorDatabaseAndMemoryInfrastructure = ["Pinecone / Weaviate / Milvus / FAISS", "Redis / PostgreSQL (long-term memory)"];
    const graphDatabases = ["Neo4j", "ArangoDB"];
    const llmsFinetuning = ["Hugging Face Transformers", "PEFT (Parameter-Efficient Fine-Tuning)", "LoRA / QLoRA", "TRL (Transformers Reinforcement Learning)"];
    const explainabilityAndFairness = ["AI Fairness 360 (IBM)", "SHAP / LIME", "TruEra"];
    const modelDeploymentAndServing = ["Seldon Core", "Kubeflow", "TensorRT", "TorchServe", "vLLM"];

    
    const renderCategory = (title: string, items: string[]) => (
        <div className="flex flex-col gap-2 items-start w-full">
            <div className="px-6 bg-[#001A5A] w-full flex items-center justify-center min-h-[90px]">
                <h1 className="text-xl font-bold text-white text-center">{title}</h1>
            </div>
            <ul className="flex flex-col gap-3 mt-4 list-disc list-inside w-full">
                {items.map((tech, index) => (
                    <React.Fragment key={index}>
                        <li className="text-left marker:text-cyan-500">{tech}</li>
                        {index !== items.length - 1 && <hr className="border-gray-300 w-full" />}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="mt-20 mb-30">
            {/* Headings */}
            <div className="flex flex-col gap-6 md:gap-12 text-center px-4 md:px-12 lg:px-20 xl:px-28">
                <AnimateOnView variants={headingVariant}>
                    <h3 className="text-2xl font-bold">
                        Take Advantage of Our Extended Talent Pool Through
                    </h3>
                </AnimateOnView>
                <AnimateOnView variants={headingVariant}>
                    <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-[#001A5A]">
                        IT Staff Augmentation
                    </h1>
                </AnimateOnView>
                <AnimateOnView variants={fadeDown}>
                    <p className="text-gray-700 leading-relaxed text-left text-sm md:text-base max-w-6xl mx-auto">
                        Create a fabulous team of skilled software engineers, UI/UX designers, business analysts, scrum masters, QA specialists, and the most in-demand technology specialists to create cutting-edge digital solutions. Use our resource augmentation services to gain immediate access to the professionals listed below:
                    </p>
                </AnimateOnView>
            </div>

            {/* Grid 1 */}
            <AnimateOnView variants={fadeDown} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-14 px-4 md:px-12 lg:px-20 xl:px-28">
                {renderCategory("Web Technology", webTechs)}
                {renderCategory("Mobile Technology", mobileTechs)}
                {/* {renderCategory("Service Now", serviceNowModules)} */}
                {renderCategory("Quality Assurance", qualityAssurance)}
            </AnimateOnView>

            {/* Divider */}
            <div className="w-full bg-cover bg-center my-10 px-4" style={{ backgroundImage: "url('/assets/Home/footerassets/footerbg.png')" }}>
                <AnimateOnView variants={textScale} className="text-center py-12 text-xl font-bold text-white">
                    Cutting-edge Technology Stack Used by Our Experts
                </AnimateOnView>
            </div>

            {/* Grid 2 */}
            <AnimateOnView variants={fadeDown} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-14 px-4 md:px-12 lg:px-20 xl:px-28">
                {renderCategory("Platform", platform)}
                {renderCategory("Front-End", frontend)}
                {renderCategory("Back-End", backend)}
                {renderCategory("Mobile", mobile)}
                {renderCategory("Database", database)}
                {renderCategory("Deployment", deployment)}
                {renderCategory("Testing", testing)}
                {renderCategory("Project Tools", projecttools)}
                {renderCategory("DevOps", devops)}
                {renderCategory("Analytics", analytics)}
            </AnimateOnView>

            {/* Divider */}
            <div className="w-full bg-cover bg-center my-10 px-4" style={{ backgroundImage: "url('/assets/Home/footerassets/footerbg.png')" }}>
                <AnimateOnView variants={textScale} className="text-center py-12 text-xl font-bold text-white">
                    Smart AI Technologies Crafted by Our Specialists
                </AnimateOnView>
            </div>

            {/* Grid 3 */}
            <AnimateOnView variants={fadeDown} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-14 px-4 md:px-12 lg:px-20 xl:px-28">
                {renderCategory("Agentic AI Tools & Frameworks", agenticAIToolsAndFrameworks)}
                {renderCategory("MLOps & Deployment", mlOpsAndDeployment)}
                {renderCategory("Annotation & Vision Tools", annotationAndVisionTools)}
                {renderCategory("Synthetic Data & Simulation", syntheticDataAndSimulation)}
                {renderCategory("Data Preparation & Labeling", dataPreparationAndLabeling)}
                {renderCategory("Vector Database & Memory Infrastructure", vectorDatabaseAndMemoryInfrastructure)}
                {renderCategory("Graph Databases", graphDatabases)}
                {renderCategory("LLM’s Finetuning", llmsFinetuning)}
                {renderCategory("Explainability & Fairness", explainabilityAndFairness)}
                {renderCategory("Model Deployment & Serving", modelDeploymentAndServing)}
            </AnimateOnView>
        </div>
    );
}

export default Talentpool;
