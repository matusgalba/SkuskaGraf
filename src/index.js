import "./styles.css";
var Graph = function() {
  this.storage = {};
  this.size = 0;
};
Graph.prototype.add = function(value) {
  this.storage[value] = {};
  this.size++;
};
Graph.prototype.addConnection = function(from, to) {
  this.storage[from][to] = true;
  this.storage[to][from] = true;
};

var myGrapf = new Graph();
myGrapf.add("a");
myGrapf.add("b");
myGrapf.add("c");
myGrapf.addConnection("a", "b");

if (myGrapf.storage["a"]["b"]) {
  console.log("yep");
} else {
  console.log("nope");
}
