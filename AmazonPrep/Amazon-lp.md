# LP

## Why amazon?

Amazon offers world class products built by some of the best engineers in the world. However, what really draws me to Amazon are the code of ethics they use to drive business desicions and build an incredible culture. Ever sinceI left the Army in 2019, I have looked for companies that not only have structure, but live and breathe these ethics day in and day out. In the Army every soildier at their core lived by a set of values know as the Warrior Ethos. These ethos are words to live by, and one of tham that speaks to me as an individual is "I will always place the mission first, I will never accept defeat." and I love the idea that Amazon uses their own set of values that give their employees agency to learn, experiment, and act. I feel that this is one of the reasons why Amazon proves themselves superior time and time again.

With these values in place, I feel that EC2 is a mutually benificial opportunity where I will get a chance to work with world class developers and work as hard as I can to help the teams get to the next level.

## Time that I failed

A few years back I was involved in a project that modernized the way Texans filed their personal and business state income taxes. One of the features I was directly responsible fore was building out the authentication mechinisums that connected 4 seperate web apps and two third party systems giving the application SSO capabilities. Before starting, I was asked by the pm for an estimate. My initial thought was 2 - 3 months. 1 month to implement and 1-2 months for debugging and dealing with any security issues that may be present in the environment.

I made the mistake when I was pressed by the pm for a shorter timeframe. I wanted them to be happy with my effort, so I obliged and told the PM three weeks. needless to say, the roll out was a complete failure. I ended up fixing the bugs, both front end  and back end,  found a security issue in internet explorer and built a workaround. Completing the feature in 6 weeks instead of 3.

Moving foward, I now added extra time for unknown variables that may arise from a customer because no two environments are the same. More importantly, I explain the risk involved with short time frames. Specifically, in the event that I get pushback about SDLC I will press the steakholders several times in several different ways to ensure I have been as clear as I can in setting expectations and timeframes in an effort to keep everyone on the same page.

## What is my weakness

My biggest weakness is my desire to make customers perfectly satisified with their products I develop.

In my experience it's crippiling to me because as I work though a task, I try to look through all the options that are available to solve the problem. For example, I built a CRM system for a local real estate company that was responsible for creating real-time data analytics over the past three years with a load of ~1 million transactions, displaying key stats for agents to eveluate their performance over their colleagues, allowing brokerages to communicate with local agents via email for reruiting and training efforts, and manage widgets that the end users could customize which stats were important to them.

During development my initial thought was to build an application eith SQL, Express, React, and Node using Next JS as a framework while serving it on Vercel. However, because I felt like there were better options for the data analytics and user profile management than using SQL I looked into using some cloud based options. Then once I learned that Azure, Google cloud platform, and Amazon all have their own implementations of services ment to handle those operations I went down the documentation rabbit hole and ended up choosing to use Googles Cloud Platform, Firebase. After that, I did a deep dive on their API's that expose data, user profiles, and cloud functions to a client. Lastly, I learned how to optimize the analytics by offloading the work to the cloud functions that polled the local realestate database every 15 minutes, add the deltas, and produce statistics for the web app to query.

The result was a CRM that cost ~20 dollars a month to maintain at full load of up to 8,000 users and that could scale by allowing the users to select a MLS they're affiliated to, authenticate, and display the data.

The problem was that all the research involved in making the product as flexible as possible while trying to achive perfection in the clients eye took a lot longer than I would have liked.

Since that experience, I try to keep more in the know on emerging technologies and design patterns through youtube university to lower the initial learning curve when a new project is started. Most recently I have been learning .NET and how blazor fits into the framework. Also, I recently deployed a basic Next JS app to Amazon Amplify to see how the Amplify CLI works.

## LP most likeley covered

### Customer  Obsession

Find what is most valuable to the customer then build

- React stock ticker
- web scrapper
  - customer did not want flat HTML for their records, they wanted to match the look and feel of the Income Tax site.

### Learn and Be  Curious

- contribute open source features and fixes to lear the M365 frameworks Featured in a monthly blog as a contributor
- learning Lyft framework for Deloitte
  - Learned the way their proprietary rame work under the hood
  - promoted from fixing CSS to being the FE Tech lead
  - Trained current and new devs on the framework best patterns and practices
  - added open office hours for anyone to come in and hash out a problem they're stuck on
  - was tasked with hiring full stack developes for deloitte
- user profile picture issues on O365
  - dove deep into api responses instead of just creating a ticket fopr MS support and passing it off
  - itendified that SharePoint O365 was the culprit
  - workede with Microsoft Tech support to resolve the blockage

### Deliver  Results

- IT helpdesk ticketing system
  - increased yearly completed tickets from 1,500 -> 4,500 in the first 12 months
  - served 35 technicians, 5000 end-users, and gave executive oversight through reporting  
  - used React and the build in SP REST API to handle authentication and list to manage the data in a similar way to SQL since we were restriced to no server side code

- stock tiecker

### Earn Trust

- Build a Kanban system for the development team that allowed us to track our progress and instilled trust in the steakholders by showing real data on how long tickets were open.  
- trained 20 employees for AIS on the M365 frameworks and APIs that allows the developer to extend Microsoft products
  - Employees were trained with the fundamental knowledge to achive the MS600 certification
  - Expanded AIS developer capabilities from just 2 employees who knew this tech stack to 22 employees who knows this tech stack
  - Showed AIS that I was a SME on the topic and was contacted for several extra projects beyond my normal contract increasing the work won by ~500k

### Have Backbone

### Disagree and Commit

### Ownership

### Invent & Simplify

- CMS System
- SOP for TQI
- reduced average time to delivery from 9 months to 2 months
- trained 6 developers on SOP, SDLC, and current PnP

### Dive Deep


### Questions asked by interviewer

- 