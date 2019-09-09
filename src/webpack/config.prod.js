import commonConfig from './commonConfig'

export default (args) => {
    args.mode="production"
    return commonConfig(args)
}