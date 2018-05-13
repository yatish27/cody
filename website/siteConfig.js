/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "Coupa",
    image: "/cody/img/users/coupa.png",
    infoLink: "https://www.coupa.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Cody" /* title for your website */,
  tagline: "Your friendly neighborhood code review bot",
  url: "https://github.com/aergonaut/cody" /* your website url */,
  baseUrl: "/cody/" /* base url for your project */,
  projectName: "cody",
  organizationName: "aergonaut",
  headerLinks: [
    { doc: "commands", label: "Docs" },
    { blog: true, label: "Blog" },
    { href: "https://github.com/aergonaut/cody", label: "GitHub" }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/code.png",
  footerIcon: "img/code.png",
  favicon: "img/code-black.png",
  /* colors for website */
  colors: {
    primaryColor: "#6a1b9a",
    secondaryColor: "#9c4dcc"
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Chris Fung",
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/aergonaut/cody",
  onPageNav: "separate"
};

module.exports = siteConfig;
