# colors.re

[![Build Status](https://travis-ci.org/srsholmes/colors.re.svg?branch=master)](https://travis-ci.org/srsholmes/colors.re)
[![Coverage Status](https://coveralls.io/repos/github/srsholmes/colors.re/badge.svg?branch=master&service=github)](https://coveralls.io/github/srsholmes/colors.re?branch=master)

Terminal utility to display colours in your terminal written in reasonml. Very much inspired from [Chalk](https://github.com/chalk/chalk) and [Colors.js](https://github.com/Marak/colors.js), go check them out.

## Installation

Install the project:

`npm install colors.re --save`

And add the dependency to your bs-dependencies in `bsconfig.json`:

```json
"bs-dependencies": [
  "colors.re"
]
```

## Usage:

```
open Colors;

let redString = chnageColor(Red, "Red String");
let redBgString = chnageBackground(Red, "String with red background");
let modifyString = modify(Bold, "Bold String");

let myString =
  colors(
    ~color=White,
    ~modifier=Bold,
    ~bg=BgBlueBright,
    ~keywordOptions={colorType: Green, word: "my"},
    "this is my string"
  );

Js.log(myString); // White text with blue background, with highlighted word "my" in Green
```

Or using the utils.

```
open Colors_Utils;

let (<<) = Colors_Utils.compose;

let (>>) = Colors_Utils.pipe;

let composedStyle =
  Colors_Utils.bold
  << Colors_Utils.bgBlue
  << Colors_Utils.underline
  << Colors_Utils.green;

Js.log(
  composedStyle("This string will be bold, underlined with a blue background with green text")
);
```

## Types:

```
type color =
| Red
| Yellow
| Green
| Blue
| White
| Cyan
| Magenta
| BgBlack
| BgRed
| BgGreen
| BgYellow
| BgBlue
| BgMagenta
| BgCyan
| BgWhite
| BgRedBright
| BgGreenBright
| BgYellowBright
| BgBlueBright
| BgMagentaBright
| BgCyanBright
| BgWhiteBright;

type modifier =
| Reset
| Bold
| Dim
| Italic
| Underline
| Inverse
| Hidden
| Strikethrough;
```

## In Progress:

Support color detection.

## TODO:

* Unit Tests.
* Color conversions.
* 256/Truecolor support, need to finish support detection for this.
* Optimise performance.
* Publish to npm.
