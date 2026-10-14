# Blood Results v0.3.0 — reusable PDF import profiles

This early-access release improves PDF extraction and adds reusable layout profiles for unfamiliar reports.

## What's new

- Import starts with the PDF's tagged tables, then reconstructs missing structure from positioned text before normalizing results.
- Automatic matching selects Sheba LabOS/Autolims or generic table profiles and explains the choice.
- Create, clone, or edit import profiles using header selection, column mappings, heading labels, and explicit date order.
- Preview extracted results before applying a profile. Missing mappings, ambiguous matches, and extraction failures appear in review.
- Custom profiles stay local; desktop profiles are encrypted in the user vault and included in backups.
- Improved date parsing and recovery of wrapped names, ranges, comments, and qualitative results.
- Fixed Windows resource paths used by the PDF loader.

Open **Import & Review → Import layout** to use the profile tools. Applying a preview replaces unsaved review edits. Save reviewed measurements separately with **Confirm & save results**. Updating a profile does not change previously saved measurements.

## Validation and limits

The local regression suite passed 105 tests, including every one of the 44 reviewed PDFs (2,176 result rows). Browser profile workflows and desktop import, profile isolation, encrypted backup/restore, and locking checks passed. The release also passed the available automated tests and desktop integration checks on a native Windows runner; private PDF fixtures remain local.

Profiles currently map labeled tables and report headings. Scanned PDFs require OCR or manual entry; arbitrary headerless or historical table layouts may need additional extraction support. Always compare imported results and collection dates with the original PDF.

## Installation and upgrade

Download `BloodResults-Setup-0.3.0.exe` for Windows x64. Close the app and keep an encrypted backup before upgrading. Existing user profiles are retained. The installer is unsigned and Windows may show an unrecognized-app warning.

SHA-256:

`df9429bc49889f4c75149f707b6dff08ace8ee6ca979308d6b8420539d523b2e`

The matching `.sha256` file is attached to this release. Passwords cannot be recovered; keep passwords and backups safe. The app stores medical content locally and does not upload reports to a cloud service.

## Feedback and source materials

Report problems in the [distribution repository](https://github.com/Shlomas/blood-results-download/issues), including the application version and reproduction steps. Do not post personal medical information or original medical reports publicly.

License notices ship with the application. Source archives and build recipes for the bundled Poppler components are attached alongside `SOURCE-MATERIALS-v0.3.0.md`; see the [open-source notices](https://shlomas.github.io/blood-results-download/notices.html).
