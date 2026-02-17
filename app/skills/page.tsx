import React from 'react'
import { Container } from '../components/container'
import { Button, Tooltip } from 'antd';
import Link from 'next/link';

const SiJavascript = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiJavascript })));
const SiTypescript = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiTypescript })));
const SiRedux = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiRedux })));
const SiNextdotjs = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiNextdotjs })));
const SiMaterialdesign = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiMaterialdesign })));
const SiNodedotjs = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiNodedotjs })));
const SiExpress = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiExpress })));
const SiTailwindcss = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiTailwindcss })));
const SiFirebase = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiFirebase })));
const SiMongodb = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiMongodb })));
const SiMysql = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiMysql })));
const SiStorybook = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiStorybook })));
const SiCypress = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiCypress })));
const SiJest = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiJest })));
const SiDocker = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiDocker })));
const SiGithub = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiGithub })));
const SiSupabase = React.lazy(() => import("react-icons/si").then(module => ({ default: module.SiSupabase })));

// Lazy import for Font Awesome icons
const FaJava = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaJava })));
const FaHtml5 = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaHtml5 })));
const FaCss3Alt = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaCss3Alt })));
const FaReact = React.lazy(() => import("react-icons/fa").then(module => ({ default: module.FaReact })));

// Lazy import for RiBearSmileFill icon
const RiBearSmileFill = React.lazy(() => import("react-icons/ri").then(module => ({ default: module.RiBearSmileFill })));
function Skills() {
  return (
    <Container className="mx-auto flex max-w-3xl flex-col items-stretch gap-10">
      <h1 className="text-4xl font-bold">Skills</h1>
      <p>
        I enjoy working with various technologies, but JavaScript and
        Typescript-based frameworks and libraries are my favorites. They offer
        versatility and flexibility, and I&apos;m always discovering new ways to
        use them. Whether I&apos;m building web applications or experimenting
        with new programming techniques, they&apos;re my go-to tools.
      </p>

      <div>
        <div className="w-full grid justify-items-start gap-y-8">
          <h2>Languages</h2>

          <div className="w-full flex justify-items-start col-auto gap-2 text-[40px]">
            <Tooltip title="Javascript" placement="top">
              <SiJavascript color="yellow" />
            </Tooltip>
            <Tooltip title="Typescript" placement="top">
              <SiTypescript color="#0076c6" />
            </Tooltip>
            <Tooltip title="Java" placement="top">
              <FaJava color="red" />
            </Tooltip>
            <Tooltip title="HTML" placement="top">
              <FaHtml5 color="orange" />
            </Tooltip>
            <Tooltip title="CSS" placement="top">
              <FaCss3Alt color="blue" />
            </Tooltip>
          </div>

          <h2>Libraies/Framework</h2>

          <div className="w-full flex justify-items-start col-auto gap-2 text-[40px]">
            <Tooltip title="React" placement="top">
              <FaReact color="#00d1f7" />
            </Tooltip>

            <Tooltip title="Next.js" placement="top">
              <SiNextdotjs color="black" />
            </Tooltip>

            <Tooltip title="Material UI" placement="top">
              <SiMaterialdesign color="skyblue" />
            </Tooltip>

            <Tooltip title="Node.js" placement="top">
              <SiNodedotjs color="green" />
            </Tooltip>

            <Tooltip title="Express.js" placement="top">
              <SiExpress color="red" />
            </Tooltip>

            <Tooltip title="Tailwind CSS" placement="top">
              <SiTailwindcss color="#00d1f7" />
            </Tooltip>

            <Tooltip title="Zustand" placement="top">
              <RiBearSmileFill color="#e6af3c" />
            </Tooltip>

            <Tooltip title="Redux" placement="top">
              <SiRedux color="purple" />
            </Tooltip>
          </div>

          <h2>Database</h2>

          <div className="w-full flex justify-items-start col-auto gap-2 text-[40px]">
            <Tooltip title="Firebase" placement="top">
              <SiFirebase color="#f79b00" />
            </Tooltip>
            <Tooltip title="MongoDB" placement="top">
              <SiMongodb color="green" />
            </Tooltip>
            <Tooltip title="My SQL" placement="top">
              <SiMysql color="blue" />
            </Tooltip>
            <Tooltip title="Supabase" placement="top">
              <SiSupabase color="#31ad75" />
            </Tooltip>
          </div>

          <h2>Testing</h2>

          <div className="w-full flex justify-items-start col-auto gap-2 text-[40px]">
            <Tooltip title="Jest" placement="top">
              <SiJest color="red" />
            </Tooltip>

            <Tooltip title="StoryBook" placement="top">
              <SiStorybook color="pink" />
            </Tooltip>

            <Tooltip title="Cypress" placement="top">
              <SiCypress color="#22926a" />
            </Tooltip>
          </div>

          <h2>Tools</h2>

          <div className="w-full flex justify-items-start col-auto gap-2 text-[40px]">
            <Tooltip title="Docker" placement="top">
              <SiDocker color="#008db2" />
            </Tooltip>

            <Tooltip title="Github" placement="top">
              <SiGithub color="black" />
            </Tooltip>
          </div>
        </div>
      </div>

      <Link href="/work">
        <Button>
          <span>Check out my Work</span>
        </Button>
      </Link>
    </Container>
  );
}

export default Skills;
