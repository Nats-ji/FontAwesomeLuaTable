const iconFont = require("../iconFont");

class fontAwesome4 extends iconFont {
  name = "Font Awesome 4";
  acronym = "FA";
  outputFileName = "FontAwesome4";
  metadataUrl =
    "https://github.com/FortAwesome/Font-Awesome/raw/4.x/src/icons.yml";
  fontFileUrl =
    "https://github.com/FortAwesome/Font-Awesome/blob/4.x/fonts/FontAwesome.otf";

  metadataFormat = "yaml";

  sanitizeRawMetaData() {
    let min_codepoint = 0xfffff;
    let max_codepoint = 0x00000;
    for (const icon of this.metadataRaw.icons) {
      this.icons.addIcon(icon.id, icon.unicode, this.formatSearchString(icon));
      const current_codepoint = Number("0x" + icon.unicode)
      if (current_codepoint > max_codepoint) max_codepoint = current_codepoint;
      if (current_codepoint < min_codepoint) min_codepoint = current_codepoint;
    }
    this.glyphRanges.min = "0x" + min_codepoint.toString(16);
    this.glyphRanges.max = "0x" + max_codepoint.toString(16);
  }

  formatSearchString(aIcon) {
    let str = `U+${aIcon.unicode} fa-${aIcon.id}`;
    if (aIcon.hasOwnProperty("aliases") && Array.isArray(aIcon.aliases) && aIcon.aliases.length > 0)
      str += `, aliases: fa-${aIcon.aliases.join(", fa-")}`;
    if (aIcon.hasOwnProperty("filter") && Array.isArray(aIcon.filter) && aIcon.filter.length > 0)
      str += `, filter: ${aIcon.filter.join(", ")}`;
    if (aIcon.hasOwnProperty("categories") && Array.isArray(aIcon.categories) && aIcon.categories.length > 0)
      str += `, categories: ${aIcon.categories.join(", ")}`;
    return str;
  }
}

module.exports = fontAwesome4;
