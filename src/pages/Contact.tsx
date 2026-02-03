import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <Layout>
            <div className="pt-24 pb-16">
                <section className="bg-primary text-white py-20">
                    <div className="section-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
                            <p className="text-lg text-white/80 leading-relaxed">
                                We are here to answer any questions you may have about our projects and operations.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="section-container">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                            <p className="text-muted-foreground">4th Floor, Heritage Tower</p>
                                            <p className="text-muted-foreground">Ambassadorial Enclave, Ridge West</p>
                                            <p className="text-muted-foreground">Accra, Ghana</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                            <p className="text-muted-foreground">+233 30 266 6621</p>
                                            <p className="text-muted-foreground">+233 30 266 6624</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                            <p className="text-muted-foreground">info@mida.gov.gh</p>
                                            <p className="text-muted-foreground">helpdesk@mida.gov.gh</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                                            <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                                            <p className="text-muted-foreground">Weekends: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-border"
                            >
                                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary/20 outline-none" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary/20 outline-none" placeholder="john@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Message</label>
                                        <textarea className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary/20 outline-none h-32 resize-none" placeholder="How can we help you?" />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">Send Message</Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;
