# Source materials for Blood Results v0.2.3

The Blood Results v0.2.3 Windows installer includes the following copyleft components. Exact source archives and build recipes are attached to the matching GitHub Release:

- `node-poppler-win32` 2.0.0 — GPL-3.0-or-later. Source tag: <https://github.com/Fdawgs/node-poppler-win32/tree/v2.0.0>
- Poppler 26.02.0 — GPL-2.0-or-later and GPL-3.0-or-later components. Official source: <https://poppler.freedesktop.org/releases.html>
- `poppler-windows` packaging recipe for 26.02.0-0. Source tag: <https://github.com/oschwartz10612/poppler-windows/tree/v26.02.0-0>
- `poppler-data` 0.4.12 — data files under the licenses included in its archive. Source: <https://poppler.freedesktop.org/>

The Windows package is assembled from the `poppler-windows` distribution produced from conda-forge packages. Build recipes and revision history are available from <https://github.com/conda-forge/poppler-feedstock> and the feedstocks for its supporting libraries.

The release also includes PDF.js 6.4.299 under Apache-2.0, `node-poppler` under MIT, Electron under MIT, and Chromium and Node.js under their respective licenses. Their license notices are included in the installed application.

If a source archive attached to the release becomes inaccessible, open an issue at <https://github.com/Shlomas/blood-results-download/issues> to request a copy.
