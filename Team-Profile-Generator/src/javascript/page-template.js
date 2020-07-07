// Create dynamic HTML cards to push into HTML Outline
const newEmployee = input => {
    // Each of the roles have ID and Email but have separate 3rd elements.
    // Need to define the "other" or "extra" element for each role.
    let extraFeature = ""
    let extraFeatureName = ""
    if (input.roleInput === "Manager") {
        extraFeature = input.officeNumInput;
        extraFeatureName = "Office Number: ";
        icon = '<img src="https://img.icons8.com/metro/26/000000/manager.png"/>';
    } else if (input.roleInput === "Engineer") {
        extraFeature = input.githubInput;
        extraFeatureName = "GitHub Username: "; 
        icon = `<img src="https://img.icons8.com/ios-glyphs/30/000000/engineer.png"/>`;
    } else if (input.roleInput === "Intern") {
        extraFeature = input.schoolInput;
        extraFeatureName = "School Name: ";
        icon = `<img src="https://img.icons8.com/metro/26/000000/student-male.png"/>`;
    };
    // Card HTML
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title text-center">${input.nameInput}</h3>
                <h4 class="card-subtitle mb-2 text-center">
                    ${input.roleInput}
                    <span>${icon}</span>
                </h4>
                <h6 class = "card-body border">ID: ${input.idInput}</h6>
                <h6 class = "card-body border">Email: ${input.emailInput}</h6>
                <h6 class = "card-body border">${extraFeatureName}: ${extraFeature}</h6>
            </div>
        </div>
        `       
}    
// HTML Outline
const outlineHTML = pageHTML => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <title>My Team</title>
        </head>
        <body>
            <!-- Begin Header -->
            <header>
                <h1 class = "text-center text-white bg-dark">My Team</h1>
            </header>
            <!-- End Header -->
            <!-- Begin Team Cards -->
            <div class = "container-fluid">
                <div class = "row">
                    <div class = "col-12 col-md-9">
                        ${newEmployee}
                    </div>
                </div>
            </div>
            <!-- End Team Cards -->
        </body>
    </html>
    `
};
// Export module for use in other scripts
module.exports = { newEmployee, outlineHTML }