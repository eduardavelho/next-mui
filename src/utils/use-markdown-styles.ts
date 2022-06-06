import { makeStyles } from "@material-ui/core/styles";

export const useMarkdownStyles: () => { markdown: string } = makeStyles(
  (theme) => ({
    markdown: {
      overflowY: "auto",
      "& > p:first-child": {
        marginTop: 0,
      },
      "& > p:last-child": {
        marginBottom: 0,
      },
      "& p": {
        fontSize: "1.2rem",
        fontFamily: "Roboto Slab",
        lineHeight: 1.8,
        margin: `${theme.spacing(2)} 0`,
      },
      "& h1, & h2": {
        fontSize: "2.2rem",
        margin: `${theme.spacing(2.5)} 0`,
      },
      "& h3, & h4, & h5, & h6": {
        fontSize: "1.8rem",
        margin: `${theme.spacing(2)} 0`,
      },
      "& li": {
        margin: `${theme.spacing(1.5)} 0`,
      },
      "& li, & dt, & dd": {
        fontSize: "1.2rem",
        fontFamily: "Roboto Slab",
        lineHeight: 1.4,
      },
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
      "& a:hover": {
        textDecoration: "underline",
      },
      "& caption, & figcaption": {
        margin: `${theme.spacing(1)} 0`,
        fontSize: theme.spacing(2),
      },
      "& blockquote": {
        fontStyle: "italic",
      },
      "& blockquote p": {
        fontSize: "1rem",
        fontFamily: "Roboto Slab",
        lineHeight: 2.4,
        borderLeftWidth: "4px",
        borderLeftColor: theme.palette.common.black,
        borderLeftStyle: "solid",
        paddingLeft: theme.spacing(1.8),
        marginLeft: `-${theme.spacing(2)}`,
      },
      "& figure": {
        marginLeft: 0,
        marginRight: 0,
        textAlign: "center",
      },
      "& img": {
        maxWidth: "100%",
        display: "block",
        margin: `${theme.spacing(1.5)} auto`,
        borderRadius: "4px",
      },
      "& iframe": {
        maxWidth: "100%",
        display: "block",
        margin: `${theme.spacing(1.5)} auto`,
        borderRadius: "4px",
      },
      "& table": {
        fontSize: "1.2rem",
        border: "1px solid #ccc",
        borderCollapse: "collapse",
        margin: 0,
        padding: 0,
        width: "100%",
      },
      "& table tr": {
        border: "1px solid #ddd",
        padding: theme.spacing(0.8),
      },
      "& table th, & table td": {
        padding: theme.spacing(1.2),
        textAlign: "center",
      },
      "& table th": {
        backgroundColor: "#f5f7fa",
        fontSize: "0.8rem",
        letterSpacing: "1px",
        textTransform: "uppercase",
      },
      "& pre code .hljs": {
        display: "block",
        overflowX: "auto",
        padding: "1em",
      },
      "& code .hljs": {
        padding: "3px 5px",
      },
      "& pre": {
        borderRadius: "4px",
        padding: "1em",
        overflow: "auto",
        maxHeight: "60vh",
        background: "#272822",
        counterReset: "line",
      },
      "& .hljs-line:before": {
        counterIncrement: "line",
        content: "counter(line)",
        display: "inline-block",
        marginRight: "1ch",
        color: "#75715e",
        textAlign: "right",
        width: "2ch",
      },
      "& .hljs-attribute, & .hljs-doctag, & .hljs-keyword, & .hljs-meta .hljs-keyword, & .hljs-name, & .hljs-selector-tag": {
        fontWeight: "700",
      },
      "& .hljs-section, & .hljs-title": {
        fontWeight: "700",
      },
      "& .hljs-emphasis": {
        fontStyle: "italic",
      },
      "& .hljs-strong": {
        fontWeight: "700",
      },
      "& .hljs": {
        color: "#ddd",
      },
      "& .hljs-tag, & .hljs-keyword, & .hljs-selector-tag, & .hljs-literal, & .hljs-strong, & .hljs-name": {
        color: "#f92672",
      },
      "& .hljs-code": {
        color: "#66d9ef",
      },
      "& .hljs-attribute, & .hljs-symbol, & .hljs-regexp, & .hljs-link": {
        color: "#bf79db",
      },
      "& .hljs-string, & .hljs-bullet, & .hljs-subst, & .hljs-title, & .hljs-section, & .hljs-emphasis, & .hljs-type, & .hljs-built_in, & .hljs-selector-attr, & .hljs-selector-pseudo, & .hljs-addition, & .hljs-variable, & .hljs-template-tag, & .hljs-template-variable": {
        color: "#a6e22e",
      },
      "& .hljs-title.class_, & .hljs-class .hljs-title": {
        color: "white",
      },
      "& .hljs-comment, & .hljs-quote, & .hljs-deletion, & .hljs-meta": {
        color: "#75715e",
      },
      "& .hljs-keyword, & .hljs-selector-tag, & .hljs-literal, & .hljs-doctag, & .hljs-title, & .hljs-section, & .hljs-type, & .hljs-selector-id": {
        fontWeight: "bold",
      },
      "@media screen and (max-width: 960px)": {
        "& h1, & h2": {
          fontSize: "1.8rem",
          margin: `${theme.spacing(2)} 0`,
        },
      },
    },
  })
);
