import path from 'path'
const pkgName = '/package.json'

export default {
    getPackage(appPath) {
        return require(path.join(appPath, pkgName))
    }
}