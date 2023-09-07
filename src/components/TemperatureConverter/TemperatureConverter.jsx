import React, { useState } from "react";
import styles from "./TemperatureConverter.module.css";

function TemperatureConverter() {
  const [inputValue, setInputValue] = useState("");
  const [selectedScale, setSelectedScale] = useState("celsius");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setResult("");
  };

  const handleScaleChange = (e) => {
    setSelectedScale(e.target.value);
    setResult("");
  };

  const convertToCelsius = () => {
    if (!inputValue || isNaN(inputValue)) {
      alert("Please enter a valid number");
    } else {
      const fahrenheit = parseFloat(inputValue);
      const celsius = ((fahrenheit - 32) * 5) / 9;
      setResult(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
    }
  };

  const convertToFahrenheit = () => {
    if (!inputValue || isNaN(inputValue)) {
      alert("Please enter a valid number");
    } else {
      const celsius = parseFloat(inputValue);
      const fahrenheit = (celsius * 9) / 5 + 32;
      setResult(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1>
        <span className={styles.temp}>Temperature</span> Converter
      </h1>
      <div className={styles.inputContainer}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter temperature"
          step="0.01"
        />
        <select value={selectedScale} onChange={handleScaleChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div className={styles.buttonContainer}>
        {selectedScale === "fahrenheit" && (
          <button onClick={convertToCelsius}>Convert to Celsius</button>
        )}
        {selectedScale === "celsius" && (
          <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
        )}
      </div>
      <div id="result" className="result">
        {result}
      </div>
    </div>
  );
}

export default TemperatureConverter;
