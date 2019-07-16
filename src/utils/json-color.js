function supportsColor() {
  const onHeroku = truth(process.env.DYNO) ? true : false;
  const forceNoColor = truth(process.env.FORCE_NO_COLOR) ? true : false;
  const forceColor = truth(process.env.FORCE_COLOR) ? true : false;
  return !onHeroku && !forceNoColor || forceColor;
}

// also counts 'false' as false
function truth(it) {
  return it && it !== 'false' ? true : false;
}


const defaultColorMap = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

const defaultColors = {
  separator: 'yellow',
  string: 'green',
  number: 'magenta',
  boolean: 'cyan',
  null: 'red',
  key: 'white'
};

export const syntaxHighlight=  supportsColor() ? function syntaxHighlight(json, colors = defaultColors, colorMap = defaultColorMap, spacing = 2) { // thanks: https://stackoverflow.com/a/7220510/4151489
  if (typeof json != 'string') json = JSON.stringify(json, undefined, spacing);
  else json = JSON.stringify(JSON.parse(json), undefined, 2);
  return colorMap[colors.separator] + json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
    let colorCode = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) colorCode = 'key';
      else colorCode = 'string';
    } else if (/true|false/.test(match)) colorCode = 'boolean';
    else if (/null/.test(match)) colorCode = 'null';
    const color = colorMap[colors[colorCode]] || '';
    return `\x1b[0m${color}${match}${colorMap[colors.separator]}`;
  }) + '\x1b[0m';
} : function syntaxNoHighlight(json,  spacing = 2) {
  if (typeof json != 'string') json = JSON.stringify(json, undefined, spacing);
  else json = JSON.stringify(JSON.parse(json), undefined, 2);
  return json;
};