
//レコード削除確認画面
$(function() {
	// ダイアログの初期設定
	$("#mydialog").dialog({
		autoOpen : false, // 自動的に開かないように設定
		width : 700, // 横幅のサイズを設定
		modal : true, // モーダルダイアログにする
		buttons : [ // ボタン名 : 処理 を設定

		{
			text : 'キャンセル',
			click : function() {
				// ダイアログを閉じる
				$(this).dialog("close");
			}
		}, {
			text : '削除実行',
			click : function() {
				
				
				// submit実行
				$('#CheckboxTag').submit();	
				console.log('submit成功');
				// ダイアログを閉じる
				$(this).dialog("close");
			}
		} ]
	});

	$("#btn_action").click(function() {
		// ダイアログの呼び出し処理
		$("#mydialog").dialog("open");
	});
})

//レコード追加確認画面
$(function() {
	// ダイアログの初期設定
	$("#mydialog2").dialog({
		autoOpen : false, // 自動的に開かないように設定
		width : 700, // 横幅のサイズを設定
		modal : true, // モーダルダイアログにする
		buttons : [ // ボタン名 : 処理 を設定

		{
			text : 'キャンセル',
			click : function() {
				// ダイアログを閉じる
				$(this).dialog("close");
			}
		}, {
			text : '登録実行',
			click : function() {
				
				
				// submit実行
				$('#insertTag').submit();
				console.log('submit成功');
				// ダイアログを閉じる
				$(this).dialog("close");
				//window.location.href = '/'
			}
		} ]
	});

	$("#btn_action2").click(function() {
		// ダイアログの呼び出し処理
		$("#mydialog2").dialog("open");
	});
})

//保留
$(function() {
	// ダイアログの初期設定
	$("#newdialog").dialog({
		autoOpen : false, // 自動的に開かないように設定
		width : 300, // 横幅のサイズを設定
		height : 640,
		modal : true, // モーダルダイアログにする
		buttons : [ // ボタン名 : 処理 を設定

		{
			text : 'キャンセル',
			click : function() {
				// ダイアログを閉じる
				$(this).dialog("close");
			}
		}, {
			text : '新規登録',
			click : function() {
				// ダイアログを閉じる
				
				// submit実行
				$('#insertDB').submit();
				$(this).dialog("close");
			}
		} ]
	});

	$("#btn_action2").click(function() {
		// ダイアログの呼び出し処理
		$("#newdialog").dialog("open");
	});
})

//確認後、レコード追加サブミット
$(function() {
	// ダイアログの初期設定
	$("#insertDialog").dialog({
		autoOpen : false, // 自動的に開かないように設定
		width : 700, // 横幅のサイズを設定
		modal : true, // モーダルダイアログにする
		buttons : [ // ボタン名 : 処理 を設定

		{
			text : 'キャンセル',
			click : function() {
				// ダイアログを閉じる
				$(this).dialog("close");
			}
		}, {
			text : 'OK',
			click : function() {
				// ダイアログを閉じる
				// submit実行
				$('#CheckboxTag').submit();	
				console.log('submit成功');
				$(this).dialog("close");
			}
		}]
	});

	$("#btn_action").click(function() {
		// ダイアログの呼び出し処理
		$("#mydialog").dialog("open");
	});
})

//ajax利用
$(function() {
	$('#submit-new-period').click(saveForm);
});

function saveForm() {
	$.ajax({
		method : "POST",
		url : "/body8",
		data : $('#CheckboxTag').serialize(),
		success : function(status) {
			if (status) {
				// here you check the response from your controller and add your
				// business logic
			}
		}
	});
}