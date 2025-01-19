---
title: "PostgreSQL Basic Commands"
description: "Essential PostgreSQL commands for database management and administration"
publishedAt: 2024-03-20
category: "Database"
---

Here are some essential PostgreSQL commands I frequently use:

## Service Management

Managing PostgreSQL service on Linux systems:

```bash
sudo systemctl start postgresql    # Start PostgreSQL service
sudo systemctl enable postgresql   # Enable auto-start on boot
sudo systemctl stop postgresql     # Stop PostgreSQL service
```

## User Access & Authentication

Basic user access commands:

```bash
sudo su - postgres                 # Switch to postgres user
psql                              # Enter PostgreSQL prompt
```

## System Information

Checking system and configuration details:

```sql
SELECT version();                  # Check PostgreSQL version
SHOW config_file;                 # Show config file location
SHOW hba_file;                    # Show HBA file location
\! more /etc/postgresql/14/main/postgresql.conf    # View config file
\! more /etc/postgresql/14/main/pg_hba.conf       # View HBA file
```

## User Management

Managing database users and roles:

```sql
\du                               # List all users/roles
ALTER USER postgres WITH PASSWORD 'your_secure_password';   # Change postgres password
CREATE USER john WITH PASSWORD 'secure_password123';        # Create new user
```

## Database Operations

Common database management commands:

```sql
\l                               # List all databases
CREATE DATABASE myproject;        # Create new database
SELECT datname FROM pg_database; # List databases (SQL query)
\c myproject                     # Connect to database
\connect postgres                # Connect to postgres database
```

## Navigation & Help

Useful navigation and help commands:

```sql
\dt                             # List tables in current database
\q                              # Exit PostgreSQL prompt
\h                             # SQL commands help
\?                             # PostgreSQL commands help
\conninfo                      # Show connection info
```

## Important Notes

When working with PostgreSQL, remember:

- Always use strong passwords for database users
- Configuration file paths might vary based on PostgreSQL version
- Default port is 5432
- SQL commands must end with semicolon (;)
- Backslash (\) commands don't need semicolons