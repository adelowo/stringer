import { ulid } from "ulid";
import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const value = ulid();

  Clipboard.copy(value);

  showHUD(value);
}
