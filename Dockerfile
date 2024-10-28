# Используйте официальный Node.js образ
FROM node:14

# Установите рабочую директорию
WORKDIR /usr/src/app

# Копируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Копируйте остальные файлы приложения
COPY . .

# Откройте порт
EXPOSE 3000

# Запустите приложение
CMD ["node", "app.js"]

