// src/custom.d.ts (o dentro de una carpeta 'types')
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
  }
  