function toggleSection(hideBtnId, sectionId, showBtnId) {
    var hideButton = document.getElementById(hideBtnId);
    var section = document.getElementById(sectionId);
    var showButton = document.getElementById(showBtnId);
    if (!hideButton || !section || !showButton) {
        console.error("Element(s) not found: hideBtnId=".concat(hideBtnId, ", sectionId=").concat(sectionId, ", showBtnId=").concat(showBtnId));
        return;
    }
    hideButton.addEventListener("click", function () {
        section.style.display = "none";
        hideButton.style.display = "none";
        showButton.style.display = "block";
    });
    showButton.addEventListener("click", function () {
        section.style.display = "block";
        hideButton.style.display = "block";
        showButton.style.display = "none";
    });
}
document.addEventListener("DOMContentLoaded", function () {
    toggleSection("hideEducation", "Education-section", "showEducation");
    toggleSection("hideExperience", "Experience-section", "showexperience");
});
