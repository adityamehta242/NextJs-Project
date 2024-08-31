'use client';
import Link from "next/link";
import FeaturedWebinars from "@/data/featuredWebinar.json"
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinar = function (){
return(
    <div className="p-12 bg-gray-900 ">
        <div className="max-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wider uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"> Enhance Your Skill</p>
            </div>
            <div className="mt-10">
                <HoverEffect items={FeaturedWebinars.Webinars.map(card =>( {
                    title : card.title,
                    description : card.description,
                    link : '/',
                    slug : card.slug
                }))}>
                    
                </HoverEffect>
            </div>


            <div className="mt-10 text-center">
                <Link href={"/"} className="px-4 py-2 rounded Border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-400 transition duration-100">
                    View All webinars.
                </Link>
            </div>
        </div>    
    </div>
)
}

export default UpcomingWebinar;