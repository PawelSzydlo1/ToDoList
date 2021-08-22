import React from "react";
import { dataJSON } from "../../dataJSON";
import { Name } from "./Name";
import "./styled.scss";

let id = 0;

function draw(array) {
  return array.map((element) => (
    <>
      {element.subMenu?.length > 0 && id++ ? (
        <li>
          {element.childNumber % 2 === 0 ? (
            <>
              <input className="inputCheckBox" type="checkbox" id={id} />
              <label className="labelCheckBox" htmlFor={id}>
                <Name element={element} />
              </label>
            </>
          ) : (
            <>
              <input
                className="inputRadio"
                type="radio"
                name={element.childNumber}
                id={id}
              />
              <label className="labelRadio" htmlFor={id}>
                <Name element={element} />
              </label>
            </>
          )}
          <ul>{draw(element.subMenu)}</ul>
        </li>
      ) : (
        <li className="lastElement">
          <span>
            <Name element={element} />
          </span>
        </li>
      )}
    </>
  ));
}

export function MainList() {
  return (
    <div className="container">
      <ul className="mainList">{draw(dataJSON)}</ul>
    </div>
  );
}
