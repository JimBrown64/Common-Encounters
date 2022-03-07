const fractionConversion = (fraction)=>{
const gcd = (a, b) => {
  if (b < 0.0000001) return a;                
  return gcd(b, Math.floor(a % b));   
};

const length = fraction.toString().length - 2;
let denominator = Math.pow(10, length);
let numerator = fraction * denominator;

const divisor = gcd(numerator, denominator);  

numerator /= divisor;                        
denominator /= divisor;                       

if (denominator !== 1){
return `${Math.floor(numerator)}/${Math.floor(denominator)}`
}else{
  return fraction
}
}

export default fractionConversion