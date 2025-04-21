# Designing-Secure-Laboratories-for-Demonstrating-Web2-Vulnerabilities-in-Web3-Off-Chain-Vulnerabilities

# Web2 Vulnerabilities in Web3 -- Lab Design.

## Introduction
Web3 brings with it a decentralised, user-controlled web. Its foundations also introduce new vulnerabilities, particularly in its off-chain features. Relayers that allow transactions to be posted, signers that validate blockchain transactions, and backend systems that manage off-chain data rely on old Web2 infrastructure. These vital components, then, inherit similar vulnerabilities from the Web 2 world.

Some of the most dangerous vulnerabilities are:

- **Insecure Direct Object References (IDOR):** Access control weakness through which attackers are able to manipulate identifiers (e.g., user IDS) to access or perform operations on data or perform activities not originally intended by them.
- **Improper Input Validation:** A system's failure to validate external inputs correctly enables attackers to provide malformed or malicious input that bypasses meaningful checks, leading to unauthorised, unexpected actions (e.g., signing or relaying fake transactions).

## The Growing Attack Surface

As Web3 off-chain infrastructure gets more sophisticated and interconnected, problems like IDOR and improper input validation worsen and become more devastating. For instance:
- A compromised relayer via improper input validation can facilitate unauthorised forwarding of transactions.
- An IDOR bug in a backend service can expose sensitive user data.

The effect can range from data and financial losses to complete derailment of off-chain operations, which can compromise the integrity and trust in decentralized systems.

## Purpose and Relevance

Recognising and mitigating these risks is essential for the widespread adoption and trust in Web3 technologies. This project aims to demonstrate these vulnerabilities in controlled laboratory settings that are:
- **Realistic:** Reflecting actual Web2 flaws impacting Web3 components.
- **Reproducible:** Properly documented for bug bounty programs and security education.
- **Impactful:** Illustrating how exploitation of these flaws can lead to significant security breaches in decentralised applications.

By creating realistic and reproducible lab environments, security researchers can effectively illustrate the potential for exploitation and drive home the importance of thorough security practices in both off-chain and on-chain systems.

## Repository Structure

The repository is organised as follows:

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
   
   -- Lab 2 (Improper Input Validation): See lab2-signing-validation/README.md for details on how a signing service may fail to validate transaction inputs correctly.

4. **Setup and Run:**
   -- Each lab includes instructions on installing dependencies and running the respective Node.js application.
   
   -- (Optional) Docker files are provided for containerised setups.

## Relevance to Web3 Security
This project illustrates how seemingly simple flaws in Web2 infrastructure can directly impact Web3 systems. Even if smart contracts remain secure, vulnerabilities in off-chain components, like relayers and signing services, can lead to:

  -- Unauthorised access to sensitive data
    
  -- Manipulation of transaction flows

  -- Financial losses in decentralised environments

Properly securing these off-chain components is crucial for the integrity and longevity of Web3 applications.


