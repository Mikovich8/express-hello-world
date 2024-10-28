pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Построение Docker образа
                sh 'docker build -t my-express-app .'
            }
        }
        stage('Test') {
            steps {
                // Запуск тестов
                sh 'npm test'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                // Вход в Docker Hub (введите свои учетные данные)
                sh 'echo <your-password> | docker login -u <your-username> --password-stdin'
                // Загрузка образа
                sh 'docker push my-express-app'
            }
        }
    }
}
