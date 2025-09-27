# InputOfGrace

A flexible, reusable React input component for forms.  
Supports multiple states, variants, and sizes for easy integration.


---

## ✨ Features

- 🎨 **Custom input width** (`InputFieldWidth`)  
- 🔄 **Custom border radius** (`borderRadius`)  
- 📝 **Pre-filled value** (`fixedValue`)  
- 🏷️ **Label text** (`label`)  
- 💭 **Placeholder text** (`placeholder`)  
- ❓ **Tooltip/helper text** (`helperText`)  
- ❌ **Error message** (`errorMessage`)  
- 🚫 **Disabled state** (`disabled`)  
- ⚠️ **Invalid/error state** (`invalid`)  
- 🎯 **Input variants**: `outlined`, `filled`, `ghost`  

---

## 📦 Installation

```bash
npm install @saurabhkumar/input-of-grace
```

---

## 🚀 Step-by-Step Usage

### 1. Import the component

```jsx
import { InputOfGrace } from '@saurabhkumar/input-of-grace';
```

### 2. Basic usage

```jsx
<InputOfGrace
  label="Name"
  placeholder="Enter your name"
/>
```

### 3. Custom width and border radius

```jsx
<InputOfGrace
  label="Email"
  placeholder="Enter your email"
  InputFieldWidth="300px"
  borderRadius="10px"
/>
```

### 4. Pre-filled value

```jsx
<InputOfGrace
  label="Username"
  fixedValue="Tarnished"
  placeholder="Enter username"
/>
```

### 5. Helper text and error message

```jsx
<InputOfGrace
  label="Password"
  placeholder="Enter password"
  helperText="Use at least 8 characters"
  errorMessage="Password is too short"
/>
```

### 6. Variants and states

```jsx
{/* Outlined variant */}
<InputOfGrace
  label="Outlined input"
  variant="outlined"
/>

{/* Filled variant */}
<InputOfGrace
  label="Filled input"
  variant="filled"
/>

{/* Ghost variant */}
<InputOfGrace
  label="Ghost input"
  variant="ghost"
/>

{/* Disabled state */}
<InputOfGrace
  label="Disabled input"
  disabled={true}
/>

{/* Invalid/Error state */}
<InputOfGrace
  label="Invalid input"
  invalid={true}
  errorMessage="This field is required"
/>
```



---

## 🎮 Demo Mode

To test or modify the component locally:

### 1. Clone the repository:
```bash
git clone https://github.com/Saurabh209/input-of-grace.git
```

### 2. Install dependencies:
```bash
cd input-of-grace
npm install
```

### 3. Run the demo app:
```bash
npm run dev
```

This launches a local server where you can see InputOfGrace in action.  
Edit `InputOfGrace.jsx` or `src/index.js` to test changes in real-time.

---

## 📋 Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `InputFieldWidth` | `string` | `'100%'` | Input width, e.g., '100%', '300px' |
| `borderRadius` | `string` | `'6px'` | Border radius, e.g., '5px', '10px' |
| `fixedValue` | `string` | `''` | Pre-filled input value |
| `value` | `string` | `''` | Controlled input value |
| `label` | `string` | `''` | Input label text |
| `placeholder` | `string` | `''` | Placeholder text |
| `helperText` | `string` | `''` | Tooltip/helper text (shows ? icon) |
| `errorMessage` | `string` | `''` | Error message text |
| `disabled` | `boolean` | `false` | Disables the input field |
| `invalid` | `boolean` | `false` | Shows error state styling |
| `variant` | `'outlined' \| 'filled' \| 'ghost'` | `'outlined'` | Input visual variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| `onChange` | `function` | `() => {}` | Change event handler |
| `customClass` | `string` | `''` | Custom CSS classes for label |
| `className` | `string` | `''` | Additional CSS classes |

---

## 🎨 Visual Variants Guide

### Outlined
```jsx
<InputOfGrace variant="outlined" label="Outlined" />
```
- Clean border design
- White background
- Focus border color change

### Filled
```jsx
<InputOfGrace variant="filled" label="Filled" />
```
- Gray background
- Bottom border only
- Subtle background transitions

### Ghost
```jsx
<InputOfGrace variant="ghost" label="Ghost" />
```
- Transparent background
- Minimal styling
- Hover and focus effects

---

## 🔧 Advanced Examples

### Complete form field with all features:
```jsx
<InputOfGrace
  InputFieldWidth="100%"
  borderRadius="8px"
  label="Full Name"
  placeholder="Enter your full name"
  helperText="This will be displayed on your profile"
  errorMessage="Name must be at least 2 characters"
  invalid={nameError}
  variant="outlined"
  size="medium"
  value={name}
  onChange={(e) => setName(e.target.value)}
  customClass="font-semibold text-gray-700"
/>
```


## 📝 Notes

- **Tailwind CSS Required** — Ensure your project has Tailwind CSS installed and configured
- **React 16.8+** — Uses React Hooks, requires React 16.8 or higher
- **Accessibility** — Built with ARIA labels and keyboard navigation support

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

MIT © [Saurabh Kumar](https://github.com/Saurabh209)

---

**Made with ❤️ by Saurabh Kumar**