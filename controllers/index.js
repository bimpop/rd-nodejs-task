// landing page controller
const index = (req, res) => {
    res.status(200).json({
      response: {
        code: 200,
        message: 'Welcome to My Reason Digital Solution! To access the Post routes, ensure you register then login to get your authorization token.',
      },
    });
  };
  
  // our default / customised error page
  const errorPage = (req, res) => {
    res.status(404).json({
      response: {
        code: 404,
        message: 'You have reached the end of the internet! :-)',
      },
    });
  };

  module.exports = {index, errorPage};
