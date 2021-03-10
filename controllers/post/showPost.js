const fetch = require('node-fetch');

// logic to get all posts
const showPost = async (req, res) => {
  // get the query param
  const {id} = req.params;

  const BASE_URL = `https://dinotest.wpengine.com/?p=${id}`;
  
  try {
    await fetch(BASE_URL)
      .then(res => res.text())
      .then(text => {
        result = text;
      });
  } catch (error) {
      return res.status(500).json({
      response: {
        code: 500,
        message: 'Error: unable to find the post.',
      },
      data: error,
  });
  }
  return res.json({
      response: {
        code: 200,
        message: 'Success: post found.',
      },
      data: result,
  });
}

module.exports = showPost;
 