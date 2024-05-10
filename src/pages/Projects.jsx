import { useEffect, useState } from 'react';
import { RiGithubFill } from "react-icons/ri";
import axios from 'axios';

/**
 * projects 는 새로운 신규 프로젝트 예) projects : [프로젝트 1], [프로젝트 2], [프로젝트3]
 * priject 는 신규프로젝트 안에서 작은 내부 프로젝트 (없으면 빈값) 
 * 즉 projects 는 게시판 프로젝트 project는 서블릿프로젝트, 스프링프로젝트 이런식으로...
 */

const jsonData = {
  "projects": [
    {
      "title": "",
      "links": "",
      "gitlinks": "",
      "category": "",
      "explanation": "",
      "period": "",
      "technology": [],
      "database": "",
      "project": [
        {
          "version": "",
          "technology": [],
          "frontend": "",
          "history": [],
          "events": [
            {
              "title": "",
              "details": []
            }
          ]
        }
      ]
    }
  ]
};

const Projects = () => {
  const [posts, setPosts] = useState(jsonData);

  const getPosts = async () => {
    try {
      const rs = await axios.get("./data/project.json");
      setPosts(rs.data);
    } catch (error) {
      console.error("에러가 발생했습니다.");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section id="projects">
      <h1>projects</h1>
      <p>팀프로젝트로 또는 혼자 공부를 위해서 작업했던 프로젝트들 입니다.</p>

      

      {posts.projects.map((pr, index) => (

            <div key={index} className="project">
               <a href={pr.links} rel='noopener noreferrer' target='_blank'><h2>{pr.title}</h2></a>
               <a href={pr.gitlinks} rel='noopener noreferrer' target='_blank' className='gitlinks'><RiGithubFill /></a>
               <ol>
                  <li><label>구상</label>{pr.explanation}</li>
                  <li><label>카테고리</label>{pr.category}</li>
                  <li><label>작업기간</label>{pr.period}</li>
                  <li><label>구현언어들</label>
                     {pr.technology.map((tec, index) => (
                        <span key={index}>{tec}</span>
                     ))}
                  </li>
                  <li><label>사용DB</label>{pr.database}</li>
               </ol>


              {pr.project.map((prj, index)=>(
                  <div className="firstpr" key={index}>
                  <h3>{prj.title}</h3>
                  <ol>
                     <li><label>언어 버전</label>{prj.version}</li>
                     <li><label>사용 라이브러리</label>
                        <ul>
                        {prj.technology.map((tech2, index) => (
                           <li key={index}>{tech2}</li>
                        ))}
                        </ul>
                     </li>
                     <li><label>front-end</label>{prj.frontend}</li>
                     <li>
                        <label>history</label>
                        <ol>
                        {prj.history.map((his, index) => (
                           <li key={index}>{his}</li>
                        ))}
                        </ol>
                     </li>
                     <li>
                        <label>이슈</label>
                        <ol>
                        {prj.events.map((ev, index) => (
                           <li key={index}>
                              <strong>{ev.title}</strong>
                              <ul>
                              {ev.details.map((detail, idx) => (
                                 <li key={idx}>{detail}</li>
                              ))}
                              </ul>
                           </li>
                        ))}
                        </ol>
                     </li>
                  </ol>
                  </div>
              ))}
               
            </div>

      ))}
     
    </section>
  );
};

export default Projects;