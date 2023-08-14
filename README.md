# javascrip_learning

### objects

example: belows is an example of a javascrip object
which contains object properties and methods

```
const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "black",
    pocketNum: 15,
    strapLength:{
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus){
        this.lidOpen = lidStatus
    },

    newStrapLength: function(lengthLeft, lengthRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
};

```

### Containers
