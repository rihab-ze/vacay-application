# Vacay Scheduling Application
This demo app is built with 4D Qodly Pro and is meant to inspire you or help you kickstart your own project.

## 🎯 Purpose of the Application

The Vacay Scheduling Application simplifies the management of employee breaks and vacation requests across an organization. It enables employees to submit leave requests, managers to review and approve requests from their teams, and administrators to maintain leave types, holidays, and overall system configuration.

It also serves as a demo showcasing the implementation of various **Qodly Studio components**, **custom components**, and **role-based access features**.
![Dashboard](Project/Sources/Shared/visuals/Dashboard.png)

---

## 🧩 What the Application Covers

### 🏠 Main Features

- **Dashboard**  
  View vacation balances and submit new vacation requests.
  
  ![modal](Project/Sources/Shared/visuals/modal.png)


- **Requests Page**  
  Displays all vacation requests along with their statuses (approved, pending, rejected).

  ![requests](Project/Sources/Shared/visuals/requests.png)


- **Calendar View**  
  Allows users to check their approved requests in a calendar format.

  ![calendar](Project/Sources/Shared/visuals/Calendar.png)

- **Admin Settings Page**  
  Provides access to administrative tools and configuration options.
  
![holidays](Project/Sources/Shared/visuals/holidays.png)

## How to run
 
###  Pre-requisites (4D Software):
- Download the latest Release version of 4D: [Product Download](https://us.4d.com/product-download/Feature-Release)
- Or the latest Beta version: [Beta Program](https://discuss.4d.com/)
- Follow activation steps: [Installation Guide](https://developer.4d.com/docs/GettingStarted/installation)
 
### Steps to Run the Project
- Clone or download this repository to your local machine. Need help? See Using GitHub with 4D.
- Open the project in 4D: Go to File > Open Project (More details here: Open a Project)
- Open Qodly Studio: Go to Design > Qodly Studio menu
- Run the application: Click Run to start the server and preview the app in your browser
 
## Configuration & Credentials
 
This section explains exactly how to wire credentials and test the app (what to create, where to place files, and what the app already provides).
 
### Do I need to create external accounts?
  - Mailing: Yes — if you want emails to be sent (approvals, notifications) you should create an SMTP-capable account (or SMTP-compatible API service such as SendGrid SMTP).
    - Example (SendGrid SMTP):
     - Host: `smtp.sendgrid.net`
     - Port: `587` (or 465 for SSL)
     - User: `apikey` (SendGrid uses `apikey` as username)
     - Password: `<your SendGrid API key>`
 
### Where does the app read credentials?
  - The loader is `Project/Sources/Classes/DataStore.4dm` function `getCredentials()`; it reads a JSON file from the path currently coded as `/PROJECT/Sources/Shared/assets/credentials/env.json`
 
### What should the credentials file contain?
  - Minimal example for SMTP (JSON):
 
```json
{
  "host": "smtp.sendgrid.net",
  "port": 587,
  "user": "apikey",
  "password": "SG.xxxxxx-your-sendgrid-key"
}
```
 
### Security best-practices
  - Do not commit real API keys to source control. Use `.gitignore` to exclude `env.json`, or keep real secrets in a secure vault and inject at deploy time
 
### How to test email sending locally
Provide SendGrid/SMTP credentials as above, then trigger an action that sends mail (e.g., leave approval that calls `Mailing.4dm:sendMails`).
 
## Test accounts and sample data
  - The app includes a data generator `Project/Sources/Classes/GenerateData.4dm` which creates sample users with known emails and passwords. You can call it from the UI (Home.WebForm) or run `ds.generateData()` in the server console.




## How to run
 
###  Pre-requisites (4D Software):
- Download the latest Release version of 4D: [Product Download](https://us.4d.com/product-download/Feature-Release)
- Or the latest Beta version: [Beta Program](https://discuss.4d.com/)
- Follow activation steps: [Installation Guide](https://developer.4d.com/docs/GettingStarted/installation)
 
### Steps to Run the Project
- Clone or download this repository to your local machine. Need help? See Using GitHub with 4D.
- Open the project in 4D: Go to File > Open Project (More details here: Open a Project)
- Open Qodly Studio: Go to Design > Qodly Studio menu
- Run the application: Click Run to start the server and preview the app in your browser
 
## Configuration & Credentials
 
This section explains exactly how to wire credentials and test the app (what to create, where to place files, and what the app already provides).
 
### Do I need to create external accounts?
  - Mailing: Yes — if you want emails to be sent (approvals, notifications) you should create an SMTP-capable account (or SMTP-compatible API service such as SendGrid SMTP).
    - Example (SendGrid SMTP):
     - Host: `smtp.sendgrid.net`
     - Port: `587` (or 465 for SSL)
     - User: `apikey` (SendGrid uses `apikey` as username)
     - Password: `<your SendGrid API key>`
 
### Where does the app read credentials?
  - The loader is `Project/Sources/Classes/DataStore.4dm` function `getCredentials()`; it reads a JSON file from the path currently coded as `/PROJECT/Sources/Shared/assets/credentials/env.json`
 
### What should the credentials file contain?
  - Minimal example for SMTP (JSON):
 
```json
{
  "host": "smtp.sendgrid.net",
  "port": 587,
  "user": "apikey",
  "password": "SG.xxxxxx-your-sendgrid-key"
}
```
 
### Security best-practices
  - Do not commit real API keys to source control. Use `.gitignore` to exclude `env.json`, or keep real secrets in a secure vault and inject at deploy time
 
### How to test email sending locally
Provide SendGrid/SMTP credentials as above, then trigger an action that sends mail (e.g., leave approval that calls `Mailing.4dm:sendMails`).
 
## Test accounts and sample data
  - The app includes a data generator `Project/Sources/Classes/GenerateData.4dm` which creates sample users with known emails and passwords. You can call it from the UI (Home.WebForm) or run `ds.generateData()` in the server console.

## Where to find the code for each feature
If you want to change the behavior or appearance of a specific feature, edit the files listed below.
 
- Authentication / Login
  - Code: `Project/Sources/Classes/DataStore.4dm` (method: `authentify`) — handles login, session privileges and landing page routing.
  - UI: `Project/Sources/WebForms/login.WebForm` 
 
- Dashboard (balances)
  - UI: `Project/Sources/WebForms/Dashboard.WebForm`
  - Code: `Project/Sources/Classes/Employee.4dm` (`getBalanceChart()`: Leave balance distribution by leave type for pie-chart visualization.
)
  
- Holidays view
  - UI: `Project/Sources/WebForms/HolidausPage.WebForm` .
  - Code: `Project/Sources/Classes/Holiday.4dm` (`getRangeDate()`: Returns a collection containing the start and end dates of the leave.).
  
- Mailing / notifications
  - Server: `Project/Sources/Classes/Mailing.4dm` — constructs SMTP transporter and sends emails.
  - Credentials loader: `Project/Sources/Classes/DataStore.4dm` (function `getCredentials()` reads credentials file).