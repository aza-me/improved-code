export const getShortText = (text?: string, length = 50, lastChars: string = '...'): string => {
  if (!text || !text.length) return '';

  return text.slice(0, length) + lastChars;
};
