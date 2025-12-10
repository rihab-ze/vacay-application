# Vacay Scheduling Application

## 🎯 Purpose of the Application

This application is designed to simplify the management of employee breaks and vacation requests. It provides an intuitive interface for employees, managers, and administrators to submit, track, and manage vacation schedules seamlessly.

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

---

### 👥 User Roles

- **Admin**  
  Full access to all features and management capabilities.

- **Manager**  
  Can manage their own requests and those of their team.

- **Employee**  
  Can only view and manage their own requests.

---


## 🚀 How to Integrate and Use the Application

### 1. Clone or Import the Template

Download or clone the project from the Github project link : ###.

### 2. Configure Credentials
To enable the mailing feature:

1. Create an account with an email-sending API provider (e.g., **SendGrid**).
2. Add your API credentials inside:
Shared/credentials/env.json


### 3. Launch the Application
To access and start using the application, open the project in Qodly Studio and run the application.

You can choose your preferred starting page depending on your workflow:
- Set the starting page to Home if you want an overview of the entire application and its features.
- Set the starting page to startPage if you want to land directly on the login process.
 
Open the project in **Qodly Studio** and run the application.  
Explore the different pages to see all available features.

### 4. Test With Different Roles
Log in using predefined test accounts or create new ones to test role behavior:

- **Admin**
- **Manager**
- **Employee**

Each role will present different permissions and interface options.

### 5. Customize as Needed
Feel free to extend the application according to your needs:

- Modify or expand the **data model**
- Add or redesign **UI elements**
- Implement new **custom components**
- Enhance or change the **business logic** (e.g., approval flow, notifications)


