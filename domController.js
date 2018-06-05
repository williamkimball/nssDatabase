const addBtn = document.querySelector("#addBtn");

let staffArticle = document.querySelector("#staff");
console.log(staffArticle)

const staffFragment = document.createDocumentFragment();

const buildStaffArticle = () => {
    while (staffArticle.firstChild) {
        staffArticle.removeChild(staffArticle.firstChild)
    }
    for (i = 0; i < NssDatabase.staff.length; i++) {
        const staffMember = NssDatabase.staff[i]

        const sectionElement = document.createElement("section");
        sectionElement.textContent = `${staffMember.name}: ${staffMember.cohort}`
        staffFragment.appendChild(sectionElement);
    }

    staffArticle.appendChild(staffFragment);
}

buildStaffArticle();

const getUserInput = () => {
    const inputName = document.querySelector("#inputName").value;
    const inputCohort = document.querySelector("#inputCohort").value;

    const newStaffMember = {
        name: inputName,
        cohort: inputCohort
    }
    NssDatabase.staff.push(newStaffMember)
    saveDatabase(NssDatabase, "NssDb")
    buildStaffArticle()

}
addBtn.addEventListener("click", getUserInput);

