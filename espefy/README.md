# **Espefy - Gift Box Website**

### Project Overview
**Espefy** is an **e-commerce website** that allows users to browse and purchase personalized gift boxes and chocolates. The website is a mix of a **Single Page Application (SPA)** and a **Multi-Page Application (MPA)**.

- **GiftBoxSPA**: A **Single Page Application (SPA)** that handles the interactive multi-step process of selecting a gift box, chocolates, and additional items.
- **E-commerce Features**: Users can browse products, select different options, and make purchases.

This project combines the responsiveness and smooth user experience of a SPA with the SEO and server-side benefits of an MPA. The front-end was built with **React** and **Tailwind CSS** for a highly responsive, component-based design with streamlined styling.

### Features
- **Authentication Flow**:
  - **Sign In**: Users can sign in with their credentials.
  - **Sign Up**: Users can create a new account.
  - **Forget Password**: Users can reset their passwords if they forget them.
  
- **Gift Box Selection (SPA)**:
  - A multi-step, dynamic gift box selection process.
  - Users can choose a gift box, chocolates, and additional items in a seamless, single-page flow.
  
- **Home Page (MPA)**:
  - Displays information about the website, products, and company, built using traditional multi-page routing.
  
- **404 Page (MPA)**:
  - A custom "Page Not Found" error page with an option to return to the homepage or contact support.

### Folder Structure
Here’s a brief overview of the key folders and files:

- **`public/`**: Contains static files like HTML, images, and the manifest for the app.
- **`src/`**: The source code of the app.
  - **`components/`**: Reusable UI components (buttons, inputs, modals).
  - **`layouts/`**: Layout components that define the structure of the app’s pages (e.g., authentication, selection layouts).
  - **`pages/`**: Top-level page components representing different routes like `Auth`, `GiftBoxSPA`, `HomePage`, and `NotFoundPage`.
  - **`App.js`**: Main component for handling routing and wrapping the app.
  - **`index.js`**: Renders the React app into the DOM.

### Important Files & Components:

#### **1. Authentication (Auth.jsx)**
- **SignIn, SignUp, ForgetPassword**: Three core components that handle user authentication.
- The `Auth.jsx` component toggles between these authentication views based on user actions.

#### **2. Gift Box Selection (GiftBoxSPA.jsx)**
- **Step-by-Step Selection (SPA)**: Users go through a multi-step selection process for picking a gift box, chocolates, and additional items.
- The flow is handled by updating the `step` state, with `BoxSelectionLayout`, `ChocolateSelectionLayout`, and `AdditionalItemsLayout` being rendered based on the current step.

#### **3. Home Page (HomePage.jsx)**
- **About Us Section**: Displays the information about the company or product.
- The **Header** and **NavBar** are included for navigation, with responsive styling.
  
#### **4. 404 Page (NotFoundPage.jsx)**
- Custom error page displayed when a user navigates to a non-existent route. It offers a button to go back home and contact support.

### Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/espefy.git
   cd espefy

