// Example: 883. Projection Area of 3D Shapes
// Folder name: 883-projection-area-of-3d-shapes
// File name: projection-area-of-3d-shapes.js

const transferFileName = n => {
  let folderName = n,
    fileName = n;

  folderName = folderName.replace(/\./, '').replace(/\s/g, '-').toLowerCase();
  console.log(folderName);

  fileName = folderName.replace(/\d+/, '').replace(/-/, '').concat('.js');
  console.log(fileName);
}


const name = '1476. Subrectangle Queries';
transferFileName(name);