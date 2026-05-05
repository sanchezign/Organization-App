# Organization-App 📝

Aplicación web para la gestión de tareas, notas y organización personal. Desarrollada con React y siguiendo las mejores prácticas de diseño y arquitectura.

## 🚀 Características

- **Gestión de Notas y Tareas**: Crea, edita, elimina y organiza tus notas con prioridades y checklists.
- **Tableros Personalizados**: Organiza tus notas en diferentes tableros temáticos.
- **Calendario Integrado**: Visualiza tus tareas y notas organizadas por fecha con una interfaz intuitiva.
- **Modo Oscuro/Claro**: Soporte completo para múltiples temas visuales gracias a DaisyUI.
- **Diseño Responsive**: Interfaz adaptada para funcionar perfectamente en escritorio y dispositivos móviles.
- **Autenticación Segura**: Sistema de login y registro.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React (Vite)
- **Estilos**: TailwindCSS + DaisyUI
- **Navegación**: React Router DOM
- **Manejo de Estado**: Context API + Custom Hooks
- **Cliente HTTP**: Axios
- **Notificaciones**: React Toastify
- **Calendario**: React Calendar

## 📂 Estructura del Proyecto

```
src/
├── api/            # Configuración de Axios e interceptores
├── components/     # Componentes reutilizables (UI, Modales, Cards)
├── context/        # Contextos globales (AuthContext)
├── hooks/          # Custom Hooks (useNotes, useBoards, useAuth)
├── pages/          # Vistas principales (HomePage, CalendarPage, Login, etc.)
└── utils/          # Utilidades y funciones auxiliares
```

## 📦 Instalación y Uso

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 📸 Vista: [Organization-App](https://organization-app-chi.vercel.app/)

<img width="1232" height="676" alt="Organization" src="https://github.com/user-attachments/assets/9ac98c44-d242-4bc6-959f-ca5556fd6485" />




