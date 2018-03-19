const firstname = 'Jane';

(function (lastname) {
  const firstname = 'John';
  console.log (firstname);
  console.log (lastname);
}) ('Doe');

console.log (firstname);
