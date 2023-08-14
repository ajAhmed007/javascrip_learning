//Creating a javascrip object

const backpack = {
  // const object cannot be modified
  //object propertied
  name: "Everyday Backpack",
  volume: 30,
  color: "black",
  pocketNum: 15,
  //nested object, using property value separator
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  //function property
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  //function property to change strapLength
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("This is the Backpack object", backpack);

//Accessing object properties:

//a) using the dot(.) notation
//accessing the pocketNum property of backpack
console.log("pocketNum property: ", backpack.pocketNum);
//accessing the left strapLength property of backpack
console.log("left strapLength property: ", backpack.strapLength.left);

//b) using bracket [] notation
//accessing the poketNum property of backpack
console.log("pocketNum property: ", backpack["pocketNum"]);
//backet notation allows us to do more things
//like outputing the pocketNum property as a variable value

//saving the value of pocketNum in the query varianle
var query = "pocketNum";
//using the query variable with the [] notation instead
console.log("pocketNum property: ", backpack[query]);

/*
also the [] notation is useful when the object perpery breaks
the property convension, like if it starts with a number, -, etc.
since with the [] you're dealing with a string that can contain
anything, it can be used with any kind of property. 
*/
