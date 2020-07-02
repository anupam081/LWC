
({
    handleClick: function(cmp, event, helper) {
        var payload = {
            recordId: "some string",
            recordData: {
                value: "some value"
            }
        };
        cmp.find("sampleMessageChannel").publish(payload);
    }
})