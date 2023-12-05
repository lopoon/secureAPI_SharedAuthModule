# SecureAPI SharedAuthModule

This project is a module that handles permission scope verification and JWT (JSON Web Token) verification.

## Setup

### Generate Keypair

Before you start, you need to generate a keypair that will be used for signing and verifying JWT tokens. This keypair should be generated once and shared among all SecureAPI services.

You can generate a keypair using the following command:

```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
```
This will generate a private key (jwtRS256.key) and a public key (jwtRS256.key.pub).

## Features

- **Permission Scope Verification**: Ensures that a user has the necessary permissions to perform certain actions.
- **JWT Verification**: Validates JWTs to authenticate users.

## Installation

Provide instructions on how to install and setup your module in another project.

## Usage

Provide examples and explanations of how to use your module. Include code snippets where necessary.

## Build and Publish

Before using this module in another project, you need to build it and publish it to a private repository. 

1. Build the project:

```bash
npm run build
```

2. Publish the project to your private repository:

```bash
npm publish --access restricted
```
 ### Usage in Another Project
 ```bash
 "dependencies": {
  "secureapi-sharedauthmodule": "1.0.0"
}
```

After adding the module as a dependency, run npm install in the other project to install the module.
```bash
npm install
```

## Contributing

If you're open to contributions, provide instructions on how potential contributors can help improve your project.

## License

Include information about the license your project is distributed under.