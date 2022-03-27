pipeline {
    agent any

    stages {
        stage('Paso 1: Install npm modules (Front)') {
            steps {
                script {
                    sh "echo 'npm install!'"
                    sh 'npm install'
                }
            }
        }
        stage('Paso 2: Start Node Server (Front)') {
            steps {
                script {
                    sh "echo 'npm app!'"
                    sh 'node app.js &'
                }
            }
        }
        stage('Paso 3: Dormir (Esperar 15seg) (Front)') {
            steps {
                sh 'sleep 15'
            }
        }
        stage('Paso 4: Curl con Sleep de prueba (Front)') {
            steps {
                sh "curl -X GET 'http://localhost:3000/'"
            }
        }
        stage('Paso 5: Compilar (Back)') {
            steps {
                script {
                    sh "echo 'Compile Code!'"
                    sh 'mvn clean compile -e'
                }
            }
        }
        stage('Paso 6: Levantar Springboot APP (Back) para realizar pruebas siguientes') {
            steps {
                sh 'mvn spring-boot:run &'
            }
        }
        stage('Paso 7: Dormir(Esperar 60seg) (Back)') {
            steps {
                sh 'sleep 60'
            }
        }
        stage('Paso 8: Curl con Sleep de prueba (Back)') {
            steps {
                sh 'curl -X GET "http://localhost:8081/rest/msdxc/ping"'
            }
        }
        stage('Paso 9: Testear (Back)') {
            steps {
                script {
                    sh "echo 'Test Code!'"
                    sh "chmod +x src/driver/linx/chromedriver"
                    sh 'mvn clean test -e'
                }
            }
        }
        stage('Paso 10: Build .Jar (Back)') {
            steps {
                script {
                    sh "echo 'Build .Jar!'"
                    sh 'mvn clean package -e'
                }
            }
        }
        stage('Paso 11: Test Jmeter (Back)') {
            steps {
                sh 'mvn jmeter:jmeter -Pjmeter'
            }
        }
        stage('Paso 12: Test API responses (Back)') {
            steps {
                sh 'newman run LabMod4.postman_collection.json'
            }
        }
    }
}
