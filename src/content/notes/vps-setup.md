---
title: "VPS Server Setup Guide"
description: "Complete guide for setting up and securing a VPS server for web applications"
publishedAt: 2025-01-12
category: "DevOps"
draft: false
---

# VPS Server Setup Guide

## **Initial Server Setup**

### **1. Connect to Server**
```bash
# SSH into your VPS
ssh root@your-server-ip

# Or with key file
ssh -i your-key.pem root@your-server-ip
```

### **2. Update System**
```bash
# Ubuntu/Debian
apt update && apt upgrade -y

# CentOS/RHEL
yum update -y
# or
dnf update -y
```

### **3. Create Non-Root User**
```bash
# Create new user
adduser username

# Add to sudo group
usermod -aG sudo username

# Switch to new user
su - username
```

## **Security Hardening**

### **1. SSH Key Authentication**
```bash
# Generate SSH key pair (on local machine)
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Copy public key to server
ssh-copy-id username@your-server-ip

# Disable password authentication
sudo nano /etc/ssh/sshd_config
```

**SSH Config Changes:**
```
PasswordAuthentication no
PubkeyAuthentication yes
PermitRootLogin no
```

```bash
# Restart SSH service
sudo systemctl restart sshd
```

### **2. Firewall Setup (UFW)**
```bash
# Install UFW
sudo apt install ufw

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH
sudo ufw allow ssh
sudo ufw allow 22

# Allow HTTP/HTTPS
sudo ufw allow 80
sudo ufw allow 443

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### **3. Fail2Ban Setup**
```bash
# Install Fail2Ban
sudo apt install fail2ban

# Create local config
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Edit config
sudo nano /etc/fail2ban/jail.local
```

**Basic Fail2Ban Config:**
```ini
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3

[sshd]
enabled = true
port = ssh
logpath = /var/log/auth.log
```

```bash
# Start and enable Fail2Ban
sudo systemctl start fail2ban
sudo systemctl enable fail2ban
```

## **Web Server Setup**

### **1. Nginx Installation**
```bash
# Install Nginx
sudo apt install nginx

# Start and enable
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

### **2. Nginx Configuration**
```bash
# Create site config
sudo nano /etc/nginx/sites-available/your-domain.com
```

**Basic Nginx Config:**
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/your-domain.com;
    index index.html index.htm index.php;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### **3. SSL Certificate (Let's Encrypt)**
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal test
sudo certbot renew --dry-run
```

## **Database Setup**

### **1. MySQL Installation**
```bash
# Install MySQL
sudo apt install mysql-server

# Secure installation
sudo mysql_secure_installation

# Start and enable
sudo systemctl start mysql
sudo systemctl enable mysql
```

### **2. MySQL Configuration**
```bash
# Connect to MySQL
sudo mysql

# Create database and user
CREATE DATABASE your_database;
CREATE USER 'your_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON your_database.* TO 'your_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### **3. PostgreSQL Installation**
```bash
# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Start and enable
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql
CREATE DATABASE your_database;
CREATE USER your_user WITH PASSWORD 'strong_password';
GRANT ALL PRIVILEGES ON DATABASE your_database TO your_user;
\q
```

## **Application Deployment**

### **1. Node.js Setup**
```bash
# Install Node.js (using NodeSource)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Start application with PM2
pm2 start app.js --name "my-app"

# Save PM2 configuration
pm2 save
pm2 startup
```

### **2. Python Setup**
```bash
# Install Python and pip
sudo apt install python3 python3-pip python3-venv

# Create virtual environment
python3 -m venv myapp-env
source myapp-env/bin/activate

# Install dependencies
pip install -r requirements.txt

# Install Gunicorn
pip install gunicorn

# Run with Gunicorn
gunicorn --bind 0.0.0.0:8000 app:app
```

### **3. PHP Setup**
```bash
# Install PHP and extensions
sudo apt install php8.1 php8.1-fpm php8.1-mysql php8.1-curl php8.1-gd php8.1-mbstring php8.1-xml php8.1-zip

# Start PHP-FPM
sudo systemctl start php8.1-fpm
sudo systemctl enable php8.1-fpm
```

## **Docker Setup**

### **1. Docker Installation**
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### **2. Docker Compose Example**
```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=rootpassword
      - MYSQL_DATABASE=myapp
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

## **Monitoring and Maintenance**

### **1. System Monitoring**
```bash
# Install htop
sudo apt install htop

# Install iotop for disk I/O monitoring
sudo apt install iotop

# Check disk usage
df -h

# Check memory usage
free -h

# Check running processes
ps aux
```

### **2. Log Management**
```bash
# View system logs
sudo journalctl -f

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# View MySQL logs
sudo tail -f /var/log/mysql/error.log
```

### **3. Backup Strategy**
```bash
# Database backup
mysqldump -u root -p your_database > backup_$(date +%Y%m%d).sql

# PostgreSQL backup
pg_dump -U your_user your_database > backup_$(date +%Y%m%d).sql

# File backup
tar -czf backup_$(date +%Y%m%d).tar.gz /var/www/your-domain.com
```

## **Performance Optimization**

### **1. Nginx Optimization**
```nginx
# /etc/nginx/nginx.conf
worker_processes auto;
worker_connections 1024;

gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### **2. MySQL Optimization**
```ini
# /etc/mysql/mysql.conf.d/mysqld.cnf
[mysqld]
innodb_buffer_pool_size = 1G
innodb_log_file_size = 256M
query_cache_size = 64M
max_connections = 200
```

### **3. System Optimization**
```bash
# Increase file limits
echo "* soft nofile 65536" >> /etc/security/limits.conf
echo "* hard nofile 65536" >> /etc/security/limits.conf

# Optimize kernel parameters
echo "net.core.somaxconn = 65536" >> /etc/sysctl.conf
echo "net.ipv4.tcp_max_syn_backlog = 65536" >> /etc/sysctl.conf
sysctl -p
```

## **Security Checklist**

- ✅ **SSH key authentication** enabled
- ✅ **Password authentication** disabled
- ✅ **Firewall** configured and enabled
- ✅ **Fail2Ban** installed and configured
- ✅ **Regular updates** scheduled
- ✅ **SSL certificates** installed
- ✅ **Database** secured with strong passwords
- ✅ **File permissions** properly set
- ✅ **Log monitoring** in place
- ✅ **Backup strategy** implemented
