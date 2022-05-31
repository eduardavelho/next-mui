import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CheckIcon from "@material-ui/icons/Check";
import { useTheme } from "@material-ui/core/styles";

export type PricingCardProps = {
  overlinePrice?: string;
  color?: string;
  price: React.ReactNode;
  promotionalPrice?: React.ReactNode;
  priceDescription?: React.ReactNode;
  features?: React.ReactNode[];
  descriptionText: React.ReactNode;
  subscribeLabel: string;
  elevation?: number;
} & ({ subscribeHref: string } | { subscribeOnClick: () => void });

export function PricingCard({
  overlinePrice,
  price,
  color,
  promotionalPrice,
  priceDescription,
  features,
  elevation,
  descriptionText,
  ...subscribeProps
}: PricingCardProps) {
  const theme = useTheme();
  const textColor = color || theme.palette.primary.main;

  return (
    <Card elevation={elevation}>
      <CardContent
        style={{
          padding: "16px",
        }}
      >
        <Box>
          {overlinePrice && (
            <Box>
              <Typography
                variant="overline"
                style={{
                  color: textColor,
                  fontWeight: 600,
                }}
              >
                {overlinePrice}
              </Typography>
            </Box>
          )}
          <Box marginY={2}>
            <Box display="inline-block">
              <Box display="flex" alignItems="flex-end">
                <Typography
                  variant={promotionalPrice ? "subtitle1" : "h4"}
                  component="span"
                  style={
                    promotionalPrice
                      ? {
                          textDecoration: "line-through",
                          color: "rgba(0, 0, 0, 0.7)",
                        }
                      : {
                          fontWeight: 800,
                        }
                  }
                >
                  {price}
                </Typography>
                {promotionalPrice && (
                  <Typography
                    variant="h4"
                    component="span"
                    style={{
                      fontWeight: 800,
                    }}
                  >
                    {price}
                  </Typography>
                )}
              </Box>
              <Box display="flex" justifyContent="flex-end">
                {priceDescription && (
                  <Typography
                    variant="caption"
                    component="span"
                    style={{
                      lineHeight: 1,
                    }}
                  >
                    {priceDescription}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box>
            {descriptionText && (
              <Typography variant="subtitle1">{descriptionText}</Typography>
            )}
          </Box>
          {features && features.length > 0 && (
            <Box>
              <List dense>
                {features.map((feature) => (
                  <ListItem disableGutters dense>
                    <ListItemIcon
                      style={{
                        color: textColor,
                      }}
                    >
                      <CheckIcon color="inherit" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
        {subscribeProps.subscribeLabel && (
          <Box
            style={{
              color: textColor,
            }}
          >
            {"subscribeHref" in subscribeProps ? (
              <Link href={subscribeProps.subscribeHref} passHref>
                <Button
                  fullWidth
                  variant="outlined"
                  color="inherit"
                  component="a"
                >
                  {subscribeProps.subscribeLabel}
                </Button>
              </Link>
            ) : (
              <Button
                fullWidth
                variant="outlined"
                color="inherit"
                style={{
                  cursor: "pointer",
                }}
                onClick={subscribeProps.subscribeOnClick}
              />
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
