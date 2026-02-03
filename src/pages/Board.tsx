import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const boardMembers = [
    {
        name: "Prof. Yaa Ntiamoa-Baidu",
        role: "Board Chairperson",
        image: "bg-purple-100"
    },
    {
        name: "Dr. Evans A. Dzikum",
        role: "Member",
        image: "bg-blue-100"
    },
    {
        name: "Mr. Kennedy Osei Nyarko",
        role: "Member",
        image: "bg-green-100"
    },
    {
        name: "Mrs. Sarah Fynn-Aikins",
        role: "Member",
        image: "bg-yellow-100"
    },
    {
        name: "Mr. Kojo Addo-Kufuor",
        role: "Member",
        image: "bg-pink-100"
    },
    {
        name: "Dr. Samuel Kobina De-Souza",
        role: "Member",
        image: "bg-orange-100"
    }
];

const Board = () => {
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
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Our Board</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The MiDA Board of Directors governs the Authority and provides strategic direction for the implementation of the Compact.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="section-container">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {boardMembers.map((member, index) => (
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

export default Board;
