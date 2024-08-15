import Typography from "@mui/material/Typography";

interface HeaderTextProps {
  title: String;
}

export default function HeaderText({ title }: HeaderTextProps) {
  return (
    <Typography variant="h2" sx={{ color: "#2E689B" }}>
      {title}
    </Typography>
  );
}
