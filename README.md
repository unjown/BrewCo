# Brew & Co.

A responsive café website created by **Brewha Developers** as part of our Web Development course. The project combines HTML, CSS, JavaScript, Bootstrap, and JSON to build an interactive platform where customers can browse Brew & Co.'s menu, locate nearby branches, learn more about the café, and experience a simple online ordering process.

 **Live Website:** https://unjown.github.io/BrewCo/

---

## Project Summary

Brew & Co. was developed to provide customers with a centralized source of information about the café. Instead of searching through different social media platforms, visitors can conveniently access the menu, branch locations, contact details, company background, and ordering page from a single website.

The project also demonstrates front-end web development concepts such as responsive layouts, reusable components, JavaScript interactivity, and external JSON data handling.

---

## Site Navigation

| Page | Description |
|------|-------------|
| **Home** | Introduces Brew & Co., featured drinks, and quick access to the website's main sections. |
| **Menu** | Displays available beverages organized into different categories. |
| **Locations** | Shows Brew & Co. branches with search functionality and Google Maps integration. |
| **About** | Shares the café's story, values, and commitment to its customers. |
| **Contact** | Provides contact details, an inquiry form, and frequently asked questions. |
| **Order** | Allows users to browse products, search drinks, manage a shopping cart, and simulate checkout. |

---

## Technologies and Implementation

### Front-End Development

The website was developed using:

 HTML5
 CSS3
 JavaScript (ES6)
 Bootstrap 5
 Bootstrap Icons
 Google Fonts

### Styling

The interface uses a warm café-inspired color palette combined with responsive layouts and reusable UI components.

**CSS Files**

| File | Purpose |
|------|---------|
| `style.css` | Global styling, navigation, homepage, locations page, footer, reusable components, and responsive layouts. |
| `order.css` | Product cards, shopping cart, checkout interface, search bar, and order page responsiveness. |
| `contact.css` | Contact page layout, information cards, inquiry form, FAQ section, and success notifications. |

---

## Interactive Features

JavaScript is used throughout the project to create a more dynamic browsing experience.

### Main Website (`index.js`)

 Displays the café's opening status based on the current time.
 Adds reveal animations while scrolling.
 Loads branch information from JSON.
 Searches and filters branch locations.
 Updates the embedded Google Map based on the selected branch.

### Ordering System (`order.js`)

 Loads menu items from `products.json`.
 Displays products dynamically.
 Searches drinks instantly.
 Adds products to the shopping cart.
 Updates item quantities.
 Calculates the total order price.
 Stores cart data using Session Storage.
 Displays checkout confirmation and success dialogs.

### Contact Page (`contact.js`)

 Validates required fields.
 Tracks the message character count.
 Displays successful submission notifications.
 Resets the form after submission.

---

## Data Files

The project separates its content from the webpage by using JSON.

### `products.json`

Contains:

 Product categories
 Drink names
 Descriptions
 Prices
 Product images

Current categories include:

 Espresso
 Matcha
 Non-Coffee
 Frappes

### `branch.json`

Contains:

 Branch names
 Cities
 Addresses
 Contact numbers
 Operating hours

Current branch locations:

 Quezon City
 España
 Valenzuela
 Tondo
 Calamba

---

## Project Organization

```text
BrewCo/
│
├── index.html
├── README.md
│
├── css/
│   ├── style.css
│   ├── order.css
│   └── contact.css
│
├── data/
│   ├── branch.json
│   └── products.json
│
├── img/
│   └── Website images and product assets
│
├── js/
│   ├── index.js
│   ├── order.js
│   └── contact.js
│
└── pages/
    ├── about.html
    ├── contact.html
    ├── location.html
    ├── menu.html
    └── order.html
```

---

## Version Control

Git was used throughout the development process to organize changes, track progress, and support collaboration among team members.

Basic commands used during development include:

```bash
git init
git add .
git commit -m "Initial project setup"
```

The complete commit history can be viewed using:

```bash
git log --oneline --graph --all
```

---

## Publishing the Website

The project is hosted using **GitHub Pages**.

Deployment steps:

1. Push the repository to GitHub.
2. Open **Repository Settings**.
3. Navigate to **Pages**.
4. Select **Deploy from a branch**.
5. Choose the **main** branch and **/(root)** folder.
6. Save the configuration.

---

## Development Team

**Brewha Developers**

| Role | Member |
|------|--------|
| Lead Developer | Windale Lorenz Tan |
| Lead UI Designer | Christian Miguel Santos |
| Lead UX Designer | Cassandra Espino |
| Lead Tester | Angelo Russel Acosta |

---

## Future Development

Possible enhancements for future versions include:

 User account registration
 Online payment integration
 Customer reviews and ratings
 Loyalty rewards
 Order history
 Reservation system
 Administrative dashboard
 Database integration

---

## Disclaimer

This project was created for educational purposes as part of a Web Development course. Brew & Co. was developed to demonstrate responsive web design, JavaScript interactivity, data-driven content using JSON, and collaborative development through Git and GitHub.
