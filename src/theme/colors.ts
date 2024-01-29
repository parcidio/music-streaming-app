// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#d4d4d4",
  neutral400: "#a3a3a3",
  neutral500: "#737373",
  neutral600: "#52525b",
  neutral700: "#404040",
  neutral800: "#262626",
  neutral900: "#000000",

  primary100: "#FFD6CE",
  primary200: "#FFA39C",
  primary300: "#FF6C6F",
  primary400: "#FF475D",
  primary500: "#FF0A3F",
  primary600: "#DB0749",
  primary700: "#B7054D",
  primary800: "#93034C",
  primary900: "#7A014A",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  success100: "#EEFDD7",
  success200: "#D8FCAF",
  success300: "#BBF887",
  success400: "#9EF268",
  success500: "#73EA38",
  success600: "#53C928",
  success700: "#38A81C",
  success800: "#228711",
  success900: "#12700A",

  info100: "#CBF9FE",
  info200: "#98EEFE",
  info300: "#65DBFD",
  info400: "#3EC5FB",
  info500: "#00A2F9",
  info600: "#007DD6",
  info700: "#005EB3",
  info800: "#004290",
  info900: "#002F77",

  warning100: "#FFFCCF",
  warning200: "#FFF99F",
  warning300: "#FFF570",
  warning400: "#FFF14C",
  warning500: "#FFEB11",
  warning600: "#DBC80C",
  warning700: "#B7A508",
  warning800: "#938405",
  warning900: "#7A6C03",

  danger100: "#FFD8D7",
  danger200: "#FFB0B5",
  danger300: "#FF889C",
  danger400: "#FF6B92",
  danger500: "#FF3A82",
  danger600: "#DB2A7C",
  danger700: "#B71D74",
  danger800: "#931268",
  danger900: "#7A0B5F",

  redalternative: "#DA324B"
}

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral100,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral900,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
