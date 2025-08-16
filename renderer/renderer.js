const editor = document.getElementById('editor')
editor.addEventListener('input', () => {
  console.log("Typed:", editor.value)
})
