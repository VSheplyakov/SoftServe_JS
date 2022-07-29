function calc(x) {
  
  const total1 = [...x].map((char) => char.charCodeAt()).join('');
  const total2 = total1.toString().replace(/7/g, 1);
  const t1 = [...total1].reduce((a,b) => Number(a)+Number(b))
  const t2 = [...total2].reduce((a,b) => Number(a)+Number(b))
  return t1 - t2
}


console.log(calc('abc'))
console.log(calc('abcdef'))
console.log(calc('ifkhchlhfd'))
