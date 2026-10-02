# Expense Claims Application
**Production site**: [Expense Claims App](https://expensesclaimapp.netlify.app/)  
Deployment status: [![Netlify Status](https://api.netlify.com/api/v1/badges/bcfb6b7e-430d-401d-bd23-5801d8426c55/deploy-status)](https://app.netlify.com/projects/expensesclaimapp/deploys)  
**UAT site**: [Expense Claims App - UAT](https://uat--expensesclaimapp.netlify.app/)  
Deployment status: [![Netlify Status](https://api.netlify.com/api/v1/badges/bcfb6b7e-430d-401d-bd23-5801d8426c55/deploy-status)](https://app.netlify.com/projects/expensesclaimapp/deploys?branch=uat)  
<br><br>

## Purpose
The Expense Claims App is an online tool for colleagues to enter expense details and generate a form that can then be submitted for reimbursement of the value of the expenses.  
The app should be used when you have paid for items or services relating to organisational business using your own money. These costs can be reimbursed following the successful submission of an expense claim form.  
Any expenses above the threshold for that type of expense will be flagged as requiring approval from your line manager. The expense claim form will provide areas to obtain this approval.
<br><br>

## User guidance
Access to the app is not restricted. You do not need to download any software or create an account. You can access the Expense Claims App using the link below:  
\>>[Expense Claims App](https://expensesclaimapp.netlify.app/)<<
<br>
1. On the first screen, enter the information about your expense in the fields provided. If entering an expense for mileage, please provide the number of miles travelled and an expense value will automatically be calculated.
<br><br>

![Expense input screen](/documentation/images/expenseInputScreen.png)  
**Figure 1:** First screen of the app with input fields for expense details.
<br><br>

2. Once all fields have been completed click the ‘Add expense’ button. If you have additional expenses to add, enter the information for each expense one at a time and click ‘Add expense’ after each entry.  
3. When all expenses have been added, click ‘Review expenses’ to view all expenses that have been added to the claim.
<br><br>

![Expense review screen](/documentation/images/expenseReviewScreen.png)  
**Figure 2:** Review screen of two expenses with a total value and one expense requiring line manager approval.
<br><br>

4. All expenses added will be displayed. Warning text will appear beneath any expense that requires your line manager’s approval. You may remove any expenses not needed or return to the previous screen to add additional expenses. When complete, click ‘View claim’.
5. Using your browser’s options, you can now print the page and save a PDF version of the final claim form. This can be sent to your line manager for approval, if required, and then to the expenses team to be processed.
<br><br>

![Claim summary screen](/documentation/images/claimSummaryScreen.png)  
**Figure 3:** Final claim form.
<br><br>

![Print claim summary screen](/documentation/images/printClaimSummary.png)  
**Figure 4:** Right-clicking in Edge to print the form..  
<br><br>

![Print preview claim summary screen](/documentation/images/printPreviewClaimSummary.png)  
**Figure 5:** Print settings with ‘save as PDF’ selected and a preview of the PDF document to be saved.
<br><br>

## Technical documentation
### Local setup
Node.js and Node Package Manager, npm, are required to use this repository.
To clone this repository to a local copy, execute the command:
```
git clone https://github.com/a21am09/ClaimExpenses.git
```
After successfully cloning the repository, install all necessary dependencies and libraries with the command:
```
npm install
```

### Technical details
The Expense Claims App uses the following technology stack:
- HTML
- JavaScript
- CSS

The app is composed of only front-end components with data held in local memory. There are currently no integrations with backend systems or external services.
The application is a React app built with a Vite boilerplate and development server. Several other libraries are required to develop, test, and run the app. These include:
- Vite (development server)
- Vitest (unit tests)
- JSDOM (UI tests)
- React Testing Library (UI tests)

A full list of dependencies can be seen in the file `package.json` at the root of the codebase.
To support separation of concerns, the codebase has been divided into several files and directories. Core JSX files, such as `App.jsx`, are stored in the `src` directory, with subdirectories separating modules according to their purpose.

- `components` – Elements of the app structure, a JSX file for each app screen.
- `tests` – Functional and UI test scripts.
- `utils` – Core logic and functions called by the app.

This modular structure provides reusable code and improves maintainability as each component can be developed or fixed in isolation.

Netlify was selected to host the application because it offers a free service tier and integrates with GitHub repositories. Two deployment workflows have been configured to host production and UAT versions of the Expense Claims App on Netlify.  
See the beginning of this document for links to each version of the app and the ‘Repository configuration’ section for details on the deployment workflows.

An activity diagram was created to illustrate the user’s journey through the app’s three screens and the functions used to build a claim.  
\>>[Activity Diagram](/documentation/Activity%20Diagram.pdf)<<

<br><br>
![Activity diagram](/documentation/images/activityDiagram.png)  
**Figure 6:** Excerpt of activity diagram showing the first actions a user will take in the app.
<br><br>

A use-case diagram was also produced to illustrate the app’s functionality and how the user interacts with it.  
\>>[Use Case Diagram](/documentation/Use%20Case%20Diagram.pdf)<<

<br><br>
![Use case diagram](/documentation/images/useCaseDiagram.png)  
**Figure 7:** Use case diagram for the Expense Claims App.
<br><br>

## Problem Statement
>“The process within the organisation to claim back business expenses is too slow and prone to errors.”

The expense claims process has been identified as a slow and inefficient process within the organisation that could be improved through the implementation of a digital solution. Common pain points include:
- The current form is time-consuming for users to find and complete.
- The form is frequently changed in different organisational areas, creating a fragmented approach.
- Guidance and policy information is held separately from the form and is often difficult to understand.
- There are few or no controls for users within the current process, resulting in a high error rate.
- Expense claims are time-consuming for finance teams to check and process.

The aim of this project is to produce a digital solution that can alleviate or resolve some of these issues. As such, the following business requirements have been identified for the digital solution:
- Reduce the time required to input expense claims.
- Reduce the error rate when submitting forms.
- Provide guidance and information to users at the point of service.
- Reduce the time required for administration teams to check and process expense claims.

<br><br>

## Discovery
To understand the problem statement and pain points contributing to the justification of the digital solution, user personas were created. These personas provided a user perspective on the current process while also considering additional factors, such as wider responsibilities and job roles. Creating the user personas required empathy with these users and helped produce a better understanding of why the pain points cause significant issues.   
\>>[User Personas](/documentation/User%20Personas.pdf)<<

<br><br>
![User persona](/documentation/images/userPersonas.png)  
**Figure 8:** One of three user personas detailed for the project.
<br><br>

To develop the problem statement into a digital solution more detailed information was required. Ideation sessions began to break down what was required of a digital solution starting with the business requirements and the detail within the user personas. This took the form of a simple whiteboard containing sticky notes, which were used to document ideas for the solution.

<br><br>
![Initial ideas board](/documentation/images/initialIdeas.png)  
**Figure 9:** Initial ideas for the Expense Claims App.
<br><br>

Once all the ideas had been recorded on the whiteboard, each was prioritised based on its business impact, potential benefits and approximate development time. The prioritisation method used for this project was MoSCoW.
- MUST have (mandatory)
- SHOULD have (high importance)
- COULD have (not vital to success)
- WONT have (not to be worked on right now)

<br><br>
![Feature prioritisation](/documentation/images/featurePrioritisation.png)  
**Figure 10:** High-level requirements categorised by priority.
<br><br>

The items in the MUST column were items that it was determined would be vitally important for a successful solution. For example, standard input fields would be required to meet the business requirement to reduce errors when documenting expenses.  
The two items in the WONT column were given this prioritisation as the complexity of the coding required to build these was beyond current capabilities. Timescales for the development of this solution would not allow these capabilities to be learnt or sourced. Although these items were assigned a WONT priority for this development phase, they could be implemented in a future version of the solution.  
With high-level requirements now identified, further details about each were collected to create user stories. Each user story had a description, acceptance criteria, and priority. Many high-level requirements were broken into smaller user stories, with the aim of structuring development into discrete sections that could be built and then combined into the final product. These detailed user stories can be seen in the ‘Project management’ section.
<br><br>

## Project management
To track work items for this project, a GitHub project using a Kanban board was created. This provided a visual board to see all work items and their status. The project board uses GitHub’s only work item type, the ‘issue’. For this project, several types of issues were to be used so a custom ‘Issue Type’ property was created to distinguish user stories from bugs. Similarly, a custom ‘Priority’ property was configured using MoSCoW values to reflect the original prioritisation. Option colours were deliberately picked to emphasise MUST items in red and use a gradient through the options to grey for WONT.

<br><br>
![Custom priority field](/documentation/images/customPriorityField.png)  
**Figure 11:** Custom priority field configuration.
<br><br>

Consistency between user stories is important for developers to quickly pick up and understand a development task. To facilitate this, issue templates were created for user stories and bugs. Each had preset headings and guidance, ensuring that the information format remained consistent throughout the project.

<br><br>
![User story template](/documentation/images/userStoryTemplate.png)  
**Figure 12:** User story template configuration with dedicated sections for description and acceptance criteria.
<br><br>

As issues were actioned, they moved across the Kanban board columns from left to right. Each status represents a different stage of development.
- Backlog – Issue has been created but is not yet able to progress.
- Ready – Issue has enough detail to begin development.
- In progress – Issue is currently being developed.
- Done – Issue has been developed and is awaiting deployment to the testing environment.
- UAT – Issue is currently being tested in UAT.
- Delivered – Issue has been deployed to production and is now closed.

<br><br>
![Kanban board](/documentation/images/kanbanBoard.png)  
**Figure 13:** Issues shown in the Kanban board with issue type labels and priority visible.
<br><br>

Requirements prioritised as WONT have been added as issues and retained in the Backlog status. This maintains a record of requirements that were not delivered during previous development phases, allowing them to be progressed in future phases without duplicating the documentation effort.
<br><br>

## Design
The process of designing the user interface of the app began with low-fidelity (lo-fi) mock-ups alongside the initial high-level requirements. These were composed of simple wireframes with basic shapes and no colour. This allowed ideas to be visualised and tested quickly, then discarded without significant loss if they were unsuccessful. The final wireframe designs are shown in Figure 14 with annotations to provide additional detail without making the designs overly complex. These include desired behaviours of the app such as hidden elements based on approval criteria.

<br><br>
![Wireframe design](/documentation/images/wireframe.png)  
**Figure 14:** Lo-fi wireframe designs.
<br><br>

After the lo-fi wireframes had been completed, a more comprehensive high-fidelity (hi-fi) design was made. This design was created using the design software Figma with features to link elements together and perform actions. This meant a semi-functional prototype app could be built to demonstrate the user journey and interactions.  
At this point in the design process, colour elements were introduced. One non-functional requirement of the application was to follow the organisational branding. Therefore, a colour scheme was created based on a reduced set of colour palettes from the branding scheme. The colour scheme shown in Figure 15 is included in the Figma prototype document and focuses on core elements such as primary and secondary colours, background and text, and status colours.

<br><br>
![Design board](/documentation/images/designBoard.png)  
**Figure 15:** App colour scheme.
<br><br>

To provide consistency within the prototype and speed up work, a component library was created. Each component used global colour variables and local variables to control component-specific behaviour. Figure 16 shows all the components within the prototype, including the expenseEntry example, which has two variations depending on the use case.

<br><br>
![Prototype components](/documentation/images/components.png)  
**Figure 16:** Components within the prototype.
<br><br>


![Custom component parameters](/documentation/images/componentParameters.png)  
**Figure 17:** Custom input parameters for the expenseEntry component.
<br><br>

![Use of prototype component](/documentation/images/componentUseCase.png)  
**Figure 18:** Example use of the expenseEntry component and input parameters (highlighted in red box).
<br><br>

Although creating the component library was time-consuming, its benefits will increase as further changes are made to the app and its prototype.  
The final prototype is shown in Figure 19, with blue arrows indicating elements of interactivity. The blue arrow to the option list indicates the list will appear when selecting the expense type input box in the prototype and will disappear when clicking away from the list. This is to emulate the experience of a dropdown box.

<br><br>
![App prototype](/documentation/images/prototype.png)  
**Figure 19:** Overview of the Figma prototype.
<br><br>

## Repository configuration
The GitHub repository used to store the codebase of the app has been configured for several aspects of development, testing, and project management.  
Three permanent branches are maintained in the repository for the development, UAT and production versions of the codebase. New features are developed in dedicated feature branches and merged back to the `development` branch when completed and technically tested. New features are grouped together and then merged from `development` to `uat` to begin testing. Once the features have passed testing, they will be merged from `uat` to `main`, the production branch.  
Keeping a development branch for a project with a single developer is potentially superfluous, as only a single feature is built at a time, and additional pull requests are required to merge back to `development`. However, if more developers were to begin working on the project, this configuration would provide a stable development version of the codebase from which they could create features in parallel.  
GitHub workflows have been set up for specific actions within the repository. When a pull request is created for the `uat` or `main` branch, the `npm test` command is executed to run the logic and UI test suites. The merge can then be prevented if any tests fail.
When a pull request is created for `uat` or `main`, Netlify checks occur to determine if deployment will be successful. When the pull request is completed and the merge into `uat` or `main` takes place, Netlify will automatically deploy the app to the appropriate host location; the production site for `main` or a UAT version for the `uat` branch.  
For examples of pull requests and automated tests, see the ‘Development’ section of this document.  
Branch rulesets are controls that can be implemented to prevent specific actions taking place. Rulesets have been created for each of the permanent branches in the repository with differing rules. For each, deletion and forced pushes have been prevented. The `main` branch has more stringent rules, requiring a pull request before merging and requiring all Node tests and Netlify deploy-preview checks to pass before a merge can take place. Should more developers or repository administrators join the project in the future, the ruleset for some branches could be modified to require a set number of approvals before a pull request is merged.
<br><br>

## Development
Once a user story contained sufficient information, including a description and acceptance criteria, it was moved to the ‘Ready’ state. Development initially focused on MUST requirements, followed by SHOULD requirements, to ensure that the highest-priority features were delivered first. Developer notes were then added to each issue, providing a list of the tasks required to implement the feature. Figure 20 shows the development tasks for issue #11, which concerned the indication of expenses requiring line manager approval.

<br><br>
![List of development tasks](/documentation/images/developmentTasks.png)  
**Figure 20:** Development tasks needed to complete issue #11.
<br><br>

When work began on a ticket, a dedicated feature branch was created from the `development` branch, after which the ticket was moved to ‘In progress’. During development, the feature was assessed against its acceptance criteria, and each criterion was marked as complete when satisfied. Once all the acceptance criteria had been confirmed, the ticket was considered complete.

<br><br>
![User story](/documentation/images/userStory.png)  
**Figure 21:** Completed acceptance criteria for issue #11.
<br><br>

The feature branch codebase was then merged back into the `development` branch with a pull request linked to the ticket that had been developed. Node test scripts were executed when attempting to merge with the `development` branch to confirm existing and new test cases were successful before the merge. Once the merge was complete, the feature branch was deleted, leaving the `development` branch with the latest codebase. The feature issue was then moved to the ‘Done’ state.  
New features were not immediately pushed to the UAT version of the app. When changes were merged into the `uat` branch, automated Netlify deployment actions deployed the app to the UAT site. When testing in a UAT environment, it is important to keep the app stable so that the results remain consistent and accurate. Frequent new features could invalidate previous tests. Therefore, multiple features were developed and merged into the development branch to create a package of work ready to be deployed to UAT. A pull request was then raised to merge the `development` branch to `uat`, linking all the included features to maintain traceability throughout their development.

<br><br>
![Pull request](/documentation/images/pullRequest.png)  
**Figure 22:** Pull request from `development` to `uat` linking the three tickets that are contained in the release.
<br><br>

In some instances, code errors occurred that were not detected by the automated tests. In the example shown, a bug ticket was created to document the issue before it was fixed. The information required for a bug report differed from that required for a user story. The bug issue template requires a description of the bug, steps to reproduce the issue, what the expected behaviour of the system is, and screenshots of the issue. Figure 23 shows a bug ticket for an issue with date formatting. When inputting a date, the format was correct but was then incorrect on the next screen.

<br><br>
![Bug ticket](/documentation/images/bug.png)  
**Figure 23:** Bug ticket for date format inconsistencies.
<br><br>

Bug tickets followed a similar workflow to user stories. A ticket was moved to ‘Ready’ once the required information had been recorded. A dedicated branch was then created for the fix and merged into the `development` branch when the work was complete. In the event of a serious bug within the production app, a hotfix could be applied. This was not necessary during the project, but a hotfix would involve creating a new branch from `main`, developing and testing the fix, and then merging the branch back into `main`. This would prevent mid-development or untested features being deployed to production.  
Once features within UAT had passed testing, a pull request would be created to merge the completed features into `main` and deploy to the production site. Again, features and bug tickets would be linked to the pull request and, following a successful merge, would automatically be moved to the ‘Delivered’ state.
<br><br>

## Testing
The Expense Claims App was evaluated through unit testing, UI testing and an automated accessibility audit.  
Unit tests were written using the Vitest framework to verify the logic of functions within `expenseUtils.js`. Test-driven development (TDD) was used to build and iterate the application. An example of TDD is outlined below.  
During development of the `calculateMileageExpense` function, a pull-request review identified that no test cases covered negative or non-numeric inputs. In the current build of the app, the only input for this function is a numeric input field. However, refactoring the function to handle these types of inputs would make the function more robust and suitable for additional use cases in future development. TDD was used to improve the function by first writing test cases to account for the two requested scenarios. Figure 24 shows the full set of test cases for the function including negative and non-numeric inputs, and Figure 25 shows the tests failing before the function was refactored.

<br><br>
![Unit tests](/documentation/images/unitTests.png)  
**Figure 24:** Test cases for the `calculateMileageExpense` function.
<br><br>

![Failing test cases](/documentation/images/failingUnitTests.png)  
**Figure 25:** Test cases failing as the `calculateMileageExpense` function does not handle these inputs correctly.
<br><br>

The `calculateMileageExpense` function was refactored to include logic to handle these inputs and pass the unit tests.  
To verify the UI’s functionality, React Testing Library was used to simulate user interactions and inspect elements in the DOM. Figure 26 shows one such UI test case using `userEvent` to simulate a user inputting an expense, adding it to the claim, navigating to the review screen, and confirming that the added expense appears on the screen.

<br><br>
![UI tests](/documentation/images/uiTests.png)  
**Figure 26:** UI test case for adding and viewing an expense.
<br><br>

A full set of passing test cases for both unit and UI tests is shown in Figure 27 below.

<br><br>
![All tests passing](/documentation/images/passingTests.png)  
**Figure 27:** All test cases passing.
<br><br>

Accessibility is an important aspect of software design because it enables people with different needs to interact with a system. To assess the Expense Claims App, the browser extension Lighthouse was used to identify accessibility issues. Figure 28 presents the results of the Claim Summary screen analysis, which identified issues with two interface elements.

<br><br>
![Accessibility check results](/documentation/images/accessibilityCheck.png)  
**Figure 28:** Lighthouse results of Claim Summary screen.
<br><br>

The two issues were resolved by adding labels to each of the approver fields at the bottom of the form and changing the `h3` heading to an `h2` heading to provide a sequential heading structure.
During this accessibility review, ARIA labels were added to all buttons in the app. Despite not being identified in the Lighthouse analysis, these accessible labels provide additional context for screen readers.
More information about the Web Accessibility Initiative’s Accessible Rich Internet Applications specification (WAI-ARIA) can be found at the link below.  
\>>[WAI-ARIA Overview]( https://www.w3.org/WAI/standards-guidelines/aria/)<<
<br><br>

## Future development
The Expense Claims App is now functional and capable of achieving the highest prioritised requirements. However, there are additional features that could be developed to improve the app. Some original requirements were documented as tickets but were not developed because they had been assigned lower priorities. These requirements, such as preventing out-of-policy expenses from being added, could be implemented in a future version.  
Additional features beyond the original remit of the project are also possible:
- Back-end database to store expense data.
- Workflows to notify line managers and obtain their approval.
- Direct integration with the organisation’s payment system to transfer approved claims automatically for processing.
- Configuration settings to control expense approval limits without the need for development and deployment.
- Provide additional expense type options such as ‘workplace adjustment asset’.
- Make the application responsive, with a UI suitable for desktop, tablet and mobile screen sizes.
- Document uploads to provide proof of purchase for each expense.
- Document recognition to identify and extract key information from receipts and invoices.
<br><br>

## Conclusion
The development and delivery of the Expense Claims App can be considered successful. Although some bugs arose during development, they were resolved and a stable version of the application is now available in production. The extent to which the app has achieved its intended business outcomes can be considered against the original requirements.
- [x] Reduce the time required to input expense claims.  
The input fields are clear and concise, and the user journey is limited to three screens.
- [x] Reduce the error rate when submitting forms.  
Validation prevents unsupported expense types from being entered. Mileage values are calculated automatically, and monetary values are restricted to numeric entries with two decimal places.
- [x] Provide guidance and information to users at the point of service.  
The app presents calculated values for mileage claims. Dynamic warnings and supporting text provide guidance only when it is relevant to the user’s circumstances.
- [x] Reduce the time required for administration teams to check and process expense claims.  
The app produces a consistently formatted claim containing all recorded expenses. Differences in the header text and the presence of approval fields clearly indicate whether line manager approval is required.

Monitoring the use of the app will provide more reliable evidence of whether its intended business benefits have been realised. Future development could enhance these benefits and extend the value provided to the organisation and its users.
