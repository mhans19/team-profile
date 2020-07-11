# <div align="center">**TEAM PROFILE GENERATOR**</div>

## **TABLE OF CONTENTS**    
[1. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[2. LICENSE](#LICENSE)  
[3. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. CONTRIBUTIONS](#CONTRIBUTIONS)  
[6. DEVELOPMENT](#DEVELOPMENT)  
[7. INSTALLATION](#INSTALLATION)   
[8. USAGE](#USAGE)   
[9. TESTING](#TESTING)  
[10. USER STORY](#USER-STORY)  
[11. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)   
[12. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)    
[13. FUNCTIONALITY](#FUNCTIONALITY)  

---

## **LICENSE**  
![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
> This application is covered under the [MIT License](https://opensource.org/licenses/MIT)    

---

## **PROJECT DESCRIPTION**
> The purpose of this challenge was to build a Node.js command-line application. The application prompts users for information regarding employment teams (i.e., Manager, Engineers, and Interns) via the NPM package, [Inquirer](https://www.npmjs.com/package/inquirer). The user's input is used to generate an HTML webpage that displays profile information for each employee.     
   
> Additionally, this project was to utilize test-driven development (TDD), meaning testing for each part of the code was necessary. This project utilizes the NPM package [Jest](https://www.npmjs.com/package/jest) for running all tests.   

---

## **APPLICATION LINKS**
> Live Application (Not relevant for this project)  
> [GitHub Repository](https://github.com/mhans19/team-profile)  
> [Video Demonstration](https://youtu.be/nQ213r0OWlA)  
> [Sample README Output](./dist/my-team.html)  

---

## **CONTRIBUTIONS**   
Please contact **MORGAN HANSEN** for all application inqueries.
| Email | GitHub | LinkedIn |  
| :------: | :------: |  :------: |  
| <mdhansen19@gmail.com> | [GitHub](https://github.com/mhans19?tab=repositories) |  [LinkedIn](https://www.linkedin.com/in/morgan-hansen-47235872/?challengeId=AQF6MR471a-pZgAAAXMTL5e4xLqg_LNW5yawcXgk_uUmLrzsXk5ehOnzlQuK2dOVeX4ARtJwxmcHQrQhtgL_jM96wbBzhLvmAA&submisksionId=813167e8-8027-1e16-5911-1c143c23561f) |  
  
---

## **DEVELOPMENT**  
This application was developed with the following application structures:  
1. [Node.js](https://nodejs.org/en/)  
2. [Node Package Manager (NPM)](https://www.npmjs.com/)
    + [NPM Inquirer](https://www.npmjs.com/package/inquirer)  
    + [NPM File System (fs)](https://nodejs.org/api/fs.html)  
    + [NPM Jest](https://www.npmjs.com/package/jest)
3. [JavaScript (js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   
4. [jQuery](https://jquery.com/)   
5. [Bootstrap](https://getbootstrap.com/)
6. [Hypertext Markup Language (HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML)

---

## **INSTALLATION**
> Prior to using the application, a user *must* complete the following:  
> 1. Download the [GitHub repository](https://github.com/mhans19/team-profile) to a local repository. 
> 2. [Install dependencies](#DEVELOPMENT) such as Node.js and NPM packages.  
> 3. Ensure installation of a Command Line Interface (CLI) utility such as *Git Bash* or *Terminal*.

---

## **USAGE**
> The application must be operated with a Command Line Interface (CLI) software. Using the command line, navigate to the local repository containing the *Index.js* file. Then, call upon node followed by the file name - *node Index.js*.   
[Walkthrough Demonstration](https://youtu.be/nQ213r0OWlA)  

---

## **TESTING**
> Test-Driven Development (TDD) strategies were used for developing this application. Testing was performed with the NPM package, [Jest](https://www.npmjs.com/package/jest).  

---

## **USER STORY**  
> AS A manager  
> I WANT to generate a webpage that displays my team's basic info  
> SO THAT I have quick access to their emails and GitHub profiles  
---

## **ACCEPTANCE CRITERIA**
> GIVEN a command-line application that accepts user input  
> WHEN I am prompted for my team members and their information  
> THEN an HTML file is generated that displays a nicely formatted team roster based on user input  
> WHEN I click on an email address in the HTML  
> THEN my default email program opens and populates the TO field of the email with the address  
> WHEN I click on the GitHub username  
> THEN that GitHub profile opens in a new tab  
> WHEN I start the application  
> THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number  
> WHEN I enter the team manager’s name, employee ID, email address, and office number  
> THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team  
> WHEN I select the engineer option  
> THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu  
> WHEN I select the intern option  
> THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu  
> WHEN I decide to finish building my team  
> THEN I exit the application, and the HTML is generated  

---

## **GRADING REQUIREMENTS**
#### <div align="center">This Challenge is graded based on the following criteria:</div>
### **<div align="center">Deliverables: 15%</div>**
- [x] A sample HTML file generated using the application must be submitted.
- [x] Your GitHub repository containing your application code.  

### **<div align="center">Walkthrough Video: 32%</div>**
- [x] A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
- [x] The walkthrough video must show all four tests passing from the command line.
- [x] The walkthrough video must demonstrate how a user would invoke the application from the command line.
- [x] The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
- [x] The walkthrough video must demonstrate a generated HTML file that matches the user input.

### **<div align="center">Technical Acceptance Criteria: 40%</div>**
#### <div align="center">Satisfies all of the above acceptance criteria plus the following:  </div>
- [x] Uses the Inquirer package.
- [x] Uses the Jest package for a suite of unit tests.
- [x] The application must have these classes: Employee, Manager, Engineer, and Intern.

### **<div align="center">Repository Quality: 13%</div>**
- [x] Repository has a unique name.
- [x] Repository follows best practices for file structure and naming conventions.
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages.
- [x] Repository contains a high-quality README with description and a link to walkthrough video.

---

## **FUNCTIONALITY**
1. From the command line interface (CLI), navigate to the local repository containing the *Index.js* file.  
![](/assets/images/localRepo.PNG)  
2. Once in the local repository, type *node Index.js* into the command line. Then press 'Enter'.  
![](/assets/images/initiateNode.PNG)  
3. From the command line, give a response to each of the questions prompted. Press 'Enter' to move to the next question. Once all the questions are answered, a validating message appears and instructs users that the newly generated HTML file is located within the 'dist' folder in the repository.  
![](/assets/images/nodePrompts.PNG)  
4. Navigate to the created HTML and see that all responses given from the command line have populated into the HTML template.  
![](/assets/images/htmlPop.PNG)  
5. Open the HTML file in a web-browser!  
![](/assets/images/teamPage.PNG)