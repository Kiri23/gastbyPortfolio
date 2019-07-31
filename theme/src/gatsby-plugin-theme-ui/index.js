/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#232129",
    heading: "#232129",
    background: "#fff",
    primary: "#639",
    muted: "#535159",
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '"Avenir Next", Roboto, Helvetica, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  textStyles: {
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 3,
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "1.3",
      fontSize: 7,
    },
  },
  sizes: {
    container: 950,
  },
  space: [0, 8, 16, 32, 64, 128, 256],
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
    },
    h1: {
      variant: "textStyles.heading",
      fontSize: 6,
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    p: {
      variant: "textStyles.body",
    },
    a: {
      variant: "textStyles.body",
      color: "primary",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
