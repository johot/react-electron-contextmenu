import React, { useState, useEffect, useCallback } from 'react';
import { remote } from 'electron';
const { Menu } = remote;

export interface ContextMenuAreaProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  menuItems: Electron.MenuItemConstructorOptions[];
}

export function ContextMenuArea(props: ContextMenuAreaProps) {
  const { menuItems, ...rest } = props;
  const [menu, setMenu] = useState(new Menu());

  useEffect(() => {
    setMenu(Menu.buildFromTemplate(menuItems));
  }, [menuItems]);

  const contextMenuCallback = useCallback((event: React.MouseEvent) => {
    menu?.popup();
  }, [menu]);

  return (
    <div {...rest} onContextMenu={contextMenuCallback} >
      {props.children}
    </div>
  );
}
