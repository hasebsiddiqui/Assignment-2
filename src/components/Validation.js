import React from "react";
const Validation = () => {
  const [checkBox1, setCheckBox1] = React.useState(false);
  const [checkBox2, setCheckBox2] = React.useState(false);
  const [price, setPrice] = React.useState(0);
  const [percent, setPercent] = React.useState(0);
  const [disableTextField1, setDisableTextField1] = React.useState(true);
  const [disableTextField2, setDisableTextField2] = React.useState(true);
  const changeRadioButton1 = () => {
    setCheckBox2(false);
    setCheckBox1(true);
    setDisableTextField1(false);
    setDisableTextField2(true);
    setPrice(0);
  };
  const changeRadioButton2 = () => {
    setCheckBox2(true);
    setCheckBox1(false);
    setDisableTextField1(true);
    setDisableTextField2(false);
    setPercent(0);
  };

  return (
    <td>
      <div className="mb-3">
        <input
          onChange={changeRadioButton1}
          type="checkbox"
          checked={checkBox1}
        />
        <input
          onChange={(e) => setPercent(e.target.value)}
          type="number"
          min="0"
          max="100"
          placeholder="%"
          disabled={disableTextField1}
          value={percent}
          style={{ width: 100 }}
        />
        %
      </div>

      <div>
        <input
          onChange={changeRadioButton2}
          type="checkbox"
          checked={checkBox2}
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="$"
          disabled={disableTextField2}
          value={price}
          min="0"
          style={{ width: 100 }}
        />
        $
      </div>
    </td>
  );
};

export default Validation;
