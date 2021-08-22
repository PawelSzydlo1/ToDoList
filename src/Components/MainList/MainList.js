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
          <input
            className={
              element.childNumber % 2 === 0 ? "inputCheckBox" : "inputRadio"
            }
            type={element.childNumber % 2 === 0 ? "checkbox" : "radio"}
            id={id}
          />
          <label
            className={
              element.childNumber % 2 === 0 ? "labelCheckBox" : "labelRadio"
            }
            htmlFor={id}
          >
            <Name element={element} />
          </label>
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
