import React from "react";

import Validation from "./Validation";

export default function Data() {
  const array = [
    "Estate",
    "5-6 Passengers",
    "7 Passengers",
    "8 Passengers",
    "9 Passengers",
    "15 Passengers",
    "16 Passengers",
  ];
  return (
    <>
      <div className="">
        <table>
          <tr>
            {array.map((item, index) => (
              <th className="black-10" key={index}>
                {item}
              </th>
            ))}
          </tr>

          <tr>
            {array.map((item, index) => (
              <td>
                <Validation key={index}></Validation>
              </td>
            ))}
          </tr>
        </table>
      </div>
      <div className="jumbotron">
        Name: Haseeb Ahmad Siddiqui <br />
        Rollno: FA17-BCS-125
        <br />
        Section: BCS-B
      </div>
    </>
  );
}
