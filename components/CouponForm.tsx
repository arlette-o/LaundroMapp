"use client";
import { useState } from "react";
import Link from "next/link";

import Alert from "@mui/material/Alert";
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

interface ClientInfo {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  service: string;
}

const initState: ClientInfo = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  service: "",
};

export default function CouponForm() {
  const [clientInfo, setClientInfo] = useState(initState);
  const [alert, setAlert] = useState(false);

  const handleChangeClientInfo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClientInfo({
      ...clientInfo,
      [event.target.name]: event.target.value.toLowerCase(),
    });
    //valid email regex
    // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
  };

  const handleSelect = (event: SelectChangeEvent<string>) => {
    setClientInfo({ ...clientInfo, [event.target.name]: event.target.value });
  };

  const submitClientInfo = async () => {
    const searchRes = await fetch(
      `http://localhost:3000/api/clientCoupon?fname=${clientInfo.fname}&lname=${clientInfo.lname}&email=${clientInfo.email}&phone=${clientInfo.phone}`,
      {
        cache: "no-store",
      }
    );
    const clients = await searchRes.json();

    if (!clients.length) {
      await fetch("http://localhost:3000/api/clientCoupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientInfo),
        cache: "no-store",
      });
    } else {
      //give error message: Coupon already granted to first time customer
      setAlert(true);
      console.log("Client already submitted for coupon");
    }
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
      {alert && (
        <Grid item xs={12}>
          <Alert
            severity="error"
            onClose={() => {
              setAlert(false);
            }}
          >
            Oops, looks like you've already submitted for this coupon
          </Alert>
        </Grid>
      )}
    </Grid>
  );
}
