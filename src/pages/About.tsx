import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <Layout>
            <div className="pt-24 pb-16">
                {/* Header */}
                <section className="bg-primary/5 py-16">
                    <div className="section-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">About MiDA</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The Millennium Development Authority (MiDA) serves as the accountable entity for the implementation of the Millennium Challenge Account (MCA) Compac programs in Ghana.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20">
                    <div className="section-container">
                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-border"
                            >
                                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Our Vision</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The preferred national development organization implementing public and donor funded programs to reduce poverty through economic growth.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-border"
                            >
                                <h2 className="text-2xl font-serif font-bold mb-4 text-primary">Our Mission</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    To oversee, manage and implement national development programs funded by the Millennium Challenge Corporation, Government of Ghana and development partners in an effective and sustainable manner.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Values / Mandate */}
                <section className="py-16 bg-muted/30">
                    <div className="section-container">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold mb-10 text-center">Our Mandate</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    "Oversee and manage the implementation of Compact Programs",
                                    "Ensure effective administrative and technical support",
                                    "Collaborate with Government Ministries, Departments and Agencies",
                                    "Maintain transparent and accountable governance processes",
                                    "Foster sustainable economic growth and poverty reduction",
                                    "Execute projects with environmental and social responsibility"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-secondary mt-1 shrink-0" />
                                        <span className="text-foreground/80">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;
