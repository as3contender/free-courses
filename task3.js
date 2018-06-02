/* Task 3 */

function getType(t) {

  /*
  type 0 = {1}
  type 1 = {2-4}
  type 2 = {5-20}
  */
  
  let k = 0;
  
  if (t>10) {
    t = t%100;
  } else {
    t = t;
  }
  if ((t>10) && (t<20)) {
    return 2;
  } else {
    t = t%10;
    if (t == 1) {
      return 0
    } else if ((t >= 2) && (t <=4)) {
      return 1
    } else {
      return 2
    }
  }
}

function getHours(h) {

  if (h == 0) {return ''}
  
  let t = ['','а','ов'];
  
  return String(h)+ ' час' + t[getType(h)] + ' ';

}

function getMinutes(m) {
  
  if (m == 0) {return ''}
  
  let t = ['а','ы',''];
  
  return String(m) + ' минут' + t[getType(m)] + ' ';
  
}

function getSeconds(s) {
  
  if (s == 0) {return ''}
  
  let t = ['а','ы',''];
  
  return String(s) + ' секунд' + t[getType(s)] + ' '; 
  
}

function getSum(t1, t2) {

  let st = t1+t2;
  
  let h = Math.floor(st/3600);
  let m = Math.floor((st-h*3600)/60);
  let s = Math.floor(st-h*3600-m*60);
  
  return  getHours(h)+getMinutes(m)+getSeconds(s)+'\b';
  
}

function main() {

  const t1 = +process.argv[2];
  const t2 = +process.argv[3];
  
  process.stdout.write(getSum(t1,t2));
  
}

main();
