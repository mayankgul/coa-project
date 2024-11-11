import { Typography, Grid2 as Grid } from "@mui/material";
import { CardView } from "../components/CardView";

export const Home = () => {
  return (
    <div>
      <Typography variant="h2">Home</Typography>

      <hr />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexDirection: "row" }}
      >
        <CardView
          imageUri="lorem ipsum"
          title="Lorem Ipsum"
          description="lorem ipsum dolor sit amet"
        />
        <CardView
          imageUri="lorem ipsum"
          title="Lorem Ipsum"
          description="lorem ipsum dolor sit amet"
        />
        <CardView
          imageUri="lorem ipsum"
          title="Lorem Ipsum"
          description="lorem ipsum dolor sit amet"
        />
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexDirection: "row", mt: 5 }}
      >
        <CardView
          imageUri="lorem ipsum"
          title="Lorem Ipsum"
          description="lorem ipsum dolor sit amet"
        />
        <CardView
          imageUri="lorem ipsum"
          title="Lorem Ipsum"
          description="lorem ipsum dolor sit amet"
        />
        <CardView
          imageUri="lorem ipsum"
          title="Lorem Ipsum"
          description="lorem ipsum dolor sit amet"
        />
      </Grid>
    </div>
  );
};
