Aplicación API REST de pila completa en AWS
El desafío
Primera parte: Backend sin servidor
Cree una API REST de Serverless Framework con AWS API Gateway que admita la funcionalidad CRUD (crear, leer, actualizar, eliminar) *no utilice la integración del proxy de servicio directamente a DynamoDB desde API Gateway
Utilice la canalización CI/CD de GitHub Actions, AWS CodePipeline o Serverless Pro CI/CD para gestionar las implementaciones.
Puede tomar capturas de pantalla de la configuración de CI/CD e incluirlas en el archivo README.
La CI/CD debe activar una implementación basada en un push git a la rama maestra que pasa por ella e implementa la API REST de Serverless Framework de backend y cualquier otro recurso, por ejemplo, las tablas de DynamoDB.
Segunda parte: React Frontend
Cree una aplicación frontend en React que se conecte a la aplicación backend sin servidor. La aplicación React debe usar las cuatro funciones CRUD.
La interfaz debe ser visualmente atractiva y utilizar un diseño web moderno. Utilice una biblioteca CSS de uso común en lugar de usar su propio CSS personalizado.
La aplicación debe seguir un diseño web adaptable para al menos cuatro tamaños de dispositivos diferentes.
La implementación de la aplicación React depende de usted. Al finalizar, proporcione la URL de entrada de la aplicación React.
Requisitos
1.	Todo el código de la aplicación debe estar escrito en Javascript. Typescript también es aceptable. La aplicación backend está escrita en Node.js y la aplicación frontend en React.
2.	La infraestructura backend de AWS debe automatizarse con IAC mediante Serverless Framework
3.	La API REST de API Gateway debe almacenar datos en DynamoDB
4.	Debe haber 4-5 lambdas que incluyan la siguiente funcionalidad CRUD (Crear, Leer, Actualizar, Eliminar) *no utilice la integración del proxy de servicio directamente a DynamoDB desde API Gateway
5.	Construya la canalización CI/CD para soportar implementaciones de múltiples etapas, por ejemplo, desarrollo, producción
6.	La plantilla debe estar completamente funcional y documentada.
7.	Un repositorio público de GitHub debe compartirse con confirmaciones frecuentes
8.	Se debe grabar un video ( www.loom.com ) de usted hablando sobre el código de la aplicación, IAC y cualquier área adicional que desee resaltar en su solución para demostrar habilidades adicionales.
