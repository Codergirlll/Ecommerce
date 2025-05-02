import React, { useContext } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./CountryDropDown.css";
import { useState } from "react";
import { CountryContext } from "../../App";

// import allCountries from "../../assets/static/country.json";

const CountryDropDown = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const { allCountries } = useContext(CountryContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value = null) => {
    if (value) {
      setSelectedCountry(value);
    }
    setOpen(false);
  };

  console.log(allCountries);
  const filteredCountries = allCountries.countries.filter((country) =>
    country?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <button className="me-3 location-dropdown" onClick={handleClickOpen}>
        {selectedCountry || "India"}
      </button>

      <Dialog onClose={() => handleClose()} open={open} fullWidth maxWidth="xs">
        <DialogTitle className="location-dialog-title">
          Choose your Delivery Location
          <div className="location-subtext">
            Enter your address and we will specify the offer for your area.
          </div>
        </DialogTitle>

        <div className="dialog-content">
          <TextField
            fullWidth
            placeholder="Search your area..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <div className="country-list">
            {filteredCountries.map((country, index) => (
              <div
                key={index}
                className="country-item"
                onClick={() => handleClose(country.name)}
              >
                {country.name}
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
