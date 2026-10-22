const requiredMajorVersion = 26
const currentMajorVersion = Number(process.versions.node.split('.')[0])

if (currentMajorVersion < requiredMajorVersion) {
    console.error(`Node.js ${requiredMajorVersion}+ is required. Detected ${process.version}.`)
    process.exitCode = 1
}
