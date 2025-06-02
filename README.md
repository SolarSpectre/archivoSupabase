# Aplicación de Subida de Archivos con Supabase Joseph Caza

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
git clone https://github.com/SolarSpectre/archivoSupabase
cd archivoSupabase
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
   - Configura las políticas de acceso según tus necesidades: `CREATE POLICY "allow uploads" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'files');`

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:8100`

## Uso

1. Abre la aplicación en tu navegador
2. Haz clic en "Seleccionar archivo" para elegir un archivo
3. Presiona "Subir archivo" para iniciar la carga
4. Los archivos subidos aparecerán en la lista
5. Haz clic en el icono de enlace para abrir el archivo en una nueva pestaña

## Capturas de Pantalla

![Captura de pantalla 2025-06-02 115635](https://github.com/user-attachments/assets/64370999-ae5e-4712-906c-3d8857e3db25)![Captura de pantalla 2025-06-02 120029](https://github.com/user-attachments/assets/479aefff-19db-469a-ae2e-623f6108a749)

![Captura de pantalla 2025-06-02 120037](https://github.com/user-attachments/assets/7906b74f-7445-4f2e-84e2-88f81677262f)![Captura de pantalla 2025-06-02 121731](https://github.com/user-attachments/assets/9f32ae41-88c2-47f0-bfa1-c1687bcf644d)
