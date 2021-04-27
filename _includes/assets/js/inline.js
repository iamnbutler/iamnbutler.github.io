if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// // Redirect search to site-scoped google search for now
// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const search = form.querySelector("input[type=search]");
//   search.value = "site:iamnbutler.com " + search.value;
//   form.submit();
// });