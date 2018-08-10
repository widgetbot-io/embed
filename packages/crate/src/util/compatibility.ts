const nativeRef = () => {
  const iframe = document.createElement('iframe')
  iframe.setAttribute('style', 'display: none !important')

  document.documentElement.appendChild(iframe)

  return iframe.contentWindow as Window & { [key: string]: any }
}

// MooTools overwrites the .bind() method, this will restore it
if ((window as any).MooTools) {
  const $window = nativeRef()
  Function.prototype.bind = $window.Function.prototype.bind
}
