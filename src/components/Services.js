import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Magni, corporis!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Magni, corporis!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttles",
        info: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Magni, corporis!",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Magni, corporis!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
