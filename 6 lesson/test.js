function rand(from = 0, to = 10){
  return Math.floor(Math.random() * (to - from + 1) + from);
}

const statDefault = {
  minimal : 0,
  normal : 0,
  clever : 0,
  megamind : 0,
  sum : 0,
  count : 0,
  average : 0
};

const testArr = Array(100).fill(1).map(el => rand(100, 200));
const stat = testArr.reduce((st, el) => {
  if(el < 120){
      st.minimal++;
  }
  if(el >= 190){
      st.megamind++;
  }
  if(el >= 120 && el < 170){
      st.normal++;
  }
  
  if(el >= 170 && el < 190){
      st.clever++;
  }

  st.count++;
  st.sum += el;
  st.average = st.sum / st.count;

  return st;
  
}, statDefault);

console.log(stat);