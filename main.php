<?php

function get_ip_arr()
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://api.hostmonit.com/get_optimization_ip',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => '{"key":"iDetkOys"}',
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
        ),
    ));
    $response = curl_exec($curl);
    curl_close($curl);
    $arr= json_decode($response,true);
    return $arr['info'];
}


$host_arr=[
    ['user_id'=>'a51e73de-c17d-43be-9f51-3acbdf59d35f','host'=>'worker-snowy-flower-75f0.qq976955017.workers.dev'],
    ['user_id'=>'3c46a4d8-1bd8-4b8c-a79a-eedfb9d0a184','host'=>'worker-wild-salad-5553.976955017.workers.dev']
];
$ip_arr=get_ip_arr();

$map_line=['CM'=>'移动','CU'=>'联通','CT'=>'电信'];

$str=''; $host_num=count($host_arr);$line_limit=1;
foreach($host_arr as $k0=>$host_obj){
    $host_key=$k0+1;
    $map_count=['CM'=>0,'CU'=>0,'CT'=>0];
    foreach($ip_arr as $k1=>$ip_obj){
         $line_name=$map_line[$ip_obj['line']];
         $line_num=++$map_count[$ip_obj['line']];
         if($line_num>1) continue;
         $name="美国CF节点{$host_key}-{$line_name}专线{$line_num}";
         $vlessMain = "vless://{$host_obj['user_id']}@{$ip_obj['ip']}:80?encryption=none&sni={$host_obj['host']}&fp=randomized&type=ws&host={$host_obj['host']}&path=%2F%3Fed%3D2048#$name";
         $str.=($vlessMain.PHP_EOL);
    }
}

file_put_contents('shadowrocket_base64.txt',base64_encode($str));