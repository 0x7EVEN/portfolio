import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="https://avatars.githubusercontent.com/u/76391543?v=4" alt="" />
      </Link>
      <header>
        <h2>Aarif Shaikh</h2>
        <p><a href="mailto:ar1fshaikh@protonmail.com">ar1fshaikh@protonmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Arif. I am curious about all technical things around me.
        I am a <a href="https://en.wikipedia.org/wiki/Hacker">Ethical hacker</a>, Ex-SDE, and currently working as security engineer at <a href="https://olaelectric.com">olaelectric.</a> In my free time you will find me disassembling executables / learning something : )
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
