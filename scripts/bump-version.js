import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const pkgPath = resolve(process.cwd(), 'package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

const currentVersion = pkg.version || '0.0.0'
const parts = currentVersion.split('.').map((p) => parseInt(p, 10))

if (parts.length === 3 && parts.every((n) => !isNaN(n))) {
  parts[2] += 1
  pkg.version = parts.join('.')
} else {
  pkg.version = '0.0.1'
}

writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8')
console.log(`Bumped version from ${currentVersion} to ${pkg.version}`)

