BEGIN TRANSACTION;
-- Current Import - drop previous if still present, recreate it and then insert from from loaded file
DROP TABLE IF EXISTS "06-0273-0466463-00_Current_Temp_Import";
CREATE TABLE IF NOT EXISTS "06-0273-0466463-00_Current_Temp_Import" (
	"Type"	TEXT,
	"Details"	TEXT,
	"Particulars"	TEXT,
	"Code"	TEXT,
	"Reference"	TEXT,
	"Amount"	REAL,
	"Date"	TEXT,
	"ForeignCurrencyAmount"	TEXT,
	"ConversionCharge"	TEXT
);
INSERT INTO "06-0273-0466463-00_Current_Temp_Import" 
(
	"Type",
	"Details",
	"Particulars",
	"Code",
	"Reference",
	"Amount",
	"Date",
	"ForeignCurrencyAmount",
	"ConversionCharge") 
VALUES (
	'Automatic Payment',
	'Watercare Serv Ltd',
	NULL,
	NULL,
	NULL,
	-72.78,
	'26/08/2022',
	NULL,
	NULL),
 ('Payment','Micaela Goldsmith','Mg','Psc','26-Aug',-120.0,'26/08/2022',NULL,NULL),
 ('Transfer','06-0273-0466463-01','Debit','Transfer','094021',-450.0,'24/08/2022',NULL,NULL),
 ('Direct Credit','Sharesies Nominee Li','Sharesies',NULL,'Dc482209',210.0,'24/08/2022',NULL,NULL);
-- ONLY EXECUTE TABLE ACTIONS if needed to rebuild the db - these will wipe any store data in the db-file performed on
DROP TABLE IF EXISTS "Transactions";
CREATE TABLE IF NOT EXISTS "Transactions" (
	"HomeTransUID"	INTEGER,
	"Type"	TEXT,
	"Details"	TEXT,
	"Particulars"	TEXT,
	"Code"	TEXT,
	"Reference"	TEXT,
	"Amount"	REAL,
	"Date"	TEXT,
	"ForeignCurrencyAmount"	TEXT,
	"ConversionCharge"	TEXT,
	"Card"	TEXT,
	"Processed_date"	TEXT,
	"Principal_balance"	TEXT,
	"Src_Acct"	TEXT,
	"Extracted_Date"	TEXT,
	"import_date"	TEXT,
	"import_src_file_type"	TEXT,
	PRIMARY KEY("HomeTransUID")
);
-- use the example insert statements to guide the import code generation 
INSERT INTO "Transactions" 
(
	"HomeTransUID",
	"Type",
	"Details",
	"Particulars",
	"Code",
	"Reference",
	"Amount",
	"Date",
	"ForeignCurrencyAmount",
	"ConversionCharge",
	"Card",
	"Processed_date",
	"Principal_balance",
	"Src_Acct",
	"Extracted_Date",
	"import_date",
	"import_src_file_type") 
VALUES 
(
	1,
	'Automatic Payment',
	'Watercare Serv Ltd',
	'null',
	'null',
	'null',
	-72.78,
	'26/08/2022',
	'null',
	'null',
	'N/A',
	'N/A',
	'N/A',
	'06-0273-0466463-00',
	'28/08/2022',
	'28/08/2022',
	'csv');
COMMIT;
