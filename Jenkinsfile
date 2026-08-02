pipeline {
    agent any

    stages {

        stage('Checkout Code From Git') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Boonyapond/qa-automation-assignment'
            }
        }

        stage('Run Test Automate') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
                sh 'npx playwright test'
            }
        }

        stage('Send Result To Jenkins') {
            steps {
                junit 'test-results/results.xml'
            }
        }
    }
}