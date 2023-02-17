<?php
require_once 'vendor/autoload.php';
use kornrunner\Blurhash\Blurhash;

function image_resize($file_name, $width, $height, $crop=FALSE) {
    list($wid, $ht) = getimagesize($file_name);
    $r = $wid / $ht;
    if ($crop) {
    if ($wid > $ht) {
        $wid = ceil($wid-($width*abs($r-$width/$height)));
    } else {
        $ht = ceil($ht-($ht*abs($r-$w/$h)));
    }
    $new_width = $width;
    $new_height = $height;
    } else {
    if ($width/$height > $r) {
        $new_width = $height*$r;
        $new_height = $height;
    } else {
        $new_height = $width/$r;
        $new_width = $width;
    }
    }
    $source = imagecreatefromjpeg($file_name);
    $dst = imagecreatetruecolor($new_width, $new_height);
    imagecopyresampled($dst, $source, 0, 0, 0, 0, $new_width, $new_height, $wid, $ht);

    imagejpeg( $dst, $new_path = pathinfo($file_name)["dirname"]."/".pathinfo($file_name)["filename"]."_resized".".".pathinfo($file_name)["extension"] );
    return  $new_path;
}

    $image_paths = array(
        '../assets/img/homepage.jpg',
        '../assets/img/project_1.jpg',
        '../assets/img/project_2.jpg',
        '../assets/img/project_3.jpg',
        '../assets/img/project_4.jpg',
        '../assets/img/project_5.jpg',
        '../assets/img/project_6.jpg'
    );
    $hashes = array();
    $count = 0;
    foreach( $image_paths as $name => $image_path ){

        $client_image_location = $image_path;

        if (!file_exists($client_image_location)) {
            echo json_encode(array( "error" => true, "error_text" => "File does not exist." ));
            die();
        }

        if (!is_readable($client_image_location)) {
            echo json_encode(array( "error" => true, "error_text" => "File is not readable." ));
            die();
        }

        $resized_image = image_resize($client_image_location, 200, 200);


        $file = $resized_image;


        $image = imagecreatefromstring(file_get_contents($file));
        $width = imagesx($image);
        $height = imagesy($image);

        $pixels = [];
        for ($y = 0; $y < $height; ++$y) {
            $row = [];
            for ($x = 0; $x < $width; ++$x) {
                $index = imagecolorat($image, $x, $y);
                $colors = imagecolorsforindex($image, $index);

                $row[] = [$colors['red'], $colors['green'], $colors['blue']];
            }
            $pixels[] = $row;
        }

        $components_x = 4;
        $components_y = 3;
        $blurhash = Blurhash::encode($pixels, $components_x, $components_y);


        $hashes[ substr($image_paths[$count], 3) ] = $blurhash;
        unlink($resized_image);

        $count = $count + 1;
    };

    

    $res = json_encode(array( "hashes" => $hashes ), JSON_UNESCAPED_SLASHES);
    print_r ($res);

    $fp = fopen('../assets/img/img.json', 'w');
    fwrite($fp, $res);
    fclose($fp);

?>
