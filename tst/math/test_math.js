import chai from "chai";
import { add, comp, manhattan, mult, sub } from "../../src/utils/math.js";

describe("complex", () => {
  describe("comp", () => {
    it("basic", () => {
      chai.assert.deepEqual(comp(4, 2), [4, 2]);
    });
  });

  describe("add", () => {
    it("basic", () => {
      chai.assert.deepEqual(add([0, 1], [2, 0]), [2, 1]);
    });
  });

  describe("sub", () => {
    it("basic", () => {
      chai.assert.deepEqual(sub([0, 1], [2, 0]), [-2, 1]);
    });
  });

  describe("mult", () => {
    it("eastward", () => {
      chai.assert.deepEqual(mult([1, 0], [0, 1]), [0, 1]);
    });

    it("southward", () => {
      chai.assert.deepEqual(mult([0, 1], [0, 1]), [-1, 0]);
    });

    it("westward", () => {
      chai.assert.deepEqual(mult([-1, 0], [0, 1]), [-0, -1]);
    });

    it("northward", () => {
      chai.assert.deepEqual(mult([0, -1], [0, 1]), [1, 0]);
    });
  });
});

describe("manhattan", () => {
  it("first quadrant", () => {
    chai.assert.equal(manhattan([5, 3]), 8);
  });

  it("second quadrant", () => {
    chai.assert.equal(manhattan([5, -3]), 8);
  });

  it("third quadrant", () => {
    chai.assert.equal(manhattan([-5, -3]), 8);
  });

  it("fourth quadrant", () => {
    chai.assert.equal(manhattan([-5, 3]), 8);
  });

  it("non default", () => {
    chai.assert.equal(manhattan([5, 3], [1, 1]), 6);
  });
});
