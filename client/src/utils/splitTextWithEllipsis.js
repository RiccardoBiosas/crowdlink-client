const splitTextWithEllipsis = (txt, displayChars) => {
  if (!displayChars) {
    const indexHalfSplit = Math.floor(txt.length / 2);
    const textFirstHalf = txt.slice(0, indexHalfSplit);
    const textSecondHalf = txt.slice(indexHalfSplit, txt.length);
    return textFirstHalf.concat('...').concat(textSecondHalf);
  }
  const textFirstPart = txt.slice(0, displayChars + 1);
  const textLastPart = txt.slice(txt.length - displayChars, txt.length);
  return textFirstPart.concat('...').concat(textLastPart);
};

export default splitTextWithEllipsis;
