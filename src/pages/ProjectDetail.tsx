import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import { Lightbulb, Wheat, Building2, Laptop, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

import powerSample from '@/assets/power-sample.png';
import agSample from '@/assets/agriculture-sample.png';
import indSample from '@/assets/industrial-sample.png';
import digitalSample from '@/assets/digital-sample.png';

const projectsData = {
    "power-compact": {
        title: "Power Compact",
        icon: Lightbulb,
        color: "text-yellow-600",
        bgColor: "bg-yellow-500/10",
        description: "The Power Compact is a major initiative designed to transform Ghana's power sector. By improving the quality and reliability of electricity, we aim to power businesses, schools, and hospitals, fostering economic growth and social development.",
        objectives: [
            "Improve the reliability of electricity supply",
            "Increasing access to electricity",
            "Enhancing the efficiency of the distribution system",
            "Strengthening the regulatory framework"
        ],
        impact: "Over 2 million people benefiting from improved power reliability and access.",
        samples: [
            { title: "GridCo Substation Upgrade", image: powerSample, location: "Pokuase, Accra" },
            { title: "ECG Loss Reduction Project", image: powerSample, location: "Across Accra West" }
        ]
    },
    "agriculture": {
        title: "Agricultural Projects",
        icon: Wheat,
        color: "text-green-600",
        bgColor: "bg-green-500/10",
        description: "Our agricultural interventions focus on modernizing farming practices, improving irrigation systems, and establishing land tenure security to boost productivity and income for farmers.",
        objectives: [
            "Construction of irrigation infrastructure",
            "Facilitating land tenure security",
            "Post-harvest management support",
            "Market access improvements"
        ],
        impact: "Increased crop yields by 40% in intervention zones.",
        samples: [
            { title: "Kpong Irrigation Scheme", image: agSample, location: "Kpong, Eastern Region" },
            { title: "Agribusiness Financing Fund", image: agSample, location: "Nationwide" }
        ]
    },
    "economic-enclaves": {
        title: "Economic Enclaves",
        icon: Building2,
        color: "text-blue-600",
        bgColor: "bg-blue-500/10",
        description: "We are developing fully serviced industrial zones (Economic Enclaves) that provide reliable utilities and infrastructure to attract private sector investment and drive industrialization.",
        objectives: [
            "Provision of reliable power and water",
            "Road network development within enclaves",
            "Investment facilitation services",
            "Job creation through industrialization"
        ],
        impact: "Attracted over $500M in private sector investment.",
        samples: [
            { title: "Dawa Industrial Zone", image: indSample, location: "Dawa, Greater Accra" },
            { title: "Tema Export Processing Zone", image: indSample, location: "Tema" }
        ]
    },
    "digital-youth-hubs": {
        title: "Digital Youth Hubs",
        icon: Laptop,
        color: "text-purple-600",
        bgColor: "bg-purple-500/10",
        description: "Empowering the next generation with digital skills. These hubs provide state-of-the-art facilities for training, innovation, and entrepreneurship in the tech sector.",
        objectives: [
            "Digital skills training",
            "Incubation support for startups",
            "Access to high-speed internet and devices",
            "Mentorship programs"
        ],
        impact: "Training provided to over 5,000 youth in digital skills.",
        samples: [
            { title: "Accra Digital Center", image: digitalSample, location: "Circle, Accra" },
            { title: "Kumasi Tech Hub", image: digitalSample, location: "KNUST, Kumasi" }
        ]
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData[id as keyof typeof projectsData];

    if (!project) {
        return <Navigate to="/what-we-do" replace />;
    }

    const Icon = project.icon;

    return (
        <Layout>
            <div className="pt-24 pb-16">
                {/* Hero Section */}
                <section className="bg-muted/30 py-20">
                    <div className="section-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className={`w-20 h-20 ${project.bgColor} ${project.color} rounded-2xl flex items-center justify-center mb-8`}>
                                <Icon className="w-10 h-10" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                                {project.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Details Section */}
                <section className="py-20">
                    <div className="section-container">
                        <div className="grid md:grid-cols-2 gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-serif font-bold mb-8">Key Objectives</h2>
                                <ul className="space-y-6">
                                    {project.objectives.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <CheckCircle2 className={`w-6 h-6 ${project.color} shrink-0`} />
                                            <span className="text-lg text-foreground/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl border border-border shadow-sm h-fit"
                            >
                                <h3 className="text-xl font-bold mb-4">Project Impact</h3>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    {project.impact}
                                </p>
                                <Button className="w-full" size="lg">
                                    Download Project Factsheet
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Sample Projects Section */}
                <section className="bg-muted/30 py-20">
                    <div className="section-container">
                        <h2 className="text-3xl font-serif font-bold mb-10 text-center">Featured Projects</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {project.samples?.map((sample, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={sample.image}
                                            alt={sample.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{sample.title}</h3>
                                        <p className="text-muted-foreground flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                            {sample.location}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ProjectDetail;
