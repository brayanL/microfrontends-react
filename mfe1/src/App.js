import React from 'react';
import {Grid, TextField} from "@mui/material";
import {LocalizationProvider, StaticDatePicker} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {isWeekend} from "date-fns";


function App() {
  const [value, setValue] = React.useState(new Date());

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

export default App;
