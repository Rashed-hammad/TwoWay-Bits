<<<<<<< HEAD
# TwoWay-Bits
=======
# BitsToNums

A small web app that converts numbers between **binary** and **decimal**, built with plain HTML, CSS, and JavaScript.

**Live demo:** _add your GitHub Pages link here_

![BitsToNums screenshot](screenshot.png)

## Features

- Binary → Decimal conversion
- Decimal → Binary conversion
- Mode toggle to switch between the two directions
- Input validation with clear error messages:
  - Empty input
  - Characters other than 0 and 1 (binary mode)
  - Non-digit characters (decimal mode)
  - Numbers too large to convert accurately
- Error states highlighted in red
- Responsive layout that works on phones and desktops
- Dark theme styled with CSS variables

## How it works

The conversions are written by hand, without `parseInt(value, 2)` or `toString(2)`.

**Binary → Decimal:** the string is reversed so the rightmost bit is at index 0. Each `1` at position `i` adds `2^i` to the result.

**Decimal → Binary:** the number is repeatedly divided by 2. Each remainder (0 or 1) is placed in front of the result until the number reaches 0.

Example: `13` → remainders 1, 0, 1, 1 → `1101`

## Limits

Inputs are limited to what JavaScript numbers can represent accurately:

- Binary input: up to 53 bits
- Decimal input: up to `Number.MAX_SAFE_INTEGER` (9007199254740991)

## Tech stack

- HTML5
- CSS3 (custom properties, flexbox, media queries)
- Vanilla JavaScript (no libraries or frameworks)

## Project structure

```
bitstonums/
├── index.html
├── style.css
├── main.js
└── README.md
```

## Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/bitstonums.git
   ```
2. Open the folder and double-click `index.html` in your browser.

No build step or dependencies required.

## Test examples

| Mode | Input | Output |
|---|---|---|
| Binary → Decimal | `1011` | `11` |
| Binary → Decimal | `11111111` | `255` |
| Decimal → Binary | `13` | `1101` |
| Decimal → Binary | `255` | `11111111` |

## Possible improvements

- Support very large numbers with `BigInt`
- Add hexadecimal and octal modes
- Convert live while typing
- Add a step-by-step breakdown of the conversion

## Author

Crafted by **Rashed**
>>>>>>> 95b2979 (Add the V1)
