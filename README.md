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


LINK VIDEO 

prueba lochttps://www.loom.com/share/64326613dd7746db9fe09166dae730d7al de la app

<img width="1823" height="952" alt="image" src="https://github.com/user-attachments/assets/8a5bbdb3-8a53-47ec-912f-07b850427833" />



CI/CD 
CLONADO REPOSITORIO
Se uso los comandos de git como init, branch, remote, push para colocar proyecto en repositorio se adjunta imagenens.

<img width="902" height="942" alt="Captura de pantalla 2025-10-21 083506colocacionarchivosgithubconadd" src="https://github.com/user-
  attachments/assets/49ef4e32-0da3-4126-a519-b052e3209305" />
  <img width="812" height="940" alt="Captura de pantalla 2025-10-21 084921creacionarchivosrepositorio" src="https://github.com/user-attachments/assets/fc941a36-91ae-4521-aa8c-1dbed0a9f995" />


<img width="370" height="832" alt="image" src="https://github.com/user-attachments/assets/923813a2-ceaf-4c8a-932f-6e0f64ec0cc0" />

Se desplegó serverless usando framework  y node.js.stage-dev, stage-prod

<img width="1211" height="208" alt="Captura de pantalla 2025-10-13 222519stagedev" src="https://github.com/user-attachments/assets/85527589-0c9a-4e61-87ae-e5fe7aa46973" />

<img width="1221" height="596" alt="Captura de pantalla 2025-10-18 191746stagedev2" src="https://github.com/user-attachments/assets/580bae16-3b7e-4088-a728-39be7c1993ae" />


<img width="1217" height="222" alt="Captura de pantalla 2025-10-13 222426deplostageprod" src="https://github.com/user-attachments/assets/3f8a1d61-a045-4e14-8935-3505dde242ae" />

<img width="1082" height="162" alt="Captura de pantalla 2025-10-13 210543depliegestagedev" src="https://github.com/user-attachments/assets/f1ba64e1-9bfa-4a4a-b8c9-c02c57535d8a" />

en warehouse-frontend
se configuro vite 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

esling.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

  Se implementa localmente la app que consiste en un inventario de almacen Maranatha al implementar el serverless es decir sin servidor se obtiene en la plataforma de aws:
  
CLOUD FORMATION EN PLATAFORMA AWS

<img width="1807" height="602" alt="Captura de pantalla 2025-10-21 081458cloudformation" src="https://github.com/user-attachments/assets/ac9e1043-2089-4638-8a6b-388fba7f6d3a" />

  FUNCION LAMBDA
  <img width="1883" height="691" alt="Captura de pantalla 2025-10-21 080811funcionlambdawarehouse-api-dev" src="https://github.com/user-attachments/assets/43a07ca5-4fb2-4321-b268-8a6d71f1e51d" />

  
  <img width="1482" height="760" alt="Captura de pantalla 2025-10-21 081303funcionlambda" src="https://github.com/user-attachments/assets/6f7063e1-231d-4216-8f21-a5dfc8a4f5ff" />
TALBLA WAREHOUSE

<img width="1842" height="827" alt="Captura de pantalla 2025-10-21 081718wharehousetabledinamo" src="https://github.com/user-attachments/assets/40368053-68f6-4019-a889-aa7ebd55ae92" />

 app implmentada en localhost
 
 <img width="1823" height="952" alt="image" src="https://github.com/user-attachments/assets/517e0aa1-4537-41ce-9b0d-5a66db0e7ad7" />

