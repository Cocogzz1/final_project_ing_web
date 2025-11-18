# Plataforma de Logística para Repartos Rápidos SAS

## 📦 Descripción del Proyecto

Aplicación web Full Stack para la gestión y rastreo de envíos de una empresa de mensajería.  
Permite registrar paquetes, actualizar su estado, visualizar repartidores en un mapa y ofrecer a los clientes una página pública para rastrear su paquete mediante un número de guía.  
Todo el sistema está desarrollado con React, Node.js, Express y MongoDB.

---

## 🖼️ Demo / Capturas de Pantalla

*(Opcional para la entrega, pero recomendado)*  
Aquí puedes agregar imágenes o GIFs mostrando:

- Panel de administración
- Creación de paquete
- Actualización de estado
- Página de rastreo
- Mapa en tiempo real (Leaflet)

---

## 🛠️ Stack de Tecnologías

### Front-end
- React + Vite  
- Axios  
- React Router DOM  
- Leaflet + React Leaflet  
- Tailwind CSS  

### Back-end
- Node.js  
- Express  
- MongoDB Atlas / MongoDB Local  
- Mongoose  
- CORS  
- Dotenv  

---

## 🚀 Funcionalidades Implementadas

- Registro de nuevos paquetes:
  - Remitente
  - Destinatario
  - Dimensiones
  - Última ubicación (lat/lng)
- Tabla de paquetes en el panel admin.
- Actualización de estado por ID:
  - “En bodega”
  - “En ruta”
  - “Entregado”
- Página pública de rastreo:
  - Búsqueda por número de guía
  - Visualización de estado, remitente/destinatario
  - Mapa con ubicación del paquete
- Visualización de repartidores en un mapa (mock data o desde API)
- Conexión full stack: React ↔ Express ↔ MongoDB

---

## ⚙️ Instalación y Ejecución Local

### 🧩 Requisitos Previos

- Node.js 18+
- npm
- MongoDB (Atlas o instalación local)

### 📌 Estructura del proyecto

final_project_ing_web/
├── frontend/
└── server/

yaml
Copy code

---

## 🚀 Backend (carpeta `/server`)

1. Entrar a la carpeta del servidor:

   ```bash
   cd server
Instalar dependencias:

bash
Copy code
npm install
Crear archivo .env:

env
Copy code
PORT=5000
MONGODB_URI=tu_url_de_mongo
Ejecutar en modo desarrollo:

bash
Copy code
npm run dev
Backend corriendo en:
👉 http://localhost:5000/

💻 Frontend (carpeta /frontend)
Entrar a la carpeta:

bash
Copy code
cd frontend
Instalar dependencias:

bash
Copy code
npm install
Iniciar React:

bash
Copy code
npm run dev
Abrir en el navegador:

👉 http://localhost:5173/
👉 http://localhost:5173/admin (panel admin)
👉 http://localhost:5173/rastreo (página de rastreo)

📡 Endpoints de la API
Paquetes
Método	Ruta	Descripción
POST	/api/paquetes	Crea un paquete nuevo
GET	/api/paquetes	Obtiene todos los paquetes
GET	/api/paquetes/:numeroGuia	Busca un paquete por número de guía
PUT	/api/paquetes/:id/estado	Actualiza el estado de un paquete por ID

Repartidores
Método	Ruta	Descripción
GET	/api/repartidores	Devuelve lista y ubicación de repartidores
