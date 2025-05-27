![logo](https://eliasdh.com/assets/media/images/logo-github.png)
# 💙🤍DOCKER🤍💙

## 📘Table of Contents

1. [📘Table of Contents](#📘table-of-contents)
2. [🚀Docker](#🚀docker)

## 🚀Docker

- Pull the latest image and run the container
```bash
sudo docker pull ghcr.io/eliasdehondt/passiveaggressiveapi:latest
sudo docker run --name passiveaggressiveapi-container -p 80:80 -d ghcr.io/eliasdehondt/passiveaggressiveapi:latest
```

- Check the logs
```bash
sudo docker logs passiveaggressiveapi-container
```

- Stop and remove the existing container and image
```bash
sudo docker stop passiveaggressiveapi-container
sudo docker rm passiveaggressiveapi-container
sudo docker rmi ghcr.io/eliasdehondt/passiveaggressiveapi:latest
```