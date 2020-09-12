module.exports = {
  theme:"antdocs",
  title: "网易SDK文档镜像",
  description: "终究是，写了个寂寞.",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "#",
    editLinks: false,
  },
};