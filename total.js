<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kiểm Vải</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" target="_blank" href="style.css?v=0.003">
    <script src="total.js" defer></script>

  </head>
  <body>
    <div class="container" style="margin-top: 10px">
      <div class="row">
         <div class="col-md-12">
          <div class="nav" style="float:right;">
            <ul> 
              <li class="selected"><a href="index.html">TOTAL</a></li> 
              <li ><a href="Chitiet.html">Chi Tiết</a></li> 
            </ul>
         </div>
         </div>
         <div class="col-md-12"> <hr></div>
      </div>
      
    </div>
  <div class="container">
      <table class="table table-bordered text-center" style="border: 1px;">
         <thead style="background-color: teal; color: white; font-size: 20px ; border: 2px;" >
          <tr>
            <th scope="col" rowspan="2" style="width: 150px;">Ngày</th>
            <th scope="col" rowspan="2" style="width: 250px;">Mã hàng</th>
            <th scope="col" colspan="3">Xếp loại</th>
            <th scope="col" rowspan="2" style="width: 150px;">Total Mét</th>
          </tr>
          <tr>
            <th scope="col" style="width: 50px;">A</th>
            <th scope="col" style="width: 50px;">B</th>
            <th scope="col" style="width: 50px;">C</th>
          </tr>
         </thead>
         <tbody class="table-group-divider" id="tableTotal">
           
          </tbody>
      </table>
    </div>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </body>
</html>
