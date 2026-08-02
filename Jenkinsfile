stages {

    stage('Checkout Code From Git') {
        steps {
            git branch: 'main',
                url: 'https://github.com/Boonyapond/qa-automation-assignment'
        }
    }

    stage('Check Node Environment') {
        steps {
            sh 'echo $PATH'
            sh 'which node'
            sh 'node -v'
            sh 'which npm'
            sh 'npm -v'
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