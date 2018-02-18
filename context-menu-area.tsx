import React = require("react");
import { remote } from "electron";
const { Menu } = remote;

export interface ContextMenuAreaProps {
  menuItems: Electron.MenuItemConstructorOptions[];
  style?: any;
}

export class ContextMenuArea extends React.Component<ContextMenuAreaProps> {
  private _menu = new Menu();
  private _rootElement: HTMLDivElement | null = null;

  componentDidMount() {
    this._menu = Menu.buildFromTemplate(this.props.menuItems);

    this._rootElement!.addEventListener(
      "contextmenu",
      e => {
        e.preventDefault();
        //self._rightClickPosition = { x: e.x, y: e.y };
        this._menu.popup(remote.getCurrentWindow());
      },
      false
    );
  }

  render() {
    return (
      <div style={{ ...this.props.style }} ref={ref => (this._rootElement = ref)}>
        {this.props.children}
      </div>
    );
  }
}

export default ContextMenuArea;
