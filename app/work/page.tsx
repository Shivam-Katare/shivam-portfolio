"use client";

import React, { useEffect, useState } from "react";
import { FloatButton, Skeleton, Tag } from "antd";
import Link from "next/link";
import supabase from "app/lib/supabaseClient";
import { Container } from "app/components/container";
import ListDisplay from "app/components/listDisplay";

function Work() {
  type VolunteerType = {
    id: string;
    name: string;
    description: string;
    date: string;
    avatar: string;
    loading: boolean;
  };

  const [volunteerExperince, setVolunteerExperince] = useState<VolunteerType[]>(
    []
  );
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
  return (
    <Container className="mx-auto flex max-w-5xl flex-col items-stretch py-10">
      <h1 className="text-4xl font-bolder mb-8">Work</h1>

      <div className="w-full grid grid-rows-[0.6fr_0.7fr] mb-4 gap-y-0">
        {isLoading ? (
          <Skeleton active className="mt-2" />
        ) : (
          <>
            <ListDisplay header={"Work Experience"} data={experience} />
            <ListDisplay
              header={"Voulenteer/Community Experince"}
              data={volunteerExperince}
            />
            <ListDisplay header={"Freelancer"} data={freelance} />
          </>
        )}
      </div>

      <p className="mb-8">
        I&apos;m a passionate front-end developer with over{" "}
        <strong>3 years</strong> of experience building user interfaces for
        high-paced startups. I&apos;m skilled in HTML, CSS, JavaScript, and
        frameworks like React, Next.js, and Tailwind CSS. I&apos;m a quick
        learner who loves contributing to the developer community by writing
        blogs and sharing experiences. In my free time, I enjoy tackling
        personal projects and participating in open-source events.
      </p>

      <p className="mb-8">
        I have previous experience working as a React JS Developer at{" "}
        <a href="https://www.accuknox.com/" target="_blank">
          <Tag className="mr-2" color="#9194ff">
            AccuKnox
          </Tag>
        </a>{" "}
        and as a Software Engineer Intern at YC backed high-paced startup{" "}
        <a href="https://www.flagright.com/" target="_blank">
          <Tag className="mr-2" color="#1165ff">
            Flagright
          </Tag>
        </a>
        . Currently, I am working at{" "}
        <a href="https://triallies.com/" target="_blank">
          <Tag className="mr-2" color="volcano">
            Triallies LLC
          </Tag>
        </a>{" "}
        as a Frontend Developer. Additionally, I am an active member of various
        open-source communities and organizations, where I am contributor or
        worked as a voulenteer.
      </p>

      <p className="mb-8">
        I have been a part of a community named{" "}
        <a href="https://reactplay.io/" target="_blank">
          <Tag className="mr-2 font-bold" color="#61dafb">
            ReactPlay
          </Tag>
        </a>{" "}
        since April 2022, where I contributed new web projects based on React,
        Tailwind, and APIs. I fixed bugs and added new features to the existing
        projects. I also helped other members of the community with their
        projects, involved in community discussions, meets, hackathons(Also won
        one of them😉), and Twitter Spaces. You can also check out my
        contributions{" "}
        <a
          href="https://github.com/reactplay/react-play/pulls?q=is%3Apr+is%3Aclosed+author%3AShivam-Katare"
          target="_blank"
          className="text-blue-700 font-extrabold"
        >
          {" "}
          here.{" "}
        </a>
      </p>

      <p className="mb-8">
        With this, I am also currently a part of{" "}
        <a href="https://www.thehumansoftech.com/" target="_blank">
          <Tag className="mr-2" color="black">
            Humans Of Tech
          </Tag>
        </a>
        working as a content writer. I previously worked as a Chief Creative
        Officer at{" "}
        <a href="https://www.showwcase.com/" target="_blank">
          <Tag className="mr-2" color="black">
            ShowwCase
          </Tag>
        </a>{" "}
        and, also, being a contributor at{" "}
        <a
          href="https://drive.google.com/file/d/1-2QekibE9dqt0JsiOZ997jW_YvUFfxrv/view?usp=sharing"
          target="_blank"
        >
          Social Summer of Code.
        </a>
      </p>
      <p>
        With community contributions, I also love to write blogs and currently
        working as a freelance Technical Writer at{" "}
        <a href="https://www.studio1hq.com/" target="_blank">
          <Tag className="mr-2" color="orange">
            Studio1
          </Tag>
        </a>
        . You can read my blogs{" "}
        <Link
          href="https://shivamkatareblog.vercel.app/"
          target="_blank"
          className="text-green-500 font-extrabold"
        >
          {" "}
          here.{" "}
        </Link>
      </p>

      <FloatButton.BackTop />
    </Container>
  );
}

export default Work;
