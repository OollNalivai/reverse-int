module.exports = function reverse (n) {
    return (Math.sign(n) === 1 && n%10 !== 0)? +(`${n}`.split('').reverse().join('')) : +(`${Math.abs(n)}`.split('').reverse().join(''));
}
