'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const techSchoolTestimonials = [
    {
      quote:
        "Enrolling in the web development course was the best decision I made for my career. The curriculum is up-to-date, and the instructors are incredibly supportive, ensuring you understand each concept thoroughly.",
      name: 'Jordan Smith',
      title: 'Web Development Student',
    },
    {
      quote:
        "The machine learning bootcamp here exceeded my expectations. The hands-on projects and real-world applications were invaluable. I feel confident tackling complex ML problems now.",
      name: 'Ayesha Patel',
      title: 'Machine Learning Bootcamp Graduate',
    },
    {
      quote:
        "This program took my coding skills from beginner to advanced in just a few months. The personalized attention and practical exercises made all the difference in my learning experience.",
      name: 'David Kim',
      title: 'Programming Student',
    },
    {
      quote:
        "The blockchain course provided deep insights into the technology, and the community here is fantastic. I’ve been able to network with industry professionals and fellow learners alike.",
      name: 'Sophia Martinez',
      title: 'Blockchain Student',
    },
    {
      quote:
        'I was able to switch careers thanks to this bootcamp. The intensive, hands-on approach was exactly what I needed to break into the tech industry. I landed a job within weeks of completing the program.',
      name: 'Liam O’Connor',
      title: 'Full-Stack Bootcamp Graduate',
    },
  ];


function ScrollingCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={techSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
        </div>
    );
}

export default ScrollingCards;
