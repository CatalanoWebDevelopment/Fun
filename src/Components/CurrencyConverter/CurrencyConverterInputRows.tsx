import { Grid, Input, MenuItem, Select } from "@mui/material";
import React from "react";

export const Currencies = ["USD", "CAD", "GBP", "EUR"];

interface ICurrencyConverterRowProps {
  inputValue: number;
  inputOnChange: any;
  selectValue: string;
  selectOnChange: any;
}

const CurrencyConverterInputRow: React.FC<ICurrencyConverterRowProps> = ({
  inputValue,
  inputOnChange,
  selectValue,
  selectOnChange,
}) => {
  return (
    <React.Fragment>
      <Grid item>
        <Input value={inputValue} onChange={inputOnChange} type="number" />
      </Grid>

      <Grid item>
        <Select value={selectValue} onChange={selectOnChange}>
          {Currencies.map((currency, index) => (
            <MenuItem key={`${currency}_${index}`} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </React.Fragment>
  );
};

export default CurrencyConverterInputRow;
