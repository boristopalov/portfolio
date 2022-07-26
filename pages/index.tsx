import type { NextPage } from "next";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import meJpg from "../media/me.jpg";
import linkedInSvg from "../media/linkedin.svg";
import githubSvg from "../media/github.svg";
import emailIcon from "../media/email.svg";
import wordlePng from "../media/wordle-images.png";
import spotifyPng from "../media/spotify-images.png";
import redditPng from "../media/reddit-images.png";
import cleyePng from "../media/cleye-images.png";
import { Tech } from "../types/types";
import reactIcon from "../media/react.svg";
import express from "../media/express.svg";
import graphql from "../media/graphql.svg";
import node from "../media/node.svg";
import next from "../media/next.svg";
import postgres from "../media/postgres.svg";
import typescript from "../media/typescript.svg";
import ws from "../media/ws.svg";
import cssIcon from "../media/css.svg";
import pythonIcon from "../media/python.svg";
import cIcon from "../media/c.svg";
import solidityIcon from "../media/solidity.svg";
import figmaIcon from "../media/figma.svg";
import liveArrow from "../media/arrow_with_text.png";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [aboutSectionDisplayed, setAboutSectionDisplayed] = useState("skills");
  const [workSectionActive, setWorkSectionActive] = useState("c1Intern");

  const handleAboutSectionChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = e.target as HTMLButtonElement;
    const id = element.id;
    if (id === "skillsButton") {
      setAboutSectionDisplayed("skills");
    }
    if (id === "eduButton") {
      setAboutSectionDisplayed("education");
    }
    if (id === "interestsButton") {
      setAboutSectionDisplayed("interests");
    }
  };

  const handleWorkSectionChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = e.target as HTMLButtonElement;
    const id = element.id;
    if (id === "c1InternButton") {
      setWorkSectionActive("c1Intern");
    }
    if (id === "commButton") {
      setWorkSectionActive("comm");
    }
    if (id === "uvaButton") {
      setWorkSectionActive("uva");
    }
  };

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.imageWrapper}>
            <Image
              src={meJpg}
              alt="me"
              width={100}
              height={100}
              className={styles.image}
            />
          </div>
          <h3>boris topalov</h3>
          <span>analyst &#38; developer</span>
          <br />
          <span>new york, ny </span>
          <span>boristopalov1@gmail.com</span>
          <div className={styles.topMargin}>
            <a
              href="https://github.com/boristopalov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubSvg} alt="Github" width={25} height={25} />
            </a>
            <a
              href="https://linkedin.com/in/boristopalov"
              className={styles.leftPad}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedInSvg} alt="LinkedIn" width={25} height={25} />
            </a>
            <a href="mailto:boristopalov1@gmail.com" className={styles.leftPad}>
              <Image src={emailIcon} alt="Email me" width={25} height={25} />
            </a>
          </div>
          {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className={styles.resumeButton}>Resume</button>
          </a> */}
        </div>
        <div className={styles.meBlock}>
          <div className={styles.meText}>
            <h1> about me </h1>
            <p>
              I am currently a Business Analyst at Capital One in NYC, where I
              work mostly with Python and SQL. I recently graduated from the
              University of Virginia, where I studied Information Technology at
              the McIntire School of Commerce. I minored in Computer Science and
              discovered a genuine enjoyment in coding in the second half of my
              studies. I took as many Computer Science classes as my schedule
              allowed, and I am continuing to learn however I can through
              reading and doing. My goal is to find work either as a software
              engineer or as a product manager.
            </p>
          </div>
          <div className={styles.aboutSection}>
            <button
              className={
                aboutSectionDisplayed === "skills"
                  ? styles.aboutItemActive
                  : styles.aboutItem
              }
              onClick={handleAboutSectionChange}
              id="skillsButton"
            >
              skills
            </button>
            <button
              className={
                aboutSectionDisplayed === "education"
                  ? styles.aboutItemActive
                  : styles.aboutItem
              }
              id="eduButton"
              onClick={handleAboutSectionChange}
            >
              education
            </button>
            <button
              className={
                aboutSectionDisplayed === "interests"
                  ? styles.aboutItemActive
                  : styles.aboutItem
              }
              id="interestsButton"
              onClick={handleAboutSectionChange}
            >
              interests
            </button>
          </div>

          <div>
            {aboutSectionDisplayed === "education" && (
              <div id="education" className={styles.eduSection}>
                <h4>University of Virginia (2018-2022)</h4>
                <div>
                  <i>BS in Commerce</i>
                </div>
                <p>
                  I graduated with a BS in Commerce from UVA&#39;s business
                  school. There, I learned how to apply business to technology
                  through classes like Venture Capital and Project Management.
                  In addition to my business coursework, I also took many
                  Computer Science classes. A few relevant ones: Program &#38;
                  Data Representation, Algorithms, Machine Learning, Programming
                  Languages for Web Development, Cryptocurrency, Privacy in the
                  Internet Age.
                </p>
              </div>
            )}
            {aboutSectionDisplayed === "skills" && (
              <div id="skills" className={styles.skillsSection}>
                <div>
                  <h5>Frontend</h5>
                  <ul className={styles.flexList}>
                    <li>
                      <Image src={reactIcon} alt="me" width={25} height={25} />
                      React
                    </li>
                    <li>
                      <Image src={next} alt="me" width={25} height={25} />
                      Next.js
                    </li>
                    <li>
                      <Image src={typescript} alt="me" width={25} height={25} />
                      Typescript
                    </li>
                    <li>
                      <Image src={cssIcon} alt="me" width={25} height={25} />
                      CSS
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>Backend</h5>
                  <ul className={styles.flexList}>
                    <li>
                      <Image src={node} alt="me" width={25} height={25} />
                      Node
                    </li>
                    <li>
                      <Image src={express} alt="me" width={25} height={25} />
                      Express
                    </li>
                    <li>
                      <Image src={postgres} alt="me" width={25} height={25} />
                      PostgreSQL
                    </li>
                    <li>
                      <Image src={graphql} alt="me" width={25} height={25} />
                      GraphQL
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>Other</h5>
                  <ul className={styles.flexList}>
                    <li>
                      <Image
                        src={pythonIcon}
                        alt="me"
                        width={25}
                        height={25}
                        objectFit="contain"
                      />
                      Python
                    </li>
                    <li>
                      <Image
                        src={solidityIcon}
                        alt="me"
                        width={25}
                        height={25}
                      />
                      Solidity
                    </li>
                    <li>
                      <Image src={cIcon} alt="me" width={25} height={25} />C
                    </li>
                    <li>
                      <Image src={figmaIcon} alt="me" width={25} height={25} />
                      Figma
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {aboutSectionDisplayed === "interests" && (
              <div id="interests">
                <ul className={styles.noPadList}>
                  <li>
                    <div>Crypto</div>
                  </li>
                  <li>
                    <div> Basketball</div>
                  </li>
                  <li>
                    <div>Music (trombone, DJing, and someday guitar)</div>
                  </li>
                  <li>
                    <div>Veganism</div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <h1> projects </h1>
          <div className={styles.projectsGrid}>
            <ProjectCard
              title="wordle versus"
              description="Play Wordle against your friends. Written in Typescript and features real-time communication using websockets, custom user authentication &#38; authorization, custom room creation, game persistence across sessions, and more."
              ghUrl="https://github.com/boristopalov/next-wordle"
              liveUrl="https://github.com/boristopalov/next-wordle"
              stack={[next, typescript, ws, node, postgres, graphql]}
              image={wordlePng}
            />
            <ProjectCard
              title="reddit clone"
              description="A Reddit clone written in Typescript. Features include user authentication &#38; authorization, post creation in subreddits, upvoting/downvoting, and commenting."
              ghUrl="https://github.com/boristopalov/weddit"
              liveUrl="https://github.com/boristopalov/weddit"
              stack={[next, typescript, graphql, node, postgres]}
              image={redditPng}
            />
            <ProjectCard
              title="cleye"
              description="A C program that filters images and can output them directly in the terminal as pixels. The program implements Gaussian blur and Prewitt edge detection and supports both RGB and grayscale images."
              ghUrl="https://github.com/boristopalov/cleye"
              liveUrl="https://github.com/boristopalov/cleye"
              stack={[cIcon]}
              image={cleyePng}
            />
            <ProjectCard
              title="spotify habits"
              description="A web app written in JavaScript that uses the Spotify API to show a user's listening habits. Users can view their top songs and artists, as well as the moods of their recent music."
              ghUrl="https://github.com/boristopalov/spotifyhabits"
              liveUrl="https://spotifyhabits.herokuapp.com/"
              stack={[reactIcon, node, express]}
              image={spotifyPng}
            />
          </div>
          <h1> work experience </h1>
          <div className={styles.workSection}>
            <div className={styles.workButtons}>
              <button
                id="c1InternButton"
                onClick={handleWorkSectionChange}
                className={
                  workSectionActive === "c1Intern"
                    ? styles.workButtonActive
                    : styles.workButton
                }
              >
                Capital One
              </button>
              <button
                id="commButton"
                onClick={handleWorkSectionChange}
                className={
                  workSectionActive === "comm"
                    ? styles.workButtonActive
                    : styles.workButton
                }
              >
                Comm
              </button>
              <button
                id="uvaButton"
                onClick={handleWorkSectionChange}
                className={
                  workSectionActive === "uva"
                    ? styles.workButtonActive
                    : styles.workButton
                }
              >
                University of Virginia
              </button>
            </div>
            {workSectionActive === "comm" && (
              <div id="comm">
                <div className={styles.fontLarge}>Engineering Intern</div>
                <i className={styles.fontSmall}>September 2021 - July 2022</i>
                <ul>
                  <li>
                    Created an open-source GitHub crawler &#38; scraper written
                    using Node.js and MongoDB. It scrapes users, organizations,
                    and repositories in order to rank job candidates. This tool
                    significantly increased the number of leads for new hires.
                  </li>
                  <li>
                    Focused on writing performant JavaScript code by including
                    features such as a custom task queuing system and parallel
                    function execution.
                  </li>
                  <li>
                    Conducted research on the crypto market to understand
                    potential customers and competitors to Comm, which is a
                    web3-focused alternative to Discord.
                  </li>
                </ul>
              </div>
            )}
            {workSectionActive === "c1Intern" && (
              <div id="c1Intern">
                <div className={styles.fontLarge}>
                  Product Management &#38; Analytics Intern
                </div>
                <i className={styles.fontSmall}>June 2021 - August 2021</i>
                <ul>
                  <li>
                    Identified opportunities for improvement in Capital
                    One&#39;s credit algorithms by analyzing 80m+ data points
                    using Python and SQL
                  </li>
                  <li>
                    Developed a high-level machine learning model using
                    scikit-learn to predict customer behavior and reduce policy
                    risk
                  </li>
                  <li>
                    Presented my recommendations to senior management and
                    learned valuable storytelling skills along the way
                  </li>
                </ul>
              </div>
            )}
            {workSectionActive === "uva" && (
              <div id="uva">
                <div className={styles.fontLarge}>Research Assistant</div>
                <i className={styles.fontSmall}>December 2020 - January 2021</i>
                <ul>
                  <li>
                    Built a web scraper using Python and Selenium to collect
                    metadata from Instagram posts
                  </li>
                  <li>
                    Analyzed 3500+ Twitter posts to extrapolate population
                    percentage of pro-mask and anti-mask individuals
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
