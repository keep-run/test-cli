import path from 'path'
import os from 'os'

//工具跟路径
const toolRoot=path.resolve(__dirname,'../../') 

//工具包路径
const toolModules=path.resolve(toolRoot,'./node_modules')

export default{
    cliRoot:toolRoot,
    nodeModulesPath:toolModules,
    tempdir:path.join(os.homedir(),'.test-cli','temp'),
    registryServer:'http://registry.npmjs.lianjia.com:7001'
}