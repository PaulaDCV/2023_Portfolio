# Job Vacancy Scraping

This project involves scraping job data from Indeed to collect a variety of job postings and then writing this data into a CSV file. The script allows the user to input a variety of job positions and a location to then obtain a CSV file including every job that appears in the search result. 

 The idea for this project is from the  Coursera Project Network and specifically stems from the 'Scrape Job Postings for Data Analysts' project available on Coursera. The initiative aims to enhance job vacancy sourcing within our recruitment agency through comprehensive data analysis. More details of the project can be found here:

     https://www.coursera.org/projects/scrape-job-postings-data-analysthttps://www.coursera.org/projects/scrape-job-postings-data-analyst 

## Methodology

### Selecting Job Posting Site

The first step was selecting the job site to be used, in this case, I chose Indeed as it has a large number of job postings in different fields and locations.

<u>URL template</u>: To scrape any website it is important to first understand the URL pattern as this will need to be changed depending on what kind of jobs are being searched for,  in this case, the Indeed template is the following:

        "https://uk.indeed.com/jobs?q=" + **Position**  + "&l=" + **Location** 

These are the two parameters used in the URL, location and position. 

- Location:  The physical location for the jobs. E.g: London

- Position: The type of job, E.g.: Data Analyst

### Tools used

Python libraries:

- Pandas: The job posting information is stored using dataframes.

- Scrapfly: Used to scrape the website, helped to overcome issues with the website blocking the requests. 

- BeautifulSoup: Used to process the HTML

### Processing Data

Once the list of jobs is obtained, data from each job is extracted manually:

- Title:  Name of the job 

- Href: Url  for the job posting 

- Location: Job Location 

- Company:  Company posting the Job

### CSV

Once all the data is processed, the data is saved as a CSV file

<img title="" src="file:///Users/pauladelcastillovivero/Documents/GitHub/Portfolio/public/Projects/JobVacancyScraping/csv.png" alt="">

The CSV file has the columns mentioned in Processing data as well as:

- Site: The site where the job was found. (Currently will always be Indeed)

- Position Search: The position parameter used when the job was found

- Location Search: The location parameter used when the job was found

## Running the script

To run the script the following parameters are needed:

- Position(List of strings): List including one or more positions to search for.

- Location(String): Location of the job listings to be searched.

- CSV(String, Default = "Search Result"): The name for the CSV file.

<u>E.g:</u>

**main(["data analysis", "software development"], "London",)**

    Returns job postings for <u>data analysis</u> and<u> software development</u> in <u>London</u>. A CSV     file named "SearchResults.csv" is generated.

**main(["Healthcare"] "Brighton","Search1)"**

     Returns job postings for <u>healthcare</u> positions in Brighton.  A CSV file named     "Search1.csv" is generated.

## Further Development:

Some ideas for developing the app further are the following:

- <u>Different websites </u>

    Currently only Indeed is used to obtain job listings, to further develop and broaden     the job search efficiency, an implementation including other websites such as     Glassdoor and Linkedin could be done.

- <u>Different Search options</u> 
  
  Each search is limited to one location, the following options would be useful to include positions from other options:
  
  1. Search for different job locations: Searching every job position in a variety of locations e.g: 
     
     Positions: "Data Analyst, Software development
     
     Locations: Brighton, London
     
     Returns<u> data analyst</u> jobs in <u>Brighton</u> and <u>London</u> as well as <u>software</u> <u>developer</u> jobs in <u>Brighton</u> and <u>London</u>
  
  2. Search for specific jobs in specific locations. Searching different jobs in different locations  e.g:
     
     Input 1: Data Analyst, London
     
     Input 2:  Software development, Brighton
     
     Returns <u>data analyst</u> jobs in <u>London</u> and <u>software development</u> in <u>Brighton</u>
