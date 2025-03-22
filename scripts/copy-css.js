const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

// Ruta de origen y destino
const srcPath = path.join(__dirname, '../src/components');
const distPath = path.join(__dirname, '../dist/components');

// Función para crear directorios si no existen
const createDirectoryIfNotExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Copiar los archivos .module.css
fs.readdir(srcPath, (err, folders) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  folders.forEach((folder) => {
    const componentPath = path.join(srcPath, folder);
    const distComponentPath = path.join(distPath, folder);

    // Verificamos si el componente tiene archivos .module.css
    fs.readdir(componentPath, (err, files) => {
      if (err) {
        console.error('Error al leer los archivos del componente:', err);
        return;
      }

      files.forEach((file) => {
        if (file.endsWith('.module.css')) {
          // Creamos la carpeta correspondiente en dist si no existe
          createDirectoryIfNotExists(distComponentPath);

          // Copiar el archivo .module.css a la carpeta correcta
          ncp(path.join(componentPath, file), path.join(distComponentPath, file), (err) => {
            if (err) {
              console.error('Error al copiar el archivo CSS:', err);
            } else {
              console.log(`Archivo CSS copiado con éxito a ${distComponentPath}`);
            }
          });
        }
      });
    });
  });
});
