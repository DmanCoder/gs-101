import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import imgSVG from './img/petr-tichy-ihatetomatoes-blog.svg';
import './App.scss';

function App() {
  let header = useRef(null);
  let title = useRef(null);
  let intro = useRef(null);
  let image = useRef(null);
  let tableTitle = useRef(null);
  let lists = useRef(null);

  useEffect(() => {
    console.log(title);
    const tl = gsap.timeline({ defaults: { duration: 1, delay: 0.2 } });

    tl.from('body', { background: '#ffffff' })
      .from([title, intro], {
        opacity: 0,
        y: -20,
        stagger: { amount: 0.25 },
      })
      .from([image, tableTitle], { duration: 1.3, opacity: 0 })
      .from('.list-item', {
        duration: 1.5,
        opacity: 0,
        height: 0,
        stagger: { amount: 1 },
        delay: -0.3,
      });

    console.log(lists);
  }, []);

  return (
    <div className="App">
      <header ref={(el) => (header = el)} id="header">
        <h1 ref={(el) => (title = el)}>
          <span>GreenSock 101</span>
          <em></em>
        </h1>
        <p ref={(el) => (intro = el)} class="intro">
          Your first hour with GSAP, <br />
          <em>make sure it is a good one</em>.
        </p>
        <img
          ref={(el) => (image = el)}
          src={imgSVG}
          alt="GreenSock 101 - Getting started with GreenSock in 60 minutes."
        />

        <h2 ref={(el) => (tableTitle = el)}>Table Of Content</h2>
        <ul class="list">
          <li class="list-item">
            <a href="#">
              <span>
                <strong>Lesson 1</strong> - Getting started
              </span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <span>
                <strong>Lesson 2</strong> - Tweens
              </span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <span>
                <strong>Lesson 3</strong> - Timelines
              </span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <span>
                <strong>Lesson 4</strong> - Callbacks
              </span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <span>
                <strong>Lesson 5</strong> - Timeline controls
              </span>
            </a>
          </li>
        </ul>
      </header>

      {/* <div class="buttons">
        <button id="btnPlay">play</button>
        <button id="btnPause">pause</button>
        <button id="btnResume">resume</button>
        <button id="btnReverse">reverse</button>
        <button id="btnSpeedUp">speed up</button>
        <button id="btnSlowDown">slow down</button>
        <button id="btnSeek">seek 1 sec</button>
        <button id="btnProgress">go to 50%</button>
        <button id="btnRestart">restart</button>
      </div> */}
    </div>
  );
}

export default App;
