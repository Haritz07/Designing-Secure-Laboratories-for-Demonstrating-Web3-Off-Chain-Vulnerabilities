# Designing-Secure-Laboratories-for-Demonstrating-Web2-Vulnerabilities-in-Web3-Off-Chain-Vulnerabilities

# Web2 Vulnerabilities in Web3 -- Lab Design.

## Introduction
The advent of Web3 promises a decentralized, user-centric internet. However, its underlying architecture also introduces novel complexities—particularly within its off-chain components. Relayers facilitating transaction submissions, signers authorising blockchain actions, and backend services managing off-chain data rely on traditional Web2 infrastructure. Consequently, these critical components inherit well-known vulnerabilities from the Web2 world.

Among the most concerning vulnerabilities are:

- **Insecure Direct Object References (IDOR):** An access control flaw where attackers can modify identifiers (e.g., user IDs) to access data or perform actions not intended for them.
- **Improper Input Validation:** When a system fails to validate external inputs rigorously, attackers can send malformed or malicious data that bypasses critical checks—leading to unauthorized, unintended actions (such as signing or relaying fabricated transactions).

## The Increasing Attack Surface

As Web3 off-chain infrastructure becomes more sophisticated and interconnected, vulnerabilities like IDOR and improper input validation are increasingly prevalent and damaging. For instance:
- A compromised relayer due to improper input validation could allow the forwarding of unauthorized transactions.
- An IDOR flaw in a backend service could expose sensitive user data.

The consequences can range from financial losses and data breaches to a complete compromise of off-chain processes, undermining the security and trust in decentralized systems.

## Purpose and Relevance

Recognizing and mitigating these risks is essential for the widespread adoption and trust in Web3 technologies. This project aims to demonstrate these vulnerabilities in controlled laboratory settings that are:
- **Realistic:** Reflecting actual Web2 flaws impacting Web3 components.
- **Reproducible:** Properly documented for bug bounty programs and security education.
- **Impactful:** Illustrating how exploitation of these flaws can lead to significant security breaches in decentralized applications.

By creating realistic and reproducible lab environments, security researchers can effectively illustrate the potential for exploitation and drive home the importance of thorough security practices in both off-chain and on-chain systems.

## Repository Structure

The repository is organized as follows:
web3-security-labs/
├── lab1-idor/
│   ├── index.js
│   ├── package.json
│   └── README.md
├── lab2-signing-validation/
│   ├── index.js
│   ├── package.json
│   └── README.md
└── README.md  <-- This top-level README


## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/web3-security-labs.git
   cd web3-security-labs
   
2. **Explore Each Lab:**
   -- Lab 1 (IDOR): See lab1-idor/README.md for details on replicating an IDOR vulnerability in a relayer service API.
   -- Lab 2 (Improper Input Validation): See lab2-signing-validation/README.md for details on how a signing service may fail       to validate transaction inputs correctly.

3. **Setup and Run:**
   -- Each lab includes instructions on installing dependencies and running the respective Node.js application.
   -- (Optional) Docker files are provided for containerized setups.

## Relevance to Web3 Security
This project illustrates how seemingly simple flaws in Web2 infrastructure can directly impact Web3 systems. Even if smart contracts remain secure, vulnerabilities in off-chain components—like relayers and signing services—can lead to:

  -- Unauthorized access to sensitive data
    
  -- Manipulation of transaction flows

  -- Financial losses in decentralized environments

Properly securing these off-chain components is crucial for the integrity and longevity of Web3 applications.


