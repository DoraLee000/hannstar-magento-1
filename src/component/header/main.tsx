import React, { useState, useEffect } from "react";
import "./css.scss";

const headerData = {
  logoSrc: "https://www.hannstar.com/images/logo.png",
  menu: [
    {
      text: "關於瀚宇彩晶",
      href: "",
    },
    {
      text: "產品應用",
      href: "",
    },
    {
      text: "企業永續",
      href: "",
    },
    {
      text: "投資人關係",
      href: "",
    },
    {
      text: "人力資源",
      href: "",
    },
    {
      text: "訊息中心",
      href: "",
    },
  ],
};

const MenuBlock: React.FC = () => {
  return (
    <ul className="menuUl">
      {headerData.menu.map((item, idx) => (
        <li className="menuLi" key={idx}>
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

const Header: React.FC = () => {
  return (
    <div className="hannstarHeader">
      <div className="header_pc">
        <img className="logo" src={headerData.logoSrc} />
        <div className="menuBlock">
          <MenuBlock />
          <div className="otherBlock">
            <a className="headerBtn login">登入</a>
            <a className="headerBtn Btn">繁中</a>
          </div>
        </div>
      </div>
      <div className="header_m">
        <img className="logo" src={headerData.logoSrc} />
        <div className="menuOpenBtn">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;