//Ajax通信練習
function test(){	
	var value = document.getElementById('item').value;
	console.log('選択したリストボックス：　' + value);
	
    // Ajax button click
        $.ajax({
        	timeout: 10000,
            url:'./',
            type:'POST',
            dataType: 'html',
            data:{
            	"staffid": value
            }
        })
        // Ajaxリクエストが成功した時発動
        .done( (responseData, status, jqXHR) => {
            $('.result').html(responseData);
             console.log(responseData);
             console.log('通信成功'); 
             // document.write(responseData);
             // location.load();
        })
        // Ajaxリクエストが失敗した時発動
        .fail( (responseData, status, jqXHR) => {
            $('.result').html(data);
            	// console.log(data);
            console.log('通信失敗');
        })
        
};

function test2(){	
	var value = document.getElementById('item').value;
	var data = {
			"staffid": value
	    };
    // Ajax button click
        $.ajax({
        	timeout: 10000,
            url:'./top',
            type:'POST',
            dataType: 'json',
            data:JSON.stringify(data), 
            contentType: 'application/json',
           // data : {"staffid": value }
        })
        // Ajaxリクエストが成功した時発動
        .done(function(json_data){
        	console.log(json_data);
            console.log('通信成功');
            
        })
        // Ajaxリクエストが失敗した時発動
        .fail( function(data){
        	 
            console.log('通信失敗');
        })
        
};

function test3(){	
	var value = document.getElementById('item').value;
	
    // Ajax button click
        $.ajax({
        	timeout: 10000,
            url:'./',
            type:'POST',
            dataType: 'text',
            data : {value}
        })
        // Ajaxリクエストが成功した時発動
        .done(function(data){
        	console.log(data);
            console.log('通信成功');
            
        })
        // Ajaxリクエストが失敗した時発動
        .fail(function(data){
        	 
            console.log('通信失敗');
        })
        
};