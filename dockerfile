# Usamos una imagen base de Node.js
FROM node:18 AS build

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json (o yarn.lock) para instalar dependencias
COPY package*.json ./

# Instalar dependencias de la aplicación
RUN npm install

# Copiar todo el código de la aplicación al contenedor
COPY . .

# Construir la aplicación Next.js (esto prepara los archivos de producción)
RUN npm run build

# Fase de producción
FROM node:18-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la fase anterior
COPY --from=build /app /app

# Exponer el puerto donde la aplicación Next.js va a correr
EXPOSE 3000

# Comando para ejecutar la aplicación en producción
CMD ["npm", "start"]
