const parentStyle = `
  background: #fdc;
  width: 1000px;
  height: 600px;
  box-sizing: border-box;
  padding: 150px 200px;
`
const childStyle = `
  background: #cdf;
  width: 600px;
  height: 300px;
`
const parent = document.getElementById('parent')
const child = document.getElementById('child')
parent.style.cssText = parentStyle
child.style.cssText = childStyle