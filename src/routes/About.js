import styles from "./About.module.css";

function About() {
  return (
    <div class={styles.about}>
      <p class={styles.about__description}>
        Hello! WELCOME TO WatMov! You can see descriptions of lots of movies in
        WatMov! Hope you enjoy!
      </p>
    </div>
  );
}

export default About;
