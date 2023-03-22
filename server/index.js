const express = require('express');
const app = express();
const path = require('path')
const axios = require('axios');
require('dotenv').config();
const api = require('../config.js');

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/product', (req, res, next) => {
  let options = {
    'url': api.testURL,
    'method': 'get',
    'headers': {
      'Authorization': api.TOKEN
    }
  }

  axios.request(options).then((data) => {
    // console.log(data.data);
    res.send(data.data);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(404);
  })
});

app.get('/styles', (req, res, next) => {
  let options = {
    'url': api.URL + req.query['productID'] + '/styles',
    'method': 'get',
    'headers': {
      'Authorization': api.TOKEN
    }
  };

  axios.request(options)
  .then((styleData) => {
    console.log(styleData.data);
    res.send(styleData.data.results);
  })
  .catch((err) => {
    res.sendStatus(400, err)
  })
});

app.get('/questions', async (req, res) => {
  let options = {
    'method': 'get',
    'url': api.QUESTIONS,
    'params': {
      'product_id': 71701
    },
    'headers': {
      'Authorization': api.TOKEN
    }
  }

  try {
    let questions = await axios.request(options);
    res.send(questions.data.results)
  } catch(err) {
    console.log(err);
  }
});

app.get('/reviews', (req, res, next) => {
  let options = {
    'url': api.REVIEWSURL,
    'params': req.query,
    'method': 'get',
    'headers': {
      'Authorization': api.TOKEN
    }
  }

  axios.request(options).then((data) => {
    res.send(data.data);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(404);
  })
});

app.get('/reviewsMeta', (req, res, next) => {
  let options = {
    'url': api.REVIEWSURL + 'meta',
    'params': req.query,
    'method': 'get',
    'headers': {
      'Authorization': api.TOKEN
    }
  }

  axios.request(options).then((data) => {
    res.send(data.data);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(404);
  })
});

app.get('/related', (req, res, next) => {
  let options = {

    //TODO: change this back when api.URL no longer hardcoded
    // 'url': api.URL + req.query['productID'] + '/related',
    'url': api.testURL + '/related',

    'method': 'get',
    'headers': {
      'Authorization': api.TOKEN
    }
  }

  axios.request(options).then((data) => {
    res.send(data.data);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(404);
  })
});

app.get('/relatedProduct', (req, res, next) => {
  let options = {
    'url': api.URL + req.query['productID'],
    'method': 'get',
    'headers': {
      'Authorization': api.TOKEN
    }
  }

  axios.request(options)
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    })
});

app.put('/reviewsHelpful', (req, res, next) => {
  let options = {
    'url': api.REVIEWSURL + req.query['reviewID'] + '/helpful',
    'method': 'put',
    'headers': {
      'Authorization': api.TOKEN
    }
  }

  axios.request(options)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    })
})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});