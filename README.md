# home-eco

High to Low Problem Statement

| PS  | L-1 | L-2 | L-3 | L-4 | L-5 |
| --- | --- | --- | --- | --- | --- |
| 1   |  track what we are spending on food and household items  |   |    |   |   |
|    |    |  store transaction details |    |   |   |
|    |    |   |   create a sql database  |   |   |
|    |    |   |    |  table for transctions (header details) |   |
|    |    |   |    |   |  trans-id (int) unique PK |
|    |    |   |    |   |  created-date |
|    |    |   |    |   |  last-update-date |
|    |    |   |    |   |  type (bool: online/offine) |
|    |    |   |    |   |  date (date: date and time of transaction) |
|    |    |   |    |   |  store (varchar 48): e.g. countdown/new world/pac'n'save) FK |
|    |    |   |    |   |  description (bool : weekly/adhoc) |
|    |    |   |    |   table for transaction (raw) details |   |
|    |    |   |    |   |   |
|    |    |   |    |   |   |
|    |    |   |    |   |   |
|    |    |   |    |   |   |
|    |    |   |    |   |   |
|    |    |   |    |   |   |
|    |    |   |    |   |   |

            
            
            
          
            trans-details-id (int) unique PK
            created-date
            last-update-date
            trans-id (int) FK
            product-desc (varchar 255)
            product-price (varchar 32)
            product-qty-purchased (int)
            attachments (text) - filepath
          table for products
            product-id (int) unique PK
            created-date
            last-update-date
            product-desc
            product-last-purchase-price
            last-purchase-trans-details-id
            assigned-to-spend-category
            product-spend-type (bool: true = essential spend, false = discreatinary spend) 
      load transaction data
        online-transactions
          CRUD individual trans
            html form trans
            api operations (CRUD) routing on form <> db
            fs package managment
          CRUD batch updates
            jsonify a batch file input into indivdual transaction json objs
            use api CRUD ops routing for ea individual object
          load receipts-pack-slips
            fs package management
        off-line-transactions
          enter individual trans
          enter batch trans
          load receipts-pack-slips    

