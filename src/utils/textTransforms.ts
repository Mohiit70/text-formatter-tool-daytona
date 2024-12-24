// Unicode ranges for different text styles
const unicodeRanges = {
    boldSerif: {
      upperStart: 0x1D400,
      lowerStart: 0x1D41A
    },
    boldSans: {
      upperStart: 0x1D5D4,
      lowerStart: 0x1D5EE
    },
    italicBold: {
      upperStart: 0x1D468,
      lowerStart: 0x1D482
    },
    medieval: {
      upperStart: 0x1D504,
      lowerStart: 0x1D51E
    },
    doubleStruck: {
      upperStart: 0x1D538,
      lowerStart: 0x1D552
    }
  };
  
  function transformChar(char: string, upperStart: number, lowerStart: number): string {
    const code = char.charCodeAt(0);
    
    if (code >= 65 && code <= 90) { // Uppercase A-Z
      return String.fromCodePoint(upperStart + (code - 65));
    }
    
    if (code >= 97 && code <= 122) { // Lowercase a-z
      return String.fromCodePoint(lowerStart + (code - 97));
    }
    
    return char;
  }
  
  export const transformText = {
    boldSerif: (text: string) => 
      text.split('').map(char => 
        transformChar(char, unicodeRanges.boldSerif.upperStart, unicodeRanges.boldSerif.lowerStart)
      ).join(''),
      
    boldSans: (text: string) => 
      text.split('').map(char => 
        transformChar(char, unicodeRanges.boldSans.upperStart, unicodeRanges.boldSans.lowerStart)
      ).join(''),
      
    italicBold: (text: string) => 
      text.split('').map(char => 
        transformChar(char, unicodeRanges.italicBold.upperStart, unicodeRanges.italicBold.lowerStart)
      ).join(''),
      
    medieval: (text: string) => 
      text.split('').map(char => 
        transformChar(char, unicodeRanges.medieval.upperStart, unicodeRanges.medieval.lowerStart)
      ).join(''),
      
    doubleStruck: (text: string) => 
      text.split('').map(char => 
        transformChar(char, unicodeRanges.doubleStruck.upperStart, unicodeRanges.doubleStruck.lowerStart)
      ).join('')
  };