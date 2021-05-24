import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import * as styles from "./index.module.css"
import phone from "../images/hero-phone.png"

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <>
      <section className={styles.appContentHero}>
        <div className={styles.wrapperContentHero}>
          <div className={styles.appLeftContentHero}>
            <div className={styles.appLeftContentHeroRole}>
              <h1 className={styles.role}>Desarrollador Frontend</h1>
              <div className={styles.contentButton}>
                <form className={styles.contentButtonForm}>
                  <button className={styles.contactButton}>Contáctame</button>
                </form>
              </div>
            </div>
            <div className="app-content-scroll-arrow">
              <span>scroll</span>
            </div>
          </div>
          <div className={styles.appRightContentHero}>
            <div className={styles.appRightContentHeroImg}>
              <img className={styles.heroImg} src={phone} alt="telefono con imagen" />
            </div>
          </div>
        </div>
      </section>

      <section className="app-content-about-me">
        <div className="app-content-about-me-header">
          <div className="app-content-about-me-photo">
            <img src="" alt="" />
          </div>
          <div className="app-content-about-me-title">
            <span>Hola soy Alfredo</span>
          </div>
        </div>
        <div className="app-content-about-me-description">
          <p>Hola soy...</p>
          <div className="content-button">
            <form>
              <button>Contáctame</button>
            </form>
          </div>
        </div>
      </section>

      <section className="app-content-skills">
        <div className="content-skills">
          <ul className="content-item-skills">
            <li className="item-skill">
              <svg></svg>
              <span>ReactJs</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="app-content-challenges">
        <div className="app-content-challenges-header">
          <div className="app-content-challenges-title">
            <span>Desafíos Frontend</span>
          </div>
        </div>
        <div className="wrapper-content-challenge">
          <div className="app-left-content-challenge">
            <div className="challenges-sub-title">
              <p>Busco mejorar mis habilidades...</p>
            </div>
            <div className="challenge-description">
              <span>Desafió:</span>
            </div>
            <div className="challenge-code-img">
              <img src="" alt="" />
            </div>
            <div className="challenge-my-explanation">
              <p>En este desafío...</p>
            </div>
          </div>
          <div className="app-right-content-challenge">
            <div className="app-right-content-challenge-img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="content-button">
          <form>
            <button>Contáctame</button>
          </form>
        </div>
      </section>

      <section className="app-content-personal-projects">
        <div className="app-content-personal-projects-header">
          <div className="app-content-personal-projects-title">
            <span>Proyectos Personales</span>
          </div>
          <div className="content-personal-project">
            <div className="content-personal-project-img">
              <img src="" alt=""/>
            </div>
            <p className="content-personal-project-description">
              Este proyecto...
            </p>
          </div>
        </div>
      </section>

      <section className="app-content-footer">
        <div className="app-content-footer-form-contact">
          
        </div>
      </section>
      </>
    </Layout>
  );
};

export default IndexPage;
