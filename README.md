# dotenv management

Este ejemplo proporciona una guía clara sobre cómo configurar y ejecutar tu aplicación en diferentes entornos.

## Configuración del Entorno

Este proyecto utiliza `dotenv` para la gestión de variables de entorno. Dependiendo de tu entorno de ejecución, sigue las instrucciones a continuación para configurar y ejecutar la aplicación.

### Archivos `.env`

Antes de comenzar, asegúrate de tener los siguientes archivos en el directorio raíz del proyecto:

- `.env`: Contiene las configuraciones por defecto y globales para todos los entornos.
- `.env.development`: Configuraciones específicas para el entorno de desarrollo.
- `.env.production`: Configuraciones específicas para el entorno de producción.

### Cargando el Ambiente en Linux

Para cargar el ambiente en Linux, usa el siguiente comando en la terminal, reemplazando `[ENVIRONMENT]` con `development` o `production` según sea necesario:

```bash
export NODE_ENV=[ENVIRONMENT]
node index.js
```

### Cargando el Ambiente en PowerShell

Para cargar el ambiente usando la consola de Powershell, usa el siguiente comando en la terminal, reemplazando `[ENVIRONMENT]` con `development` o `production` según sea necesario:

```ps
$env:NODE_ENV="[ENVIRONMENT]"
node index.js
```

### Cargando el ambiente en CMD

Mismo efecto anterior pero para CMD

```cmd
set NODE_ENV=[ENVIRONMENT]
node index.js
```