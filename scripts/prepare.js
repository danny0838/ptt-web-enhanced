import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {parseArgs} from 'node:util';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.dirname(__dirname);
const srcDir = path.join(ROOT, 'src');
const buildDir = path.join(ROOT, 'build');

function prepareChromium() {
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }
  fs.cpSync(srcDir, buildDir, {recursive: true});
  fs.renameSync(
    path.join(buildDir, 'manifest.chromium.json'),
    path.join(buildDir, 'manifest.json'),
  );
}

function main() {
  const args = parseArgs({
    options: {
      help: {
        type: 'boolean',
        short: 'h',
      },
      target: {
        type: 'string',
        default: 'chromium',
        short: 't',
      },
    },
  });

  if (args.values.help) {
    const usage = `\
Usage: node prepare.js [options ...]

Options:
  --help | -h      Display usage help.
  --target | -t    Target browser.
`;
    process.stdout.write(usage);
    process.exit(0);
  }

  switch (args.values.target) {
    case 'firefox': {
      break;
    }
    case 'chromium': {
      prepareChromium();
      break;
    }
    default: {
      throw new Error(`Unsupported target: ${args.values.target}`);
    }
  }
}

main();
