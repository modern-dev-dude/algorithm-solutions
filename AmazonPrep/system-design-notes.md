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
#### Durability 
  commited transaction is written to non-volitile storage. It will not be undone in the event of crash, powerloss, or network partition




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