/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import GuyWithPhone from "../../../../assets/images/guyWithPhone.png";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const WeeklyDiscover = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?limit=2&offset=2"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  const history = useHistory();

  return (
    <>
      <div className="weeklyDiscover">
        <div className="weeklyImage">
          <img src={GuyWithPhone} alt="weekly-discover" />
        </div>
        <div className="box-grid-weekly">
          <div className="boxWeeklyProducts">
            <div className="weeklySpans">
              <span>MACC</span>
              <span className="boxWeeklyProducts2">WEEKLY DISCOUNT</span>
            </div>
            <button>VIEW ALL</button>
          </div>
          <div className="weeklyColumn">
            {items.map((item) => (
              <Link
                key={item.id}
                to={`/item/${item.id}`}
                onClick={() => history.push(`/item/${item.id}`)}
              >
                <div className="weeklyImageBoxProduct">
                  <img
                    className="imageProduct"
                    src={item.category.image}
                    alt={item.title}
                  />
                </div>
                <div className="titleWeeklyProduct">
                  <br />
                  {item.title}
                </div>
                <div>
                  <p className="lineThroughProduct1">
                    ${item.price}
                    <span className="lineThroughProduct">$1000</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default WeeklyDiscover;
