global class BatchProcessor implements Database.batchable<SObject>,Database.AllowsCallouts {
    SObject[] source;
    global String STRCS;
 
    //hello again
    global BatchProcessor(SObject[] source , String StrCSV) {
        this.source = source;
        STRCS = StrCSV;
        System.Debug('It Came in Constructor');  
       
    }


    global Iterable<SObject> start(Database.BatchableContext bc) {
        BatchSObjectFeeder bf = new BatchSObjectFeeder(source);
        System.Debug('It Came in Start' + BC.getJobId());  
        return bf;
         
       
    }
    
    public void execute(Database.BatchableContext bc, SObject[] scope) {
        //insert scope;
       
       System.Debug('It Came in Execute' + BC.getJobId());  
       
       ctrlAdddataFromCSV.InsertValues(BC.getJobId(),STRCS );
    }
    
    global void finish(Database.BatchableContext bc) {
       
    }
}