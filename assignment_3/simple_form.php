<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP23/assignment_3/index.php',
        'Add news item' => '/WP23/assignment_3/news_add.php',
        'Leap Year' => '/WP23/assignment_3/leapyear.php',
        'Simple Form' => '/WP23/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<?php



if (isset($_GET['name'])) {
    $name = $_GET['name'];
    $place = $_GET['place'];
    $welcome = 'Welcome ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '!';
    if($_GET['place'] == 'Amsterdam') {
        $p_welcome = 'You\'re from the capital of the Netherlands!';
    }
    else {
        $p_welcome = 'You\'re from ' . htmlspecialchars($place, ENT_QUOTES, 'UTF-8') . '!';
    }
} else {
    $welcome = '';
    $p_welcome = '';
}

?>

<h1><?php echo $welcome; ?>
</h1>
<p>
    <?php echo $p_welcome; ?>
</p>
<div class="container">
    <form action="" method="get">
        <div class="row">
            <div class="form-group col-12">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>
            <div class="form-group col-12">
                <label for="place">Place</label>
                <input type="text" name="place" id="place" class="form-control">
            </div>
                <input type="submit" value="Submit">
        </div>
    </form>
</div>
<?php

include __DIR__ . '/tpl/body_end.php';
?>
