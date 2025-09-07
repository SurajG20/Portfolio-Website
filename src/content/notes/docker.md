---
title: "Docker Fundamentals"
description: "Essential Docker commands, concepts, and best practices for containerization"
publishedAt: 2025-01-10
category: "DevOps"
draft: false
---

# Docker Fundamentals

## **Core Concepts**

### **What is Docker?**
- **Containerization platform** that packages applications and their dependencies
- **Lightweight alternative** to virtual machines
- **Consistent environment** across development, testing, and production

### **Key Components**
- **Docker Engine**: Runtime and daemon
- **Docker Images**: Read-only templates for containers
- **Docker Containers**: Running instances of images
- **Dockerfile**: Instructions to build images
- **Docker Compose**: Multi-container application management

## **Essential Commands**

### **Image Management**
```bash
# Pull an image
docker pull nginx:latest

# List images
docker images

# Remove image
docker rmi <image_id>

# Build image from Dockerfile
docker build -t myapp:latest .

# Tag image
docker tag myapp:latest myapp:v1.0
```

### **Container Management**
```bash
# Run container
docker run -d -p 8080:80 --name mycontainer nginx

# List running containers
docker ps

# List all containers
docker ps -a

# Stop container
docker stop <container_id>

# Start container
docker start <container_id>

# Remove container
docker rm <container_id>

# Execute command in running container
docker exec -it <container_id> /bin/bash
```

### **Container Lifecycle**
```bash
# Run and remove after exit
docker run --rm nginx

# Run in background (detached)
docker run -d nginx

# Run with environment variables
docker run -e MYSQL_ROOT_PASSWORD=secret mysql

# Run with volume mounting
docker run -v /host/path:/container/path nginx
```

## **Dockerfile Best Practices**

### **Basic Structure**
```dockerfile
# Use official base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Set user (security best practice)
USER node

# Define startup command
CMD ["npm", "start"]
```

### **Optimization Tips**
- **Multi-stage builds** for smaller images
- **Layer caching** - copy package files before source code
- **Use .dockerignore** to exclude unnecessary files
- **Alpine Linux** for smaller base images
- **Non-root user** for security

## **Docker Compose**

### **Basic docker-compose.yml**
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### **Compose Commands**
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Scale services
docker-compose up --scale web=3
```

## **Volume Management**

### **Types of Volumes**
- **Named volumes**: Managed by Docker
- **Bind mounts**: Direct host filesystem access
- **tmpfs mounts**: In-memory storage

### **Volume Commands**
```bash
# Create volume
docker volume create myvolume

# List volumes
docker volume ls

# Inspect volume
docker volume inspect myvolume

# Remove volume
docker volume rm myvolume
```

## **Network Management**

### **Network Types**
- **Bridge**: Default network for containers
- **Host**: Use host's network directly
- **Overlay**: Multi-host networking
- **Macvlan**: Assign MAC address to container

### **Network Commands**
```bash
# Create network
docker network create mynetwork

# List networks
docker network ls

# Connect container to network
docker network connect mynetwork container_name

# Disconnect container
docker network disconnect mynetwork container_name
```

## **Production Best Practices**

### **Security**
- Use **non-root users** in containers
- **Scan images** for vulnerabilities
- **Limit container capabilities**
- **Use secrets management**

### **Performance**
- **Optimize image size** with multi-stage builds
- **Use health checks** for container monitoring
- **Implement proper logging**
- **Resource limits** (CPU, memory)

### **Monitoring**
```bash
# Container stats
docker stats

# System info
docker system df

# Clean up unused resources
docker system prune -a
```

## **Common Use Cases**

### **Development Environment**
```yaml
# docker-compose.dev.yml
version: '3.8'
services:
  app:
    build: .
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
```

### **Database Setup**
```bash
# MySQL
docker run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=rootpassword \
  -e MYSQL_DATABASE=myapp \
  -p 3306:3306 \
  mysql:8.0

# PostgreSQL
docker run -d \
  --name postgres-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=myapp \
  -p 5432:5432 \
  postgres:13
```

### **Web Server (Nginx)**
```bash
docker run -d \
  --name nginx-server \
  -p 80:80 \
  -v $(pwd)/html:/usr/share/nginx/html \
  nginx:alpine
```

## **Troubleshooting**

### **Common Issues**
- **Port conflicts**: Check if port is already in use
- **Permission issues**: Use proper user permissions
- **Volume mounting**: Ensure host paths exist
- **Memory limits**: Adjust container memory allocation

### **Debug Commands**
```bash
# Container logs
docker logs <container_id>

# Container inspection
docker inspect <container_id>

# Resource usage
docker stats <container_id>

# Execute shell in container
docker exec -it <container_id> sh
```
