import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import locomotiveScroll from "locomotive-scroll"

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import * as styles from "./index.module.css";
// import phone from "../images/hero-phone.png";
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
import githubIcon from "../assets/github.inline.svg";
import linkedinIcon from "../assets/linkedin.inline.svg";
import twitterIcon from "../assets/twitter.inline.svg";
import telegramIcon from "../assets/telegram.inline.svg";
import "@fontsource/karla";
import "@fontsource/rubik";
import "@fontsource/saira";

gsap.registerPlugin(ScrollTrigger);

const svgIcons = [
  { name: reactIcon },
  { name: jsIcon },
  { name: sassIcon },
  { name: cssIcon },
  { name: htmlIcon },
  { name: gitIcon },
];

const socialIcons = [
  { name: githubIcon, label: "Github" },
  { name: linkedinIcon, label: "Linkedin" },
  { name: twitterIcon, label: "Twitter" },
  { name: telegramIcon, label: "Telegram" },
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

function smoothScroll(content, viewport, smoothness) {
  content = gsap.utils.toArray(content)[0];
  smoothness = smoothness || 1;

  gsap.set(viewport || content.parentNode, {
    overflow: "hidden",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  gsap.set(content, { overflow: "visible", width: "100%" });

  let getProp = gsap.getProperty(content),
    setProp = gsap.quickSetter(content, "y", "px"),
    setScroll = ScrollTrigger.getScrollFunc(window),
    removeScroll = () => (content.style.overflow = "visible"),
    killScrub = (trigger) => {
      let scrub = trigger.getTween
        ? trigger.getTween()
        : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
      scrub && scrub.kill();
      trigger.animation.progress(trigger.progress);
    },
    height,
    isProxyScrolling;

  function onResize() {
    height = content.clientHeight;
    content.style.overflow = "visible";
    document.body.style.height = height + "px";
  }
  onResize();
  ScrollTrigger.addEventListener("refreshInit", onResize);
  ScrollTrigger.addEventListener("refresh", () => {
    removeScroll();
    requestAnimationFrame(removeScroll);
  });
  ScrollTrigger.defaults({ scroller: content });
  ScrollTrigger.prototype.update = (p) => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

  ScrollTrigger.scrollerProxy(content, {
    scrollTop(value) {
      if (arguments.length) {
        isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
        setProp(-value);
        setScroll(value);
        return;
      }
      return -getProp("y");
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  return ScrollTrigger.create({
    animation: gsap.fromTo(
      content,
      { y: 0 },
      {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update,
      }
    ),
    scroller: window,
    invalidateOnRefresh: true,
    start: 0,
    end: () => height - document.documentElement.clientHeight,
    scrub: smoothness,
    onUpdate: (self) => {
      if (isProxyScrolling) {
        killScrub(self);
        isProxyScrolling = false;
      }
    },
    onRefresh: killScrub, // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
  });
}

const IndexPage = () => {
  const animate = React.useRef(null);
  const word = React.useRef(null);
  const spanHola = React.useRef(null);
  const h2Name = React.useRef(null);
  const circleChallenge = React.useRef(null);

  React.useEffect(() => {
    console.log(animate);
    smoothScroll("#container");
    // const scroll = new LocomotiveScroll();
    // console.log(scroll)
    // gsap.to(animate.current, {
    //   scrollTrigger: animate.current,
    //   x: 100

    // });
    gsap.to(
      animate.current,
      { yPercent: 200, ease: "bounce.out", duration: 1 },
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animate.current,
        // pin: true,
        start: "center 80%",
        end: "top -=300",
        scrub: true,
        // markers: true,
      },
    });
    const tlw = gsap.timeline({
      scrollTrigger: {
        trigger: "#text",
        start: "center 90%",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });
    const tlHola = gsap.timeline({
      scrollTrigger: {
        trigger: spanHola.current,
        // pin: true,
        start: "center 90%",
        end: "top -=300",
        scrub: true,
        markers: true,
      },
    });
    const tlCircleChallenge = gsap.timeline({
      scrollTrigger: {
        trigger: circleChallenge.current,
        // pin: true,
        start: "center 50%",
        end: "top -=300",
        scrub: true,
        markers: true,
      },
    });
    tl.to(animate.current, {
      xPercent: 800,
      yPercent: 800,
      scale: 3,
      opacity: 0.8,
      duration: 1,
    });
    tlHola.to(spanHola.current, {
      // color: "#7C4DFF",
    });
    // tl.to(animate.current, {
    //   xPercent: 800,
    //   yPercent: 1000,
    //   scale: 3,
    //   duration: 1,
    // });
    tlw.to(word.current, {
      // xPercent: 800,
      yPercent: -50,
      // opacity: 0,
      duration: 1,
    });
    gsap.utils.toArray("#text").forEach((item) => {
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "center 98%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
      });
      tlText.from(item, {
        // xPercent: 800,
        opacity: 0,
        yPercent: 100,
      });
    });
    tlCircleChallenge.to(circleChallenge.current, {
      xPercent: -150,
      yPercent: 150,
      scale: 0.4,
      opacity: 0.3,
      duration: 1,
    });
  }, []);

  return (
    <Layout pageTitle={"Home Page"}>
      <>
        <section
          className={`${styles.wrapperPadding} ${styles.appContentHero}`}
          id={"wrapper-padding"}
        >
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
              <div className={styles.appContentScrollArrow}>
                <span className={styles.scrollBack}>
                  <span ref={animate} className={styles.scrollBefore}></span>
                  <ArrowIcon />
                </span>
              </div>
              {/* <span className={styles.backgroundSectionLeft}></span> */}
            </div>
            <div className={styles.appRightContentHero}>
              <div className={styles.appRightContentHeroImg}>
                <span className={`${styles.wordsHero} ${styles.top}`}>
                  Responsive Design
                </span>
                <span className={`${styles.wordsHero} ${styles.topRight}`}>
                  Px
                </span>
                <span className={`${styles.wordsHero} ${styles.rightMiddle}`}>
                  Layout
                </span>
                <span className={`${styles.wordsHero} ${styles.bottomRight}`}>
                  Interaction
                </span>
                <span
                  ref={word}
                  className={`${styles.wordsHero} ${styles.bottomLeft}`}
                >
                  Web
                </span>
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
            <span className={styles.layerPhoto}></span>
            <div className={styles.appContentAboutMePhoto}>
              <img
                className={styles.photo}
                src={photoProfile}
                alt="Foto de perfil"
              />
            </div>
            <div className={styles.appContentAboutMeTitle}>
              <span
                id="text"
                ref={spanHola}
                className={`${styles.text} ${styles.spanName}`}
              >
                Hola
              </span>
              {/* <h2 className={styles.h2Name}>Alfredo</h2> */}
              <h2
                id="text"
                ref={h2Name}
                className={`${styles.text} ${styles.h2Name}`}
              >
                soy Alfredo
              </h2>
            </div>
          </div>
          <div className={styles.appContentAboutMeDescription}>
            <div className={styles.wrapperAboutMeDescription}>
              <span className={styles.lineRightAbout}></span>
              <span className={styles.lineBottomAbout}></span>
              <span className={styles.lineLeftAbout}></span>
              <p
                className={`${styles.text} ${styles.pDescription} ${styles.subTitleDescription}`}
                id="text"
              >
                Vivo en la caótica y bella ciudad de Caracas-Venezuela, donde
                estoy labrando mi futuro como desarrollador frontend.
              </p>
              <p id="text" className={`${styles.text} ${styles.pDescription}`}>
                Como desarrollador de software, es emocionante pensar que
                podemos crear proyectos importantes para el beneficio de otras
                personas, una aplicación, un sitio web, esos proyectos que
                tendrán un impacto positivo en la vida de alguien.
              </p>
              <p id="text" className={`${styles.text} ${styles.pDescription}`}>
                Poder ser parte de esa experiencia me motiva y mantiene en
                constante aprendizaje para seguir mejorando mis habilidades
                técnicas, estoy dispuesto a seguir aprendiendo nuevas
                tecnologías y así poder adaptarme a un equipo de trabajo,
                trabajar juntos y hacer posible ese proximo gran proyecto.
              </p>

              <h3
                id="text"
                className={`${styles.text} ${styles.h3Description}`}
              >
                Un poco mas de mi
              </h3>
              <p id="text" className={`${styles.text} ${styles.pDescription}`}>
                Como seres humanos necesitamos conectar con nuestras emociones,
                nuestro entorno, disfruto de la naturaleza, amo la playa (tengo
                tiempo que no voy), me gustan las mascotas, sobre todo los
                perros, un sueño que quiero realizar es poder ayudar a tantos
                perros abandonados como sea posible, tener una casa con un
                terreno inmenso que sirva de refugio para estos amigos perrunos.
              </p>
              <p id="text" className={`${styles.text} ${styles.pDescription}`}>
                Cuando estoy estresado, la música despeja mi mente, en mis
                tiempos libres me gusta pasar el rato jugando algún videojuego o
                modelando algo 3d, es algo que encuentro muy interesante, lo
                hago como hobby...
              </p>

              <p
                className={`${styles.text} ${styles.pDescription} ${styles.footerDescription}`}
                id="text"
              >
                Un gusto haberte mostrado una parte mí, saludos !
              </p>

              {/* <div className={styles.contentButtonAbout}>
                <form>
                  <button className={styles.contactButton}>Contáctame</button>
                </form>
              </div> */}
              <div className={styles.contentButton}>
                <form className={styles.contentButtonForm}>
                  <button className={styles.contactButton}>Contáctame</button>
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
          <span ref={circleChallenge} className={styles.circleChallenge}></span>
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
                <div className={styles.contentLineChallenges}>
                  <span
                    className={`${styles.lineChallenge} ${styles.horizontal}`}
                  ></span>
                  <span
                    className={`${styles.lineChallenge} ${styles.vertical}`}
                  ></span>
                </div>
                <img className={styles.imgPhone} src={phoneChallenge} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.contentMoreLink}>
            <div className={styles.contentLinesCustomLink}>
              <span className={styles.lineCustomLink}></span>
              <span className={styles.circleCustomLink}></span>
              <a className={styles.moreLink} href={"#"}>
                Mas desafíos
              </a>
            </div>
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
                    <span className={styles.backImgPersonal}></span>
                  </div>
                  <div className={styles.contentPersonalProjectDescription}>
                    {/* <p className>{styles.pDescriptionPersonal}</p> */}
                    <p className={styles.pDescriptionPersonal}>
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.contentMoreLink}>
              <div className={styles.contentLinesCustomLink}>
                <span className={styles.lineCustomLink}></span>
                <span className={styles.circleCustomLink}></span>
                <a className={styles.moreLink} href={"#"}>
                  Mas trabajos
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.wrapperPadding}`}>
          <div className={styles.appContentFooterFormContact}>
            <div className={styles.wrapperForm}>
              <div className={styles.headerContact}>
                <h4>Trabajemos juntos</h4>
              </div>
              <form className={styles.formContact}>
                <span>Nombre</span>
                <input placeholder={"Eg. Jhon Doe"}></input>
                <span>Correo</span>
                <input placeholder={"Eg. correo@JhonDoe"}></input>
                <span>Mensaje</span>
                <input placeholder={"Nos gustaría..."}></input>
              </form>
              <div className={styles.contentButton}>
                <form className={styles.contentButtonForm}>
                  <button className={styles.contactButton}>Enviar</button>
                </form>
              </div>
              <div className={styles.contentSocial}>
                {socialIcons.map((icon) => (
                  <div key={icon.label} className={styles.socialItem}>
                    <icon.name />
                    <span className={styles.labelSocial}>{icon.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default IndexPage;
