
const WEB_LOOP_DATA_URL = `https://raw.githubusercontent.com/c2000e/web-loops/main/tufts-loop.json`;

function initTuftsLoop() {

    const webLoop = document.getElementById("tufts-loop");
    const thisSiteName = webLoop.getAttribute("site-name");

    fetch(WEB_LOOP_DATA_URL)
      .then((response) => response.json())
      .then((sites) => {
          const thisSiteIndex = sites.findIndex(
              (site) => site.name === thisSiteName
          );

          let prevSiteIndex = thisSiteIndex - 1;
          if (prevSiteIndex < 0) prevSiteIndex = sites.length - 1;

          let nextSiteIndex = thisSiteIndex + 1;
          if (nextSiteIndex > sites.length - 1) nextSiteIndex = 0;

          const mainLink = webLoop.querySelector("#main");
          const prevLink = webLoop.querySelector("#prev");
          const nextLink = webLoop.querySelector("#next");

          mainLink.href = sites[0].url;
          prevLink.href = sites[prevSiteIndex].url;
          nextLink.href = sites[nextSiteIndex].url;
      });
}

