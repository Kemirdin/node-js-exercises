var turan = {
  printFirstName: function () {
    console.log ('My name is Turan');
    console.log (this === turan);
  },
};
turan.printFirstName ();

//The default calling content is global
function doSomthingWorthless () {
  console.log ('\nI am worthless');
  console.log (this === global);
}
doSomthingWorthless ();
