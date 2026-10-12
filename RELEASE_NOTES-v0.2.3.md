# Blood Results v0.2.3 — early access

This is the first public test release for a small group of Windows users.

## What you can test

- Import supported blood-test PDF reports.
- Review parsed names, values, units and reference ranges before saving.
- Explore normalized trends by test and date range.
- Keep multiple encrypted profiles on one computer.
- Create and restore password-encrypted backups.

## Before installing

This 64-bit Windows installer is unsigned. Windows may show an **unrecognized app** warning. Confirm that the downloaded file has this SHA-256 checksum before running it:

`c981b5a6b7224c3027598eb741541acaea2dd00b929f536e753254d91765e0c9`

The application stores medical content locally in encrypted profiles and does not require an account or cloud service. There is no password recovery, so keep the profile password and an encrypted backup safe.

This software helps organize and visualize information. It may parse a report incorrectly and does not provide medical advice, diagnosis or treatment. Always compare imported values with the original report.

## Feedback

Use the distribution repository's [Issues](https://github.com/Shlomas/blood-results-download/issues) page. Describe the steps and application version, but do not attach a medical report or include personal medical information in a public issue.

## Open-source materials

The installer includes open-source components. License notices ship with the application. Source archives and build recipes for the bundled Poppler components are attached to this release; see `SOURCE-MATERIALS-v0.2.3.md` and the [open-source notices](https://shlomas.github.io/blood-results-download/notices.html).
