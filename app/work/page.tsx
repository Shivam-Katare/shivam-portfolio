"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "app/lib/supabaseClient";
import ListDisplay from "app/components/listDisplay";
import { motion } from "framer-motion";

function Work() {
  type VolunteerType = {
    id: string;
    name: string;
    description: string;
    date: string;
    avatar: string;
    loading: boolean;
  };

  const [volunteerExperince, setVolunteerExperince] = useState<VolunteerType[]>([]);
  const [experience, setExperience] = useState<VolunteerType[]>([]);
  const [freelance, setFreelance] = useState<VolunteerType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVolunteer();
    fetchExperience();
    fetchFreelance();
  }, []);

  const fetchVolunteer = async () => {
    const { data, error } = await supabase
      .from("volunteerExperince")
      .select("*");

    if (error) {
      console.error("Error fetching images:", error);
    } else {
      setVolunteerExperince(data);
    }
    setIsLoading(false);
  };

  const fetchExperience = async () => {
    const { data, error } = await supabase.from("workExperience").select("*");

    if (error) {
      console.error("Error fetching images:", error);
    } else {
      setExperience(data);
    }
  };

  const fetchFreelance = async () => {
    const { data, error } = await supabase
      .from("freelanceExperience")
      .select("*");

    if (error) {
      console.error("Error fetching images:", error);
    } else {
      setFreelance(data);
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  const SkeletonLoader = () => (
    <div className="flex flex-col gap-4 w-full animate-pulse mt-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-24 w-full bg-white/5 rounded-[2rem] border border-white/5" />
      ))}
    </div>
  );

  const StyledLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2.5 py-1 -my-1 mx-1 rounded-lg bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
      {children}
    </a>
  );

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto flex w-full max-w-4xl flex-col items-stretch mt-12 md:mt-24 px-4 sm:px-6"
    >
      <motion.div variants={pageVariants} className="mb-16">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Experience & Contributions
        </h1>
        <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-3xl">
          I'm a passionate front-end developer with over <strong className="text-zinc-200 font-medium">3 years</strong> of experience building user interfaces for high-paced startups. I'm skilled in HTML, CSS, JavaScript, and frameworks like React, Next.js, and Tailwind CSS. I'm a quick learner who loves contributing to the developer community by writing blogs and sharing experiences.
        </p>
      </motion.div>

      <motion.div variants={pageVariants} className="w-full mb-16">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <motion.div variants={itemVariants}>
              <ListDisplay header={"Work Experience"} data={experience} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ListDisplay header={"Freelance"} data={freelance} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ListDisplay header={"Volunteer & Community"} data={volunteerExperince} />
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      <motion.div variants={pageVariants} className="flex flex-col gap-8 text-zinc-400 font-light leading-relaxed max-w-3xl pb-24">
        <p>
          I have previous experience working as a React JS Developer at <StyledLink href="https://www.accuknox.com/">AccuKnox</StyledLink> and as a Software Engineer Intern at YC backed high-paced startup <StyledLink href="https://www.flagright.com/">Flagright</StyledLink>. Currently, I am working at <StyledLink href="https://triallies.com/">Triallies LLC</StyledLink> as a Frontend Developer. Additionally, I am an active member of various open-source communities and organizations, where I am contributor or worked as a volunteer.
        </p>

        <p>
          I have been a part of a community named <StyledLink href="https://reactplay.io/">ReactPlay</StyledLink> since April 2022, where I contributed new web projects based on React, Tailwind, and APIs. I fixed bugs and added new features to the existing projects. I also helped other members of the community with their projects, involved in community discussions, meets, hackathons (also won one of them), and Twitter Spaces. You can also check out my contributions <a href="https://github.com/reactplay/react-play/pulls?q=is%3Apr+is%3Aclosed+author%3AShivam-Katare" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/60 transition-colors">here</a>.
        </p>

        <p>
          With this, I was also a part of <StyledLink href="https://www.thehumansoftech.com/">Humans Of Tech</StyledLink> working as a content writer. I previously worked as a Chief Creative Officer at <StyledLink href="https://www.showwcase.com/">ShowwCase</StyledLink> and, also, being a contributor at <a href="https://drive.google.com/file/d/1-2QekibE9dqt0JsiOZ997jW_YvUFfxrv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/60 transition-colors">Social Summer of Code</a>.
        </p>

        <p>
          With community contributions, I also love to write blogs and currently working as a freelance Technical Writer at <StyledLink href="https://www.studio1hq.com/">Studio1</StyledLink>. You can read my blogs <Link href="https://shivamkatareblog.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline decoration-white/20 underline-offset-4 hover:decoration-white/60 transition-colors">here</Link>.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Work;