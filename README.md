# Automatización de la web de venta de billetes de Iberia

## Instalación de dependencias

Se puede realizar mediante `npm ci`

A parte de las dependencias básicas de _Cypress_ y _cypress-cucumber-preprocessor_ se han empleado las siguientes:
- @deepakvishwakarma/cucumber-json-formatter: wrapper para evitar la necesidad de instalar cucumber-json-formatter para la generación del reporte en formato cucumber json
- luxon: para la gestión de fechas
- rimraf: utilidad multiplataforma para elimincaión de ficheros/directorios

## Ejecución

El escenario se puede ejecutar mediante `npm test`, por defecto se ejecutará en Chrome en modo _headded_

## Reporte

En la carpeta `report` se pueden encontrar los siguientes reportes:
- cucumber-report.html: resultados en formato html
- cucumber-report.json: resultados en formato cucumber json, válidos para su importación en herramientas de terceros (ej: XRay)
- cucumber-messages.ndjson: fichero de mensajes de cucumber
- videos: directorio con el vídeo de la ejecución
- screenshots: directorio con capturas de pantalla en caso de error en el escenario
