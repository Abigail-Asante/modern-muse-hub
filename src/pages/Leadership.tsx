import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const managementTeam = [
    {
        name: "Martin Eson-Benjamin",
        role: "Chief Executive Officer",
        image: "bg-slate-200"
    },
    {
        name: "John Boakye",
        role: "Chief Financial Officer",
        image: "bg-slate-200"
    },
    {
        name: "Julius Kwame Kpekpena",
        role: "Chief Operating Officer",
        image: "bg-slate-200"
    },
    {
        name: "Dr. Kofi Marfo",
        role: "Director of Agriculture",
        image: "bg-slate-200"
    },
    {
        name: "Esther Cobbah",
        role: "Director of Communications",
        image: "bg-slate-200"
    }
];

const Leadership = () => {
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
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Leadership Team</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The executive management team dedicated to the successful implementation of MiDA's programmes.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="section-container">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {managementTeam.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all text-center"
                                >
                                    <div className={`w-32 h-32 ${member.image} rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-foreground/20`}>
                                        {member.name.charAt(0)}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                                    <p className="text-muted-foreground mb-4">{member.role}</p>

                                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                            <Linkedin className="w-4 h-4 text-foreground" />
                                        </button>
                                        <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                                            <Mail className="w-4 h-4 text-foreground" />
                                        </button>
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

export default Leadership;
