pipeline {
    agent any

    stages {
        stage('Install npm modules (Front)') {
            steps {
                script {
                    sh "echo 'npm install!'"
                    sh 'npm install'
                }
            }
        }
        stage('Start Node Server (Front)') {
            steps {
                script {
                    sh "echo 'npm app!'"
                    sh 'node app.js &'
                }
            }
        }
        stage('Dormir(Esperar 15sg) (Front)') {
            steps {
                sh 'sleep 15'
            }
        }
        stage('Curl con Sleep de prueba  (Front)') {
            steps {
                sh "curl -X GET 'http://localhost:3000/'"
            }
        }
        stage('Compilar (Back)') {
            steps {
                script {
                    sh "echo 'Compile Code!'"
                    sh 'mvn clean compile -e'
                }
            }
        }
        stage('Levantar Springboot APP (Back)') {
            steps {
                sh 'mvn spring-boot:run &'
            }
        }
        stage('Dormir(Esperar 60sg) (Back)') {
            steps {
                sh 'sleep 60'
            }
        }
        stage('Curl con Sleep de prueba (Back)') {
            steps {
                sh 'curl -X GET "http://localhost:8081/rest/msdxc/ping"'
            }
        }
        stage('Testear (Back)') {
            steps {
                script {
                    sh "echo 'Test Code!'"
                    sh "chmod +x src/driver/linx/chromedriver"
                    sh 'mvn clean test -e'
                }
            }
        }
        stage('Build .Jar (Back)') {
            steps {
                script {
                    sh "echo 'Build .Jar!'"
                    sh 'mvn clean package -e'
                }
            }
        }
        stage('Test Jmeter (Back)') {
            steps {
                sh 'mvn jmeter:jmeter -Pjmeter'
            }
        }
        stage('Test API responses (Back)') {
            steps {
                sh 'newman run LabMod4.postman_collection.json'
            }
        }
    }
}
