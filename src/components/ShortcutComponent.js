/** @jsx createElement */
import createElement from "../create-element";

export default function (props = {}) {
  let { shortcut = {} } = props;
  return (
    <tr>
      <td>
        <input value={shortcut.keys} type="text" />
      </td>
      <td>
        <select name="type">
          <option selected={shortcut.actionType == "click"} value="click">
            Click
          </option>
          <option selected={shortcut.actionType == "focus"} value="focus">
            Focus
          </option>
          <option
            selected={shortcut.actionType == "open-link"}
            value="open-link"
          >
            Open link
          </option>
        </select>
      </td>
      <td>
        {shortcut.actionType == "open-link" ? (
          <input type="text" value={shortcut.target} />
        ) : (
          <span>{shortcut.target}</span>
        )}
      </td>
    </tr>
  );
}
