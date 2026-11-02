import { useEffect, useState } from "react";
import LogoS from "./assets/images/logo-s.png";

const EMAIL = "sumedh11.sg@gmail.com";
const PHONE = "+91 98907 98370";
const GITHUB = "https://github.com/sxmedh";
const LINKEDIN = "https://www.linkedin.com/in/sumedh-gole-495866221/";
const ONIX = "https://www.linkedin.com/company/onixcloud/";
/* drop the PDF at public/resume.pdf and this link picks it up */
const RESUME = `${process.env.PUBLIC_URL}/resume.pdf`;
/* the "Java" in the skills line quietly links to the video site in public/interview */
const INTERVIEW = `${process.env.PUBLIC_URL}/interview/`;

const NAME = "umedh Gole";
/* pacman reaches letter i at EAT_BASE + i * EAT_STEP seconds — keep in sync with the CSS */
const REVEAL_DONE_MS = 2600;

const ICONS = {
  GitHub:
    "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .83-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.92-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z",
  LinkedIn:
    "M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C19.9 8.65 21 10.6 21 14v7h-4v-6.2c0-1.55-.55-2.6-1.9-2.6-1.05 0-1.67.72-1.95 1.4-.1.25-.12.6-.12.94V21H9V9Z",
  Email:
    "M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.9.5 7.1 5.2L19.1 7H4.9Z",
  Phone:
    "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z",
};

const CONTACT = [
  ["GitHub", GITHUB, "sxmedh"],
  ["LinkedIn", LINKEDIN, "sumedh-gole"],
  ["Email", `mailto:${EMAIL}`, EMAIL],
  ["Phone", `tel:${PHONE.replace(/\s/g, "")}`, PHONE],
];

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const App = () => {
  const [letterClass, setLetterClass] = useState("eat-in");

  useEffect(() => {
    const timer = setTimeout(
      () => setLetterClass("text-animate-hover"),
      REVEAL_DONE_MS,
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <h1>
        {/* dots sit where the letters will be; the pacman sweeps across and each
            letter pops in as its dot is eaten */}
        <span className="eat" style={{ "--cells": NAME.length + 1 }}>
          <span className="dotcell" style={{ "--i": 0 }}>
            <span className={letterClass}>
              <img src={LogoS} alt="S" />
            </span>
          </span>
          {[...NAME].map((char, i) => (
            <span key={char + i} className="dotcell" style={{ "--i": i + 1 }}>
              <span className={letterClass}>{char === " " ? " " : char}</span>
            </span>
          ))}
          <span className="pac" aria-hidden="true" />
        </span>
      </h1>

      <ul className="facts">
        <li>
          Software Developer at <Link href={ONIX}>Datametica | Onix</Link>
        </li>
        <li>
          Spring, <a className="sneaky" href={INTERVIEW}>Java</a>, Scala, Spark,
          LangChain, Agentic AI
        </li>
        <li>
          Computer Science -{" "}
          <Link href="https://www.unipune.ac.in/">Pune University</Link>
        </li>
        <li>Pune, India</li>
      </ul>

      <hr />

      <h2>Contact</h2>

      <dl className="contact">
        {CONTACT.map(([label, href, value]) => (
          <div key={label}>
            <dt>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={ICONS[label]} />
              </svg>
              <span className="sr-only">{label}</span>
            </dt>
            <dd>
              <Link href={href}>{value}</Link>
            </dd>
          </div>
        ))}
      </dl>

      <a className="resume" href={RESUME} download="Sumedh-Gole-Resume.pdf">
        [ Download resume ]
      </a>
    </main>
  );
};

export default App;
