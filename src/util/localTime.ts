export default function getLocalTime(timeStamp: string): string{
    const date = new Date(Number(timeStamp))
    const timeFragments = date.toLocaleTimeString().split(":")
    return `${timeFragments[0]}:${timeFragments[1]}`

}
