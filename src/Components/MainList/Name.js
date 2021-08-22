import React from "react";

export function Name({ element }) {
  return (
    <>
      {element.name.split(" ")[0]} {element.name.split(" ")[1]}
      <br />
      {element.name.split(" ")[2] !== undefined ? (
        element.name.split(" ")[2]
      ) : (
        <br />
      )}
    </>
  );
}
