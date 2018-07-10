const CSSAsset = require("parcel-bundler/src/assets/CSSAsset");
const purify = require("purifycss")

class PurifiedCssAsset extends CSSAsset {
  async load() {
    const extensions = [ "html", "js", "jsx", "vue" ];
    const content = extensions.map(ext => `${ this.options.rootDir }/**/*.${ ext }`);
    const source = await super.load();
    return await new Promise(r => purify(content, source, r));
  }
}

module.exports = PurifiedCssAsset;