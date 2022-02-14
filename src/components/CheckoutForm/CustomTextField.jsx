import React from 'react';
import { useFormContext, Controller, useForm } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { TextField, Grid } from '@material-ui/core';

function FormInput({ }) {
  const { control } = useFormContext();
  const {
    formState: { errors },
  } = useForm();

  return (
    <Grid item xs={12} sm={6} >
      <label>First Name:</label>
      <Controller
        name="FirstName"
        label="First Name"
        control={control}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
          />
        )}
        defaultValue=""
      />
      <label>Last Name:</label>
      <Controller
        name="LastName"
        label="Last Name"
        control={control}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
          />
        )}
        defaultValue=""
      />
      <label>Address:</label>
      <Controller
        name="Address"
        label="Address"
        control={control}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
          />
        )}
        defaultValue=""
      />
      <label>ZipCode:</label>
      <Controller
        name="ZipCode"
        label="Zip Code"
        control={control}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
          />
        )}
        defaultValue=""
      />
    </Grid>
    
  );
}

export default FormInput;