import fetch from 'node-fetch'
import request from 'request'
import fs from 'fs-extra'
import chalk from 'chalk'
import path from 'path'
import MineConfig from '../config/mine'


const RegistryServer = MineConfig.registryServer;
const tempDir = MineConfig.tempdir;

export const helper = 'test-cli init [projectName]'


const projectMap = {
    "redskull-demo": '@lianjia/redskull-demo',
    'react-pro': '@lianjia/reactProTemplate',
}


const getDetail = async (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json()).then(json => resolve(json)).catch(err => {
            console.log(chalk.red(err))
            process.exit(1)
            reject(err)
        })
    })

    // return new Promise((resolve, reject) => {
    //     request(url, (err, response, body) => {
    //         try {
    //             resolve(JSON.parse(body))
    //         } catch (ex) {
    //             reject(ex)
    //         }
    //         resolve(null)
    //     })

    // })
}


//获取模板的最新地址
const getLatestDownload = async (pkgName) => {
    const reqUrl = `${RegistryServer}/${pkgName}`
    const detail = await getDetail(reqUrl)    // detail返回的是表征该模板的一个对象
    if (!detail) {
        console.err(`${pkgName} is not found`)
        return null
    }
    const latestVersion = detail['dist-tags'].latest
    return detail.versions[latestVersion].dist.tarball
}

// 下载模板
const downloadPkg=async (url,targetUrl)=>{

}

export default async (props) => {
    const project = props._[1]
    const template = projectMap[project]
    if (!template) {
        console.log(chalk.red(`${project} is not found`))
        process.exit(1)
    }
    console.log('start resolve ......')
    const downUrl = await getLatestDownload(template)
    console.log('downUrl', downUrl)
    if (downUrl) {
        const distDirTemp = path.join(tempDir, project)
        await fs.remove(distDirTemp);
        console.log(chalk.green(`loading from ${downUrl}`))
        
        const distDir=await downloadPkg(downUrl,distDirTemp)

        console.log('------------', distDirTemp)
    }
    require('../config/mine')
}