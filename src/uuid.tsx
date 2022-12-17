import {v4 as uuidv4} from "uuid";
import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const value = uuidv4();

  Clipboard.copy(value);

  showHUD(value);
}
