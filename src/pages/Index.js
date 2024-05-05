import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
/* eslint-disable */
import ContactIcons from '../components/Contact/ContactIcons';

const Index = () => (
  <Main
    description={'Arif Shaikh, '
    + 'Security Engineer / Ex-SDE, CTF Player'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Who am I ?</Link></h2>
          <p><span style={{color: 'red'}}>Hacker</span>, {'<Programmer/>'}, Chess player</p>
        </div>
        <div>
        <section style={{"marginTop":"10px","marginRight":"20px"}} id="main-contact">
            <ContactIcons />
        </section>
        </div>
      </header>
      <p title="You can connect over social media as well !">
        Hola amigos! 👋 Greetings from my corner of internet !
        explore from my <Link to="/about">story</Link>, know more about my skills from <Link to="/resume">resume</Link> 
        and <Link to="/projects">projects</Link>, and everything in between. 
        It's all about building and breaking stuff, so come along as we uncover new possibilities together! here are few ways to <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
