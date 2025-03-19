"use client"
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { Element } from "react-scroll";


export default function ContactInfo() {
    return (
        <Element className="flex justify-center flex-col items-center max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 dark:text-white text-gray-800">Lets Connect</h2>
            <p className="dark:text-gray-400 text-gray-500 mb-8">Choose your preferred way to reach out</p>
            <div name="contact" className="grid grid-cols-12 dark:bg-[#1e293b] bg-white dark:text-white text-gray-600 rounded-lg shadow-xl mx-6 w-full px-4 md:px-6">
                <div className="relative col-span-8 md:col-span-6 rounded-lg shadow-xl m-6 ">
                    <Image src={"/assets/contactInfo.jpg"} fill alt="" className="object-cover rounded-lg" />
                </div>
                <div className="col-span-8 md:col-span-6 space-y-6 p-3 md:p-6">
                    <h3 className="text-xl font-bold">Contact Information</h3>
                    <div className="flex items-center gap-4">
                        <div className="p-3 dark:bg-[#334155] bg-white shadow rounded-lg">
                            <Mail className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-sm dark:text-gray-400 text-gray-500">Email</p>
                            <p className="font-medium">muhammadsameer2016@yahoo.com</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 dark:bg-[#334155] shadow bg-white rounded-lg">
                            <Phone className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
                        </div>
                        <div>
                            <p className="text-sm dark:text-gray-400 text-gray-500">Phone</p>
                            <p className="font-medium">+92 3163136464</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 dark:bg-[#334155] shadow bg-white rounded-lg">
                            <MapPin className="w-4 h-4 md:w-6 md:h-6 text-red-400" />
                        </div>
                        <div>
                            <p className="text-sm dark:text-gray-400 text-gray-500">Location</p>
                            <p className="font-medium">Karachi, Pakistan</p>
                        </div>
                    </div>

                    {/* Calendly */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 dark:bg-[#334155] shadow bg-white rounded-lg">
                            <Calendar className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
                        </div>
                        <div>
                            <p className="text-sm dark:text-gray-400 text-gray-500">Calendly</p>
                            <a
                                href="https://calendly.com/muhammadsameer2016/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium underline hover:text-blue-400"
                            >
                                Schedule a meeting with Sameer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}
