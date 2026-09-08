# Security Standard

## 1. Secrets

Repositories MUST NOT contain real passwords, API keys, private keys, access tokens, session secrets or production credentials.

Environment files containing secrets MUST be excluded from version control. `.env.example` MAY be committed but MUST contain placeholders only.

## 2. Dependency hygiene

Projects MUST maintain supported dependencies appropriate to their risk profile and MUST NOT release with known critical vulnerabilities lacking an explicit approved exception and compensating control.

## 3. Input and boundary validation

Untrusted external input MUST be validated at trust boundaries. Parsing and validation SHOULD occur before domain behavior relies on the data.

## 4. Authentication and authorization

Authentication/authorization are profile/domain requirements rather than universal features. When present, authorization MUST be enforced server-side or at an equivalent trusted boundary; UI hiding is not authorization.

## 5. Error handling

Production-facing errors MUST NOT expose secrets, credentials, internal stack traces, sensitive identifiers or unnecessary infrastructure details.

## 6. Logging

Logs MUST avoid secrets and SHOULD avoid sensitive personal data unless operationally necessary and governed by retention/access rules.

## 7. Data protection

Projects handling sensitive or regulated data MUST document storage, transport, retention and access controls appropriate to applicable obligations.

## 8. Release blockers

The following are P0/P1 release blockers unless explicitly governed otherwise:

- committed live secret;
- known exploitable critical vulnerability;
- authorization bypass;
- exposed sensitive data path;
- security-critical test/gate failure;
- disabled security control without approved exception.

## 9. Supply chain

CI workflows SHOULD pin or deliberately control third-party actions/tools. Build and dependency sources SHOULD be reproducible enough to investigate provenance when risk warrants it.

## 10. Exceptions

Security exceptions MUST follow governance policy and include risk, owner, expiry/review date and compensating controls.
