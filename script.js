const submitForm = () => {
    const blogForm = document.getElementById("blogForm");
    blogForm.submit();
    alert("Your Details have been submitted!")
    blogForm.reset();
    return false;
}

// // Get data
// const articleName = document.querySelector("#articleHeading");
// const articleContent = document.querySelector("#articleContent");
// const articleImage = document.querySelector("#articleImage");
// const articleDate = document.querySelector("#articleDate");

// // Validate data
// function validateForm() {
//     console.log("Hello form");
// }
