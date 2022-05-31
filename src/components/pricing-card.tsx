import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";

export type PricingCardProps = {
  overlinePrice?: string;
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
  promotionalPrice,
  priceDescription,
  features,
  elevation,
  descriptionText,
  ...subscribeButtonProps
}: PricingCardProps) {
  const theme = useTheme();

  return (
    <Card elevation={elevation}>
      <CardContent
        style={{
          padding: "16px",
        }}
      >
        <Box>
          {overlinePrice && (
            <Typography variant="overline">{overlinePrice}</Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
