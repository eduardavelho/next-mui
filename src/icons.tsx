import * as muiIcons from "@material-ui/icons";
import React from "react";

export const icons: {
  [key in keyof typeof muiIcons]: React.ElementType<{}>;
} = muiIcons as any;
