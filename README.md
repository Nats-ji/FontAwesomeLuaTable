# IconFontCppHeadersAndLuaTables

Something similar to https://github.com/juliettef/IconFontCppHeaders

- A lua table for [FontAwesome4](https://github.com/FortAwesome/Font-Awesome/blob/4.x/fonts/). Works in LuaJIT, Lua 5.3 and above.
- A cpp header and a lua table for the community version [Material Design Icons](https://github.com/Templarian/MaterialDesign)

## Generate
`npm run build [FA4 | MD]`

```sh
npm install
npm run build
```

Output files are located at `lua/`.

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