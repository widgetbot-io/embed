const gifCheck = (url: string) => {
    return url.includes('/a_') ? url.replace('webp', 'gif') : url
}

export default gifCheck
