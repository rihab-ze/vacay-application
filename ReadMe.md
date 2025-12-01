# Vacay Scheduling Application

## 🎯 Purpose of the Application

This application is designed to simplify the management of employee breaks and vacation requests. It provides an intuitive interface for employees, managers, and administrators to submit, track, and manage vacation schedules seamlessly.

It also serves as a demo showcasing the implementation of various **Qodly Studio components**, **custom components**, and **role-based access features**.

---

## 🧩 What the Application Covers

### 🏠 Main Features

- **Dashboard**  
  View vacation balances and submit new vacation requests.

- **Requests Page**  
  Displays all vacation requests along with their statuses (approved, pending, rejected).

- **Calendar View**  
  Allows users to check their approved requests in a calendar format.

- **Admin Settings Page**  
  Provides access to administrative tools and configuration options.

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
Explore the different pages to discover all the available features of the system.
####  Generate Initial Data  
Go to your **Project Methods** in 4D and execute the method responsible for seeding the database.  
This will automatically create the essential baseline data such as:
 
- Users
- Leaves  
- Leave requests
- Public holidays 
- Any required relational data  
 
Running this initialization step ensures the app loads correctly and all modules function as expected on first use.
 
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


