# Booked - Beauty & Wellness Booking Platform

A modern, responsive React application for booking beauty and wellness appointments. Built with React, Tailwind CSS, and React Router.

## 🎯 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Discovery**: Browse and filter thousands of beauty and wellness services
- **Easy Booking**: Intuitive appointment booking process
- **Testimonials**: Customer reviews and ratings
- **Mobile App Download**: Direct links to iOS and Android apps
- **SEO Optimized**: Best practices for search engine visibility

## 📋 Project Structure

```
src/
├── components/
│   ├── Navbar/          # Navigation bar with mobile menu
│   ├── main/            # Hero/Landing section
│   ├── footer/          # Footer with links and social media
│   └── Circle/          # Decorative circle component
├── pages/
│   ├── work.jsx         # How it works section
│   ├── popular.jsx      # Popular services showcase
│   ├── Features.jsx     # Why choose us features
│   ├── Client.jsx       # Customer testimonials
│   └── appointment.jsx  # App download CTA section
├── App.js              # Main app component with routing
├── App.css             # Global component styles
├── index.css           # Global styles and Tailwind
└── index.js            # React entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#005EB8` - Main actions and highlights
- **Secondary Red**: `#D32F2F` - CTAs and important elements
- **Accent Orange**: `#FFA700` - Secondary highlights
- **Background**: `#F6F6F6` - Light backgrounds
- **Dark**: `#333333` - Text and dark elements

### Typography
- **Font Family**: Inter (via Tailwind)
- **Headings**: Bold, various sizes (responsive)
- **Body**: Regular weight, clean and readable

### Components

#### Navbar
- Sticky navigation with branding
- Responsive mobile menu
- CTA button for booking
- Links to all main sections

#### Hero Section (Main)
- Eye-catching headline
- Subtext and value proposition
- Dual CTA buttons
- Statistics showing platform scale
- Decorative circles

#### How It Works (Work)
- 4-step process visualization
- Clear descriptions
- Step indicators
- Connector lines (desktop)

#### Popular Services (Popular)
- 3x2 grid of service cards
- Service images (emoji placeholders)
- Ratings and reviews
- Price ranges
- Quick book buttons

#### Features Section
- 6 key feature highlights
- Icons and descriptions
- Hover effects
- Call-to-action

#### Testimonials (Client)
- Carousel slider
- Customer profiles
- Ratings display
- Navigation buttons
- Thumbnail navigation

#### App Download (Appointment)
- Beautiful gradient background
- App benefits listing
- Google Play and App Store badges
- Mobile-responsive layout

#### Footer
- Company information
- Multiple link sections
- Contact details
- Social media links
- Copyright information

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px (sm)
- **Tablet**: 641px - 1024px (md)
- **Desktop**: 1025px + (lg)

## 🎭 Customization Guide

### Changing Colors

Edit the color values in component files. All primary colors are defined using Tailwind classes:

```jsx
// Primary Blue
className="bg-[#005EB8]"

// Secondary Red
className="bg-[#D32F2F]"

// Accent Orange
className="bg-[#FFA700]"
```

### Updating Content

1. **Homepage Text**: Edit `src/components/main/main.jsx`
2. **Services**: Update `src/pages/popular.jsx` array
3. **Features**: Modify `src/pages/Features.jsx`
4. **Testimonials**: Edit `src/pages/Client.jsx` array
5. **Navigation Links**: Update `src/components/Navbar/Navbar.jsx`
6. **Footer Links**: Modify `src/components/footer/Footer.jsx`

### Adding Images

1. Place images in `public/images/`
2. Reference in components: `src="/images/filename.png"`
3. Current placeholder locations:
   - `/images/mainPic.png` - Hero section image
   - `/images/phone.png` - App section image
   - Service images in Popular section (currently using emojis)

### Custom Styling

Add custom CSS in `src/App.css` or `src/index.css`. Tailwind CSS is pre-configured for utility-first styling.

## 📦 Dependencies

- **react**: ^18.3.1 - UI library
- **react-dom**: ^18.3.1 - React DOM rendering
- **react-router-dom**: ^6.27.0 - Client-side routing
- **react-icons**: ^5.3.0 - Icon library
- **tailwindcss**: ^3.4.14 - Utility-first CSS framework

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Create production build
npm build

# Run tests
npm test

# Eject (not reversible!)
npm eject
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance Optimizations

- Lazy loading components
- Optimized images
- CSS minification
- Code splitting with React Router
- Responsive images and media queries

## 🔒 Security

- No sensitive data in frontend
- HTTPS recommended for production
- Input validation on forms
- XSS protection via React

## 📞 Support

For issues or questions, please contact support@booked.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for utility-first CSS
- React Icons for beautiful icons
- All the wonderful open-source contributors

---

**Last Updated**: January 2025

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
