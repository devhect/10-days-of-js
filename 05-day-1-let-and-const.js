/* 
 * Read input using 'readLine()' and print output using 'console.log()'.
 * Print the area of the circle.
 * Print the perimeter of the circle.
 */
function main() {
  const PI = Math.PI;
  let r = readLine();
  let area = PI * Math.pow(r, 2);
  let perimeter = 2 * PI * r;
  console.log(area);
  console.log(perimeter);
};