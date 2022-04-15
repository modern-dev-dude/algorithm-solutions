# System design reminders 
# Functional Requirements - MVP 
# Non functional requirements  - Scalability and resiliance 


## parking lot design
1. Define functional and non functional requirements 
1. What vehicles should we accomodate
2. is there 
3. DB molst likley to use
   - key-value store 
   - Fast read and writes
   - Easilly scalable 
   - can only store one key value pair unless you implement a parsing mechanisim
   - Not optimized for lookup. Lookup requires scanning the whole collection or creating separate index values

## AWS ELB
 - Application load balancer that can be run both in AWS and with third party architechture reducint the need for complex gateways and loadbalancers 
 - Easilly scalable to meet demand and reduce pricing

# Storage 
## Databases 
### AWS storage options 
| Type | Products  | Use Cases|
--- | --- | ---|
|Relational|AWS - Aurora, RDS, Redshift| Systems where relational data is needed like enterprise resource planning( ERP), CRM and e-commerce |
|Key - Value|Amazon DynamoDB|High traffic gaming and e-commerce |
|In-memory| ElastiChache MemoryDB for Redis |Chaching, session managment, gaming leaderboards, geospatial applications |
|Document|DocumentDB MongoDB|Unstructure data storages useful for user profiles, catalogs, content management|
|Wide-column|Amazon Keyspaces|High scale industrial apps for equipment, fleet management, and rout optimization. Highly scalable and available. Good for logs and other systesm with timestamps that are extreamly large in size|
|Graph|Amazon Neptune|Fraud detection, social networking, recommendation engines|
|Time series|Amazon Timestream|IoT, DevOps, and industrial telemetry|
|Ledger|Amazon Quantum Ledger DB (QLDB)|Systems of records, supply chains, registrations, banking transactions|

### DB 
- #### Atomicity 
  operations that show a transaction succeeding or failing, there is no in-between state
- #### Consistancy 
  Transactions should not bring DB to an invalid state. 
- #### Isolation 
  operations wether concurrant or individual transactions should behave the same way  
- #### Durability 
  commited transaction is written to non-volitile storage. It will not be undone in the event of crash, powerloss, or network partition
- #### Replication
  Replication is useful to allow lower latency and higher availability by maintainnig several versions of replicated data. The drawback is maintaining state of the DB servers in real time. 
- #### Shareding
  "Shards the DB into smaller partitions increasing throughput by pushing data to the shards and not dealing with unecessary data irrelavent to the operations. 




## Cache
### Key terms 
    - #### Last Recently Used (LRU) 
        Stratagy that removes/updates the lease recently used items stored in memory and typically implemented with linled list to increase the speed of lookup and updating
        a. Pros
            Fast lookup O(1)
            Fast updating O(1)
        b. drawbacks 
            Uses more memory typical implementation takeds O(n) space  
    - #### Least Frequently USed (LFU) 
        Store as hash maps, when new data comes in, look for least used and remove from cache. Typical uses are for static resources like CSS and imiges 
        a. Insert O(log n)
        b. Lookup O(log n)
        c. Delete O(log n)
    - #### First in First out (FIFO) 
        Removes the first item like unshift of the array
Using a LFU - FIFO combination can help increase performance by allowing the algorithm to not remove items that may be moved in the future.  

## Hashing
- #### Consistant hashing 
        Minimizes the amount of keys that need remappring and typically used by load balancers to distribute traffic to servers 
- ####  Rendezvous hashing
        Reffered to as heighst weight hashing to reduce down time when redistributing to servers when one goes down   
- #### SHA
        Secure hashing algorithms that are used to encrypt data at rest and in transit 





## LP
### Why amazon?
Amazon offers world class products built by some of the best engineers in the world. However, what really draws me to Amazon are the code of ethics they use to drive business desicions and build an incredible culture. Ever sinceI left the Army in 2019, I have looked for companies that not only have structure, but live and breathe these ethics day in and day out. In the Army every soildier at their core lived by a set of values know as the Warrior Ethos. These ethos are words to live by, and one of tham that speaks to me as an individual is "I will always place the mission first, I will never accept defeat." and I love the idea that Amazon uses their own set of values that give their employees agency to learn, experiment, and act. I feel that this is one of the reasons why Amazon proves themselves superior time and time again. 

With these values in place, I feel that EC2 is a mutually benificial opportunity where I will get a chance to work with world class developers and work as hard as I can to help the teams get to the next level.

### Time that I failed 
A few years back I was involved in a project that modernized the way Texans filed their personal and business state income taxes. One of the features I was directly responsible fore was building out the authentication mechinisums that connected 4 seperate web apps and two third party systems giving the application SSO capabilities. Before starting, I was asked by the pm for an estimate. My initial thought was 2 - 3 months. 1 month to implement and 1-2 months for debugging and dealing with any security issues that may be present in the environment. 

I made the mistake when I was pressed by the pm for a shorter timeframe. I wanted them to be happy with my effort, so I obliged and told the PM three weeks. needless to say, the roll out was a complete failure. I ended up fixing the bugs, both front end  and back end,  found a security issue in internet explorer and built a workaround. Completing the feature in 6 weeks instead of 3. 

Moving foward, I now added extra time for unknown variables that may arise from a customer because no two environments are the same. More importantly, I explain the risk involved with short time frames. Specifically, in the event that I get pushback about SDLC I will press the steakholders several times in several different ways to ensure I have been as clear as I can in setting expectations and timeframes in an effort to keep everyone on the same page.

### What is my weakness
My biggest weakness is my desire to make customers perfectly satisified with their products I develop. 

In my experience it's crippiling to me because as I work though a task, I try to look through all the options that are available to solve the problem. For example, I built a CRM system for a local real estate company that was responsible for creating real-time data analytics over the past three years with a load of ~1 million transactions, displaying key stats for agents to eveluate their performance over their colleagues, allowing brokerages to communicate with local agents via email for reruiting and training efforts, and manage widgets that the end users could customize which stats were important to them. 

During development my initial thought was to build an application eith SQL, Express, React, and Node using Next JS as a framework while serving it on Vercel. However, because I felt like there were better options for the data analytics and user profile management than using SQL I looked into using some cloud based options. Then once I learned that Azure, Google cloud platform, and Amazon all have their own implementations of services ment to handle those operations I went down the documentation rabbit hole and ended up choosing to use Googles Cloud Platform, Firebase. After that, I did a deep dive on their API's that expose data, user profiles, and cloud functions to a client. Lastly, I learned how to optimize the analytics by offloading the work to the cloud functions that polled the local realestate database every 15 minutes, add the deltas, and produce statistics for the web app to query. 

The result was a CRM that cost ~20 dollars a month to maintain at full load of up to 8,000 users and that could scale by allowing the users to select a MLS they're affiliated to, authenticate, and display the data.

The problem was that all the research involved in making the product as flexible as possible while trying to achive perfection in the clients eye took a lot longer than I would have liked. 

Since that experience, I try to keep more in the know on emerging technologies and design patterns through youtube university to lower the initial learning curve when a new project is started. Most recently I have been learning .NET and how blazor fits into the framework. Also, I recently deployed a basic Next JS app to Amazon Amplify to see how the Amplify CLI works. 

### LP most likeley covered 
**Customer  Obsession***
**Learn and Be  Curious***
**Deliver  Results***
**Earn Trust**
Have Backbone
Disagree and Commit
Ownership
Invent & Simplify
Dive Deep