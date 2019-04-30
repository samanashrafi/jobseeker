import React, { Component } from "react";

import img1 from "src/assets/img/home/1.jpg";
import img2 from "src/assets/img/home/2.png";
import img3 from "src/assets/img/home/3.png";
import img4 from "src/assets/img/home/4.png";
import img5 from "src/assets/img/home/5.jpg";
import img6 from "src/assets/img/home/6.jpg";

const companyList = [
  {
    title: "انتشارات خیلی سبز",
    logo: img1
  },
  {
    title: "کوییز آف کینگز",
    logo: img2
  },
  {
    title: "شابش",
    logo: img3
  },
  {
    title: "میزگرد نرم‌افزار",
    logo: img4
  },
  {
    title: "اسنپ فود",
    logo: img5
  },
  {
    title: "حامی سیستم شریف",
    logo: img6
  }
];
const Company = () => {
  return (
    <div className="company">
      <div className="container-center">
        <div className="cat-list position-relative-margin">
          <ul className="category">
            {companyList.map(item => {
              return (
                <li key={"company_" + Math.random()}>
                  <div className="logo">
                    <img src={item.logo} title={item.title} alt={item.title} />
                  </div>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company;
