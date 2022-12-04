const fontAwesome4 = require("./fonts/fontAwesome4")
const materialDesignIcons = require("./fonts/materialDesignIcons")
const Args = process.argv.slice(2);

async function main(Args) {
  if (Args[0] === "FA4")
  {
    const font = new fontAwesome4();
    await font.generateFile();
  }
  else if (Args[0] === "MD")
  {
    const font = new fontAwesome4();
    await font.generateFile();
  }
  else {
    const fonts = [fontAwesome4, materialDesignIcons]
    for (const iconFont of fonts) {
      const font = new iconFont();
      await font.generateFile();
    }
  }
}

main(Args);
