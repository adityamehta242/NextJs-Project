"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const techCoursesContent = [
    {
      title: 'Code Your Future: A Personal Journey in Programming Mastery',
      description: 'Embark on a coding adventure tailored to your aspirations. Our personalized programming instruction aligns with your goals, empowering you to unlock your potential and build projects that matter. With us, your journey to becoming a proficient programmer is guided by expert support every step of the way.'
    },
    {
      title: 'Build the Web: Your Path to Web Development Excellence',
      description:
        'Transform your ideas into reality with our comprehensive web development courses. Our curriculum adapts to your learning pace, ensuring you master both front-end and back-end technologies. From designing stunning interfaces to developing robust applications, we equip you with the skills to succeed in the digital world.'
    },
    {
      title: 'Blockchain Revolution: Navigate the Future of Technology',
      description:
        'Step into the world of blockchain with confidence. Our courses offer a deep dive into decentralized technologies, guiding you through smart contracts, cryptocurrencies, and distributed ledgers. Learn how to harness the power of blockchain to innovate and disrupt industries.'
    },
    {
      title: 'Bootcamp Power: Intensive Learning for Rapid Skill Growth',
      description:
        'Accelerate your career with our immersive bootcamp experiences. Designed for those who thrive in fast-paced environments, our bootcamps offer hands-on projects, real-world scenarios, and expert mentorship. Achieve mastery in weeks, not years, and enter the tech industry with confidence.'
    },
    {
      title: 'AI & Machine Learning Mastery',
      description:
        'Dive into the cutting-edge world of AI and Machine Learning. Our courses provide a thorough understanding of algorithms, neural networks, and data analysis techniques. Whether you are building predictive models or exploring deep learning, we equip you with the tools to lead in AI innovation.',
    },
    {
      title: 'Interactive Learning with Real-Time Projects',
      description:
        'Engage in an immersive, hands-on learning experience where theory meets practice. Collaborate on real-time coding challenges, receive immediate feedback, and solidify your understanding of complex concepts through practical application in programming, web development, and more.',
    },
    {
      title: 'Stay Ahead with an Up-to-Date Curriculum',
      description:
        'Our courses are continuously refreshed to reflect the latest industry standards and technological advancements. Stay ahead of the curve with content that evolves alongside the tech industry, ensuring you’re learning the most relevant and in-demand skills.',
    },
    {
      title: 'Unlimited Growth Opportunities',
      description:
        'Explore our extensive library of resources and diverse course offerings that cater to every stage of your learning journey. Whether you are a beginner or an advanced learner, our platform provides endless opportunities to expand your knowledge and skills in programming, web development, blockchain, and more.',
    }
  ];
  

function WhyChooseUs(){
    return(
        <div>
            <StickyScroll content={techCoursesContent}/>
        </div>
    )
}

export default WhyChooseUs;