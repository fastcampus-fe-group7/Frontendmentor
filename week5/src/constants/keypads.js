const optionSize = {
  size1: {
    width: "3rem",
    height: 1,
    font: '2rem',
  },
  size2: {
    width: "6.5rem",
    height: 1,
    font: '2rem',
  },
};

const buttonOptions = {
  number: {
    type: "number",
    size: {
      ...optionSize.size1,
    },
    color: {
      text: "black",
      background: "--numkey-background",
      boxShadow: "0 2px",
      boxShadowColor: "--numkey-shadow",
    },
  },
  symbol: {
    type: "symbol",
    size: {
      ...optionSize.size1,
    },
    fontSize: "1rem",
    color: {
      font: "white",
      background: "--key-background",
      boxShadow: "0 2px",
      boxShadowColor: "--key-shadow",
    },
  },
};

const keypads = {
  keys: [
    { key: "7", ...buttonOptions.number, },
    { key: "8", ...buttonOptions.number, },
    { key: "9", ...buttonOptions.number, },
    { key: "/", ...buttonOptions.symbol, },
    
    { key: "4", ...buttonOptions.number, },
    { key: "5", ...buttonOptions.number, },
    { key: "6", ...buttonOptions.number, },
    { key: "*", ...buttonOptions.symbol, },
    
    { key: "1", ...buttonOptions.number, },
    { key: "2", ...buttonOptions.number, },
    { key: "3", ...buttonOptions.number, },
    { key: "-", ...buttonOptions.symbol, },

    { key: "0", ...buttonOptions.number, size: optionSize.size2, },
    { key: ".", ...buttonOptions.symbol, },
    { key: "+", ...buttonOptions.symbol, },

    { key: "RESET", ...buttonOptions.symbol, size: {...optionSize.size2, font: '1rem'}, },
    { key: "=", ...buttonOptions.symbol, size: optionSize.size2,
      color: {
        ...buttonOptions.symbol.color,
        background: "--equal-key-background",
        boxShadow: "0 2px",
        boxShadowColor: "--equal-key-shadow",
      },
    },
  ],
};

export default keypads;
