const roomDimensions = {
  width: 50,
  length: 100,
  getArea: function () {
    return this.width * this.length;
  },
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Testing the bound function (You can remove this part in your final file)
console.log(boundGetArea()); // Should display 5000
