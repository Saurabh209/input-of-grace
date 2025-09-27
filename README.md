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
npm install input-of-grace
```

---

## 🚀 Step-by-Step Usage

### 1. Import the component

```jsx
import { InputOfGrace } from 'input-of-grace';
```
 
---
### 2. Complete form field with all features:
```jsx
 <InputOfGrace
              InputFieldWidth='300px'
              borderRadius='5px'
              fixedValue={""}
              label={""}
              placeholder={""}
              helperText={"  "}
              errorMessage={"Something wrong"}
              disabled={false}
              invalid={false}
              variant={'filled'}
            />
```


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




## 📝 Notes

- **Tailwind CSS Required** — Ensure your project has Tailwind CSS installed and configured
- **clsx Package Required** — Essential for dynamic className composition, used for conditional styling based on props and states
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