export const formatJson = (jsonString: string): string => {
  try {
    const jsonObject = JSON.parse(jsonString);
    const formattedJson = JSON.stringify(jsonObject, null, 2);

    const withoutBraces = formattedJson.slice(1, formattedJson.length - 1);
    const unquotedKeys = withoutBraces.replace(/"([^"]+)":/g, "$1:");

    return unquotedKeys;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return jsonString;
  }
};
