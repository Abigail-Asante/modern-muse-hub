import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Lightbulb, Wheat, Building2, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';
import powerSample from '@/assets/power-sample.png';
import agSample from '@/assets/agriculture-sample.png';
import indSample from '@/assets/industrial-sample.png';
import digitalSample from '@/assets/digital-sample.png';

const projects = [
    {
        title: "Power Compact",
        description: "Improving the quality and reliability of electricity in Ghana through infrastructure investment and regulatory strengthening.",
        icon: Lightbulb,
        color: "bg-yellow-500/10 text-yellow-600",
        id: "power-compact",
        image: powerSample
    },
    {
        title: "Agricultural Projects",
        description: "Enhancing the profitability of farming through irrigation, land tenure facilitation, and post-harvest infrastructure.",
        icon: Wheat,
        color: "bg-green-500/10 text-green-600",
        id: "agriculture",
        image: agSample
    },
    {
        title: "Economic Enclaves",
        description: "Developing industrial zones with reliable utilities to attract private sector investment and create jobs.",
        icon: Building2,
        color: "bg-blue-500/10 text-blue-600",
        id: "economic-enclaves",
        image: indSample
    },
    {
        title: "Digital Youth Hubs",
        description: "Empowering youth with digital skills and entrepreneurship opportunities in modern tech hubs.",
        icon: Laptop,
        color: "bg-purple-500/10 text-purple-600",
        id: "digital-youth-hubs",
        image: digitalSample
    }
];

const Projects = () => {
    return (
        <Layout>
            <div className="pt-24 pb-16">
                <section className="bg-muted/30 py-16">
                    <div className="section-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">What We Do</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                MiDA implements strategic development programs designed to reduce poverty through economic growth in key sectors of the Ghanaian economy.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="section-container">
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border flex flex-col"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center z-20 bg-white shadow-lg ${project.color.replace('bg-', 'text-').replace('/10', '')}`}>
                                            <project.icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>

                                        <Link to={`/what-we-do/${project.id}`}>
                                            <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                            </Button>
                                        </Link>
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

export default Projects;
