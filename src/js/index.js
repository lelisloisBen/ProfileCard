import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variablesz = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variablesz.background}" /></div>`;
  let githubLink = `${variablesz.github}`;
  let twitter = `${variablesz.twitter}`;
  let linkedin = `${variablesz.linkedin}`;
  let instagram = `${variablesz.instagram}`;
  if (variablesz.includeCover == false) cover = "<div class='cover'></div>";
  if (variablesz.name === null) variablesz.name = "Lucy";
  if (variablesz.lastname === null) variablesz.lastname = "Dylan";
  if (variablesz.role === null) variablesz.role = "Janitor";
  if (variablesz.country === null) variablesz.country = "Cuba";
  if (variablesz.city === null) variablesz.city = "Havana";
  if (variablesz.socialMediaPosition === null)
    variablesz.socialMediaPosition = "position-right";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${window.variablesz.avatarURL}" class="photo" />
          <h1>${variablesz.name} ${variablesz.lastname}</h1>
          <h2>${variablesz.role}</h2>
          <h3>${variablesz.city}, ${variablesz.country}</h3>
          <ul class="${variablesz.socialMediaPosition}">
            <li><a href="https://twitter.com/${twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${githubLink}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variablesz = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "right",
    // social media usernames
    twitter: "something",
    github: "something",
    linkedin: "something",
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variablesz);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variablesz, values));
    });
  });
};
