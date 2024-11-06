function getButtonStyling(styleType) {
  const primaryButtonStyling =
    "bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900";
  const secondaryButtonStyling =
    "bg-gray-200 border border-gray-400 hover:bg-gray-300 hover:border-gray-700";
  const warningButtonStyling =
    "bg-yellow-500 border border-yellow-700 hover:bg-yellow-700 hover:border-yellow-900";

  switch (styleType) {
    case "primary":
      return primaryButtonStyling;
    case "secondary":
      return secondaryButtonStyling;
    case "warning":
      return warningButtonStyling;
    default:
      return primaryButtonStyling;
  }
}
export default getButtonStyling;
