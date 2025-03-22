"use client"
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { Element } from "react-scroll";


export default function ContactInfo() {
    return (
        <motion.div initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: false }}>
            <Element className="flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 dark:text-white text-gray-800">
                    Let's Connect
                </h2>
                <p className="dark:text-gray-400 text-gray-500 mb-8 text-center">
                    Choose your preferred way to reach out
                </p>

                <div
                    name="contact"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-[#1e293b] bg-white dark:text-white text-gray-600 rounded-lg shadow-xl w-full px-4 md:px-6 py-6"
                >
                    <div className="relative w-full h-64 md:h-auto rounded-lg shadow-xl overflow-hidden">
                        <Image
                            src="/assets/contactInfo.png"
                            layout="fill"
                            objectFit="cover"
                            alt="Contact Info"
                            className="rounded-lg"
                        />
                    </div>

                    <div className="space-y-6 p-3 md:p-6">
                        <h3 className="text-xl font-bold">Contact Information</h3>
                        <ContactItem icon={Mail} label="Email" value="muhammadsameer2016@yahoo.com" iconColor="text-blue-400" />
                        <ContactItem icon={Phone} label="Phone" value="+92 3163136464" iconColor="text-green-400" />
                        <ContactItem icon={MapPin} label="Location" value="Karachi, Pakistan" iconColor="text-red-400" />
                        <ContactItem
                            icon={Calendar}
                            label="Calendly"
                            value={
                                <a
                                    href="https://calendly.com/muhammadsameer2016/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-400"
                                >
                                    Schedule a meeting with Sameer
                                </a>
                            }
                            iconColor="text-yellow-400"
                        />
                    </div>
                </div>
            </Element>
        </motion.div>
    );
}

function ContactItem({ icon: Icon, label, value, iconColor }) {
    return (
        <motion.div initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: false }}>
            <div className="flex items-center gap-4">
                <div className="p-3 dark:bg-[#334155] bg-white shadow rounded-lg">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
                </div>
                <div>
                    <p className="text-sm dark:text-gray-400 text-gray-500">{label}</p>
                    <p className="text-sm md:font-medium">{value}</p>
                </div>
            </div>
        </motion.div>
    );
}
