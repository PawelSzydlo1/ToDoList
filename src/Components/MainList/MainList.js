import React from "react";
import { dataJSON } from "../../dataJSON";
import "./index.css";

let id = 0;

function draw(array) {
  return array.map((element) => (
    <>
      {element.subMenu?.length > 0 && id++ ? (
        <li className="test2">
          {element.childNumber % 2 === 0 ? (
            <>
              <input className="ulInput" type="checkbox" id={id} />
              <label className="ulLabel" htmlFor={id}>
                {element.name.split(" ")[0]} {element.name.split(" ")[1]}
                <br />
                {element.name.split(" ")[2] !== undefined ?
                (element.name.split(" ")[2]):(<br/>)}
              </label>
            </>
          ) : (
            <>
              <input
                className="ulInput2"
                type="radio"
                name={element.childNumber}
                id={id}
              />
              <label className="ulLabel2" htmlFor={id}>
              {element.name.split(" ")[0]} {element.name.split(" ")[1]}
                <br />
                {element.name.split(" ")[2] !== undefined ?
                (element.name.split(" ")[2]):(<br/>)}
              </label>
            </>
          )}
          <ul>{draw(element.subMenu)}</ul>
        </li>
      ) : (
        <li className="test">
          <span>
            {element.name.split(" ")[0]} {element.name.split(" ")[1]}
            <br />
            {element.name.split(" ")[2]}
          </span>
        </li>
      )}
    </>
  ));
}

export function MainList() {
  return (
    <div className="container">
      <ul className="ulMain">{draw(dataJSON)}</ul>
    </div>
  );
}
