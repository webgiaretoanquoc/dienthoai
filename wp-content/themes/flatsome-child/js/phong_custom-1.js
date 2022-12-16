jQuery.noConflict();
jQuery(window).load(function(){

	jQuery('#sell_prepay').on('change', function(event) {
		mycheck();
	});
	jQuery('#sell_period').on('change', function(event) {
		mycheck();
	});

});

function mycheck(){
	var tien= jQuery("#sell_prepay").val();
		var tg = jQuery("#sell_period").val();
		var giasp = jQuery("#dst_giasp").val();
		var data = {
         'action': 'sb_test_ajax',
         'tien':tien,
         'tg':tg,
         'giasp':giasp,
        
         };

            
            jQuery.post(theme_name_ajax.url, data, function(text){
            
            //alert('Chúc mừng bạn đã mua hàng thành công!');
            jQuery("#ketqua").html(text);
            
            });
}