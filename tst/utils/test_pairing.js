import chai from "chai";
import { pair, unpair } from "../../src/utils/pairing.js";

describe("pairing", () => {
  it("first quadrant", () => {
    for (let expectedX = 1; expectedX <= 10; expectedX++) {
      for (let expectedY = 1; expectedY <= 10; expectedY++) {
        const z = pair(expectedX, expectedY);
        const [actualX, actualY] = unpair(z);
        chai.expect(expectedX).to.equal(actualX);
        chai.expect(expectedY).to.equal(actualY);
      }
    }
  });

  it("second quadrant", () => {
    for (let expectedX = -10; expectedX <= -1; expectedX++) {
      for (let expectedY = 1; expectedY <= 10; expectedY++) {
        const z = pair(expectedX, expectedY);
        const [actualX, actualY] = unpair(z);
        chai.expect(expectedX).to.equal(actualX);
        chai.expect(expectedY).to.equal(actualY);
      }
    }
  });

  it("third quadrant", () => {
    for (let expectedX = -10; expectedX <= -1; expectedX++) {
      for (let expectedY = -1; expectedY <= -10; expectedY++) {
        const z = pair(expectedX, expectedY);
        const [actualX, actualY] = unpair(z);
        chai.expect(expectedX).to.equal(actualX);
        chai.expect(expectedY).to.equal(actualY);
      }
    }
  });

  it("fourth quadrant", () => {
    for (let expectedX = 1; expectedX <= 10; expectedX++) {
      for (let expectedY = -1; expectedY <= -10; expectedY++) {
        const z = pair(expectedX, expectedY);
        const [actualX, actualY] = unpair(z);
        chai.expect(expectedX).to.equal(actualX);
        chai.expect(expectedY).to.equal(actualY);
      }
    }
  });

  it("x axis", () => {
    for (let expectedX = -10; expectedX <= 10; expectedX++) {
      const z = pair(expectedX, 0);
      const [actualX, actualY] = unpair(z);
      chai.expect(expectedX).to.equal(actualX);
      chai.expect(0).to.equal(actualY);
    }
  });

  it("y axis", () => {
    for (let expectedY = -10; expectedY <= 10; expectedY++) {
      const z = pair(0, expectedY);
      const [actualX, actualY] = unpair(z);
      chai.expect(0).to.equal(actualX);
      chai.expect(expectedY).to.equal(actualY);
    }
  });
});
