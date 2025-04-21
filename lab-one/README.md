# Lab 1: IDOR Exploit in a Web3 Relayer API 

# Overview

This lab demonstrates an Insecure Direct Object Reference (IDOR) vulnerability in a sample Web3 relayer API. By manipulating user IDs sent in API calls, one gets access to other users' transactions without authorization. This is just like actual attacks where weak access controls in APIs lead to massive data breaches.

# Setup Instructions

**Prerequisites**
  - Node.js (version 14 or higher)
  - npm (comes with Node.js)

**Installation**

1. **Clone the repository:**
     ```bash
     git clone https://github.com/yourusername/lab1-idor.git
     cd lab1-idor
2. **Install Dependencies:**
     ```bash
     npm install
3. **Start the Server:**
   ```bash
   npm start
The server will run on http://localhost:3000

# Usage
The API endpoint /api/v1/user/:id/txs is designed to fetch transaction histories for users based on their unique `id`.

**Accessing Your Transactions:**
  To retrieve transactions for user with `id` 1:  

    ```bash
       curl http://localhost:3000/api/v1/user/1/txs
This should return the transaction history for user 1.

**Attempting Unauthorised Access:**
  To attempt accessing transactions for user with `id` 2:

    ```bash
    curl http://localhost:3000/api/v1/user/2/txs
Despite being authenticated as user 1, this request still fetches transactions for user 2, highlighting the IDOR vulnerability.

# Understanding the Vulnerability
The core issue lies in the API's failure to verify whether the requesting user has the appropriate permissions to access the data associated with the provided id. This oversight allows malicious actors to enumerate user IDs and access sensitive information without authorization.​

# Mitigation Strategies
To prevent such vulnerabilities:

  **- Implement Access Controls:** Ensure that the server verifies the requesting user's identity and permissions before granting access to resources.​

  **- Use Indirect References:** Instead of exposing direct object references like user IDS, utilise opaque identifiers or tokens that are mapped securely on the server side.​

  **- Input Validation:** Validate all user inputs to prevent unauthorised data access.
        
