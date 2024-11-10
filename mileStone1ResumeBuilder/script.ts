function toggleSection(hideBtnId: string, sectionId: string, showBtnId: string) {
  const hideButton = document.getElementById(hideBtnId) as HTMLButtonElement;
  const section = document.getElementById(sectionId) as HTMLElement;
  const showButton = document.getElementById(showBtnId) as HTMLElement;

  if (!hideButton || !section || !showButton) {
      console.error(
        `Element(s) not found: hideBtnId=${hideBtnId}, sectionId=${sectionId}, showBtnId=${showBtnId}`
      );
      return;
  }

  hideButton.addEventListener("click", () => {
      section.style.display = "none";
      hideButton.style.display = "none";
      showButton.style.display = "block";
  });

  showButton.addEventListener("click", () => {
      section.style.display = "block";
      hideButton.style.display = "block";
      showButton.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleSection("hideEducation", "Education-section", "showEducation");
  toggleSection("hideExperience", "Experience-section", "showexperience");
});
