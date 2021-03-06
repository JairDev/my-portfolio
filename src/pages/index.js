import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Helmet from "react-helmet";
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
import blurry from "../images/blurry.png";
import "@fontsource/karla";
import "@fontsource/rubik";
import "@fontsource/saira";
import Project from "../components/projects/projects";

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
  const contentHeight = content.clientHeight
  // console.log(content.clientHeight)
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
    console.log(content);
    console.log("onRezise",height);
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
  const animateBallHero = React.useRef(null);
  const word = React.useRef(null);
  const h2Name = React.useRef(null);
  const circleChallenge = React.useRef(null);
  const phoneRef = React.useRef(null);
  const codeImgRef = React.useRef(null);
  const circleLinkRef = React.useRef(null);

  React.useEffect(() => {
    // smoothScroll("#container");

    // const a = document.getElementById("container");
    // console.log(a);
    // console.log(a.clientHeight);
    // console.log(document.body.clientHeight)
    gsap.to(animateBallHero.current, {
      xPercent: 10,
      yPercent: 530,
      ease: "bounce.out",
      opacity: 0.5,
      duration: 1,
      delay: 0.5,
    });
    const tlNav = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav-show",
        // pin: true,
        start: "bottom -=100",
        end: "top -=800",
        scrub: true,
        // markers: true,
      },
    });
    const tlNavHidden = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav-hidden",
        // pin: true,
        start: "bottom -=100",
        end: "top -=800",
        scrub: true,
        // markers: true,
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animateBallHero.current,
        // pin: true,
        start: "center 30%",
        end: "top -=1300",
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
    const tlCircleChallenge = gsap.timeline({
      scrollTrigger: {
        trigger: circleChallenge.current,
        // pin: true,
        start: "center 50%",
        end: "top -=1200",
        scrub: true,
        // markers: true,
      },
    });
    const tlPhone = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        pin: true,
        start: "center 50%",
        end: "top -=550",
        scrub: true,
        // markers: true,
      },
    });
    const tlCode = gsap.timeline({
      scrollTrigger: {
        trigger: codeImgRef.current,
        // pin: true,
        start: "center 50%",
        end: "top -=550",
        scrub: true,
        // markers: true,
      },
    });
    const tlCircleLink = gsap.timeline({
      scrollTrigger: {
        trigger: circleLinkRef.current,
        // pin: true,
        start: "center 80%",
        end: "top -=200",
        scrub: true,
        // markers: true,
      },
    });
    // animations////////////////
    tlNavHidden.to("#nav-hidden", {
      // backgroundColor: "var(--body-color)",
      // boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, .2)",
      yPercent: -100,
      opacity: 1,
      duration: 1,
    });
    tlNav.to("#nav-show", {
      backgroundColor: "var(--body-color)",
      boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, .2)",
      yPercent: -100,
      // opacity: 1,
      duration: 1,
    });
    tlNav.to("#nav-show", {
      backgroundColor: "var(--body-color)",
      boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, .2)",
      yPercent: 0,
      opacity: 1,
      // duration: 1,
    });
    tlNavHidden.to("#nav-hidden", {
      // backgroundColor: "var(--body-color)",
      // boxShadow: "0px 4px 20px 8px rgba(177, 181, 202, .2)",
      yPercent: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(animateBallHero.current, {
      xPercent: 800,
      yPercent: 1200,
      scale: 1.4,
      opacity: 0.8,
      duration: 1,
    });
    tl.to(animateBallHero.current, {
      xPercent: 1200,
      yPercent: 1400,
      opacity: 0.3,
      duration: 1,
      delay: 1,
    });
    tlw.to(word.current, {
      yPercent: -50,
      duration: 1,
    });
    gsap.utils.toArray("#text").forEach((item) => {
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 98%",
          end: "center 80%",
          scrub: true,
          // markers: true,
        },
      });
      tlText.from(item, {
        // xPercent: 800,
        opacity: 0,
        yPercent: 50,
      });
    });
    tlCircleChallenge.to(circleChallenge.current, {
      xPercent: -750,
      yPercent: 600,
      scale: 1.4,
      opacity: 0.8,
      duration: 1,
    });
    tlCircleChallenge.to(circleChallenge.current, {
      xPercent: -750,
      yPercent: 850,
      // scale: 1,
      // opacity: 0.8,
      duration: 1,
      delay: 0.5,
    });
    tlCode.to(codeImgRef.current, {
      yPercent: 30,
      duration: 1,
      // delay: .5
    });
    tlCode.to(codeImgRef.current, {
      yPercent: -10,
      duration: 1,
      // delay: .5
    });
    tlCircleLink.to(circleLinkRef.current, {
      yPercent: 800,
      // duration: .5,
      // delay: .5
    });
  }, []);

  return (
    <Layout pageTitle={"Home Page"}>
      <>
        {/* <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
        </Helmet> */}
        <section
          className={`${styles.wrapperPadding} ${styles.appContentHero}`}
          id={"wrapper-padding"}
        >
          <div className={styles.wrapperContentHero}>
            <div className={styles.appLeftContentHero}>
              <div className={styles.appLeftContentHeroRole}>
                <h1 className={styles.role}>Desarrollador Frontend</h1>
                <div className={styles.contentButtonContact}>
                  <form className={styles.contentButtonForm}>
                    <button className={styles.contactButton}>Cont??ctame</button>
                  </form>
                </div>
              </div>
              <div className={styles.appContentScrollArrow}>
                <span className={styles.scrollBack}>
                  {/* <span ref={animateBallHero} className={styles.scrollBefore}></span> */}
                  <ArrowIcon />
                </span>
                <span ref={animateBallHero} className={styles.scrollBefore}></span>
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
                  alt="tel??fono con imagen"
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
              <span id="text" className={`${styles.text} ${styles.spanName}`}>
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
                Vivo en la ca??tica y bella ciudad de Caracas-Venezuela, donde
                estoy labrando mi futuro como desarrollador frontend.
              </p>
              <p id="text" className={`${styles.text} ${styles.pDescription}`}>
                Como desarrollador de software, es emocionante pensar que
                podemos crear proyectos importantes para el beneficio de otras
                personas, una aplicaci??n, un sitio web, esos proyectos que
                tendr??n un impacto positivo en la vida de alguien.
              </p>
              <p id="text" className={`${styles.text} ${styles.pDescription}`}>
                Poder ser parte de esa experiencia me motiva y mantiene en
                constante aprendizaje para seguir mejorando mis habilidades
                t??cnicas, estoy dispuesto a seguir aprendiendo nuevas
                tecnolog??as y as?? poder adaptarme a un equipo de trabajo,
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
                perros, un sue??o que quiero realizar es poder ayudar a tantos
                perros abandonados como sea posible, tener una casa con un
                terreno inmenso que sirva de refugio para estos amigos perrunos.
              </p>
              <p id="text" className={`${styles.text} ${styles.pDescription}`}>
                Cuando estoy estresado, la m??sica despeja mi mente, en mis
                tiempos libres me gusta pasar el rato jugando alg??n videojuego o
                modelando algo 3d, es algo que encuentro muy interesante, lo
                hago como hobby...
              </p>

              <p
                className={`${styles.text} ${styles.pDescription} ${styles.footerDescription}`}
                id="text"
              >
                Un gusto haberte mostrado una parte m??, saludos !
              </p>

              {/* <div className={styles.contentButtonAbout}>
                <form>
                  <button className={styles.contactButton}>Cont??ctame</button>
                </form>
              </div> */}
              <div className={styles.contentButtonContactAbout}>
                <form className={styles.contentButtonForm}>
                  <button className={styles.contactButton}>Cont??ctame</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.wrapperPadding} ${styles.appContentSkills}`}
          id="insert-canvas"
        >
          <span className={styles.containBlurry}>
            <img alt="" src={blurry} />
          </span>

          <h3 id="text" className={styles.h3Skills}>
            Habilidades Actuales
          </h3>
          <div className={styles.contentSkills}>
            <ul className={styles.contentItemSkills}>
              {svgIcons.map((icon) => (
                <li id="text" className={styles.itemSkills} key={icon.name}>
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
              <span id="text" className={styles.spanChallengeName}>
                Desaf??os
              </span>
              <h2 id="text" className={styles.h2FrontendName}>
                Frontend
              </h2>
            </div>
          </div>

          <div className={styles.wrapperContentChallenge}>
            {/* <div className={styles.wrapperContentChallenge}></div> */}
            <div className={styles.appLeftContentChallenge}>
              <div className={styles.challengesSubTitle}>
                <h3 id="text" className={styles.h3Challenge}>
                  Busco mejorar mis habilidades como desarrollador frontend, a
                  traves de desaf??os del mundo real.
                </h3>
              </div>
              <div className={styles.challengeDescription}>
                <span id="text">
                  Desaf??o: Crear una aplicaci??n de tareas pendientes
                </span>
                <span id="text">Dificultad: Intermedio</span>
                <span id="text">Fuente: frontendmentor.io</span>
              </div>
              <div className={styles.challengeCodeImg}>
                <div className={styles.wrapperCodeImg}>
                  <img ref={codeImgRef} src={codeChallenge} alt="" />
                </div>
              </div>
              <div className={styles.challengeMyExplanation}>
                <p id="text" className={styles.pMyExplanation}>
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
                <img
                  ref={phoneRef}
                  className={styles.imgPhone}
                  src={phoneChallenge}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.contentMoreLink}>
            <div className={styles.contentLinesCustomLink}>
              <span className={styles.lineCustomLink}></span>
              <span className={styles.circleCustomLink}></span>
              <span
                ref={circleLinkRef}
                className={styles.circleCustomLinkAnimate}
              ></span>
              <a className={styles.moreLink} href={"#"}>
                Mas desaf??os
              </a>
            </div>
          </div>
        </section>
        <Project
          projectsArray={dataWork}
          title={"Proyectos"}
          subTitle={"Personales"}
        />
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
                <input placeholder={"Nos gustar??a..."}></input>
              </form>
              <div className={styles.contentButtonSendMsg}>
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
