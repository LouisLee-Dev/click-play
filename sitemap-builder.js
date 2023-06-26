require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./src/index.js').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://www.clickplay.pro/')
          .save('./public/sitemap.xml')
  );