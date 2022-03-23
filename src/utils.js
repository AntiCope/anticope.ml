export function getImageProxyUrl(url) {
    if (url == null) return null;
    return `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&resize_w=64&url=${url}`
}