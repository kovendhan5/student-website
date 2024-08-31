# Simple Student Website

This is a simple student website built using React. The website displays information about students in the IT department.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)
  - [Building the Docker Image](#building-the-docker-image)
  - [Running the Docker Container](#running-the-docker-container)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)


## Features

- Displays a list of students in the IT department.
- Each student has their name and department information listed.
- Responsive design that works across different devices.

## Installation

To run this project locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/kovendhan5/student-website.git
cd simple-student-website
```

## Install the dependencies:

```bash
npm install
```
Usage
To start the development server, run:

```bash
npm start
//This will start the React app on http://localhost:3000.
```

## Docker
Building the Docker Image
You can build a Docker image for this project using the following command:

```bash
docker build -t student-website .
```
Running the Docker Container
To run the Docker container, use the following command:

```bash
docker run -p 80:80 student-website
//This will start the website and make it accessible at http://localhost.
```

## Deployment on Google Cloud Platform (GCP)
Prerequisites
Google Cloud Account: If you don’t have one, create a free tier account here.
Google Cloud SDK: Install the Google Cloud SDK to interact with GCP services from your terminal.
Docker: Ensure your project is containerized with Docker (you already have the Dockerfile set up).
Steps to Deploy
Login to Google Cloud: Open your terminal and log in to your Google Cloud account:

```bash
gcloud auth login
```
Set your GCP Project: Choose the GCP project you want to deploy to. Replace your-project-id with your actual project ID:

```bash
gcloud config set project your-project-id
```
Build the Docker Image: Build your Docker image locally:

```bash
docker build -t gcr.io/your-project-id/student-website .
```
Push the Docker Image to Google Container Registry: Push the Docker image to Google Container Registry (GCR):

```bash
docker push gcr.io/your-project-id/student-website
```
Deploy to Google Cloud Run: Deploy your Docker image to Cloud Run:

```bash
gcloud run deploy student-website \
--image gcr.io/your-project-id/student-website \
--platform managed \
--region us-central1 \
--allow-unauthenticated
```
Choose the appropriate region (like us-central1).
The --allow-unauthenticated flag makes the service publicly accessible.
Access Your Deployed Website: After deployment, the terminal will provide you with a URL.

## Technologies Used
React<br>
HTML/CSS<br>
JavaScript<br>
Docker


## License
This project is licensed under the MIT License. See the LICENSE file for more details.
