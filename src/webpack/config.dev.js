import commonConfig from './commonConfig'

export default (args) => {
    args.mode="development"
    return commonConfig(args)
}