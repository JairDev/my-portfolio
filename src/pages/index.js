import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import * as styles from "./index.module.css";
import phone from "../images/hero-phone.png";
import photoProfile from "../images/foto-perfil.jpg";
import "../styles/variables.css";
import iconReact from "../assets/react.svg"
import js from "../assets/js.svg"
import sass from "../assets/sass.svg"
import css from "../assets/css.svg"
import html from "../assets/html.svg"
import "@fontsource/karla";
import "@fontsource/rubik";

const svgIcons = [
  {name: iconReact},
  {name: js},
  {name: sass},
  {name: css},
  {name: html}
]

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
                    <button className={styles.contactButtonHero}>
                      Contáctame
                    </button>
                  </form>
                </div>
              </div>
              <div className={styles.appContentScrollArrow}>
                <span className={styles.scrollBack}></span>
              </div>
              {/* <span className={styles.backgroundSectionLeft}></span> */}
            </div>
            <div className={styles.appRightContentHero}>
              <div className={styles.appRightContentHeroImg}>
                <img
                  className={styles.heroImg}
                  src={phone}
                  alt="telefono con imagen"
                />
              </div>
            </div>
            <span className={styles.backgroundSectionLeft}></span>
            <span className={styles.backgroundSectionLeftTwo}></span>
          </div>
        </section>

        <section className={styles.appContentAboutMe}>
          <div className={styles.appContentAboutMeHeader}>
            <div className={styles.appContentAboutMePhoto}>
              <img
                className={styles.photo}
                src={photoProfile}
                alt="Foto de perfil"
              />
            </div>
            <div className={styles.appContentAboutMeTitle}>
              <span className={styles.spanName}>Hola soy</span>
              <h2 className={styles.h2Name}>Alfredo</h2>
            </div>
          </div>
          <div className={styles.appContentAboutMeDescription}>
            <div className={styles.wrapperAboutMeDescription}>
              <p className={`${styles.pDescription} ${styles.subTitleDescription}`}>
                Vivo en la caótica y bella ciudad de Caracas-Venezuela, donde
                estoy labrando mi futuro como desarrollador frontend.
              </p>
              <p className={`${styles.pDescription}`}>
                Como desarrollador de software, es emocionante pensar que
                podemos crear proyectos importantes para el beneficio de otras
                personas, una aplicación, un sitio web, esos proyectos que
                tendrán un impacto positivo en la vida de alguien.
              </p>
              <p className={`${styles.pDescription}`}>
                Poder ser parte de esa experiencia me motiva y mantiene en
                constante aprendizaje para seguir mejorando mis habilidades
                técnicas, estoy dispuesto a seguir aprendiendo nuevas
                tecnologías y así poder adaptarme a un equipo de trabajo,
                trabajar juntos y hacer posible ese proximo gran proyecto.
              </p>

              <h3 className={`${styles.h3Description}`}>Un poco mas de mi</h3>
              <p className={`${styles.pDescription}`}>
                Como seres humanos necesitamos conectar con nuestras emociones,
                nuestro entorno, disfruto de la naturaleza, amo la playa (tengo
                tiempo que no voy), me gustan las mascotas, sobre todo los
                perros, un sueño que quiero realizar es poder ayudar a tantos
                perros abandonados como sea posible, tener una casa con un
                terreno inmenso que sirva de refugio para estos amigos perrunos.
              </p>
              <p className={`${styles.pDescription}`}>
                Cuando estoy estresado, la música despeja mi mente, en mis
                tiempos libres me gusta pasar el rato jugando algún videojuego o
                modelando algo 3d, es algo que encuentro muy interesante, lo
                hago como hobby...
              </p>

              <p className={`${styles.pDescription} ${styles.footerDescription}`}>Un gusto haberte mostrado una parte mí, saludos !</p>

              <div className={styles.contentButtonAbout}>
                <form>
                  <button className={styles.contactButtonAbout}>
                    Contáctame
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.appContentSkills}>
          <h3 className={styles.h3Skills}>Habilidades Actuales</h3>
          <div className={styles.contentSkills}>
            <ul className={styles.contentItemSkills}>
              {svgIcons.map(icon => <li className={styles.itemSkills} key={icon.name} ><img src={icon.name}/></li>)}
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
                <img src="" alt="" />
              </div>
              <p className="content-personal-project-description">
                Este proyecto...
              </p>
            </div>
          </div>
        </section>

        <section className="app-content-footer">
          <div className="app-content-footer-form-contact"></div>
        </section>
      </>
    </Layout>
  );
};

export default IndexPage;
