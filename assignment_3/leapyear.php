<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
    'items' => Array(
        'News' => '/WP23/assignment_3/index.php',
        'Add news item' => '/WP23/assignment_3/news_add.php',
        'Leap Year' => '/WP23/assignment_3/leapyear.php',
        'Simple Form' => '/WP23/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
?>
<script type="application/javascript" src="scripts/leapyear.js"></script>
<?php
include __DIR__ . '/tpl/body_start.php';

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $place = $_POST['place'];
    $welcome = 'Welcome ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '!';
    if($place == 'Groningen' || $place == 'groningen') {
        $p_welcome = 'Nice, you\'re from Groningen!';
    }
    else {
        $p_welcome = '';
    }
    $y2024 = $age + 1;
    $y2028 = $age + 5;
    $y2032 = $age + 9;
    $y2036 = $age + 13;
    $y2040 = $age + 17;
    $leap_table = '
<p>
    The next five leap years this will be your age!
</p>
<table>
    <thead>
    <tr>
        <th class="col-md-11">
            Year
        </th>
        <th class="col-md-1">
            Age
        </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>2024</td>
        <td>' . $y2024 . '</td>
</tr>
<tr>
    <td>2028</td>
    <td>' . $y2028 . '</td>
</tr>
<tr>
    <td>2032</td>
    <td>' . $y2032 . '</td>
</tr>
<tr>
    <td>2036</td>
    <td>' . $y2036 . '</td>
</tr>
<tr>
    <td>2040</td>
    <td>' . $y2040 . '</td>
</tr>
</tbody>
</table>';
} else {
    $welcome = '';
    $p_welcome = '';
    $leap_table = '';
}

?>

<h1>
    <?php echo $welcome; ?>
</h1>
<p>
    <?php echo $p_welcome; ?>
    <?php echo $leap_table; ?>
</p>




<form action="" method="post">
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Please enter your name.
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="age">Age</label>
            <input type="number" class="form-control" id="age" name="age">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Please enter your age as a number.
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email">
            <div class="invalid-feedback">
                Please provide a valid email adress.
            </div>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="place">Place of residence</label>
            <input type="text" class="form-control" id="place" name="place">
            <div class="invalid-feedback">
                Please provide a valid place name.
            </div>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
    </div>
    <button class="btn btn-primary" id="sub" type="button">Submit form</button>
</form>

<?php
include __DIR__ . '/tpl/body_end.php';
?>
