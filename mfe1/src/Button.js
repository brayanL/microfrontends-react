import React from 'react';
import {Grid, TextField} from "@mui/material";
import {LocalizationProvider, StaticDatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {isWeekend} from "date-fns";

function Button() {
  const [value, setValue] = React.useState(new Date());
  console.log('value: ', value);

  return (
    <Grid container>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Grid>
  );
}

export default Button;
