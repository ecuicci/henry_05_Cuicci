FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]


# # Usar una imagen base de Node.js
# FROM node:20-alpine

# # Establecer el directorio de trabajo
# WORKDIR /app

# # Copiar los archivos de configuración de npm
# COPY package*.json ./

# # Instalar las dependencias
# RUN npm install

# # Copiar el resto del código de la aplicación
# COPY . .

# # Construir la aplicación
# RUN npm run build

# # Instalar un servidor simple para servir la aplicación
# RUN npm install -g serve

# # Comando para ejecutar el servidor
# CMD ["serve", "-s", "build"]

# # Exponer el puerto 3000
# EXPOSE 3000