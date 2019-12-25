import theme from "@staticfuse/gatsby-theme-publisher/src/theme/theme"

const publisherTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // text: "#2D3748",
    // primary: theme.colors.blue,
    // muted: "#999",
    // headings: "#2D3748",
     links: "#d85fb0",
     navLink: "#ffffff",
     headerBg: "#d85fb0"
  },
}


export default publisherTheme
