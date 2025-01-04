# Project Name: Academic Calendar

A web-based application for managing academic events and schedules with a responsive calendar interface.

## **Features**

- Fully responsive calendar.
- Dynamic event rendering based on JSON data.
- Sidebar navigation.
- Header with user profile and notifications.

---

## **Getting Started**

### **Prerequisites**

Make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/downloads)

---

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/venkat-ui-dev/AcademiCalendar.git
   cd academic-calendar
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

---

## **Project Structure**

```
.
├── src
│   ├── assets
│   │   └── Images and static files
│   ├── components
│   │   ├── Header
│   │   │   └── Header.jsx
│   │   ├── Sidebar
│   │   │   └── Sidebar.jsx
│   │   ├── Calendars
│   │   │   ├── MyCalendar.jsx
│   │   │   └── AcademiCalendar.jsx
│   │   ├── Common
│   │   │   ├── CenterIconLinks.jsx
│   │   │   ├── LogoSection.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SideBarNavigation.jsx
│   │   │   └── UserProfile.jsx
│   │   ├── MySchedule
│   │   │   └── MySchedule.jsx
│   │   ├── UpcomingEvents
│   │   │   └── UpcomingEvents.jsx
│   ├── Services
│   │   └── Json
│   │       ├── MyEvents.json
│   │       └── UpcomingEvents.json
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── App.css
└── package.json
```

---

## **Available Scripts**

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm build`

Builds the app for production to the `build` folder.

---

## **Technologies Used**

- **React.js** - For building the user interface.
- **Tailwind CSS** - For styling.
- **React Big Calendar** - For calendar functionality.
- **date-fns** - For date manipulation.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

If you have any questions, feel free to reach out:

- **Email:** techvenkats@gmail.com
- **GitHub:** [venkat-ui-dev](https://github.com/venkat-ui-dev/)
