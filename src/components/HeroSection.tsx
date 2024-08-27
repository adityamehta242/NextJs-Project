import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div className="h-screen w-full bg-black flex flex-col 
            items-center justify-center relative overflow-hidden mx-auto"> 
            
            {/* Adjust Spotlight if needed, or remove it if it interferes with the design */}
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e5e5e5"/>

            <div className="p-3 relative w-full z-10 text-center">
                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Master your Skill Here
                </h1>
                <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Dive into our comprehensive courses and transform your upskill journey today. 
                    Whether you are a beginner or looking to refine your skills, join us to unlock your true potential.
                </p>
                <div className="mt-10">
                    <Link href={"/all-courses"}> 
                        <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
