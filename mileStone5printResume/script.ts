document.addEventListener("DOMContentLoaded", () => {
  const resumeform = document.getElementById("resume-form");
  const profilePictureInput = document.getElementById(
    "profilePicture"
  ) as HTMLInputElement;

  resumeform?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const age = (document.getElementById("age") as HTMLInputElement).value;
    const skill = (document.getElementById("skills") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement)
      .value;
    const institution = (
      document.getElementById("institution") as HTMLInputElement
    ).value;
    const years = (document.getElementById("years") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement)
      .value;
    const position = (document.getElementById("position") as HTMLInputElement)
      .value;
    const duration = (document.getElementById("duration") as HTMLInputElement)
      .value;
    const task1 = (document.getElementById("tasks1") as HTMLInputElement).value;

    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile
      ? URL.createObjectURL(profilePictureFile)
      : "";

      const skillsList = skill.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
      const experienceList = task1.split(',').map(task => `<li>${task.trim()}</li>`).join('');
    const resumeOutput = `
        <h2 class='main-heading'>Resume</h2>
        <div class="container">
        <section>
          <div class="header">
            <div class="img-section">
              ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ""}
            </div>
            <div class="info">
              <h1>${name}</h1>
              <h3>Full-stack Web Developer</h3>
            </div>
          </div>
        </section>
        <div>
          <div class="section-area">
            <div class="box1 bg">
              <section class="information">
                <div class="personal-info">
                  <h1 class="head">Personal Information</h1>
                  <p><span>Name:</span> ${name}</p>
                  <p><span>Age:</span> ${age}</p>
                  <p><span>Email:</span> ${email}</p>
                  <p><span>Phone:</span>${phone}</p>
                </div>
                <div class="personal-info">
                  <h1 class="head">Skills</h1>
                  <p>${skillsList}</p>
                </div>
                <div class="personal-info">
                  <h1 class="head">Education</h1>
                  <div class="Education1">
                    <h2>${degree}</h2>
                    <p>${years}</p>
                  </div>
                </div>
              </section>
            </div>
            <div class="box2">
              <section>
                <div class="personal-info">
                  <h1 class="head">Work Experience</h1>
                  <div class="experience1">
                    <h2>${company}</h2>
                    <p><span>Position:</span>${position}</p>
                    <p><span>Duration:</span>${duration}</p>
                    <p>${experienceList}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          </div>
          <button type="button" onclick="printCV()" class="submit-btn">Print CV</button>
        </div>
    `;

    const resumeOutputElement = document.getElementById(
      "resumeOutput"
    ) as HTMLDivElement;
    resumeOutputElement.innerHTML = resumeOutput;
    resumeOutputElement.style.display = "block";
  });
});

function printCV(){
  window.print();
}