public with sharing class lwcUtilityClass {
    @AuraEnabled(cacheable = true)
    public static List<Account> fetchAccounts(){
        return [SELECT Id,Name,Phone,Type,Industry,Rating,Website FROM Account LIMIT 10];
    }
}