export const RGBToHex = (rgba) => {
  // Choose correct separator
  let sep = rgba.indexOf(',') > -1 ? ',' : ' '
  // Turn "rgba(r,g,b)" into [r,g,b]
  rgba = rgba.substr(5).split(')')[0].split(sep)

  let r = (+rgba[0]).toString(16),
    g = (+rgba[1]).toString(16),
    b = (+rgba[2]).toString(16)

  if (r.length == 1) r = '0' + r
  if (g.length == 1) g = '0' + g
  if (b.length == 1) b = '0' + b

  return '#' + r + g + b
}
