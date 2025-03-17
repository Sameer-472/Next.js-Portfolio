"use client"
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { Element } from "react-scroll";


export default function ContactInfo() {
    return (
        <Element className="flex justify-center flex-col items-center">
            <h2 className="text-3xl font-bold mb-2 text-white">Lets Connect</h2>
            <p className="text-gray-400 mb-8">Choose your preferred way to reach out</p>
            <div name="contact" className="max-w-5xl bg-[#1e293b] grid grid-cols-12 text-white rounded-lg shadow-xl w-full mx-auto mx-6">
                <div className="relative  col-span-12 md:col-span-6 rounded-lg shadow-xl m-6 ">
                    <Image src={"/assets/contactInfo.jpg"} fill alt="" className="object-cover rounded-lg" />
                </div>
                <div className="col-span-12 md:col-span-6 space-y-6 p-6">
                    <h3 className="text-xl font-bold">Contact Information</h3>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#334155] rounded-lg">
                            <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="font-medium">muhammadsameer2016@yahoo.com</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#334155] rounded-lg">
                            <Phone className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="font-medium">+92 3163136464</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#334155] rounded-lg">
                            <MapPin className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Location</p>
                            <p className="font-medium">Karachi, Pakistan</p>
                        </div>
                    </div>

                    {/* Calendly */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#334155] rounded-lg">
                            <Calendar className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Calendly</p>
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
