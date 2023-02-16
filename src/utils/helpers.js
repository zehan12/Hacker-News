export function formatURL(url) {
  if (url) {
    return url.match(/:\/\/(.[^\/]+)(.*)/)[1];
  }
}