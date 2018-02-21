# Recolor

Console colours for your terminal in reasonml. Very much inspired from [Chalk](https://github.com/chalk/chalk) and [Colors.js](https://github.com/Marak/colors.js), go check them out.

## Usage:

```
let myString =
  recolor(
    ~color=White,
    ~modifier=Bold,
    ~bg=BgBlueBright,
    ~keywordOptions={colorType: Green, word: "my"},
    "this is my string"
  );

Js.log(myString); // White text with blue background, with highlighted word "my" in Green
```

## Types:

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

## In Progress:

Support color detection.

## TODO:

Tests
256/Truecolor support, need to finish support detection for this.
Optimise performance.
