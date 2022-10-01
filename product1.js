var url =  window.location.href; //get href
var id = url.split('?')[1]; 
var listMahangInfo;
var listCategory;
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
                    var diva = '<li class=selected ><a href="product1.html?'+code+'">'+code+'</a></li>';
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
            var m100 = listMahangInfo[r]['m100'];
            var m200 = listMahangInfo[r]['m200'];
            var m300 = listMahangInfo[r]['m300'];
            var m400 = listMahangInfo[r]['m400'];
            var m500 = listMahangInfo[r]['m500'];
             
                 var diva = '<tr>'
                 +'<td>'+ngaykiem+'</td><td>'+mahang+'</td><td>'+somay+'</td><td>'+ca+'</td><td>'+ngaycatvai+'</td><td>'+phanloai+'</td><td>'+stt+'</td>'
                 +'<td>'+phanloai+'</td><td>'+somet+'</td><td>'+nguoikiem+'</td><td>'+m100+'</td><td>'+m200+'</td><td>'+m300+'</td><td>'+m400+'</td><td>'+m500+'</td>'
                 +'</tr>';
            $('#MahangInfo').append(diva);
        } 
    }
});