# Cyberpunk CSS Integration for WebSignal

This folder contains the cyberpunk CSS framework and integration files for the WebSignal project.

## Files Structure

```
styles/cyberpunk/
├── cyberpunk.css          # Main cyberpunk CSS framework
├── cyber-grid.css         # Grid system for layout
├── cyberpunk-integrated.css # Integration styles for WebSignal
├── helper.js              # JavaScript helper functions
├── img/                   # Cyberpunk images and tiles
│   ├── tile1.jpg
│   ├── tile2.jpg
│   ├── tile3.jpg
│   ├── tile4.jpg
│   └── ... (other images)
└── README.md              # This file
```

## How to Include in HTML

### Option 1: Include All Files (Recommended)
Add these lines to your HTML `<head>` section:

```html
<!-- Cyberpunk CSS Framework -->
<link rel="stylesheet" href="styles/cyberpunk/cyberpunk.css">
<link rel="stylesheet" href="styles/cyberpunk/cyber-grid.css">
<link rel="stylesheet" href="styles/cyberpunk/cyberpunk-integrated.css">

<!-- Cyberpunk JavaScript Helper -->
<script src="styles/cyberpunk/helper.js"></script>
```

### Option 2: Include Only Integration File
If you want to use only the integrated styles:

```html
<link rel="stylesheet" href="styles/cyberpunk/cyberpunk-integrated.css">
```

## Available Classes and Components

### Buttons
- `.cyber-button` - Standard cyberpunk button
- `.cyber-button-big` - Large cyberpunk button
- `.cyber-button-small` - Small cyberpunk button

### Tiles
- `.cyber-tile` - Standard tile container
- `.cyber-tile-big` - Large tile container
- `.cyber-tile-small` - Small tile container

### Colors
- `.bg-yellow`, `.bg-cyan`, `.bg-red`, `.bg-purple`, `.bg-blue`, `.bg-green`
- `.fg-yellow`, `.fg-cyan`, `.fg-red`, `.fg-purple`, `.fg-blue`, `.fg-green`

### Effects
- `.cyberpunk-neon` - Neon text glow effect
- `.cyberpunk-glitch` - Glitch animation effect
- `.cyberpunk-razor` - Razor scan line effect

### Typography
- `.cyber-h` - Cyberpunk headings
- `.cyberpunk-font-og` - Original cyberpunk font

## Usage Examples

### Basic Button
```html
<button class="cyber-button bg-blue fg-white">
    Click Me
    <span class="glitchtext">_error;</span>
</button>
```

### Tile with Image
```html
<div class="cyber-tile bg-purple fg-white">
    <img src="styles/cyberpunk/img/tile1.jpg" alt="Cyberpunk Tile">
    <label>Your content here</label>
</div>
```

### Neon Text
```html
<h1 class="cyber-h cyberpunk-neon fg-cyan">Cyberpunk Title</h1>
```

### Glitch Effect
```html
<span class="cyberpunk-glitch fg-red">Glitch Text</span>
```

## Integration with Existing Components

### Carousel Cards
Add cyberpunk classes to your existing carousel cards:

```html
<div class="carousel-card cyber-tile bg-dark fg-white">
    <!-- Your existing card content -->
</div>
```

### Text Blocks
Enhance your text blocks with cyberpunk styling:

```html
<div class="text-block cyberpunk-enhanced">
    <!-- Your existing text content -->
</div>
```

## Notes

- The framework includes custom fonts (BlenderProBook, Oxanium) that should be available in your `fonts/` directory
- All cyberpunk effects are designed to work with your existing neon color scheme
- The integration file provides smooth transitions between your existing styles and cyberpunk elements 