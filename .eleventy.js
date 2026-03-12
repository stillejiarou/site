const rssPlugin = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://stillejiarou.neocities.org"
    }
  });

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");

  eleventyConfig.addFilter("readingTime", function (content) {
    if (!content) return "";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return dateObj.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};

// npx @11ty/eleventy --serve