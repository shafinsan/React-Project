import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
} from "@mui/material";
import PopUp from "./PopUp";


function AdvanceValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const [flag,setFlag]=useState(false)

  const MySubmitFunction = (data) => {
    console.log(data);
    setFlag(true);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(MySubmitFunction)}
        sx={{
          mt: 4,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "white",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Advanced Validation Form
        </Typography>

        {/* Name Field */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          {...register("name", {
            required: "Name is Required",
            maxLength: {
              value: 10,
              message: "Max Length is 10",
            },
            minLength: {
              value: 5,
              message: "Min Length is 5",
            },
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid Email pattern",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          {...register("password", {
            required: "Password is Required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message:
                "Must contain at least one lowercase, one uppercase, and one digit",
            },
            maxLength: {
              value: 8,
              message: "Max Length is 8",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        {/* Submit Button */}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Submit
        </Button>
      </Box>
      <PopUp flag={flag} setFlag={setFlag}/>
    </Container>
 
  );
}

export default AdvanceValidation;
