import * as React from "react";
import { Grid } from "@material-ui/core";
import { SectionProps } from "./Section";

type Props = {
  // TODO: try to find a way to reject children
  //       by type and not just by props
  children: React.ReactElement<SectionProps>[];
};

const SectionContainer: React.FC<Props> = ({ children }) => (
  <Grid container spacing={2}>
    {children.map((child, i) => (
      <Grid key={i} item xs={12}>
        {child}
      </Grid>
    ))}
  </Grid>
);

export default SectionContainer;