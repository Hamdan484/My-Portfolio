import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    branch: "gh-pages",
    dotfiles: true,
    beforeAdd(git) {
      return git.rm(".gitattributes", { force: true }).catch(() => {});
    },
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("Published");
  },
);
