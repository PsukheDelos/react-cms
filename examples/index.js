import React from "react";
import ReactDOM from "react-dom";

import PageAdmin from "react-cms/page-admin";
import Page from "react-cms/page";
import PageEditor from "react-cms/page-editor";
import PageListItem from "react-cms/page-list-item";


let pages = [
  {
    "id": 1,
    "title": "Home",
    "segment": "home",
    "body": "This is the home page"
  },
  {
    "id": 2,
    "title": "About Us",
    "segment": "about-us",
    "body": "This is the about us page"
  },
  {
    "id": 3,
    "title": "Contact Us",
    "segment": "contact-us",
    "body": "This is the contact us page"
  },
  {
    "id": 4,
    "title": "Products",
    "segment": "products",
    "body": "This is the products page"
  },
  {
    "id": 5,
    "title": "Burning Baskets",
    "segment": "burning-baskets",
    "body": "This is a page dedicated to burning baskets"
  }
];

ReactDOM.render(
  <PageAdmin pages={pages}/>,
  document.querySelector(".react")
);
