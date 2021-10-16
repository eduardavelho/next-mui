import { makeStyles } from "@material-ui/core/styles";

export function useTypographyStyles(): {} {
  const typographyStyles = makeStyles((theme) => ({
    "@global": {
      "@font-face": [
        {
          fontFamily: '"Roboto"',
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "100",
          src:
            'local("Roboto Thin "), local("Roboto-Thin"),\n    url("./roboto-latin-100.woff2") format("woff2"),\n    url("./roboto-latin-100.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "italic",
          fontDisplay: "swap",
          fontWeight: "100",
          src:
            'local("Roboto Thin italic"), local("Roboto-Thinitalic"),\n    url("./roboto-latin-100italic.woff2") format("woff2"),\n    url("./roboto-latin-100italic.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "300",
          src:
            'local("Roboto Light "), local("Roboto-Light"),\n    url("./roboto-latin-300.woff2") format("woff2"),\n    url("./roboto-latin-300.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "italic",
          fontDisplay: "swap",
          fontWeight: "300",
          src:
            'local("Roboto Light italic"), local("Roboto-Lightitalic"),\n    url("./roboto-latin-300italic.woff2") format("woff2"),\n    url("./roboto-latin-300italic.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "400",
          src:
            'local("Roboto Regular "), local("Roboto-Regular"),\n    url("./roboto-latin-400.woff2") format("woff2"),\n    url("./roboto-latin-400.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "italic",
          fontDisplay: "swap",
          fontWeight: "400",
          src:
            'local("Roboto Regular italic"), local("Roboto-Regularitalic"),\n    url("./roboto-latin-400italic.woff2") format("woff2"),\n    url("./roboto-latin-400italic.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "500",
          src:
            'local("Roboto Medium "), local("Roboto-Medium"),\n    url("./roboto-latin-500.woff2") format("woff2"),\n    url("./roboto-latin-500.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "italic",
          fontDisplay: "swap",
          fontWeight: "500",
          src:
            'local("Roboto Medium italic"), local("Roboto-Mediumitalic"),\n    url("./roboto-latin-500italic.woff2") format("woff2"),\n    url("./roboto-latin-500italic.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "700",
          src:
            'local("Roboto Bold "), local("Roboto-Bold"),\n    url("./roboto-latin-700.woff2") format("woff2"),\n    url("./roboto-latin-700.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "italic",
          fontDisplay: "swap",
          fontWeight: "700",
          src:
            'local("Roboto Bold italic"), local("Roboto-Bolditalic"),\n    url("./roboto-latin-700italic.woff2") format("woff2"),\n    url("./roboto-latin-700italic.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "900",
          src:
            'local("Roboto Black "), local("Roboto-Black"),\n    url("./roboto-latin-900.woff2") format("woff2"),\n    url("./roboto-latin-900.woff") format("woff")',
        },
        {
          fontFamily: '"Roboto"',
          fontStyle: "italic",
          fontDisplay: "swap",
          fontWeight: "900",
          src:
            'local("Roboto Black italic"), local("Roboto-Blackitalic"),\n    url("./roboto-latin-900italic.woff2") format("woff2"),\n    url("./roboto-latin-900italic.woff") format("woff")',
        },
      ],
    },
  }));

  return typographyStyles as any;
}

export function CssTypography() {
  useTypographyStyles();
  return null;
}
