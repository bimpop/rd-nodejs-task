const fetch = require('node-fetch');

// logic to get all posts
const indexPost = async (req, res) => {
  const BASE_URL = 'https://dinotest.wpengine.com/wp-json/wp/v2/posts';
  let result = [];
  
  try {
    await fetch(BASE_URL)
      .then(res => res.json())
      .then(json => {
        result = json;
      });
  } catch (error) {
    return res.status(500).json({
      response: {
        code: 500,
        message: 'Error: unable to find posts.',
      },
      data: error,
    });
}


  let posts = [];

  result.forEach(post => {
    posts.push({
      id: post.id,
      title: post.title.rendered,
      createdAtGmt: post.date_gmt,
      updatedAtGmt: post.modified_gmt,
    });
  });

  return res.status(200).json({
      response: {
        code: 200,
        message: 'Success: posts found.',
      },
      data: posts,
  });
}

module.exports = indexPost;
