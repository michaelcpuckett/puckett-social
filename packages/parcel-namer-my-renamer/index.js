const {Namer} = require('@parcel/plugin');
const path = require('path');

module.exports = new Namer({
  name({bundle}) {
    const filePath = bundle.getMainEntry().filePath;
    const originalFileName = path.basename(filePath);

    if (originalFileName.endsWith('.ts')) {
      const newFileName = originalFileName.replace(/\.ts$/, '.js');
      return './' + newFileName;
    }

    return './' + originalFileName;
  }
});
