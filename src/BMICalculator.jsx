// src/BMICalculator.jsx
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./styles/bmiCalculator.css";

const BMICalculator = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const calculateBMI = (height, weight) => {
    return (weight / ((height / 100) * (height / 100))).toFixed(2);
  };

  const bmi = calculateBMI(height, weight);

  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add box shadow here
          backgroundColor: "white", // Add background color
          borderRadius: "10px", // Optional: Add border radius
        }}
      >
        <Typography variant="h4" gutterBottom>
          BMI Calculator
        </Typography>
        <Typography variant="h6">Height: {height} cm</Typography>
        <Slider
          value={height}
          min={100}
          max={220}
          onChange={(e, newValue) => setHeight(newValue)}
          valueLabelDisplay="auto"
          sx={{ width: "80%", marginBottom: "20px" }}
        />
        <Typography variant="h6">Weight: {weight} kg</Typography>
        <Slider
          value={weight}
          min={30}
          max={150}
          onChange={(e, newValue) => setWeight(newValue)}
          valueLabelDisplay="auto"
          sx={{ width: "80%", marginBottom: "20px" }}
        />
        <Typography variant="h5" gutterBottom>
          Your BMI is: {bmi}
        </Typography>
      </Box>
    </div>
  );
};

export default BMICalculator;
