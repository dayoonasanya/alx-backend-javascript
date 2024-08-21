const Utils = {
  calculateNumber: function(type, a, b) {
    const aRounded = Math.round(a);
    const bRounded = Math.round(b);

    if (type === 'SUM') {
      return aRounded + bRounded;
    } else if (type === 'SUBTRACT') {
      return aRounded - bRounded;
    } else if (type === 'DIVIDE') {
      if (bRounded === 0) {
        return 'Error';
      }
      return aRounded / bRounded;
    }
  }
};

module.exports = Utils;
