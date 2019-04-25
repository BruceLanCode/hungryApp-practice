module.exports = async (req, res, renderer, template) => {
  res.headers['Content-Type'] = 'text/html'
  const context = {
    url: req.path
  }

  try {
    const appString = await renderer.renderToString(context)

    
  } catch (err) {
    console.log('render error', err)
    throw err
  }
}
