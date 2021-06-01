import * as React from "react";
import * as styles from "./projects.module.css";

const Project = ({ projectsArray, title, subTitle }) => {
  return (
    <>
      <section className={`${styles.wrapperPadding}`}>
        <div className={styles.appContentPersonalProjectsHeader}>
          <div className={styles.appContentPersonalProjectsTitle}>
            <span id="text" className={styles.spanWorkName}>
              {title}
            </span>
            <h2 id="text" className={styles.h2WorkName}>
              {subTitle}
            </h2>
          </div>
          <div className={styles.wrapperPersonalProjects}>
            {projectsArray.map((work) => (
              <>
                <div>
                  <div
                    key={work.name}
                    className={styles.contentPersonalProject}
                  >
                    <div id="text" className={styles.contentPersonalProjectImg}>
                      <img src={work.name} alt="" />
                      <span className={styles.backImgPersonal}></span>
                      {/* <div className={styles.contentCustomLink}>
                    <div className={styles.contentLinesCustomLink}>
                    <span className={styles.lineCustomLink}></span>
                    <span className={styles.circleCustomLink}></span>
                      <a className={styles.moreLink} href={"#"}>
                      Ver trabajo
                      </a>
                      </div>
                    </div> */}
                    </div>
                    <div className={styles.contentPersonalProjectDescription}>
                      <p id="text" className={styles.pDescriptionPersonal}>
                        {work.description}
                      </p>
                    </div>
                  </div>
                  <div className={styles.contentEachLink}>
                    <div className={styles.contentLinesCustomLink}>
                      <span className={styles.lineCustomLink}></span>
                      {/* <span className={styles.circleCustomLink}></span> */}
                      <a className={styles.moreLink} href={"#"}>
                        Ver Proyecto
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className={styles.contentMoreLink}>
            <div className={styles.contentLinesCustomLink}>
              <span className={styles.lineCustomLink}></span>
              <span className={styles.circleCustomLink}></span>
              <a className={styles.moreLink} href={"#"}>
                Mas Proyectos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
