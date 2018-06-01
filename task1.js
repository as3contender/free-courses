/* Task 1 */

function main() {

  const i = +process.argv[2];
  const a = +process.argv[3];
  const b = +process.argv[4];

  if (i == 0) {
    process.stdout.write(String(0));
    return
  }

  if (a == b) {
    process.stdout.write(String(i));
    return
  }

  let r = xToDec(a,i);
  let t = decToX(b,r);
  process.stdout.write(String(t))
}


function xToDec(x,n) {

  if (x == 10) {
    return n;
  }

  let r = 0;
  if (n >= 10000) {
    q = Math.floor(n/10000);
    n = n-q*10000;
    r += q * Math.pow(x, 4);
  }
  if (n >= 1000) {
    q = Math.floor(n/1000);
    n = n-q*1000;
    r += q * Math.pow(x, 3);
  }
  if (n >= 100) {
    q = Math.floor(n/100);
    n = n-q*100;
    r += q * Math.pow(x, 2);
  }
  if (n >= 10) {
    q = Math.floor(n/10);
    n = n-q*10;
    r += q * Math.pow(x, 1);
  }
  r += n
  return r

}

function decToX(x,n) {

  let s = "";

  return f(n,x,s)
}

function f(a,b,s) {

  if (a < b) {return sy(a);}

  let i = Math.floor(a / b); 
  let j = sy(a%b);

    s += f(i,b,s);

  return s+j;
}

function sy(i) {

  if (i > 9) {
    i = String.fromCharCode(96+i-9)
  }
  return i

}

main()
