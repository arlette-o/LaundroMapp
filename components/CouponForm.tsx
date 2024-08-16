"use client";
import Link from "next/link";

import Box from "@mui/material/Box";
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
import Select from "@mui/material/Select";

import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CouponForm() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="First Name"
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
            startAdornment={<LocalLaundryServiceIcon />}
          >
            <MenuItem>Fluff'n'Fold</MenuItem>
            <MenuItem>Delivery</MenuItem>
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
        <Button fullWidth variant="contained">
          Get 50% off Coupon
        </Button>
      </Grid>
    </Grid>
  );
}
