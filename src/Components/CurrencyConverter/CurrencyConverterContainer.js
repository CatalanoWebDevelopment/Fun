import React from "react";
import { Grid } from "@mui/material";
import CurrencyConverterInputRow from "./CurrencyConverterInputRows";
import { CurrencyConversionService } from "../../Services/CurrencyConverterService";


const CurrencyConverterContainer = () => {
  const [currencyAmount1, setCurrencyAmount1] = React.useState();
  const [currencyAmount2, setCurrencyAmount2] = React.useState();

  const [currencyType1, setCurrencyType1] = React.useState();
  const [currencyType2, setCurrencyType2] = React.useState();

  React.useEffect(() => {
    const currencyService = new CurrencyConversionService();

    if (
      !Number.isNaN(currencyAmount1) &&
      currencyAmount1 &&
      currencyType1 &&
      currencyType2
    ) {
      currencyService.getCurrencyConversion(
        currencyAmount1,
        currencyType1,
        currencyType2
      );
    }
  }, [currencyAmount1, currencyType1, currencyAmount2, currencyType2]);

  return (
    <div>
      <Grid container item xs={12}>
        <CurrencyConverterInputRow
          inputValue={currencyAmount1}
          inputOnChange={setCurrencyAmount1}
          selectValue={currencyType1}
          selectOnChange={setCurrencyType1}
        />
      </Grid>

      <Grid container item xs={12}>
        <CurrencyConverterInputRow
          inputValue={currencyAmount2}
          inputOnChange={setCurrencyAmount2}
          selectValue={currencyType2}
          selectOnChange={setCurrencyType2}
        />
      </Grid>
    </div>
  );
};

export default CurrencyConverterContainer;
