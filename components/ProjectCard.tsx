import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import githubSvg from "../media/github.svg";
import { Tech } from "../types/types";

interface Props {
  title: string;
  image: any;
  description: string;
  ghUrl: string;
  liveUrl: string;
  stack: Tech[];
}

const ProjectCard = ({
  title,
  image,
  description,
  ghUrl,
  liveUrl,
  stack,
}: Props): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <div className={styles.clipImg}>
            <Image src={image} alt="imageFile" width={3000} height={700} />
          </div>
        </a>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardText}>
          <h2>{title}</h2>
          <div>{description}</div>
          <a href={ghUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src={githubSvg}
              alt={`Github url for ${title}`}
              width={25}
              height={25}
            />
          </a>
        </div>
        <div className={styles.cardGrid}>
          {stack.map((img, idx) => (
            <div key={idx}>
              <Image src={img} alt="imageFile" width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
