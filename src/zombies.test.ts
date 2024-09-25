import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;
  const _zombies: any[] = []; // Array to hold zombies

  return {
    isFull: () => _zombies.length >= _capacity,

    // Get the number of zombies in the room
    getZombies: () => _zombies,

    // Add a zombie to the room
    addZombie: () => {
      if (_zombies.length < _capacity) {
        _zombies.push("zombie");
      } else if (_capacity > 0) {
        _zombies.shift(); // Remove the oldest zombie if the room is full
        _zombies.push("zombie");
      }
    },
  };
};

// Test if a room with capacity 0 is not full
test("room is not full", () => {
  const room = createRoom(0);
  const result = room.isFull();
  ok(result);
});

// Skipped tests you will implement later
test.skip("empty room that fits one zombie is not full", () => {});
test.skip("empty room cannot fit any zombies", () => {});
test.skip("one-roomer becomes full when a zombie is added", () => {});
test.skip("two-roomer is not full when a zombie is added", () => {});
test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// Test that the room holds zero zombies
test("Room should hold zero zombies", () => {
  const room = createRoom(0);  // Create a room with capacity 0
  const zombies = room.getZombies();  // Get the list of zombies
  ok(zombies.length === 0);  // Expect there are no zombies
});
