pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Построение Docker образа
                    sh 'docker build -t my-express-app .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Запуск тестов
                    sh 'npm test'
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    // Вход в Docker Hub (введите свои учетные данные)
                    sh 'docker login -u <your-username> -p <your-password>'
                    // Загрузка образа
                    sh 'docker push my-express-app'
                }
            }
        }
    }
}

