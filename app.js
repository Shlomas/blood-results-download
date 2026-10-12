const RELEASES_API = "https://api.github.com/repos/Shlomas/blood-results-download/releases?per_page=20";

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "";
  return `${Math.round(bytes / 1024 / 1024)} MB`;
}

function formatCount(count) {
  return new Intl.NumberFormat("en-US").format(count);
}

async function loadCurrentRelease() {
  try {
    const response = await fetch(RELEASES_API, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
    const releases = await response.json();
    const release = releases.find((item) => !item.draft && item.assets.some((asset) => asset.name.toLowerCase().endsWith(".exe")));
    if (!release) return;
    const installer = release.assets.find((asset) => asset.name.toLowerCase().endsWith(".exe"));
    const version = release.tag_name.replace(/^v/i, "");

    document.querySelectorAll(".js-download").forEach((link) => { link.href = installer.browser_download_url; });
    document.querySelectorAll(".js-release").forEach((link) => { link.href = release.html_url; });
    document.querySelectorAll(".js-version").forEach((node) => { node.textContent = `Version ${version}`; });
    document.querySelectorAll(".js-version-short").forEach((node) => { node.textContent = release.tag_name; });
    document.querySelectorAll(".js-size").forEach((node) => { node.textContent = formatBytes(installer.size); });
    document.querySelectorAll(".js-filename").forEach((node) => { node.textContent = installer.name; });
    document.querySelectorAll(".js-count").forEach((node) => {
      node.hidden = false;
      node.textContent = `${formatCount(installer.download_count)} installer download${installer.download_count === 1 ? "" : "s"}`;
    });
    document.querySelectorAll(".js-count-detail").forEach((node) => {
      node.firstChild.textContent = `${formatCount(installer.download_count)} installer download${installer.download_count === 1 ? "" : "s"} recorded by GitHub. `;
    });
  } catch (error) {
    console.info("Release details are temporarily unavailable.", error);
  }
}

loadCurrentRelease();
