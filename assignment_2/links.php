<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => '/WP23/assignment_2/index.php',
        'Links' => '/WP23/assignment_2/links.php',
        'News' => '/WP23/assignment_2/news.php',
        'Future' => '/WP23/assignment_2/future.php'
    )
);
include __DIR__ . '/tpl/head.php';
/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
    <div class="col-md-12">
        <h1>Peruse these links at your leisure</h1>
    </div>
    <div class="col-md-12">
        <ul id="wikilinks">
            <li><a href="https://en.wikipedia.org/wiki/Bread">Bread</a></li>
            <li><a href="https://en.wikipedia.org/wiki/University_of_Groningen">University of Groningen</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Eibergen">Eibergen</a></li>
        </ul>
        <button class="btn btn-primary" id="fade">Fade list</button>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label>Link name</label>
                    <input id="linkName" type="text" class="form-control">
                    <div class="invalid-feedback">Please enter a name for your link</div>
                </div>
                <div class="form-group col-md-6">
                    <label>Url</label>
                    <input id="url" type="text" class="form-control">
                    <div class="invalid-feedback">Please enter a valid url</div>
                </div>
            </div>
            <button class="btn btn-primary" type="button" id="addToList">Add to list</button>
            <button class="btn btn-danger" type="button" id="delete">Delete</button>
        </form>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>