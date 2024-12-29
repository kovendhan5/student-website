pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/kovendhan5/student-website'
            }
        }
        stage('Build') {
            steps {
                bat 'build-command.bat' // Use a batch file or a Windows-compatible build command
            }
        }
        stage('Test') {
            steps {
                bat 'test-command.bat' // Replace with your test command
            }
        }
        stage('Deploy') {
            steps {
                bat 'deploy-command.bat' // Replace with your deployment command
            }
        }
    }
}
