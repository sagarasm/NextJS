import React, { useState } from "react";
import Image from 'next/image';
import acceImg from '../../public/accessibility.png'

export default function accessibility() {
  const clickme = () => {
    alert("Clicked");
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="container">
        <div className="layer --ultra-reduced">
          <h1>role</h1>
          <span role="button" onClick={clickme}>
            Click me!!!
          </span>
        </div>
        <div className="layer --ultra-reduced">
          <h1>aria-hidden</h1>
          <div aria-hidden="true">
            <p>
              This <a href="#" tabIndex={1}>text</a> is hidden from <a href="#" tabIndex={0}>screen</a> readers and assistive
              technologies.
            </p>
          </div>
        </div>
        <div className="layer --ultra-reduced">
          <h1>aria-label</h1>
          <div>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="layer --ultra-reduced">
          <h1>aria-labelledby</h1>
          <div>
            <span id="name">First Name: </span>
            <input type="text" aria-labelledby="name" />
          </div>
        </div>
        <div className="layer --ultra-reduced">
          <h1>aria-describedby</h1>
          <div>
            <a href="http://www.w3c.org" aria-describedby="description">
              W3C
            </a>
            <p id="description">World Wide Web Consortium</p>
          </div>
        </div>
        <div className="layer --ultra-reduced">
          <h1>aria-expanded/ aria-hidden</h1>
          <div>
            <button aria-expanded={isExpanded} onClick={toggleContent}>
              Toggle Content
            </button>

            <div
              className={!isExpanded ? `d-none` : ``}
              aria-hidden={!isExpanded}
            >
              <p>This is the hidden content.</p>
            </div>
          </div>
        </div>
        <div className="layer --ultra-reduced">
          <h1>aria-checked</h1>
          <div>
            <span
              role="checkbox"
              className="custom-checkbox"
              aria-checked="true"
              aria-label="Option 1"
            ></span>
            <span>Option 1</span>
          </div>
        </div>
        <div className="layer --ultra-reduced">
          <h1>aria-disabled</h1>
          <div>
            <label htmlFor="option1">
              <input
                type="radio"
                id="option1"
                name="options"
                aria-disabled="true"
                disabled
              />
              Option 1 (Disabled)
            </label>
          </div>
        </div>
        <div className="layer --ultra-reduced">
          <h1>aria-live</h1>
          <div>
            <div role="status" aria-live="polite">
              Updates will be announced here.
            </div>
          </div>
        </div>
        <div className="layer --ultra-reduced">
          <h1>Alt Attribute</h1>
          <div>
            <Image src={acceImg} alt="My Image" width="500" height="200"/>
          </div>
        </div>
      </div>
    </>
  );
}
