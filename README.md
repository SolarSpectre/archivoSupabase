# Aplicación de Subida de Archivos con Supabase

Esta es una aplicación web desarrollada con Angular e Ionic que permite subir y gestionar archivos utilizando Supabase como backend.

## Características

- 📤 Subida de archivos a Supabase Storage
- 📋 Lista de archivos subidos
- 🔗 URLs públicas para acceder a los archivos
- 🎨 Interfaz de usuario moderna con Ionic
- 📱 Diseño responsive

## Tecnologías Utilizadas

- Angular 17
- Ionic Framework
- Supabase (Storage)
- TypeScript
- SCSS

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Cuenta en Supabase

## Configuración

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd [NOMBRE_DEL_DIRECTORIO]
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de Supabase:
   - Abre `src/app/supabase.client.ts`
   - Reemplaza los valores de `supabase_url` y `anon_key` con tus credenciales de Supabase

4. Crea un bucket en Supabase:
   - Ve al dashboard de Supabase
   - Navega a Storage
   - Crea un nuevo bucket llamado "files"
   - Configura las políticas de acceso según tus necesidades

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Uso

1. Abre la aplicación en tu navegador
2. Haz clic en "Seleccionar archivo" para elegir un archivo
3. Presiona "Subir archivo" para iniciar la carga
4. Los archivos subidos aparecerán en la lista
5. Haz clic en el icono de enlace para abrir el archivo en una nueva pestaña

## Capturas de Pantalla

[INSERTAR CAPTURAS DE PANTALLA AQUÍ]

## Estructura del Proyecto

```
src/
├── app/
│   ├── home/                 # Componente principal
│   │   ├── home.page.ts      # Lógica de subida de archivos
│   │   ├── home.page.html    # Template de la interfaz
│   │   └── home.page.scss    # Estilos
│   ├── supabase.client.ts    # Configuración de Supabase
│   └── ...
└── ...
```

## Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto

[TU_NOMBRE] - [TU_EMAIL]

Link del proyecto: [https://github.com/tu-usuario/tu-repositorio](https://github.com/tu-usuario/tu-repositorio) 