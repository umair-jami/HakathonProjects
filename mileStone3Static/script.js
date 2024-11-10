document.addEventListener("DOMContentLoaded", function () {
    var resumeform = document.getElementById("resume-form");
    var profilePictureInput = document.getElementById("profilePicture");
    resumeform === null || resumeform === void 0 ? void 0 : resumeform.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var age = document.getElementById("age").value;
        var skill = document.getElementById("skills").value;
        var degree = document.getElementById("degree")
            .value;
        var institution = document.getElementById("institution").value;
        var years = document.getElementById("years").value;
        var company = document.getElementById("company")
            .value;
        var position = document.getElementById("position")
            .value;
        var duration = document.getElementById("duration")
            .value;
        var task1 = document.getElementById("tasks1").value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var skillsList = skill.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
        var experienceList = task1.split(',').map(function (task) { return "<li>".concat(task.trim(), "</li>"); }).join('');
        var resumeOutput = "\n        <h2 class='main-heading'>Resume</h2>\n        <section class=\"container\">\n          <div class=\"header\">\n            <div class=\"img-section\">\n              ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : "", "\n            </div>\n            <div class=\"info\">\n              <h1>").concat(name, "</h1>\n              <h3>Full-stack Web Developer</h3>\n            </div>\n          </div>\n        </section>\n        <div class=\"container\">\n          <div class=\"section-area\">\n            <div class=\"box1\">\n              <section class=\"information\">\n                <div class=\"personal-info\">\n                  <h1 class=\"head\">Personal Information</h1>\n                  <p><span>Name:</span> ").concat(name, "</p>\n                  <p><span>Age:</span> ").concat(age, "</p>\n                  <p><span>Email:</span> ").concat(email, "</p>\n                  <p><span>Phone:</span>").concat(phone, "</p>\n                </div>\n                <div class=\"personal-info\">\n                  <h1 class=\"head\">Skills</h1>\n                  <p>").concat(skillsList, "</p>\n                </div>\n                <div class=\"personal-info\">\n                  <h1 class=\"head\">Education</h1>\n                  <div class=\"Education1\">\n                    <h2>").concat(degree, "</h2>\n                    <p>").concat(years, "</p>\n                  </div>\n                </div>\n              </section>\n            </div>\n            <div class=\"box2\">\n              <section>\n                <div class=\"personal-info\">\n                  <h1 class=\"head\">Work Experience</h1>\n                  <div class=\"experience1\">\n                    <h2>").concat(company, "</h2>\n                    <p><span>Position:</span>").concat(position, "</p>\n                    <p><span>Duration:</span>").concat(duration, "</p>\n                    <p>").concat(experienceList, "</p>\n                  </div>\n                </div>\n              </section>\n            </div>\n          </div>\n        </div>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
        disableFormElements(resumeform);
    });
});
function disableFormElements(form) {
    var inputs = form.querySelectorAll('input,textarea,button');
    inputs.forEach(function (input) {
        input.setAttribute('disabled', 'true');
    });
}
