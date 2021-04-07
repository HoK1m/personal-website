import { Link } from "gatsby"
import React from "react"
import "../css/header.css"

export const HeaderLight = () => {
  return (
    <header className="header">
      <div className="head-container">
        <div className="leftnav">
          <Link className="navbutton" activeClassName="activebutton" to="/eliza">
            Eliza
          </Link>
          <Link className="navbutton" activeClassName="activebutton" to="/hyperion">
            Hyperion
          </Link>
        </div>
        <div className="centernav">
          <Link to="/">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 402.82 454.69"><title>Horizon Icon</title><path d="M326.54,314.78H240.38a7.54,7.54,0,0,1,0-15.08h86.16a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M386.86,347.1H180.07a7.54,7.54,0,1,1,0-15.08H386.86a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M408.41,379.41H158.52a7.54,7.54,0,1,1,0-15.08H408.41a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M361,411.72H205.91a7.54,7.54,0,1,1,0-15.08H361a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M305,444H261.92a7.54,7.54,0,1,1,0-15.08H305A7.54,7.54,0,0,1,305,444Z" transform="translate(-82.05 -56.12)" /><path d="M373.94,476.35H193a7.54,7.54,0,0,1,0-15.08h181a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M288.85,510.81H278.08a7.54,7.54,0,1,1,0-15.08h10.77a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M408.93,250.17a7.45,7.45,0,0,1-2.56-.46,7.53,7.53,0,0,1-4.52-9.65,126,126,0,1,0-236.77,0,7.54,7.54,0,1,1-14.17,5.13,140.58,140.58,0,0,1-8.54-48c0-77.81,63.29-141.1,141.09-141.1s141.1,63.29,141.1,141.1a140.58,140.58,0,0,1-8.54,48A7.53,7.53,0,0,1,408.93,250.17Z" transform="translate(-82.05 -56.12)" /><path d="M366.66,250.17a7.44,7.44,0,0,1-3.61-.93,7.53,7.53,0,0,1-3-10.23,87.25,87.25,0,1,0-153.17,0,7.54,7.54,0,0,1-13.23,7.23,102.33,102.33,0,1,1,179.63,0A7.53,7.53,0,0,1,366.66,250.17Z" transform="translate(-82.05 -56.12)" /><path d="M477.33,282.47H89.59a7.54,7.54,0,1,1,0-15.08H477.33a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /></svg>
          </Link>
        </div>
        <div className="rightnav">
          <Link className="navbutton" activeClassName="activebutton" to="/about">
            About
          </Link>
          <Link className="navbutton" activeClassName="activebutton" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
};

export const HeaderDark = () => {
  return (
    <header className="header1">
      <div className="head-container">
        <div className="leftnav">
          <Link className="navbutton1" activeClassName="activebutton1" to="/eliza">
            Eliza
          </Link>
          <Link className="navbutton1" activeClassName="activebutton1" to="/hyperion">
            Hyperion
          </Link>
        </div>
        <div className="centernav">
          <Link to="/">
            <svg className="icon1" xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 402.82 454.69"><title>Horizon Icon</title><path d="M326.54,314.78H240.38a7.54,7.54,0,0,1,0-15.08h86.16a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M386.86,347.1H180.07a7.54,7.54,0,1,1,0-15.08H386.86a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M408.41,379.41H158.52a7.54,7.54,0,1,1,0-15.08H408.41a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M361,411.72H205.91a7.54,7.54,0,1,1,0-15.08H361a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M305,444H261.92a7.54,7.54,0,1,1,0-15.08H305A7.54,7.54,0,0,1,305,444Z" transform="translate(-82.05 -56.12)" /><path d="M373.94,476.35H193a7.54,7.54,0,0,1,0-15.08h181a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M288.85,510.81H278.08a7.54,7.54,0,1,1,0-15.08h10.77a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M408.93,250.17a7.45,7.45,0,0,1-2.56-.46,7.53,7.53,0,0,1-4.52-9.65,126,126,0,1,0-236.77,0,7.54,7.54,0,1,1-14.17,5.13,140.58,140.58,0,0,1-8.54-48c0-77.81,63.29-141.1,141.09-141.1s141.1,63.29,141.1,141.1a140.58,140.58,0,0,1-8.54,48A7.53,7.53,0,0,1,408.93,250.17Z" transform="translate(-82.05 -56.12)" /><path d="M366.66,250.17a7.44,7.44,0,0,1-3.61-.93,7.53,7.53,0,0,1-3-10.23,87.25,87.25,0,1,0-153.17,0,7.54,7.54,0,0,1-13.23,7.23,102.33,102.33,0,1,1,179.63,0A7.53,7.53,0,0,1,366.66,250.17Z" transform="translate(-82.05 -56.12)" /><path d="M477.33,282.47H89.59a7.54,7.54,0,1,1,0-15.08H477.33a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /></svg>
          </Link>
        </div>
        <div className="rightnav">
          <Link className="navbutton1" activeClassName="activebutton1" to="/about">
            About
          </Link>
          <Link className="navbutton1" activeClassName="activebutton1" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
};

export const HeaderBlack = () => {
  return (
    <header className="header2">
      <div className="head-container">
        <div className="leftnav">
          <Link className="navbutton1" activeClassName="activebutton1" to="/eliza">
            Eliza
          </Link>
          <Link className="navbutton1" activeClassName="activebutton1" to="/hyperion">
            Hyperion
          </Link>
        </div>
        <div className="centernav">
          <Link to="/">
            <svg className="icon1" xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 402.82 454.69"><title>Horizon Icon</title><path d="M326.54,314.78H240.38a7.54,7.54,0,0,1,0-15.08h86.16a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M386.86,347.1H180.07a7.54,7.54,0,1,1,0-15.08H386.86a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M408.41,379.41H158.52a7.54,7.54,0,1,1,0-15.08H408.41a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M361,411.72H205.91a7.54,7.54,0,1,1,0-15.08H361a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M305,444H261.92a7.54,7.54,0,1,1,0-15.08H305A7.54,7.54,0,0,1,305,444Z" transform="translate(-82.05 -56.12)" /><path d="M373.94,476.35H193a7.54,7.54,0,0,1,0-15.08h181a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M288.85,510.81H278.08a7.54,7.54,0,1,1,0-15.08h10.77a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /><path d="M408.93,250.17a7.45,7.45,0,0,1-2.56-.46,7.53,7.53,0,0,1-4.52-9.65,126,126,0,1,0-236.77,0,7.54,7.54,0,1,1-14.17,5.13,140.58,140.58,0,0,1-8.54-48c0-77.81,63.29-141.1,141.09-141.1s141.1,63.29,141.1,141.1a140.58,140.58,0,0,1-8.54,48A7.53,7.53,0,0,1,408.93,250.17Z" transform="translate(-82.05 -56.12)" /><path d="M366.66,250.17a7.44,7.44,0,0,1-3.61-.93,7.53,7.53,0,0,1-3-10.23,87.25,87.25,0,1,0-153.17,0,7.54,7.54,0,0,1-13.23,7.23,102.33,102.33,0,1,1,179.63,0A7.53,7.53,0,0,1,366.66,250.17Z" transform="translate(-82.05 -56.12)" /><path d="M477.33,282.47H89.59a7.54,7.54,0,1,1,0-15.08H477.33a7.54,7.54,0,0,1,0,15.08Z" transform="translate(-82.05 -56.12)" /></svg>
          </Link>
        </div>
        <div className="rightnav">
          <Link className="navbutton1" activeClassName="activebutton1" to="/about">
            About
          </Link>
          <Link className="navbutton1" activeClassName="activebutton1" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
};