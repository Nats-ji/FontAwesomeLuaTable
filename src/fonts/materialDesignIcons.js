const iconFont = require("../iconFont");

class fontMaterialDesignIcons extends iconFont {
  name = "Material Design Icons";
  acronym = "MD";
  outputFileName = "FontMaterialDesignIcons";
  metadataUrl =
    "https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/meta.json";
  fontFileUrl =
    "https://github.com/Templarian/MaterialDesign-Webfont/blob/master/fonts/materialdesignicons-webfont.ttf";
  metadataFormat = "json";

  sanitizeRawMetaData() {
    let min_codepoint = 0xfffff;
    let max_codepoint = 0x00000;
    for (const icon of this.metadataRaw) {
      this.icons.addIcon(icon.name, icon.codepoint, this.formatSearchString(icon));
      const current_codepoint = Number("0x" + icon.codepoint)
      if (current_codepoint > max_codepoint) max_codepoint = current_codepoint;
      if (current_codepoint < min_codepoint) min_codepoint = current_codepoint;
    }
    this.glyphRanges.min = "0x" + min_codepoint.toString(16);
    this.glyphRanges.max = "0x" + max_codepoint.toString(16);
  }

  formatSearchString(aIcon) {
    let str = `U+${aIcon.codepoint} ${aIcon.name}`;
    if (aIcon.hasOwnProperty("aliases") && Array.isArray(aIcon.aliases) && aIcon.aliases.length > 0)
      str += `, aliases: ${aIcon.aliases.join(", ")}`;
    if (aIcon.hasOwnProperty("tags") && Array.isArray(aIcon.tags) && aIcon.tags.length > 0)
      str += `, tags: ${aIcon.tags.join(", ")}`;
    return str;
  }
}

module.exports = fontMaterialDesignIcons;
