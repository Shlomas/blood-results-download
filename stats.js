const API = "https://api.github.com/repos/Shlomas/blood-results-download/releases?per_page=100";
const totalNode = document.querySelector("#total-count");
const rowsNode = document.querySelector("#release-rows");
const number = new Intl.NumberFormat("en-US");
const date = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" });

fetch(API, { headers: { Accept: "application/vnd.github+json" } })
  .then((response) => {
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
    return response.json();
  })
  .then((releases) => {
    const entries = releases
      .filter((release) => !release.draft)
      .map((release) => {
        const installer = release.assets.find((asset) => asset.name.toLowerCase().endsWith(".exe"));
        return installer ? { release, installer } : null;
      })
      .filter(Boolean);
    const total = entries.reduce((sum, entry) => sum + entry.installer.download_count, 0);
    totalNode.textContent = number.format(total);
    rowsNode.replaceChildren(...entries.map(({ release, installer }) => {
      const row = document.createElement("tr");
      const versionCell = document.createElement("td");
      const link = document.createElement("a");
      link.href = release.html_url;
      link.textContent = release.tag_name;
      versionCell.append(link);
      const dateCell = document.createElement("td");
      dateCell.textContent = date.format(new Date(release.published_at));
      const countCell = document.createElement("td");
      countCell.textContent = number.format(installer.download_count);
      row.append(versionCell, dateCell, countCell);
      return row;
    }));
    if (!entries.length) rowsNode.innerHTML = '<tr><td colspan="3">No installer releases found.</td></tr>';
  })
  .catch(() => {
    totalNode.textContent = "Unavailable";
    rowsNode.innerHTML = '<tr><td colspan="3">GitHub release data is temporarily unavailable.</td></tr>';
  });
