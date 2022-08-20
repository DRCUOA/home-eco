# home-eco
home eco app 

track what we are spending on food and household items
  store full transaction details
    create a sql database
      table for transctions (header details)
        trans-id (int) unique PK
        created-date
        last-update-date
        type (bool: online/offine)
        date (date: date and time of transaction)
        store (varchar 48): e.g. countdown/new world/pac'n'save) FK
        description (bool : weekly/adhoc)
      table for transaction (raw) details
        trans-details-id (int) unique PK
        created-date
        last-update-date
        trans-id (int) FK
        product-desc (varchar 255)
        product-price (varchar 32)
        product-qty-purchased (int)
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
    off-line-transactions
    

