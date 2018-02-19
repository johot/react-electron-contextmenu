# React-electron-contextmenu
Makes it super easy to create context menus in your React powered Electron apps. TypeScript supported!

## Usage

Import the component:
```tsx
import ContextMenuArea from "react-electron-contextmenu";
```

Use in render method:
```tsx

    const menuItems = [
      {
        label: "A menu item",
        submenu: [
          { label: "Submenu item", click: () => alert("I was clicked!") },
          { label: "Submenu item #2", click: () => alert("I was also clicked!") }
        ]
      },
      {
        label: "Another menu item",
        click: () => alert("I was clicked!")
      }
    ];

<ContextMenuArea menuItems={menuItems}>
    <div>Right click me to show a context menu!</div>
</ContextMenuArea>
```

React-electron-context menu uses the menu template format from electron, see more samples here:  
<https://electronjs.org/docs/api/menu>
