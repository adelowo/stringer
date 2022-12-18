import { random } from "ksuid";
import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const value = await random();

  Clipboard.copy(value.string);

  showHUD(value.string);
}
