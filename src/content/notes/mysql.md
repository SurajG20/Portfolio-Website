---
title: "MySQL Database Guide"
description: "Comprehensive MySQL commands, queries, and best practices for database management"
publishedAt: 2025-01-18
category: "Database"
draft: false
---

# MySQL Database Guide

## **Installation & Setup**

### **Installation**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install mysql-server

# CentOS/RHEL
sudo yum install mysql-server
# or
sudo dnf install mysql-server

# macOS
brew install mysql

# Start MySQL service
sudo systemctl start mysql
sudo systemctl enable mysql
```

### **Initial Configuration**
```bash
# Secure installation
sudo mysql_secure_installation

# Connect to MySQL
mysql -u root -p

# Or with sudo
sudo mysql
```

## **User Management**

### **Create Users**
```sql
-- Create user with password
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

-- Create user for remote access
CREATE USER 'username'@'%' IDENTIFIED BY 'password';

-- Grant privileges
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';
GRANT SELECT, INSERT, UPDATE ON database_name.* TO 'username'@'localhost';

-- Apply changes
FLUSH PRIVILEGES;
```

### **User Operations**
```sql
-- List all users
SELECT User, Host FROM mysql.user;

-- Change password
ALTER USER 'username'@'localhost' IDENTIFIED BY 'new_password';

-- Drop user
DROP USER 'username'@'localhost';

-- Show user privileges
SHOW GRANTS FOR 'username'@'localhost';
```

## **Database Operations**

### **Database Management**
```sql
-- Create database
CREATE DATABASE database_name;
CREATE DATABASE database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- List databases
SHOW DATABASES;

-- Use database
USE database_name;

-- Drop database
DROP DATABASE database_name;

-- Show current database
SELECT DATABASE();
```

### **Table Operations**
```sql
-- Create table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- List tables
SHOW TABLES;

-- Describe table structure
DESCRIBE table_name;
-- or
SHOW COLUMNS FROM table_name;

-- Drop table
DROP TABLE table_name;

-- Truncate table (remove all data)
TRUNCATE TABLE table_name;
```

## **Data Manipulation**

### **INSERT Operations**
```sql
-- Insert single record
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');

-- Insert multiple records
INSERT INTO users (username, email) VALUES 
    ('jane_doe', 'jane@example.com'),
    ('bob_smith', 'bob@example.com');

-- Insert with default values
INSERT INTO users (username, email) VALUES ('alice', 'alice@example.com');

-- Insert from another table
INSERT INTO users (username, email) 
SELECT username, email FROM old_users WHERE active = 1;
```

### **SELECT Operations**
```sql
-- Basic select
SELECT * FROM users;
SELECT username, email FROM users;

-- Select with conditions
SELECT * FROM users WHERE id > 5;
SELECT * FROM users WHERE username LIKE 'j%';
SELECT * FROM users WHERE created_at >= '2024-01-01';

-- Select with ordering
SELECT * FROM users ORDER BY created_at DESC;
SELECT * FROM users ORDER BY username ASC, created_at DESC;

-- Select with limit
SELECT * FROM users LIMIT 10;
SELECT * FROM users LIMIT 10 OFFSET 20; -- Skip first 20, get next 10

-- Select distinct values
SELECT DISTINCT username FROM users;

-- Select with aggregation
SELECT COUNT(*) FROM users;
SELECT COUNT(*) as total_users FROM users WHERE active = 1;
SELECT AVG(age) FROM users;
SELECT MAX(created_at), MIN(created_at) FROM users;
```

### **UPDATE Operations**
```sql
-- Update single record
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;

-- Update multiple records
UPDATE users SET active = 0 WHERE created_at < '2024-01-01';

-- Update with conditions
UPDATE users SET last_login = NOW() WHERE username = 'john_doe';

-- Update with JOIN
UPDATE users u 
JOIN orders o ON u.id = o.user_id 
SET u.total_orders = o.order_count 
WHERE o.status = 'completed';
```

### **DELETE Operations**
```sql
-- Delete specific records
DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE created_at < '2024-01-01';

-- Delete with JOIN
DELETE u FROM users u 
JOIN inactive_users i ON u.id = i.user_id 
WHERE i.last_activity < DATE_SUB(NOW(), INTERVAL 1 YEAR);
```

## **Advanced Queries**

### **JOIN Operations**
```sql
-- Inner JOIN
SELECT u.username, o.order_date, o.total 
FROM users u 
INNER JOIN orders o ON u.id = o.user_id;

-- Left JOIN
SELECT u.username, o.order_date 
FROM users u 
LEFT JOIN orders o ON u.id = o.user_id;

-- Right JOIN
SELECT u.username, o.order_date 
FROM users u 
RIGHT JOIN orders o ON u.id = o.user_id;

-- Full OUTER JOIN (MySQL doesn't support, use UNION)
SELECT u.username, o.order_date 
FROM users u 
LEFT JOIN orders o ON u.id = o.user_id
UNION
SELECT u.username, o.order_date 
FROM users u 
RIGHT JOIN orders o ON u.id = o.user_id;
```

### **Subqueries**
```sql
-- Subquery in WHERE clause
SELECT * FROM users 
WHERE id IN (SELECT user_id FROM orders WHERE total > 100);

-- Subquery in SELECT clause
SELECT username, 
       (SELECT COUNT(*) FROM orders WHERE user_id = users.id) as order_count 
FROM users;

-- EXISTS subquery
SELECT * FROM users u 
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
```

### **GROUP BY and HAVING**
```sql
-- Group by with aggregation
SELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent 
FROM orders 
GROUP BY user_id;

-- Group by with HAVING
SELECT user_id, COUNT(*) as order_count 
FROM orders 
GROUP BY user_id 
HAVING COUNT(*) > 5;

-- Group by multiple columns
SELECT YEAR(order_date) as year, MONTH(order_date) as month, COUNT(*) as orders 
FROM orders 
GROUP BY YEAR(order_date), MONTH(order_date);
```

## **Indexes and Performance**

### **Creating Indexes**
```sql
-- Create index
CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);

-- Create unique index
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Create composite index
CREATE INDEX idx_user_date ON orders(user_id, order_date);

-- Create full-text index
CREATE FULLTEXT INDEX idx_content ON posts(title, content);

-- Show indexes
SHOW INDEX FROM users;
```

### **Query Optimization**
```sql
-- Explain query execution plan
EXPLAIN SELECT * FROM users WHERE username = 'john_doe';

-- Analyze table
ANALYZE TABLE users;

-- Optimize table
OPTIMIZE TABLE users;

-- Check table status
SHOW TABLE STATUS LIKE 'users';
```

## **Data Types**

### **Numeric Types**
```sql
-- Integer types
TINYINT      -- -128 to 127
SMALLINT     -- -32,768 to 32,767
MEDIUMINT    -- -8,388,608 to 8,388,607
INT          -- -2,147,483,648 to 2,147,483,647
BIGINT       -- Large integers

-- Decimal types
DECIMAL(10,2) -- Fixed-point decimal
FLOAT         -- Single-precision floating point
DOUBLE        -- Double-precision floating point
```

### **String Types**
```sql
-- Fixed-length strings
CHAR(10)     -- Fixed 10 characters

-- Variable-length strings
VARCHAR(255) -- Variable up to 255 characters
TEXT         -- Up to 65,535 characters
MEDIUMTEXT   -- Up to 16,777,215 characters
LONGTEXT     -- Up to 4,294,967,295 characters

-- Binary strings
BINARY(10)   -- Fixed binary string
VARBINARY(255) -- Variable binary string
BLOB         -- Binary large object
```

### **Date and Time Types**
```sql
DATE         -- YYYY-MM-DD
TIME         -- HH:MM:SS
DATETIME     -- YYYY-MM-DD HH:MM:SS
TIMESTAMP    -- Unix timestamp
YEAR         -- YYYY
```

## **Backup and Restore**

### **Backup Operations**
```bash
# Backup single database
mysqldump -u username -p database_name > backup.sql

# Backup all databases
mysqldump -u username -p --all-databases > all_databases.sql

# Backup with compression
mysqldump -u username -p database_name | gzip > backup.sql.gz

# Backup specific tables
mysqldump -u username -p database_name table1 table2 > tables_backup.sql

# Backup with specific options
mysqldump -u username -p --single-transaction --routines --triggers database_name > backup.sql
```

### **Restore Operations**
```bash
# Restore from backup
mysql -u username -p database_name < backup.sql

# Restore all databases
mysql -u username -p < all_databases.sql

# Restore from compressed backup
gunzip < backup.sql.gz | mysql -u username -p database_name
```

## **Configuration and Tuning**

### **Important Configuration Parameters**
```ini
# /etc/mysql/mysql.conf.d/mysqld.cnf
[mysqld]
# Memory settings
innodb_buffer_pool_size = 1G
innodb_log_file_size = 256M
innodb_log_buffer_size = 16M

# Connection settings
max_connections = 200
max_connect_errors = 1000

# Query cache
query_cache_size = 64M
query_cache_type = 1

# Logging
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2

# Binary logging
log_bin = /var/log/mysql/mysql-bin.log
expire_logs_days = 7
```

### **Performance Monitoring**
```sql
-- Show process list
SHOW PROCESSLIST;

-- Show status
SHOW STATUS;

-- Show variables
SHOW VARIABLES;

-- Show engine status
SHOW ENGINE INNODB STATUS;

-- Monitor slow queries
SELECT * FROM mysql.slow_log ORDER BY start_time DESC LIMIT 10;
```

## **Security Best Practices**

### **Security Configuration**
```sql
-- Remove anonymous users
DELETE FROM mysql.user WHERE User='';

-- Remove test database
DROP DATABASE IF EXISTS test;

-- Set root password
ALTER USER 'root'@'localhost' IDENTIFIED BY 'strong_password';

-- Create application user with limited privileges
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT SELECT, INSERT, UPDATE, DELETE ON app_database.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
```

### **Connection Security**
```bash
# Bind to specific interface
bind-address = 127.0.0.1

# Use SSL connections
ssl-ca = /path/to/ca-cert.pem
ssl-cert = /path/to/server-cert.pem
ssl-key = /path/to/server-key.pem
```

## **Common Commands Reference**

### **System Commands**
```bash
# Start/Stop/Restart MySQL
sudo systemctl start mysql
sudo systemctl stop mysql
sudo systemctl restart mysql
sudo systemctl status mysql

# Check MySQL version
mysql --version

# Connect to MySQL
mysql -u username -p -h hostname database_name

# Execute SQL file
mysql -u username -p database_name < file.sql
```

### **Useful SQL Commands**
```sql
-- Show current user
SELECT USER();

-- Show current time
SELECT NOW();

-- Show MySQL version
SELECT VERSION();

-- Show current database
SELECT DATABASE();

-- Show table size
SELECT 
    table_name AS 'Table',
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.tables
WHERE table_schema = 'your_database_name'
ORDER BY (data_length + index_length) DESC;
```
