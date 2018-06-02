/* Task 2 */

const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
/* Put your code here */
function monthNumber(s) {
  for (let i=0; i<months.length; i++) {
    if (months[i]==s) {
      return i+1;
    }
  }
}

function getDayToNewYear(d,m,y) {
  
  let inputDate = new Date(y,m,d);
  let newYear = new Date(y,12,31);
  
  return (newYear-inputDate)/(24*60*60*1000);

}

function main() {

  const d = +process.argv[2];
  const m = monthNumber(process.argv[3]);
  const y = +process.argv[4];
  
  process.stdout.write(String(getDayToNewYear(d,m,y)));
  
}

main();
