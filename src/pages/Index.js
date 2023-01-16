import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
/* eslint-disable */
import ContactIcons from '../components/Contact/ContactIcons';

const Index = () => (
  <Main
    description={'Arif Shaikh, '
    + 'SDE-I at olaelectric'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Who am I ?</Link></h2>
          <p>Learner, {'<Programmer/>'}, CTFer</p>
          <p>Sketcher, Chess player</p>
          <p>Civil Er</p>
        </div>
        <div>
        <section style={{"marginTop":"10px","marginRight":"20px"}} id="main-contact">
            <ContactIcons />
        </section>
        </div>
      </header>
      <p> Welcome to my portfolio. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
