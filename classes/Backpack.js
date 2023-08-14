//classes work as a template for an object type

class Backpack {
  constructor(
    //defining properties
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    //initializing the properties
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLengthL = strapLengthL;
    this.strapLengthR = strapLengthR;
    this.lidOpen = lidOpen;
  }
}

export default Backpack;
