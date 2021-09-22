import React from 'react';
import { Grid, TextField } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { isWeekend } from "date-fns";

class App extends React.Component {

  constructor() {
    super();
    this.state = { value: new Date() };
  }

  render() {
    return (
      <Grid container>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={this.state.value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              this.setState({ value: newValue })
              console.log("newValue", newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    );
  }
}

export default App;
