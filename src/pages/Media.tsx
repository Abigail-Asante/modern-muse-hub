import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Newspaper, Video, Image as ImageIcon } from 'lucide-react';

const Media = () => {
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
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Media Center</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Stay updated with the latest news, press releases, and multimedia content from MiDA.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="section-container">
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Newspaper className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Press Releases</h3>
                                <p className="text-muted-foreground mb-6">Official statements and announcements.</p>
                                <Button variant="outline">View Archive</Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Video className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Videos</h3>
                                <p className="text-muted-foreground mb-6">Documentaries and event coverage.</p>
                                <Button variant="outline">Watch Videos</Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-border text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ImageIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Photo Gallery</h3>
                                <p className="text-muted-foreground mb-6">Images from our projects and events.</p>
                                <Button variant="outline">View Gallery</Button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Media;
