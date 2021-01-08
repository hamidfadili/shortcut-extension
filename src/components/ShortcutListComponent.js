/** @jsx createElement */
import createElement from "../create-element";
import ShortcutComponent from "./ShortcutComponent";

export default function (props = {}) {
  if (!props.shortcuts.length) {
    return <p>No shortcuts found!</p>;
  }
  return (
    <table>
      {props.shortcuts.map((shortcut) => (
        <ShortcutComponent shortcut={shortcut} />
      ))}
    </table>
  );
}
