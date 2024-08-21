# Etapa 1: Construcción de la aplicación React
FROM node:14 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente al directorio de trabajo
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación utilizando un servidor estático
FROM nginx:alpine

# Copia los archivos compilados desde la etapa anterior al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia el archivo de configuración de Nginx personalizado
COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 8080 para servir la aplicación
EXPOSE 8080

# Comando para iniciar Nginx y servir la aplicación
CMD ["nginx", "-g", "daemon off;"]
