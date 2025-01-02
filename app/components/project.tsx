import { Skeleton } from 'antd';
import supabase from 'app/lib/supabaseClient';
import React, { useEffect } from 'react'
import { FaArrowUpRightFromSquare, FaEye, FaGithub } from "react-icons/fa6";
type Project = {
  id: number;
  name: string;
  description: string;
  url: string;
  image: string;
  link: string;
  title: string;
  gradientBg: string;
  githubUrl: string;
  projectUrl: string;
};

function Project() {
  const [project, setProject] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    const titles = ['PhraseBox', 'Echoes', 'DROOG', 'Re-Card', 'Worde'];
    const { data, error } = await supabase
      .from('Projects')
      .select('*')
      .in('title', titles);

    if (error) {
      console.error('Error fetching project:', error);
    } else {
      const sortedData = titles.map(title => data.find(project => project.title === title));
      setProject(sortedData);
    }
    setLoading(false);
  }

  return (
    <section className="projects section min-h-[30rem] max-h-[30rem] overflow-y-scroll scrollbar" id="style-4">
      {
        loading ? (
          <Skeleton active />
        ) : 
        <div className="w-full p-[18px] grid justify-items-center grid-cols-1 sm:grid-cols-2">
        {project.map((project) => (
          <article key={project.id} className="projects__card">
            <div className="projects__image">
              <div className='projects__img min-h-[10.4rem] max-h-[10.4rem] grid justify-items-center items-center' style={{ backgroundImage: project.gradientBg ? project.gradientBg : "linear-gradient( 184.1deg,  rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2% );" }}>
                <p className='text-white righteous-regular text-[30px]'>{project.title}</p>
              </div>

              <a href={project.projectUrl} className="projects__button button" target='_blank'>
                <FaArrowUpRightFromSquare />
              </a>
            </div>

            <div className="projects__content">
              <p className="projects__description">
                {project.description}
              </p>
            </div>

            <div className="projects__buttons">
              <a href={project.githubUrl} target="_blank" className="projects__link">
                <FaGithub /> Source Code
              </a>

              <a href={project.projectUrl} target="_blank" className="projects__link">
                <FaEye /> View
              </a>
            </div>
          </article>
        ))}

      </div>
      }
    </section>
  )
}

export default Project