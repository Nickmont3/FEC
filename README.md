# FEC - SCAMP

## Overview

This is the Frontend Capstone project for the clothing retailer Atelier (rebranded as Equinox Apparel). It utilizes JavaScript, React, Node, Express, CSS, HTML, and is deployed on AWS. Click on the banner for a surprise!

### Description

**Product Overview**

- Image gallery
- Product information
- Style selector
- Add to cart

This component will guide the customer through selecting a specific style and size to add to their cart. As such, portions of the Overview module, such as the image gallery and cart selection, will be specific to a SKU chosen as opposed to the overarching product.

**Related products**

- Related Items

The Related Items & Comparison module will display two sets of related products. The first set will be a list of products, determined internally, that are related to the product currently being viewed. The second set will be a list, custom created by the user, of products which the user has grouped with the current product into an 'outfit'.

**Questions and answers**

- Q&A

The Questions & Answers module will allow asking and answering of questions for the product selected. The functionality contained within this module can be divided into several pieces:

- View questions
- Search for a question
- Asking a question
- Answering a question

This component will extend the ability to view and search questions, ask questions, answer questions, and provide feedback on questions about the current product. All questions will be asked and answered per product. Specific styles will not be accounted for within the Questions & Answers module.

**Reviews**

- Reviews

The Ratings & Reviews module will allow viewing and submission of reviews for the product selected. The functionality contained within this module can be divided into several pieces:

- Write new review
- Reviews List
- Sorting
- Rating Breakdown
- Product Breakdown

This component will extend the ability to write, read, and browse through reviews for the current product. All reviews will be saved per product. Specific styles will not be accounted for within the review module.

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/Nickmont3/FEC.git
   ```
2. Install all required packages:

  ```shell
  npm install
  ```
3. Compile the client-side code with webpack:
  ```shell
  npm run client-dev
  ```
4. Start the server:

  ```shell
  npm run server-dev
  ```
  
5. Navigate to localhost:3000


Start the server
npm run server-dev
Navigate to localhost:3001
