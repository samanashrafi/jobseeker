import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Search from "src/client/app/home/Search.jsx";
import Company from "src/client/app/home/Company.jsx";

class Home extends Component {
  static fetchData({ store }) {
    return new Promise(resolve => resolve()); //default
  }
  render() {
    return (
      <div className="home-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>جابسیکر | سایت استخدام در بهترین شرکت های ایران</title>
        </Helmet>
        <Search />
        <Company />
      </div>
    );
  }
}
export default Home;
