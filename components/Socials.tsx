"use client";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Socials() {
  const openGithub = () => {
    window.open(
      "https://github.com/arlette-o",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/arlette-olalde-75a3a7234/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <IconButton sx={{ mr: 2 }} onClick={openGithub}>
        <GitHubIcon fontSize={"large"} sx={{ color: "#214B6F" }} />
      </IconButton>
      <IconButton onClick={openLinkedIn}>
        <LinkedInIcon fontSize={"large"} sx={{ color: "#214B6F" }} />
      </IconButton>
    </>
  );
}
