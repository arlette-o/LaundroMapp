"use client";
import { useState } from "react";
import Link from "next/link";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CouponForm() {
  const [clientInfo, setClientInfo] = useState({ service: "" });

  const handleChangeClientInfo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClientInfo({ ...clientInfo, [event.target.name]: event.target.value });
  };

  const handleSelect = (event: SelectChangeEvent<string>) => {
    setClientInfo({ ...clientInfo, [event.target.name]: event.target.value });
  };

  const submitClientInfo = () => {
    console.log(clientInfo);
  };
  return (
    <Grid container spacing={2} width={"60%"}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="First Name"
          name="fname"
          onChange={handleChangeClientInfo}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Last Name"
          name="lname"
          onChange={handleChangeClientInfo}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          onChange={handleChangeClientInfo}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={7}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          onChange={handleChangeClientInfo}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Select Service</InputLabel>
          <Select
            label="Select Service"
            name="service"
            value={clientInfo.service}
            startAdornment={<LocalLaundryServiceIcon />}
            onChange={handleSelect}
          >
            <MenuItem value={"fluff"}>Fluff'n'Fold</MenuItem>
            <MenuItem value={"delivery"}>Delivery</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={9}>
        <FormGroup>
          <FormControlLabel
            required
            control={<Checkbox />}
            label={
              <>
                <span>
                  I have read and accept the{" "}
                  <Link href="/terms">Terms & Conditions</Link>
                </span>
              </>
            }
          />
        </FormGroup>
      </Grid>
      <Grid item xs={3}>
        <Button fullWidth variant="contained" onClick={submitClientInfo}>
          Get 50% off Coupon
        </Button>
      </Grid>
    </Grid>
  );
}
