import {readFileSync} from 'node:fs'
import {fileURLToPath} from 'node:url'

const packageJsonPath = fileURLToPath(new URL('../package.json', import.meta.url))
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
const minimumNodeVersion = packageJson.engines?.node
const requiredMajorVersion = Number(minimumNodeVersion?.match(/>=\s*(\d+)/)?.[1])
const currentMajorVersion = Number(process.versions.node.split('.')[0])

if (!Number.isInteger(requiredMajorVersion)) {
    console.error('The package must define a numeric minimum Node.js version in engines.node.')
    process.exitCode = 1
} else if (currentMajorVersion < requiredMajorVersion) {
    console.error(`Node.js ${minimumNodeVersion} is required. Detected ${process.version}.`)
    process.exitCode = 1
}
