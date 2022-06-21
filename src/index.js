module.exports = function reverse(n) {
    return +[...String(Math.abs(n))].reverse().join("");
};
