import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Stocks = () => {
  return (
    <>
      <div className="header">
        <h2>Your Stock Tracker</h2>
      </div>
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={data.company.trim()}
                ticker={data.ticker.trim()}
                stockPrice={data.stockPrice.trim()}
                timeElapsed={data.timeElapsed.trim()}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const Stock = (props) => {
  if (!props.company) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{props.company}</h5>
          </td>
          <td>
            <h5>{props.ticker}</h5>
          </td>
          <td>
            <h4>{props.stockPrice}</h4>
          </td>
          <td>
            <p>{props.timeElapsed}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
