import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import * as styles from "./index.module.css";
import phone from "../images/hero-phone.png";
import phone2 from "../images/hero-phone2.png";
import photoProfile from "../images/foto-perfil.png";
import phoneChallenge from "../images/phone-challenge.png";
import codeChallenge from "../images/content-creator.png";
import workCoin from "../images/coin.png";
import workDessert from "../images/desert.png";
import "../styles/variables.css";
import cssIcon from "../assets/css.inline.svg";
import gitIcon from "../assets/git.inline.svg";
import htmlIcon from "../assets/html.inline.svg";
import jsIcon from "../assets/js.inline.svg";
import reactIcon from "../assets/react.inline.svg";
import sassIcon from "../assets/sass.inline.svg";
import ArrowIcon from "../assets/arrow.inline.svg";
import "@fontsource/karla";
import "@fontsource/rubik";

const svgIcons = [
  { name: reactIcon },
  { name: jsIcon },
  { name: sassIcon },
  { name: cssIcon },
  { name: htmlIcon },
  { name: gitIcon },
];

const dataWork = [
  {
    name: workCoin,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: workDessert,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <>
        <section
          className={`${styles.wrapperPadding} ${styles.appContentHero}`}
        >
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
                <span className={styles.scrollBack}>
                  <ArrowIcon/>
                </span>

              </div>
              {/* <span className={styles.backgroundSectionLeft}></span> */}
            </div>
            <div className={styles.appRightContentHero}>
              <div className={styles.appRightContentHeroImg}>
                <span className={`${styles.wordsHero} ${styles.top}`}>Responsive Design</span>
                <span className={`${styles.wordsHero} ${styles.topRight}`}>Px</span>
                <span className={`${styles.wordsHero} ${styles.bottomRight}`}>Interaction</span>
                <span className={`${styles.wordsHero} ${styles.bottomLeft}`}>Web</span>
                {/* <span className={`${styles.wordsHero} ${styles.rigthMiddle}`}>Layout</span> */}
                <img
                  className={styles.heroImg}
                  src={phone2}
                  alt="teléfono con imagen"
                />
              </div>
            </div>
            <span className={styles.backgroundSectionLeft}></span>
            <span className={styles.backgroundSectionLeftTwo}></span>
          </div>
        </section>

        <section
          className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
        >
          <div className={styles.appContentAboutMeHeader}>
            <div className={styles.appContentAboutMePhoto}>
              <span className={styles.layerPhoto}></span>
              <img
                className={styles.photo}
                src={photoProfile}
                alt="Foto de perfil"
              />
            </div>
            <div className={styles.appContentAboutMeTitle}>
              <span className={styles.spanName}>Hola soy</span>
              {/* <h2 className={styles.h2Name}>Alfredo</h2> */}
              <h2 className={styles.h2Name}>Alfredo</h2>
            </div>
          </div>
          <div className={styles.appContentAboutMeDescription}>
            <div className={styles.wrapperAboutMeDescription}>
              <span className={styles.lineRightAbout}></span>
              <span className={styles.lineBottomAbout}></span>
              <span className={styles.lineLeftAbout}></span>
              <p
                className={`${styles.pDescription} ${styles.subTitleDescription}`}
              >
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

              <p
                className={`${styles.pDescription} ${styles.footerDescription}`}
              >
                Un gusto haberte mostrado una parte mí, saludos !
              </p>

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

        <section
          className={`${styles.wrapperPadding} ${styles.appContentSkills}`}
        >
          <h3 className={styles.h3Skills}>Habilidades Actuales</h3>
          <div className={styles.contentSkills}>
            <ul className={styles.contentItemSkills}>
              {svgIcons.map((icon) => (
                <li className={styles.itemSkills} key={icon.name}>
                  <icon.name />
                </li>
              ))}
              {/* <li className={styles.itemSkills}><img src={photoProfile}/></li> */}
            </ul>
          </div>
        </section>

        <section
          className={`${styles.wrapperPadding} ${styles.appContentChallenges}`}
        >
          <div className={styles.appContentChallengesHeader}>
            <div className={styles.appContentChallengesTitle}>
              <span className={styles.spanChallengeName}>Desafíos</span>
              <h2 className={styles.h2FrontendName}>Frontend</h2>
            </div>
          </div>

          <div className={styles.wrapperContentChallenge}>
            <div className={styles.wrapperContentChallenge}></div>
            <div className={styles.appLeftContentChallenge}>
              <div className={styles.challengesSubTitle}>
                <h3 className={styles.h3Challenge}>
                  Busco mejorar mis habilidades como desarrollador frontend, a
                  traves de desafíos del mundo real.
                </h3>
              </div>
              <div className={styles.challengeDescription}>
                <span>Desafío: Crear una aplicación de tareas pendientes</span>
                <span>Dificultad: Intermedio</span>
                <span>Fuente: frontendmentor.io</span>
              </div>
              <div className={styles.challengeCodeImg}>
                <div className={styles.wrapperCodeImg}>
                  <img src={codeChallenge} alt="" />
                </div>
              </div>
              <div className={styles.challengeMyExplanation}>
                <p className={styles.pMyExplanation}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum..
                </p>
              </div>
            </div>
            <div className={styles.appRightContentChallenge}>
              <div className={styles.appRightContentChallengeImg}>
                <img src={phoneChallenge} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.contentMoreLink}>
            <a className={styles.moreLink} href={"#"}>
              Mas desafíos
            </a>
          </div>
        </section>

        <section className={`${styles.wrapperPadding}`}>
          <div className={styles.appContentPersonalProjectsHeader}>
            <div className={styles.appContentPersonalProjectsTitle}>
              <span className={styles.spanWorkName}>Proyectos</span>
              <h2 className={styles.h2WorkName}>Personales</h2>
            </div>
            <div className={styles.wrapperPersonalProjects}>
              {dataWork.map((work) => (
                <div key={work.name} className={styles.contentPersonalProject}>
                  <div className={styles.contentPersonalProjectImg}>
                    <img src={work.name} alt="" />
                  </div>
                  <div className={styles.contentPersonalProjectDescription}>
                    <p>{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.wrapperPadding}`}>
          <div className="app-content-footer-form-contact"></div>
        </section>
      </>
    </Layout>
  );
};

export default IndexPage;
