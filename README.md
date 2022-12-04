# IconFontCppHeadersAndLuaTables

Something similar to https://github.com/juliettef/IconFontCppHeaders

C++ headers and Lua tables for:
- [FontAwesome4](https://github.com/FortAwesome/Font-Awesome/blob/4.x/fonts/)
- [Material Design Icons](https://github.com/Templarian/MaterialDesign)

> **Note**
>
> Only works on LuaJIT, Lua 5.3 and above.

## Generate
`npm run build [FA4 | MD]`

```sh
npm install
npm run build
```

Output files are located in folders prefixed with `Font`.

## Usage

### lua 
Copy the lua file to your project.

```lua
IconGlyphs = require("FontAwesome4")
local stringWithIcon = "Search" .. IconGlyphs.Search
```

### cpp
Same usage as https://github.com/juliettef/IconFontCppHeaders

## Lua Type defines

To use with VSCode [sumneko.lua](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) extension:

https://github.com/sumneko/lua-language-server/wiki/Libraries#custom