require("dotenv").config();
const Airtable = require("airtable");
let base = new Airtable({ apiKey: process.env.KEY }).base("appilsCAnAoIUEY8R");

module.exports = () => {
  return new Promise((resolve, reject) => {
    let all_posts = []; // change 'all_posts' to something more relevant to your project
    base("Posts") // change 'New' to your base name
      .select({ view: "Post Grid" }) // change 'All' to your view name
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            all_posts.push({
              id: record._rawJson.id,
              ...record._rawJson.fields,
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(all_posts);
          }
        }
      );
  });
};
