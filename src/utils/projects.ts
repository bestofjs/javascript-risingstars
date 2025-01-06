/**
 * Return the relative URL of the project's SVG logo, taking into account the color mode
 * E.g. `/logos/react.dark.svg` for dark mode or `/logos/parcel.svg` for light mode
 */
export function getProjectCustomLogoURL(
  filename: string,
  colorMode?: "light" | "dark",
) {
  const [main, extension] = filename.split(".");
  const actualFilename =
    colorMode === "dark" ? `${main}.dark.${extension}` : filename;
  return `https://bestofjs.org/logos/${actualFilename}`;
}
