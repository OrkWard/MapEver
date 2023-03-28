export function fetchSVG(path, ref) {
    fetch(path)
      .then(response => response.text())
      .then(svgString => {
        ref.innerHTML = svgString.trim();
      })
}