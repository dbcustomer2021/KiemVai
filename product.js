var url =  window.location.href; //get href
var id = url.split('?')[1]; 
var listMahangInfo;
var listCategory;

$('#ulmenu li').click(function(e) {
    $('this').addClass('selected').siblings().removeClass('selected');
});

$.ajax({
    url: "https://hoangthongtelecom.com/KiemVaiLienA/getMaHang.php",
    data:{"id":"12345678"},
    type: 'POST',
    success: function (data) {
        listCategory = $.parseJSON(data);
        for (var r in listCategory) {
            var code = listCategory[r]['code'];
             var style =Number(listCategory[r]['style']);
             if(id ==code){
                if(style ==1){
                    var diva = '<li class=selected id='+code+'><a href="product1.html?'+code+'">'+code+'</a></li>';
               }else{
                   var diva = '<li class=selected id='+code+'><a href="product.html?'+code+'">'+code+'</a></li>';
               }
             }else{
                if(style ==1){
                    var diva = '<li id='+code+'><a href="product1.html?'+code+'">'+code+'</a></li>';
               }else{
                   var diva = '<li id='+code+'><a href="product.html?'+code+'">'+code+'</a></li>';
               }
             }
            
           
            $('#ulmenu').append(diva);
        } 
    }
});


$.ajax({
    url: "https://hoangthongtelecom.com/KiemVaiLienA/getMaHangInfo.php",
    data:{"mahang":id},
    type: 'POST',
    success: function (data) {
        listMahangInfo = $.parseJSON(data);
        for (var r in listMahangInfo) {
           
            var ngaykiem = listMahangInfo[r]['ngaykiem'];
            var mahang = listMahangInfo[r]['mahang'];
            var somay = listMahangInfo[r]['somay'];
            var ca = listMahangInfo[r]['ca'];
            var ngaycatvai = listMahangInfo[r]['ngaycatvai'];
            var stt = listMahangInfo[r]['stt'];
            var phanloai = listMahangInfo[r]['phanloai'];
            var somet = listMahangInfo[r]['somet'];
            var nguoikiem = listMahangInfo[r]['nguoikiem'];
            var daychonngan = listMahangInfo[r]['daychonngan'];
            var daychonngan1 = listMahangInfo[r]['daychonngan1'];
            var thua = listMahangInfo[r]['thua'];
            var thua1 = listMahangInfo[r]['thua1'];
            var latngangkhuc = listMahangInfo[r]['latngangkhuc'];
            var latngangkhuc1 = listMahangInfo[r]['latngangkhuc1'];
            var rutsoi = listMahangInfo[r]['rutsoi'];
            var rutsoi1 = listMahangInfo[r]['rutsoi1'];
            var doc = listMahangInfo[r]['doc'];
            var doc1 = listMahangInfo[r]['doc1'];
            var _do = listMahangInfo[r]['do'];
            var do1 = listMahangInfo[r]['do1'];
            var dau = listMahangInfo[r]['dau'];
            var dau1 = listMahangInfo[r]['dau1'];
            var note = listMahangInfo[r]['note'];

                 var diva = '<tr><td style="width:90px ;padding: 2px;">'+ngaykiem+'</td><td style="padding: 2px;">'+somay+'</td><td style="padding: 2px;">'+ca+'</td><td style="width:90px ;padding: 2px;">'+ngaycatvai+'</td><td style="padding: 2px;">'+stt+'</td>'
                 +'<td style="padding: 2px;">'+phanloai+'</td><td style="padding: 2px;">'+somet+'</td><td style="padding: 2px;">'+nguoikiem+'</td><td style="color: blue;padding: 2px">'+daychonngan+'</td><td style="color: red;padding: 2px">'+daychonngan1+'</td>'
                 +'<td style="color: blue;">'+thua+'</td><td>'+thua1+'</td><td style="color: blue;padding: 2px">'+latngangkhuc+'</td><td>'+latngangkhuc1+'</td><td style="color: blue;">'+rutsoi+'</td><td>'+rutsoi1+'</td>'
                 +'<td style="color: blue;">'+doc+'</td><td style="color: blue;">'+doc1+'</td><td>'+_do+'</td><td>'+do1+'</td><td style="color: blue;">'+dau+'</td><td>'+dau1+'</td><td>'+note+'</td>'
                 +'<td style="padding: 2px"><a href="#"><span class="material-symbols-outlined">delete</span></a><a></a></td></tr>';
            $('#MahangInfo').append(diva);
        } 
    }
});