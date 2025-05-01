[Live Deployment](https://think-academies-demo-task.vercel.app/)

# North India Pollution Awareness Landing Page

A responsive, modern landing page built with React and Tailwind CSS to raise awareness about pollution issues in North India, providing air quality information, causes, impacts, and solutions.

## 📋 Project Overview

This project aims to:

- Present real-time air quality data for major North Indian cities
- Educate visitors about pollution causes and health impacts
- Showcase potential solutions and success stories
- Encourage public participation through newsletter subscriptions

## 🛠️ Tech Stack

- **React**: Front-end JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs
- **Lucide React**: Lightweight icon library with clean, consistent design
- **React Hooks**: For state management and component lifecycle

## 🔍 Features

- **Responsive Design:** Optimized for all device sizes from mobile to desktop
- **Interactive Elements:** City selector for AQI data, email subscription form
- **Modular Components:** Well-organized component structure for easy maintenance
- **Performance Optimized:** Efficient rendering with proper hook usage
- **Visual Appeal:** Modern design with consistent branding and color scheme
- **Accessibility:** Semantic HTML and proper contrast ratios

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd north-india-pollution-site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📈 Scalability Considerations

This project is designed for future growth and expansion:

### Front-end Scalability

- **Component Modularity:** Each section is isolated, making it easy to add, remove, or modify content
- **Reusable UI Elements:** Design patterns can be extended to new sections
- **Responsive Design:** Already optimized for all screen sizes
- **State Management:** Simple useState hooks can be replaced with Context API or Redux as complexity grows

### Feature Scalability

- **API Integration:** Ready for connection to real-time air quality data APIs
- **User Authentication:** Structure allows for adding user accounts and personalized experiences
- **Interactive Maps:** Can be integrated to show pollution hotspots
- **Multi-language Support:** Structure supports internationalization
- **Backend Integration:** Form submissions can connect to a backend for data collection

### Performance Scalability

- **Code Splitting:** Components are organized for potential lazy loading
- **Image Optimization:** Placeholder pattern ready for optimized images
- **Caching Strategy:** Structure supports implementing data caching

## 🐛 Debugging Process

When encountering issues in this application, follow this debugging workflow:

1. **Component Isolation:**

   - Identify which component is causing the issue
   - Test components in isolation using React Developer Tools

2. **State Management Debugging:**

   - Use React DevTools to inspect component state
   - Add console.logs to track state changes
   - Check for proper cleanup in useEffect hooks

3. **UI/Rendering Issues:**

   - Inspect the DOM using browser developer tools
   - Verify Tailwind classes are applying correctly
   - Test responsiveness across different viewport sizes

4. **Performance Optimization:**

   - Use React Profiler to identify rendering bottlenecks
   - Check for unnecessary re-renders
   - Verify event listener cleanup

5. **Form Submission Debugging:**

   - Validate form data before submission
   - Check network requests in browser developer tools
   - Verify error handling for form submissions

6. **Common Issue Solutions:**
   - Mobile menu not working: Check event handlers and state toggle
   - AQI data not showing: Verify data structure and component rendering logic
   - Layout breaks on specific devices: Check media query breakpoints
   - Images not loading: Verify paths and implement error fallbacks

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

---

Built with ❤️ for a cleaner North India
