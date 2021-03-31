$(document).ready(function(){
   
    $("#btnCreate").click(function(){
        const account=document.getElementById("AccountNum");
        const name=document.getElementById("CusName");
        const supplier=document.getElementById("Supplier");
        const data=account.value+" | "+name.value+" | "+supplier.value;
        if(account.value&&name.value&&supplier.value)
        {
            $("#menu").append('<li li class="list-group-item">'+data+'</li>');
        }
        
        
        document.getElementById("AccountNum").value="";
        document.getElementById("CusName").value="";
        document.getElementById("Supplier").value="";
        
    });
});