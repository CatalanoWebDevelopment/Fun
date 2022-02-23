import React from "react";
import { Grid } from "@mui/material";
import CurrencyConverterInputRow from "./CurrencyConverterInputRows";
import { CurrencyConversionService } from "../../Services/CurrencyConverterService";

const CurrencyConverterContainer = () => {
  const currencyService = new CurrencyConversionService();

  const [currencyAmount1, setCurrencyAmount1] = React.useState<number>();
  const [currencyAmount2, setCurrencyAmount2] = React.useState<number>();

  const [currencyType1, setCurrencyType1] = React.useState<string>();
  const [currencyType2, setCurrencyType2] = React.useState<string>();

  //   React.useEffect(() => {
  //     if (
  //       !Number.isNaN(currencyAmount1) &&
  //       currencyAmount1 &&
  //       currencyType1 &&
  //       currencyType2
  //     ) {
  //       currencyService.getCurrencyConversion(
  //         currencyAmount1,
  //         currencyType1,
  //         currencyType2
  //       );
  //     }
  //   }, [currencyAmount1, currencyType1, currencyAmount2, currencyType2]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default CurrencyConverterContainer;
