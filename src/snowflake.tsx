import { Sonyflake } from "sonyflake";
import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const sonyflake = new Sonyflake({
    machineId: 2,
    epoch: Date.UTC(2020, 4, 18, 0, 0, 0), // timestamp
  });

  const value = await sonyflake.nextId();

  Clipboard.copy(value);

  showHUD(value);
}
