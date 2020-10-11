import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import imgSVG from './img/petr-tichy-ihatetomatoes-blog.svg';
import './App.scss';

function App() {
  let header = useRef(null);

  useEffect(() => {
    gsap.to(header, { duration: 1, y: 20 });
  }, [header]);

  return (
    <div className="App">
      <header ref={(el) => (header = el)} id="header">
        <h1>
          <span>GreenSock 101</span>
          <em></em>
        </h1>
        <p class="intro">
          Your first hour with GSAP, <br />
          <em>make sure it is a good one</em>.
        </p>
        <img
          src={imgSVG}
          alt="GreenSock 101 - Getting started with GreenSock in 60 minutes."
        />

        <h2>Table Of Content</h2>
        <ul class="list">
          <li>
            <a href="#">
              <span>
                <strong>Lesson 1</strong> - Getting started
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <strong>Lesson 2</strong> - Tweens
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <strong>Lesson 3</strong> - Timelines
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <strong>Lesson 4</strong> - Callbacks
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <strong>Lesson 5</strong> - Timeline controls
              </span>
            </a>
          </li>
        </ul>
      </header>

      <div class="buttons">
        <button id="btnPlay">play</button>
        <button id="btnPause">pause</button>
        <button id="btnResume">resume</button>
        <button id="btnReverse">reverse</button>
        <button id="btnSpeedUp">speed up</button>
        <button id="btnSlowDown">slow down</button>
        <button id="btnSeek">seek 1 sec</button>
        <button id="btnProgress">go to 50%</button>
        <button id="btnRestart">restart</button>
      </div>
    </div>
  );
}

export default App;
