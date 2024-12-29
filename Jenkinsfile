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
                // Example: Build the project using a build tool
                sh 'echo Building project...'
                sh './build.sh' // Replace with your actual build command
            }
        }
        stage('Test') {
            steps {
                // Example: Run unit tests
                sh 'echo Running tests...'
                sh './test.sh' // Replace with your actual test command
            }
        }
        stage('Deploy') {
            steps {
                // Example: Deploy the application
                sh 'echo Deploying application...'
                sh './deploy.sh' // Replace with your actual deployment command
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution finished!'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
